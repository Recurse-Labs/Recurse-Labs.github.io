import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 * Cloudflare Web Analytics, loaded only from a real build on a real host.
 *
 * Inlined in index.html it also fires from localhost on every dev reload, which
 * fills the dashboard with our own traffic. Two guards avoid that:
 *
 *   import.meta.env.PROD  false under `vite dev`, so development is silent.
 *   isLocalHost           covers `vite preview` and any other local serving of
 *                         the built output, where PROD is already true.
 *
 * The beacon resolves its own config with
 * `document.currentScript || document.querySelector("script[data-cf-beacon]")`,
 * and currentScript is null for module scripts. Setting the attribute before
 * appending is what makes it find the token.
 *
 * The token is a public site identifier, not a secret.
 */
const isLocalHost = ["localhost", "127.0.0.1", "::1"].includes(
  window.location.hostname
);

if (import.meta.env.PROD && !isLocalHost) {
  const beacon = document.createElement("script");
  beacon.type = "module";
  beacon.src = "https://static.cloudflareinsights.com/beacon.min.js";
  beacon.dataset.cfBeacon = JSON.stringify({
    token: "e165379c2a7447f8ba36e018125c312c",
  });
  document.head.append(beacon);
}

const root = document.getElementById("root");
if (!root) throw new Error("missing #root");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
