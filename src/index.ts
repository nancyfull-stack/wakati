import { Hono } from "hono";

const app = new Hono();

app.get("/status", (c) => {
  return c.json({ meassge: "Service is running" });
});

app.get("/", (c) => {
  return c.html(``);
});

app.get("/calculate", (c) => {
  const text = c.req.query("text");
  const wpm = c.req.query("wpm");
  return c.json({ mesage: TextDecoder, wpm });
});

export default app;
