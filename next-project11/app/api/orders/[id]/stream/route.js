import { demoOrder } from "@/lib/orders";

const demoStatuses = ["Preparing", "Picked up", "On the way", "Delivered"];

export async function GET(request, { params }) {
  const { id } = await params;

  if (id !== demoOrder.id) {
    return Response.json({ error: "Order not found" }, { status: 404 });
  }

  const encoder = new TextEncoder();
  let index = Math.max(0, demoStatuses.indexOf(demoOrder.status));

  const stream = new ReadableStream({
    start(controller) {
      let closed = false;
      let timer;

      function send(data) {
        if (closed) return;

        controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
      }

      function close() {
        if (closed) return;

        closed = true;
        clearInterval(timer);
        request.signal.removeEventListener("abort", close);

        try {
          controller.close();
        } catch {}
      }

      function sendStatus() {
        if (closed) return;

        const currentStatus = demoStatuses[index];

        send({
          orderId: id,
          status: currentStatus,
          updatedAt: new Date().toISOString(),
        });

        if (currentStatus === "Delivered") {
          close();
          return;
        }

        index = (index + 1) % demoStatuses.length;
      }

      sendStatus();

      if (!closed) {
        timer = setInterval(sendStatus, 5000);
      }

      request.signal.addEventListener("abort", close, {
        once: true,
      });
    },

    cancel() {},
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
