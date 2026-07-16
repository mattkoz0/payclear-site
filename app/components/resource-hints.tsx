"use client";

import ReactDOM from "react-dom";

export function ResourceHints() {
  ReactDOM.preconnect("https://play.google.com", { crossOrigin: "anonymous" });
  ReactDOM.preconnect("https://apps.apple.com", { crossOrigin: "anonymous" });
  return null;
}
