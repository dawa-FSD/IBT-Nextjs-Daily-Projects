"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MapPanel from "./MapPanel";
import { etb, when, relative } from "@/lib/format";
import { toCsv, downloadCsv } from "@/lib/csv";

export default function TrackingClient({ order }) {
  const [status, setStatus] = useState(order.status);
  const [updatedAt, setUpdatedAt] = useState(order.placedAt);
  const [connection, setConnection] = useState("connecting");
  const [history, setHistory] = useState(order.history);
  const [now, setNow] = useState(null);

  // Update the current time in the browser, not during prerendering.
  useEffect(() => {
    setNow(Date.now());

    const timer = setInterval(() => {
      setNow(Date.now());
    }, 60_000);

    return () => clearInterval(timer);
  }, []);

  // Receive live order status updates.
  useEffect(() => {
    const source = new EventSource(`/api/orders/${order.id}/stream`);

    setConnection("connecting");

    source.onopen = () => {
      setConnection("live");
    };

    source.onmessage = (event) => {
      const update = JSON.parse(event.data);

      setStatus(update.status);
      setUpdatedAt(update.updatedAt);

      setHistory((previous) => {
        if (
          previous.length &&
          previous[previous.length - 1].status === update.status
        ) {
          return previous;
        }

        return [
          ...previous,
          {
            time: update.updatedAt,
            status: update.status,
          },
        ];
      });

      if (update.status === "Delivered") {
        setConnection("delivered");
        source.close();
      }
    };

    source.onerror = () => {
      if (source.readyState !== EventSource.CLOSED) {
        setConnection("reconnecting");
      }
    };

    return () => source.close();
  }, [order.id]);

  function exportHistory() {
    downloadCsv(toCsv(history), `order-${order.id}-history.csv`);
  }

  return (
    <main className="tracking-page">
      <nav className="tracking-nav">
        <Link className="brand" href="/">
          🍲 Addis Eats
        </Link>

        <Link className="back-link" href="/">
          ← Home
        </Link>
      </nav>

      <header className="tracking-heading">
        <div>
          <p className="eyebrow">ORDER {order.id}</p>
          <h1>Track your delivery</h1>
          <p className="muted">Your meal is making its way to you.</p>
        </div>

        <span
          className={`status-pill ${status === "Delivered" ? "success" : ""}`}
        >
          {status}
        </span>
      </header>

      <div className="tracking-grid">
        <section className="panel map-panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">LIVE LOCATION DEMO</p>
              <h2>Delivery map</h2>
            </div>

            <span className="map-dot" aria-hidden="true" />
          </div>

          <MapPanel courier={order.courier} destination={order.destination} />

          <div className="map-legend">
            <span>
              <i className="legend-dot courier-dot" />
              Courier · {order.courier.name}
            </span>

            <span>
              <i className="legend-dot destination-dot" />
              Destination
            </span>
          </div>

          <div className="address-box">
            <span className="address-icon" aria-hidden="true">
              ⌖
            </span>

            <div>
              <strong>Delivery destination</strong>
              <p>{order.address}</p>
            </div>
          </div>

          <p className="small-note">
            Map markers use example coordinates around Bole, Addis Ababa. They
            are not live GPS positions.
          </p>
        </section>

        <div className="right-column">
          <section className="panel status-panel">
            <p className="eyebrow">DELIVERY PROGRESS</p>
            <h2>Order status</h2>

            <p className="connection-line">
              <span className={`connection-dot ${connection}`} />
              Connection: <strong>{connection}</strong>
            </p>

            <div className="progress-list">
              {["Preparing", "Picked up", "On the way", "Delivered"].map(
                (step, index) => {
                  const steps = [
                    "Preparing",
                    "Picked up",
                    "On the way",
                    "Delivered",
                  ];

                  const currentIndex = steps.indexOf(status);
                  const done = currentIndex >= index;

                  return (
                    <div
                      className={`progress-step ${done ? "done" : ""}`}
                      key={step}
                    >
                      <span className="progress-check">
                        {done ? "✓" : index + 1}
                      </span>

                      <span>{step}</span>

                      {step === status && <small>Current</small>}
                    </div>
                  );
                },
              )}
            </div>

            <div className="update-box">
              <span>Last update</span>

              <strong>{when.format(new Date(updatedAt))}</strong>

              <small>
                {now === null ? "Loading..." : relative(updatedAt, now)}
              </small>
            </div>
          </section>

          <section className="panel order-panel">
            <p className="eyebrow">ORDER SUMMARY</p>
            <h2>Ethiopian Doro Wat</h2>
            <p className="muted">{order.restaurant}</p>

            <div className="summary-total">
              <span>Total</span>
              <strong>{etb.format(order.total)}</strong>
            </div>

            <div className="summary-row">
              <span>Order number</span>
              <strong>{order.id}</strong>
            </div>

            <div className="summary-row">
              <span>Order placed</span>
              <strong>{when.format(new Date(order.placedAt))}</strong>
            </div>
          </section>
        </div>

        <section className="panel history-panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUR ORDER ACTIVITY</p>
              <h2>Order history</h2>
            </div>

            <button className="secondary-button" onClick={exportHistory}>
              ↓ Export CSV
            </button>
          </div>

          <ul className="history-list">
            {history.map((item, index) => (
              <li key={`${item.status}-${index}`}>
                <span className="history-marker">{index + 1}</span>

                <div>
                  <strong>{item.status}</strong>
                  <p>{when.format(new Date(item.time))}</p>
                </div>
              </li>
            ))}
          </ul>

          <CsvUpload />
        </section>
      </div>

      <footer className="page-footer">
        Addis Eats · A learning project for delivery tracking
      </footer>
    </main>
  );
}

function CsvUpload() {
  const [message, setMessage] = useState("");
  const [fileText, setFileText] = useState("");

  async function handleFileChange(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      setMessage("File must be 2 MB or smaller.");
      setFileText("");
      event.target.value = "";
      return;
    }

    if (!file.name.toLowerCase().endsWith(".csv")) {
      setMessage("Please select a CSV file.");
      setFileText("");
      event.target.value = "";
      return;
    }

    try {
      const text = await file.text();

      setFileText(text);
      setMessage(
        `Read ${file.name} successfully (${text.length} characters). This demo reads the file but does not import rows into a database.`,
      );
    } catch {
      setFileText("");
      setMessage("Unable to read the file. Please try again.");
    }

    event.target.value = "";
  }

  return (
    <div className="upload-box">
      <label htmlFor="csv-upload">Import a CSV file</label>

      <input
        id="csv-upload"
        type="file"
        accept=".csv,text/csv"
        onChange={handleFileChange}
      />

      <p role="status">{message}</p>

      {fileText && (
        <details>
          <summary>Preview file text</summary>
          <pre>{fileText.slice(0, 1200)}</pre>
        </details>
      )}
    </div>
  );
}
