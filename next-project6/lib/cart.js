// Demo-only memory storage: resets when the server process restarts and is not shared reliably across serverless instances.
const globalForCart = globalThis;
if (!globalForCart.__addisEatsCart) globalForCart.__addisEatsCart = [];
export const cart = globalForCart.__addisEatsCart;
