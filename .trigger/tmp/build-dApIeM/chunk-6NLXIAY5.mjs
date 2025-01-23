import {
  init_esm
} from "./chunk-73K4F3H4.mjs";

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/common/BrowserWebSocketTransport.js
init_esm();
var BrowserWebSocketTransport = class _BrowserWebSocketTransport {
  static create(url) {
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(url);
      ws.addEventListener("open", () => {
        return resolve(new _BrowserWebSocketTransport(ws));
      });
      ws.addEventListener("error", reject);
    });
  }
  #ws;
  onmessage;
  onclose;
  constructor(ws) {
    this.#ws = ws;
    this.#ws.addEventListener("message", (event) => {
      if (this.onmessage) {
        this.onmessage.call(null, event.data);
      }
    });
    this.#ws.addEventListener("close", () => {
      if (this.onclose) {
        this.onclose.call(null);
      }
    });
    this.#ws.addEventListener("error", () => {
    });
  }
  send(message) {
    this.#ws.send(message);
  }
  close() {
    this.#ws.close();
  }
};

export {
  BrowserWebSocketTransport
};
//# sourceMappingURL=chunk-6NLXIAY5.mjs.map
