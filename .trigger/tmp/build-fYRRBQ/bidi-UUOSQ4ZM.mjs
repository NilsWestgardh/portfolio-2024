import {
  ARIAQueryHandler,
  Accessibility,
  AsyncIterableUtil,
  Browser,
  BrowserContext,
  CDPSession,
  CallbackRegistry,
  ConsoleMessage,
  Coverage,
  Deferred,
  Dialog,
  DisposableStack,
  ElementHandle,
  EmulationManager,
  EventEmitter,
  Frame,
  HTTPRequest,
  HTTPResponse,
  JSHandle,
  Keyboard,
  LazyArg,
  Mouse,
  MouseButton,
  Page,
  ProtocolError,
  PuppeteerURL,
  Realm,
  SOURCE_URL_REGEX,
  STATUS_TEXTS,
  SecurityDetails,
  Target,
  TargetCloseError,
  TargetType,
  TimeoutError,
  TouchError,
  Touchscreen,
  Tracing,
  UnsupportedOperation,
  WEB_PERMISSION_TO_PROTOCOL_PERMISSION,
  WebWorker,
  assert,
  bindIsolatedHandle,
  bubble,
  combineLatest,
  debug,
  debugError,
  defer,
  delayWhen,
  disposeSymbol,
  environment,
  evaluationString,
  filter,
  first,
  firstValueFrom,
  from,
  fromAbortSignal,
  fromEmitterEvent,
  getSourcePuppeteerURLIfAvailable,
  getSourceUrlComment,
  handleError,
  inertIfDisposed,
  interpolateFunction,
  invokeAtMostOnceForArguments,
  isDate,
  isErrorLike,
  isPlainObject,
  isRegExp,
  isString,
  map,
  of,
  parsePDFOptions,
  race,
  raceWith,
  scriptInjector,
  stringToBase64,
  stringToTypedArray,
  stringifyFunction,
  switchMap,
  throwIfDetached,
  throwIfDisposed,
  timeout
} from "./chunk-QVF6FKN4.mjs";
import "./chunk-WCQR6DUL.mjs";
import {
  __commonJS,
  __esm,
  __export,
  __require,
  __toCommonJS,
  __toESM,
  init_esm
} from "./chunk-73K4F3H4.mjs";

// node_modules/.pnpm/mitt@3.0.1/node_modules/mitt/dist/mitt.mjs
var mitt_exports = {};
__export(mitt_exports, {
  default: () => mitt_default
});
function mitt_default(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
    var i = n.get(t);
    i ? i.push(e) : n.set(t, [e]);
  }, off: function(t, e) {
    var i = n.get(t);
    i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
  }, emit: function(t, e) {
    var i = n.get(t);
    i && i.slice().map(function(n2) {
      n2(e);
    }), (i = n.get("*")) && i.slice().map(function(n2) {
      n2(t, e);
    });
  } };
}
var init_mitt = __esm({
  "node_modules/.pnpm/mitt@3.0.1/node_modules/mitt/dist/mitt.mjs"() {
    init_esm();
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/EventEmitter.js
var require_EventEmitter = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/EventEmitter.js"(exports) {
    "use strict";
    init_esm();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EventEmitter = void 0;
    var mitt_1 = __importDefault((init_mitt(), __toCommonJS(mitt_exports)));
    var EventEmitter3 = class {
      #emitter = (0, mitt_1.default)();
      on(type, handler) {
        this.#emitter.on(type, handler);
        return this;
      }
      /**
       * Like `on` but the listener will only be fired once and then it will be removed.
       * @param event The event you'd like to listen to
       * @param handler The handler function to run when the event occurs
       * @return `this` to enable chaining method calls.
       */
      once(event, handler) {
        const onceHandler = (eventData) => {
          handler(eventData);
          this.off(event, onceHandler);
        };
        return this.on(event, onceHandler);
      }
      off(type, handler) {
        this.#emitter.off(type, handler);
        return this;
      }
      /**
       * Emits an event and call any associated listeners.
       *
       * @param event The event to emit.
       * @param eventData Any data to emit with the event.
       * @return `true` if there are any listeners, `false` otherwise.
       */
      emit(event, eventData) {
        this.#emitter.emit(event, eventData);
      }
      /**
       * Removes all listeners. If given an event argument, it will remove only
       * listeners for that event.
       * @param event - the event to remove listeners for.
       * @returns `this` to enable you to chain method calls.
       */
      removeAllListeners(event) {
        if (event) {
          this.#emitter.all.delete(event);
        } else {
          this.#emitter.all.clear();
        }
        return this;
      }
    };
    exports.EventEmitter = EventEmitter3;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/log.js
var require_log = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/log.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LogType = void 0;
    var LogType;
    (function(LogType2) {
      LogType2["bidi"] = "bidi";
      LogType2["cdp"] = "cdp";
      LogType2["debug"] = "debug";
      LogType2["debugError"] = "debug:error";
      LogType2["debugInfo"] = "debug:info";
    })(LogType || (exports.LogType = LogType = {}));
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/ProcessingQueue.js
var require_ProcessingQueue = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/ProcessingQueue.js"(exports) {
    "use strict";
    init_esm();
    var _a3;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProcessingQueue = void 0;
    var log_js_1 = require_log();
    var ProcessingQueue = class {
      static LOGGER_PREFIX = `${log_js_1.LogType.debug}:queue`;
      #logger;
      #processor;
      #queue = [];
      // Flag to keep only 1 active processor.
      #isProcessing = false;
      constructor(processor, logger) {
        this.#processor = processor;
        this.#logger = logger;
      }
      add(entry, name) {
        this.#queue.push([entry, name]);
        void this.#processIfNeeded();
      }
      async #processIfNeeded() {
        if (this.#isProcessing) {
          return;
        }
        this.#isProcessing = true;
        while (this.#queue.length > 0) {
          const arrayEntry = this.#queue.shift();
          if (!arrayEntry) {
            continue;
          }
          const [entryPromise, name] = arrayEntry;
          this.#logger?.(_a3.LOGGER_PREFIX, "Processing event:", name);
          await entryPromise.then((entry) => {
            if (entry.kind === "error") {
              this.#logger?.(log_js_1.LogType.debugError, "Event threw before sending:", entry.error.message, entry.error.stack);
              return;
            }
            return this.#processor(entry.value);
          }).catch((error) => {
            this.#logger?.(log_js_1.LogType.debugError, "Event was not processed:", error?.message);
          });
        }
        this.#isProcessing = false;
      }
    };
    exports.ProcessingQueue = ProcessingQueue;
    _a3 = ProcessingQueue;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/protocol/cdp.js
var require_cdp = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/protocol/cdp.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/protocol/chromium-bidi.js
var require_chromium_bidi = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/protocol/chromium-bidi.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EVENT_NAMES = exports.Bluetooth = exports.Network = exports.BrowsingContext = exports.Log = exports.Script = exports.BiDiModule = void 0;
    var BiDiModule;
    (function(BiDiModule2) {
      BiDiModule2["Bluetooth"] = "bluetooth";
      BiDiModule2["Browser"] = "browser";
      BiDiModule2["BrowsingContext"] = "browsingContext";
      BiDiModule2["Cdp"] = "goog:cdp";
      BiDiModule2["DeprecatedCdp"] = "cdp";
      BiDiModule2["Input"] = "input";
      BiDiModule2["Log"] = "log";
      BiDiModule2["Network"] = "network";
      BiDiModule2["Script"] = "script";
      BiDiModule2["Session"] = "session";
    })(BiDiModule || (exports.BiDiModule = BiDiModule = {}));
    var Script;
    (function(Script2) {
      let EventNames;
      (function(EventNames2) {
        EventNames2["Message"] = "script.message";
        EventNames2["RealmCreated"] = "script.realmCreated";
        EventNames2["RealmDestroyed"] = "script.realmDestroyed";
      })(EventNames = Script2.EventNames || (Script2.EventNames = {}));
    })(Script || (exports.Script = Script = {}));
    var Log;
    (function(Log2) {
      let EventNames;
      (function(EventNames2) {
        EventNames2["LogEntryAdded"] = "log.entryAdded";
      })(EventNames = Log2.EventNames || (Log2.EventNames = {}));
    })(Log || (exports.Log = Log = {}));
    var BrowsingContext2;
    (function(BrowsingContext3) {
      let EventNames;
      (function(EventNames2) {
        EventNames2["ContextCreated"] = "browsingContext.contextCreated";
        EventNames2["ContextDestroyed"] = "browsingContext.contextDestroyed";
        EventNames2["DomContentLoaded"] = "browsingContext.domContentLoaded";
        EventNames2["DownloadWillBegin"] = "browsingContext.downloadWillBegin";
        EventNames2["FragmentNavigated"] = "browsingContext.fragmentNavigated";
        EventNames2["HistoryUpdated"] = "browsingContext.historyUpdated";
        EventNames2["Load"] = "browsingContext.load";
        EventNames2["NavigationAborted"] = "browsingContext.navigationAborted";
        EventNames2["NavigationFailed"] = "browsingContext.navigationFailed";
        EventNames2["NavigationStarted"] = "browsingContext.navigationStarted";
        EventNames2["UserPromptClosed"] = "browsingContext.userPromptClosed";
        EventNames2["UserPromptOpened"] = "browsingContext.userPromptOpened";
      })(EventNames = BrowsingContext3.EventNames || (BrowsingContext3.EventNames = {}));
    })(BrowsingContext2 || (exports.BrowsingContext = BrowsingContext2 = {}));
    var Network;
    (function(Network2) {
      let EventNames;
      (function(EventNames2) {
        EventNames2["AuthRequired"] = "network.authRequired";
        EventNames2["BeforeRequestSent"] = "network.beforeRequestSent";
        EventNames2["FetchError"] = "network.fetchError";
        EventNames2["ResponseCompleted"] = "network.responseCompleted";
        EventNames2["ResponseStarted"] = "network.responseStarted";
      })(EventNames = Network2.EventNames || (Network2.EventNames = {}));
    })(Network || (exports.Network = Network = {}));
    var Bluetooth;
    (function(Bluetooth2) {
      let EventNames;
      (function(EventNames2) {
        EventNames2["RequestDevicePromptUpdated"] = "bluetooth.requestDevicePromptUpdated";
      })(EventNames = Bluetooth2.EventNames || (Bluetooth2.EventNames = {}));
    })(Bluetooth || (exports.Bluetooth = Bluetooth = {}));
    exports.EVENT_NAMES = /* @__PURE__ */ new Set([
      // keep-sorted start
      ...Object.values(BiDiModule),
      ...Object.values(BrowsingContext2.EventNames),
      ...Object.values(Log.EventNames),
      ...Object.values(Network.EventNames),
      ...Object.values(Script.EventNames)
      // keep-sorted end
    ]);
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/protocol/generated/webdriver-bidi.js
var require_webdriver_bidi = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/protocol/generated/webdriver-bidi.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/protocol/ErrorResponse.js
var require_ErrorResponse = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/protocol/ErrorResponse.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NoSuchWebExtensionException = exports.InvalidWebExtensionException = exports.UnderspecifiedStoragePartitionException = exports.UnableToSetFileInputException = exports.UnableToSetCookieException = exports.NoSuchStoragePartitionException = exports.UnsupportedOperationException = exports.UnableToCloseBrowserException = exports.UnableToCaptureScreenException = exports.UnknownErrorException = exports.UnknownCommandException = exports.SessionNotCreatedException = exports.NoSuchUserContextException = exports.NoSuchScriptException = exports.NoSuchRequestException = exports.NoSuchNodeException = exports.NoSuchInterceptException = exports.NoSuchHistoryEntryException = exports.NoSuchHandleException = exports.NoSuchFrameException = exports.NoSuchElementException = exports.NoSuchAlertException = exports.MoveTargetOutOfBoundsException = exports.InvalidSessionIdException = exports.InvalidSelectorException = exports.InvalidArgumentException = exports.Exception = void 0;
    var Exception = class extends Error {
      error;
      message;
      stacktrace;
      constructor(error, message, stacktrace) {
        super();
        this.error = error;
        this.message = message;
        this.stacktrace = stacktrace;
      }
      toErrorResponse(commandId) {
        return {
          type: "error",
          id: commandId,
          error: this.error,
          message: this.message,
          stacktrace: this.stacktrace
        };
      }
    };
    exports.Exception = Exception;
    var InvalidArgumentException = class extends Exception {
      constructor(message, stacktrace) {
        super("invalid argument", message, stacktrace);
      }
    };
    exports.InvalidArgumentException = InvalidArgumentException;
    var InvalidSelectorException = class extends Exception {
      constructor(message, stacktrace) {
        super("invalid selector", message, stacktrace);
      }
    };
    exports.InvalidSelectorException = InvalidSelectorException;
    var InvalidSessionIdException = class extends Exception {
      constructor(message, stacktrace) {
        super("invalid session id", message, stacktrace);
      }
    };
    exports.InvalidSessionIdException = InvalidSessionIdException;
    var MoveTargetOutOfBoundsException = class extends Exception {
      constructor(message, stacktrace) {
        super("move target out of bounds", message, stacktrace);
      }
    };
    exports.MoveTargetOutOfBoundsException = MoveTargetOutOfBoundsException;
    var NoSuchAlertException = class extends Exception {
      constructor(message, stacktrace) {
        super("no such alert", message, stacktrace);
      }
    };
    exports.NoSuchAlertException = NoSuchAlertException;
    var NoSuchElementException = class extends Exception {
      constructor(message, stacktrace) {
        super("no such element", message, stacktrace);
      }
    };
    exports.NoSuchElementException = NoSuchElementException;
    var NoSuchFrameException = class extends Exception {
      constructor(message, stacktrace) {
        super("no such frame", message, stacktrace);
      }
    };
    exports.NoSuchFrameException = NoSuchFrameException;
    var NoSuchHandleException = class extends Exception {
      constructor(message, stacktrace) {
        super("no such handle", message, stacktrace);
      }
    };
    exports.NoSuchHandleException = NoSuchHandleException;
    var NoSuchHistoryEntryException = class extends Exception {
      constructor(message, stacktrace) {
        super("no such history entry", message, stacktrace);
      }
    };
    exports.NoSuchHistoryEntryException = NoSuchHistoryEntryException;
    var NoSuchInterceptException = class extends Exception {
      constructor(message, stacktrace) {
        super("no such intercept", message, stacktrace);
      }
    };
    exports.NoSuchInterceptException = NoSuchInterceptException;
    var NoSuchNodeException = class extends Exception {
      constructor(message, stacktrace) {
        super("no such node", message, stacktrace);
      }
    };
    exports.NoSuchNodeException = NoSuchNodeException;
    var NoSuchRequestException = class extends Exception {
      constructor(message, stacktrace) {
        super("no such request", message, stacktrace);
      }
    };
    exports.NoSuchRequestException = NoSuchRequestException;
    var NoSuchScriptException = class extends Exception {
      constructor(message, stacktrace) {
        super("no such script", message, stacktrace);
      }
    };
    exports.NoSuchScriptException = NoSuchScriptException;
    var NoSuchUserContextException = class extends Exception {
      constructor(message, stacktrace) {
        super("no such user context", message, stacktrace);
      }
    };
    exports.NoSuchUserContextException = NoSuchUserContextException;
    var SessionNotCreatedException = class extends Exception {
      constructor(message, stacktrace) {
        super("session not created", message, stacktrace);
      }
    };
    exports.SessionNotCreatedException = SessionNotCreatedException;
    var UnknownCommandException = class extends Exception {
      constructor(message, stacktrace) {
        super("unknown command", message, stacktrace);
      }
    };
    exports.UnknownCommandException = UnknownCommandException;
    var UnknownErrorException = class extends Exception {
      constructor(message, stacktrace = new Error().stack) {
        super("unknown error", message, stacktrace);
      }
    };
    exports.UnknownErrorException = UnknownErrorException;
    var UnableToCaptureScreenException = class extends Exception {
      constructor(message, stacktrace) {
        super("unable to capture screen", message, stacktrace);
      }
    };
    exports.UnableToCaptureScreenException = UnableToCaptureScreenException;
    var UnableToCloseBrowserException = class extends Exception {
      constructor(message, stacktrace) {
        super("unable to close browser", message, stacktrace);
      }
    };
    exports.UnableToCloseBrowserException = UnableToCloseBrowserException;
    var UnsupportedOperationException = class extends Exception {
      constructor(message, stacktrace) {
        super("unsupported operation", message, stacktrace);
      }
    };
    exports.UnsupportedOperationException = UnsupportedOperationException;
    var NoSuchStoragePartitionException = class extends Exception {
      constructor(message, stacktrace) {
        super("no such storage partition", message, stacktrace);
      }
    };
    exports.NoSuchStoragePartitionException = NoSuchStoragePartitionException;
    var UnableToSetCookieException = class extends Exception {
      constructor(message, stacktrace) {
        super("unable to set cookie", message, stacktrace);
      }
    };
    exports.UnableToSetCookieException = UnableToSetCookieException;
    var UnableToSetFileInputException = class extends Exception {
      constructor(message, stacktrace) {
        super("unable to set file input", message, stacktrace);
      }
    };
    exports.UnableToSetFileInputException = UnableToSetFileInputException;
    var UnderspecifiedStoragePartitionException = class extends Exception {
      constructor(message, stacktrace) {
        super("underspecified storage partition", message, stacktrace);
      }
    };
    exports.UnderspecifiedStoragePartitionException = UnderspecifiedStoragePartitionException;
    var InvalidWebExtensionException = class extends Exception {
      constructor(message, stacktrace) {
        super("invalid web extension", message, stacktrace);
      }
    };
    exports.InvalidWebExtensionException = InvalidWebExtensionException;
    var NoSuchWebExtensionException = class extends Exception {
      constructor(message, stacktrace) {
        super("no such web extension", message, stacktrace);
      }
    };
    exports.NoSuchWebExtensionException = NoSuchWebExtensionException;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/protocol/generated/webdriver-bidi-permissions.js
var require_webdriver_bidi_permissions = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/protocol/generated/webdriver-bidi-permissions.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/protocol/generated/webdriver-bidi-bluetooth.js
var require_webdriver_bidi_bluetooth = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/protocol/generated/webdriver-bidi-bluetooth.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/protocol/protocol.js
var require_protocol = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/protocol/protocol.js"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || /* @__PURE__ */ function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    }();
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChromiumBidi = exports.Cdp = void 0;
    exports.Cdp = __importStar(require_cdp());
    exports.ChromiumBidi = __importStar(require_chromium_bidi());
    __exportStar(require_webdriver_bidi(), exports);
    __exportStar(require_ErrorResponse(), exports);
    __exportStar(require_webdriver_bidi_permissions(), exports);
    __exportStar(require_webdriver_bidi_bluetooth(), exports);
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/BidiNoOpParser.js
var require_BidiNoOpParser = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/BidiNoOpParser.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BidiNoOpParser = void 0;
    var BidiNoOpParser = class {
      // Bluetooth module
      // keep-sorted start block=yes
      parseHandleRequestDevicePromptParams(params) {
        return params;
      }
      parseSimulateAdapterParameters(params) {
        return params;
      }
      parseSimulateAdvertisementParameters(params) {
        return params;
      }
      parseSimulatePreconnectedPeripheralParameters(params) {
        return params;
      }
      // keep-sorted end
      // Browser module
      // keep-sorted start block=yes
      parseRemoveUserContextParams(params) {
        return params;
      }
      // keep-sorted end
      // Browsing Context module
      // keep-sorted start block=yes
      parseActivateParams(params) {
        return params;
      }
      parseCaptureScreenshotParams(params) {
        return params;
      }
      parseCloseParams(params) {
        return params;
      }
      parseCreateParams(params) {
        return params;
      }
      parseGetTreeParams(params) {
        return params;
      }
      parseHandleUserPromptParams(params) {
        return params;
      }
      parseLocateNodesParams(params) {
        return params;
      }
      parseNavigateParams(params) {
        return params;
      }
      parsePrintParams(params) {
        return params;
      }
      parseReloadParams(params) {
        return params;
      }
      parseSetViewportParams(params) {
        return params;
      }
      parseTraverseHistoryParams(params) {
        return params;
      }
      // keep-sorted end
      // CDP module
      // keep-sorted start block=yes
      parseGetSessionParams(params) {
        return params;
      }
      parseResolveRealmParams(params) {
        return params;
      }
      parseSendCommandParams(params) {
        return params;
      }
      // keep-sorted end
      // Script module
      // keep-sorted start block=yes
      parseAddPreloadScriptParams(params) {
        return params;
      }
      parseCallFunctionParams(params) {
        return params;
      }
      parseDisownParams(params) {
        return params;
      }
      parseEvaluateParams(params) {
        return params;
      }
      parseGetRealmsParams(params) {
        return params;
      }
      parseRemovePreloadScriptParams(params) {
        return params;
      }
      // keep-sorted end
      // Input module
      // keep-sorted start block=yes
      parsePerformActionsParams(params) {
        return params;
      }
      parseReleaseActionsParams(params) {
        return params;
      }
      parseSetFilesParams(params) {
        return params;
      }
      // keep-sorted end
      // Network module
      // keep-sorted start block=yes
      parseAddInterceptParams(params) {
        return params;
      }
      parseContinueRequestParams(params) {
        return params;
      }
      parseContinueResponseParams(params) {
        return params;
      }
      parseContinueWithAuthParams(params) {
        return params;
      }
      parseFailRequestParams(params) {
        return params;
      }
      parseProvideResponseParams(params) {
        return params;
      }
      parseRemoveInterceptParams(params) {
        return params;
      }
      parseSetCacheBehavior(params) {
        return params;
      }
      // keep-sorted end
      // Permissions module
      // keep-sorted start block=yes
      parseSetPermissionsParams(params) {
        return params;
      }
      // keep-sorted end
      // Session module
      // keep-sorted start block=yes
      parseSubscribeParams(params) {
        return params;
      }
      // keep-sorted end
      // Storage module
      // keep-sorted start block=yes
      parseDeleteCookiesParams(params) {
        return params;
      }
      parseGetCookiesParams(params) {
        return params;
      }
      parseSetCookieParams(params) {
        return params;
      }
    };
    exports.BidiNoOpParser = BidiNoOpParser;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/browser/BrowserProcessor.js
var require_BrowserProcessor = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/browser/BrowserProcessor.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BrowserProcessor = void 0;
    var protocol_js_1 = require_protocol();
    var BrowserProcessor = class {
      #browserCdpClient;
      #browsingContextStorage;
      constructor(browserCdpClient, browsingContextStorage) {
        this.#browserCdpClient = browserCdpClient;
        this.#browsingContextStorage = browsingContextStorage;
      }
      close() {
        setTimeout(() => this.#browserCdpClient.sendCommand("Browser.close"), 0);
        return {};
      }
      async createUserContext(params) {
        const request = {
          proxyServer: params["goog:proxyServer"] ?? void 0
        };
        const proxyBypassList = params["goog:proxyBypassList"] ?? void 0;
        if (proxyBypassList) {
          request.proxyBypassList = proxyBypassList.join(",");
        }
        const context = await this.#browserCdpClient.sendCommand("Target.createBrowserContext", request);
        return {
          userContext: context.browserContextId
        };
      }
      async removeUserContext(params) {
        const userContext = params.userContext;
        if (userContext === "default") {
          throw new protocol_js_1.InvalidArgumentException("`default` user context cannot be removed");
        }
        try {
          await this.#browserCdpClient.sendCommand("Target.disposeBrowserContext", {
            browserContextId: userContext
          });
        } catch (err) {
          if (err.message.startsWith("Failed to find context with id")) {
            throw new protocol_js_1.NoSuchUserContextException(err.message);
          }
          throw err;
        }
        return {};
      }
      async getUserContexts() {
        const result = await this.#browserCdpClient.sendCommand("Target.getBrowserContexts");
        return {
          userContexts: [
            {
              userContext: "default"
            },
            ...result.browserContextIds.map((id) => {
              return {
                userContext: id
              };
            })
          ]
        };
      }
      async #getWindowInfo(targetId) {
        const windowInfo = await this.#browserCdpClient.sendCommand("Browser.getWindowForTarget", { targetId });
        return {
          // `active` is not supported in CDP yet.
          active: false,
          clientWindow: `${windowInfo.windowId}`,
          state: windowInfo.bounds.windowState ?? "normal",
          height: windowInfo.bounds.height ?? 0,
          width: windowInfo.bounds.width ?? 0,
          x: windowInfo.bounds.left ?? 0,
          y: windowInfo.bounds.top ?? 0
        };
      }
      async getClientWindows() {
        const topLevelTargetIds = this.#browsingContextStorage.getTopLevelContexts().map((b) => b.cdpTarget.id);
        const clientWindows = await Promise.all(topLevelTargetIds.map(async (targetId) => await this.#getWindowInfo(targetId)));
        const uniqueClientWindowIds = /* @__PURE__ */ new Set();
        const uniqueClientWindows = new Array();
        for (const window2 of clientWindows) {
          if (!uniqueClientWindowIds.has(window2.clientWindow)) {
            uniqueClientWindowIds.add(window2.clientWindow);
            uniqueClientWindows.push(window2);
          }
        }
        return { clientWindows: uniqueClientWindows };
      }
    };
    exports.BrowserProcessor = BrowserProcessor;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/cdp/CdpProcessor.js
var require_CdpProcessor = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/cdp/CdpProcessor.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CdpProcessor = void 0;
    var protocol_js_1 = require_protocol();
    var CdpProcessor = class {
      #browsingContextStorage;
      #realmStorage;
      #cdpConnection;
      #browserCdpClient;
      constructor(browsingContextStorage, realmStorage, cdpConnection, browserCdpClient) {
        this.#browsingContextStorage = browsingContextStorage;
        this.#realmStorage = realmStorage;
        this.#cdpConnection = cdpConnection;
        this.#browserCdpClient = browserCdpClient;
      }
      getSession(params) {
        const context = params.context;
        const sessionId = this.#browsingContextStorage.getContext(context).cdpTarget.cdpSessionId;
        if (sessionId === void 0) {
          return {};
        }
        return { session: sessionId };
      }
      resolveRealm(params) {
        const context = params.realm;
        const realm = this.#realmStorage.getRealm({ realmId: context });
        if (realm === void 0) {
          throw new protocol_js_1.UnknownErrorException(`Could not find realm ${params.realm}`);
        }
        return { executionContextId: realm.executionContextId };
      }
      async sendCommand(params) {
        const client = params.session ? this.#cdpConnection.getCdpClient(params.session) : this.#browserCdpClient;
        const result = await client.sendCommand(params.method, params.params);
        return {
          result,
          session: params.session
        };
      }
    };
    exports.CdpProcessor = CdpProcessor;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/context/BrowsingContextProcessor.js
var require_BrowsingContextProcessor = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/context/BrowsingContextProcessor.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BrowsingContextProcessor = void 0;
    var protocol_js_1 = require_protocol();
    var BrowsingContextProcessor = class {
      #browserCdpClient;
      #browsingContextStorage;
      #eventManager;
      constructor(browserCdpClient, browsingContextStorage, eventManager) {
        this.#browserCdpClient = browserCdpClient;
        this.#browsingContextStorage = browsingContextStorage;
        this.#eventManager = eventManager;
        this.#eventManager.addSubscribeHook(protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.ContextCreated, this.#onContextCreatedSubscribeHook.bind(this));
      }
      getTree(params) {
        const resultContexts = params.root === void 0 ? this.#browsingContextStorage.getTopLevelContexts() : [this.#browsingContextStorage.getContext(params.root)];
        return {
          contexts: resultContexts.map((c) => c.serializeToBidiValue(params.maxDepth ?? Number.MAX_VALUE))
        };
      }
      async create(params) {
        let referenceContext;
        let userContext = "default";
        if (params.referenceContext !== void 0) {
          referenceContext = this.#browsingContextStorage.getContext(params.referenceContext);
          if (!referenceContext.isTopLevelContext()) {
            throw new protocol_js_1.InvalidArgumentException(`referenceContext should be a top-level context`);
          }
          userContext = referenceContext.userContext;
        }
        if (params.userContext !== void 0) {
          userContext = params.userContext;
        }
        const existingContexts = this.#browsingContextStorage.getAllContexts().filter((context2) => context2.userContext === userContext);
        let newWindow = false;
        switch (params.type) {
          case "tab":
            newWindow = false;
            break;
          case "window":
            newWindow = true;
            break;
        }
        if (!existingContexts.length) {
          newWindow = true;
        }
        let result;
        try {
          result = await this.#browserCdpClient.sendCommand("Target.createTarget", {
            url: "about:blank",
            newWindow,
            browserContextId: userContext === "default" ? void 0 : userContext,
            background: params.background === true
          });
        } catch (err) {
          if (
            // See https://source.chromium.org/chromium/chromium/src/+/main:chrome/browser/devtools/protocol/target_handler.cc;l=90;drc=e80392ac11e48a691f4309964cab83a3a59e01c8
            err.message.startsWith("Failed to find browser context with id") || // See https://source.chromium.org/chromium/chromium/src/+/main:headless/lib/browser/protocol/target_handler.cc;l=49;drc=e80392ac11e48a691f4309964cab83a3a59e01c8
            err.message === "browserContextId"
          ) {
            throw new protocol_js_1.NoSuchUserContextException(`The context ${userContext} was not found`);
          }
          throw err;
        }
        const context = await this.#browsingContextStorage.waitForContext(result.targetId);
        await context.lifecycleLoaded();
        return { context: context.id };
      }
      navigate(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        return context.navigate(
          params.url,
          params.wait ?? "none"
          /* BrowsingContext.ReadinessState.None */
        );
      }
      reload(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        return context.reload(
          params.ignoreCache ?? false,
          params.wait ?? "none"
          /* BrowsingContext.ReadinessState.None */
        );
      }
      async activate(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        if (!context.isTopLevelContext()) {
          throw new protocol_js_1.InvalidArgumentException("Activation is only supported on the top-level context");
        }
        await context.activate();
        return {};
      }
      async captureScreenshot(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        return await context.captureScreenshot(params);
      }
      async print(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        return await context.print(params);
      }
      async setViewport(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        if (!context.isTopLevelContext()) {
          throw new protocol_js_1.InvalidArgumentException("Emulating viewport is only supported on the top-level context");
        }
        await context.setViewport(params.viewport, params.devicePixelRatio);
        return {};
      }
      async traverseHistory(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        if (!context) {
          throw new protocol_js_1.InvalidArgumentException(`No browsing context with id ${params.context}`);
        }
        if (!context.isTopLevelContext()) {
          throw new protocol_js_1.InvalidArgumentException("Traversing history is only supported on the top-level context");
        }
        await context.traverseHistory(params.delta);
        return {};
      }
      async handleUserPrompt(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        try {
          await context.handleUserPrompt(params.accept, params.userText);
        } catch (error) {
          if (error.message?.includes("No dialog is showing")) {
            throw new protocol_js_1.NoSuchAlertException("No dialog is showing");
          }
          throw error;
        }
        return {};
      }
      async close(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        if (!context.isTopLevelContext()) {
          throw new protocol_js_1.InvalidArgumentException(`Non top-level browsing context ${context.id} cannot be closed.`);
        }
        const parentCdpClient = context.cdpTarget.parentCdpClient;
        try {
          const detachedFromTargetPromise = new Promise((resolve) => {
            const onContextDestroyed = (event) => {
              if (event.targetId === params.context) {
                parentCdpClient.off("Target.detachedFromTarget", onContextDestroyed);
                resolve();
              }
            };
            parentCdpClient.on("Target.detachedFromTarget", onContextDestroyed);
          });
          try {
            if (params.promptUnload) {
              await context.close();
            } else {
              await parentCdpClient.sendCommand("Target.closeTarget", {
                targetId: params.context
              });
            }
          } catch (error) {
            if (!parentCdpClient.isCloseError(error)) {
              throw error;
            }
          }
          await detachedFromTargetPromise;
        } catch (error) {
          if (!(error.code === -32e3 && error.message === "Not attached to an active page")) {
            throw error;
          }
        }
        return {};
      }
      async locateNodes(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        return await context.locateNodes(params);
      }
      #onContextCreatedSubscribeHook(contextId) {
        const context = this.#browsingContextStorage.getContext(contextId);
        const contextsToReport = [
          context,
          ...this.#browsingContextStorage.getContext(contextId).allChildren
        ];
        contextsToReport.forEach((context2) => {
          this.#eventManager.registerEvent({
            type: "event",
            method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.ContextCreated,
            params: context2.serializeToBidiValue()
          }, context2.id);
        });
        return Promise.resolve();
      }
    };
    exports.BrowsingContextProcessor = BrowsingContextProcessor;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/assert.js
var require_assert = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/assert.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.assert = assert2;
    function assert2(predicate, message) {
      if (!predicate) {
        throw new Error(message ?? "Internal assertion failed.");
      }
    }
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/GraphemeTools.js
var require_GraphemeTools = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/GraphemeTools.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isSingleComplexGrapheme = isSingleComplexGrapheme;
    exports.isSingleGrapheme = isSingleGrapheme;
    function isSingleComplexGrapheme(value) {
      return isSingleGrapheme(value) && value.length > 1;
    }
    function isSingleGrapheme(value) {
      const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
      return [...segmenter.segment(value)].length === 1;
    }
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/input/InputSource.js
var require_InputSource = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/input/InputSource.js"(exports) {
    "use strict";
    init_esm();
    var _a3;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WheelSource = exports.PointerSource = exports.KeySource = exports.NoneSource = void 0;
    var NoneSource = class {
      type = "none";
    };
    exports.NoneSource = NoneSource;
    var KeySource = class {
      type = "key";
      pressed = /* @__PURE__ */ new Set();
      // This is a bitfield that matches the modifiers parameter of
      // https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchKeyEvent
      #modifiers = 0;
      get modifiers() {
        return this.#modifiers;
      }
      get alt() {
        return (this.#modifiers & 1) === 1;
      }
      set alt(value) {
        this.#setModifier(value, 1);
      }
      get ctrl() {
        return (this.#modifiers & 2) === 2;
      }
      set ctrl(value) {
        this.#setModifier(value, 2);
      }
      get meta() {
        return (this.#modifiers & 4) === 4;
      }
      set meta(value) {
        this.#setModifier(value, 4);
      }
      get shift() {
        return (this.#modifiers & 8) === 8;
      }
      set shift(value) {
        this.#setModifier(value, 8);
      }
      #setModifier(value, bit) {
        if (value) {
          this.#modifiers |= bit;
        } else {
          this.#modifiers &= ~bit;
        }
      }
    };
    exports.KeySource = KeySource;
    var PointerSource = class {
      type = "pointer";
      subtype;
      pointerId;
      pressed = /* @__PURE__ */ new Set();
      x = 0;
      y = 0;
      radiusX;
      radiusY;
      force;
      constructor(id, subtype) {
        this.pointerId = id;
        this.subtype = subtype;
      }
      // This is a bitfield that matches the buttons parameter of
      // https://chromedevtools.github.io/devtools-protocol/tot/Input/#method-dispatchMouseEvent
      get buttons() {
        let buttons = 0;
        for (const button of this.pressed) {
          switch (button) {
            case 0:
              buttons |= 1;
              break;
            case 1:
              buttons |= 4;
              break;
            case 2:
              buttons |= 2;
              break;
            case 3:
              buttons |= 8;
              break;
            case 4:
              buttons |= 16;
              break;
          }
        }
        return buttons;
      }
      // --- Platform-specific code starts here ---
      // Input.dispatchMouseEvent doesn't know the concept of double click, so we
      // need to create the logic, similar to how it's done for OSes:
      // https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:ui/events/event.cc;l=479
      static ClickContext = class ClickContext {
        static #DOUBLE_CLICK_TIME_MS = 500;
        static #MAX_DOUBLE_CLICK_RADIUS = 2;
        count = 0;
        #x;
        #y;
        #time;
        constructor(x, y, time) {
          this.#x = x;
          this.#y = y;
          this.#time = time;
        }
        compare(context) {
          return (
            // The click needs to be within a certain amount of ms.
            context.#time - this.#time > ClickContext.#DOUBLE_CLICK_TIME_MS || // The click needs to be within a certain square radius.
            Math.abs(context.#x - this.#x) > ClickContext.#MAX_DOUBLE_CLICK_RADIUS || Math.abs(context.#y - this.#y) > ClickContext.#MAX_DOUBLE_CLICK_RADIUS
          );
        }
      };
      #clickContexts = /* @__PURE__ */ new Map();
      setClickCount(button, context) {
        let storedContext = this.#clickContexts.get(button);
        if (!storedContext || storedContext.compare(context)) {
          storedContext = context;
        }
        ++storedContext.count;
        this.#clickContexts.set(button, storedContext);
        return storedContext.count;
      }
      getClickCount(button) {
        return this.#clickContexts.get(button)?.count ?? 0;
      }
    };
    exports.PointerSource = PointerSource;
    _a3 = PointerSource;
    var WheelSource = class {
      type = "wheel";
    };
    exports.WheelSource = WheelSource;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/input/keyUtils.js
var require_keyUtils = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/input/keyUtils.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getNormalizedKey = getNormalizedKey;
    exports.getKeyCode = getKeyCode;
    exports.getKeyLocation = getKeyLocation;
    function getNormalizedKey(value) {
      switch (value) {
        case "":
          return "Unidentified";
        case "":
          return "Cancel";
        case "":
          return "Help";
        case "":
          return "Backspace";
        case "":
          return "Tab";
        case "":
          return "Clear";
        // Specification declares the '\uE006' to be `Return`, but it is not supported by
        // Chrome, so fall back to `Enter`, which aligns with WPT.
        case "":
        case "":
          return "Enter";
        case "":
          return "Shift";
        case "":
          return "Control";
        case "":
          return "Alt";
        case "":
          return "Pause";
        case "":
          return "Escape";
        case "":
          return " ";
        case "":
          return "PageUp";
        case "":
          return "PageDown";
        case "":
          return "End";
        case "":
          return "Home";
        case "":
          return "ArrowLeft";
        case "":
          return "ArrowUp";
        case "":
          return "ArrowRight";
        case "":
          return "ArrowDown";
        case "":
          return "Insert";
        case "":
          return "Delete";
        case "":
          return ";";
        case "":
          return "=";
        case "":
          return "0";
        case "":
          return "1";
        case "":
          return "2";
        case "":
          return "3";
        case "":
          return "4";
        case "":
          return "5";
        case "":
          return "6";
        case "":
          return "7";
        case "":
          return "8";
        case "":
          return "9";
        case "":
          return "*";
        case "":
          return "+";
        case "":
          return ",";
        case "":
          return "-";
        case "":
          return ".";
        case "":
          return "/";
        case "":
          return "F1";
        case "":
          return "F2";
        case "":
          return "F3";
        case "":
          return "F4";
        case "":
          return "F5";
        case "":
          return "F6";
        case "":
          return "F7";
        case "":
          return "F8";
        case "":
          return "F9";
        case "":
          return "F10";
        case "":
          return "F11";
        case "":
          return "F12";
        case "":
          return "Meta";
        case "":
          return "ZenkakuHankaku";
        case "":
          return "Shift";
        case "":
          return "Control";
        case "":
          return "Alt";
        case "":
          return "Meta";
        case "":
          return "PageUp";
        case "":
          return "PageDown";
        case "":
          return "End";
        case "":
          return "Home";
        case "":
          return "ArrowLeft";
        case "":
          return "ArrowUp";
        case "":
          return "ArrowRight";
        case "":
          return "ArrowDown";
        case "":
          return "Insert";
        case "":
          return "Delete";
        default:
          return value;
      }
    }
    function getKeyCode(key) {
      switch (key) {
        case "`":
        case "~":
          return "Backquote";
        case "\\":
        case "|":
          return "Backslash";
        case "":
          return "Backspace";
        case "[":
        case "{":
          return "BracketLeft";
        case "]":
        case "}":
          return "BracketRight";
        case ",":
        case "<":
          return "Comma";
        case "0":
        case ")":
          return "Digit0";
        case "1":
        case "!":
          return "Digit1";
        case "2":
        case "@":
          return "Digit2";
        case "3":
        case "#":
          return "Digit3";
        case "4":
        case "$":
          return "Digit4";
        case "5":
        case "%":
          return "Digit5";
        case "6":
        case "^":
          return "Digit6";
        case "7":
        case "&":
          return "Digit7";
        case "8":
        case "*":
          return "Digit8";
        case "9":
        case "(":
          return "Digit9";
        case "=":
        case "+":
          return "Equal";
        // The spec declares the '<' to be `IntlBackslash` as well, but it is already covered
        // in the `Comma` above.
        case ">":
          return "IntlBackslash";
        case "a":
        case "A":
          return "KeyA";
        case "b":
        case "B":
          return "KeyB";
        case "c":
        case "C":
          return "KeyC";
        case "d":
        case "D":
          return "KeyD";
        case "e":
        case "E":
          return "KeyE";
        case "f":
        case "F":
          return "KeyF";
        case "g":
        case "G":
          return "KeyG";
        case "h":
        case "H":
          return "KeyH";
        case "i":
        case "I":
          return "KeyI";
        case "j":
        case "J":
          return "KeyJ";
        case "k":
        case "K":
          return "KeyK";
        case "l":
        case "L":
          return "KeyL";
        case "m":
        case "M":
          return "KeyM";
        case "n":
        case "N":
          return "KeyN";
        case "o":
        case "O":
          return "KeyO";
        case "p":
        case "P":
          return "KeyP";
        case "q":
        case "Q":
          return "KeyQ";
        case "r":
        case "R":
          return "KeyR";
        case "s":
        case "S":
          return "KeyS";
        case "t":
        case "T":
          return "KeyT";
        case "u":
        case "U":
          return "KeyU";
        case "v":
        case "V":
          return "KeyV";
        case "w":
        case "W":
          return "KeyW";
        case "x":
        case "X":
          return "KeyX";
        case "y":
        case "Y":
          return "KeyY";
        case "z":
        case "Z":
          return "KeyZ";
        case "-":
        case "_":
          return "Minus";
        case ".":
          return "Period";
        case "'":
        case '"':
          return "Quote";
        case ";":
        case ":":
          return "Semicolon";
        case "/":
        case "?":
          return "Slash";
        case "":
          return "AltLeft";
        case "":
          return "AltRight";
        case "":
          return "ControlLeft";
        case "":
          return "ControlRight";
        case "":
          return "Enter";
        case "":
          return "Pause";
        case "":
          return "MetaLeft";
        case "":
          return "MetaRight";
        case "":
          return "ShiftLeft";
        case "":
          return "ShiftRight";
        case " ":
        case "":
          return "Space";
        case "":
          return "Tab";
        case "":
          return "Delete";
        case "":
          return "End";
        case "":
          return "Help";
        case "":
          return "Home";
        case "":
          return "Insert";
        case "":
          return "PageDown";
        case "":
          return "PageUp";
        case "":
          return "ArrowDown";
        case "":
          return "ArrowLeft";
        case "":
          return "ArrowRight";
        case "":
          return "ArrowUp";
        case "":
          return "Escape";
        case "":
          return "F1";
        case "":
          return "F2";
        case "":
          return "F3";
        case "":
          return "F4";
        case "":
          return "F5";
        case "":
          return "F6";
        case "":
          return "F7";
        case "":
          return "F8";
        case "":
          return "F9";
        case "":
          return "F10";
        case "":
          return "F11";
        case "":
          return "F12";
        case "":
          return "NumpadEqual";
        case "":
        case "":
          return "Numpad0";
        case "":
        case "":
          return "Numpad1";
        case "":
        case "":
          return "Numpad2";
        case "":
        case "":
          return "Numpad3";
        case "":
        case "":
          return "Numpad4";
        case "":
          return "Numpad5";
        case "":
        case "":
          return "Numpad6";
        case "":
        case "":
          return "Numpad7";
        case "":
        case "":
          return "Numpad8";
        case "":
        case "":
          return "Numpad9";
        case "":
          return "NumpadAdd";
        case "":
          return "NumpadComma";
        case "":
        case "":
          return "NumpadDecimal";
        case "":
          return "NumpadDivide";
        case "":
          return "NumpadEnter";
        case "":
          return "NumpadMultiply";
        case "":
          return "NumpadSubtract";
        default:
          return;
      }
    }
    function getKeyLocation(key) {
      switch (key) {
        case "":
        case "":
        case "":
        case "":
        case "":
          return 1;
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
          return 3;
        case "":
        case "":
        case "":
        case "":
          return 2;
        default:
          return 0;
      }
    }
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/input/USKeyboardLayout.js
var require_USKeyboardLayout = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/input/USKeyboardLayout.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KeyToKeyCode = void 0;
    exports.KeyToKeyCode = {
      "0": 48,
      "1": 49,
      "2": 50,
      "3": 51,
      "4": 52,
      "5": 53,
      "6": 54,
      "7": 55,
      "8": 56,
      "9": 57,
      Abort: 3,
      Help: 6,
      Backspace: 8,
      Tab: 9,
      Numpad5: 12,
      NumpadEnter: 13,
      Enter: 13,
      "\\r": 13,
      "\\n": 13,
      ShiftLeft: 16,
      ShiftRight: 16,
      ControlLeft: 17,
      ControlRight: 17,
      AltLeft: 18,
      AltRight: 18,
      Pause: 19,
      CapsLock: 20,
      Escape: 27,
      Convert: 28,
      NonConvert: 29,
      Space: 32,
      Numpad9: 33,
      PageUp: 33,
      Numpad3: 34,
      PageDown: 34,
      End: 35,
      Numpad1: 35,
      Home: 36,
      Numpad7: 36,
      ArrowLeft: 37,
      Numpad4: 37,
      Numpad8: 38,
      ArrowUp: 38,
      ArrowRight: 39,
      Numpad6: 39,
      Numpad2: 40,
      ArrowDown: 40,
      Select: 41,
      Open: 43,
      PrintScreen: 44,
      Insert: 45,
      Numpad0: 45,
      Delete: 46,
      NumpadDecimal: 46,
      Digit0: 48,
      Digit1: 49,
      Digit2: 50,
      Digit3: 51,
      Digit4: 52,
      Digit5: 53,
      Digit6: 54,
      Digit7: 55,
      Digit8: 56,
      Digit9: 57,
      KeyA: 65,
      KeyB: 66,
      KeyC: 67,
      KeyD: 68,
      KeyE: 69,
      KeyF: 70,
      KeyG: 71,
      KeyH: 72,
      KeyI: 73,
      KeyJ: 74,
      KeyK: 75,
      KeyL: 76,
      KeyM: 77,
      KeyN: 78,
      KeyO: 79,
      KeyP: 80,
      KeyQ: 81,
      KeyR: 82,
      KeyS: 83,
      KeyT: 84,
      KeyU: 85,
      KeyV: 86,
      KeyW: 87,
      KeyX: 88,
      KeyY: 89,
      KeyZ: 90,
      MetaLeft: 91,
      MetaRight: 92,
      ContextMenu: 93,
      NumpadMultiply: 106,
      NumpadAdd: 107,
      NumpadSubtract: 109,
      NumpadDivide: 111,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      F13: 124,
      F14: 125,
      F15: 126,
      F16: 127,
      F17: 128,
      F18: 129,
      F19: 130,
      F20: 131,
      F21: 132,
      F22: 133,
      F23: 134,
      F24: 135,
      NumLock: 144,
      ScrollLock: 145,
      AudioVolumeMute: 173,
      AudioVolumeDown: 174,
      AudioVolumeUp: 175,
      MediaTrackNext: 176,
      MediaTrackPrevious: 177,
      MediaStop: 178,
      MediaPlayPause: 179,
      Semicolon: 186,
      Equal: 187,
      NumpadEqual: 187,
      Comma: 188,
      Minus: 189,
      Period: 190,
      Slash: 191,
      Backquote: 192,
      BracketLeft: 219,
      Backslash: 220,
      BracketRight: 221,
      Quote: 222,
      AltGraph: 225,
      Props: 247,
      Cancel: 3,
      Clear: 12,
      Shift: 16,
      Control: 17,
      Alt: 18,
      Accept: 30,
      ModeChange: 31,
      " ": 32,
      Print: 42,
      Execute: 43,
      "\\u0000": 46,
      a: 65,
      b: 66,
      c: 67,
      d: 68,
      e: 69,
      f: 70,
      g: 71,
      h: 72,
      i: 73,
      j: 74,
      k: 75,
      l: 76,
      m: 77,
      n: 78,
      o: 79,
      p: 80,
      q: 81,
      r: 82,
      s: 83,
      t: 84,
      u: 85,
      v: 86,
      w: 87,
      x: 88,
      y: 89,
      z: 90,
      Meta: 91,
      "*": 106,
      "+": 107,
      "-": 109,
      "/": 111,
      ";": 186,
      "=": 187,
      ",": 188,
      ".": 190,
      "`": 192,
      "[": 219,
      "\\\\": 220,
      "]": 221,
      "'": 222,
      Attn: 246,
      CrSel: 247,
      ExSel: 248,
      EraseEof: 249,
      Play: 250,
      ZoomOut: 251,
      ")": 48,
      "!": 49,
      "@": 50,
      "#": 51,
      $: 52,
      "%": 53,
      "^": 54,
      "&": 55,
      "(": 57,
      A: 65,
      B: 66,
      C: 67,
      D: 68,
      E: 69,
      F: 70,
      G: 71,
      H: 72,
      I: 73,
      J: 74,
      K: 75,
      L: 76,
      M: 77,
      N: 78,
      O: 79,
      P: 80,
      Q: 81,
      R: 82,
      S: 83,
      T: 84,
      U: 85,
      V: 86,
      W: 87,
      X: 88,
      Y: 89,
      Z: 90,
      ":": 186,
      "<": 188,
      _: 189,
      ">": 190,
      "?": 191,
      "~": 192,
      "{": 219,
      "|": 220,
      "}": 221,
      '"': 222,
      Camera: 44,
      EndCall: 95,
      VolumeDown: 182,
      VolumeUp: 183
    };
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/input/ActionDispatcher.js
var require_ActionDispatcher = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/input/ActionDispatcher.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ActionDispatcher = void 0;
    var protocol_js_1 = require_protocol();
    var assert_js_1 = require_assert();
    var GraphemeTools_js_1 = require_GraphemeTools();
    var InputSource_js_1 = require_InputSource();
    var keyUtils_js_1 = require_keyUtils();
    var USKeyboardLayout_js_1 = require_USKeyboardLayout();
    var CALCULATE_IN_VIEW_CENTER_PT_DECL = ((i) => {
      const t = i.getClientRects()[0], e = Math.max(0, Math.min(t.x, t.x + t.width)), n = Math.min(window.innerWidth, Math.max(t.x, t.x + t.width)), h = Math.max(0, Math.min(t.y, t.y + t.height)), m = Math.min(window.innerHeight, Math.max(t.y, t.y + t.height));
      return [e + (n - e >> 1), h + (m - h >> 1)];
    }).toString();
    var IS_MAC_DECL = (() => {
      return navigator.platform.toLowerCase().includes("mac");
    }).toString();
    async function getElementCenter(context, element) {
      const sandbox = await context.getOrCreateSandbox(void 0);
      const result = await sandbox.callFunction(CALCULATE_IN_VIEW_CENTER_PT_DECL, false, { type: "undefined" }, [element]);
      if (result.type === "exception") {
        throw new protocol_js_1.NoSuchElementException(`Origin element ${element.sharedId} was not found`);
      }
      (0, assert_js_1.assert)(result.result.type === "array");
      (0, assert_js_1.assert)(result.result.value?.[0]?.type === "number");
      (0, assert_js_1.assert)(result.result.value?.[1]?.type === "number");
      const { result: { value: [{ value: x }, { value: y }] } } = result;
      return { x, y };
    }
    var ActionDispatcher = class {
      static isMacOS = async (context) => {
        const result = await (await context.getOrCreateSandbox(void 0)).callFunction(IS_MAC_DECL, false);
        (0, assert_js_1.assert)(result.type !== "exception");
        (0, assert_js_1.assert)(result.result.type === "boolean");
        return result.result.value;
      };
      #tickStart = 0;
      #tickDuration = 0;
      #inputState;
      #context;
      #isMacOS;
      constructor(inputState, context, isMacOS) {
        this.#inputState = inputState;
        this.#context = context;
        this.#isMacOS = isMacOS;
      }
      async dispatchActions(optionsByTick) {
        await this.#inputState.queue.run(async () => {
          for (const options of optionsByTick) {
            await this.dispatchTickActions(options);
          }
        });
      }
      async dispatchTickActions(options) {
        this.#tickStart = performance.now();
        this.#tickDuration = 0;
        for (const { action } of options) {
          if ("duration" in action && action.duration !== void 0) {
            this.#tickDuration = Math.max(this.#tickDuration, action.duration);
          }
        }
        const promises = [
          new Promise((resolve) => setTimeout(resolve, this.#tickDuration))
        ];
        for (const option of options) {
          promises.push(this.#dispatchAction(option));
        }
        await Promise.all(promises);
      }
      async #dispatchAction({ id, action }) {
        const source = this.#inputState.get(id);
        const keyState = this.#inputState.getGlobalKeyState();
        switch (action.type) {
          case "keyDown": {
            await this.#dispatchKeyDownAction(source, action);
            this.#inputState.cancelList.push({
              id,
              action: {
                ...action,
                type: "keyUp"
              }
            });
            break;
          }
          case "keyUp": {
            await this.#dispatchKeyUpAction(source, action);
            break;
          }
          case "pause": {
            break;
          }
          case "pointerDown": {
            await this.#dispatchPointerDownAction(source, keyState, action);
            this.#inputState.cancelList.push({
              id,
              action: {
                ...action,
                type: "pointerUp"
              }
            });
            break;
          }
          case "pointerMove": {
            await this.#dispatchPointerMoveAction(source, keyState, action);
            break;
          }
          case "pointerUp": {
            await this.#dispatchPointerUpAction(source, keyState, action);
            break;
          }
          case "scroll": {
            await this.#dispatchScrollAction(source, keyState, action);
            break;
          }
        }
      }
      async #dispatchPointerDownAction(source, keyState, action) {
        const { button } = action;
        if (source.pressed.has(button)) {
          return;
        }
        source.pressed.add(button);
        const { x, y, subtype: pointerType } = source;
        const { width, height, pressure, twist, tangentialPressure } = action;
        const { tiltX, tiltY } = getTilt(action);
        const { modifiers } = keyState;
        const { radiusX, radiusY } = getRadii(width ?? 1, height ?? 1);
        switch (pointerType) {
          case "mouse":
          case "pen":
            await this.#context.cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
              type: "mousePressed",
              x,
              y,
              modifiers,
              button: getCdpButton(button),
              buttons: source.buttons,
              clickCount: source.setClickCount(button, new InputSource_js_1.PointerSource.ClickContext(x, y, performance.now())),
              pointerType,
              tangentialPressure,
              tiltX,
              tiltY,
              twist,
              force: pressure
            });
            break;
          case "touch":
            await this.#context.cdpTarget.cdpClient.sendCommand("Input.dispatchTouchEvent", {
              type: "touchStart",
              touchPoints: [
                {
                  x,
                  y,
                  radiusX,
                  radiusY,
                  tangentialPressure,
                  tiltX,
                  tiltY,
                  twist,
                  force: pressure,
                  id: source.pointerId
                }
              ],
              modifiers
            });
            break;
        }
        source.radiusX = radiusX;
        source.radiusY = radiusY;
        source.force = pressure;
      }
      #dispatchPointerUpAction(source, keyState, action) {
        const { button } = action;
        if (!source.pressed.has(button)) {
          return;
        }
        source.pressed.delete(button);
        const { x, y, force, radiusX, radiusY, subtype: pointerType } = source;
        const { modifiers } = keyState;
        switch (pointerType) {
          case "mouse":
          case "pen":
            return this.#context.cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
              type: "mouseReleased",
              x,
              y,
              modifiers,
              button: getCdpButton(button),
              buttons: source.buttons,
              clickCount: source.getClickCount(button),
              pointerType
            });
          case "touch":
            return this.#context.cdpTarget.cdpClient.sendCommand("Input.dispatchTouchEvent", {
              type: "touchEnd",
              touchPoints: [
                {
                  x,
                  y,
                  id: source.pointerId,
                  force,
                  radiusX,
                  radiusY
                }
              ],
              modifiers
            });
        }
      }
      async #dispatchPointerMoveAction(source, keyState, action) {
        const { x: startX, y: startY, subtype: pointerType } = source;
        const { width, height, pressure, twist, tangentialPressure, x: offsetX, y: offsetY, origin = "viewport", duration = this.#tickDuration } = action;
        const { tiltX, tiltY } = getTilt(action);
        const { radiusX, radiusY } = getRadii(width ?? 1, height ?? 1);
        const { targetX, targetY } = await this.#getCoordinateFromOrigin(origin, offsetX, offsetY, startX, startY);
        if (targetX < 0 || targetY < 0) {
          throw new protocol_js_1.MoveTargetOutOfBoundsException(`Cannot move beyond viewport (x: ${targetX}, y: ${targetY})`);
        }
        let last;
        do {
          const ratio = duration > 0 ? (performance.now() - this.#tickStart) / duration : 1;
          last = ratio >= 1;
          let x;
          let y;
          if (last) {
            x = targetX;
            y = targetY;
          } else {
            x = Math.round(ratio * (targetX - startX) + startX);
            y = Math.round(ratio * (targetY - startY) + startY);
          }
          if (source.x !== x || source.y !== y) {
            const { modifiers } = keyState;
            switch (pointerType) {
              case "mouse":
                await this.#context.cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
                  type: "mouseMoved",
                  x,
                  y,
                  modifiers,
                  clickCount: 0,
                  button: getCdpButton(source.pressed.values().next().value ?? 5),
                  buttons: source.buttons,
                  pointerType,
                  tangentialPressure,
                  tiltX,
                  tiltY,
                  twist,
                  force: pressure
                });
                break;
              case "pen":
                if (source.pressed.size !== 0) {
                  await this.#context.cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
                    type: "mouseMoved",
                    x,
                    y,
                    modifiers,
                    clickCount: 0,
                    button: getCdpButton(source.pressed.values().next().value ?? 5),
                    buttons: source.buttons,
                    pointerType,
                    tangentialPressure,
                    tiltX,
                    tiltY,
                    twist,
                    force: pressure ?? 0.5
                  });
                }
                break;
              case "touch":
                if (source.pressed.size !== 0) {
                  await this.#context.cdpTarget.cdpClient.sendCommand("Input.dispatchTouchEvent", {
                    type: "touchMove",
                    touchPoints: [
                      {
                        x,
                        y,
                        radiusX,
                        radiusY,
                        tangentialPressure,
                        tiltX,
                        tiltY,
                        twist,
                        force: pressure,
                        id: source.pointerId
                      }
                    ],
                    modifiers
                  });
                }
                break;
            }
            source.x = x;
            source.y = y;
            source.radiusX = radiusX;
            source.radiusY = radiusY;
            source.force = pressure;
          }
        } while (!last);
      }
      async #getFrameOffset() {
        if (this.#context.id === this.#context.cdpTarget.id) {
          return { x: 0, y: 0 };
        }
        const { backendNodeId } = await this.#context.cdpTarget.cdpClient.sendCommand("DOM.getFrameOwner", { frameId: this.#context.id });
        const { model: frameBoxModel } = await this.#context.cdpTarget.cdpClient.sendCommand("DOM.getBoxModel", {
          backendNodeId
        });
        return { x: frameBoxModel.content[0], y: frameBoxModel.content[1] };
      }
      async #getCoordinateFromOrigin(origin, offsetX, offsetY, startX, startY) {
        let targetX;
        let targetY;
        const frameOffset = await this.#getFrameOffset();
        switch (origin) {
          case "viewport":
            targetX = offsetX + frameOffset.x;
            targetY = offsetY + frameOffset.y;
            break;
          case "pointer":
            targetX = startX + offsetX + frameOffset.x;
            targetY = startY + offsetY + frameOffset.y;
            break;
          default: {
            const { x: posX, y: posY } = await getElementCenter(this.#context, origin.element);
            targetX = posX + offsetX + frameOffset.x;
            targetY = posY + offsetY + frameOffset.y;
            break;
          }
        }
        return { targetX, targetY };
      }
      async #dispatchScrollAction(_source, keyState, action) {
        const { deltaX: targetDeltaX, deltaY: targetDeltaY, x: offsetX, y: offsetY, origin = "viewport", duration = this.#tickDuration } = action;
        if (origin === "pointer") {
          throw new protocol_js_1.InvalidArgumentException('"pointer" origin is invalid for scrolling.');
        }
        const { targetX, targetY } = await this.#getCoordinateFromOrigin(origin, offsetX, offsetY, 0, 0);
        if (targetX < 0 || targetY < 0) {
          throw new protocol_js_1.MoveTargetOutOfBoundsException(`Cannot move beyond viewport (x: ${targetX}, y: ${targetY})`);
        }
        let currentDeltaX = 0;
        let currentDeltaY = 0;
        let last;
        do {
          const ratio = duration > 0 ? (performance.now() - this.#tickStart) / duration : 1;
          last = ratio >= 1;
          let deltaX;
          let deltaY;
          if (last) {
            deltaX = targetDeltaX - currentDeltaX;
            deltaY = targetDeltaY - currentDeltaY;
          } else {
            deltaX = Math.round(ratio * targetDeltaX - currentDeltaX);
            deltaY = Math.round(ratio * targetDeltaY - currentDeltaY);
          }
          if (deltaX !== 0 || deltaY !== 0) {
            const { modifiers } = keyState;
            await this.#context.cdpTarget.cdpClient.sendCommand("Input.dispatchMouseEvent", {
              type: "mouseWheel",
              deltaX,
              deltaY,
              x: targetX,
              y: targetY,
              modifiers
            });
            currentDeltaX += deltaX;
            currentDeltaY += deltaY;
          }
        } while (!last);
      }
      async #dispatchKeyDownAction(source, action) {
        const rawKey = action.value;
        if (!(0, GraphemeTools_js_1.isSingleGrapheme)(rawKey)) {
          throw new protocol_js_1.InvalidArgumentException(`Invalid key value: ${rawKey}`);
        }
        const isGrapheme = (0, GraphemeTools_js_1.isSingleComplexGrapheme)(rawKey);
        const key = (0, keyUtils_js_1.getNormalizedKey)(rawKey);
        const repeat = source.pressed.has(key);
        const code = (0, keyUtils_js_1.getKeyCode)(rawKey);
        const location = (0, keyUtils_js_1.getKeyLocation)(rawKey);
        switch (key) {
          case "Alt":
            source.alt = true;
            break;
          case "Shift":
            source.shift = true;
            break;
          case "Control":
            source.ctrl = true;
            break;
          case "Meta":
            source.meta = true;
            break;
        }
        source.pressed.add(key);
        const { modifiers } = source;
        const unmodifiedText = getKeyEventUnmodifiedText(key, source, isGrapheme);
        const text = getKeyEventText(code ?? "", source) ?? unmodifiedText;
        let command;
        if (this.#isMacOS && source.meta) {
          switch (code) {
            case "KeyA":
              command = "SelectAll";
              break;
            case "KeyC":
              command = "Copy";
              break;
            case "KeyV":
              command = source.shift ? "PasteAndMatchStyle" : "Paste";
              break;
            case "KeyX":
              command = "Cut";
              break;
            case "KeyZ":
              command = source.shift ? "Redo" : "Undo";
              break;
            default:
          }
        }
        const promises = [
          this.#context.cdpTarget.cdpClient.sendCommand("Input.dispatchKeyEvent", {
            type: text ? "keyDown" : "rawKeyDown",
            windowsVirtualKeyCode: USKeyboardLayout_js_1.KeyToKeyCode[key],
            key,
            code,
            text,
            unmodifiedText,
            autoRepeat: repeat,
            isSystemKey: source.alt || void 0,
            location: location < 3 ? location : void 0,
            isKeypad: location === 3,
            modifiers,
            commands: command ? [command] : void 0
          })
        ];
        if (key === "Escape") {
          if (!source.alt && (this.#isMacOS && !source.ctrl && !source.meta || !this.#isMacOS)) {
            promises.push(this.#context.cdpTarget.cdpClient.sendCommand("Input.cancelDragging"));
          }
        }
        await Promise.all(promises);
      }
      #dispatchKeyUpAction(source, action) {
        const rawKey = action.value;
        if (!(0, GraphemeTools_js_1.isSingleGrapheme)(rawKey)) {
          throw new protocol_js_1.InvalidArgumentException(`Invalid key value: ${rawKey}`);
        }
        const isGrapheme = (0, GraphemeTools_js_1.isSingleComplexGrapheme)(rawKey);
        const key = (0, keyUtils_js_1.getNormalizedKey)(rawKey);
        if (!source.pressed.has(key)) {
          return;
        }
        const code = (0, keyUtils_js_1.getKeyCode)(rawKey);
        const location = (0, keyUtils_js_1.getKeyLocation)(rawKey);
        switch (key) {
          case "Alt":
            source.alt = false;
            break;
          case "Shift":
            source.shift = false;
            break;
          case "Control":
            source.ctrl = false;
            break;
          case "Meta":
            source.meta = false;
            break;
        }
        source.pressed.delete(key);
        const { modifiers } = source;
        const unmodifiedText = getKeyEventUnmodifiedText(key, source, isGrapheme);
        const text = getKeyEventText(code ?? "", source) ?? unmodifiedText;
        return this.#context.cdpTarget.cdpClient.sendCommand("Input.dispatchKeyEvent", {
          type: "keyUp",
          windowsVirtualKeyCode: USKeyboardLayout_js_1.KeyToKeyCode[key],
          key,
          code,
          text,
          unmodifiedText,
          location: location < 3 ? location : void 0,
          isSystemKey: source.alt || void 0,
          isKeypad: location === 3,
          modifiers
        });
      }
    };
    exports.ActionDispatcher = ActionDispatcher;
    var getKeyEventUnmodifiedText = (key, source, isGrapheme) => {
      if (isGrapheme) {
        return key;
      }
      if (key === "Enter") {
        return "\r";
      }
      return [...key].length === 1 ? source.shift ? key.toLocaleUpperCase("en-US") : key : void 0;
    };
    var getKeyEventText = (code, source) => {
      if (source.ctrl) {
        switch (code) {
          case "Digit2":
            if (source.shift) {
              return "\0";
            }
            break;
          case "KeyA":
            return "";
          case "KeyB":
            return "";
          case "KeyC":
            return "";
          case "KeyD":
            return "";
          case "KeyE":
            return "";
          case "KeyF":
            return "";
          case "KeyG":
            return "\x07";
          case "KeyH":
            return "\b";
          case "KeyI":
            return "	";
          case "KeyJ":
            return "\n";
          case "KeyK":
            return "\v";
          case "KeyL":
            return "\f";
          case "KeyM":
            return "\r";
          case "KeyN":
            return "";
          case "KeyO":
            return "";
          case "KeyP":
            return "";
          case "KeyQ":
            return "";
          case "KeyR":
            return "";
          case "KeyS":
            return "";
          case "KeyT":
            return "";
          case "KeyU":
            return "";
          case "KeyV":
            return "";
          case "KeyW":
            return "";
          case "KeyX":
            return "";
          case "KeyY":
            return "";
          case "KeyZ":
            return "";
          case "BracketLeft":
            return "\x1B";
          case "Backslash":
            return "";
          case "BracketRight":
            return "";
          case "Digit6":
            if (source.shift) {
              return "";
            }
            break;
          case "Minus":
            return "";
        }
        return "";
      }
      if (source.alt) {
        return "";
      }
      return;
    };
    function getCdpButton(button) {
      switch (button) {
        case 0:
          return "left";
        case 1:
          return "middle";
        case 2:
          return "right";
        case 3:
          return "back";
        case 4:
          return "forward";
        default:
          return "none";
      }
    }
    function getTilt(action) {
      const altitudeAngle = action.altitudeAngle ?? Math.PI / 2;
      const azimuthAngle = action.azimuthAngle ?? 0;
      let tiltXRadians = 0;
      let tiltYRadians = 0;
      if (altitudeAngle === 0) {
        if (azimuthAngle === 0 || azimuthAngle === 2 * Math.PI) {
          tiltXRadians = Math.PI / 2;
        }
        if (azimuthAngle === Math.PI / 2) {
          tiltYRadians = Math.PI / 2;
        }
        if (azimuthAngle === Math.PI) {
          tiltXRadians = -Math.PI / 2;
        }
        if (azimuthAngle === 3 * Math.PI / 2) {
          tiltYRadians = -Math.PI / 2;
        }
        if (azimuthAngle > 0 && azimuthAngle < Math.PI / 2) {
          tiltXRadians = Math.PI / 2;
          tiltYRadians = Math.PI / 2;
        }
        if (azimuthAngle > Math.PI / 2 && azimuthAngle < Math.PI) {
          tiltXRadians = -Math.PI / 2;
          tiltYRadians = Math.PI / 2;
        }
        if (azimuthAngle > Math.PI && azimuthAngle < 3 * Math.PI / 2) {
          tiltXRadians = -Math.PI / 2;
          tiltYRadians = -Math.PI / 2;
        }
        if (azimuthAngle > 3 * Math.PI / 2 && azimuthAngle < 2 * Math.PI) {
          tiltXRadians = Math.PI / 2;
          tiltYRadians = -Math.PI / 2;
        }
      }
      if (altitudeAngle !== 0) {
        const tanAlt = Math.tan(altitudeAngle);
        tiltXRadians = Math.atan(Math.cos(azimuthAngle) / tanAlt);
        tiltYRadians = Math.atan(Math.sin(azimuthAngle) / tanAlt);
      }
      const factor = 180 / Math.PI;
      return {
        tiltX: Math.round(tiltXRadians * factor),
        tiltY: Math.round(tiltYRadians * factor)
      };
    }
    function getRadii(width, height) {
      return {
        radiusX: width ? width / 2 : 0.5,
        radiusY: height ? height / 2 : 0.5
      };
    }
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/Mutex.js
var require_Mutex = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/Mutex.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Mutex = void 0;
    var Mutex = class {
      #locked = false;
      #acquirers = [];
      // This is FIFO.
      acquire() {
        const state = { resolved: false };
        if (this.#locked) {
          return new Promise((resolve) => {
            this.#acquirers.push(() => resolve(this.#release.bind(this, state)));
          });
        }
        this.#locked = true;
        return Promise.resolve(this.#release.bind(this, state));
      }
      #release(state) {
        if (state.resolved) {
          throw new Error("Cannot release more than once.");
        }
        state.resolved = true;
        const resolve = this.#acquirers.shift();
        if (!resolve) {
          this.#locked = false;
          return;
        }
        resolve();
      }
      async run(action) {
        const release = await this.acquire();
        try {
          const result = await action();
          return result;
        } finally {
          release();
        }
      }
    };
    exports.Mutex = Mutex;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/input/InputState.js
var require_InputState = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/input/InputState.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InputState = void 0;
    var protocol_js_1 = require_protocol();
    var Mutex_js_1 = require_Mutex();
    var InputSource_js_1 = require_InputSource();
    var InputState = class {
      cancelList = [];
      #sources = /* @__PURE__ */ new Map();
      #mutex = new Mutex_js_1.Mutex();
      getOrCreate(id, type, subtype) {
        let source = this.#sources.get(id);
        if (!source) {
          switch (type) {
            case "none":
              source = new InputSource_js_1.NoneSource();
              break;
            case "key":
              source = new InputSource_js_1.KeySource();
              break;
            case "pointer": {
              let pointerId = subtype === "mouse" ? 0 : 2;
              const pointerIds = /* @__PURE__ */ new Set();
              for (const [, source2] of this.#sources) {
                if (source2.type === "pointer") {
                  pointerIds.add(source2.pointerId);
                }
              }
              while (pointerIds.has(pointerId)) {
                ++pointerId;
              }
              source = new InputSource_js_1.PointerSource(pointerId, subtype);
              break;
            }
            case "wheel":
              source = new InputSource_js_1.WheelSource();
              break;
            default:
              throw new protocol_js_1.InvalidArgumentException(`Expected "${"none"}", "${"key"}", "${"pointer"}", or "${"wheel"}". Found unknown source type ${type}.`);
          }
          this.#sources.set(id, source);
          return source;
        }
        if (source.type !== type) {
          throw new protocol_js_1.InvalidArgumentException(`Input source type of ${id} is ${source.type}, but received ${type}.`);
        }
        return source;
      }
      get(id) {
        const source = this.#sources.get(id);
        if (!source) {
          throw new protocol_js_1.UnknownErrorException(`Internal error.`);
        }
        return source;
      }
      getGlobalKeyState() {
        const state = new InputSource_js_1.KeySource();
        for (const [, source] of this.#sources) {
          if (source.type !== "key") {
            continue;
          }
          for (const pressed of source.pressed) {
            state.pressed.add(pressed);
          }
          state.alt ||= source.alt;
          state.ctrl ||= source.ctrl;
          state.meta ||= source.meta;
          state.shift ||= source.shift;
        }
        return state;
      }
      get queue() {
        return this.#mutex;
      }
    };
    exports.InputState = InputState;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/input/InputStateManager.js
var require_InputStateManager = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/input/InputStateManager.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InputStateManager = void 0;
    var assert_js_1 = require_assert();
    var InputState_js_1 = require_InputState();
    var InputStateManager = class extends WeakMap {
      get(context) {
        (0, assert_js_1.assert)(context.isTopLevelContext());
        if (!this.has(context)) {
          this.set(context, new InputState_js_1.InputState());
        }
        return super.get(context);
      }
    };
    exports.InputStateManager = InputStateManager;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/input/InputProcessor.js
var require_InputProcessor = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/input/InputProcessor.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InputProcessor = void 0;
    var protocol_js_1 = require_protocol();
    var assert_js_1 = require_assert();
    var ActionDispatcher_js_1 = require_ActionDispatcher();
    var InputStateManager_js_1 = require_InputStateManager();
    var InputProcessor = class {
      #browsingContextStorage;
      #inputStateManager = new InputStateManager_js_1.InputStateManager();
      constructor(browsingContextStorage) {
        this.#browsingContextStorage = browsingContextStorage;
      }
      async performActions(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        const inputState = this.#inputStateManager.get(context.top);
        const actionsByTick = this.#getActionsByTick(params, inputState);
        const dispatcher = new ActionDispatcher_js_1.ActionDispatcher(inputState, context, await ActionDispatcher_js_1.ActionDispatcher.isMacOS(context).catch(() => false));
        await dispatcher.dispatchActions(actionsByTick);
        return {};
      }
      async releaseActions(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        const topContext = context.top;
        const inputState = this.#inputStateManager.get(topContext);
        const dispatcher = new ActionDispatcher_js_1.ActionDispatcher(inputState, context, await ActionDispatcher_js_1.ActionDispatcher.isMacOS(context).catch(() => false));
        await dispatcher.dispatchTickActions(inputState.cancelList.reverse());
        this.#inputStateManager.delete(topContext);
        return {};
      }
      async setFiles(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        const realm = await context.getOrCreateSandbox(void 0);
        let result;
        try {
          result = await realm.callFunction(String(function getFiles(fileListLength) {
            if (!(this instanceof HTMLInputElement)) {
              if (this instanceof Element) {
                return 1;
              }
              return 0;
            }
            if (this.type !== "file") {
              return 2;
            }
            if (this.disabled) {
              return 3;
            }
            if (fileListLength > 1 && !this.multiple) {
              return 4;
            }
            return;
          }), false, params.element, [{ type: "number", value: params.files.length }]);
        } catch {
          throw new protocol_js_1.NoSuchNodeException(`Could not find element ${params.element.sharedId}`);
        }
        (0, assert_js_1.assert)(result.type === "success");
        if (result.result.type === "number") {
          switch (result.result.value) {
            case 0: {
              throw new protocol_js_1.NoSuchElementException(`Could not find element ${params.element.sharedId}`);
            }
            case 1: {
              throw new protocol_js_1.UnableToSetFileInputException(`Element ${params.element.sharedId} is not a input`);
            }
            case 2: {
              throw new protocol_js_1.UnableToSetFileInputException(`Input element ${params.element.sharedId} is not a file type`);
            }
            case 3: {
              throw new protocol_js_1.UnableToSetFileInputException(`Input element ${params.element.sharedId} is disabled`);
            }
            case 4: {
              throw new protocol_js_1.UnableToSetFileInputException(`Cannot set multiple files on a non-multiple input element`);
            }
          }
        }
        if (params.files.length === 0) {
          await realm.callFunction(String(function dispatchEvent() {
            if (this.files?.length === 0) {
              this.dispatchEvent(new Event("cancel", {
                bubbles: true
              }));
              return;
            }
            this.files = new DataTransfer().files;
            this.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
            this.dispatchEvent(new Event("change", { bubbles: true }));
          }), false, params.element);
          return {};
        }
        const paths = [];
        for (let i = 0; i < params.files.length; ++i) {
          const result2 = await realm.callFunction(
            String(function getFiles(index) {
              return this.files?.item(index);
            }),
            false,
            params.element,
            [{ type: "number", value: 0 }],
            "root"
            /* Script.ResultOwnership.Root */
          );
          (0, assert_js_1.assert)(result2.type === "success");
          if (result2.result.type !== "object") {
            break;
          }
          const { handle } = result2.result;
          (0, assert_js_1.assert)(handle !== void 0);
          const { path } = await realm.cdpClient.sendCommand("DOM.getFileInfo", {
            objectId: handle
          });
          paths.push(path);
          void realm.disown(handle).catch(void 0);
        }
        paths.sort();
        const sortedFiles = [...params.files].sort();
        if (paths.length !== params.files.length || sortedFiles.some((path, index) => {
          return paths[index] !== path;
        })) {
          const { objectId } = await realm.deserializeForCdp(params.element);
          (0, assert_js_1.assert)(objectId !== void 0);
          await realm.cdpClient.sendCommand("DOM.setFileInputFiles", {
            files: params.files,
            objectId
          });
        } else {
          await realm.callFunction(String(function dispatchEvent() {
            this.dispatchEvent(new Event("cancel", {
              bubbles: true
            }));
          }), false, params.element);
        }
        return {};
      }
      #getActionsByTick(params, inputState) {
        const actionsByTick = [];
        for (const action of params.actions) {
          switch (action.type) {
            case "pointer": {
              action.parameters ??= {
                pointerType: "mouse"
                /* Input.PointerType.Mouse */
              };
              action.parameters.pointerType ??= "mouse";
              const source = inputState.getOrCreate(action.id, "pointer", action.parameters.pointerType);
              if (source.subtype !== action.parameters.pointerType) {
                throw new protocol_js_1.InvalidArgumentException(`Expected input source ${action.id} to be ${source.subtype}; got ${action.parameters.pointerType}.`);
              }
              break;
            }
            default:
              inputState.getOrCreate(action.id, action.type);
          }
          const actions = action.actions.map((item) => ({
            id: action.id,
            action: item
          }));
          for (let i = 0; i < actions.length; i++) {
            if (actionsByTick.length === i) {
              actionsByTick.push([]);
            }
            actionsByTick[i].push(actions[i]);
          }
        }
        return actionsByTick;
      }
    };
    exports.InputProcessor = InputProcessor;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/Base64.js
var require_Base64 = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/Base64.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.base64ToString = base64ToString;
    function base64ToString(base64Str) {
      if ("atob" in globalThis) {
        return globalThis.atob(base64Str);
      }
      return Buffer.from(base64Str, "base64").toString("ascii");
    }
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/network/NetworkUtils.js
var require_NetworkUtils = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/network/NetworkUtils.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.computeHeadersSize = computeHeadersSize;
    exports.bidiNetworkHeadersFromCdpNetworkHeaders = bidiNetworkHeadersFromCdpNetworkHeaders;
    exports.bidiNetworkHeadersFromCdpNetworkHeadersEntries = bidiNetworkHeadersFromCdpNetworkHeadersEntries;
    exports.cdpNetworkHeadersFromBidiNetworkHeaders = cdpNetworkHeadersFromBidiNetworkHeaders;
    exports.bidiNetworkHeadersFromCdpFetchHeaders = bidiNetworkHeadersFromCdpFetchHeaders;
    exports.cdpFetchHeadersFromBidiNetworkHeaders = cdpFetchHeadersFromBidiNetworkHeaders;
    exports.networkHeaderFromCookieHeaders = networkHeaderFromCookieHeaders;
    exports.cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction = cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction;
    exports.cdpToBiDiCookie = cdpToBiDiCookie;
    exports.deserializeByteValue = deserializeByteValue;
    exports.bidiToCdpCookie = bidiToCdpCookie;
    exports.sameSiteBiDiToCdp = sameSiteBiDiToCdp;
    exports.isSpecialScheme = isSpecialScheme;
    exports.matchUrlPattern = matchUrlPattern;
    exports.bidiBodySizeFromCdpPostDataEntries = bidiBodySizeFromCdpPostDataEntries;
    exports.getTiming = getTiming;
    var ErrorResponse_js_1 = require_ErrorResponse();
    var Base64_js_1 = require_Base64();
    function computeHeadersSize(headers) {
      const requestHeaders = headers.reduce((acc, header) => {
        return `${acc}${header.name}: ${header.value.value}\r
`;
      }, "");
      return new TextEncoder().encode(requestHeaders).length;
    }
    function bidiNetworkHeadersFromCdpNetworkHeaders(headers) {
      if (!headers) {
        return [];
      }
      return Object.entries(headers).map(([name, value]) => ({
        name,
        value: {
          type: "string",
          value
        }
      }));
    }
    function bidiNetworkHeadersFromCdpNetworkHeadersEntries(headers) {
      if (!headers) {
        return [];
      }
      return headers.map(({ name, value }) => ({
        name,
        value: {
          type: "string",
          value
        }
      }));
    }
    function cdpNetworkHeadersFromBidiNetworkHeaders(headers) {
      if (headers === void 0) {
        return void 0;
      }
      return headers.reduce((result, header) => {
        result[header.name] = header.value.value;
        return result;
      }, {});
    }
    function bidiNetworkHeadersFromCdpFetchHeaders(headers) {
      if (!headers) {
        return [];
      }
      return headers.map(({ name, value }) => ({
        name,
        value: {
          type: "string",
          value
        }
      }));
    }
    function cdpFetchHeadersFromBidiNetworkHeaders(headers) {
      if (headers === void 0) {
        return void 0;
      }
      return headers.map(({ name, value }) => ({
        name,
        value: value.value
      }));
    }
    function networkHeaderFromCookieHeaders(headers) {
      if (headers === void 0) {
        return void 0;
      }
      const value = headers.reduce((acc, value2, index) => {
        if (index > 0) {
          acc += ";";
        }
        const cookieValue = value2.value.type === "base64" ? btoa(value2.value.value) : value2.value.value;
        acc += `${value2.name}=${cookieValue}`;
        return acc;
      }, "");
      return {
        name: "Cookie",
        value: {
          type: "string",
          value
        }
      };
    }
    function cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction(action) {
      switch (action) {
        case "default":
          return "Default";
        case "cancel":
          return "CancelAuth";
        case "provideCredentials":
          return "ProvideCredentials";
      }
    }
    function cdpToBiDiCookie(cookie) {
      const result = {
        name: cookie.name,
        value: { type: "string", value: cookie.value },
        domain: cookie.domain,
        path: cookie.path,
        size: cookie.size,
        httpOnly: cookie.httpOnly,
        secure: cookie.secure,
        sameSite: cookie.sameSite === void 0 ? "none" : sameSiteCdpToBiDi(cookie.sameSite),
        ...cookie.expires >= 0 ? { expiry: cookie.expires } : void 0
      };
      result[`goog:session`] = cookie.session;
      result[`goog:priority`] = cookie.priority;
      result[`goog:sameParty`] = cookie.sameParty;
      result[`goog:sourceScheme`] = cookie.sourceScheme;
      result[`goog:sourcePort`] = cookie.sourcePort;
      if (cookie.partitionKey !== void 0) {
        result[`goog:partitionKey`] = cookie.partitionKey;
      }
      if (cookie.partitionKeyOpaque !== void 0) {
        result[`goog:partitionKeyOpaque`] = cookie.partitionKeyOpaque;
      }
      return result;
    }
    function deserializeByteValue(value) {
      if (value.type === "base64") {
        return (0, Base64_js_1.base64ToString)(value.value);
      }
      return value.value;
    }
    function bidiToCdpCookie(params, partitionKey) {
      const deserializedValue = deserializeByteValue(params.cookie.value);
      const result = {
        name: params.cookie.name,
        value: deserializedValue,
        domain: params.cookie.domain,
        path: params.cookie.path ?? "/",
        secure: params.cookie.secure ?? false,
        httpOnly: params.cookie.httpOnly ?? false,
        ...partitionKey.sourceOrigin !== void 0 && {
          partitionKey: {
            hasCrossSiteAncestor: false,
            // CDP's `partitionKey.topLevelSite` is the BiDi's `partition.sourceOrigin`.
            topLevelSite: partitionKey.sourceOrigin
          }
        },
        ...params.cookie.expiry !== void 0 && {
          expires: params.cookie.expiry
        },
        ...params.cookie.sameSite !== void 0 && {
          sameSite: sameSiteBiDiToCdp(params.cookie.sameSite)
        }
      };
      if (params.cookie[`goog:url`] !== void 0) {
        result.url = params.cookie[`goog:url`];
      }
      if (params.cookie[`goog:priority`] !== void 0) {
        result.priority = params.cookie[`goog:priority`];
      }
      if (params.cookie[`goog:sameParty`] !== void 0) {
        result.sameParty = params.cookie[`goog:sameParty`];
      }
      if (params.cookie[`goog:sourceScheme`] !== void 0) {
        result.sourceScheme = params.cookie[`goog:sourceScheme`];
      }
      if (params.cookie[`goog:sourcePort`] !== void 0) {
        result.sourcePort = params.cookie[`goog:sourcePort`];
      }
      return result;
    }
    function sameSiteCdpToBiDi(sameSite) {
      switch (sameSite) {
        case "Strict":
          return "strict";
        case "None":
          return "none";
        case "Lax":
          return "lax";
        default:
          return "lax";
      }
    }
    function sameSiteBiDiToCdp(sameSite) {
      switch (sameSite) {
        case "strict":
          return "Strict";
        case "lax":
          return "Lax";
        case "none":
          return "None";
      }
      throw new ErrorResponse_js_1.InvalidArgumentException(`Unknown 'sameSite' value ${sameSite}`);
    }
    function isSpecialScheme(protocol) {
      return ["ftp", "file", "http", "https", "ws", "wss"].includes(protocol.replace(/:$/, ""));
    }
    function getScheme(url) {
      return url.protocol.replace(/:$/, "");
    }
    function matchUrlPattern(pattern, url) {
      const parsedUrl = new URL(url);
      if (pattern.protocol !== void 0 && pattern.protocol !== getScheme(parsedUrl)) {
        return false;
      }
      if (pattern.hostname !== void 0 && pattern.hostname !== parsedUrl.hostname) {
        return false;
      }
      if (pattern.port !== void 0 && pattern.port !== parsedUrl.port) {
        return false;
      }
      if (pattern.pathname !== void 0 && pattern.pathname !== parsedUrl.pathname) {
        return false;
      }
      if (pattern.search !== void 0 && pattern.search !== parsedUrl.search) {
        return false;
      }
      return true;
    }
    function bidiBodySizeFromCdpPostDataEntries(entries) {
      let size = 0;
      for (const entry of entries) {
        size += atob(entry.bytes ?? "").length;
      }
      return size;
    }
    function getTiming(timing) {
      if (!timing) {
        return 0;
      }
      if (timing < 0) {
        return 0;
      }
      return timing;
    }
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/network/NetworkProcessor.js
var require_NetworkProcessor = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/network/NetworkProcessor.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NetworkProcessor = void 0;
    var protocol_js_1 = require_protocol();
    var NetworkUtils_js_1 = require_NetworkUtils();
    var NetworkProcessor = class _NetworkProcessor {
      #browsingContextStorage;
      #networkStorage;
      constructor(browsingContextStorage, networkStorage) {
        this.#browsingContextStorage = browsingContextStorage;
        this.#networkStorage = networkStorage;
      }
      async addIntercept(params) {
        this.#browsingContextStorage.verifyTopLevelContextsList(params.contexts);
        const urlPatterns = params.urlPatterns ?? [];
        const parsedUrlPatterns = _NetworkProcessor.parseUrlPatterns(urlPatterns);
        const intercept = this.#networkStorage.addIntercept({
          urlPatterns: parsedUrlPatterns,
          phases: params.phases,
          contexts: params.contexts
        });
        await Promise.all(this.#browsingContextStorage.getAllContexts().map((context) => {
          return context.cdpTarget.toggleNetwork();
        }));
        return {
          intercept
        };
      }
      async continueRequest(params) {
        if (params.url !== void 0) {
          _NetworkProcessor.parseUrlString(params.url);
        }
        if (params.method !== void 0) {
          if (!_NetworkProcessor.isMethodValid(params.method)) {
            throw new protocol_js_1.InvalidArgumentException(`Method '${params.method}' is invalid.`);
          }
        }
        if (params.headers) {
          _NetworkProcessor.validateHeaders(params.headers);
        }
        const request = this.#getBlockedRequestOrFail(params.request, [
          "beforeRequestSent"
        ]);
        try {
          await request.continueRequest(params);
        } catch (error) {
          throw _NetworkProcessor.wrapInterceptionError(error);
        }
        return {};
      }
      async continueResponse(params) {
        if (params.headers) {
          _NetworkProcessor.validateHeaders(params.headers);
        }
        const request = this.#getBlockedRequestOrFail(params.request, [
          "authRequired",
          "responseStarted"
        ]);
        try {
          await request.continueResponse(params);
        } catch (error) {
          throw _NetworkProcessor.wrapInterceptionError(error);
        }
        return {};
      }
      async continueWithAuth(params) {
        const networkId = params.request;
        const request = this.#getBlockedRequestOrFail(networkId, [
          "authRequired"
        ]);
        await request.continueWithAuth(params);
        return {};
      }
      async failRequest({ request: networkId }) {
        const request = this.#getRequestOrFail(networkId);
        if (request.interceptPhase === "authRequired") {
          throw new protocol_js_1.InvalidArgumentException(`Request '${networkId}' in 'authRequired' phase cannot be failed`);
        }
        if (!request.interceptPhase) {
          throw new protocol_js_1.NoSuchRequestException(`No blocked request found for network id '${networkId}'`);
        }
        await request.failRequest("Failed");
        return {};
      }
      async provideResponse(params) {
        if (params.headers) {
          _NetworkProcessor.validateHeaders(params.headers);
        }
        const request = this.#getBlockedRequestOrFail(params.request, [
          "beforeRequestSent",
          "responseStarted",
          "authRequired"
        ]);
        try {
          await request.provideResponse(params);
        } catch (error) {
          throw _NetworkProcessor.wrapInterceptionError(error);
        }
        return {};
      }
      async removeIntercept(params) {
        this.#networkStorage.removeIntercept(params.intercept);
        await Promise.all(this.#browsingContextStorage.getAllContexts().map((context) => {
          return context.cdpTarget.toggleNetwork();
        }));
        return {};
      }
      async setCacheBehavior(params) {
        const contexts = this.#browsingContextStorage.verifyTopLevelContextsList(params.contexts);
        if (contexts.size === 0) {
          this.#networkStorage.defaultCacheBehavior = params.cacheBehavior;
          await Promise.all(this.#browsingContextStorage.getAllContexts().map((context) => {
            return context.cdpTarget.toggleSetCacheDisabled();
          }));
          return {};
        }
        const cacheDisabled = params.cacheBehavior === "bypass";
        await Promise.all([...contexts.values()].map((context) => {
          return context.cdpTarget.toggleSetCacheDisabled(cacheDisabled);
        }));
        return {};
      }
      #getRequestOrFail(id) {
        const request = this.#networkStorage.getRequestById(id);
        if (!request) {
          throw new protocol_js_1.NoSuchRequestException(`Network request with ID '${id}' doesn't exist`);
        }
        return request;
      }
      #getBlockedRequestOrFail(id, phases) {
        const request = this.#getRequestOrFail(id);
        if (!request.interceptPhase) {
          throw new protocol_js_1.NoSuchRequestException(`No blocked request found for network id '${id}'`);
        }
        if (request.interceptPhase && !phases.includes(request.interceptPhase)) {
          throw new protocol_js_1.InvalidArgumentException(`Blocked request for network id '${id}' is in '${request.interceptPhase}' phase`);
        }
        return request;
      }
      /**
       * Validate https://fetch.spec.whatwg.org/#header-value
       */
      static validateHeaders(headers) {
        for (const header of headers) {
          let headerValue;
          if (header.value.type === "string") {
            headerValue = header.value.value;
          } else {
            headerValue = atob(header.value.value);
          }
          if (headerValue !== headerValue.trim() || headerValue.includes("\n") || headerValue.includes("\0")) {
            throw new protocol_js_1.InvalidArgumentException(`Header value '${headerValue}' is not acceptable value`);
          }
        }
      }
      static isMethodValid(method) {
        return /^[!#$%&'*+\-.^_`|~a-zA-Z\d]+$/.test(method);
      }
      /**
       * Attempts to parse the given url.
       * Throws an InvalidArgumentException if the url is invalid.
       */
      static parseUrlString(url) {
        try {
          return new URL(url);
        } catch (error) {
          throw new protocol_js_1.InvalidArgumentException(`Invalid URL '${url}': ${error}`);
        }
      }
      static parseUrlPatterns(urlPatterns) {
        return urlPatterns.map((urlPattern) => {
          let patternUrl = "";
          let hasProtocol = true;
          let hasHostname = true;
          let hasPort = true;
          let hasPathname = true;
          let hasSearch = true;
          switch (urlPattern.type) {
            case "string": {
              patternUrl = unescapeURLPattern(urlPattern.pattern);
              break;
            }
            case "pattern": {
              if (urlPattern.protocol === void 0) {
                hasProtocol = false;
                patternUrl += "http";
              } else {
                if (urlPattern.protocol === "") {
                  throw new protocol_js_1.InvalidArgumentException("URL pattern must specify a protocol");
                }
                urlPattern.protocol = unescapeURLPattern(urlPattern.protocol);
                if (!urlPattern.protocol.match(/^[a-zA-Z+-.]+$/)) {
                  throw new protocol_js_1.InvalidArgumentException("Forbidden characters");
                }
                patternUrl += urlPattern.protocol;
              }
              const scheme = patternUrl.toLocaleLowerCase();
              patternUrl += ":";
              if ((0, NetworkUtils_js_1.isSpecialScheme)(scheme)) {
                patternUrl += "//";
              }
              if (urlPattern.hostname === void 0) {
                if (scheme !== "file") {
                  patternUrl += "placeholder";
                }
                hasHostname = false;
              } else {
                if (urlPattern.hostname === "") {
                  throw new protocol_js_1.InvalidArgumentException("URL pattern must specify a hostname");
                }
                if (urlPattern.protocol === "file") {
                  throw new protocol_js_1.InvalidArgumentException(`URL pattern protocol cannot be 'file'`);
                }
                urlPattern.hostname = unescapeURLPattern(urlPattern.hostname);
                let insideBrackets = false;
                for (const c of urlPattern.hostname) {
                  if (c === "/" || c === "?" || c === "#") {
                    throw new protocol_js_1.InvalidArgumentException(`'/', '?', '#' are forbidden in hostname`);
                  }
                  if (!insideBrackets && c === ":") {
                    throw new protocol_js_1.InvalidArgumentException(`':' is only allowed inside brackets in hostname`);
                  }
                  if (c === "[") {
                    insideBrackets = true;
                  }
                  if (c === "]") {
                    insideBrackets = false;
                  }
                }
                patternUrl += urlPattern.hostname;
              }
              if (urlPattern.port === void 0) {
                hasPort = false;
              } else {
                if (urlPattern.port === "") {
                  throw new protocol_js_1.InvalidArgumentException(`URL pattern must specify a port`);
                }
                urlPattern.port = unescapeURLPattern(urlPattern.port);
                patternUrl += ":";
                if (!urlPattern.port.match(/^\d+$/)) {
                  throw new protocol_js_1.InvalidArgumentException("Forbidden characters");
                }
                patternUrl += urlPattern.port;
              }
              if (urlPattern.pathname === void 0) {
                hasPathname = false;
              } else {
                urlPattern.pathname = unescapeURLPattern(urlPattern.pathname);
                if (urlPattern.pathname[0] !== "/") {
                  patternUrl += "/";
                }
                if (urlPattern.pathname.includes("#") || urlPattern.pathname.includes("?")) {
                  throw new protocol_js_1.InvalidArgumentException("Forbidden characters");
                }
                patternUrl += urlPattern.pathname;
              }
              if (urlPattern.search === void 0) {
                hasSearch = false;
              } else {
                urlPattern.search = unescapeURLPattern(urlPattern.search);
                if (urlPattern.search[0] !== "?") {
                  patternUrl += "?";
                }
                if (urlPattern.search.includes("#")) {
                  throw new protocol_js_1.InvalidArgumentException("Forbidden characters");
                }
                patternUrl += urlPattern.search;
              }
              break;
            }
          }
          const serializePort = (url) => {
            const defaultPorts = {
              "ftp:": 21,
              "file:": null,
              "http:": 80,
              "https:": 443,
              "ws:": 80,
              "wss:": 443
            };
            if ((0, NetworkUtils_js_1.isSpecialScheme)(url.protocol) && defaultPorts[url.protocol] !== null && (!url.port || String(defaultPorts[url.protocol]) === url.port)) {
              return "";
            } else if (url.port) {
              return url.port;
            }
            return void 0;
          };
          try {
            const url = new URL(patternUrl);
            return {
              protocol: hasProtocol ? url.protocol.replace(/:$/, "") : void 0,
              hostname: hasHostname ? url.hostname : void 0,
              port: hasPort ? serializePort(url) : void 0,
              pathname: hasPathname && url.pathname ? url.pathname : void 0,
              search: hasSearch ? url.search : void 0
            };
          } catch (err) {
            throw new protocol_js_1.InvalidArgumentException(`${err.message} '${patternUrl}'`);
          }
        });
      }
      static wrapInterceptionError(error) {
        if (error?.message.includes("Invalid header")) {
          return new protocol_js_1.InvalidArgumentException("Invalid header");
        }
        return error;
      }
    };
    exports.NetworkProcessor = NetworkProcessor;
    function unescapeURLPattern(pattern) {
      const forbidden = /* @__PURE__ */ new Set(["(", ")", "*", "{", "}"]);
      let result = "";
      let isEscaped = false;
      for (const c of pattern) {
        if (!isEscaped) {
          if (forbidden.has(c)) {
            throw new protocol_js_1.InvalidArgumentException("Forbidden characters");
          }
          if (c === "\\") {
            isEscaped = true;
            continue;
          }
        }
        result += c;
        isEscaped = false;
      }
      return result;
    }
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/permissions/PermissionsProcessor.js
var require_PermissionsProcessor = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/permissions/PermissionsProcessor.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PermissionsProcessor = void 0;
    var protocol_js_1 = require_protocol();
    var PermissionsProcessor = class {
      #browserCdpClient;
      constructor(browserCdpClient) {
        this.#browserCdpClient = browserCdpClient;
      }
      async setPermissions(params) {
        try {
          const userContextId = params["goog:userContext"] || params.userContext;
          await this.#browserCdpClient.sendCommand("Browser.setPermission", {
            origin: params.origin,
            browserContextId: userContextId && userContextId !== "default" ? userContextId : void 0,
            permission: {
              name: params.descriptor.name
            },
            setting: params.state
          });
        } catch (err) {
          if (err.message === `Permission can't be granted to opaque origins.`) {
            return {};
          }
          throw new protocol_js_1.InvalidArgumentException(err.message);
        }
        return {};
      }
    };
    exports.PermissionsProcessor = PermissionsProcessor;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/uuid.js
var require_uuid = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/uuid.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uuidv4 = uuidv4;
    function bytesToHex(bytes) {
      return bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, "0"), "");
    }
    function uuidv4() {
      if ("crypto" in globalThis && "randomUUID" in globalThis.crypto) {
        return globalThis.crypto.randomUUID();
      }
      const randomValues = new Uint8Array(16);
      if ("crypto" in globalThis && "getRandomValues" in globalThis.crypto) {
        globalThis.crypto.getRandomValues(randomValues);
      } else {
        __require("crypto").webcrypto.getRandomValues(randomValues);
      }
      randomValues[6] = randomValues[6] & 15 | 64;
      randomValues[8] = randomValues[8] & 63 | 128;
      return [
        bytesToHex(randomValues.subarray(0, 4)),
        bytesToHex(randomValues.subarray(4, 6)),
        bytesToHex(randomValues.subarray(6, 8)),
        bytesToHex(randomValues.subarray(8, 10)),
        bytesToHex(randomValues.subarray(10, 16))
      ].join("-");
    }
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/script/ChannelProxy.js
var require_ChannelProxy = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/script/ChannelProxy.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChannelProxy = void 0;
    var protocol_js_1 = require_protocol();
    var log_js_1 = require_log();
    var uuid_js_1 = require_uuid();
    var ChannelProxy = class _ChannelProxy {
      #properties;
      #id = (0, uuid_js_1.uuidv4)();
      #logger;
      constructor(channel, logger) {
        this.#properties = channel;
        this.#logger = logger;
      }
      /**
       * Creates a channel proxy in the given realm, initialises listener and
       * returns a handle to `sendMessage` delegate.
       */
      async init(realm, eventManager) {
        const channelHandle = await _ChannelProxy.#createAndGetHandleInRealm(realm);
        const sendMessageHandle = await _ChannelProxy.#createSendMessageHandle(realm, channelHandle);
        void this.#startListener(realm, channelHandle, eventManager);
        return sendMessageHandle;
      }
      /** Gets a ChannelProxy from window and returns its handle. */
      async startListenerFromWindow(realm, eventManager) {
        try {
          const channelHandle = await this.#getHandleFromWindow(realm);
          void this.#startListener(realm, channelHandle, eventManager);
        } catch (error) {
          this.#logger?.(log_js_1.LogType.debugError, error);
        }
      }
      /**
       * Evaluation string which creates a ChannelProxy object on the client side.
       */
      static #createChannelProxyEvalStr() {
        const functionStr = String(() => {
          const queue = [];
          let queueNonEmptyResolver = null;
          return {
            /**
             * Gets a promise, which is resolved as soon as a message occurs
             * in the queue.
             */
            async getMessage() {
              const onMessage = queue.length > 0 ? Promise.resolve() : new Promise((resolve) => {
                queueNonEmptyResolver = resolve;
              });
              await onMessage;
              return queue.shift();
            },
            /**
             * Adds a message to the queue.
             * Resolves the pending promise if needed.
             */
            sendMessage(message) {
              queue.push(message);
              if (queueNonEmptyResolver !== null) {
                queueNonEmptyResolver();
                queueNonEmptyResolver = null;
              }
            }
          };
        });
        return `(${functionStr})()`;
      }
      /** Creates a ChannelProxy in the given realm. */
      static async #createAndGetHandleInRealm(realm) {
        const createChannelHandleResult = await realm.cdpClient.sendCommand("Runtime.evaluate", {
          expression: this.#createChannelProxyEvalStr(),
          contextId: realm.executionContextId,
          serializationOptions: {
            serialization: "idOnly"
          }
        });
        if (createChannelHandleResult.exceptionDetails || createChannelHandleResult.result.objectId === void 0) {
          throw new Error(`Cannot create channel`);
        }
        return createChannelHandleResult.result.objectId;
      }
      /** Gets a handle to `sendMessage` delegate from the ChannelProxy handle. */
      static async #createSendMessageHandle(realm, channelHandle) {
        const sendMessageArgResult = await realm.cdpClient.sendCommand("Runtime.callFunctionOn", {
          functionDeclaration: String((channelHandle2) => {
            return channelHandle2.sendMessage;
          }),
          arguments: [{ objectId: channelHandle }],
          executionContextId: realm.executionContextId,
          serializationOptions: {
            serialization: "idOnly"
          }
        });
        return sendMessageArgResult.result.objectId;
      }
      /** Starts listening for the channel events of the provided ChannelProxy. */
      async #startListener(realm, channelHandle, eventManager) {
        for (; ; ) {
          try {
            const message = await realm.cdpClient.sendCommand("Runtime.callFunctionOn", {
              functionDeclaration: String(async (channelHandle2) => await channelHandle2.getMessage()),
              arguments: [
                {
                  objectId: channelHandle
                }
              ],
              awaitPromise: true,
              executionContextId: realm.executionContextId,
              serializationOptions: {
                serialization: "deep",
                maxDepth: this.#properties.serializationOptions?.maxObjectDepth ?? void 0
              }
            });
            if (message.exceptionDetails) {
              throw new Error("Runtime.callFunctionOn in ChannelProxy", {
                cause: message.exceptionDetails
              });
            }
            for (const browsingContext of realm.associatedBrowsingContexts) {
              eventManager.registerEvent({
                type: "event",
                method: protocol_js_1.ChromiumBidi.Script.EventNames.Message,
                params: {
                  channel: this.#properties.channel,
                  data: realm.cdpToBidiValue(
                    message,
                    this.#properties.ownership ?? "none"
                    /* Script.ResultOwnership.None */
                  ),
                  source: realm.source
                }
              }, browsingContext.id);
            }
          } catch (error) {
            this.#logger?.(log_js_1.LogType.debugError, error);
            break;
          }
        }
      }
      /**
       * Returns a handle of ChannelProxy from window's property which was set there
       * by `getEvalInWindowStr`. If window property is not set yet, sets a promise
       * resolver to the window property, so that `getEvalInWindowStr` can resolve
       * the promise later on with the channel.
       * This is needed because `getEvalInWindowStr` can be called before or
       * after this method.
       */
      async #getHandleFromWindow(realm) {
        const channelHandleResult = await realm.cdpClient.sendCommand("Runtime.callFunctionOn", {
          functionDeclaration: String((id) => {
            const w = window;
            if (w[id] === void 0) {
              return new Promise((resolve) => w[id] = resolve);
            }
            const channelProxy = w[id];
            delete w[id];
            return channelProxy;
          }),
          arguments: [{ value: this.#id }],
          executionContextId: realm.executionContextId,
          awaitPromise: true,
          serializationOptions: {
            serialization: "idOnly"
          }
        });
        if (channelHandleResult.exceptionDetails !== void 0 || channelHandleResult.result.objectId === void 0) {
          throw new Error(`ChannelHandle not found in window["${this.#id}"]`);
        }
        return channelHandleResult.result.objectId;
      }
      /**
       * String to be evaluated to create a ProxyChannel and put it to window.
       * Returns the delegate `sendMessage`. Used to provide an argument for preload
       * script. Does the following:
       * 1. Creates a ChannelProxy.
       * 2. Puts the ChannelProxy to window['${this.#id}'] or resolves the promise
       *    by calling delegate stored in window['${this.#id}'].
       *    This is needed because `#getHandleFromWindow` can be called before or
       *    after this method.
       * 3. Returns the delegate `sendMessage` of the created ChannelProxy.
       */
      getEvalInWindowStr() {
        const delegate = String((id, channelProxy) => {
          const w = window;
          if (w[id] === void 0) {
            w[id] = channelProxy;
          } else {
            w[id](channelProxy);
            delete w[id];
          }
          return channelProxy.sendMessage;
        });
        const channelProxyEval = _ChannelProxy.#createChannelProxyEvalStr();
        return `(${delegate})('${this.#id}',${channelProxyEval})`;
      }
    };
    exports.ChannelProxy = ChannelProxy;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/script/PreloadScript.js
var require_PreloadScript = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/script/PreloadScript.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PreloadScript = void 0;
    var uuid_js_1 = require_uuid();
    var ChannelProxy_js_1 = require_ChannelProxy();
    var PreloadScript = class {
      /** BiDi ID, an automatically generated UUID. */
      #id = (0, uuid_js_1.uuidv4)();
      /** CDP preload scripts. */
      #cdpPreloadScripts = [];
      /** The script itself, in a format expected by the spec i.e. a function. */
      #functionDeclaration;
      /** Targets, in which the preload script is initialized. */
      #targetIds = /* @__PURE__ */ new Set();
      /** Channels to be added as arguments to functionDeclaration. */
      #channels;
      /** The script sandbox / world name. */
      #sandbox;
      /** The browsing contexts to execute the preload scripts in, if any. */
      #contexts;
      get id() {
        return this.#id;
      }
      get targetIds() {
        return this.#targetIds;
      }
      constructor(params, logger) {
        this.#channels = params.arguments?.map((a) => new ChannelProxy_js_1.ChannelProxy(a.value, logger)) ?? [];
        this.#functionDeclaration = params.functionDeclaration;
        this.#sandbox = params.sandbox;
        this.#contexts = params.contexts;
      }
      /** Channels of the preload script. */
      get channels() {
        return this.#channels;
      }
      /** Contexts of the preload script, if any */
      get contexts() {
        return this.#contexts;
      }
      /**
       * String to be evaluated. Wraps user-provided function so that the following
       * steps are run:
       * 1. Create channels.
       * 2. Store the created channels in window.
       * 3. Call the user-provided function with channels as arguments.
       */
      #getEvaluateString() {
        const channelsArgStr = `[${this.channels.map((c) => c.getEvalInWindowStr()).join(", ")}]`;
        return `(()=>{(${this.#functionDeclaration})(...${channelsArgStr})})()`;
      }
      /**
       * Adds the script to the given CDP targets by calling the
       * `Page.addScriptToEvaluateOnNewDocument` command.
       */
      async initInTargets(cdpTargets, runImmediately) {
        await Promise.all(Array.from(cdpTargets).map((cdpTarget) => this.initInTarget(cdpTarget, runImmediately)));
      }
      /**
       * Adds the script to the given CDP target by calling the
       * `Page.addScriptToEvaluateOnNewDocument` command.
       */
      async initInTarget(cdpTarget, runImmediately) {
        const addCdpPreloadScriptResult = await cdpTarget.cdpClient.sendCommand("Page.addScriptToEvaluateOnNewDocument", {
          source: this.#getEvaluateString(),
          worldName: this.#sandbox,
          runImmediately
        });
        this.#cdpPreloadScripts.push({
          target: cdpTarget,
          preloadScriptId: addCdpPreloadScriptResult.identifier
        });
        this.#targetIds.add(cdpTarget.id);
      }
      /**
       * Removes this script from all CDP targets.
       */
      async remove() {
        await Promise.all([
          this.#cdpPreloadScripts.map(async (cdpPreloadScript) => {
            const cdpTarget = cdpPreloadScript.target;
            const cdpPreloadScriptId = cdpPreloadScript.preloadScriptId;
            return await cdpTarget.cdpClient.sendCommand("Page.removeScriptToEvaluateOnNewDocument", {
              identifier: cdpPreloadScriptId
            });
          })
        ]);
      }
      /** Removes the provided cdp target from the list of cdp preload scripts. */
      dispose(cdpTargetId) {
        this.#cdpPreloadScripts = this.#cdpPreloadScripts.filter((cdpPreloadScript) => cdpPreloadScript.target?.id !== cdpTargetId);
        this.#targetIds.delete(cdpTargetId);
      }
    };
    exports.PreloadScript = PreloadScript;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/script/ScriptProcessor.js
var require_ScriptProcessor = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/script/ScriptProcessor.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScriptProcessor = void 0;
    var protocol_js_1 = require_protocol();
    var PreloadScript_js_1 = require_PreloadScript();
    var ScriptProcessor = class {
      #eventManager;
      #browsingContextStorage;
      #realmStorage;
      #preloadScriptStorage;
      #logger;
      constructor(eventManager, browsingContextStorage, realmStorage, preloadScriptStorage, logger) {
        this.#browsingContextStorage = browsingContextStorage;
        this.#realmStorage = realmStorage;
        this.#preloadScriptStorage = preloadScriptStorage;
        this.#logger = logger;
        this.#eventManager = eventManager;
        this.#eventManager.addSubscribeHook(protocol_js_1.ChromiumBidi.Script.EventNames.RealmCreated, this.#onRealmCreatedSubscribeHook.bind(this));
      }
      #onRealmCreatedSubscribeHook(contextId) {
        const context = this.#browsingContextStorage.getContext(contextId);
        const contextsToReport = [
          context,
          ...this.#browsingContextStorage.getContext(contextId).allChildren
        ];
        const realms = /* @__PURE__ */ new Set();
        for (const reportContext of contextsToReport) {
          const realmsForContext = this.#realmStorage.findRealms({
            browsingContextId: reportContext.id
          });
          for (const realm of realmsForContext) {
            realms.add(realm);
          }
        }
        for (const realm of realms) {
          this.#eventManager.registerEvent({
            type: "event",
            method: protocol_js_1.ChromiumBidi.Script.EventNames.RealmCreated,
            params: realm.realmInfo
          }, context.id);
        }
        return Promise.resolve();
      }
      async addPreloadScript(params) {
        const contexts = this.#browsingContextStorage.verifyTopLevelContextsList(params.contexts);
        const preloadScript = new PreloadScript_js_1.PreloadScript(params, this.#logger);
        this.#preloadScriptStorage.add(preloadScript);
        const cdpTargets = contexts.size === 0 ? new Set(this.#browsingContextStorage.getTopLevelContexts().map((context) => context.cdpTarget)) : new Set([...contexts.values()].map((context) => context.cdpTarget));
        await preloadScript.initInTargets(cdpTargets, false);
        return {
          script: preloadScript.id
        };
      }
      async removePreloadScript(params) {
        const { script: id } = params;
        const scripts = this.#preloadScriptStorage.find({ id });
        if (scripts.length === 0) {
          throw new protocol_js_1.NoSuchScriptException(`No preload script with id '${id}'`);
        }
        await Promise.all(scripts.map((script) => script.remove()));
        this.#preloadScriptStorage.remove({ id });
        return {};
      }
      async callFunction(params) {
        const realm = await this.#getRealm(params.target);
        return await realm.callFunction(params.functionDeclaration, params.awaitPromise, params.this, params.arguments, params.resultOwnership, params.serializationOptions, params.userActivation);
      }
      async evaluate(params) {
        const realm = await this.#getRealm(params.target);
        return await realm.evaluate(params.expression, params.awaitPromise, params.resultOwnership, params.serializationOptions, params.userActivation);
      }
      async disown(params) {
        const realm = await this.#getRealm(params.target);
        await Promise.all(params.handles.map(async (handle) => await realm.disown(handle)));
        return {};
      }
      getRealms(params) {
        if (params.context !== void 0) {
          this.#browsingContextStorage.getContext(params.context);
        }
        const realms = this.#realmStorage.findRealms({
          browsingContextId: params.context,
          type: params.type
        }).map((realm) => realm.realmInfo);
        return { realms };
      }
      async #getRealm(target) {
        if ("context" in target) {
          const context = this.#browsingContextStorage.getContext(target.context);
          return await context.getOrCreateSandbox(target.sandbox);
        }
        return this.#realmStorage.getRealm({
          realmId: target.realm
        });
      }
    };
    exports.ScriptProcessor = ScriptProcessor;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/session/SessionProcessor.js
var require_SessionProcessor = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/session/SessionProcessor.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SessionProcessor = void 0;
    var protocol_js_1 = require_protocol();
    var SessionProcessor = class {
      #eventManager;
      #browserCdpClient;
      #initConnection;
      #created = false;
      constructor(eventManager, browserCdpClient, initConnection) {
        this.#eventManager = eventManager;
        this.#browserCdpClient = browserCdpClient;
        this.#initConnection = initConnection;
      }
      status() {
        return { ready: false, message: "already connected" };
      }
      #mergeCapabilities(capabilitiesRequest) {
        const mergedCapabilities = [];
        for (const first2 of capabilitiesRequest.firstMatch ?? [{}]) {
          const result = {
            ...capabilitiesRequest.alwaysMatch
          };
          for (const key of Object.keys(first2)) {
            if (result[key] !== void 0) {
              throw new protocol_js_1.InvalidArgumentException(`Capability ${key} in firstMatch is already defined in alwaysMatch`);
            }
            result[key] = first2[key];
          }
          mergedCapabilities.push(result);
        }
        const match = mergedCapabilities.find((c) => c.browserName === "chrome") ?? mergedCapabilities[0] ?? {};
        match.unhandledPromptBehavior = this.#getUnhandledPromptBehavior(match.unhandledPromptBehavior);
        return match;
      }
      #getUnhandledPromptBehavior(capabilityValue) {
        if (capabilityValue === void 0) {
          return void 0;
        }
        if (typeof capabilityValue === "object") {
          return capabilityValue;
        }
        if (typeof capabilityValue !== "string") {
          throw new protocol_js_1.InvalidArgumentException(`Unexpected 'unhandledPromptBehavior' type: ${typeof capabilityValue}`);
        }
        switch (capabilityValue) {
          case "accept":
          case "accept and notify":
            return {
              default: "accept"
              /* Session.UserPromptHandlerType.Accept */
            };
          case "dismiss":
          case "dismiss and notify":
            return {
              default: "dismiss"
              /* Session.UserPromptHandlerType.Dismiss */
            };
          case "ignore":
            return {
              default: "ignore"
              /* Session.UserPromptHandlerType.Ignore */
            };
          default:
            throw new protocol_js_1.InvalidArgumentException(`Unexpected 'unhandledPromptBehavior' value: ${capabilityValue}`);
        }
      }
      async new(params) {
        if (this.#created) {
          throw new Error("Session has been already created.");
        }
        this.#created = true;
        const matchedCapabitlites = this.#mergeCapabilities(params.capabilities);
        await this.#initConnection(matchedCapabitlites);
        const version = await this.#browserCdpClient.sendCommand("Browser.getVersion");
        return {
          sessionId: "unknown",
          capabilities: {
            ...matchedCapabitlites,
            acceptInsecureCerts: matchedCapabitlites.acceptInsecureCerts ?? false,
            browserName: version.product,
            browserVersion: version.revision,
            platformName: "",
            setWindowRect: false,
            webSocketUrl: "",
            userAgent: version.userAgent
          }
        };
      }
      async subscribe(params, channel = null) {
        await this.#eventManager.subscribe(params.events, params.contexts ?? [null], channel);
        return {};
      }
      async unsubscribe(params, channel = null) {
        await this.#eventManager.unsubscribe(params.events, params.contexts ?? [null], channel);
        return {};
      }
    };
    exports.SessionProcessor = SessionProcessor;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/storage/StorageProcessor.js
var require_StorageProcessor = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/storage/StorageProcessor.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StorageProcessor = void 0;
    var protocol_js_1 = require_protocol();
    var assert_js_1 = require_assert();
    var log_js_1 = require_log();
    var NetworkProcessor_js_1 = require_NetworkProcessor();
    var NetworkUtils_js_1 = require_NetworkUtils();
    var StorageProcessor = class {
      #browserCdpClient;
      #browsingContextStorage;
      #logger;
      constructor(browserCdpClient, browsingContextStorage, logger) {
        this.#browsingContextStorage = browsingContextStorage;
        this.#browserCdpClient = browserCdpClient;
        this.#logger = logger;
      }
      async deleteCookies(params) {
        const partitionKey = this.#expandStoragePartitionSpec(params.partition);
        let cdpResponse;
        try {
          cdpResponse = await this.#browserCdpClient.sendCommand("Storage.getCookies", {
            browserContextId: this.#getCdpBrowserContextId(partitionKey)
          });
        } catch (err) {
          if (this.#isNoSuchUserContextError(err)) {
            throw new protocol_js_1.NoSuchUserContextException(err.message);
          }
          throw err;
        }
        const cdpCookiesToDelete = cdpResponse.cookies.filter(
          // CDP's partition key is the source origin. If the request specifies the
          // `sourceOrigin` partition key, only cookies with the requested source origin
          // are returned.
          (c) => partitionKey.sourceOrigin === void 0 || c.partitionKey?.topLevelSite === partitionKey.sourceOrigin
        ).filter((cdpCookie) => {
          const bidiCookie = (0, NetworkUtils_js_1.cdpToBiDiCookie)(cdpCookie);
          return this.#matchCookie(bidiCookie, params.filter);
        }).map((cookie) => ({
          ...cookie,
          // Set expiry to pass date to delete the cookie.
          expires: 1
        }));
        await this.#browserCdpClient.sendCommand("Storage.setCookies", {
          cookies: cdpCookiesToDelete,
          browserContextId: this.#getCdpBrowserContextId(partitionKey)
        });
        return {
          partitionKey
        };
      }
      async getCookies(params) {
        const partitionKey = this.#expandStoragePartitionSpec(params.partition);
        let cdpResponse;
        try {
          cdpResponse = await this.#browserCdpClient.sendCommand("Storage.getCookies", {
            browserContextId: this.#getCdpBrowserContextId(partitionKey)
          });
        } catch (err) {
          if (this.#isNoSuchUserContextError(err)) {
            throw new protocol_js_1.NoSuchUserContextException(err.message);
          }
          throw err;
        }
        const filteredBiDiCookies = cdpResponse.cookies.filter(
          // CDP's partition key is the source origin. If the request specifies the
          // `sourceOrigin` partition key, only cookies with the requested source origin
          // are returned.
          (c) => partitionKey.sourceOrigin === void 0 || c.partitionKey?.topLevelSite === partitionKey.sourceOrigin
        ).map((c) => (0, NetworkUtils_js_1.cdpToBiDiCookie)(c)).filter((c) => this.#matchCookie(c, params.filter));
        return {
          cookies: filteredBiDiCookies,
          partitionKey
        };
      }
      async setCookie(params) {
        const partitionKey = this.#expandStoragePartitionSpec(params.partition);
        const cdpCookie = (0, NetworkUtils_js_1.bidiToCdpCookie)(params, partitionKey);
        try {
          await this.#browserCdpClient.sendCommand("Storage.setCookies", {
            cookies: [cdpCookie],
            browserContextId: this.#getCdpBrowserContextId(partitionKey)
          });
        } catch (err) {
          if (this.#isNoSuchUserContextError(err)) {
            throw new protocol_js_1.NoSuchUserContextException(err.message);
          }
          this.#logger?.(log_js_1.LogType.debugError, err);
          throw new protocol_js_1.UnableToSetCookieException(err.toString());
        }
        return {
          partitionKey
        };
      }
      #isNoSuchUserContextError(err) {
        return err.message?.startsWith("Failed to find browser context for id");
      }
      #getCdpBrowserContextId(partitionKey) {
        return partitionKey.userContext === "default" ? void 0 : partitionKey.userContext;
      }
      #expandStoragePartitionSpecByBrowsingContext(descriptor) {
        const browsingContextId = descriptor.context;
        const browsingContext = this.#browsingContextStorage.getContext(browsingContextId);
        return {
          userContext: browsingContext.userContext
        };
      }
      #expandStoragePartitionSpecByStorageKey(descriptor) {
        const unsupportedPartitionKeys = /* @__PURE__ */ new Map();
        let sourceOrigin = descriptor.sourceOrigin;
        if (sourceOrigin !== void 0) {
          const url = NetworkProcessor_js_1.NetworkProcessor.parseUrlString(sourceOrigin);
          if (url.origin === "null") {
            sourceOrigin = url.origin;
          } else {
            sourceOrigin = `${url.protocol}//${url.hostname}`;
          }
        }
        for (const [key, value] of Object.entries(descriptor)) {
          if (key !== void 0 && value !== void 0 && !["type", "sourceOrigin", "userContext"].includes(key)) {
            unsupportedPartitionKeys.set(key, value);
          }
        }
        if (unsupportedPartitionKeys.size > 0) {
          this.#logger?.(log_js_1.LogType.debugInfo, `Unsupported partition keys: ${JSON.stringify(Object.fromEntries(unsupportedPartitionKeys))}`);
        }
        const userContext = descriptor.userContext ?? "default";
        return {
          userContext,
          ...sourceOrigin === void 0 ? {} : { sourceOrigin }
        };
      }
      #expandStoragePartitionSpec(partitionSpec) {
        if (partitionSpec === void 0) {
          return { userContext: "default" };
        }
        if (partitionSpec.type === "context") {
          return this.#expandStoragePartitionSpecByBrowsingContext(partitionSpec);
        }
        (0, assert_js_1.assert)(partitionSpec.type === "storageKey", "Unknown partition type");
        return this.#expandStoragePartitionSpecByStorageKey(partitionSpec);
      }
      #matchCookie(cookie, filter2) {
        if (filter2 === void 0) {
          return true;
        }
        return (filter2.domain === void 0 || filter2.domain === cookie.domain) && (filter2.name === void 0 || filter2.name === cookie.name) && // `value` contains fields `type` and `value`.
        (filter2.value === void 0 || (0, NetworkUtils_js_1.deserializeByteValue)(filter2.value) === (0, NetworkUtils_js_1.deserializeByteValue)(cookie.value)) && (filter2.path === void 0 || filter2.path === cookie.path) && (filter2.size === void 0 || filter2.size === cookie.size) && (filter2.httpOnly === void 0 || filter2.httpOnly === cookie.httpOnly) && (filter2.secure === void 0 || filter2.secure === cookie.secure) && (filter2.sameSite === void 0 || filter2.sameSite === cookie.sameSite) && (filter2.expiry === void 0 || filter2.expiry === cookie.expiry);
      }
    };
    exports.StorageProcessor = StorageProcessor;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/OutgoingMessage.js
var require_OutgoingMessage = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/OutgoingMessage.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OutgoingMessage = void 0;
    var OutgoingMessage = class _OutgoingMessage {
      #message;
      #channel;
      constructor(message, channel = null) {
        this.#message = message;
        this.#channel = channel;
      }
      static createFromPromise(messagePromise, channel) {
        return messagePromise.then((message) => {
          if (message.kind === "success") {
            return {
              kind: "success",
              value: new _OutgoingMessage(message.value, channel)
            };
          }
          return message;
        });
      }
      static createResolved(message, channel) {
        return Promise.resolve({
          kind: "success",
          value: new _OutgoingMessage(message, channel)
        });
      }
      get message() {
        return this.#message;
      }
      get channel() {
        return this.#channel;
      }
    };
    exports.OutgoingMessage = OutgoingMessage;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/CommandProcessor.js
var require_CommandProcessor = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/CommandProcessor.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CommandProcessor = void 0;
    var protocol_js_1 = require_protocol();
    var EventEmitter_js_1 = require_EventEmitter();
    var log_js_1 = require_log();
    var BidiNoOpParser_js_1 = require_BidiNoOpParser();
    var BrowserProcessor_js_1 = require_BrowserProcessor();
    var CdpProcessor_js_1 = require_CdpProcessor();
    var BrowsingContextProcessor_js_1 = require_BrowsingContextProcessor();
    var InputProcessor_js_1 = require_InputProcessor();
    var NetworkProcessor_js_1 = require_NetworkProcessor();
    var PermissionsProcessor_js_1 = require_PermissionsProcessor();
    var ScriptProcessor_js_1 = require_ScriptProcessor();
    var SessionProcessor_js_1 = require_SessionProcessor();
    var StorageProcessor_js_1 = require_StorageProcessor();
    var OutgoingMessage_js_1 = require_OutgoingMessage();
    var CommandProcessor = class extends EventEmitter_js_1.EventEmitter {
      // keep-sorted start
      #bluetoothProcessor;
      #browserProcessor;
      #browsingContextProcessor;
      #cdpProcessor;
      #inputProcessor;
      #networkProcessor;
      #permissionsProcessor;
      #scriptProcessor;
      #sessionProcessor;
      #storageProcessor;
      // keep-sorted end
      #parser;
      #logger;
      constructor(cdpConnection, browserCdpClient, eventManager, browsingContextStorage, realmStorage, preloadScriptStorage, networkStorage, bluetoothProcessor, parser = new BidiNoOpParser_js_1.BidiNoOpParser(), initConnection, logger) {
        super();
        this.#parser = parser;
        this.#logger = logger;
        this.#bluetoothProcessor = bluetoothProcessor;
        this.#browserProcessor = new BrowserProcessor_js_1.BrowserProcessor(browserCdpClient, browsingContextStorage);
        this.#browsingContextProcessor = new BrowsingContextProcessor_js_1.BrowsingContextProcessor(browserCdpClient, browsingContextStorage, eventManager);
        this.#cdpProcessor = new CdpProcessor_js_1.CdpProcessor(browsingContextStorage, realmStorage, cdpConnection, browserCdpClient);
        this.#inputProcessor = new InputProcessor_js_1.InputProcessor(browsingContextStorage);
        this.#networkProcessor = new NetworkProcessor_js_1.NetworkProcessor(browsingContextStorage, networkStorage);
        this.#permissionsProcessor = new PermissionsProcessor_js_1.PermissionsProcessor(browserCdpClient);
        this.#scriptProcessor = new ScriptProcessor_js_1.ScriptProcessor(eventManager, browsingContextStorage, realmStorage, preloadScriptStorage, logger);
        this.#sessionProcessor = new SessionProcessor_js_1.SessionProcessor(eventManager, browserCdpClient, initConnection);
        this.#storageProcessor = new StorageProcessor_js_1.StorageProcessor(browserCdpClient, browsingContextStorage, logger);
      }
      async #processCommand(command) {
        switch (command.method) {
          // Bluetooth module
          // keep-sorted start block=yes
          case "bluetooth.handleRequestDevicePrompt":
            return await this.#bluetoothProcessor.handleRequestDevicePrompt(this.#parser.parseHandleRequestDevicePromptParams(command.params));
          case "bluetooth.simulateAdapter":
            return await this.#bluetoothProcessor.simulateAdapter(this.#parser.parseSimulateAdapterParameters(command.params));
          case "bluetooth.simulateAdvertisement":
            return await this.#bluetoothProcessor.simulateAdvertisement(this.#parser.parseSimulateAdvertisementParameters(command.params));
          case "bluetooth.simulatePreconnectedPeripheral":
            return await this.#bluetoothProcessor.simulatePreconnectedPeripheral(this.#parser.parseSimulatePreconnectedPeripheralParameters(command.params));
          // keep-sorted end
          // Browser module
          // keep-sorted start block=yes
          case "browser.close":
            return this.#browserProcessor.close();
          case "browser.createUserContext":
            return await this.#browserProcessor.createUserContext(command.params);
          case "browser.getClientWindows":
            return await this.#browserProcessor.getClientWindows();
          case "browser.getUserContexts":
            return await this.#browserProcessor.getUserContexts();
          case "browser.removeUserContext":
            return await this.#browserProcessor.removeUserContext(this.#parser.parseRemoveUserContextParams(command.params));
          case "browser.setClientWindowState":
            throw new protocol_js_1.UnknownErrorException(`Method ${command.method} is not implemented.`);
          // keep-sorted end
          // Browsing Context module
          // keep-sorted start block=yes
          case "browsingContext.activate":
            return await this.#browsingContextProcessor.activate(this.#parser.parseActivateParams(command.params));
          case "browsingContext.captureScreenshot":
            return await this.#browsingContextProcessor.captureScreenshot(this.#parser.parseCaptureScreenshotParams(command.params));
          case "browsingContext.close":
            return await this.#browsingContextProcessor.close(this.#parser.parseCloseParams(command.params));
          case "browsingContext.create":
            return await this.#browsingContextProcessor.create(this.#parser.parseCreateParams(command.params));
          case "browsingContext.getTree":
            return this.#browsingContextProcessor.getTree(this.#parser.parseGetTreeParams(command.params));
          case "browsingContext.handleUserPrompt":
            return await this.#browsingContextProcessor.handleUserPrompt(this.#parser.parseHandleUserPromptParams(command.params));
          case "browsingContext.locateNodes":
            return await this.#browsingContextProcessor.locateNodes(this.#parser.parseLocateNodesParams(command.params));
          case "browsingContext.navigate":
            return await this.#browsingContextProcessor.navigate(this.#parser.parseNavigateParams(command.params));
          case "browsingContext.print":
            return await this.#browsingContextProcessor.print(this.#parser.parsePrintParams(command.params));
          case "browsingContext.reload":
            return await this.#browsingContextProcessor.reload(this.#parser.parseReloadParams(command.params));
          case "browsingContext.setViewport":
            return await this.#browsingContextProcessor.setViewport(this.#parser.parseSetViewportParams(command.params));
          case "browsingContext.traverseHistory":
            return await this.#browsingContextProcessor.traverseHistory(this.#parser.parseTraverseHistoryParams(command.params));
          // keep-sorted end
          // CDP module
          // keep-sorted start block=yes
          case "goog:cdp.getSession":
            return this.#cdpProcessor.getSession(this.#parser.parseGetSessionParams(command.params));
          case "goog:cdp.resolveRealm":
            return this.#cdpProcessor.resolveRealm(this.#parser.parseResolveRealmParams(command.params));
          case "goog:cdp.sendCommand":
            return await this.#cdpProcessor.sendCommand(this.#parser.parseSendCommandParams(command.params));
          // keep-sorted end
          // CDP deprecated domain.
          // https://github.com/GoogleChromeLabs/chromium-bidi/issues/2844
          // keep-sorted start block=yes
          case "cdp.getSession":
            return this.#cdpProcessor.getSession(this.#parser.parseGetSessionParams(command.params));
          case "cdp.resolveRealm":
            return this.#cdpProcessor.resolveRealm(this.#parser.parseResolveRealmParams(command.params));
          case "cdp.sendCommand":
            return await this.#cdpProcessor.sendCommand(this.#parser.parseSendCommandParams(command.params));
          // keep-sorted end
          // Input module
          // keep-sorted start block=yes
          case "input.performActions":
            return await this.#inputProcessor.performActions(this.#parser.parsePerformActionsParams(command.params));
          case "input.releaseActions":
            return await this.#inputProcessor.releaseActions(this.#parser.parseReleaseActionsParams(command.params));
          case "input.setFiles":
            return await this.#inputProcessor.setFiles(this.#parser.parseSetFilesParams(command.params));
          // keep-sorted end
          // Network module
          // keep-sorted start block=yes
          case "network.addIntercept":
            return await this.#networkProcessor.addIntercept(this.#parser.parseAddInterceptParams(command.params));
          case "network.continueRequest":
            return await this.#networkProcessor.continueRequest(this.#parser.parseContinueRequestParams(command.params));
          case "network.continueResponse":
            return await this.#networkProcessor.continueResponse(this.#parser.parseContinueResponseParams(command.params));
          case "network.continueWithAuth":
            return await this.#networkProcessor.continueWithAuth(this.#parser.parseContinueWithAuthParams(command.params));
          case "network.failRequest":
            return await this.#networkProcessor.failRequest(this.#parser.parseFailRequestParams(command.params));
          case "network.provideResponse":
            return await this.#networkProcessor.provideResponse(this.#parser.parseProvideResponseParams(command.params));
          case "network.removeIntercept":
            return await this.#networkProcessor.removeIntercept(this.#parser.parseRemoveInterceptParams(command.params));
          case "network.setCacheBehavior":
            return await this.#networkProcessor.setCacheBehavior(this.#parser.parseSetCacheBehavior(command.params));
          // keep-sorted end
          // Permissions module
          // keep-sorted start block=yes
          case "permissions.setPermission":
            return await this.#permissionsProcessor.setPermissions(this.#parser.parseSetPermissionsParams(command.params));
          // keep-sorted end
          // Script module
          // keep-sorted start block=yes
          case "script.addPreloadScript":
            return await this.#scriptProcessor.addPreloadScript(this.#parser.parseAddPreloadScriptParams(command.params));
          case "script.callFunction":
            return await this.#scriptProcessor.callFunction(this.#parser.parseCallFunctionParams(this.#processTargetParams(command.params)));
          case "script.disown":
            return await this.#scriptProcessor.disown(this.#parser.parseDisownParams(this.#processTargetParams(command.params)));
          case "script.evaluate":
            return await this.#scriptProcessor.evaluate(this.#parser.parseEvaluateParams(this.#processTargetParams(command.params)));
          case "script.getRealms":
            return this.#scriptProcessor.getRealms(this.#parser.parseGetRealmsParams(command.params));
          case "script.removePreloadScript":
            return await this.#scriptProcessor.removePreloadScript(this.#parser.parseRemovePreloadScriptParams(command.params));
          // keep-sorted end
          // Session module
          // keep-sorted start block=yes
          case "session.end":
            throw new protocol_js_1.UnknownErrorException(`Method ${command.method} is not implemented.`);
          case "session.new":
            return await this.#sessionProcessor.new(command.params);
          case "session.status":
            return this.#sessionProcessor.status();
          case "session.subscribe":
            return await this.#sessionProcessor.subscribe(this.#parser.parseSubscribeParams(command.params), command.channel);
          case "session.unsubscribe":
            return await this.#sessionProcessor.unsubscribe(this.#parser.parseSubscribeParams(command.params), command.channel);
          // keep-sorted end
          // Storage module
          // keep-sorted start block=yes
          case "storage.deleteCookies":
            return await this.#storageProcessor.deleteCookies(this.#parser.parseDeleteCookiesParams(command.params));
          case "storage.getCookies":
            return await this.#storageProcessor.getCookies(this.#parser.parseGetCookiesParams(command.params));
          case "storage.setCookie":
            return await this.#storageProcessor.setCookie(this.#parser.parseSetCookieParams(command.params));
          // keep-sorted end
          // WebExtension module
          // keep-sorted start block=yes
          case "webExtension.install":
            throw new protocol_js_1.UnknownErrorException(`Method ${command.method} is not implemented.`);
          case "webExtension.uninstall":
            throw new protocol_js_1.UnknownErrorException(`Method ${command.method} is not implemented.`);
        }
        throw new protocol_js_1.UnknownCommandException(`Unknown command '${command?.method}'.`);
      }
      // Workaround for as zod.union always take the first schema
      // https://github.com/w3c/webdriver-bidi/issues/635
      #processTargetParams(params) {
        if (typeof params === "object" && params && "target" in params && typeof params.target === "object" && params.target && "context" in params.target) {
          delete params.target["realm"];
        }
        return params;
      }
      async processCommand(command) {
        try {
          const result = await this.#processCommand(command);
          const response = {
            type: "success",
            id: command.id,
            result
          };
          this.emit("response", {
            message: OutgoingMessage_js_1.OutgoingMessage.createResolved(response, command.channel),
            event: command.method
          });
        } catch (e) {
          if (e instanceof protocol_js_1.Exception) {
            this.emit("response", {
              message: OutgoingMessage_js_1.OutgoingMessage.createResolved(e.toErrorResponse(command.id), command.channel),
              event: command.method
            });
          } else {
            const error = e;
            this.#logger?.(log_js_1.LogType.bidi, error);
            this.emit("response", {
              message: OutgoingMessage_js_1.OutgoingMessage.createResolved(new protocol_js_1.UnknownErrorException(error.message, error.stack).toErrorResponse(command.id), command.channel),
              event: command.method
            });
          }
        }
      }
    };
    exports.CommandProcessor = CommandProcessor;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/bluetooth/BluetoothProcessor.js
var require_BluetoothProcessor = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/bluetooth/BluetoothProcessor.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BluetoothProcessor = void 0;
    var BluetoothProcessor = class {
      #eventManager;
      #browsingContextStorage;
      constructor(eventManager, browsingContextStorage) {
        this.#eventManager = eventManager;
        this.#browsingContextStorage = browsingContextStorage;
      }
      async simulateAdapter(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        await context.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.disable");
        await context.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.enable", {
          state: params.state
        });
        return {};
      }
      async simulatePreconnectedPeripheral(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        await context.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.simulatePreconnectedPeripheral", {
          address: params.address,
          name: params.name,
          knownServiceUuids: params.knownServiceUuids,
          manufacturerData: params.manufacturerData
        });
        return {};
      }
      async simulateAdvertisement(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        await context.cdpTarget.browserCdpClient.sendCommand("BluetoothEmulation.simulateAdvertisement", {
          entry: params.scanEntry
        });
        return {};
      }
      onCdpTargetCreated(cdpTarget) {
        cdpTarget.cdpClient.on("DeviceAccess.deviceRequestPrompted", (event) => {
          this.#eventManager.registerEvent({
            type: "event",
            method: "bluetooth.requestDevicePromptUpdated",
            params: {
              context: cdpTarget.id,
              prompt: event.id,
              devices: event.devices
            }
          }, cdpTarget.id);
        });
      }
      async handleRequestDevicePrompt(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        if (params.accept) {
          await context.cdpTarget.cdpClient.sendCommand("DeviceAccess.selectPrompt", {
            id: params.prompt,
            deviceId: params.device
          });
        } else {
          await context.cdpTarget.cdpClient.sendCommand("DeviceAccess.cancelPrompt", {
            id: params.prompt
          });
        }
        return {};
      }
    };
    exports.BluetoothProcessor = BluetoothProcessor;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/Deferred.js
var require_Deferred = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/Deferred.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Deferred = void 0;
    var Deferred2 = class {
      #isFinished = false;
      #promise;
      #result;
      #resolve;
      #reject;
      get isFinished() {
        return this.#isFinished;
      }
      get result() {
        if (!this.#isFinished) {
          throw new Error("Deferred is not finished yet");
        }
        return this.#result;
      }
      constructor() {
        this.#promise = new Promise((resolve, reject) => {
          this.#resolve = resolve;
          this.#reject = reject;
        });
        this.#promise.catch((_error) => {
        });
      }
      then(onFulfilled, onRejected) {
        return this.#promise.then(onFulfilled, onRejected);
      }
      catch(onRejected) {
        return this.#promise.catch(onRejected);
      }
      resolve(value) {
        this.#result = value;
        if (!this.#isFinished) {
          this.#isFinished = true;
          this.#resolve(value);
        }
      }
      reject(reason) {
        if (!this.#isFinished) {
          this.#isFinished = true;
          this.#reject(reason);
        }
      }
      finally(onFinally) {
        return this.#promise.finally(onFinally);
      }
      [Symbol.toStringTag] = "Promise";
    };
    exports.Deferred = Deferred2;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/time.js
var require_time = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/time.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getTimestamp = getTimestamp;
    function getTimestamp() {
      return (/* @__PURE__ */ new Date()).getTime();
    }
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/unitConversions.js
var require_unitConversions = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/unitConversions.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.inchesFromCm = inchesFromCm;
    function inchesFromCm(cm) {
      return cm / 2.54;
    }
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/script/Realm.js
var require_Realm = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/script/Realm.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Realm = void 0;
    var protocol_js_1 = require_protocol();
    var log_js_1 = require_log();
    var uuid_js_1 = require_uuid();
    var ChannelProxy_js_1 = require_ChannelProxy();
    var Realm3 = class _Realm {
      #cdpClient;
      #eventManager;
      #executionContextId;
      #logger;
      #origin;
      #realmId;
      #realmStorage;
      constructor(cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage) {
        this.#cdpClient = cdpClient;
        this.#eventManager = eventManager;
        this.#executionContextId = executionContextId;
        this.#logger = logger;
        this.#origin = origin;
        this.#realmId = realmId;
        this.#realmStorage = realmStorage;
        this.#realmStorage.addRealm(this);
      }
      cdpToBidiValue(cdpValue, resultOwnership) {
        const bidiValue = this.serializeForBiDi(cdpValue.result.deepSerializedValue, /* @__PURE__ */ new Map());
        if (cdpValue.result.objectId) {
          const objectId = cdpValue.result.objectId;
          if (resultOwnership === "root") {
            bidiValue.handle = objectId;
            this.#realmStorage.knownHandlesToRealmMap.set(objectId, this.realmId);
          } else {
            void this.#releaseObject(objectId).catch((error) => this.#logger?.(log_js_1.LogType.debugError, error));
          }
        }
        return bidiValue;
      }
      /**
       * Relies on the CDP to implement proper BiDi serialization, except:
       * * CDP integer property `backendNodeId` is replaced with `sharedId` of
       * `{documentId}_element_{backendNodeId}`;
       * * CDP integer property `weakLocalObjectReference` is replaced with UUID `internalId`
       * using unique-per serialization `internalIdMap`.
       * * CDP type `platformobject` is replaced with `object`.
       * @param deepSerializedValue - CDP value to be converted to BiDi.
       * @param internalIdMap - Map from CDP integer `weakLocalObjectReference` to BiDi UUID
       * `internalId`.
       */
      serializeForBiDi(deepSerializedValue, internalIdMap) {
        if (Object.hasOwn(deepSerializedValue, "weakLocalObjectReference")) {
          const weakLocalObjectReference = deepSerializedValue.weakLocalObjectReference;
          if (!internalIdMap.has(weakLocalObjectReference)) {
            internalIdMap.set(weakLocalObjectReference, (0, uuid_js_1.uuidv4)());
          }
          deepSerializedValue.internalId = internalIdMap.get(weakLocalObjectReference);
          delete deepSerializedValue["weakLocalObjectReference"];
        }
        if (deepSerializedValue.type === "node" && Object.hasOwn(deepSerializedValue?.value, "frameId")) {
          delete deepSerializedValue.value["frameId"];
        }
        if (deepSerializedValue.type === "platformobject") {
          return { type: "object" };
        }
        const bidiValue = deepSerializedValue.value;
        if (bidiValue === void 0) {
          return deepSerializedValue;
        }
        if (["array", "set", "htmlcollection", "nodelist"].includes(deepSerializedValue.type)) {
          for (const i in bidiValue) {
            bidiValue[i] = this.serializeForBiDi(bidiValue[i], internalIdMap);
          }
        }
        if (["object", "map"].includes(deepSerializedValue.type)) {
          for (const i in bidiValue) {
            bidiValue[i] = [
              this.serializeForBiDi(bidiValue[i][0], internalIdMap),
              this.serializeForBiDi(bidiValue[i][1], internalIdMap)
            ];
          }
        }
        return deepSerializedValue;
      }
      get realmId() {
        return this.#realmId;
      }
      get executionContextId() {
        return this.#executionContextId;
      }
      get origin() {
        return this.#origin;
      }
      get source() {
        return {
          realm: this.realmId
        };
      }
      get cdpClient() {
        return this.#cdpClient;
      }
      get baseInfo() {
        return {
          realm: this.realmId,
          origin: this.origin
        };
      }
      async evaluate(expression, awaitPromise, resultOwnership = "none", serializationOptions = {}, userActivation = false, includeCommandLineApi = false) {
        const cdpEvaluateResult = await this.cdpClient.sendCommand("Runtime.evaluate", {
          contextId: this.executionContextId,
          expression,
          awaitPromise,
          serializationOptions: _Realm.#getSerializationOptions("deep", serializationOptions),
          userGesture: userActivation,
          includeCommandLineAPI: includeCommandLineApi
        });
        if (cdpEvaluateResult.exceptionDetails) {
          return await this.#getExceptionResult(cdpEvaluateResult.exceptionDetails, 0, resultOwnership);
        }
        return {
          realm: this.realmId,
          result: this.cdpToBidiValue(cdpEvaluateResult, resultOwnership),
          type: "success"
        };
      }
      #registerEvent(event) {
        if (this.associatedBrowsingContexts.length === 0) {
          this.#eventManager.registerEvent(event, null);
        } else {
          for (const browsingContext of this.associatedBrowsingContexts) {
            this.#eventManager.registerEvent(event, browsingContext.id);
          }
        }
      }
      initialize() {
        this.#registerEvent({
          type: "event",
          method: protocol_js_1.ChromiumBidi.Script.EventNames.RealmCreated,
          params: this.realmInfo
        });
      }
      /**
       * Serializes a given CDP object into BiDi, keeping references in the
       * target's `globalThis`.
       */
      async serializeCdpObject(cdpRemoteObject, resultOwnership) {
        const argument = _Realm.#cdpRemoteObjectToCallArgument(cdpRemoteObject);
        const cdpValue = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
          functionDeclaration: String((remoteObject) => remoteObject),
          awaitPromise: false,
          arguments: [argument],
          serializationOptions: {
            serialization: "deep"
          },
          executionContextId: this.executionContextId
        });
        return this.cdpToBidiValue(cdpValue, resultOwnership);
      }
      static #cdpRemoteObjectToCallArgument(cdpRemoteObject) {
        if (cdpRemoteObject.objectId !== void 0) {
          return { objectId: cdpRemoteObject.objectId };
        }
        if (cdpRemoteObject.unserializableValue !== void 0) {
          return { unserializableValue: cdpRemoteObject.unserializableValue };
        }
        return { value: cdpRemoteObject.value };
      }
      /**
       * Gets the string representation of an object. This is equivalent to
       * calling `toString()` on the object value.
       */
      async stringifyObject(cdpRemoteObject) {
        const { result } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
          functionDeclaration: String(
            // eslint-disable-next-line @typescript-eslint/no-base-to-string
            (remoteObject) => String(remoteObject)
          ),
          awaitPromise: false,
          arguments: [cdpRemoteObject],
          returnByValue: true,
          executionContextId: this.executionContextId
        });
        return result.value;
      }
      async #flattenKeyValuePairs(mappingLocalValue) {
        const keyValueArray = await Promise.all(mappingLocalValue.map(async ([key, value]) => {
          let keyArg;
          if (typeof key === "string") {
            keyArg = { value: key };
          } else {
            keyArg = await this.deserializeForCdp(key);
          }
          const valueArg = await this.deserializeForCdp(value);
          return [keyArg, valueArg];
        }));
        return keyValueArray.flat();
      }
      async #flattenValueList(listLocalValue) {
        return await Promise.all(listLocalValue.map((localValue) => this.deserializeForCdp(localValue)));
      }
      async #serializeCdpExceptionDetails(cdpExceptionDetails, lineOffset, resultOwnership) {
        const callFrames = cdpExceptionDetails.stackTrace?.callFrames.map((frame) => ({
          url: frame.url,
          functionName: frame.functionName,
          lineNumber: frame.lineNumber - lineOffset,
          columnNumber: frame.columnNumber
        })) ?? [];
        const exception = cdpExceptionDetails.exception;
        return {
          exception: await this.serializeCdpObject(exception, resultOwnership),
          columnNumber: cdpExceptionDetails.columnNumber,
          lineNumber: cdpExceptionDetails.lineNumber - lineOffset,
          stackTrace: {
            callFrames
          },
          text: await this.stringifyObject(exception) || cdpExceptionDetails.text
        };
      }
      async callFunction(functionDeclaration, awaitPromise, thisLocalValue = {
        type: "undefined"
      }, argumentsLocalValues = [], resultOwnership = "none", serializationOptions = {}, userActivation = false) {
        const callFunctionAndSerializeScript = `(...args) => {
      function callFunction(f, args) {
        const deserializedThis = args.shift();
        const deserializedArgs = args;
        return f.apply(deserializedThis, deserializedArgs);
      }
      return callFunction((
        ${functionDeclaration}
      ), args);
    }`;
        const thisAndArgumentsList = [
          await this.deserializeForCdp(thisLocalValue),
          ...await Promise.all(argumentsLocalValues.map(async (argumentLocalValue) => await this.deserializeForCdp(argumentLocalValue)))
        ];
        let cdpCallFunctionResult;
        try {
          cdpCallFunctionResult = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
            functionDeclaration: callFunctionAndSerializeScript,
            awaitPromise,
            arguments: thisAndArgumentsList,
            serializationOptions: _Realm.#getSerializationOptions("deep", serializationOptions),
            executionContextId: this.executionContextId,
            userGesture: userActivation
          });
        } catch (error) {
          if (error.code === -32e3 && [
            "Could not find object with given id",
            "Argument should belong to the same JavaScript world as target object",
            "Invalid remote object id"
          ].includes(error.message)) {
            throw new protocol_js_1.NoSuchHandleException("Handle was not found.");
          }
          throw error;
        }
        if (cdpCallFunctionResult.exceptionDetails) {
          return await this.#getExceptionResult(cdpCallFunctionResult.exceptionDetails, 1, resultOwnership);
        }
        return {
          type: "success",
          result: this.cdpToBidiValue(cdpCallFunctionResult, resultOwnership),
          realm: this.realmId
        };
      }
      async deserializeForCdp(localValue) {
        if ("handle" in localValue && localValue.handle) {
          return { objectId: localValue.handle };
        } else if ("handle" in localValue || "sharedId" in localValue) {
          throw new protocol_js_1.NoSuchHandleException("Handle was not found.");
        }
        switch (localValue.type) {
          case "undefined":
            return { unserializableValue: "undefined" };
          case "null":
            return { unserializableValue: "null" };
          case "string":
            return { value: localValue.value };
          case "number":
            if (localValue.value === "NaN") {
              return { unserializableValue: "NaN" };
            } else if (localValue.value === "-0") {
              return { unserializableValue: "-0" };
            } else if (localValue.value === "Infinity") {
              return { unserializableValue: "Infinity" };
            } else if (localValue.value === "-Infinity") {
              return { unserializableValue: "-Infinity" };
            }
            return {
              value: localValue.value
            };
          case "boolean":
            return { value: Boolean(localValue.value) };
          case "bigint":
            return {
              unserializableValue: `BigInt(${JSON.stringify(localValue.value)})`
            };
          case "date":
            return {
              unserializableValue: `new Date(Date.parse(${JSON.stringify(localValue.value)}))`
            };
          case "regexp":
            return {
              unserializableValue: `new RegExp(${JSON.stringify(localValue.value.pattern)}, ${JSON.stringify(localValue.value.flags)})`
            };
          case "map": {
            const keyValueArray = await this.#flattenKeyValuePairs(localValue.value);
            const { result } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
              functionDeclaration: String((...args) => {
                const result2 = /* @__PURE__ */ new Map();
                for (let i = 0; i < args.length; i += 2) {
                  result2.set(args[i], args[i + 1]);
                }
                return result2;
              }),
              awaitPromise: false,
              arguments: keyValueArray,
              returnByValue: false,
              executionContextId: this.executionContextId
            });
            return { objectId: result.objectId };
          }
          case "object": {
            const keyValueArray = await this.#flattenKeyValuePairs(localValue.value);
            const { result } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
              functionDeclaration: String((...args) => {
                const result2 = {};
                for (let i = 0; i < args.length; i += 2) {
                  const key = args[i];
                  result2[key] = args[i + 1];
                }
                return result2;
              }),
              awaitPromise: false,
              arguments: keyValueArray,
              returnByValue: false,
              executionContextId: this.executionContextId
            });
            return { objectId: result.objectId };
          }
          case "array": {
            const args = await this.#flattenValueList(localValue.value);
            const { result } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
              functionDeclaration: String((...args2) => args2),
              awaitPromise: false,
              arguments: args,
              returnByValue: false,
              executionContextId: this.executionContextId
            });
            return { objectId: result.objectId };
          }
          case "set": {
            const args = await this.#flattenValueList(localValue.value);
            const { result } = await this.cdpClient.sendCommand("Runtime.callFunctionOn", {
              functionDeclaration: String((...args2) => new Set(args2)),
              awaitPromise: false,
              arguments: args,
              returnByValue: false,
              executionContextId: this.executionContextId
            });
            return { objectId: result.objectId };
          }
          case "channel": {
            const channelProxy = new ChannelProxy_js_1.ChannelProxy(localValue.value, this.#logger);
            const channelProxySendMessageHandle = await channelProxy.init(this, this.#eventManager);
            return { objectId: channelProxySendMessageHandle };
          }
        }
        throw new Error(`Value ${JSON.stringify(localValue)} is not deserializable.`);
      }
      async #getExceptionResult(exceptionDetails, lineOffset, resultOwnership) {
        return {
          exceptionDetails: await this.#serializeCdpExceptionDetails(exceptionDetails, lineOffset, resultOwnership),
          realm: this.realmId,
          type: "exception"
        };
      }
      static #getSerializationOptions(serialization, serializationOptions) {
        return {
          serialization,
          additionalParameters: _Realm.#getAdditionalSerializationParameters(serializationOptions),
          ..._Realm.#getMaxObjectDepth(serializationOptions)
        };
      }
      static #getAdditionalSerializationParameters(serializationOptions) {
        const additionalParameters = {};
        if (serializationOptions.maxDomDepth !== void 0) {
          additionalParameters["maxNodeDepth"] = serializationOptions.maxDomDepth === null ? 1e3 : serializationOptions.maxDomDepth;
        }
        if (serializationOptions.includeShadowTree !== void 0) {
          additionalParameters["includeShadowTree"] = serializationOptions.includeShadowTree;
        }
        return additionalParameters;
      }
      static #getMaxObjectDepth(serializationOptions) {
        return serializationOptions.maxObjectDepth === void 0 || serializationOptions.maxObjectDepth === null ? {} : { maxDepth: serializationOptions.maxObjectDepth };
      }
      async #releaseObject(handle) {
        try {
          await this.cdpClient.sendCommand("Runtime.releaseObject", {
            objectId: handle
          });
        } catch (error) {
          if (!(error.code === -32e3 && error.message === "Invalid remote object id")) {
            throw error;
          }
        }
      }
      async disown(handle) {
        if (this.#realmStorage.knownHandlesToRealmMap.get(handle) !== this.realmId) {
          return;
        }
        await this.#releaseObject(handle);
        this.#realmStorage.knownHandlesToRealmMap.delete(handle);
      }
      dispose() {
        this.#registerEvent({
          type: "event",
          method: protocol_js_1.ChromiumBidi.Script.EventNames.RealmDestroyed,
          params: {
            realm: this.realmId
          }
        });
      }
    };
    exports.Realm = Realm3;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/script/SharedId.js
var require_SharedId = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/script/SharedId.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSharedId = getSharedId;
    exports.parseSharedId = parseSharedId;
    var SHARED_ID_DIVIDER = "_element_";
    function getSharedId(frameId, documentId, backendNodeId) {
      return `f.${frameId}.d.${documentId}.e.${backendNodeId}`;
    }
    function parseLegacySharedId(sharedId) {
      const match = sharedId.match(new RegExp(`(.*)${SHARED_ID_DIVIDER}(.*)`));
      if (!match) {
        return null;
      }
      const documentId = match[1];
      const elementId = match[2];
      if (documentId === void 0 || elementId === void 0) {
        return null;
      }
      const backendNodeId = parseInt(elementId ?? "");
      if (isNaN(backendNodeId)) {
        return null;
      }
      return {
        documentId,
        backendNodeId
      };
    }
    function parseSharedId(sharedId) {
      const legacyFormattedSharedId = parseLegacySharedId(sharedId);
      if (legacyFormattedSharedId !== null) {
        return { ...legacyFormattedSharedId, frameId: void 0 };
      }
      const match = sharedId.match(/f\.(.*)\.d\.(.*)\.e\.([0-9]*)/);
      if (!match) {
        return null;
      }
      const frameId = match[1];
      const documentId = match[2];
      const elementId = match[3];
      if (frameId === void 0 || documentId === void 0 || elementId === void 0) {
        return null;
      }
      const backendNodeId = parseInt(elementId ?? "");
      if (isNaN(backendNodeId)) {
        return null;
      }
      return {
        frameId,
        documentId,
        backendNodeId
      };
    }
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/script/WindowRealm.js
var require_WindowRealm = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/script/WindowRealm.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WindowRealm = void 0;
    var protocol_js_1 = require_protocol();
    var Realm_js_1 = require_Realm();
    var SharedId_js_1 = require_SharedId();
    var WindowRealm2 = class extends Realm_js_1.Realm {
      #browsingContextId;
      #browsingContextStorage;
      sandbox;
      constructor(browsingContextId, browsingContextStorage, cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage, sandbox) {
        super(cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage);
        this.#browsingContextId = browsingContextId;
        this.#browsingContextStorage = browsingContextStorage;
        this.sandbox = sandbox;
        this.initialize();
      }
      #getBrowsingContextId(navigableId) {
        const maybeBrowsingContext = this.#browsingContextStorage.getAllContexts().find((context) => context.navigableId === navigableId);
        return maybeBrowsingContext?.id ?? "UNKNOWN";
      }
      get browsingContext() {
        return this.#browsingContextStorage.getContext(this.#browsingContextId);
      }
      get associatedBrowsingContexts() {
        return [this.browsingContext];
      }
      get realmType() {
        return "window";
      }
      get realmInfo() {
        return {
          ...this.baseInfo,
          type: this.realmType,
          context: this.#browsingContextId,
          sandbox: this.sandbox
        };
      }
      get source() {
        return {
          realm: this.realmId,
          context: this.browsingContext.id
        };
      }
      serializeForBiDi(deepSerializedValue, internalIdMap) {
        const bidiValue = deepSerializedValue.value;
        if (deepSerializedValue.type === "node" && bidiValue !== void 0) {
          if (Object.hasOwn(bidiValue, "backendNodeId")) {
            let navigableId = this.browsingContext.navigableId ?? "UNKNOWN";
            if (Object.hasOwn(bidiValue, "loaderId")) {
              navigableId = bidiValue.loaderId;
              delete bidiValue["loaderId"];
            }
            deepSerializedValue.sharedId = (0, SharedId_js_1.getSharedId)(this.#getBrowsingContextId(navigableId), navigableId, bidiValue.backendNodeId);
            delete bidiValue["backendNodeId"];
          }
          if (Object.hasOwn(bidiValue, "children")) {
            for (const i in bidiValue.children) {
              bidiValue.children[i] = this.serializeForBiDi(bidiValue.children[i], internalIdMap);
            }
          }
          if (Object.hasOwn(bidiValue, "shadowRoot") && bidiValue.shadowRoot !== null) {
            bidiValue.shadowRoot = this.serializeForBiDi(bidiValue.shadowRoot, internalIdMap);
          }
          if (bidiValue.namespaceURI === "") {
            bidiValue.namespaceURI = null;
          }
        }
        return super.serializeForBiDi(deepSerializedValue, internalIdMap);
      }
      async deserializeForCdp(localValue) {
        if ("sharedId" in localValue && localValue.sharedId) {
          const parsedSharedId = (0, SharedId_js_1.parseSharedId)(localValue.sharedId);
          if (parsedSharedId === null) {
            throw new protocol_js_1.NoSuchNodeException(`SharedId "${localValue.sharedId}" was not found.`);
          }
          const { documentId, backendNodeId } = parsedSharedId;
          if (this.browsingContext.navigableId !== documentId) {
            throw new protocol_js_1.NoSuchNodeException(`SharedId "${localValue.sharedId}" belongs to different document. Current document is ${this.browsingContext.navigableId}.`);
          }
          try {
            const { object } = await this.cdpClient.sendCommand("DOM.resolveNode", {
              backendNodeId,
              executionContextId: this.executionContextId
            });
            return { objectId: object.objectId };
          } catch (error) {
            if (error.code === -32e3 && error.message === "No node with given id found") {
              throw new protocol_js_1.NoSuchNodeException(`SharedId "${localValue.sharedId}" was not found.`);
            }
            throw new protocol_js_1.UnknownErrorException(error.message, error.stack);
          }
        }
        return await super.deserializeForCdp(localValue);
      }
      async evaluate(expression, awaitPromise, resultOwnership, serializationOptions, userActivation, includeCommandLineApi) {
        await this.#browsingContextStorage.getContext(this.#browsingContextId).targetUnblockedOrThrow();
        return await super.evaluate(expression, awaitPromise, resultOwnership, serializationOptions, userActivation, includeCommandLineApi);
      }
      async callFunction(functionDeclaration, awaitPromise, thisLocalValue, argumentsLocalValues, resultOwnership, serializationOptions, userActivation) {
        await this.#browsingContextStorage.getContext(this.#browsingContextId).targetUnblockedOrThrow();
        return await super.callFunction(functionDeclaration, awaitPromise, thisLocalValue, argumentsLocalValues, resultOwnership, serializationOptions, userActivation);
      }
    };
    exports.WindowRealm = WindowRealm2;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/UrlHelpers.js
var require_UrlHelpers = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/UrlHelpers.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.urlMatchesAboutBlank = urlMatchesAboutBlank;
    function urlMatchesAboutBlank(url) {
      if (url === "") {
        return true;
      }
      try {
        const parsedUrl = new URL(url);
        const schema = parsedUrl.protocol.replace(/:$/, "");
        return schema.toLowerCase() === "about" && parsedUrl.pathname.toLowerCase() === "blank" && parsedUrl.username === "" && parsedUrl.password === "" && parsedUrl.host === "";
      } catch (err) {
        if (err instanceof TypeError) {
          return false;
        }
        throw err;
      }
    }
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/context/NavigationTracker.js
var require_NavigationTracker = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/context/NavigationTracker.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NavigationTracker = exports.NavigationResult = void 0;
    var protocol_js_1 = require_protocol();
    var Deferred_js_1 = require_Deferred();
    var log_js_1 = require_log();
    var time_js_1 = require_time();
    var UrlHelpers_js_1 = require_UrlHelpers();
    var uuid_js_1 = require_uuid();
    var NavigationResult = class {
      eventName;
      message;
      constructor(eventName, message) {
        this.eventName = eventName;
        this.message = message;
      }
    };
    exports.NavigationResult = NavigationResult;
    var NavigationState = class {
      navigationId = (0, uuid_js_1.uuidv4)();
      #browsingContextId;
      #started = false;
      #finished = new Deferred_js_1.Deferred();
      url;
      loaderId;
      #isInitial;
      #eventManager;
      #navigated = false;
      get finished() {
        return this.#finished;
      }
      constructor(url, browsingContextId, isInitial, eventManager) {
        this.#browsingContextId = browsingContextId;
        this.url = url;
        this.#isInitial = isInitial;
        this.#eventManager = eventManager;
      }
      navigationInfo() {
        return {
          context: this.#browsingContextId,
          navigation: this.navigationId,
          timestamp: (0, time_js_1.getTimestamp)(),
          url: this.url
        };
      }
      start() {
        if (!this.#isInitial && !this.#started) {
          this.#eventManager.registerEvent({
            type: "event",
            method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.NavigationStarted,
            params: this.navigationInfo()
          }, this.#browsingContextId);
        }
        this.#started = true;
      }
      #finish(navigationResult) {
        this.#started = true;
        if (!this.#isInitial && !this.#finished.isFinished && navigationResult.eventName !== "browsingContext.load") {
          this.#eventManager.registerEvent({
            type: "event",
            method: navigationResult.eventName,
            params: this.navigationInfo()
          }, this.#browsingContextId);
        }
        this.#finished.resolve(navigationResult);
      }
      frameNavigated() {
        this.#navigated = true;
      }
      fragmentNavigated() {
        this.#navigated = true;
        this.#finish(new NavigationResult(
          "browsingContext.fragmentNavigated"
          /* NavigationEventName.FragmentNavigated */
        ));
      }
      load() {
        this.#finish(new NavigationResult(
          "browsingContext.load"
          /* NavigationEventName.Load */
        ));
      }
      fail(message) {
        this.#finish(new NavigationResult(this.#navigated ? "browsingContext.navigationAborted" : "browsingContext.navigationFailed", message));
      }
    };
    var NavigationTracker = class {
      #eventManager;
      #logger;
      #loaderIdToNavigationsMap = /* @__PURE__ */ new Map();
      #browsingContextId;
      #currentNavigation;
      // When a new navigation is started via `BrowsingContext.navigate` with `wait` set to
      // `None`, the command result should have `navigation` value, but mapper does not have
      // it yet. This value will be set to `navigationId` after next .
      #pendingNavigation;
      // Flags if the initial navigation to `about:blank` is in progress.
      #isInitialNavigation = true;
      navigation = {
        withinDocument: new Deferred_js_1.Deferred()
      };
      constructor(url, browsingContextId, eventManager, logger) {
        this.#browsingContextId = browsingContextId;
        this.#eventManager = eventManager;
        this.#logger = logger;
        this.#isInitialNavigation = true;
        this.#currentNavigation = new NavigationState(url, browsingContextId, (0, UrlHelpers_js_1.urlMatchesAboutBlank)(url), this.#eventManager);
      }
      /**
       * Returns current started ongoing navigation. It can be either a started pending
       * navigation, or one is already navigated.
       */
      get currentNavigationId() {
        if (this.#pendingNavigation?.loaderId !== void 0) {
          return this.#pendingNavigation.navigationId;
        }
        return this.#currentNavigation.navigationId;
      }
      /**
       * Flags if the current navigation relates to the initial to `about:blank` navigation.
       */
      get isInitialNavigation() {
        return this.#isInitialNavigation;
      }
      /**
       * Url of the last navigated navigation.
       */
      get url() {
        return this.#currentNavigation.url;
      }
      /**
       * Creates a pending navigation e.g. when navigation command is called. Required to
       * provide navigation id before the actual navigation is started. It will be used when
       * navigation started. Can be aborted, failed, fragment navigated, or became a current
       * navigation.
       */
      createPendingNavigation(url, canBeInitialNavigation = false) {
        this.#logger?.(log_js_1.LogType.debug, "createCommandNavigation");
        this.#isInitialNavigation = canBeInitialNavigation && this.#isInitialNavigation && (0, UrlHelpers_js_1.urlMatchesAboutBlank)(url);
        this.#pendingNavigation?.fail("navigation canceled by concurrent navigation");
        const navigation = new NavigationState(url, this.#browsingContextId, this.#isInitialNavigation, this.#eventManager);
        this.#pendingNavigation = navigation;
        return navigation;
      }
      dispose() {
        this.#pendingNavigation?.fail("navigation canceled by context disposal");
        this.#currentNavigation.fail("navigation canceled by context disposal");
      }
      // Update the current url.
      onTargetInfoChanged(url) {
        this.#logger?.(log_js_1.LogType.debug, `onTargetInfoChanged ${url}`);
        this.#currentNavigation.url = url;
      }
      #getNavigationForFrameNavigated(url, loaderId) {
        if (this.#loaderIdToNavigationsMap.has(loaderId)) {
          return this.#loaderIdToNavigationsMap.get(loaderId);
        }
        if (this.#pendingNavigation !== void 0 && this.#pendingNavigation?.loaderId === void 0) {
          return this.#pendingNavigation;
        }
        return this.createPendingNavigation(url, true);
      }
      /**
       * @param {string} unreachableUrl indicated the navigation is actually failed.
       */
      frameNavigated(url, loaderId, unreachableUrl) {
        this.#logger?.(log_js_1.LogType.debug, `frameNavigated ${url}`);
        if (unreachableUrl !== void 0 && !this.#loaderIdToNavigationsMap.has(loaderId)) {
          const navigation2 = this.#pendingNavigation ?? this.createPendingNavigation(unreachableUrl, true);
          navigation2.url = unreachableUrl;
          navigation2.start();
          navigation2.fail("the requested url is unreachable");
          return;
        }
        const navigation = this.#getNavigationForFrameNavigated(url, loaderId);
        navigation.frameNavigated();
        if (navigation !== this.#currentNavigation) {
          this.#currentNavigation.fail("navigation canceled by concurrent navigation");
        }
        navigation.url = url;
        navigation.loaderId = loaderId;
        this.#loaderIdToNavigationsMap.set(loaderId, navigation);
        navigation.start();
        this.#currentNavigation = navigation;
        if (this.#pendingNavigation === navigation) {
          this.#pendingNavigation = void 0;
        }
      }
      navigatedWithinDocument(url, navigationType) {
        this.#logger?.(log_js_1.LogType.debug, `navigatedWithinDocument ${url}, ${navigationType}`);
        this.#currentNavigation.url = url;
        if (navigationType !== "fragment") {
          return;
        }
        const fragmentNavigation = this.#pendingNavigation !== void 0 && this.#pendingNavigation.loaderId === void 0 ? this.#pendingNavigation : new NavigationState(url, this.#browsingContextId, false, this.#eventManager);
        fragmentNavigation.fragmentNavigated();
        if (fragmentNavigation === this.#pendingNavigation) {
          this.#pendingNavigation = void 0;
        }
      }
      frameRequestedNavigation(url) {
        this.#logger?.(log_js_1.LogType.debug, `Page.frameRequestedNavigation ${url}`);
        this.createPendingNavigation(url, true);
      }
      /**
       * Required to mark navigation as fully complete.
       * TODO: navigation should be complete when it became the current one on
       * `Page.frameNavigated` or on navigating command finished with a new loader Id.
       */
      loadPageEvent(loaderId) {
        this.#logger?.(log_js_1.LogType.debug, "loadPageEvent");
        this.#isInitialNavigation = false;
        this.#loaderIdToNavigationsMap.get(loaderId)?.load();
      }
      /**
       * Fail navigation due to navigation command failed.
       */
      failNavigation(navigation, errorText) {
        this.#logger?.(log_js_1.LogType.debug, "failCommandNavigation");
        navigation.fail(errorText);
      }
      /**
       * Updates the navigation's `loaderId` and sets it as current one, if it is a
       * cross-document navigation.
       */
      navigationCommandFinished(navigation, loaderId) {
        this.#logger?.(log_js_1.LogType.debug, `finishCommandNavigation ${navigation.navigationId}, ${loaderId}`);
        if (loaderId !== void 0) {
          navigation.loaderId = loaderId;
          this.#loaderIdToNavigationsMap.set(loaderId, navigation);
        }
        if (loaderId === void 0 || this.#currentNavigation === navigation) {
          return;
        }
        this.#currentNavigation.fail("navigation canceled by concurrent navigation");
        navigation.start();
        this.#currentNavigation = navigation;
        if (this.#pendingNavigation === navigation) {
          this.#pendingNavigation = void 0;
        }
      }
      /**
       * Emulated event, tight to `Network.requestWillBeSent`.
       */
      frameStartedNavigating(url, loaderId) {
        this.#logger?.(log_js_1.LogType.debug, `frameStartedNavigating ${url}, ${loaderId}`);
        if (this.#loaderIdToNavigationsMap.has(loaderId)) {
          return;
        }
        const pendingNavigation = this.#pendingNavigation ?? this.createPendingNavigation(url, true);
        pendingNavigation.url = url;
        pendingNavigation.start();
        pendingNavigation.loaderId = loaderId;
        this.#loaderIdToNavigationsMap.set(loaderId, pendingNavigation);
      }
      /**
       * In case of `beforeunload` handler, the pending navigation should be marked as started
       * for consistency, as the `browsingContext.navigationStarted` should be emitted before
       * user prompt.
       */
      beforeunload() {
        this.#logger?.(log_js_1.LogType.debug, `beforeunload`);
        if (this.#pendingNavigation === void 0) {
          this.#logger?.(log_js_1.LogType.debugError, `Unexpectedly no pending navigation on beforeunload`);
          return;
        }
        this.#pendingNavigation.start();
      }
      /**
       * If there is a navigation with the loaderId equals to the network request id, it means
       * that the navigation failed.
       */
      networkLoadingFailed(loaderId, errorText) {
        this.#loaderIdToNavigationsMap.get(loaderId)?.fail(errorText);
      }
    };
    exports.NavigationTracker = NavigationTracker;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/context/BrowsingContextImpl.js
var require_BrowsingContextImpl = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/context/BrowsingContextImpl.js"(exports) {
    "use strict";
    init_esm();
    var _a3;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BrowsingContextImpl = void 0;
    exports.serializeOrigin = serializeOrigin;
    var protocol_js_1 = require_protocol();
    var assert_js_1 = require_assert();
    var Deferred_js_1 = require_Deferred();
    var log_js_1 = require_log();
    var time_js_1 = require_time();
    var unitConversions_js_1 = require_unitConversions();
    var WindowRealm_js_1 = require_WindowRealm();
    var NavigationTracker_js_1 = require_NavigationTracker();
    var BrowsingContextImpl = class {
      static LOGGER_PREFIX = `${log_js_1.LogType.debug}:browsingContext`;
      /** Direct children browsing contexts. */
      #children = /* @__PURE__ */ new Set();
      /** The ID of this browsing context. */
      #id;
      userContext;
      /**
       * The ID of the parent browsing context.
       * If null, this is a top-level context.
       */
      #loaderId;
      #parentId = null;
      // Keeps track of the previously set viewport.
      #previousViewport = { width: 0, height: 0 };
      #originalOpener;
      #lifecycle = {
        DOMContentLoaded: new Deferred_js_1.Deferred(),
        load: new Deferred_js_1.Deferred()
      };
      #cdpTarget;
      #defaultRealmDeferred = new Deferred_js_1.Deferred();
      #browsingContextStorage;
      #eventManager;
      #logger;
      #navigationTracker;
      #realmStorage;
      // The deferred will be resolved when the default realm is created.
      #unhandledPromptBehavior;
      // Set when the user prompt is opened. Required to provide the type in closing event.
      #lastUserPromptType;
      constructor(id, parentId, userContext, cdpTarget, eventManager, browsingContextStorage, realmStorage, url, originalOpener, unhandledPromptBehavior, logger) {
        this.#cdpTarget = cdpTarget;
        this.#id = id;
        this.#parentId = parentId;
        this.userContext = userContext;
        this.#eventManager = eventManager;
        this.#browsingContextStorage = browsingContextStorage;
        this.#realmStorage = realmStorage;
        this.#unhandledPromptBehavior = unhandledPromptBehavior;
        this.#logger = logger;
        this.#originalOpener = originalOpener;
        this.#navigationTracker = new NavigationTracker_js_1.NavigationTracker(url, id, eventManager, logger);
      }
      static create(id, parentId, userContext, cdpTarget, eventManager, browsingContextStorage, realmStorage, url, originalOpener, unhandledPromptBehavior, logger) {
        const context = new _a3(id, parentId, userContext, cdpTarget, eventManager, browsingContextStorage, realmStorage, url, originalOpener, unhandledPromptBehavior, logger);
        context.#initListeners();
        browsingContextStorage.addContext(context);
        if (!context.isTopLevelContext()) {
          context.parent.addChild(context.id);
        }
        eventManager.registerPromiseEvent(context.targetUnblockedOrThrow().then(() => {
          return {
            kind: "success",
            value: {
              type: "event",
              method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.ContextCreated,
              params: {
                ...context.serializeToBidiValue(),
                // Hack to provide the initial URL of the context, as it can be changed
                // between the page target is attached and unblocked, as the page is not
                // fully paused in MPArch session (https://crbug.com/372842894).
                // TODO: remove once https://crbug.com/372842894 is addressed.
                url
              }
            }
          };
        }, (error) => {
          return {
            kind: "error",
            error
          };
        }), context.id, protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.ContextCreated);
        return context;
      }
      /**
       * @see https://html.spec.whatwg.org/multipage/document-sequences.html#navigable
       */
      get navigableId() {
        return this.#loaderId;
      }
      get navigationId() {
        return this.#navigationTracker.currentNavigationId;
      }
      dispose(emitContextDestroyed) {
        this.#navigationTracker.dispose();
        this.#deleteAllChildren();
        this.#realmStorage.deleteRealms({
          browsingContextId: this.id
        });
        if (!this.isTopLevelContext()) {
          this.parent.#children.delete(this.id);
        }
        this.#failLifecycleIfNotFinished();
        if (emitContextDestroyed) {
          this.#eventManager.registerEvent({
            type: "event",
            method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.ContextDestroyed,
            params: this.serializeToBidiValue()
          }, this.id);
        }
        this.#eventManager.clearBufferedEvents(this.id);
        this.#browsingContextStorage.deleteContextById(this.id);
      }
      /** Returns the ID of this context. */
      get id() {
        return this.#id;
      }
      /** Returns the parent context ID. */
      get parentId() {
        return this.#parentId;
      }
      /** Sets the parent context ID and updates parent's children. */
      set parentId(parentId) {
        if (this.#parentId !== null) {
          this.#logger?.(log_js_1.LogType.debugError, "Parent context already set");
          return;
        }
        this.#parentId = parentId;
        if (!this.isTopLevelContext()) {
          this.parent.addChild(this.id);
        }
      }
      /** Returns the parent context. */
      get parent() {
        if (this.parentId === null) {
          return null;
        }
        return this.#browsingContextStorage.getContext(this.parentId);
      }
      /** Returns all direct children contexts. */
      get directChildren() {
        return [...this.#children].map((id) => this.#browsingContextStorage.getContext(id));
      }
      /** Returns all children contexts, flattened. */
      get allChildren() {
        const children = this.directChildren;
        return children.concat(...children.map((child) => child.allChildren));
      }
      /**
       * Returns true if this is a top-level context.
       * This is the case whenever the parent context ID is null.
       */
      isTopLevelContext() {
        return this.#parentId === null;
      }
      get top() {
        let topContext = this;
        let parent = topContext.parent;
        while (parent) {
          topContext = parent;
          parent = topContext.parent;
        }
        return topContext;
      }
      addChild(childId) {
        this.#children.add(childId);
      }
      #deleteAllChildren(emitContextDestroyed = false) {
        this.directChildren.map((child) => child.dispose(emitContextDestroyed));
      }
      get cdpTarget() {
        return this.#cdpTarget;
      }
      updateCdpTarget(cdpTarget) {
        this.#cdpTarget = cdpTarget;
        this.#initListeners();
      }
      get url() {
        return this.#navigationTracker.url;
      }
      async lifecycleLoaded() {
        await this.#lifecycle.load;
      }
      async targetUnblockedOrThrow() {
        const result = await this.#cdpTarget.unblocked;
        if (result.kind === "error") {
          throw result.error;
        }
      }
      async getOrCreateSandbox(sandbox) {
        if (sandbox === void 0 || sandbox === "") {
          return await this.#defaultRealmDeferred;
        }
        let maybeSandboxes = this.#realmStorage.findRealms({
          browsingContextId: this.id,
          sandbox
        });
        if (maybeSandboxes.length === 0) {
          await this.#cdpTarget.cdpClient.sendCommand("Page.createIsolatedWorld", {
            frameId: this.id,
            worldName: sandbox
          });
          maybeSandboxes = this.#realmStorage.findRealms({
            browsingContextId: this.id,
            sandbox
          });
          (0, assert_js_1.assert)(maybeSandboxes.length !== 0);
        }
        return maybeSandboxes[0];
      }
      serializeToBidiValue(maxDepth = 0, addParentField = true) {
        return {
          context: this.#id,
          url: this.url,
          userContext: this.userContext,
          originalOpener: this.#originalOpener ?? null,
          // TODO(#2646): Implement Client Window correctly
          clientWindow: "",
          children: maxDepth > 0 ? this.directChildren.map((c) => c.serializeToBidiValue(maxDepth - 1, false)) : null,
          ...addParentField ? { parent: this.#parentId } : {}
        };
      }
      onTargetInfoChanged(params) {
        this.#navigationTracker.onTargetInfoChanged(params.targetInfo.url);
      }
      #initListeners() {
        this.#cdpTarget.cdpClient.on("Network.loadingFailed", (params) => {
          this.#navigationTracker.networkLoadingFailed(params.requestId, params.errorText);
        });
        this.#cdpTarget.cdpClient.on("Page.frameNavigated", (params) => {
          if (this.id !== params.frame.id) {
            return;
          }
          this.#navigationTracker.frameNavigated(
            params.frame.url + (params.frame.urlFragment ?? ""),
            params.frame.loaderId,
            // `unreachableUrl` indicates if the navigation failed.
            params.frame.unreachableUrl
          );
          this.#deleteAllChildren();
          this.#documentChanged(params.frame.loaderId);
        });
        this.#cdpTarget.on("frameStartedNavigating", (params) => {
          this.#logger?.(log_js_1.LogType.debugInfo, `Received ${"frameStartedNavigating"} event`, params);
          const possibleFrameIds = [
            this.id,
            ...this.cdpTarget.id === this.id ? [void 0] : []
          ];
          if (!possibleFrameIds.includes(params.frameId)) {
            return;
          }
          this.#navigationTracker.frameStartedNavigating(params.url, params.loaderId);
        });
        this.#cdpTarget.cdpClient.on("Page.navigatedWithinDocument", (params) => {
          if (this.id !== params.frameId) {
            return;
          }
          this.#navigationTracker.navigatedWithinDocument(params.url, params.navigationType);
          if (params.navigationType === "historyApi") {
            this.#eventManager.registerEvent({
              type: "event",
              method: "browsingContext.historyUpdated",
              params: {
                context: this.id,
                url: this.#navigationTracker.url
              }
            }, this.id);
            return;
          }
        });
        this.#cdpTarget.cdpClient.on("Page.frameRequestedNavigation", (params) => {
          if (this.id !== params.frameId) {
            return;
          }
          this.#navigationTracker.frameRequestedNavigation(params.url);
        });
        this.#cdpTarget.cdpClient.on("Page.lifecycleEvent", (params) => {
          if (this.id !== params.frameId) {
            return;
          }
          if (params.name === "init") {
            this.#documentChanged(params.loaderId);
            return;
          }
          if (params.name === "commit") {
            this.#loaderId = params.loaderId;
            return;
          }
          if (!this.#loaderId) {
            this.#loaderId = params.loaderId;
          }
          if (params.loaderId !== this.#loaderId) {
            return;
          }
          switch (params.name) {
            case "DOMContentLoaded":
              if (!this.#navigationTracker.isInitialNavigation) {
                this.#eventManager.registerEvent({
                  type: "event",
                  method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.DomContentLoaded,
                  params: {
                    context: this.id,
                    navigation: this.#navigationTracker.currentNavigationId,
                    timestamp: (0, time_js_1.getTimestamp)(),
                    url: this.#navigationTracker.url
                  }
                }, this.id);
              }
              this.#lifecycle.DOMContentLoaded.resolve();
              break;
            case "load":
              if (!this.#navigationTracker.isInitialNavigation) {
                this.#eventManager.registerEvent({
                  type: "event",
                  method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.Load,
                  params: {
                    context: this.id,
                    navigation: this.#navigationTracker.currentNavigationId,
                    timestamp: (0, time_js_1.getTimestamp)(),
                    url: this.#navigationTracker.url
                  }
                }, this.id);
              }
              this.#navigationTracker.loadPageEvent(params.loaderId);
              this.#lifecycle.load.resolve();
              break;
          }
        });
        this.#cdpTarget.cdpClient.on("Runtime.executionContextCreated", (params) => {
          const { auxData, name, uniqueId, id } = params.context;
          if (!auxData || auxData.frameId !== this.id) {
            return;
          }
          let origin;
          let sandbox;
          switch (auxData.type) {
            case "isolated":
              sandbox = name;
              if (!this.#defaultRealmDeferred.isFinished) {
                this.#logger?.(log_js_1.LogType.debugError, "Unexpectedly, isolated realm created before the default one");
              }
              origin = this.#defaultRealmDeferred.isFinished ? this.#defaultRealmDeferred.result.origin : (
                // This fallback is not expected to be ever reached.
                ""
              );
              break;
            case "default":
              origin = serializeOrigin(params.context.origin);
              break;
            default:
              return;
          }
          const realm = new WindowRealm_js_1.WindowRealm(this.id, this.#browsingContextStorage, this.#cdpTarget.cdpClient, this.#eventManager, id, this.#logger, origin, uniqueId, this.#realmStorage, sandbox);
          if (auxData.isDefault) {
            this.#defaultRealmDeferred.resolve(realm);
            void Promise.all(this.#cdpTarget.getChannels().map((channel) => channel.startListenerFromWindow(realm, this.#eventManager)));
          }
        });
        this.#cdpTarget.cdpClient.on("Runtime.executionContextDestroyed", (params) => {
          if (this.#defaultRealmDeferred.isFinished && this.#defaultRealmDeferred.result.executionContextId === params.executionContextId) {
            this.#defaultRealmDeferred = new Deferred_js_1.Deferred();
          }
          this.#realmStorage.deleteRealms({
            cdpSessionId: this.#cdpTarget.cdpSessionId,
            executionContextId: params.executionContextId
          });
        });
        this.#cdpTarget.cdpClient.on("Runtime.executionContextsCleared", () => {
          if (!this.#defaultRealmDeferred.isFinished) {
            this.#defaultRealmDeferred.reject(new protocol_js_1.UnknownErrorException("execution contexts cleared"));
          }
          this.#defaultRealmDeferred = new Deferred_js_1.Deferred();
          this.#realmStorage.deleteRealms({
            cdpSessionId: this.#cdpTarget.cdpSessionId
          });
        });
        this.#cdpTarget.cdpClient.on("Page.javascriptDialogClosed", (params) => {
          const accepted = params.result;
          if (this.#lastUserPromptType === void 0) {
            this.#logger?.(log_js_1.LogType.debugError, "Unexpectedly no opening prompt event before closing one");
          }
          this.#eventManager.registerEvent({
            type: "event",
            method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.UserPromptClosed,
            params: {
              context: this.id,
              accepted,
              // `lastUserPromptType` should never be undefined here, so fallback to
              // `UNKNOWN`. The fallback is required to prevent tests from hanging while
              // waiting for the closing event. The cast is required, as the `UNKNOWN` value
              // is not standard.
              type: this.#lastUserPromptType ?? "UNKNOWN",
              userText: accepted && params.userInput ? params.userInput : void 0
            }
          }, this.id);
          this.#lastUserPromptType = void 0;
        });
        this.#cdpTarget.cdpClient.on("Page.javascriptDialogOpening", (params) => {
          const promptType = _a3.#getPromptType(params.type);
          if (params.type === "beforeunload") {
            this.#navigationTracker.beforeunload();
          }
          this.#lastUserPromptType = promptType;
          const promptHandler = this.#getPromptHandler(promptType);
          this.#eventManager.registerEvent({
            type: "event",
            method: protocol_js_1.ChromiumBidi.BrowsingContext.EventNames.UserPromptOpened,
            params: {
              context: this.id,
              handler: promptHandler,
              type: promptType,
              message: params.message,
              ...params.type === "prompt" ? { defaultValue: params.defaultPrompt } : {}
            }
          }, this.id);
          switch (promptHandler) {
            // Based on `unhandledPromptBehavior`, check if the prompt should be handled
            // automatically (`accept`, `dismiss`) or wait for the user to do it.
            case "accept":
              void this.handleUserPrompt(true);
              break;
            case "dismiss":
              void this.handleUserPrompt(false);
              break;
            case "ignore":
              break;
          }
        });
      }
      static #getPromptType(cdpType) {
        switch (cdpType) {
          case "alert":
            return "alert";
          case "beforeunload":
            return "beforeunload";
          case "confirm":
            return "confirm";
          case "prompt":
            return "prompt";
        }
      }
      #getPromptHandler(promptType) {
        const defaultPromptHandler = "dismiss";
        switch (promptType) {
          case "alert":
            return this.#unhandledPromptBehavior?.alert ?? this.#unhandledPromptBehavior?.default ?? defaultPromptHandler;
          case "beforeunload":
            return this.#unhandledPromptBehavior?.beforeUnload ?? this.#unhandledPromptBehavior?.default ?? "accept";
          case "confirm":
            return this.#unhandledPromptBehavior?.confirm ?? this.#unhandledPromptBehavior?.default ?? defaultPromptHandler;
          case "prompt":
            return this.#unhandledPromptBehavior?.prompt ?? this.#unhandledPromptBehavior?.default ?? defaultPromptHandler;
        }
      }
      #documentChanged(loaderId) {
        if (loaderId === void 0 || this.#loaderId === loaderId) {
          return;
        }
        this.#resetLifecycleIfFinished();
        this.#loaderId = loaderId;
        this.#deleteAllChildren(true);
      }
      #resetLifecycleIfFinished() {
        if (this.#lifecycle.DOMContentLoaded.isFinished) {
          this.#lifecycle.DOMContentLoaded = new Deferred_js_1.Deferred();
        } else {
          this.#logger?.(_a3.LOGGER_PREFIX, "Document changed (DOMContentLoaded)");
        }
        if (this.#lifecycle.load.isFinished) {
          this.#lifecycle.load = new Deferred_js_1.Deferred();
        } else {
          this.#logger?.(_a3.LOGGER_PREFIX, "Document changed (load)");
        }
      }
      #failLifecycleIfNotFinished() {
        if (!this.#lifecycle.DOMContentLoaded.isFinished) {
          this.#lifecycle.DOMContentLoaded.reject(new protocol_js_1.UnknownErrorException("navigation canceled"));
        }
        if (!this.#lifecycle.load.isFinished) {
          this.#lifecycle.load.reject(new protocol_js_1.UnknownErrorException("navigation canceled"));
        }
      }
      async navigate(url, wait) {
        try {
          new URL(url);
        } catch {
          throw new protocol_js_1.InvalidArgumentException(`Invalid URL: ${url}`);
        }
        const commandNavigation = this.#navigationTracker.createPendingNavigation(url);
        const cdpNavigatePromise = (async () => {
          const cdpNavigateResult = await this.#cdpTarget.cdpClient.sendCommand("Page.navigate", {
            url,
            frameId: this.id
          });
          if (cdpNavigateResult.errorText) {
            this.#navigationTracker.failNavigation(commandNavigation, cdpNavigateResult.errorText);
            throw new protocol_js_1.UnknownErrorException(cdpNavigateResult.errorText);
          }
          this.#navigationTracker.navigationCommandFinished(commandNavigation, cdpNavigateResult.loaderId);
          this.#documentChanged(cdpNavigateResult.loaderId);
        })();
        if (wait === "none") {
          return {
            navigation: commandNavigation.navigationId,
            url
          };
        }
        const result = await Promise.race([
          // No `loaderId` means same-document navigation.
          this.#waitNavigation(wait, cdpNavigatePromise),
          // Throw an error if the navigation is canceled.
          commandNavigation.finished
        ]);
        if (result instanceof NavigationTracker_js_1.NavigationResult) {
          if (
            // TODO: check after decision on the spec is done:
            //  https://github.com/w3c/webdriver-bidi/issues/799.
            result.eventName === "browsingContext.navigationAborted" || result.eventName === "browsingContext.navigationFailed"
          ) {
            throw new protocol_js_1.UnknownErrorException(result.message ?? "unknown exception");
          }
        }
        return {
          navigation: commandNavigation.navigationId,
          // Url can change due to redirects. Get the one from commandNavigation.
          url: commandNavigation.url
        };
      }
      async #waitNavigation(wait, cdpCommandPromise) {
        switch (wait) {
          case "none":
            return;
          case "interactive":
            await cdpCommandPromise;
            await this.#lifecycle.DOMContentLoaded;
            return;
          case "complete":
            await cdpCommandPromise;
            await this.#lifecycle.load;
            return;
        }
      }
      // TODO: support concurrent navigations analogous to `navigate`.
      async reload(ignoreCache, wait) {
        await this.targetUnblockedOrThrow();
        this.#resetLifecycleIfFinished();
        const commandNavigation = this.#navigationTracker.createPendingNavigation(this.#navigationTracker.url);
        const cdpReloadPromise = this.#cdpTarget.cdpClient.sendCommand("Page.reload", {
          ignoreCache
        });
        const result = await Promise.race([
          // No `loaderId` means same-document navigation.
          this.#waitNavigation(wait, cdpReloadPromise),
          // Throw an error if the navigation is canceled.
          commandNavigation.finished
        ]);
        if (result instanceof NavigationTracker_js_1.NavigationResult) {
          if (result.eventName === "browsingContext.navigationAborted" || result.eventName === "browsingContext.navigationFailed") {
            throw new protocol_js_1.UnknownErrorException(result.message ?? "unknown exception");
          }
        }
        return {
          navigation: commandNavigation.navigationId,
          // Url can change due to redirects. Get the one from commandNavigation.
          url: commandNavigation.url
        };
      }
      async setViewport(viewport, devicePixelRatio) {
        if (viewport === null && devicePixelRatio === null) {
          await this.#cdpTarget.cdpClient.sendCommand("Emulation.clearDeviceMetricsOverride");
        } else {
          try {
            let appliedViewport;
            if (viewport === void 0) {
              appliedViewport = this.#previousViewport;
            } else if (viewport === null) {
              appliedViewport = {
                width: 0,
                height: 0
              };
            } else {
              appliedViewport = viewport;
            }
            this.#previousViewport = appliedViewport;
            await this.#cdpTarget.cdpClient.sendCommand("Emulation.setDeviceMetricsOverride", {
              width: this.#previousViewport.width,
              height: this.#previousViewport.height,
              deviceScaleFactor: devicePixelRatio ? devicePixelRatio : 0,
              mobile: false,
              dontSetVisibleSize: true
            });
          } catch (err) {
            if (err.message.startsWith(
              // https://crsrc.org/c/content/browser/devtools/protocol/emulation_handler.cc;l=257;drc=2f6eee84cf98d4227e7c41718dd71b82f26d90ff
              "Width and height values must be positive"
            )) {
              throw new protocol_js_1.UnsupportedOperationException("Provided viewport dimensions are not supported");
            }
            throw err;
          }
        }
      }
      async handleUserPrompt(accept, userText) {
        await this.#cdpTarget.cdpClient.sendCommand("Page.handleJavaScriptDialog", {
          accept: accept ?? true,
          promptText: userText
        });
      }
      async activate() {
        await this.#cdpTarget.cdpClient.sendCommand("Page.bringToFront");
      }
      async captureScreenshot(params) {
        if (!this.isTopLevelContext()) {
          throw new protocol_js_1.UnsupportedOperationException(`Non-top-level 'context' (${params.context}) is currently not supported`);
        }
        const formatParameters = getImageFormatParameters(params);
        let captureBeyondViewport = false;
        let script;
        params.origin ??= "viewport";
        switch (params.origin) {
          case "document": {
            script = String(() => {
              const element = document.documentElement;
              return {
                x: 0,
                y: 0,
                width: element.scrollWidth,
                height: element.scrollHeight
              };
            });
            captureBeyondViewport = true;
            break;
          }
          case "viewport": {
            script = String(() => {
              const viewport = window.visualViewport;
              return {
                x: viewport.pageLeft,
                y: viewport.pageTop,
                width: viewport.width,
                height: viewport.height
              };
            });
            break;
          }
        }
        const realm = await this.getOrCreateSandbox(void 0);
        const originResult = await realm.callFunction(script, false);
        (0, assert_js_1.assert)(originResult.type === "success");
        const origin = deserializeDOMRect(originResult.result);
        (0, assert_js_1.assert)(origin);
        let rect = origin;
        if (params.clip) {
          const clip = params.clip;
          if (params.origin === "viewport" && clip.type === "box") {
            clip.x += origin.x;
            clip.y += origin.y;
          }
          rect = getIntersectionRect(await this.#parseRect(clip), origin);
        }
        if (rect.width === 0 || rect.height === 0) {
          throw new protocol_js_1.UnableToCaptureScreenException(`Unable to capture screenshot with zero dimensions: width=${rect.width}, height=${rect.height}`);
        }
        return await this.#cdpTarget.cdpClient.sendCommand("Page.captureScreenshot", {
          clip: { ...rect, scale: 1 },
          ...formatParameters,
          captureBeyondViewport
        });
      }
      async print(params) {
        if (!this.isTopLevelContext()) {
          throw new protocol_js_1.UnsupportedOperationException("Printing of non-top level contexts is not supported");
        }
        const cdpParams = {};
        if (params.background !== void 0) {
          cdpParams.printBackground = params.background;
        }
        if (params.margin?.bottom !== void 0) {
          cdpParams.marginBottom = (0, unitConversions_js_1.inchesFromCm)(params.margin.bottom);
        }
        if (params.margin?.left !== void 0) {
          cdpParams.marginLeft = (0, unitConversions_js_1.inchesFromCm)(params.margin.left);
        }
        if (params.margin?.right !== void 0) {
          cdpParams.marginRight = (0, unitConversions_js_1.inchesFromCm)(params.margin.right);
        }
        if (params.margin?.top !== void 0) {
          cdpParams.marginTop = (0, unitConversions_js_1.inchesFromCm)(params.margin.top);
        }
        if (params.orientation !== void 0) {
          cdpParams.landscape = params.orientation === "landscape";
        }
        if (params.page?.height !== void 0) {
          cdpParams.paperHeight = (0, unitConversions_js_1.inchesFromCm)(params.page.height);
        }
        if (params.page?.width !== void 0) {
          cdpParams.paperWidth = (0, unitConversions_js_1.inchesFromCm)(params.page.width);
        }
        if (params.pageRanges !== void 0) {
          for (const range of params.pageRanges) {
            if (typeof range === "number") {
              continue;
            }
            const rangeParts = range.split("-");
            if (rangeParts.length < 1 || rangeParts.length > 2) {
              throw new protocol_js_1.InvalidArgumentException(`Invalid page range: ${range} is not a valid integer range.`);
            }
            if (rangeParts.length === 1) {
              void parseInteger(rangeParts[0] ?? "");
              continue;
            }
            let lowerBound;
            let upperBound;
            const [rangeLowerPart = "", rangeUpperPart = ""] = rangeParts;
            if (rangeLowerPart === "") {
              lowerBound = 1;
            } else {
              lowerBound = parseInteger(rangeLowerPart);
            }
            if (rangeUpperPart === "") {
              upperBound = Number.MAX_SAFE_INTEGER;
            } else {
              upperBound = parseInteger(rangeUpperPart);
            }
            if (lowerBound > upperBound) {
              throw new protocol_js_1.InvalidArgumentException(`Invalid page range: ${rangeLowerPart} > ${rangeUpperPart}`);
            }
          }
          cdpParams.pageRanges = params.pageRanges.join(",");
        }
        if (params.scale !== void 0) {
          cdpParams.scale = params.scale;
        }
        if (params.shrinkToFit !== void 0) {
          cdpParams.preferCSSPageSize = !params.shrinkToFit;
        }
        try {
          const result = await this.#cdpTarget.cdpClient.sendCommand("Page.printToPDF", cdpParams);
          return {
            data: result.data
          };
        } catch (error) {
          if (error.message === "invalid print parameters: content area is empty") {
            throw new protocol_js_1.UnsupportedOperationException(error.message);
          }
          throw error;
        }
      }
      /**
       * See
       * https://w3c.github.io/webdriver-bidi/#:~:text=If%20command%20parameters%20contains%20%22clip%22%3A
       */
      async #parseRect(clip) {
        switch (clip.type) {
          case "box":
            return { x: clip.x, y: clip.y, width: clip.width, height: clip.height };
          case "element": {
            const sandbox = await this.getOrCreateSandbox(void 0);
            const result = await sandbox.callFunction(String((element) => {
              return element instanceof Element;
            }), false, { type: "undefined" }, [clip.element]);
            if (result.type === "exception") {
              throw new protocol_js_1.NoSuchElementException(`Element '${clip.element.sharedId}' was not found`);
            }
            (0, assert_js_1.assert)(result.result.type === "boolean");
            if (!result.result.value) {
              throw new protocol_js_1.NoSuchElementException(`Node '${clip.element.sharedId}' is not an Element`);
            }
            {
              const result2 = await sandbox.callFunction(String((element) => {
                const rect2 = element.getBoundingClientRect();
                return {
                  x: rect2.x,
                  y: rect2.y,
                  height: rect2.height,
                  width: rect2.width
                };
              }), false, { type: "undefined" }, [clip.element]);
              (0, assert_js_1.assert)(result2.type === "success");
              const rect = deserializeDOMRect(result2.result);
              if (!rect) {
                throw new protocol_js_1.UnableToCaptureScreenException(`Could not get bounding box for Element '${clip.element.sharedId}'`);
              }
              return rect;
            }
          }
        }
      }
      async close() {
        await this.#cdpTarget.cdpClient.sendCommand("Page.close");
      }
      async traverseHistory(delta) {
        if (delta === 0) {
          return;
        }
        const history = await this.#cdpTarget.cdpClient.sendCommand("Page.getNavigationHistory");
        const entry = history.entries[history.currentIndex + delta];
        if (!entry) {
          throw new protocol_js_1.NoSuchHistoryEntryException(`No history entry at delta ${delta}`);
        }
        await this.#cdpTarget.cdpClient.sendCommand("Page.navigateToHistoryEntry", {
          entryId: entry.id
        });
      }
      async toggleModulesIfNeeded() {
        await Promise.all([
          this.#cdpTarget.toggleNetworkIfNeeded(),
          this.#cdpTarget.toggleDeviceAccessIfNeeded()
        ]);
      }
      async locateNodes(params) {
        return await this.#locateNodesByLocator(await this.#defaultRealmDeferred, params.locator, params.startNodes ?? [], params.maxNodeCount, params.serializationOptions);
      }
      async #getLocatorDelegate(realm, locator, maxNodeCount, startNodes) {
        switch (locator.type) {
          case "css":
            return {
              functionDeclaration: String((cssSelector, maxNodeCount2, ...startNodes2) => {
                const locateNodesUsingCss = (element) => {
                  if (!(element instanceof HTMLElement || element instanceof Document || element instanceof DocumentFragment)) {
                    throw new Error("startNodes in css selector should be HTMLElement, Document or DocumentFragment");
                  }
                  return [...element.querySelectorAll(cssSelector)];
                };
                startNodes2 = startNodes2.length > 0 ? startNodes2 : [document];
                const returnedNodes = startNodes2.map((startNode) => (
                  // TODO: stop search early if `maxNodeCount` is reached.
                  locateNodesUsingCss(startNode)
                )).flat(1);
                return maxNodeCount2 === 0 ? returnedNodes : returnedNodes.slice(0, maxNodeCount2);
              }),
              argumentsLocalValues: [
                // `cssSelector`
                { type: "string", value: locator.value },
                // `maxNodeCount` with `0` means no limit.
                { type: "number", value: maxNodeCount ?? 0 },
                // `startNodes`
                ...startNodes
              ]
            };
          case "xpath":
            return {
              functionDeclaration: String((xPathSelector, maxNodeCount2, ...startNodes2) => {
                const evaluator = new XPathEvaluator();
                const expression = evaluator.createExpression(xPathSelector);
                const locateNodesUsingXpath = (element) => {
                  const xPathResult = expression.evaluate(element, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE);
                  const returnedNodes2 = [];
                  for (let i = 0; i < xPathResult.snapshotLength; i++) {
                    returnedNodes2.push(xPathResult.snapshotItem(i));
                  }
                  return returnedNodes2;
                };
                startNodes2 = startNodes2.length > 0 ? startNodes2 : [document];
                const returnedNodes = startNodes2.map((startNode) => (
                  // TODO: stop search early if `maxNodeCount` is reached.
                  locateNodesUsingXpath(startNode)
                )).flat(1);
                return maxNodeCount2 === 0 ? returnedNodes : returnedNodes.slice(0, maxNodeCount2);
              }),
              argumentsLocalValues: [
                // `xPathSelector`
                { type: "string", value: locator.value },
                // `maxNodeCount` with `0` means no limit.
                { type: "number", value: maxNodeCount ?? 0 },
                // `startNodes`
                ...startNodes
              ]
            };
          case "innerText":
            if (locator.value === "") {
              throw new protocol_js_1.InvalidSelectorException("innerText locator cannot be empty");
            }
            return {
              functionDeclaration: String((innerTextSelector, fullMatch, ignoreCase, maxNodeCount2, maxDepth, ...startNodes2) => {
                const searchText = ignoreCase ? innerTextSelector.toUpperCase() : innerTextSelector;
                const locateNodesUsingInnerText = (node, currentMaxDepth) => {
                  const returnedNodes2 = [];
                  if (node instanceof DocumentFragment || node instanceof Document) {
                    const children = [...node.children];
                    children.forEach((child) => (
                      // `currentMaxDepth` is not decremented intentionally according to
                      // https://github.com/w3c/webdriver-bidi/pull/713.
                      returnedNodes2.push(...locateNodesUsingInnerText(child, currentMaxDepth))
                    ));
                    return returnedNodes2;
                  }
                  if (!(node instanceof HTMLElement)) {
                    return [];
                  }
                  const element = node;
                  const nodeInnerText = ignoreCase ? element.innerText?.toUpperCase() : element.innerText;
                  if (!nodeInnerText.includes(searchText)) {
                    return [];
                  }
                  const childNodes = [];
                  for (const child of element.children) {
                    if (child instanceof HTMLElement) {
                      childNodes.push(child);
                    }
                  }
                  if (childNodes.length === 0) {
                    if (fullMatch && nodeInnerText === searchText) {
                      returnedNodes2.push(element);
                    } else {
                      if (!fullMatch) {
                        returnedNodes2.push(element);
                      }
                    }
                  } else {
                    const childNodeMatches = (
                      // Don't search deeper if `maxDepth` is reached.
                      currentMaxDepth <= 0 ? [] : childNodes.map((child) => locateNodesUsingInnerText(child, currentMaxDepth - 1)).flat(1)
                    );
                    if (childNodeMatches.length === 0) {
                      if (!fullMatch || nodeInnerText === searchText) {
                        returnedNodes2.push(element);
                      }
                    } else {
                      returnedNodes2.push(...childNodeMatches);
                    }
                  }
                  return returnedNodes2;
                };
                startNodes2 = startNodes2.length > 0 ? startNodes2 : [document];
                const returnedNodes = startNodes2.map((startNode) => (
                  // TODO: stop search early if `maxNodeCount` is reached.
                  locateNodesUsingInnerText(startNode, maxDepth)
                )).flat(1);
                return maxNodeCount2 === 0 ? returnedNodes : returnedNodes.slice(0, maxNodeCount2);
              }),
              argumentsLocalValues: [
                // `innerTextSelector`
                { type: "string", value: locator.value },
                // `fullMatch` with default `true`.
                { type: "boolean", value: locator.matchType !== "partial" },
                // `ignoreCase` with default `false`.
                { type: "boolean", value: locator.ignoreCase === true },
                // `maxNodeCount` with `0` means no limit.
                { type: "number", value: maxNodeCount ?? 0 },
                // `maxDepth` with default `1000` (same as default full serialization depth).
                { type: "number", value: locator.maxDepth ?? 1e3 },
                // `startNodes`
                ...startNodes
              ]
            };
          case "accessibility": {
            if (!locator.value.name && !locator.value.role) {
              throw new protocol_js_1.InvalidSelectorException("Either name or role has to be specified");
            }
            await Promise.all([
              this.#cdpTarget.cdpClient.sendCommand("Accessibility.enable"),
              this.#cdpTarget.cdpClient.sendCommand("Accessibility.getRootAXNode")
            ]);
            const bindings = await realm.evaluate(
              /* expression=*/
              "({getAccessibleName, getAccessibleRole})",
              /* awaitPromise=*/
              false,
              "root",
              /* serializationOptions= */
              void 0,
              /* userActivation=*/
              false,
              /* includeCommandLineApi=*/
              true
            );
            if (bindings.type !== "success") {
              throw new Error("Could not get bindings");
            }
            if (bindings.result.type !== "object") {
              throw new Error("Could not get bindings");
            }
            return {
              functionDeclaration: String((name, role, bindings2, maxNodeCount2, ...startNodes2) => {
                const returnedNodes = [];
                let aborted = false;
                function collect(contextNodes, selector) {
                  if (aborted) {
                    return;
                  }
                  for (const contextNode of contextNodes) {
                    let match = true;
                    if (selector.role) {
                      const role2 = bindings2.getAccessibleRole(contextNode);
                      if (selector.role !== role2) {
                        match = false;
                      }
                    }
                    if (selector.name) {
                      const name2 = bindings2.getAccessibleName(contextNode);
                      if (selector.name !== name2) {
                        match = false;
                      }
                    }
                    if (match) {
                      if (maxNodeCount2 !== 0 && returnedNodes.length === maxNodeCount2) {
                        aborted = true;
                        break;
                      }
                      returnedNodes.push(contextNode);
                    }
                    const childNodes = [];
                    for (const child of contextNode.children) {
                      if (child instanceof HTMLElement) {
                        childNodes.push(child);
                      }
                    }
                    collect(childNodes, selector);
                  }
                }
                startNodes2 = startNodes2.length > 0 ? startNodes2 : Array.from(document.documentElement.children).filter((c) => c instanceof HTMLElement);
                collect(startNodes2, {
                  role,
                  name
                });
                return returnedNodes;
              }),
              argumentsLocalValues: [
                // `name`
                { type: "string", value: locator.value.name || "" },
                // `role`
                { type: "string", value: locator.value.role || "" },
                // `bindings`.
                { handle: bindings.result.handle },
                // `maxNodeCount` with `0` means no limit.
                { type: "number", value: maxNodeCount ?? 0 },
                // `startNodes`
                ...startNodes
              ]
            };
          }
        }
      }
      async #locateNodesByLocator(realm, locator, startNodes, maxNodeCount, serializationOptions) {
        const locatorDelegate = await this.#getLocatorDelegate(realm, locator, maxNodeCount, startNodes);
        serializationOptions = {
          ...serializationOptions,
          // The returned object is an array of nodes, so no need in deeper JS serialization.
          maxObjectDepth: 1
        };
        const locatorResult = await realm.callFunction(locatorDelegate.functionDeclaration, false, { type: "undefined" }, locatorDelegate.argumentsLocalValues, "none", serializationOptions);
        if (locatorResult.type !== "success") {
          this.#logger?.(_a3.LOGGER_PREFIX, "Failed locateNodesByLocator", locatorResult);
          if (
            // CSS selector.
            locatorResult.exceptionDetails.text?.endsWith("is not a valid selector.") || // XPath selector.
            locatorResult.exceptionDetails.text?.endsWith("is not a valid XPath expression.")
          ) {
            throw new protocol_js_1.InvalidSelectorException(`Not valid selector ${typeof locator.value === "string" ? locator.value : JSON.stringify(locator.value)}`);
          }
          if (locatorResult.exceptionDetails.text === "Error: startNodes in css selector should be HTMLElement, Document or DocumentFragment") {
            throw new protocol_js_1.InvalidArgumentException("startNodes in css selector should be HTMLElement, Document or DocumentFragment");
          }
          throw new protocol_js_1.UnknownErrorException(`Unexpected error in selector script: ${locatorResult.exceptionDetails.text}`);
        }
        if (locatorResult.result.type !== "array") {
          throw new protocol_js_1.UnknownErrorException(`Unexpected selector script result type: ${locatorResult.result.type}`);
        }
        const nodes = locatorResult.result.value.map((value) => {
          if (value.type !== "node") {
            throw new protocol_js_1.UnknownErrorException(`Unexpected selector script result element: ${value.type}`);
          }
          return value;
        });
        return { nodes };
      }
    };
    exports.BrowsingContextImpl = BrowsingContextImpl;
    _a3 = BrowsingContextImpl;
    function serializeOrigin(origin) {
      if (["://", ""].includes(origin)) {
        origin = "null";
      }
      return origin;
    }
    function getImageFormatParameters(params) {
      const { quality, type } = params.format ?? {
        type: "image/png"
      };
      switch (type) {
        case "image/png": {
          return { format: "png" };
        }
        case "image/jpeg": {
          return {
            format: "jpeg",
            ...quality === void 0 ? {} : { quality: Math.round(quality * 100) }
          };
        }
        case "image/webp": {
          return {
            format: "webp",
            ...quality === void 0 ? {} : { quality: Math.round(quality * 100) }
          };
        }
      }
      throw new protocol_js_1.InvalidArgumentException(`Image format '${type}' is not a supported format`);
    }
    function deserializeDOMRect(result) {
      if (result.type !== "object" || result.value === void 0) {
        return;
      }
      const x = result.value.find(([key]) => {
        return key === "x";
      })?.[1];
      const y = result.value.find(([key]) => {
        return key === "y";
      })?.[1];
      const height = result.value.find(([key]) => {
        return key === "height";
      })?.[1];
      const width = result.value.find(([key]) => {
        return key === "width";
      })?.[1];
      if (x?.type !== "number" || y?.type !== "number" || height?.type !== "number" || width?.type !== "number") {
        return;
      }
      return {
        x: x.value,
        y: y.value,
        width: width.value,
        height: height.value
      };
    }
    function normalizeRect(box) {
      return {
        ...box.width < 0 ? {
          x: box.x + box.width,
          width: -box.width
        } : {
          x: box.x,
          width: box.width
        },
        ...box.height < 0 ? {
          y: box.y + box.height,
          height: -box.height
        } : {
          y: box.y,
          height: box.height
        }
      };
    }
    function getIntersectionRect(first2, second) {
      first2 = normalizeRect(first2);
      second = normalizeRect(second);
      const x = Math.max(first2.x, second.x);
      const y = Math.max(first2.y, second.y);
      return {
        x,
        y,
        width: Math.max(Math.min(first2.x + first2.width, second.x + second.width) - x, 0),
        height: Math.max(Math.min(first2.y + first2.height, second.y + second.height) - y, 0)
      };
    }
    function parseInteger(value) {
      value = value.trim();
      if (!/^[0-9]+$/.test(value)) {
        throw new protocol_js_1.InvalidArgumentException(`Invalid integer: ${value}`);
      }
      return parseInt(value);
    }
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/script/WorkerRealm.js
var require_WorkerRealm = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/script/WorkerRealm.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WorkerRealm = void 0;
    var Realm_js_1 = require_Realm();
    var WorkerRealm = class extends Realm_js_1.Realm {
      #realmType;
      #ownerRealms;
      constructor(cdpClient, eventManager, executionContextId, logger, origin, ownerRealms, realmId, realmStorage, realmType) {
        super(cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage);
        this.#ownerRealms = ownerRealms;
        this.#realmType = realmType;
        this.initialize();
      }
      get associatedBrowsingContexts() {
        return this.#ownerRealms.flatMap((realm) => realm.associatedBrowsingContexts);
      }
      get realmType() {
        return this.#realmType;
      }
      get source() {
        return {
          realm: this.realmId,
          // This is a hack to make Puppeteer able to track workers.
          // TODO: remove after Puppeteer tracks workers by owners and use the base version.
          context: this.associatedBrowsingContexts[0]?.id
        };
      }
      get realmInfo() {
        const owners = this.#ownerRealms.map((realm) => realm.realmId);
        const { realmType } = this;
        switch (realmType) {
          case "dedicated-worker": {
            const owner = owners[0];
            if (owner === void 0 || owners.length !== 1) {
              throw new Error("Dedicated worker must have exactly one owner");
            }
            return {
              ...this.baseInfo,
              type: realmType,
              owners: [owner]
            };
          }
          case "service-worker":
          case "shared-worker": {
            return {
              ...this.baseInfo,
              type: realmType
            };
          }
        }
      }
    };
    exports.WorkerRealm = WorkerRealm;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/log/logHelper.js
var require_logHelper = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/log/logHelper.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.logMessageFormatter = logMessageFormatter;
    exports.getRemoteValuesText = getRemoteValuesText;
    var assert_js_1 = require_assert();
    var specifiers = ["%s", "%d", "%i", "%f", "%o", "%O", "%c"];
    function isFormatSpecifier(str) {
      return specifiers.some((spec) => str.includes(spec));
    }
    function logMessageFormatter(args) {
      let output = "";
      const argFormat = args[0].value.toString();
      const argValues = args.slice(1, void 0);
      const tokens = argFormat.split(new RegExp(specifiers.map((spec) => `(${spec})`).join("|"), "g"));
      for (const token of tokens) {
        if (token === void 0 || token === "") {
          continue;
        }
        if (isFormatSpecifier(token)) {
          const arg = argValues.shift();
          (0, assert_js_1.assert)(arg, `Less value is provided: "${getRemoteValuesText(args, false)}"`);
          if (token === "%s") {
            output += stringFromArg(arg);
          } else if (token === "%d" || token === "%i") {
            if (arg.type === "bigint" || arg.type === "number" || arg.type === "string") {
              output += parseInt(arg.value.toString(), 10);
            } else {
              output += "NaN";
            }
          } else if (token === "%f") {
            if (arg.type === "bigint" || arg.type === "number" || arg.type === "string") {
              output += parseFloat(arg.value.toString());
            } else {
              output += "NaN";
            }
          } else {
            output += toJson(arg);
          }
        } else {
          output += token;
        }
      }
      if (argValues.length > 0) {
        throw new Error(`More value is provided: "${getRemoteValuesText(args, false)}"`);
      }
      return output;
    }
    function toJson(arg) {
      if (arg.type !== "array" && arg.type !== "bigint" && arg.type !== "date" && arg.type !== "number" && arg.type !== "object" && arg.type !== "string") {
        return stringFromArg(arg);
      }
      if (arg.type === "bigint") {
        return `${arg.value.toString()}n`;
      }
      if (arg.type === "number") {
        return arg.value.toString();
      }
      if (["date", "string"].includes(arg.type)) {
        return JSON.stringify(arg.value);
      }
      if (arg.type === "object") {
        return `{${arg.value.map((pair) => {
          return `${JSON.stringify(pair[0])}:${toJson(pair[1])}`;
        }).join(",")}}`;
      }
      if (arg.type === "array") {
        return `[${arg.value?.map((val) => toJson(val)).join(",") ?? ""}]`;
      }
      throw Error(`Invalid value type: ${arg}`);
    }
    function stringFromArg(arg) {
      if (!Object.hasOwn(arg, "value")) {
        return arg.type;
      }
      switch (arg.type) {
        case "string":
        case "number":
        case "boolean":
        case "bigint":
          return String(arg.value);
        case "regexp":
          return `/${arg.value.pattern}/${arg.value.flags ?? ""}`;
        case "date":
          return new Date(arg.value).toString();
        case "object":
          return `Object(${arg.value?.length ?? ""})`;
        case "array":
          return `Array(${arg.value?.length ?? ""})`;
        case "map":
          return `Map(${arg.value?.length})`;
        case "set":
          return `Set(${arg.value?.length})`;
        default:
          return arg.type;
      }
    }
    function getRemoteValuesText(args, formatText) {
      const arg = args[0];
      if (!arg) {
        return "";
      }
      if (arg.type === "string" && isFormatSpecifier(arg.value.toString()) && formatText) {
        return logMessageFormatter(args);
      }
      return args.map((arg2) => {
        return stringFromArg(arg2);
      }).join(" ");
    }
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/log/LogManager.js
var require_LogManager = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/log/LogManager.js"(exports) {
    "use strict";
    init_esm();
    var _a3;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LogManager = void 0;
    var protocol_js_1 = require_protocol();
    var log_js_1 = require_log();
    var logHelper_js_1 = require_logHelper();
    function getBidiStackTrace(cdpStackTrace) {
      const stackFrames = cdpStackTrace?.callFrames.map((callFrame) => {
        return {
          columnNumber: callFrame.columnNumber,
          functionName: callFrame.functionName,
          lineNumber: callFrame.lineNumber,
          url: callFrame.url
        };
      });
      return stackFrames ? { callFrames: stackFrames } : void 0;
    }
    function getLogLevel(consoleApiType) {
      if (["error", "assert"].includes(consoleApiType)) {
        return "error";
      }
      if (["debug", "trace"].includes(consoleApiType)) {
        return "debug";
      }
      if (["warn", "warning"].includes(consoleApiType)) {
        return "warn";
      }
      return "info";
    }
    function getLogMethod(consoleApiType) {
      switch (consoleApiType) {
        case "warning":
          return "warn";
        case "startGroup":
          return "group";
        case "startGroupCollapsed":
          return "groupCollapsed";
        case "endGroup":
          return "groupEnd";
      }
      return consoleApiType;
    }
    var LogManager = class {
      #eventManager;
      #realmStorage;
      #cdpTarget;
      #logger;
      constructor(cdpTarget, realmStorage, eventManager, logger) {
        this.#cdpTarget = cdpTarget;
        this.#realmStorage = realmStorage;
        this.#eventManager = eventManager;
        this.#logger = logger;
      }
      static create(cdpTarget, realmStorage, eventManager, logger) {
        const logManager = new _a3(cdpTarget, realmStorage, eventManager, logger);
        logManager.#initializeEntryAddedEventListener();
        return logManager;
      }
      /**
       * Heuristic serialization of CDP remote object. If possible, return the BiDi value
       * without deep serialization.
       */
      async #heuristicSerializeArg(arg, realm) {
        switch (arg.type) {
          // TODO: Implement regexp, array, object, map and set heuristics base on
          //  preview.
          case "undefined":
            return { type: "undefined" };
          case "boolean":
            return { type: "boolean", value: arg.value };
          case "string":
            return { type: "string", value: arg.value };
          case "number":
            return { type: "number", value: arg.unserializableValue ?? arg.value };
          case "bigint":
            if (arg.unserializableValue !== void 0 && arg.unserializableValue[arg.unserializableValue.length - 1] === "n") {
              return {
                type: arg.type,
                value: arg.unserializableValue.slice(0, -1)
              };
            }
            break;
          case "object":
            if (arg.subtype === "null") {
              return { type: "null" };
            }
            break;
          default:
            break;
        }
        return await realm.serializeCdpObject(
          arg,
          "none"
          /* Script.ResultOwnership.None */
        );
      }
      #initializeEntryAddedEventListener() {
        this.#cdpTarget.cdpClient.on("Runtime.consoleAPICalled", (params) => {
          const realm = this.#realmStorage.findRealm({
            cdpSessionId: this.#cdpTarget.cdpSessionId,
            executionContextId: params.executionContextId
          });
          if (realm === void 0) {
            this.#logger?.(log_js_1.LogType.cdp, params);
            return;
          }
          const argsPromise = Promise.all(params.args.map((arg) => this.#heuristicSerializeArg(arg, realm)));
          for (const browsingContext of realm.associatedBrowsingContexts) {
            this.#eventManager.registerPromiseEvent(argsPromise.then((args) => ({
              kind: "success",
              value: {
                type: "event",
                method: protocol_js_1.ChromiumBidi.Log.EventNames.LogEntryAdded,
                params: {
                  level: getLogLevel(params.type),
                  source: realm.source,
                  text: (0, logHelper_js_1.getRemoteValuesText)(args, true),
                  timestamp: Math.round(params.timestamp),
                  stackTrace: getBidiStackTrace(params.stackTrace),
                  type: "console",
                  method: getLogMethod(params.type),
                  args
                }
              }
            }), (error) => ({
              kind: "error",
              error
            })), browsingContext.id, protocol_js_1.ChromiumBidi.Log.EventNames.LogEntryAdded);
          }
        });
        this.#cdpTarget.cdpClient.on("Runtime.exceptionThrown", (params) => {
          const realm = this.#realmStorage.findRealm({
            cdpSessionId: this.#cdpTarget.cdpSessionId,
            executionContextId: params.exceptionDetails.executionContextId
          });
          if (realm === void 0) {
            this.#logger?.(log_js_1.LogType.cdp, params);
            return;
          }
          for (const browsingContext of realm.associatedBrowsingContexts) {
            this.#eventManager.registerPromiseEvent(_a3.#getExceptionText(params, realm).then((text) => ({
              kind: "success",
              value: {
                type: "event",
                method: protocol_js_1.ChromiumBidi.Log.EventNames.LogEntryAdded,
                params: {
                  level: "error",
                  source: realm.source,
                  text,
                  timestamp: Math.round(params.timestamp),
                  stackTrace: getBidiStackTrace(params.exceptionDetails.stackTrace),
                  type: "javascript"
                }
              }
            }), (error) => ({
              kind: "error",
              error
            })), browsingContext.id, protocol_js_1.ChromiumBidi.Log.EventNames.LogEntryAdded);
          }
        });
      }
      /**
       * Try the best to get the exception text.
       */
      static async #getExceptionText(params, realm) {
        if (!params.exceptionDetails.exception) {
          return params.exceptionDetails.text;
        }
        if (realm === void 0) {
          return JSON.stringify(params.exceptionDetails.exception);
        }
        return await realm.stringifyObject(params.exceptionDetails.exception);
      }
    };
    exports.LogManager = LogManager;
    _a3 = LogManager;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/cdp/CdpTarget.js
var require_CdpTarget = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/cdp/CdpTarget.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CdpTarget = void 0;
    var chromium_bidi_js_1 = require_chromium_bidi();
    var Deferred_js_1 = require_Deferred();
    var EventEmitter_js_1 = require_EventEmitter();
    var log_js_1 = require_log();
    var BrowsingContextImpl_js_1 = require_BrowsingContextImpl();
    var LogManager_js_1 = require_LogManager();
    var CdpTarget = class _CdpTarget extends EventEmitter_js_1.EventEmitter {
      #id;
      #cdpClient;
      #browserCdpClient;
      #parentCdpClient;
      #realmStorage;
      #eventManager;
      #preloadScriptStorage;
      #browsingContextStorage;
      #prerenderingDisabled;
      #networkStorage;
      #unblocked = new Deferred_js_1.Deferred();
      #unhandledPromptBehavior;
      #logger;
      #deviceAccessEnabled = false;
      #cacheDisableState = false;
      #fetchDomainStages = {
        request: false,
        response: false,
        auth: false
      };
      static create(targetId, cdpClient, browserCdpClient, parentCdpClient, realmStorage, eventManager, preloadScriptStorage, browsingContextStorage, networkStorage, prerenderingDisabled, unhandledPromptBehavior, logger) {
        const cdpTarget = new _CdpTarget(targetId, cdpClient, browserCdpClient, parentCdpClient, eventManager, realmStorage, preloadScriptStorage, browsingContextStorage, networkStorage, prerenderingDisabled, unhandledPromptBehavior, logger);
        LogManager_js_1.LogManager.create(cdpTarget, realmStorage, eventManager, logger);
        cdpTarget.#setEventListeners();
        void cdpTarget.#unblock();
        return cdpTarget;
      }
      constructor(targetId, cdpClient, browserCdpClient, parentCdpClient, eventManager, realmStorage, preloadScriptStorage, browsingContextStorage, networkStorage, prerenderingDisabled, unhandledPromptBehavior, logger) {
        super();
        this.#id = targetId;
        this.#cdpClient = cdpClient;
        this.#browserCdpClient = browserCdpClient;
        this.#parentCdpClient = parentCdpClient;
        this.#eventManager = eventManager;
        this.#realmStorage = realmStorage;
        this.#preloadScriptStorage = preloadScriptStorage;
        this.#networkStorage = networkStorage;
        this.#browsingContextStorage = browsingContextStorage;
        this.#prerenderingDisabled = prerenderingDisabled;
        this.#unhandledPromptBehavior = unhandledPromptBehavior;
        this.#logger = logger;
      }
      /** Returns a deferred that resolves when the target is unblocked. */
      get unblocked() {
        return this.#unblocked;
      }
      get id() {
        return this.#id;
      }
      get cdpClient() {
        return this.#cdpClient;
      }
      get parentCdpClient() {
        return this.#parentCdpClient;
      }
      get browserCdpClient() {
        return this.#browserCdpClient;
      }
      /** Needed for CDP escape path. */
      get cdpSessionId() {
        return this.#cdpClient.sessionId;
      }
      /**
       * Enables all the required CDP domains and unblocks the target.
       */
      async #unblock() {
        try {
          await Promise.all([
            this.#cdpClient.sendCommand("Page.enable"),
            // There can be some existing frames in the target, if reconnecting to an
            // existing browser instance, e.g. via Puppeteer. Need to restore the browsing
            // contexts for the frames to correctly handle further events, like
            // `Runtime.executionContextCreated`.
            // It's important to schedule this task together with enabling domains commands to
            // prepare the tree before the events (e.g. Runtime.executionContextCreated) start
            // coming.
            // https://github.com/GoogleChromeLabs/chromium-bidi/issues/2282
            this.#cdpClient.sendCommand("Page.getFrameTree").then((frameTree) => this.#restoreFrameTreeState(frameTree.frameTree)),
            this.#cdpClient.sendCommand("Runtime.enable"),
            this.#cdpClient.sendCommand("Page.setLifecycleEventsEnabled", {
              enabled: true
            }),
            this.#cdpClient.sendCommand("Page.setPrerenderingAllowed", {
              isAllowed: !this.#prerenderingDisabled
            }).catch(() => {
            }),
            // Enabling CDP Network domain is required for navigation detection:
            // https://github.com/GoogleChromeLabs/chromium-bidi/issues/2856.
            this.#cdpClient.sendCommand("Network.enable").then(() => this.toggleNetworkIfNeeded()),
            this.#cdpClient.sendCommand("Target.setAutoAttach", {
              autoAttach: true,
              waitForDebuggerOnStart: true,
              flatten: true
            }),
            this.#initAndEvaluatePreloadScripts(),
            this.#cdpClient.sendCommand("Runtime.runIfWaitingForDebugger"),
            // Resume tab execution as well if it was paused by the debugger.
            this.#parentCdpClient.sendCommand("Runtime.runIfWaitingForDebugger"),
            this.toggleDeviceAccessIfNeeded()
          ]);
        } catch (error) {
          this.#logger?.(log_js_1.LogType.debugError, "Failed to unblock target", error);
          if (!this.#cdpClient.isCloseError(error)) {
            this.#unblocked.resolve({
              kind: "error",
              error
            });
            return;
          }
        }
        this.#unblocked.resolve({
          kind: "success",
          value: void 0
        });
      }
      #restoreFrameTreeState(frameTree) {
        const frame = frameTree.frame;
        const maybeContext = this.#browsingContextStorage.findContext(frame.id);
        if (maybeContext !== void 0) {
          if (maybeContext.parentId === null && frame.parentId !== null && frame.parentId !== void 0) {
            maybeContext.parentId = frame.parentId;
          }
        }
        if (maybeContext === void 0 && frame.parentId !== void 0) {
          const parentBrowsingContext = this.#browsingContextStorage.getContext(frame.parentId);
          BrowsingContextImpl_js_1.BrowsingContextImpl.create(frame.id, frame.parentId, parentBrowsingContext.userContext, parentBrowsingContext.cdpTarget, this.#eventManager, this.#browsingContextStorage, this.#realmStorage, frame.url, void 0, this.#unhandledPromptBehavior, this.#logger);
        }
        frameTree.childFrames?.map((frameTree2) => this.#restoreFrameTreeState(frameTree2));
      }
      async toggleFetchIfNeeded() {
        const stages = this.#networkStorage.getInterceptionStages(this.topLevelId);
        if (this.#fetchDomainStages.request === stages.request && this.#fetchDomainStages.response === stages.response && this.#fetchDomainStages.auth === stages.auth) {
          return;
        }
        const patterns = [];
        this.#fetchDomainStages = stages;
        if (stages.request || stages.auth) {
          patterns.push({
            urlPattern: "*",
            requestStage: "Request"
          });
        }
        if (stages.response) {
          patterns.push({
            urlPattern: "*",
            requestStage: "Response"
          });
        }
        if (patterns.length) {
          await this.#cdpClient.sendCommand("Fetch.enable", {
            patterns,
            handleAuthRequests: stages.auth
          });
        } else {
          const blockedRequest = this.#networkStorage.getRequestsByTarget(this).filter((request) => request.interceptPhase);
          void Promise.allSettled(blockedRequest.map((request) => request.waitNextPhase)).then(async () => {
            const blockedRequest2 = this.#networkStorage.getRequestsByTarget(this).filter((request) => request.interceptPhase);
            if (blockedRequest2.length) {
              return await this.toggleFetchIfNeeded();
            }
            return await this.#cdpClient.sendCommand("Fetch.disable");
          }).catch((error) => {
            this.#logger?.(log_js_1.LogType.bidi, "Disable failed", error);
          });
        }
      }
      /**
       * Toggles CDP "Fetch" domain and enable/disable network cache.
       */
      async toggleNetworkIfNeeded() {
        try {
          await Promise.all([
            this.toggleSetCacheDisabled(),
            this.toggleFetchIfNeeded()
          ]);
        } catch (err) {
          this.#logger?.(log_js_1.LogType.debugError, err);
          if (!this.#isExpectedError(err)) {
            throw err;
          }
        }
      }
      async toggleSetCacheDisabled(disable) {
        const defaultCacheDisabled = this.#networkStorage.defaultCacheBehavior === "bypass";
        const cacheDisabled = disable ?? defaultCacheDisabled;
        if (this.#cacheDisableState === cacheDisabled) {
          return;
        }
        this.#cacheDisableState = cacheDisabled;
        try {
          await this.#cdpClient.sendCommand("Network.setCacheDisabled", {
            cacheDisabled
          });
        } catch (err) {
          this.#logger?.(log_js_1.LogType.debugError, err);
          this.#cacheDisableState = !cacheDisabled;
          if (!this.#isExpectedError(err)) {
            throw err;
          }
        }
      }
      async toggleDeviceAccessIfNeeded() {
        const enabled = this.isSubscribedTo(chromium_bidi_js_1.BiDiModule.Bluetooth);
        if (this.#deviceAccessEnabled === enabled) {
          return;
        }
        this.#deviceAccessEnabled = enabled;
        try {
          await this.#cdpClient.sendCommand(enabled ? "DeviceAccess.enable" : "DeviceAccess.disable");
        } catch (err) {
          this.#logger?.(log_js_1.LogType.debugError, err);
          this.#deviceAccessEnabled = !enabled;
          if (!this.#isExpectedError(err)) {
            throw err;
          }
        }
      }
      /**
       * Heuristic checking if the error is due to the session being closed. If so, ignore the
       * error.
       */
      #isExpectedError(err) {
        const error = err;
        return error.code === -32001 && error.message === "Session with given id not found." || this.#cdpClient.isCloseError(err);
      }
      #setEventListeners() {
        this.#cdpClient.on("Network.requestWillBeSent", (eventParams) => {
          if (eventParams.loaderId === eventParams.requestId) {
            this.emit("frameStartedNavigating", {
              loaderId: eventParams.loaderId,
              url: eventParams.request.url,
              frameId: eventParams.frameId
            });
          }
        });
        this.#cdpClient.on("*", (event, params) => {
          if (typeof event !== "string") {
            return;
          }
          this.#eventManager.registerEvent({
            type: "event",
            method: `goog:cdp.${event}`,
            params: {
              event,
              params,
              session: this.cdpSessionId
            }
          }, this.id);
          this.#eventManager.registerEvent({
            type: "event",
            method: `cdp.${event}`,
            params: {
              event,
              params,
              session: this.cdpSessionId
            }
          }, this.id);
        });
      }
      async #enableFetch(stages) {
        const patterns = [];
        if (stages.request || stages.auth) {
          patterns.push({
            urlPattern: "*",
            requestStage: "Request"
          });
        }
        if (stages.response) {
          patterns.push({
            urlPattern: "*",
            requestStage: "Response"
          });
        }
        if (patterns.length) {
          const oldStages = this.#fetchDomainStages;
          this.#fetchDomainStages = stages;
          try {
            await this.#cdpClient.sendCommand("Fetch.enable", {
              patterns,
              handleAuthRequests: stages.auth
            });
          } catch {
            this.#fetchDomainStages = oldStages;
          }
        }
      }
      async #disableFetch() {
        const blockedRequest = this.#networkStorage.getRequestsByTarget(this).filter((request) => request.interceptPhase);
        if (blockedRequest.length === 0) {
          this.#fetchDomainStages = {
            request: false,
            response: false,
            auth: false
          };
          await this.#cdpClient.sendCommand("Fetch.disable");
        }
      }
      async toggleNetwork() {
        const stages = this.#networkStorage.getInterceptionStages(this.topLevelId);
        const fetchEnable = Object.values(stages).some((value) => value);
        const fetchChanged = this.#fetchDomainStages.request !== stages.request || this.#fetchDomainStages.response !== stages.response || this.#fetchDomainStages.auth !== stages.auth;
        this.#logger?.(log_js_1.LogType.debugInfo, "Toggle Network", `Fetch (${fetchEnable}) ${fetchChanged}`);
        if (fetchEnable && fetchChanged) {
          await this.#enableFetch(stages);
        }
        if (!fetchEnable && fetchChanged) {
          await this.#disableFetch();
        }
      }
      /**
       * All the ProxyChannels from all the preload scripts of the given
       * BrowsingContext.
       */
      getChannels() {
        return this.#preloadScriptStorage.find().flatMap((script) => script.channels);
      }
      /** Loads all top-level preload scripts. */
      async #initAndEvaluatePreloadScripts() {
        await Promise.all(this.#preloadScriptStorage.find({
          // Needed for OOPIF
          targetId: this.topLevelId,
          global: true
        }).map((script) => {
          return script.initInTarget(this, true);
        }));
      }
      get topLevelId() {
        return this.#browsingContextStorage.findTopLevelContextId(this.id) ?? this.id;
      }
      isSubscribedTo(moduleOrEvent) {
        return this.#eventManager.subscriptionManager.isSubscribedTo(moduleOrEvent, this.topLevelId);
      }
    };
    exports.CdpTarget = CdpTarget;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/cdp/CdpTargetManager.js
var require_CdpTargetManager = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/cdp/CdpTargetManager.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CdpTargetManager = void 0;
    var log_js_1 = require_log();
    var BrowsingContextImpl_js_1 = require_BrowsingContextImpl();
    var WorkerRealm_js_1 = require_WorkerRealm();
    var CdpTarget_js_1 = require_CdpTarget();
    var cdpToBidiTargetTypes = {
      service_worker: "service-worker",
      shared_worker: "shared-worker",
      worker: "dedicated-worker"
    };
    var CdpTargetManager = class {
      #browserCdpClient;
      #cdpConnection;
      #targetKeysToBeIgnoredByAutoAttach = /* @__PURE__ */ new Set();
      #selfTargetId;
      #eventManager;
      #browsingContextStorage;
      #networkStorage;
      #bluetoothProcessor;
      #preloadScriptStorage;
      #realmStorage;
      #defaultUserContextId;
      #logger;
      #unhandledPromptBehavior;
      #prerenderingDisabled;
      constructor(cdpConnection, browserCdpClient, selfTargetId, eventManager, browsingContextStorage, realmStorage, networkStorage, bluetoothProcessor, preloadScriptStorage, defaultUserContextId, prerenderingDisabled, unhandledPromptBehavior, logger) {
        this.#cdpConnection = cdpConnection;
        this.#browserCdpClient = browserCdpClient;
        this.#targetKeysToBeIgnoredByAutoAttach.add(selfTargetId);
        this.#selfTargetId = selfTargetId;
        this.#eventManager = eventManager;
        this.#browsingContextStorage = browsingContextStorage;
        this.#preloadScriptStorage = preloadScriptStorage;
        this.#networkStorage = networkStorage;
        this.#bluetoothProcessor = bluetoothProcessor;
        this.#realmStorage = realmStorage;
        this.#defaultUserContextId = defaultUserContextId;
        this.#prerenderingDisabled = prerenderingDisabled;
        this.#unhandledPromptBehavior = unhandledPromptBehavior;
        this.#logger = logger;
        this.#setEventListeners(browserCdpClient);
      }
      /**
       * This method is called for each CDP session, since this class is responsible
       * for creating and destroying all targets and browsing contexts.
       */
      #setEventListeners(cdpClient) {
        cdpClient.on("Target.attachedToTarget", (params) => {
          this.#handleAttachedToTargetEvent(params, cdpClient);
        });
        cdpClient.on("Target.detachedFromTarget", this.#handleDetachedFromTargetEvent.bind(this));
        cdpClient.on("Target.targetInfoChanged", this.#handleTargetInfoChangedEvent.bind(this));
        cdpClient.on("Inspector.targetCrashed", () => {
          this.#handleTargetCrashedEvent(cdpClient);
        });
        cdpClient.on("Page.frameAttached", this.#handleFrameAttachedEvent.bind(this));
        cdpClient.on("Page.frameDetached", this.#handleFrameDetachedEvent.bind(this));
        cdpClient.on("Page.frameSubtreeWillBeDetached", this.#handleFrameSubtreeWillBeDetached.bind(this));
      }
      #handleFrameAttachedEvent(params) {
        const parentBrowsingContext = this.#browsingContextStorage.findContext(params.parentFrameId);
        if (parentBrowsingContext !== void 0) {
          BrowsingContextImpl_js_1.BrowsingContextImpl.create(
            params.frameId,
            params.parentFrameId,
            parentBrowsingContext.userContext,
            parentBrowsingContext.cdpTarget,
            this.#eventManager,
            this.#browsingContextStorage,
            this.#realmStorage,
            // At this point, we don't know the URL of the frame yet, so it will be updated
            // later.
            "about:blank",
            void 0,
            this.#unhandledPromptBehavior,
            this.#logger
          );
        }
      }
      #handleFrameDetachedEvent(params) {
        if (params.reason === "swap") {
          return;
        }
        this.#browsingContextStorage.findContext(params.frameId)?.dispose(true);
      }
      #handleFrameSubtreeWillBeDetached(params) {
        this.#browsingContextStorage.findContext(params.frameId)?.dispose(true);
      }
      #handleAttachedToTargetEvent(params, parentSessionCdpClient) {
        const { sessionId, targetInfo } = params;
        const targetCdpClient = this.#cdpConnection.getCdpClient(sessionId);
        const detach = async () => {
          await targetCdpClient.sendCommand("Runtime.runIfWaitingForDebugger").then(() => parentSessionCdpClient.sendCommand("Target.detachFromTarget", params)).catch((error) => this.#logger?.(log_js_1.LogType.debugError, error));
        };
        if (this.#selfTargetId === targetInfo.targetId) {
          void detach();
          return;
        }
        const targetKey = targetInfo.type === "service_worker" ? `${parentSessionCdpClient.sessionId}_${targetInfo.targetId}` : targetInfo.targetId;
        if (this.#targetKeysToBeIgnoredByAutoAttach.has(targetKey)) {
          return;
        }
        this.#targetKeysToBeIgnoredByAutoAttach.add(targetKey);
        switch (targetInfo.type) {
          case "tab":
            this.#setEventListeners(targetCdpClient);
            void (async () => {
              await targetCdpClient.sendCommand("Target.setAutoAttach", {
                autoAttach: true,
                waitForDebuggerOnStart: true,
                flatten: true
              });
            })();
            return;
          case "page":
          case "iframe": {
            const cdpTarget = this.#createCdpTarget(targetCdpClient, parentSessionCdpClient, targetInfo);
            const maybeContext = this.#browsingContextStorage.findContext(targetInfo.targetId);
            if (maybeContext && targetInfo.type === "iframe") {
              maybeContext.updateCdpTarget(cdpTarget);
            } else {
              const parentId = this.#findFrameParentId(targetInfo, parentSessionCdpClient.sessionId);
              const userContext = targetInfo.browserContextId && targetInfo.browserContextId !== this.#defaultUserContextId ? targetInfo.browserContextId : "default";
              BrowsingContextImpl_js_1.BrowsingContextImpl.create(
                targetInfo.targetId,
                parentId,
                userContext,
                cdpTarget,
                this.#eventManager,
                this.#browsingContextStorage,
                this.#realmStorage,
                // Hack: when a new target created, CDP emits targetInfoChanged with an empty
                // url, and navigates it to about:blank later. When the event is emitted for
                // an existing target (reconnect), the url is already known, and navigation
                // events will not be emitted anymore. Replacing empty url with `about:blank`
                // allows to handle both cases in the same way.
                // "7.3.2.1 Creating browsing contexts".
                // https://html.spec.whatwg.org/multipage/document-sequences.html#creating-browsing-contexts
                // TODO: check who to deal with non-null creator and its `creatorOrigin`.
                targetInfo.url === "" ? "about:blank" : targetInfo.url,
                targetInfo.openerFrameId ?? targetInfo.openerId,
                this.#unhandledPromptBehavior,
                this.#logger
              );
            }
            return;
          }
          case "service_worker":
          case "worker": {
            const realm = this.#realmStorage.findRealm({
              cdpSessionId: parentSessionCdpClient.sessionId
            });
            if (!realm) {
              void detach();
              return;
            }
            const cdpTarget = this.#createCdpTarget(targetCdpClient, parentSessionCdpClient, targetInfo);
            this.#handleWorkerTarget(cdpToBidiTargetTypes[targetInfo.type], cdpTarget, realm);
            return;
          }
          // In CDP, we only emit shared workers on the browser and not the set of
          // frames that use the shared worker. If we change this in the future to
          // behave like service workers (emits on both browser and frame targets),
          // we can remove this block and merge service workers with the above one.
          case "shared_worker": {
            const cdpTarget = this.#createCdpTarget(targetCdpClient, parentSessionCdpClient, targetInfo);
            this.#handleWorkerTarget(cdpToBidiTargetTypes[targetInfo.type], cdpTarget);
            return;
          }
        }
        void detach();
      }
      /** Try to find the parent browsing context ID for the given attached target. */
      #findFrameParentId(targetInfo, parentSessionId) {
        if (targetInfo.type !== "iframe") {
          return null;
        }
        const parentId = targetInfo.openerFrameId ?? targetInfo.openerId;
        if (parentId !== void 0) {
          return parentId;
        }
        if (parentSessionId !== void 0) {
          return this.#browsingContextStorage.findContextBySession(parentSessionId)?.id ?? null;
        }
        return null;
      }
      #createCdpTarget(targetCdpClient, parentCdpClient, targetInfo) {
        this.#setEventListeners(targetCdpClient);
        const target = CdpTarget_js_1.CdpTarget.create(targetInfo.targetId, targetCdpClient, this.#browserCdpClient, parentCdpClient, this.#realmStorage, this.#eventManager, this.#preloadScriptStorage, this.#browsingContextStorage, this.#networkStorage, this.#prerenderingDisabled, this.#unhandledPromptBehavior, this.#logger);
        this.#networkStorage.onCdpTargetCreated(target);
        this.#bluetoothProcessor.onCdpTargetCreated(target);
        return target;
      }
      #workers = /* @__PURE__ */ new Map();
      #handleWorkerTarget(realmType, cdpTarget, ownerRealm) {
        cdpTarget.cdpClient.on("Runtime.executionContextCreated", (params) => {
          const { uniqueId, id, origin } = params.context;
          const workerRealm = new WorkerRealm_js_1.WorkerRealm(cdpTarget.cdpClient, this.#eventManager, id, this.#logger, (0, BrowsingContextImpl_js_1.serializeOrigin)(origin), ownerRealm ? [ownerRealm] : [], uniqueId, this.#realmStorage, realmType);
          this.#workers.set(cdpTarget.cdpSessionId, workerRealm);
        });
      }
      #handleDetachedFromTargetEvent({ sessionId, targetId }) {
        if (targetId) {
          this.#preloadScriptStorage.find({ targetId }).map((preloadScript) => {
            preloadScript.dispose(targetId);
          });
        }
        const context = this.#browsingContextStorage.findContextBySession(sessionId);
        if (context) {
          context.dispose(true);
          return;
        }
        const worker = this.#workers.get(sessionId);
        if (worker) {
          this.#realmStorage.deleteRealms({
            cdpSessionId: worker.cdpClient.sessionId
          });
        }
      }
      #handleTargetInfoChangedEvent(params) {
        const context = this.#browsingContextStorage.findContext(params.targetInfo.targetId);
        if (context) {
          context.onTargetInfoChanged(params);
        }
      }
      #handleTargetCrashedEvent(cdpClient) {
        const realms = this.#realmStorage.findRealms({
          cdpSessionId: cdpClient.sessionId
        });
        for (const realm of realms) {
          realm.dispose();
        }
      }
    };
    exports.CdpTargetManager = CdpTargetManager;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/context/BrowsingContextStorage.js
var require_BrowsingContextStorage = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/context/BrowsingContextStorage.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BrowsingContextStorage = void 0;
    var protocol_js_1 = require_protocol();
    var EventEmitter_js_1 = require_EventEmitter();
    var BrowsingContextStorage = class {
      /** Map from context ID to context implementation. */
      #contexts = /* @__PURE__ */ new Map();
      /** Event emitter for browsing context storage eventsis not expected to be exposed to
       * the outside world. */
      #eventEmitter = new EventEmitter_js_1.EventEmitter();
      /** Gets all top-level contexts, i.e. those with no parent. */
      getTopLevelContexts() {
        return this.getAllContexts().filter((context) => context.isTopLevelContext());
      }
      /** Gets all contexts. */
      getAllContexts() {
        return Array.from(this.#contexts.values());
      }
      /** Deletes the context with the given ID. */
      deleteContextById(id) {
        this.#contexts.delete(id);
      }
      /** Deletes the given context. */
      deleteContext(context) {
        this.#contexts.delete(context.id);
      }
      /** Tracks the given context. */
      addContext(context) {
        this.#contexts.set(context.id, context);
        this.#eventEmitter.emit("added", {
          browsingContext: context
        });
      }
      /**
       * Waits for a context with the given ID to be added and returns it.
       */
      waitForContext(browsingContextId) {
        return new Promise((resolve) => {
          const listener = (event) => {
            if (event.browsingContext.id === browsingContextId) {
              this.#eventEmitter.off("added", listener);
              resolve(event.browsingContext);
            }
          };
          this.#eventEmitter.on("added", listener);
        });
      }
      /** Returns true whether there is an existing context with the given ID. */
      hasContext(id) {
        return this.#contexts.has(id);
      }
      /** Gets the context with the given ID, if any. */
      findContext(id) {
        return this.#contexts.get(id);
      }
      /** Returns the top-level context ID of the given context, if any. */
      findTopLevelContextId(id) {
        if (id === null) {
          return null;
        }
        const maybeContext = this.findContext(id);
        const parentId = maybeContext?.parentId ?? null;
        if (parentId === null) {
          return id;
        }
        return this.findTopLevelContextId(parentId);
      }
      findContextBySession(sessionId) {
        for (const context of this.#contexts.values()) {
          if (context.cdpTarget.cdpSessionId === sessionId) {
            return context;
          }
        }
        return;
      }
      /** Gets the context with the given ID, if any, otherwise throws. */
      getContext(id) {
        const result = this.findContext(id);
        if (result === void 0) {
          throw new protocol_js_1.NoSuchFrameException(`Context ${id} not found`);
        }
        return result;
      }
      verifyTopLevelContextsList(contexts) {
        const foundContexts = /* @__PURE__ */ new Set();
        if (!contexts) {
          return foundContexts;
        }
        for (const contextId of contexts) {
          const context = this.getContext(contextId);
          if (context.isTopLevelContext()) {
            foundContexts.add(context);
          } else {
            throw new protocol_js_1.InvalidArgumentException(`Non top-level context '${contextId}' given.`);
          }
        }
        return foundContexts;
      }
    };
    exports.BrowsingContextStorage = BrowsingContextStorage;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/network/NetworkRequest.js
var require_NetworkRequest = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/network/NetworkRequest.js"(exports) {
    "use strict";
    init_esm();
    var _a3;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NetworkRequest = void 0;
    var protocol_js_1 = require_protocol();
    var assert_js_1 = require_assert();
    var Deferred_js_1 = require_Deferred();
    var log_js_1 = require_log();
    var NetworkUtils_js_1 = require_NetworkUtils();
    var REALM_REGEX = /(?<=realm=").*(?=")/;
    var NetworkRequest = class {
      static unknownParameter = "UNKNOWN";
      /**
       * Each network request has an associated request id, which is a string
       * uniquely identifying that request.
       *
       * The identifier for a request resulting from a redirect matches that of the
       * request that initiated it.
       */
      #id;
      #fetchId;
      /**
       * Indicates the network intercept phase, if the request is currently blocked.
       * Undefined necessarily implies that the request is not blocked.
       */
      #interceptPhase;
      #servedFromCache = false;
      #redirectCount;
      #request = {};
      #requestOverrides;
      #responseOverrides;
      #response = {};
      #eventManager;
      #networkStorage;
      #cdpTarget;
      #logger;
      #emittedEvents = {
        [protocol_js_1.ChromiumBidi.Network.EventNames.AuthRequired]: false,
        [protocol_js_1.ChromiumBidi.Network.EventNames.BeforeRequestSent]: false,
        [protocol_js_1.ChromiumBidi.Network.EventNames.FetchError]: false,
        [protocol_js_1.ChromiumBidi.Network.EventNames.ResponseCompleted]: false,
        [protocol_js_1.ChromiumBidi.Network.EventNames.ResponseStarted]: false
      };
      waitNextPhase = new Deferred_js_1.Deferred();
      constructor(id, eventManager, networkStorage, cdpTarget, redirectCount = 0, logger) {
        this.#id = id;
        this.#eventManager = eventManager;
        this.#networkStorage = networkStorage;
        this.#cdpTarget = cdpTarget;
        this.#redirectCount = redirectCount;
        this.#logger = logger;
      }
      get id() {
        return this.#id;
      }
      get fetchId() {
        return this.#fetchId;
      }
      /**
       * When blocked returns the phase for it
       */
      get interceptPhase() {
        return this.#interceptPhase;
      }
      get url() {
        const fragment = this.#request.info?.request.urlFragment ?? this.#request.paused?.request.urlFragment ?? "";
        const url = this.#response.info?.url ?? this.#response.paused?.request.url ?? this.#requestOverrides?.url ?? this.#request.auth?.request.url ?? this.#request.info?.request.url ?? this.#request.paused?.request.url ?? _a3.unknownParameter;
        return `${url}${fragment}`;
      }
      get redirectCount() {
        return this.#redirectCount;
      }
      get cdpTarget() {
        return this.#cdpTarget;
      }
      get cdpClient() {
        return this.#cdpTarget.cdpClient;
      }
      isRedirecting() {
        return Boolean(this.#request.info);
      }
      #isDataUrl() {
        return this.url.startsWith("data:");
      }
      get #method() {
        return this.#requestOverrides?.method ?? this.#request.info?.request.method ?? this.#request.paused?.request.method ?? this.#request.auth?.request.method ?? this.#response.paused?.request.method;
      }
      get #navigationId() {
        if (!this.#request.info || !this.#request.info.loaderId || // When we navigate all CDP network events have `loaderId`
        // CDP's `loaderId` and `requestId` match when
        // that request triggered the loading
        this.#request.info.loaderId !== this.#request.info.requestId) {
          return null;
        }
        return this.#networkStorage.getNavigationId(this.#context ?? void 0);
      }
      get #cookies() {
        let cookies = [];
        if (this.#request.extraInfo) {
          cookies = this.#request.extraInfo.associatedCookies.filter(({ blockedReasons }) => {
            return !Array.isArray(blockedReasons) || blockedReasons.length === 0;
          }).map(({ cookie }) => (0, NetworkUtils_js_1.cdpToBiDiCookie)(cookie));
        }
        return cookies;
      }
      get #bodySize() {
        let bodySize = 0;
        if (typeof this.#requestOverrides?.bodySize === "number") {
          bodySize = this.#requestOverrides.bodySize;
        } else {
          bodySize = (0, NetworkUtils_js_1.bidiBodySizeFromCdpPostDataEntries)(this.#request.info?.request.postDataEntries ?? []);
        }
        return bodySize;
      }
      get #context() {
        return this.#response.paused?.frameId ?? this.#request.info?.frameId ?? this.#request.paused?.frameId ?? this.#request.auth?.frameId ?? null;
      }
      /** Returns the HTTP status code associated with this request if any. */
      get #statusCode() {
        return this.#responseOverrides?.statusCode ?? this.#response.paused?.responseStatusCode ?? this.#response.extraInfo?.statusCode ?? this.#response.info?.status;
      }
      get #requestHeaders() {
        let headers = [];
        if (this.#requestOverrides?.headers) {
          headers = this.#requestOverrides.headers;
        } else {
          headers = [
            ...(0, NetworkUtils_js_1.bidiNetworkHeadersFromCdpNetworkHeaders)(this.#request.info?.request.headers),
            ...(0, NetworkUtils_js_1.bidiNetworkHeadersFromCdpNetworkHeaders)(this.#request.extraInfo?.headers)
          ];
        }
        return headers;
      }
      get #authChallenges() {
        if (!this.#response.info) {
          return;
        }
        if (!(this.#statusCode === 401 || this.#statusCode === 407)) {
          return void 0;
        }
        const headerName = this.#statusCode === 401 ? "WWW-Authenticate" : "Proxy-Authenticate";
        const authChallenges = [];
        for (const [header, value] of Object.entries(this.#response.info.headers)) {
          if (header.localeCompare(headerName, void 0, { sensitivity: "base" }) === 0) {
            authChallenges.push({
              scheme: value.split(" ").at(0) ?? "",
              realm: value.match(REALM_REGEX)?.at(0) ?? ""
            });
          }
        }
        return authChallenges;
      }
      get #timings() {
        return {
          // TODO: Verify this is correct
          timeOrigin: (0, NetworkUtils_js_1.getTiming)(this.#response.info?.timing?.requestTime),
          requestTime: (0, NetworkUtils_js_1.getTiming)(this.#response.info?.timing?.requestTime),
          redirectStart: 0,
          redirectEnd: 0,
          // TODO: Verify this is correct
          // https://source.chromium.org/chromium/chromium/src/+/main:net/base/load_timing_info.h;l=145
          fetchStart: (0, NetworkUtils_js_1.getTiming)(this.#response.info?.timing?.requestTime),
          dnsStart: (0, NetworkUtils_js_1.getTiming)(this.#response.info?.timing?.dnsStart),
          dnsEnd: (0, NetworkUtils_js_1.getTiming)(this.#response.info?.timing?.dnsEnd),
          connectStart: (0, NetworkUtils_js_1.getTiming)(this.#response.info?.timing?.connectStart),
          connectEnd: (0, NetworkUtils_js_1.getTiming)(this.#response.info?.timing?.connectEnd),
          tlsStart: (0, NetworkUtils_js_1.getTiming)(this.#response.info?.timing?.sslStart),
          requestStart: (0, NetworkUtils_js_1.getTiming)(this.#response.info?.timing?.sendStart),
          // https://source.chromium.org/chromium/chromium/src/+/main:net/base/load_timing_info.h;l=196
          responseStart: (0, NetworkUtils_js_1.getTiming)(this.#response.info?.timing?.receiveHeadersStart),
          responseEnd: (0, NetworkUtils_js_1.getTiming)(this.#response.info?.timing?.receiveHeadersEnd)
        };
      }
      #phaseChanged() {
        this.waitNextPhase.resolve();
        this.waitNextPhase = new Deferred_js_1.Deferred();
      }
      #interceptsInPhase(phase) {
        if (!this.#cdpTarget.isSubscribedTo(`network.${phase}`)) {
          return /* @__PURE__ */ new Set();
        }
        return this.#networkStorage.getInterceptsForPhase(this, phase);
      }
      #isBlockedInPhase(phase) {
        return this.#interceptsInPhase(phase).size > 0;
      }
      handleRedirect(event) {
        this.#response.hasExtraInfo = false;
        this.#response.info = event.redirectResponse;
        this.#emitEventsIfReady({
          wasRedirected: true
        });
      }
      #emitEventsIfReady(options = {}) {
        const requestExtraInfoCompleted = (
          // Flush redirects
          options.wasRedirected || options.hasFailed || this.#isDataUrl() || Boolean(this.#request.extraInfo) || // Requests from cache don't have extra info
          this.#servedFromCache || // Sometimes there is no extra info and the response
          // is the only place we can find out
          Boolean(this.#response.info && !this.#response.hasExtraInfo)
        );
        const noInterceptionExpected = (
          // We can't intercept data urls from CDP
          this.#isDataUrl() || // Cached requests never hit the network
          this.#servedFromCache
        );
        const requestInterceptionExpected = !noInterceptionExpected && this.#isBlockedInPhase(
          "beforeRequestSent"
          /* Network.InterceptPhase.BeforeRequestSent */
        );
        const requestInterceptionCompleted = !requestInterceptionExpected || requestInterceptionExpected && Boolean(this.#request.paused);
        if (Boolean(this.#request.info) && (requestInterceptionExpected ? requestInterceptionCompleted : requestExtraInfoCompleted)) {
          this.#emitEvent(this.#getBeforeRequestEvent.bind(this));
        }
        const responseExtraInfoCompleted = Boolean(this.#response.extraInfo) || // Response from cache don't have extra info
        this.#servedFromCache || // Don't expect extra info if the flag is false
        Boolean(this.#response.info && !this.#response.hasExtraInfo);
        const responseInterceptionExpected = !noInterceptionExpected && this.#isBlockedInPhase(
          "responseStarted"
          /* Network.InterceptPhase.ResponseStarted */
        );
        if (this.#response.info || responseInterceptionExpected && Boolean(this.#response.paused)) {
          this.#emitEvent(this.#getResponseStartedEvent.bind(this));
        }
        const responseInterceptionCompleted = !responseInterceptionExpected || responseInterceptionExpected && Boolean(this.#response.paused);
        if (Boolean(this.#response.info) && responseExtraInfoCompleted && responseInterceptionCompleted) {
          this.#emitEvent(this.#getResponseReceivedEvent.bind(this));
          this.#networkStorage.deleteRequest(this.id);
        }
      }
      onRequestWillBeSentEvent(event) {
        this.#request.info = event;
        this.#emitEventsIfReady();
      }
      onRequestWillBeSentExtraInfoEvent(event) {
        this.#request.extraInfo = event;
        this.#emitEventsIfReady();
      }
      onResponseReceivedExtraInfoEvent(event) {
        if (event.statusCode >= 300 && event.statusCode <= 399 && this.#request.info && event.headers["location"] === this.#request.info.request.url) {
          return;
        }
        this.#response.extraInfo = event;
        this.#emitEventsIfReady();
      }
      onResponseReceivedEvent(event) {
        this.#response.hasExtraInfo = event.hasExtraInfo;
        this.#response.info = event.response;
        this.#emitEventsIfReady();
      }
      onServedFromCache() {
        this.#servedFromCache = true;
        this.#emitEventsIfReady();
      }
      onLoadingFailedEvent(event) {
        this.#emitEventsIfReady({
          hasFailed: true
        });
        this.#emitEvent(() => {
          return {
            method: protocol_js_1.ChromiumBidi.Network.EventNames.FetchError,
            params: {
              ...this.#getBaseEventParams(),
              errorText: event.errorText
            }
          };
        });
      }
      /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-failRequest */
      async failRequest(errorReason) {
        (0, assert_js_1.assert)(this.#fetchId, "Network Interception not set-up.");
        await this.cdpClient.sendCommand("Fetch.failRequest", {
          requestId: this.#fetchId,
          errorReason
        });
        this.#interceptPhase = void 0;
      }
      onRequestPaused(event) {
        this.#fetchId = event.requestId;
        if (event.responseStatusCode || event.responseErrorReason) {
          this.#response.paused = event;
          if (this.#isBlockedInPhase(
            "responseStarted"
            /* Network.InterceptPhase.ResponseStarted */
          ) && // CDP may emit multiple events for a single request
          !this.#emittedEvents[protocol_js_1.ChromiumBidi.Network.EventNames.ResponseStarted] && // Continue all response that have not enabled Network domain
          this.#fetchId !== this.id) {
            this.#interceptPhase = "responseStarted";
          } else {
            void this.#continueResponse();
          }
        } else {
          this.#request.paused = event;
          if (this.#isBlockedInPhase(
            "beforeRequestSent"
            /* Network.InterceptPhase.BeforeRequestSent */
          ) && // CDP may emit multiple events for a single request
          !this.#emittedEvents[protocol_js_1.ChromiumBidi.Network.EventNames.BeforeRequestSent] && // Continue all requests that have not enabled Network domain
          this.#fetchId !== this.id) {
            this.#interceptPhase = "beforeRequestSent";
          } else {
            void this.#continueRequest();
          }
        }
        this.#emitEventsIfReady();
      }
      onAuthRequired(event) {
        this.#fetchId = event.requestId;
        this.#request.auth = event;
        if (this.#isBlockedInPhase(
          "authRequired"
          /* Network.InterceptPhase.AuthRequired */
        ) && // Continue all auth requests that have not enabled Network domain
        this.#fetchId !== this.id) {
          this.#interceptPhase = "authRequired";
        } else {
          void this.#continueWithAuth({
            response: "Default"
          });
        }
        this.#emitEvent(() => {
          return {
            method: protocol_js_1.ChromiumBidi.Network.EventNames.AuthRequired,
            params: {
              ...this.#getBaseEventParams(
                "authRequired"
                /* Network.InterceptPhase.AuthRequired */
              ),
              response: this.#getResponseEventParams()
            }
          };
        });
      }
      /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueRequest */
      async continueRequest(overrides = {}) {
        const overrideHeaders = this.#getOverrideHeader(overrides.headers, overrides.cookies);
        const headers = (0, NetworkUtils_js_1.cdpFetchHeadersFromBidiNetworkHeaders)(overrideHeaders);
        const postData = getCdpBodyFromBiDiBytesValue(overrides.body);
        await this.#continueRequest({
          url: overrides.url,
          method: overrides.method,
          headers,
          postData
        });
        this.#requestOverrides = {
          url: overrides.url,
          method: overrides.method,
          headers: overrides.headers,
          cookies: overrides.cookies,
          bodySize: getSizeFromBiDiBytesValue(overrides.body)
        };
      }
      async #continueRequest(overrides = {}) {
        (0, assert_js_1.assert)(this.#fetchId, "Network Interception not set-up.");
        await this.cdpClient.sendCommand("Fetch.continueRequest", {
          requestId: this.#fetchId,
          url: overrides.url,
          method: overrides.method,
          headers: overrides.headers,
          postData: overrides.postData
        });
        this.#interceptPhase = void 0;
      }
      /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueResponse */
      async continueResponse(overrides = {}) {
        if (this.interceptPhase === "authRequired") {
          if (overrides.credentials) {
            await Promise.all([
              this.waitNextPhase,
              await this.#continueWithAuth({
                response: "ProvideCredentials",
                username: overrides.credentials.username,
                password: overrides.credentials.password
              })
            ]);
          } else {
            return await this.#continueWithAuth({
              response: "ProvideCredentials"
            });
          }
        }
        if (this.#interceptPhase === "responseStarted") {
          const overrideHeaders = this.#getOverrideHeader(overrides.headers, overrides.cookies);
          const responseHeaders = (0, NetworkUtils_js_1.cdpFetchHeadersFromBidiNetworkHeaders)(overrideHeaders);
          await this.#continueResponse({
            responseCode: overrides.statusCode ?? this.#response.paused?.responseStatusCode,
            responsePhrase: overrides.reasonPhrase ?? this.#response.paused?.responseStatusText,
            responseHeaders: responseHeaders ?? this.#response.paused?.responseHeaders
          });
          this.#responseOverrides = {
            statusCode: overrides.statusCode,
            headers: overrideHeaders
          };
        }
      }
      async #continueResponse({ responseCode, responsePhrase, responseHeaders } = {}) {
        (0, assert_js_1.assert)(this.#fetchId, "Network Interception not set-up.");
        await this.cdpClient.sendCommand("Fetch.continueResponse", {
          requestId: this.#fetchId,
          responseCode,
          responsePhrase,
          responseHeaders
        });
        this.#interceptPhase = void 0;
      }
      /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueWithAuth */
      async continueWithAuth(authChallenge) {
        let username;
        let password;
        if (authChallenge.action === "provideCredentials") {
          const { credentials } = authChallenge;
          username = credentials.username;
          password = credentials.password;
        }
        const response = (0, NetworkUtils_js_1.cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction)(authChallenge.action);
        await this.#continueWithAuth({
          response,
          username,
          password
        });
      }
      /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-provideResponse */
      async provideResponse(overrides) {
        (0, assert_js_1.assert)(this.#fetchId, "Network Interception not set-up.");
        if (this.interceptPhase === "authRequired") {
          return await this.#continueWithAuth({
            response: "ProvideCredentials"
          });
        }
        if (!overrides.body && !overrides.headers) {
          return await this.#continueRequest();
        }
        const overrideHeaders = this.#getOverrideHeader(overrides.headers, overrides.cookies);
        const responseHeaders = (0, NetworkUtils_js_1.cdpFetchHeadersFromBidiNetworkHeaders)(overrideHeaders);
        const responseCode = overrides.statusCode ?? this.#statusCode ?? 200;
        await this.cdpClient.sendCommand("Fetch.fulfillRequest", {
          requestId: this.#fetchId,
          responseCode,
          responsePhrase: overrides.reasonPhrase,
          responseHeaders,
          body: getCdpBodyFromBiDiBytesValue(overrides.body)
        });
        this.#interceptPhase = void 0;
      }
      dispose() {
        this.waitNextPhase.reject(new Error("waitNextPhase disposed"));
      }
      async #continueWithAuth(authChallengeResponse) {
        (0, assert_js_1.assert)(this.#fetchId, "Network Interception not set-up.");
        await this.cdpClient.sendCommand("Fetch.continueWithAuth", {
          requestId: this.#fetchId,
          authChallengeResponse
        });
        this.#interceptPhase = void 0;
      }
      #emitEvent(getEvent) {
        let event;
        try {
          event = getEvent();
        } catch (error) {
          this.#logger?.(log_js_1.LogType.debugError, error);
          return;
        }
        if (this.#isIgnoredEvent() || this.#emittedEvents[event.method] && // Special case this event can be emitted multiple times
        event.method !== protocol_js_1.ChromiumBidi.Network.EventNames.AuthRequired) {
          return;
        }
        this.#phaseChanged();
        this.#emittedEvents[event.method] = true;
        this.#eventManager.registerEvent(Object.assign(event, {
          type: "event"
        }), this.#context);
      }
      #getBaseEventParams(phase) {
        const interceptProps = {
          isBlocked: false
        };
        if (phase) {
          const blockedBy = this.#interceptsInPhase(phase);
          interceptProps.isBlocked = blockedBy.size > 0;
          if (interceptProps.isBlocked) {
            interceptProps.intercepts = [...blockedBy];
          }
        }
        return {
          context: this.#context,
          navigation: this.#navigationId,
          redirectCount: this.#redirectCount,
          request: this.#getRequestData(),
          // Timestamp should be in milliseconds, while CDP provides it in seconds.
          timestamp: Math.round((0, NetworkUtils_js_1.getTiming)(this.#request.info?.wallTime) * 1e3),
          // Contains isBlocked and intercepts
          ...interceptProps
        };
      }
      #getResponseEventParams() {
        if (this.#response.info?.fromDiskCache) {
          this.#response.extraInfo = void 0;
        }
        const headers = [
          ...(0, NetworkUtils_js_1.bidiNetworkHeadersFromCdpNetworkHeaders)(this.#response.info?.headers),
          ...(0, NetworkUtils_js_1.bidiNetworkHeadersFromCdpNetworkHeaders)(this.#response.extraInfo?.headers)
          // TODO: Verify how to dedupe these
          // ...bidiNetworkHeadersFromCdpNetworkHeadersEntries(
          //   this.#response.paused?.responseHeaders
          // ),
        ];
        const authChallenges = this.#authChallenges;
        const response = {
          url: this.url,
          protocol: this.#response.info?.protocol ?? "",
          status: this.#statusCode ?? -1,
          // TODO: Throw an exception or use some other status code?
          statusText: this.#response.info?.statusText || this.#response.paused?.responseStatusText || "",
          fromCache: this.#response.info?.fromDiskCache || this.#response.info?.fromPrefetchCache || this.#servedFromCache,
          headers: this.#responseOverrides?.headers ?? headers,
          mimeType: this.#response.info?.mimeType || "",
          bytesReceived: this.#response.info?.encodedDataLength || 0,
          headersSize: (0, NetworkUtils_js_1.computeHeadersSize)(headers),
          // TODO: consider removing from spec.
          bodySize: 0,
          content: {
            // TODO: consider removing from spec.
            size: 0
          },
          ...authChallenges ? { authChallenges } : {}
        };
        return {
          ...response,
          "goog:securityDetails": this.#response.info?.securityDetails
        };
      }
      #getRequestData() {
        const headers = this.#requestHeaders;
        const request = {
          request: this.#id,
          url: this.url,
          method: this.#method ?? _a3.unknownParameter,
          headers,
          cookies: this.#cookies,
          headersSize: (0, NetworkUtils_js_1.computeHeadersSize)(headers),
          bodySize: this.#bodySize,
          // TODO: populate
          destination: "",
          // TODO: populate
          initiatorType: null,
          timings: this.#timings
        };
        return {
          ...request,
          "goog:postData": this.#request.info?.request?.postData,
          "goog:hasPostData": this.#request.info?.request?.hasPostData,
          "goog:resourceType": this.#request.info?.type
        };
      }
      #getBeforeRequestEvent() {
        (0, assert_js_1.assert)(this.#request.info, "RequestWillBeSentEvent is not set");
        return {
          method: protocol_js_1.ChromiumBidi.Network.EventNames.BeforeRequestSent,
          params: {
            ...this.#getBaseEventParams(
              "beforeRequestSent"
              /* Network.InterceptPhase.BeforeRequestSent */
            ),
            initiator: {
              type: _a3.#getInitiatorType(this.#request.info.initiator.type),
              columnNumber: this.#request.info.initiator.columnNumber,
              lineNumber: this.#request.info.initiator.lineNumber,
              stackTrace: this.#request.info.initiator.stack,
              request: this.#request.info.initiator.requestId
            }
          }
        };
      }
      #getResponseStartedEvent() {
        return {
          method: protocol_js_1.ChromiumBidi.Network.EventNames.ResponseStarted,
          params: {
            ...this.#getBaseEventParams(
              "responseStarted"
              /* Network.InterceptPhase.ResponseStarted */
            ),
            response: this.#getResponseEventParams()
          }
        };
      }
      #getResponseReceivedEvent() {
        return {
          method: protocol_js_1.ChromiumBidi.Network.EventNames.ResponseCompleted,
          params: {
            ...this.#getBaseEventParams(),
            response: this.#getResponseEventParams()
          }
        };
      }
      #isIgnoredEvent() {
        const faviconUrl = "/favicon.ico";
        return this.#request.paused?.request.url.endsWith(faviconUrl) ?? this.#request.info?.request.url.endsWith(faviconUrl) ?? false;
      }
      #getOverrideHeader(headers, cookies) {
        if (!headers && !cookies) {
          return void 0;
        }
        let overrideHeaders = headers;
        const cookieHeader = (0, NetworkUtils_js_1.networkHeaderFromCookieHeaders)(cookies);
        if (cookieHeader && !overrideHeaders) {
          overrideHeaders = this.#requestHeaders;
        }
        if (cookieHeader && overrideHeaders) {
          overrideHeaders.filter((header) => header.name.localeCompare("cookie", void 0, {
            sensitivity: "base"
          }) !== 0);
          overrideHeaders.push(cookieHeader);
        }
        return overrideHeaders;
      }
      static #getInitiatorType(initiatorType) {
        switch (initiatorType) {
          case "parser":
          case "script":
          case "preflight":
            return initiatorType;
          default:
            return "other";
        }
      }
    };
    exports.NetworkRequest = NetworkRequest;
    _a3 = NetworkRequest;
    function getCdpBodyFromBiDiBytesValue(body) {
      let parsedBody;
      if (body?.type === "string") {
        parsedBody = btoa(body.value);
      } else if (body?.type === "base64") {
        parsedBody = body.value;
      }
      return parsedBody;
    }
    function getSizeFromBiDiBytesValue(body) {
      if (body?.type === "string") {
        return body.value.length;
      } else if (body?.type === "base64") {
        return atob(body.value).length;
      }
      return 0;
    }
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/network/NetworkStorage.js
var require_NetworkStorage = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/network/NetworkStorage.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NetworkStorage = void 0;
    var protocol_js_1 = require_protocol();
    var uuid_js_1 = require_uuid();
    var NetworkRequest_js_1 = require_NetworkRequest();
    var NetworkUtils_js_1 = require_NetworkUtils();
    var NetworkStorage = class {
      #browsingContextStorage;
      #eventManager;
      #logger;
      /**
       * A map from network request ID to Network Request objects.
       * Needed as long as information about requests comes from different events.
       */
      #requests = /* @__PURE__ */ new Map();
      /** A map from intercept ID to track active network intercepts. */
      #intercepts = /* @__PURE__ */ new Map();
      #defaultCacheBehavior = "default";
      constructor(eventManager, browsingContextStorage, browserClient, logger) {
        this.#browsingContextStorage = browsingContextStorage;
        this.#eventManager = eventManager;
        browserClient.on("Target.detachedFromTarget", ({ sessionId }) => {
          this.disposeRequestMap(sessionId);
        });
        this.#logger = logger;
      }
      /**
       * Gets the network request with the given ID, if any.
       * Otherwise, creates a new network request with the given ID and cdp target.
       */
      #getOrCreateNetworkRequest(id, cdpTarget, redirectCount) {
        let request = this.getRequestById(id);
        if (request) {
          return request;
        }
        request = new NetworkRequest_js_1.NetworkRequest(id, this.#eventManager, this, cdpTarget, redirectCount, this.#logger);
        this.addRequest(request);
        return request;
      }
      onCdpTargetCreated(cdpTarget) {
        const cdpClient = cdpTarget.cdpClient;
        const listeners = [
          [
            "Network.requestWillBeSent",
            (params) => {
              const request = this.getRequestById(params.requestId);
              if (request && request.isRedirecting()) {
                request.handleRedirect(params);
                this.deleteRequest(params.requestId);
                this.#getOrCreateNetworkRequest(params.requestId, cdpTarget, request.redirectCount + 1).onRequestWillBeSentEvent(params);
              } else {
                this.#getOrCreateNetworkRequest(params.requestId, cdpTarget).onRequestWillBeSentEvent(params);
              }
            }
          ],
          [
            "Network.requestWillBeSentExtraInfo",
            (params) => {
              this.#getOrCreateNetworkRequest(params.requestId, cdpTarget).onRequestWillBeSentExtraInfoEvent(params);
            }
          ],
          [
            "Network.responseReceived",
            (params) => {
              this.#getOrCreateNetworkRequest(params.requestId, cdpTarget).onResponseReceivedEvent(params);
            }
          ],
          [
            "Network.responseReceivedExtraInfo",
            (params) => {
              this.#getOrCreateNetworkRequest(params.requestId, cdpTarget).onResponseReceivedExtraInfoEvent(params);
            }
          ],
          [
            "Network.requestServedFromCache",
            (params) => {
              this.#getOrCreateNetworkRequest(params.requestId, cdpTarget).onServedFromCache();
            }
          ],
          [
            "Network.loadingFailed",
            (params) => {
              this.#getOrCreateNetworkRequest(params.requestId, cdpTarget).onLoadingFailedEvent(params);
            }
          ],
          [
            "Fetch.requestPaused",
            (event) => {
              this.#getOrCreateNetworkRequest(
                // CDP quirk if the Network domain is not present this is undefined
                event.networkId ?? event.requestId,
                cdpTarget
              ).onRequestPaused(event);
            }
          ],
          [
            "Fetch.authRequired",
            (event) => {
              let request = this.getRequestByFetchId(event.requestId);
              if (!request) {
                request = this.#getOrCreateNetworkRequest(event.requestId, cdpTarget);
              }
              request.onAuthRequired(event);
            }
          ]
        ];
        for (const [event, listener] of listeners) {
          cdpClient.on(event, listener);
        }
      }
      getInterceptionStages(browsingContextId) {
        const stages = {
          request: false,
          response: false,
          auth: false
        };
        for (const intercept of this.#intercepts.values()) {
          if (intercept.contexts && !intercept.contexts.includes(browsingContextId)) {
            continue;
          }
          stages.request ||= intercept.phases.includes(
            "beforeRequestSent"
            /* Network.InterceptPhase.BeforeRequestSent */
          );
          stages.response ||= intercept.phases.includes(
            "responseStarted"
            /* Network.InterceptPhase.ResponseStarted */
          );
          stages.auth ||= intercept.phases.includes(
            "authRequired"
            /* Network.InterceptPhase.AuthRequired */
          );
        }
        return stages;
      }
      getInterceptsForPhase(request, phase) {
        if (request.url === NetworkRequest_js_1.NetworkRequest.unknownParameter) {
          return /* @__PURE__ */ new Set();
        }
        const intercepts = /* @__PURE__ */ new Set();
        for (const [interceptId, intercept] of this.#intercepts.entries()) {
          if (!intercept.phases.includes(phase) || intercept.contexts && !intercept.contexts.includes(request.cdpTarget.topLevelId)) {
            continue;
          }
          if (intercept.urlPatterns.length === 0) {
            intercepts.add(interceptId);
            continue;
          }
          for (const pattern of intercept.urlPatterns) {
            if ((0, NetworkUtils_js_1.matchUrlPattern)(pattern, request.url)) {
              intercepts.add(interceptId);
              break;
            }
          }
        }
        return intercepts;
      }
      disposeRequestMap(sessionId) {
        for (const request of this.#requests.values()) {
          if (request.cdpClient.sessionId === sessionId) {
            this.#requests.delete(request.id);
            request.dispose();
          }
        }
      }
      /**
       * Adds the given entry to the intercept map.
       * URL patterns are assumed to be parsed.
       *
       * @return The intercept ID.
       */
      addIntercept(value) {
        const interceptId = (0, uuid_js_1.uuidv4)();
        this.#intercepts.set(interceptId, value);
        return interceptId;
      }
      /**
       * Removes the given intercept from the intercept map.
       * Throws NoSuchInterceptException if the intercept does not exist.
       */
      removeIntercept(intercept) {
        if (!this.#intercepts.has(intercept)) {
          throw new protocol_js_1.NoSuchInterceptException(`Intercept '${intercept}' does not exist.`);
        }
        this.#intercepts.delete(intercept);
      }
      getRequestsByTarget(target) {
        const requests2 = [];
        for (const request of this.#requests.values()) {
          if (request.cdpTarget === target) {
            requests2.push(request);
          }
        }
        return requests2;
      }
      getRequestById(id) {
        return this.#requests.get(id);
      }
      getRequestByFetchId(fetchId) {
        for (const request of this.#requests.values()) {
          if (request.fetchId === fetchId) {
            return request;
          }
        }
        return;
      }
      addRequest(request) {
        this.#requests.set(request.id, request);
      }
      deleteRequest(id) {
        this.#requests.delete(id);
      }
      /**
       * Gets the virtual navigation ID for the given navigable ID.
       */
      getNavigationId(contextId) {
        if (contextId === void 0) {
          return null;
        }
        return this.#browsingContextStorage.findContext(contextId)?.navigationId ?? null;
      }
      set defaultCacheBehavior(behavior) {
        this.#defaultCacheBehavior = behavior;
      }
      get defaultCacheBehavior() {
        return this.#defaultCacheBehavior;
      }
    };
    exports.NetworkStorage = NetworkStorage;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/script/PreloadScriptStorage.js
var require_PreloadScriptStorage = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/script/PreloadScriptStorage.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PreloadScriptStorage = void 0;
    var PreloadScriptStorage = class {
      /** Tracks all BiDi preload scripts.  */
      #scripts = /* @__PURE__ */ new Set();
      /**
       * Finds all entries that match the given filter (OR logic).
       */
      find(filter2) {
        if (!filter2) {
          return [...this.#scripts];
        }
        return [...this.#scripts].filter((script) => {
          if (filter2.id !== void 0 && filter2.id === script.id) {
            return true;
          }
          if (filter2.targetId !== void 0 && script.targetIds.has(filter2.targetId)) {
            return true;
          }
          if (filter2.global !== void 0 && // Global scripts have no contexts
          (filter2.global && script.contexts === void 0 || // Non global scripts always have contexts
          !filter2.global && script.contexts !== void 0)) {
            return true;
          }
          return false;
        });
      }
      add(preloadScript) {
        this.#scripts.add(preloadScript);
      }
      /** Deletes all BiDi preload script entries that match the given filter. */
      remove(filter2) {
        for (const preloadScript of this.find(filter2)) {
          this.#scripts.delete(preloadScript);
        }
      }
    };
    exports.PreloadScriptStorage = PreloadScriptStorage;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/script/RealmStorage.js
var require_RealmStorage = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/script/RealmStorage.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RealmStorage = void 0;
    var protocol_js_1 = require_protocol();
    var WindowRealm_js_1 = require_WindowRealm();
    var RealmStorage = class {
      /** Tracks handles and their realms sent to the client. */
      #knownHandlesToRealmMap = /* @__PURE__ */ new Map();
      /** Map from realm ID to Realm. */
      #realmMap = /* @__PURE__ */ new Map();
      get knownHandlesToRealmMap() {
        return this.#knownHandlesToRealmMap;
      }
      addRealm(realm) {
        this.#realmMap.set(realm.realmId, realm);
      }
      /** Finds all realms that match the given filter. */
      findRealms(filter2) {
        return Array.from(this.#realmMap.values()).filter((realm) => {
          if (filter2.realmId !== void 0 && filter2.realmId !== realm.realmId) {
            return false;
          }
          if (filter2.browsingContextId !== void 0 && !realm.associatedBrowsingContexts.map((browsingContext) => browsingContext.id).includes(filter2.browsingContextId)) {
            return false;
          }
          if (filter2.sandbox !== void 0 && (!(realm instanceof WindowRealm_js_1.WindowRealm) || filter2.sandbox !== realm.sandbox)) {
            return false;
          }
          if (filter2.executionContextId !== void 0 && filter2.executionContextId !== realm.executionContextId) {
            return false;
          }
          if (filter2.origin !== void 0 && filter2.origin !== realm.origin) {
            return false;
          }
          if (filter2.type !== void 0 && filter2.type !== realm.realmType) {
            return false;
          }
          if (filter2.cdpSessionId !== void 0 && filter2.cdpSessionId !== realm.cdpClient.sessionId) {
            return false;
          }
          return true;
        });
      }
      findRealm(filter2) {
        const maybeRealms = this.findRealms(filter2);
        if (maybeRealms.length !== 1) {
          return void 0;
        }
        return maybeRealms[0];
      }
      /** Gets the only realm that matches the given filter, if any, otherwise throws. */
      getRealm(filter2) {
        const maybeRealm = this.findRealm(filter2);
        if (maybeRealm === void 0) {
          throw new protocol_js_1.NoSuchFrameException(`Realm ${JSON.stringify(filter2)} not found`);
        }
        return maybeRealm;
      }
      /** Deletes all realms that match the given filter. */
      deleteRealms(filter2) {
        this.findRealms(filter2).map((realm) => {
          realm.dispose();
          this.#realmMap.delete(realm.realmId);
          Array.from(this.knownHandlesToRealmMap.entries()).filter(([, r]) => r === realm.realmId).map(([handle]) => this.knownHandlesToRealmMap.delete(handle));
        });
      }
    };
    exports.RealmStorage = RealmStorage;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/Buffer.js
var require_Buffer = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/Buffer.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Buffer = void 0;
    var Buffer2 = class {
      #capacity;
      #entries = [];
      #onItemRemoved;
      /**
       * @param capacity The buffer capacity.
       * @param onItemRemoved Delegate called for each removed element.
       */
      constructor(capacity, onItemRemoved) {
        this.#capacity = capacity;
        this.#onItemRemoved = onItemRemoved;
      }
      get() {
        return this.#entries;
      }
      add(value) {
        this.#entries.push(value);
        while (this.#entries.length > this.#capacity) {
          const item = this.#entries.shift();
          if (item !== void 0) {
            this.#onItemRemoved?.(item);
          }
        }
      }
    };
    exports.Buffer = Buffer2;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/DefaultMap.js
var require_DefaultMap = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/DefaultMap.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultMap = void 0;
    var DefaultMap = class extends Map {
      /** The default value to return whenever a key is not present in the map. */
      #getDefaultValue;
      constructor(getDefaultValue, entries) {
        super(entries);
        this.#getDefaultValue = getDefaultValue;
      }
      get(key) {
        if (!this.has(key)) {
          this.set(key, this.#getDefaultValue(key));
        }
        return super.get(key);
      }
    };
    exports.DefaultMap = DefaultMap;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/DistinctValues.js
var require_DistinctValues = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/DistinctValues.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.distinctValues = distinctValues;
    exports.deterministicJSONStringify = deterministicJSONStringify;
    function distinctValues(values) {
      const map2 = /* @__PURE__ */ new Map();
      for (const value of values) {
        map2.set(deterministicJSONStringify(value), value);
      }
      return Array.from(map2.values());
    }
    function deterministicJSONStringify(obj) {
      return JSON.stringify(normalizeObject(obj));
    }
    function normalizeObject(obj) {
      if (obj === void 0 || obj === null || Array.isArray(obj) || typeof obj !== "object") {
        return obj;
      }
      const newObj = {};
      for (const key of Object.keys(obj).sort()) {
        const value = obj[key];
        newObj[key] = normalizeObject(value);
      }
      return newObj;
    }
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/IdWrapper.js
var require_IdWrapper = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/utils/IdWrapper.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IdWrapper = void 0;
    var IdWrapper = class _IdWrapper {
      static #counter = 0;
      #id;
      constructor() {
        this.#id = ++_IdWrapper.#counter;
      }
      get id() {
        return this.#id;
      }
    };
    exports.IdWrapper = IdWrapper;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/session/events.js
var require_events = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/session/events.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isCdpEvent = isCdpEvent2;
    exports.isDeprecatedCdpEvent = isDeprecatedCdpEvent;
    exports.assertSupportedEvent = assertSupportedEvent;
    var protocol_js_1 = require_protocol();
    function isCdpEvent2(name) {
      return name.split(".").at(0)?.startsWith(protocol_js_1.ChromiumBidi.BiDiModule.Cdp) ?? false;
    }
    function isDeprecatedCdpEvent(name) {
      return name.split(".").at(0)?.startsWith(protocol_js_1.ChromiumBidi.BiDiModule.DeprecatedCdp) ?? false;
    }
    function assertSupportedEvent(name) {
      if (!protocol_js_1.ChromiumBidi.EVENT_NAMES.has(name) && !isCdpEvent2(name) && !isDeprecatedCdpEvent(name)) {
        throw new protocol_js_1.InvalidArgumentException(`Unknown event: ${name}`);
      }
    }
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/session/SubscriptionManager.js
var require_SubscriptionManager = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/session/SubscriptionManager.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubscriptionManager = void 0;
    exports.cartesianProduct = cartesianProduct;
    exports.unrollEvents = unrollEvents;
    var protocol_js_1 = require_protocol();
    var events_js_1 = require_events();
    function cartesianProduct(...a) {
      return a.reduce((a2, b) => a2.flatMap((d) => b.map((e) => [d, e].flat())));
    }
    function unrollEvents(events) {
      const allEvents = /* @__PURE__ */ new Set();
      function addEvents(events2) {
        for (const event of events2) {
          allEvents.add(event);
        }
      }
      for (const event of events) {
        switch (event) {
          case protocol_js_1.ChromiumBidi.BiDiModule.Bluetooth:
            addEvents(Object.values(protocol_js_1.ChromiumBidi.Bluetooth.EventNames));
            break;
          case protocol_js_1.ChromiumBidi.BiDiModule.BrowsingContext:
            addEvents(Object.values(protocol_js_1.ChromiumBidi.BrowsingContext.EventNames));
            break;
          case protocol_js_1.ChromiumBidi.BiDiModule.Log:
            addEvents(Object.values(protocol_js_1.ChromiumBidi.Log.EventNames));
            break;
          case protocol_js_1.ChromiumBidi.BiDiModule.Network:
            addEvents(Object.values(protocol_js_1.ChromiumBidi.Network.EventNames));
            break;
          case protocol_js_1.ChromiumBidi.BiDiModule.Script:
            addEvents(Object.values(protocol_js_1.ChromiumBidi.Script.EventNames));
            break;
          default:
            allEvents.add(event);
        }
      }
      return [...allEvents.values()];
    }
    var SubscriptionManager = class {
      #subscriptionPriority = 0;
      // BrowsingContext `null` means the event has subscription across all the
      // browsing contexts.
      // Channel `null` means no `channel` should be added.
      #channelToContextToEventMap = /* @__PURE__ */ new Map();
      #browsingContextStorage;
      constructor(browsingContextStorage) {
        this.#browsingContextStorage = browsingContextStorage;
      }
      getChannelsSubscribedToEvent(eventMethod, contextId) {
        const prioritiesAndChannels = Array.from(this.#channelToContextToEventMap.keys()).map((channel) => ({
          priority: this.#getEventSubscriptionPriorityForChannel(eventMethod, contextId, channel),
          channel
        })).filter(({ priority }) => priority !== null);
        return prioritiesAndChannels.sort((a, b) => a.priority - b.priority).map(({ channel }) => channel);
      }
      #getEventSubscriptionPriorityForChannel(eventMethod, contextId, channel) {
        const contextToEventMap = this.#channelToContextToEventMap.get(channel);
        if (contextToEventMap === void 0) {
          return null;
        }
        const maybeTopLevelContextId = this.#browsingContextStorage.findTopLevelContextId(contextId);
        const relevantContexts = [.../* @__PURE__ */ new Set([null, maybeTopLevelContextId])];
        const priorities = relevantContexts.map((context) => {
          const priority = contextToEventMap.get(context)?.get(eventMethod);
          if ((0, events_js_1.isCdpEvent)(eventMethod)) {
            const cdpPriority = contextToEventMap.get(context)?.get(protocol_js_1.ChromiumBidi.BiDiModule.Cdp);
            return priority && cdpPriority ? Math.min(priority, cdpPriority) : (
              // At this point we know that we have subscribed
              // to only one of the two
              priority ?? cdpPriority
            );
          }
          if ((0, events_js_1.isDeprecatedCdpEvent)(eventMethod)) {
            const cdpPriority = contextToEventMap.get(context)?.get(protocol_js_1.ChromiumBidi.BiDiModule.DeprecatedCdp);
            return priority && cdpPriority ? Math.min(priority, cdpPriority) : (
              // At this point we know that we have subscribed
              // to only one of the two
              priority ?? cdpPriority
            );
          }
          return priority;
        }).filter((p) => p !== void 0);
        if (priorities.length === 0) {
          return null;
        }
        return Math.min(...priorities);
      }
      /**
       * @param module BiDi+ module
       * @param contextId `null` == globally subscribed
       *
       * @returns
       */
      isSubscribedTo(moduleOrEvent, contextId = null) {
        const topLevelContext = this.#browsingContextStorage.findTopLevelContextId(contextId);
        for (const browserContextToEventMap of this.#channelToContextToEventMap.values()) {
          for (const [id, eventMap] of browserContextToEventMap.entries()) {
            if (topLevelContext !== id && id !== null) {
              continue;
            }
            for (const event of eventMap.keys()) {
              if (
                // Event explicitly subscribed
                event === moduleOrEvent || // Event subscribed via module
                event === moduleOrEvent.split(".").at(0) || // Event explicitly subscribed compared to module
                event.split(".").at(0) === moduleOrEvent
              ) {
                return true;
              }
            }
          }
        }
        return false;
      }
      /**
       * Subscribes to event in the given context and channel.
       * @param {EventNames} event
       * @param {BrowsingContext.BrowsingContext | null} contextId
       * @param {BidiPlusChannel} channel
       * @return {SubscriptionItem[]} List of
       * subscriptions. If the event is a whole module, it will return all the specific
       * events. If the contextId is null, it will return all the top-level contexts which were
       * not subscribed before the command.
       */
      subscribe(event, contextId, channel) {
        contextId = this.#browsingContextStorage.findTopLevelContextId(contextId);
        switch (event) {
          case protocol_js_1.ChromiumBidi.BiDiModule.BrowsingContext:
            return Object.values(protocol_js_1.ChromiumBidi.BrowsingContext.EventNames).map((specificEvent) => this.subscribe(specificEvent, contextId, channel)).flat();
          case protocol_js_1.ChromiumBidi.BiDiModule.Log:
            return Object.values(protocol_js_1.ChromiumBidi.Log.EventNames).map((specificEvent) => this.subscribe(specificEvent, contextId, channel)).flat();
          case protocol_js_1.ChromiumBidi.BiDiModule.Network:
            return Object.values(protocol_js_1.ChromiumBidi.Network.EventNames).map((specificEvent) => this.subscribe(specificEvent, contextId, channel)).flat();
          case protocol_js_1.ChromiumBidi.BiDiModule.Script:
            return Object.values(protocol_js_1.ChromiumBidi.Script.EventNames).map((specificEvent) => this.subscribe(specificEvent, contextId, channel)).flat();
          case protocol_js_1.ChromiumBidi.BiDiModule.Bluetooth:
            return Object.values(protocol_js_1.ChromiumBidi.Bluetooth.EventNames).map((specificEvent) => this.subscribe(specificEvent, contextId, channel)).flat();
          default:
        }
        if (!this.#channelToContextToEventMap.has(channel)) {
          this.#channelToContextToEventMap.set(channel, /* @__PURE__ */ new Map());
        }
        const contextToEventMap = this.#channelToContextToEventMap.get(channel);
        if (!contextToEventMap.has(contextId)) {
          contextToEventMap.set(contextId, /* @__PURE__ */ new Map());
        }
        const eventMap = contextToEventMap.get(contextId);
        const affectedContextIds = (contextId === null ? this.#browsingContextStorage.getTopLevelContexts().map((c) => c.id) : [contextId]).filter((contextId2) => !this.isSubscribedTo(event, contextId2));
        if (!eventMap.has(event)) {
          eventMap.set(event, this.#subscriptionPriority++);
        }
        return affectedContextIds.map((contextId2) => ({
          event,
          contextId: contextId2
        }));
      }
      /**
       * Unsubscribes atomically from all events in the given contexts and channel.
       */
      unsubscribeAll(events, contextIds, channel) {
        for (const contextId of contextIds) {
          if (contextId !== null) {
            this.#browsingContextStorage.getContext(contextId);
          }
        }
        const eventContextPairs = cartesianProduct(unrollEvents(events), contextIds);
        eventContextPairs.map(([event, contextId]) => this.#checkUnsubscribe(event, contextId, channel)).forEach((unsubscribe) => unsubscribe());
      }
      /**
       * Unsubscribes from the event in the given context and channel.
       * Syntactic sugar for "unsubscribeAll".
       */
      unsubscribe(eventName, contextId, channel) {
        this.unsubscribeAll([eventName], [contextId], channel);
      }
      #checkUnsubscribe(event, contextId, channel) {
        contextId = this.#browsingContextStorage.findTopLevelContextId(contextId);
        if (!this.#channelToContextToEventMap.has(channel)) {
          throw new protocol_js_1.InvalidArgumentException(`Cannot unsubscribe from ${event}, ${contextId === null ? "null" : contextId}. No subscription found.`);
        }
        const contextToEventMap = this.#channelToContextToEventMap.get(channel);
        if (!contextToEventMap.has(contextId)) {
          throw new protocol_js_1.InvalidArgumentException(`Cannot unsubscribe from ${event}, ${contextId === null ? "null" : contextId}. No subscription found.`);
        }
        const eventMap = contextToEventMap.get(contextId);
        if (!eventMap.has(event)) {
          throw new protocol_js_1.InvalidArgumentException(`Cannot unsubscribe from ${event}, ${contextId === null ? "null" : contextId}. No subscription found.`);
        }
        return () => {
          eventMap.delete(event);
          if (eventMap.size === 0) {
            contextToEventMap.delete(event);
          }
          if (contextToEventMap.size === 0) {
            this.#channelToContextToEventMap.delete(channel);
          }
        };
      }
    };
    exports.SubscriptionManager = SubscriptionManager;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/session/EventManager.js
var require_EventManager = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/modules/session/EventManager.js"(exports) {
    "use strict";
    init_esm();
    var _a3;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EventManager = void 0;
    var protocol_js_1 = require_protocol();
    var Buffer_js_1 = require_Buffer();
    var DefaultMap_js_1 = require_DefaultMap();
    var DistinctValues_js_1 = require_DistinctValues();
    var EventEmitter_js_1 = require_EventEmitter();
    var IdWrapper_js_1 = require_IdWrapper();
    var OutgoingMessage_js_1 = require_OutgoingMessage();
    var events_js_1 = require_events();
    var SubscriptionManager_js_1 = require_SubscriptionManager();
    var EventWrapper = class {
      #idWrapper = new IdWrapper_js_1.IdWrapper();
      #contextId;
      #event;
      constructor(event, contextId) {
        this.#event = event;
        this.#contextId = contextId;
      }
      get id() {
        return this.#idWrapper.id;
      }
      get contextId() {
        return this.#contextId;
      }
      get event() {
        return this.#event;
      }
    };
    var eventBufferLength = /* @__PURE__ */ new Map([[protocol_js_1.ChromiumBidi.Log.EventNames.LogEntryAdded, 100]]);
    var EventManager = class extends EventEmitter_js_1.EventEmitter {
      /**
       * Maps event name to a set of contexts where this event already happened.
       * Needed for getting buffered events from all the contexts in case of
       * subscripting to all contexts.
       */
      #eventToContextsMap = new DefaultMap_js_1.DefaultMap(() => /* @__PURE__ */ new Set());
      /**
       * Maps `eventName` + `browsingContext` to buffer. Used to get buffered events
       * during subscription. Channel-agnostic.
       */
      #eventBuffers = /* @__PURE__ */ new Map();
      /**
       * Maps `eventName` + `browsingContext` to  Map of channel to last id
       * Used to avoid sending duplicated events when user
       * subscribes -> unsubscribes -> subscribes.
       */
      #lastMessageSent = /* @__PURE__ */ new Map();
      #subscriptionManager;
      #browsingContextStorage;
      /**
       * Map of event name to hooks to be called when client is subscribed to the event.
       */
      #subscribeHooks;
      constructor(browsingContextStorage) {
        super();
        this.#browsingContextStorage = browsingContextStorage;
        this.#subscriptionManager = new SubscriptionManager_js_1.SubscriptionManager(browsingContextStorage);
        this.#subscribeHooks = new DefaultMap_js_1.DefaultMap(() => []);
      }
      get subscriptionManager() {
        return this.#subscriptionManager;
      }
      /**
       * Returns consistent key to be used to access value maps.
       */
      static #getMapKey(eventName, browsingContext) {
        return JSON.stringify({ eventName, browsingContext });
      }
      addSubscribeHook(event, hook) {
        this.#subscribeHooks.get(event).push(hook);
      }
      registerEvent(event, contextId) {
        this.registerPromiseEvent(Promise.resolve({
          kind: "success",
          value: event
        }), contextId, event.method);
      }
      registerPromiseEvent(event, contextId, eventName) {
        const eventWrapper = new EventWrapper(event, contextId);
        const sortedChannels = this.#subscriptionManager.getChannelsSubscribedToEvent(eventName, contextId);
        this.#bufferEvent(eventWrapper, eventName);
        for (const channel of sortedChannels) {
          this.emit("event", {
            message: OutgoingMessage_js_1.OutgoingMessage.createFromPromise(event, channel),
            event: eventName
          });
          this.#markEventSent(eventWrapper, channel, eventName);
        }
      }
      async subscribe(eventNames, contextIds, channel) {
        for (const name of eventNames) {
          (0, events_js_1.assertSupportedEvent)(name);
        }
        for (const contextId of contextIds) {
          if (contextId !== null) {
            this.#browsingContextStorage.getContext(contextId);
          }
        }
        const addedSubscriptionItems = [];
        for (const eventName of eventNames) {
          for (const contextId of contextIds) {
            addedSubscriptionItems.push(...this.#subscriptionManager.subscribe(eventName, contextId, channel));
            for (const eventWrapper of this.#getBufferedEvents(eventName, contextId, channel)) {
              this.emit("event", {
                message: OutgoingMessage_js_1.OutgoingMessage.createFromPromise(eventWrapper.event, channel),
                event: eventName
              });
              this.#markEventSent(eventWrapper, channel, eventName);
            }
          }
        }
        (0, DistinctValues_js_1.distinctValues)(addedSubscriptionItems).forEach(({ contextId, event }) => {
          this.#subscribeHooks.get(event).forEach((hook) => hook(contextId));
        });
        await this.toggleModulesIfNeeded();
      }
      async unsubscribe(eventNames, contextIds, channel) {
        for (const name of eventNames) {
          (0, events_js_1.assertSupportedEvent)(name);
        }
        this.#subscriptionManager.unsubscribeAll(eventNames, contextIds, channel);
        await this.toggleModulesIfNeeded();
      }
      async toggleModulesIfNeeded() {
        await Promise.all(this.#browsingContextStorage.getAllContexts().map(async (context) => {
          return await context.toggleModulesIfNeeded();
        }));
      }
      clearBufferedEvents(contextId) {
        for (const eventName of eventBufferLength.keys()) {
          const bufferMapKey = _a3.#getMapKey(eventName, contextId);
          this.#eventBuffers.delete(bufferMapKey);
        }
      }
      /**
       * If the event is buffer-able, put it in the buffer.
       */
      #bufferEvent(eventWrapper, eventName) {
        if (!eventBufferLength.has(eventName)) {
          return;
        }
        const bufferMapKey = _a3.#getMapKey(eventName, eventWrapper.contextId);
        if (!this.#eventBuffers.has(bufferMapKey)) {
          this.#eventBuffers.set(bufferMapKey, new Buffer_js_1.Buffer(eventBufferLength.get(eventName)));
        }
        this.#eventBuffers.get(bufferMapKey).add(eventWrapper);
        this.#eventToContextsMap.get(eventName).add(eventWrapper.contextId);
      }
      /**
       * If the event is buffer-able, mark it as sent to the given contextId and channel.
       */
      #markEventSent(eventWrapper, channel, eventName) {
        if (!eventBufferLength.has(eventName)) {
          return;
        }
        const lastSentMapKey = _a3.#getMapKey(eventName, eventWrapper.contextId);
        const lastId = Math.max(this.#lastMessageSent.get(lastSentMapKey)?.get(channel) ?? 0, eventWrapper.id);
        const channelMap = this.#lastMessageSent.get(lastSentMapKey);
        if (channelMap) {
          channelMap.set(channel, lastId);
        } else {
          this.#lastMessageSent.set(lastSentMapKey, /* @__PURE__ */ new Map([[channel, lastId]]));
        }
      }
      /**
       * Returns events which are buffered and not yet sent to the given channel events.
       */
      #getBufferedEvents(eventName, contextId, channel) {
        const bufferMapKey = _a3.#getMapKey(eventName, contextId);
        const lastSentMessageId = this.#lastMessageSent.get(bufferMapKey)?.get(channel) ?? -Infinity;
        const result = this.#eventBuffers.get(bufferMapKey)?.get().filter((wrapper) => wrapper.id > lastSentMessageId) ?? [];
        if (contextId === null) {
          Array.from(this.#eventToContextsMap.get(eventName).keys()).filter((_contextId) => (
            // Events without context are already in the result.
            _contextId !== null && // Events from deleted contexts should not be sent.
            this.#browsingContextStorage.hasContext(_contextId)
          )).map((_contextId) => this.#getBufferedEvents(eventName, _contextId, channel)).forEach((events) => result.push(...events));
        }
        return result.sort((e1, e2) => e1.id - e2.id);
      }
    };
    exports.EventManager = EventManager;
    _a3 = EventManager;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/BidiServer.js
var require_BidiServer = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/BidiServer.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BidiServer = void 0;
    var EventEmitter_js_1 = require_EventEmitter();
    var log_js_1 = require_log();
    var ProcessingQueue_js_1 = require_ProcessingQueue();
    var CommandProcessor_js_1 = require_CommandProcessor();
    var BluetoothProcessor_js_1 = require_BluetoothProcessor();
    var CdpTargetManager_js_1 = require_CdpTargetManager();
    var BrowsingContextStorage_js_1 = require_BrowsingContextStorage();
    var NetworkStorage_js_1 = require_NetworkStorage();
    var PreloadScriptStorage_js_1 = require_PreloadScriptStorage();
    var RealmStorage_js_1 = require_RealmStorage();
    var EventManager_js_1 = require_EventManager();
    var BidiServer2 = class _BidiServer extends EventEmitter_js_1.EventEmitter {
      #messageQueue;
      #transport;
      #commandProcessor;
      #eventManager;
      #browsingContextStorage = new BrowsingContextStorage_js_1.BrowsingContextStorage();
      #realmStorage = new RealmStorage_js_1.RealmStorage();
      #preloadScriptStorage = new PreloadScriptStorage_js_1.PreloadScriptStorage();
      #bluetoothProcessor;
      #logger;
      #handleIncomingMessage = (message) => {
        void this.#commandProcessor.processCommand(message).catch((error) => {
          this.#logger?.(log_js_1.LogType.debugError, error);
        });
      };
      #processOutgoingMessage = async (messageEntry) => {
        const message = messageEntry.message;
        if (messageEntry.channel !== null) {
          message["channel"] = messageEntry.channel;
        }
        await this.#transport.sendMessage(message);
      };
      constructor(bidiTransport, cdpConnection, browserCdpClient, selfTargetId, defaultUserContextId, parser, logger) {
        super();
        this.#logger = logger;
        this.#messageQueue = new ProcessingQueue_js_1.ProcessingQueue(this.#processOutgoingMessage, this.#logger);
        this.#transport = bidiTransport;
        this.#transport.setOnMessage(this.#handleIncomingMessage);
        this.#eventManager = new EventManager_js_1.EventManager(this.#browsingContextStorage);
        const networkStorage = new NetworkStorage_js_1.NetworkStorage(this.#eventManager, this.#browsingContextStorage, browserCdpClient, logger);
        this.#bluetoothProcessor = new BluetoothProcessor_js_1.BluetoothProcessor(this.#eventManager, this.#browsingContextStorage);
        this.#commandProcessor = new CommandProcessor_js_1.CommandProcessor(cdpConnection, browserCdpClient, this.#eventManager, this.#browsingContextStorage, this.#realmStorage, this.#preloadScriptStorage, networkStorage, this.#bluetoothProcessor, parser, async (options) => {
          await browserCdpClient.sendCommand("Security.setIgnoreCertificateErrors", {
            ignore: options.acceptInsecureCerts ?? false
          });
          new CdpTargetManager_js_1.CdpTargetManager(cdpConnection, browserCdpClient, selfTargetId, this.#eventManager, this.#browsingContextStorage, this.#realmStorage, networkStorage, this.#bluetoothProcessor, this.#preloadScriptStorage, defaultUserContextId, options?.["goog:prerenderingDisabled"] ?? false, options?.unhandledPromptBehavior, logger);
          await browserCdpClient.sendCommand("Target.setDiscoverTargets", {
            discover: true
          });
          await browserCdpClient.sendCommand("Target.setAutoAttach", {
            autoAttach: true,
            waitForDebuggerOnStart: true,
            flatten: true,
            // Browser session should attach to tab instead of the page, so that
            // prerendering is not blocked.
            filter: [
              {
                type: "page",
                exclude: true
              },
              {}
            ]
          });
          await this.#topLevelContextsLoaded();
        }, this.#logger);
        this.#eventManager.on("event", ({ message, event }) => {
          this.emitOutgoingMessage(message, event);
        });
        this.#commandProcessor.on("response", ({ message, event }) => {
          this.emitOutgoingMessage(message, event);
        });
      }
      /**
       * Creates and starts BiDi Mapper instance.
       */
      static async createAndStart(bidiTransport, cdpConnection, browserCdpClient, selfTargetId, parser, logger) {
        const [{ browserContextIds }, { targetInfos }] = await Promise.all([
          browserCdpClient.sendCommand("Target.getBrowserContexts"),
          browserCdpClient.sendCommand("Target.getTargets")
        ]);
        let defaultUserContextId = "default";
        for (const info of targetInfos) {
          if (info.browserContextId && !browserContextIds.includes(info.browserContextId)) {
            defaultUserContextId = info.browserContextId;
            break;
          }
        }
        const server = new _BidiServer(bidiTransport, cdpConnection, browserCdpClient, selfTargetId, defaultUserContextId, parser, logger);
        return server;
      }
      /**
       * Sends BiDi message.
       */
      emitOutgoingMessage(messageEntry, event) {
        this.#messageQueue.add(messageEntry, event);
      }
      close() {
        this.#transport.close();
      }
      async #topLevelContextsLoaded() {
        await Promise.all(this.#browsingContextStorage.getTopLevelContexts().map((c) => c.lifecycleLoaded()));
      }
    };
    exports.BidiServer = BidiServer2;
  }
});

// node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/BidiMapper.js
var require_BidiMapper = __commonJS({
  "node_modules/.pnpm/chromium-bidi@0.11.0_devtools-protocol@0.0.1367902/node_modules/chromium-bidi/lib/cjs/bidiMapper/BidiMapper.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OutgoingMessage = exports.EventEmitter = exports.BidiServer = void 0;
    var BidiServer_js_1 = require_BidiServer();
    Object.defineProperty(exports, "BidiServer", { enumerable: true, get: function() {
      return BidiServer_js_1.BidiServer;
    } });
    var EventEmitter_js_1 = require_EventEmitter();
    Object.defineProperty(exports, "EventEmitter", { enumerable: true, get: function() {
      return EventEmitter_js_1.EventEmitter;
    } });
    var OutgoingMessage_js_1 = require_OutgoingMessage();
    Object.defineProperty(exports, "OutgoingMessage", { enumerable: true, get: function() {
      return OutgoingMessage_js_1.OutgoingMessage;
    } });
  }
});

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/bidi.js
init_esm();

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/BidiOverCdp.js
init_esm();
var BidiMapper = __toESM(require_BidiMapper(), 1);

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/Connection.js
init_esm();

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/CDPSession.js
init_esm();
var BidiCdpSession = class _BidiCdpSession extends CDPSession {
  static sessions = /* @__PURE__ */ new Map();
  #detached = false;
  #connection;
  #sessionId = Deferred.create();
  frame;
  constructor(frame, sessionId) {
    super();
    this.frame = frame;
    if (!this.frame.page().browser().cdpSupported) {
      return;
    }
    const connection = this.frame.page().browser().connection;
    this.#connection = connection;
    if (sessionId) {
      this.#sessionId.resolve(sessionId);
      _BidiCdpSession.sessions.set(sessionId, this);
    } else {
      (async () => {
        try {
          const { result } = await connection.send("cdp.getSession", {
            context: frame._id
          });
          this.#sessionId.resolve(result.session);
          _BidiCdpSession.sessions.set(result.session, this);
        } catch (error) {
          this.#sessionId.reject(error);
        }
      })();
    }
    _BidiCdpSession.sessions.set(this.#sessionId.value(), this);
  }
  connection() {
    return void 0;
  }
  async send(method, params, options) {
    if (this.#connection === void 0) {
      throw new UnsupportedOperation("CDP support is required for this feature. The current browser does not support CDP.");
    }
    if (this.#detached) {
      throw new TargetCloseError(`Protocol error (${method}): Session closed. Most likely the page has been closed.`);
    }
    const session = await this.#sessionId.valueOrThrow();
    const { result } = await this.#connection.send("cdp.sendCommand", {
      method,
      params,
      session
    }, options?.timeout);
    return result.result;
  }
  async detach() {
    if (this.#connection === void 0 || this.#connection.closed || this.#detached) {
      return;
    }
    try {
      await this.frame.client.send("Target.detachFromTarget", {
        sessionId: this.id()
      });
    } finally {
      this.onClose();
    }
  }
  /**
   * @internal
   */
  onClose = () => {
    _BidiCdpSession.sessions.delete(this.id());
    this.#detached = true;
  };
  id() {
    const value = this.#sessionId.value();
    return typeof value === "string" ? value : "";
  }
};

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/Connection.js
var debugProtocolSend = debug("puppeteer:webDriverBiDi:SEND ►");
var debugProtocolReceive = debug("puppeteer:webDriverBiDi:RECV ◀");
var BidiConnection = class extends EventEmitter {
  #url;
  #transport;
  #delay;
  #timeout = 0;
  #closed = false;
  #callbacks = new CallbackRegistry();
  #emitters = [];
  constructor(url, transport, delay = 0, timeout2) {
    super();
    this.#url = url;
    this.#delay = delay;
    this.#timeout = timeout2 ?? 18e4;
    this.#transport = transport;
    this.#transport.onmessage = this.onMessage.bind(this);
    this.#transport.onclose = this.unbind.bind(this);
  }
  get closed() {
    return this.#closed;
  }
  get url() {
    return this.#url;
  }
  pipeTo(emitter) {
    this.#emitters.push(emitter);
  }
  emit(type, event) {
    for (const emitter of this.#emitters) {
      emitter.emit(type, event);
    }
    return super.emit(type, event);
  }
  send(method, params, timeout2) {
    assert(!this.#closed, "Protocol error: Connection closed.");
    return this.#callbacks.create(method, timeout2 ?? this.#timeout, (id) => {
      const stringifiedMessage = JSON.stringify({
        id,
        method,
        params
      });
      debugProtocolSend(stringifiedMessage);
      this.#transport.send(stringifiedMessage);
    });
  }
  /**
   * @internal
   */
  async onMessage(message) {
    if (this.#delay) {
      await new Promise((f) => {
        return setTimeout(f, this.#delay);
      });
    }
    debugProtocolReceive(message);
    const object = JSON.parse(message);
    if ("type" in object) {
      switch (object.type) {
        case "success":
          this.#callbacks.resolve(object.id, object);
          return;
        case "error":
          if (object.id === null) {
            break;
          }
          this.#callbacks.reject(object.id, createProtocolError(object), `${object.error}: ${object.message}`);
          return;
        case "event":
          if (isCdpEvent(object)) {
            BidiCdpSession.sessions.get(object.params.session)?.emit(object.params.event, object.params.params);
            return;
          }
          this.emit(object.method, object.params);
          return;
      }
    }
    if ("id" in object) {
      this.#callbacks.reject(object.id, `Protocol Error. Message is not in BiDi protocol format: '${message}'`, object.message);
    }
    debugError(object);
  }
  /**
   * Unbinds the connection, but keeps the transport open. Useful when the transport will
   * be reused by other connection e.g. with different protocol.
   * @internal
   */
  unbind() {
    if (this.#closed) {
      return;
    }
    this.#closed = true;
    this.#transport.onmessage = () => {
    };
    this.#transport.onclose = () => {
    };
    this.#callbacks.clear();
  }
  /**
   * Unbinds the connection and closes the transport.
   */
  dispose() {
    this.unbind();
    this.#transport.close();
  }
  getPendingProtocolErrors() {
    return this.#callbacks.getPendingProtocolErrors();
  }
};
function createProtocolError(object) {
  let message = `${object.error} ${object.message}`;
  if (object.stacktrace) {
    message += ` ${object.stacktrace}`;
  }
  return message;
}
function isCdpEvent(event) {
  return event.method.startsWith("cdp.");
}

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/BidiOverCdp.js
var bidiServerLogger = (prefix, ...args) => {
  debug(`bidi:${prefix}`)(args);
};
async function connectBidiOverCdp(cdp) {
  const transportBiDi = new NoOpTransport();
  const cdpConnectionAdapter = new CdpConnectionAdapter(cdp);
  const pptrTransport = {
    send(message) {
      transportBiDi.emitMessage(JSON.parse(message));
    },
    close() {
      bidiServer.close();
      cdpConnectionAdapter.close();
      cdp.dispose();
    },
    onmessage(_message) {
    }
  };
  transportBiDi.on("bidiResponse", (message) => {
    pptrTransport.onmessage(JSON.stringify(message));
  });
  const pptrBiDiConnection = new BidiConnection(cdp.url(), pptrTransport, cdp.delay, cdp.timeout);
  const bidiServer = await BidiMapper.BidiServer.createAndStart(
    transportBiDi,
    cdpConnectionAdapter,
    cdpConnectionAdapter.browserClient(),
    /* selfTargetId= */
    "",
    void 0,
    bidiServerLogger
  );
  return pptrBiDiConnection;
}
var CdpConnectionAdapter = class {
  #cdp;
  #adapters = /* @__PURE__ */ new Map();
  #browserCdpConnection;
  constructor(cdp) {
    this.#cdp = cdp;
    this.#browserCdpConnection = new CDPClientAdapter(cdp);
  }
  browserClient() {
    return this.#browserCdpConnection;
  }
  getCdpClient(id) {
    const session = this.#cdp.session(id);
    if (!session) {
      throw new Error(`Unknown CDP session with id ${id}`);
    }
    if (!this.#adapters.has(session)) {
      const adapter = new CDPClientAdapter(session, id, this.#browserCdpConnection);
      this.#adapters.set(session, adapter);
      return adapter;
    }
    return this.#adapters.get(session);
  }
  close() {
    this.#browserCdpConnection.close();
    for (const adapter of this.#adapters.values()) {
      adapter.close();
    }
  }
};
var CDPClientAdapter = class extends BidiMapper.EventEmitter {
  #closed = false;
  #client;
  sessionId = void 0;
  #browserClient;
  constructor(client, sessionId, browserClient) {
    super();
    this.#client = client;
    this.sessionId = sessionId;
    this.#browserClient = browserClient;
    this.#client.on("*", this.#forwardMessage);
  }
  browserClient() {
    return this.#browserClient;
  }
  #forwardMessage = (method, event) => {
    this.emit(method, event);
  };
  async sendCommand(method, ...params) {
    if (this.#closed) {
      return;
    }
    try {
      return await this.#client.send(method, ...params);
    } catch (err) {
      if (this.#closed) {
        return;
      }
      throw err;
    }
  }
  close() {
    this.#client.off("*", this.#forwardMessage);
    this.#closed = true;
  }
  isCloseError(error) {
    return error instanceof TargetCloseError;
  }
};
var NoOpTransport = class extends BidiMapper.EventEmitter {
  #onMessage = async (_m) => {
    return;
  };
  emitMessage(message) {
    void this.#onMessage(message);
  }
  setOnMessage(onMessage) {
    this.#onMessage = onMessage;
  }
  async sendMessage(message) {
    this.emit("bidiResponse", message);
  }
  close() {
    this.#onMessage = async (_m) => {
      return;
    };
  }
};

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/Browser.js
init_esm();

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/BrowserContext.js
init_esm();

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/core/UserContext.js
init_esm();

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/core/BrowsingContext.js
init_esm();

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/core/Navigation.js
init_esm();
var __runInitializers = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var Navigation = (() => {
  var _a3;
  let _classSuper = EventEmitter;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  return class Navigation2 extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    }
    static from(context) {
      const navigation = new Navigation2(context);
      navigation.#initialize();
      return navigation;
    }
    #request = __runInitializers(this, _instanceExtraInitializers);
    #navigation;
    #browsingContext;
    #disposables = new DisposableStack();
    #id;
    constructor(context) {
      super();
      this.#browsingContext = context;
    }
    #initialize() {
      const browsingContextEmitter = this.#disposables.use(new EventEmitter(this.#browsingContext));
      browsingContextEmitter.once("closed", () => {
        this.emit("failed", {
          url: this.#browsingContext.url,
          timestamp: /* @__PURE__ */ new Date()
        });
        this.dispose();
      });
      browsingContextEmitter.on("request", ({ request }) => {
        if (request.navigation === void 0 || // If a request with a navigation ID comes in, then the navigation ID is
        // for this navigation.
        !this.#matches(request.navigation)) {
          return;
        }
        this.#request = request;
        this.emit("request", request);
        const requestEmitter = this.#disposables.use(new EventEmitter(this.#request));
        requestEmitter.on("redirect", (request2) => {
          this.#request = request2;
        });
      });
      const sessionEmitter = this.#disposables.use(new EventEmitter(this.#session));
      sessionEmitter.on("browsingContext.navigationStarted", (info) => {
        if (info.context !== this.#browsingContext.id || this.#navigation !== void 0) {
          return;
        }
        this.#navigation = Navigation2.from(this.#browsingContext);
      });
      for (const eventName of [
        "browsingContext.domContentLoaded",
        "browsingContext.load"
      ]) {
        sessionEmitter.on(eventName, (info) => {
          if (info.context !== this.#browsingContext.id || info.navigation === null || !this.#matches(info.navigation)) {
            return;
          }
          this.dispose();
        });
      }
      for (const [eventName, event] of [
        ["browsingContext.fragmentNavigated", "fragment"],
        ["browsingContext.navigationFailed", "failed"],
        ["browsingContext.navigationAborted", "aborted"]
      ]) {
        sessionEmitter.on(eventName, (info) => {
          if (info.context !== this.#browsingContext.id || // Note we don't check if `navigation` is null since `null` means the
          // fragment navigated.
          !this.#matches(info.navigation)) {
            return;
          }
          this.emit(event, {
            url: info.url,
            timestamp: new Date(info.timestamp)
          });
          this.dispose();
        });
      }
    }
    #matches(navigation) {
      if (this.#navigation !== void 0 && !this.#navigation.disposed) {
        return false;
      }
      if (this.#id === void 0) {
        this.#id = navigation;
        return true;
      }
      return this.#id === navigation;
    }
    get #session() {
      return this.#browsingContext.userContext.browser.session;
    }
    get disposed() {
      return this.#disposables.disposed;
    }
    get request() {
      return this.#request;
    }
    get navigation() {
      return this.#navigation;
    }
    dispose() {
      this[disposeSymbol]();
    }
    [(_dispose_decorators = [inertIfDisposed], disposeSymbol)]() {
      this.#disposables.dispose();
      super[disposeSymbol]();
    }
  };
})();

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/core/Realm.js
init_esm();
var __runInitializers2 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate2 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var _a;
var Realm2 = (() => {
  let _classSuper = EventEmitter;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  let _disown_decorators;
  let _callFunction_decorators;
  let _evaluate_decorators;
  let _resolveExecutionContextId_decorators;
  return class Realm extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate2(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate2(this, null, _disown_decorators, { kind: "method", name: "disown", static: false, private: false, access: { has: (obj) => "disown" in obj, get: (obj) => obj.disown }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate2(this, null, _callFunction_decorators, { kind: "method", name: "callFunction", static: false, private: false, access: { has: (obj) => "callFunction" in obj, get: (obj) => obj.callFunction }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate2(this, null, _evaluate_decorators, { kind: "method", name: "evaluate", static: false, private: false, access: { has: (obj) => "evaluate" in obj, get: (obj) => obj.evaluate }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate2(this, null, _resolveExecutionContextId_decorators, { kind: "method", name: "resolveExecutionContextId", static: false, private: false, access: { has: (obj) => "resolveExecutionContextId" in obj, get: (obj) => obj.resolveExecutionContextId }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    }
    #reason = __runInitializers2(this, _instanceExtraInitializers);
    disposables = new DisposableStack();
    id;
    origin;
    executionContextId;
    constructor(id, origin) {
      super();
      this.id = id;
      this.origin = origin;
    }
    get disposed() {
      return this.#reason !== void 0;
    }
    get target() {
      return { realm: this.id };
    }
    dispose(reason) {
      this.#reason = reason;
      this[disposeSymbol]();
    }
    async disown(handles) {
      await this.session.send("script.disown", {
        target: this.target,
        handles
      });
    }
    async callFunction(functionDeclaration, awaitPromise, options = {}) {
      const { result } = await this.session.send("script.callFunction", {
        functionDeclaration,
        awaitPromise,
        target: this.target,
        ...options
      });
      return result;
    }
    async evaluate(expression, awaitPromise, options = {}) {
      const { result } = await this.session.send("script.evaluate", {
        expression,
        awaitPromise,
        target: this.target,
        ...options
      });
      return result;
    }
    async resolveExecutionContextId() {
      if (!this.executionContextId) {
        const { result } = await this.session.connection.send("cdp.resolveRealm", { realm: this.id });
        this.executionContextId = result.executionContextId;
      }
      return this.executionContextId;
    }
    [(_dispose_decorators = [inertIfDisposed], _disown_decorators = [throwIfDisposed((realm) => {
      return realm.#reason;
    })], _callFunction_decorators = [throwIfDisposed((realm) => {
      return realm.#reason;
    })], _evaluate_decorators = [throwIfDisposed((realm) => {
      return realm.#reason;
    })], _resolveExecutionContextId_decorators = [throwIfDisposed((realm) => {
      return realm.#reason;
    })], disposeSymbol)]() {
      this.#reason ??= "Realm already destroyed, probably because all associated browsing contexts closed.";
      this.emit("destroyed", { reason: this.#reason });
      this.disposables.dispose();
      super[disposeSymbol]();
    }
  };
})();
var WindowRealm = class _WindowRealm extends Realm2 {
  static from(context, sandbox) {
    const realm = new _WindowRealm(context, sandbox);
    realm.#initialize();
    return realm;
  }
  browsingContext;
  sandbox;
  #workers = /* @__PURE__ */ new Map();
  constructor(context, sandbox) {
    super("", "");
    this.browsingContext = context;
    this.sandbox = sandbox;
  }
  #initialize() {
    const browsingContextEmitter = this.disposables.use(new EventEmitter(this.browsingContext));
    browsingContextEmitter.on("closed", ({ reason }) => {
      this.dispose(reason);
    });
    const sessionEmitter = this.disposables.use(new EventEmitter(this.session));
    sessionEmitter.on("script.realmCreated", (info) => {
      if (info.type !== "window" || info.context !== this.browsingContext.id || info.sandbox !== this.sandbox) {
        return;
      }
      this.id = info.realm;
      this.origin = info.origin;
      this.executionContextId = void 0;
      this.emit("updated", this);
    });
    sessionEmitter.on("script.realmCreated", (info) => {
      if (info.type !== "dedicated-worker") {
        return;
      }
      if (!info.owners.includes(this.id)) {
        return;
      }
      const realm = DedicatedWorkerRealm.from(this, info.realm, info.origin);
      this.#workers.set(realm.id, realm);
      const realmEmitter = this.disposables.use(new EventEmitter(realm));
      realmEmitter.once("destroyed", () => {
        realmEmitter.removeAllListeners();
        this.#workers.delete(realm.id);
      });
      this.emit("worker", realm);
    });
  }
  get session() {
    return this.browsingContext.userContext.browser.session;
  }
  get target() {
    return { context: this.browsingContext.id, sandbox: this.sandbox };
  }
};
var DedicatedWorkerRealm = class extends Realm2 {
  static from(owner, id, origin) {
    const realm = new _a(owner, id, origin);
    realm.#initialize();
    return realm;
  }
  #workers = /* @__PURE__ */ new Map();
  owners;
  constructor(owner, id, origin) {
    super(id, origin);
    this.owners = /* @__PURE__ */ new Set([owner]);
  }
  #initialize() {
    const sessionEmitter = this.disposables.use(new EventEmitter(this.session));
    sessionEmitter.on("script.realmDestroyed", (info) => {
      if (info.realm !== this.id) {
        return;
      }
      this.dispose("Realm already destroyed.");
    });
    sessionEmitter.on("script.realmCreated", (info) => {
      if (info.type !== "dedicated-worker") {
        return;
      }
      if (!info.owners.includes(this.id)) {
        return;
      }
      const realm = _a.from(this, info.realm, info.origin);
      this.#workers.set(realm.id, realm);
      const realmEmitter = this.disposables.use(new EventEmitter(realm));
      realmEmitter.once("destroyed", () => {
        this.#workers.delete(realm.id);
      });
      this.emit("worker", realm);
    });
  }
  get session() {
    return this.owners.values().next().value.session;
  }
};
_a = DedicatedWorkerRealm;
var SharedWorkerRealm = class _SharedWorkerRealm extends Realm2 {
  static from(browser, id, origin) {
    const realm = new _SharedWorkerRealm(browser, id, origin);
    realm.#initialize();
    return realm;
  }
  #workers = /* @__PURE__ */ new Map();
  browser;
  constructor(browser, id, origin) {
    super(id, origin);
    this.browser = browser;
  }
  #initialize() {
    const sessionEmitter = this.disposables.use(new EventEmitter(this.session));
    sessionEmitter.on("script.realmDestroyed", (info) => {
      if (info.realm !== this.id) {
        return;
      }
      this.dispose("Realm already destroyed.");
    });
    sessionEmitter.on("script.realmCreated", (info) => {
      if (info.type !== "dedicated-worker") {
        return;
      }
      if (!info.owners.includes(this.id)) {
        return;
      }
      const realm = DedicatedWorkerRealm.from(this, info.realm, info.origin);
      this.#workers.set(realm.id, realm);
      const realmEmitter = this.disposables.use(new EventEmitter(realm));
      realmEmitter.once("destroyed", () => {
        this.#workers.delete(realm.id);
      });
      this.emit("worker", realm);
    });
  }
  get session() {
    return this.browser.session;
  }
};

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/core/Request.js
init_esm();
var __runInitializers3 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate3 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var Request = (() => {
  var _a3;
  let _classSuper = EventEmitter;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  return class Request2 extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate3(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    }
    static from(browsingContext, event) {
      const request = new Request2(browsingContext, event);
      request.#initialize();
      return request;
    }
    #error = __runInitializers3(this, _instanceExtraInitializers);
    #redirect;
    #response;
    #browsingContext;
    #disposables = new DisposableStack();
    #event;
    constructor(browsingContext, event) {
      super();
      this.#browsingContext = browsingContext;
      this.#event = event;
    }
    #initialize() {
      const browsingContextEmitter = this.#disposables.use(new EventEmitter(this.#browsingContext));
      browsingContextEmitter.once("closed", ({ reason }) => {
        this.#error = reason;
        this.emit("error", this.#error);
        this.dispose();
      });
      const sessionEmitter = this.#disposables.use(new EventEmitter(this.#session));
      sessionEmitter.on("network.beforeRequestSent", (event) => {
        if (event.context !== this.#browsingContext.id || event.request.request !== this.id || event.redirectCount !== this.#event.redirectCount + 1) {
          return;
        }
        this.#redirect = Request2.from(this.#browsingContext, event);
        this.emit("redirect", this.#redirect);
        this.dispose();
      });
      sessionEmitter.on("network.authRequired", (event) => {
        if (event.context !== this.#browsingContext.id || event.request.request !== this.id || // Don't try to authenticate for events that are not blocked
        !event.isBlocked) {
          return;
        }
        this.emit("authenticate", void 0);
      });
      sessionEmitter.on("network.fetchError", (event) => {
        if (event.context !== this.#browsingContext.id || event.request.request !== this.id || this.#event.redirectCount !== event.redirectCount) {
          return;
        }
        this.#error = event.errorText;
        this.emit("error", this.#error);
        this.dispose();
      });
      sessionEmitter.on("network.responseCompleted", (event) => {
        if (event.context !== this.#browsingContext.id || event.request.request !== this.id || this.#event.redirectCount !== event.redirectCount) {
          return;
        }
        this.#response = event.response;
        this.#event.request.timings = event.request.timings;
        this.emit("success", this.#response);
        if (this.#response.status >= 300 && this.#response.status < 400) {
          return;
        }
        this.dispose();
      });
    }
    get #session() {
      return this.#browsingContext.userContext.browser.session;
    }
    get disposed() {
      return this.#disposables.disposed;
    }
    get error() {
      return this.#error;
    }
    get headers() {
      return this.#event.request.headers;
    }
    get id() {
      return this.#event.request.request;
    }
    get initiator() {
      return this.#event.initiator;
    }
    get method() {
      return this.#event.request.method;
    }
    get navigation() {
      return this.#event.navigation ?? void 0;
    }
    get redirect() {
      return this.#redirect;
    }
    get lastRedirect() {
      let redirect = this.#redirect;
      while (redirect) {
        if (redirect && !redirect.#redirect) {
          return redirect;
        }
        redirect = redirect.#redirect;
      }
      return redirect;
    }
    get response() {
      return this.#response;
    }
    get url() {
      return this.#event.request.url;
    }
    get isBlocked() {
      return this.#event.isBlocked;
    }
    get resourceType() {
      return this.#event.request["goog:resourceType"] ?? void 0;
    }
    get postData() {
      return this.#event.request["goog:postData"] ?? void 0;
    }
    get hasPostData() {
      return this.#event.request["goog:hasPostData"] ?? false;
    }
    async continueRequest({ url, method, headers, cookies, body }) {
      await this.#session.send("network.continueRequest", {
        request: this.id,
        url,
        method,
        headers,
        body,
        cookies
      });
    }
    async failRequest() {
      await this.#session.send("network.failRequest", {
        request: this.id
      });
    }
    async provideResponse({ statusCode, reasonPhrase, headers, body }) {
      await this.#session.send("network.provideResponse", {
        request: this.id,
        statusCode,
        reasonPhrase,
        headers,
        body
      });
    }
    async continueWithAuth(parameters) {
      if (parameters.action === "provideCredentials") {
        await this.#session.send("network.continueWithAuth", {
          request: this.id,
          action: parameters.action,
          credentials: parameters.credentials
        });
      } else {
        await this.#session.send("network.continueWithAuth", {
          request: this.id,
          action: parameters.action
        });
      }
    }
    dispose() {
      this[disposeSymbol]();
    }
    [(_dispose_decorators = [inertIfDisposed], disposeSymbol)]() {
      this.#disposables.dispose();
      super[disposeSymbol]();
    }
    timing() {
      return this.#event.request.timings;
    }
  };
})();

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/core/UserPrompt.js
init_esm();
var __runInitializers4 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate4 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var UserPrompt = (() => {
  let _classSuper = EventEmitter;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  let _handle_decorators;
  return class UserPrompt2 extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate4(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate4(this, null, _handle_decorators, { kind: "method", name: "handle", static: false, private: false, access: { has: (obj) => "handle" in obj, get: (obj) => obj.handle }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    }
    static from(browsingContext, info) {
      const userPrompt = new UserPrompt2(browsingContext, info);
      userPrompt.#initialize();
      return userPrompt;
    }
    #reason = __runInitializers4(this, _instanceExtraInitializers);
    #result;
    #disposables = new DisposableStack();
    browsingContext;
    info;
    constructor(context, info) {
      super();
      this.browsingContext = context;
      this.info = info;
    }
    #initialize() {
      const browserContextEmitter = this.#disposables.use(new EventEmitter(this.browsingContext));
      browserContextEmitter.once("closed", ({ reason }) => {
        this.dispose(`User prompt already closed: ${reason}`);
      });
      const sessionEmitter = this.#disposables.use(new EventEmitter(this.#session));
      sessionEmitter.on("browsingContext.userPromptClosed", (parameters) => {
        if (parameters.context !== this.browsingContext.id) {
          return;
        }
        this.#result = parameters;
        this.emit("handled", parameters);
        this.dispose("User prompt already handled.");
      });
    }
    get #session() {
      return this.browsingContext.userContext.browser.session;
    }
    get closed() {
      return this.#reason !== void 0;
    }
    get disposed() {
      return this.closed;
    }
    get handled() {
      if (this.info.handler === "accept" || this.info.handler === "dismiss") {
        return true;
      }
      return this.#result !== void 0;
    }
    get result() {
      return this.#result;
    }
    dispose(reason) {
      this.#reason = reason;
      this[disposeSymbol]();
    }
    async handle(options = {}) {
      await this.#session.send("browsingContext.handleUserPrompt", {
        ...options,
        context: this.info.context
      });
      return this.#result;
    }
    [(_dispose_decorators = [inertIfDisposed], _handle_decorators = [throwIfDisposed((prompt) => {
      return prompt.#reason;
    })], disposeSymbol)]() {
      this.#reason ??= "User prompt already closed, probably because the associated browsing context was destroyed.";
      this.emit("closed", { reason: this.#reason });
      this.#disposables.dispose();
      super[disposeSymbol]();
    }
  };
})();

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/core/BrowsingContext.js
var __runInitializers5 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate5 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var BrowsingContext = (() => {
  var _a3;
  let _classSuper = EventEmitter;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  let _activate_decorators;
  let _captureScreenshot_decorators;
  let _close_decorators;
  let _traverseHistory_decorators;
  let _navigate_decorators;
  let _reload_decorators;
  let _setCacheBehavior_decorators;
  let _print_decorators;
  let _handleUserPrompt_decorators;
  let _setViewport_decorators;
  let _performActions_decorators;
  let _releaseActions_decorators;
  let _createWindowRealm_decorators;
  let _addPreloadScript_decorators;
  let _addIntercept_decorators;
  let _removePreloadScript_decorators;
  let _getCookies_decorators;
  let _setCookie_decorators;
  let _setFiles_decorators;
  let _subscribe_decorators;
  let _addInterception_decorators;
  let _deleteCookie_decorators;
  let _locateNodes_decorators;
  return class BrowsingContext2 extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      _deleteCookie_decorators = [throwIfDisposed((context) => {
        return context.#reason;
      })];
      _locateNodes_decorators = [throwIfDisposed((context) => {
        return context.#reason;
      })];
      __esDecorate5(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _activate_decorators, { kind: "method", name: "activate", static: false, private: false, access: { has: (obj) => "activate" in obj, get: (obj) => obj.activate }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _captureScreenshot_decorators, { kind: "method", name: "captureScreenshot", static: false, private: false, access: { has: (obj) => "captureScreenshot" in obj, get: (obj) => obj.captureScreenshot }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _close_decorators, { kind: "method", name: "close", static: false, private: false, access: { has: (obj) => "close" in obj, get: (obj) => obj.close }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _traverseHistory_decorators, { kind: "method", name: "traverseHistory", static: false, private: false, access: { has: (obj) => "traverseHistory" in obj, get: (obj) => obj.traverseHistory }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _navigate_decorators, { kind: "method", name: "navigate", static: false, private: false, access: { has: (obj) => "navigate" in obj, get: (obj) => obj.navigate }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _reload_decorators, { kind: "method", name: "reload", static: false, private: false, access: { has: (obj) => "reload" in obj, get: (obj) => obj.reload }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _setCacheBehavior_decorators, { kind: "method", name: "setCacheBehavior", static: false, private: false, access: { has: (obj) => "setCacheBehavior" in obj, get: (obj) => obj.setCacheBehavior }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _print_decorators, { kind: "method", name: "print", static: false, private: false, access: { has: (obj) => "print" in obj, get: (obj) => obj.print }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _handleUserPrompt_decorators, { kind: "method", name: "handleUserPrompt", static: false, private: false, access: { has: (obj) => "handleUserPrompt" in obj, get: (obj) => obj.handleUserPrompt }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _setViewport_decorators, { kind: "method", name: "setViewport", static: false, private: false, access: { has: (obj) => "setViewport" in obj, get: (obj) => obj.setViewport }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _performActions_decorators, { kind: "method", name: "performActions", static: false, private: false, access: { has: (obj) => "performActions" in obj, get: (obj) => obj.performActions }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _releaseActions_decorators, { kind: "method", name: "releaseActions", static: false, private: false, access: { has: (obj) => "releaseActions" in obj, get: (obj) => obj.releaseActions }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _createWindowRealm_decorators, { kind: "method", name: "createWindowRealm", static: false, private: false, access: { has: (obj) => "createWindowRealm" in obj, get: (obj) => obj.createWindowRealm }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _addPreloadScript_decorators, { kind: "method", name: "addPreloadScript", static: false, private: false, access: { has: (obj) => "addPreloadScript" in obj, get: (obj) => obj.addPreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _addIntercept_decorators, { kind: "method", name: "addIntercept", static: false, private: false, access: { has: (obj) => "addIntercept" in obj, get: (obj) => obj.addIntercept }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _removePreloadScript_decorators, { kind: "method", name: "removePreloadScript", static: false, private: false, access: { has: (obj) => "removePreloadScript" in obj, get: (obj) => obj.removePreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _getCookies_decorators, { kind: "method", name: "getCookies", static: false, private: false, access: { has: (obj) => "getCookies" in obj, get: (obj) => obj.getCookies }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _setCookie_decorators, { kind: "method", name: "setCookie", static: false, private: false, access: { has: (obj) => "setCookie" in obj, get: (obj) => obj.setCookie }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _setFiles_decorators, { kind: "method", name: "setFiles", static: false, private: false, access: { has: (obj) => "setFiles" in obj, get: (obj) => obj.setFiles }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _subscribe_decorators, { kind: "method", name: "subscribe", static: false, private: false, access: { has: (obj) => "subscribe" in obj, get: (obj) => obj.subscribe }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _addInterception_decorators, { kind: "method", name: "addInterception", static: false, private: false, access: { has: (obj) => "addInterception" in obj, get: (obj) => obj.addInterception }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _deleteCookie_decorators, { kind: "method", name: "deleteCookie", static: false, private: false, access: { has: (obj) => "deleteCookie" in obj, get: (obj) => obj.deleteCookie }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate5(this, null, _locateNodes_decorators, { kind: "method", name: "locateNodes", static: false, private: false, access: { has: (obj) => "locateNodes" in obj, get: (obj) => obj.locateNodes }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    }
    static from(userContext, parent, id, url, originalOpener) {
      const browsingContext = new BrowsingContext2(userContext, parent, id, url, originalOpener);
      browsingContext.#initialize();
      return browsingContext;
    }
    #navigation = __runInitializers5(this, _instanceExtraInitializers);
    #reason;
    #url;
    #children = /* @__PURE__ */ new Map();
    #disposables = new DisposableStack();
    #realms = /* @__PURE__ */ new Map();
    #requests = /* @__PURE__ */ new Map();
    defaultRealm;
    id;
    parent;
    userContext;
    originalOpener;
    constructor(context, parent, id, url, originalOpener) {
      super();
      this.#url = url;
      this.id = id;
      this.parent = parent;
      this.userContext = context;
      this.originalOpener = originalOpener;
      this.defaultRealm = this.#createWindowRealm();
    }
    #initialize() {
      const userContextEmitter = this.#disposables.use(new EventEmitter(this.userContext));
      userContextEmitter.once("closed", ({ reason }) => {
        this.dispose(`Browsing context already closed: ${reason}`);
      });
      const sessionEmitter = this.#disposables.use(new EventEmitter(this.#session));
      sessionEmitter.on("browsingContext.contextCreated", (info) => {
        if (info.parent !== this.id) {
          return;
        }
        const browsingContext = BrowsingContext2.from(this.userContext, this, info.context, info.url, info.originalOpener);
        this.#children.set(info.context, browsingContext);
        const browsingContextEmitter = this.#disposables.use(new EventEmitter(browsingContext));
        browsingContextEmitter.once("closed", () => {
          browsingContextEmitter.removeAllListeners();
          this.#children.delete(browsingContext.id);
        });
        this.emit("browsingcontext", { browsingContext });
      });
      sessionEmitter.on("browsingContext.contextDestroyed", (info) => {
        if (info.context !== this.id) {
          return;
        }
        this.dispose("Browsing context already closed.");
      });
      sessionEmitter.on("browsingContext.historyUpdated", (info) => {
        if (info.context !== this.id) {
          return;
        }
        this.#url = info.url;
        this.emit("historyUpdated", void 0);
      });
      sessionEmitter.on("browsingContext.domContentLoaded", (info) => {
        if (info.context !== this.id) {
          return;
        }
        this.#url = info.url;
        this.emit("DOMContentLoaded", void 0);
      });
      sessionEmitter.on("browsingContext.load", (info) => {
        if (info.context !== this.id) {
          return;
        }
        this.#url = info.url;
        this.emit("load", void 0);
      });
      sessionEmitter.on("browsingContext.navigationStarted", (info) => {
        if (info.context !== this.id) {
          return;
        }
        for (const [id, request] of this.#requests) {
          if (request.disposed) {
            this.#requests.delete(id);
          }
        }
        if (this.#navigation !== void 0 && !this.#navigation.disposed) {
          return;
        }
        this.#navigation = Navigation.from(this);
        const navigationEmitter = this.#disposables.use(new EventEmitter(this.#navigation));
        for (const eventName of ["fragment", "failed", "aborted"]) {
          navigationEmitter.once(eventName, ({ url }) => {
            navigationEmitter[disposeSymbol]();
            this.#url = url;
          });
        }
        this.emit("navigation", { navigation: this.#navigation });
      });
      sessionEmitter.on("network.beforeRequestSent", (event) => {
        if (event.context !== this.id) {
          return;
        }
        if (this.#requests.has(event.request.request)) {
          return;
        }
        const request = Request.from(this, event);
        this.#requests.set(request.id, request);
        this.emit("request", { request });
      });
      sessionEmitter.on("log.entryAdded", (entry) => {
        if (entry.source.context !== this.id) {
          return;
        }
        this.emit("log", { entry });
      });
      sessionEmitter.on("browsingContext.userPromptOpened", (info) => {
        if (info.context !== this.id) {
          return;
        }
        const userPrompt = UserPrompt.from(this, info);
        this.emit("userprompt", { userPrompt });
      });
    }
    get #session() {
      return this.userContext.browser.session;
    }
    get children() {
      return this.#children.values();
    }
    get closed() {
      return this.#reason !== void 0;
    }
    get disposed() {
      return this.closed;
    }
    get realms() {
      const self = this;
      return function* () {
        yield self.defaultRealm;
        yield* self.#realms.values();
      }();
    }
    get top() {
      let context = this;
      for (let { parent } = context; parent; { parent } = context) {
        context = parent;
      }
      return context;
    }
    get url() {
      return this.#url;
    }
    #createWindowRealm(sandbox) {
      const realm = WindowRealm.from(this, sandbox);
      realm.on("worker", (realm2) => {
        this.emit("worker", { realm: realm2 });
      });
      return realm;
    }
    dispose(reason) {
      this.#reason = reason;
      for (const context of this.#children.values()) {
        context.dispose("Parent browsing context was disposed");
      }
      this[disposeSymbol]();
    }
    async activate() {
      await this.#session.send("browsingContext.activate", {
        context: this.id
      });
    }
    async captureScreenshot(options = {}) {
      const { result: { data } } = await this.#session.send("browsingContext.captureScreenshot", {
        context: this.id,
        ...options
      });
      return data;
    }
    async close(promptUnload) {
      await Promise.all([...this.#children.values()].map(async (child) => {
        await child.close(promptUnload);
      }));
      await this.#session.send("browsingContext.close", {
        context: this.id,
        promptUnload
      });
    }
    async traverseHistory(delta) {
      await this.#session.send("browsingContext.traverseHistory", {
        context: this.id,
        delta
      });
    }
    async navigate(url, wait) {
      await this.#session.send("browsingContext.navigate", {
        context: this.id,
        url,
        wait
      });
    }
    async reload(options = {}) {
      await this.#session.send("browsingContext.reload", {
        context: this.id,
        ...options
      });
    }
    async setCacheBehavior(cacheBehavior) {
      await this.#session.send("network.setCacheBehavior", {
        contexts: [this.id],
        cacheBehavior
      });
    }
    async print(options = {}) {
      const { result: { data } } = await this.#session.send("browsingContext.print", {
        context: this.id,
        ...options
      });
      return data;
    }
    async handleUserPrompt(options = {}) {
      await this.#session.send("browsingContext.handleUserPrompt", {
        context: this.id,
        ...options
      });
    }
    async setViewport(options = {}) {
      await this.#session.send("browsingContext.setViewport", {
        context: this.id,
        ...options
      });
    }
    async performActions(actions) {
      await this.#session.send("input.performActions", {
        context: this.id,
        actions
      });
    }
    async releaseActions() {
      await this.#session.send("input.releaseActions", {
        context: this.id
      });
    }
    createWindowRealm(sandbox) {
      return this.#createWindowRealm(sandbox);
    }
    async addPreloadScript(functionDeclaration, options = {}) {
      return await this.userContext.browser.addPreloadScript(functionDeclaration, {
        ...options,
        contexts: [this]
      });
    }
    async addIntercept(options) {
      const { result: { intercept } } = await this.userContext.browser.session.send("network.addIntercept", {
        ...options,
        contexts: [this.id]
      });
      return intercept;
    }
    async removePreloadScript(script) {
      await this.userContext.browser.removePreloadScript(script);
    }
    async getCookies(options = {}) {
      const { result: { cookies } } = await this.#session.send("storage.getCookies", {
        ...options,
        partition: {
          type: "context",
          context: this.id
        }
      });
      return cookies;
    }
    async setCookie(cookie) {
      await this.#session.send("storage.setCookie", {
        cookie,
        partition: {
          type: "context",
          context: this.id
        }
      });
    }
    async setFiles(element, files) {
      await this.#session.send("input.setFiles", {
        context: this.id,
        element,
        files
      });
    }
    async subscribe(events) {
      await this.#session.subscribe(events, [this.id]);
    }
    async addInterception(events) {
      await this.#session.subscribe(events, [this.id]);
    }
    [(_dispose_decorators = [inertIfDisposed], _activate_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _captureScreenshot_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _close_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _traverseHistory_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _navigate_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _reload_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _setCacheBehavior_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _print_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _handleUserPrompt_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _setViewport_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _performActions_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _releaseActions_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _createWindowRealm_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _addPreloadScript_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _addIntercept_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _removePreloadScript_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _getCookies_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _setCookie_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _setFiles_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _subscribe_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _addInterception_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], disposeSymbol)]() {
      this.#reason ??= "Browsing context already closed, probably because the user context closed.";
      this.emit("closed", { reason: this.#reason });
      this.#disposables.dispose();
      super[disposeSymbol]();
    }
    async deleteCookie(...cookieFilters) {
      await Promise.all(cookieFilters.map(async (filter2) => {
        await this.#session.send("storage.deleteCookies", {
          filter: filter2,
          partition: {
            type: "context",
            context: this.id
          }
        });
      }));
    }
    async locateNodes(locator, startNodes) {
      const result = await this.#session.send("browsingContext.locateNodes", {
        context: this.id,
        locator,
        startNodes: startNodes.length ? startNodes : void 0
      });
      return result.result.nodes;
    }
  };
})();

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/core/UserContext.js
var __runInitializers6 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate6 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var UserContext = (() => {
  let _classSuper = EventEmitter;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  let _createBrowsingContext_decorators;
  let _remove_decorators;
  let _getCookies_decorators;
  let _setCookie_decorators;
  let _setPermissions_decorators;
  return class UserContext2 extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate6(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate6(this, null, _createBrowsingContext_decorators, { kind: "method", name: "createBrowsingContext", static: false, private: false, access: { has: (obj) => "createBrowsingContext" in obj, get: (obj) => obj.createBrowsingContext }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate6(this, null, _remove_decorators, { kind: "method", name: "remove", static: false, private: false, access: { has: (obj) => "remove" in obj, get: (obj) => obj.remove }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate6(this, null, _getCookies_decorators, { kind: "method", name: "getCookies", static: false, private: false, access: { has: (obj) => "getCookies" in obj, get: (obj) => obj.getCookies }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate6(this, null, _setCookie_decorators, { kind: "method", name: "setCookie", static: false, private: false, access: { has: (obj) => "setCookie" in obj, get: (obj) => obj.setCookie }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate6(this, null, _setPermissions_decorators, { kind: "method", name: "setPermissions", static: false, private: false, access: { has: (obj) => "setPermissions" in obj, get: (obj) => obj.setPermissions }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    }
    static DEFAULT = "default";
    static create(browser, id) {
      const context = new UserContext2(browser, id);
      context.#initialize();
      return context;
    }
    #reason = __runInitializers6(this, _instanceExtraInitializers);
    // Note these are only top-level contexts.
    #browsingContexts = /* @__PURE__ */ new Map();
    #disposables = new DisposableStack();
    #id;
    browser;
    constructor(browser, id) {
      super();
      this.#id = id;
      this.browser = browser;
    }
    #initialize() {
      const browserEmitter = this.#disposables.use(new EventEmitter(this.browser));
      browserEmitter.once("closed", ({ reason }) => {
        this.dispose(`User context was closed: ${reason}`);
      });
      browserEmitter.once("disconnected", ({ reason }) => {
        this.dispose(`User context was closed: ${reason}`);
      });
      const sessionEmitter = this.#disposables.use(new EventEmitter(this.#session));
      sessionEmitter.on("browsingContext.contextCreated", (info) => {
        if (info.parent) {
          return;
        }
        if (info.userContext !== this.#id) {
          return;
        }
        const browsingContext = BrowsingContext.from(this, void 0, info.context, info.url, info.originalOpener);
        this.#browsingContexts.set(browsingContext.id, browsingContext);
        const browsingContextEmitter = this.#disposables.use(new EventEmitter(browsingContext));
        browsingContextEmitter.on("closed", () => {
          browsingContextEmitter.removeAllListeners();
          this.#browsingContexts.delete(browsingContext.id);
        });
        this.emit("browsingcontext", { browsingContext });
      });
    }
    get #session() {
      return this.browser.session;
    }
    get browsingContexts() {
      return this.#browsingContexts.values();
    }
    get closed() {
      return this.#reason !== void 0;
    }
    get disposed() {
      return this.closed;
    }
    get id() {
      return this.#id;
    }
    dispose(reason) {
      this.#reason = reason;
      this[disposeSymbol]();
    }
    async createBrowsingContext(type, options = {}) {
      const { result: { context: contextId } } = await this.#session.send("browsingContext.create", {
        type,
        ...options,
        referenceContext: options.referenceContext?.id,
        userContext: this.#id
      });
      const browsingContext = this.#browsingContexts.get(contextId);
      assert(browsingContext, "The WebDriver BiDi implementation is failing to create a browsing context correctly.");
      return browsingContext;
    }
    async remove() {
      try {
        await this.#session.send("browser.removeUserContext", {
          userContext: this.#id
        });
      } finally {
        this.dispose("User context already closed.");
      }
    }
    async getCookies(options = {}, sourceOrigin = void 0) {
      const { result: { cookies } } = await this.#session.send("storage.getCookies", {
        ...options,
        partition: {
          type: "storageKey",
          userContext: this.#id,
          sourceOrigin
        }
      });
      return cookies;
    }
    async setCookie(cookie, sourceOrigin) {
      await this.#session.send("storage.setCookie", {
        cookie,
        partition: {
          type: "storageKey",
          sourceOrigin,
          userContext: this.id
        }
      });
    }
    async setPermissions(origin, descriptor, state) {
      await this.#session.send("permissions.setPermission", {
        origin,
        descriptor,
        state,
        userContext: this.#id
      });
    }
    [(_dispose_decorators = [inertIfDisposed], _createBrowsingContext_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _remove_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _getCookies_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _setCookie_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], _setPermissions_decorators = [throwIfDisposed((context) => {
      return context.#reason;
    })], disposeSymbol)]() {
      this.#reason ??= "User context already closed, probably because the browser disconnected/closed.";
      this.emit("closed", { reason: this.#reason });
      this.#disposables.dispose();
      super[disposeSymbol]();
    }
  };
})();

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/Page.js
init_esm();

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/Frame.js
init_esm();

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/Deserializer.js
init_esm();
var BidiDeserializer = class {
  static deserialize(result) {
    if (!result) {
      debugError("Service did not produce a result.");
      return void 0;
    }
    switch (result.type) {
      case "array":
        return result.value?.map((value) => {
          return this.deserialize(value);
        });
      case "set":
        return result.value?.reduce((acc, value) => {
          return acc.add(this.deserialize(value));
        }, /* @__PURE__ */ new Set());
      case "object":
        return result.value?.reduce((acc, tuple) => {
          const { key, value } = this.#deserializeTuple(tuple);
          acc[key] = value;
          return acc;
        }, {});
      case "map":
        return result.value?.reduce((acc, tuple) => {
          const { key, value } = this.#deserializeTuple(tuple);
          return acc.set(key, value);
        }, /* @__PURE__ */ new Map());
      case "promise":
        return {};
      case "regexp":
        return new RegExp(result.value.pattern, result.value.flags);
      case "date":
        return new Date(result.value);
      case "undefined":
        return void 0;
      case "null":
        return null;
      case "number":
        return this.#deserializeNumber(result.value);
      case "bigint":
        return BigInt(result.value);
      case "boolean":
        return Boolean(result.value);
      case "string":
        return result.value;
    }
    debugError(`Deserialization of type ${result.type} not supported.`);
    return void 0;
  }
  static #deserializeNumber(value) {
    switch (value) {
      case "-0":
        return -0;
      case "NaN":
        return NaN;
      case "Infinity":
        return Infinity;
      case "-Infinity":
        return -Infinity;
      default:
        return value;
    }
  }
  static #deserializeTuple([serializedKey, serializedValue]) {
    const key = typeof serializedKey === "string" ? serializedKey : this.deserialize(serializedKey);
    const value = this.deserialize(serializedValue);
    return { key, value };
  }
};

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/Dialog.js
init_esm();
var BidiDialog = class _BidiDialog extends Dialog {
  static from(prompt) {
    return new _BidiDialog(prompt);
  }
  #prompt;
  constructor(prompt) {
    super(prompt.info.type, prompt.info.message, prompt.info.defaultValue);
    this.#prompt = prompt;
    this.handled = prompt.handled;
  }
  async handle(options) {
    await this.#prompt.handle({
      accept: options.accept,
      userText: options.text
    });
  }
};

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/ExposedFunction.js
init_esm();
var Bidi = __toESM(require_protocol(), 1);

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/ElementHandle.js
init_esm();

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/JSHandle.js
init_esm();
var BidiJSHandle = class _BidiJSHandle extends JSHandle {
  static from(value, realm) {
    return new _BidiJSHandle(value, realm);
  }
  #remoteValue;
  realm;
  #disposed = false;
  constructor(value, realm) {
    super();
    this.#remoteValue = value;
    this.realm = realm;
  }
  get disposed() {
    return this.#disposed;
  }
  async jsonValue() {
    return await this.evaluate((value) => {
      return value;
    });
  }
  asElement() {
    return null;
  }
  async dispose() {
    if (this.#disposed) {
      return;
    }
    this.#disposed = true;
    await this.realm.destroyHandles([this]);
  }
  get isPrimitiveValue() {
    switch (this.#remoteValue.type) {
      case "string":
      case "number":
      case "bigint":
      case "boolean":
      case "undefined":
      case "null":
        return true;
      default:
        return false;
    }
  }
  toString() {
    if (this.isPrimitiveValue) {
      return "JSHandle:" + BidiDeserializer.deserialize(this.#remoteValue);
    }
    return "JSHandle@" + this.#remoteValue.type;
  }
  get id() {
    return "handle" in this.#remoteValue ? this.#remoteValue.handle : void 0;
  }
  remoteValue() {
    return this.#remoteValue;
  }
  remoteObject() {
    throw new UnsupportedOperation("Not available in WebDriver BiDi");
  }
};

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/ElementHandle.js
var __runInitializers7 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate7 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __addDisposableResource = function(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
};
var __disposeResources = /* @__PURE__ */ function(SuppressedError2) {
  return function(env) {
    function fail(e) {
      env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    var r, s = 0;
    function next() {
      while (r = env.stack.pop()) {
        try {
          if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
          if (r.dispose) {
            var result = r.dispose.call(r.value);
            if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
          } else s |= 1;
        } catch (e) {
          fail(e);
        }
      }
      if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
      if (env.hasError) throw env.error;
    }
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
var BidiElementHandle = (() => {
  let _classSuper = ElementHandle;
  let _instanceExtraInitializers = [];
  let _autofill_decorators;
  let _contentFrame_decorators;
  return class BidiElementHandle2 extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      _autofill_decorators = [throwIfDisposed()];
      _contentFrame_decorators = [throwIfDisposed(), bindIsolatedHandle];
      __esDecorate7(this, null, _autofill_decorators, { kind: "method", name: "autofill", static: false, private: false, access: { has: (obj) => "autofill" in obj, get: (obj) => obj.autofill }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate7(this, null, _contentFrame_decorators, { kind: "method", name: "contentFrame", static: false, private: false, access: { has: (obj) => "contentFrame" in obj, get: (obj) => obj.contentFrame }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    }
    #backendNodeId = __runInitializers7(this, _instanceExtraInitializers);
    static from(value, realm) {
      return new BidiElementHandle2(value, realm);
    }
    constructor(value, realm) {
      super(BidiJSHandle.from(value, realm));
    }
    get realm() {
      return this.handle.realm;
    }
    get frame() {
      return this.realm.environment;
    }
    remoteValue() {
      return this.handle.remoteValue();
    }
    async autofill(data) {
      const client = this.frame.client;
      const nodeInfo = await client.send("DOM.describeNode", {
        objectId: this.handle.id
      });
      const fieldId = nodeInfo.node.backendNodeId;
      const frameId = this.frame._id;
      await client.send("Autofill.trigger", {
        fieldId,
        frameId,
        card: data.creditCard
      });
    }
    async contentFrame() {
      const env_1 = { stack: [], error: void 0, hasError: false };
      try {
        const handle = __addDisposableResource(env_1, await this.evaluateHandle((element) => {
          if (element instanceof HTMLIFrameElement || element instanceof HTMLFrameElement) {
            return element.contentWindow;
          }
          return;
        }), false);
        const value = handle.remoteValue();
        if (value.type === "window") {
          return this.frame.page().frames().find((frame) => {
            return frame._id === value.value.context;
          }) ?? null;
        }
        return null;
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources(env_1);
      }
    }
    async uploadFile(...files) {
      const path = environment.value.path;
      if (path) {
        files = files.map((file) => {
          if (path.win32.isAbsolute(file) || path.posix.isAbsolute(file)) {
            return file;
          } else {
            return path.resolve(file);
          }
        });
      }
      await this.frame.setFiles(this, files);
    }
    async *queryAXTree(name, role) {
      const results = await this.frame.locateNodes(this, {
        type: "accessibility",
        value: {
          role,
          name
        }
      });
      return yield* AsyncIterableUtil.map(results, (node) => {
        return Promise.resolve(BidiElementHandle2.from(node, this.realm));
      });
    }
    async backendNodeId() {
      if (!this.frame.page().browser().cdpSupported) {
        throw new UnsupportedOperation();
      }
      if (this.#backendNodeId) {
        return this.#backendNodeId;
      }
      const { node } = await this.frame.client.send("DOM.describeNode", {
        objectId: this.handle.id
      });
      this.#backendNodeId = node.backendNodeId;
      return this.#backendNodeId;
    }
  };
})();

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/ExposedFunction.js
var __addDisposableResource2 = function(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
};
var __disposeResources2 = /* @__PURE__ */ function(SuppressedError2) {
  return function(env) {
    function fail(e) {
      env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    var r, s = 0;
    function next() {
      while (r = env.stack.pop()) {
        try {
          if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
          if (r.dispose) {
            var result = r.dispose.call(r.value);
            if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
          } else s |= 1;
        } catch (e) {
          fail(e);
        }
      }
      if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
      if (env.hasError) throw env.error;
    }
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
var ExposeableFunction = class _ExposeableFunction {
  static async from(frame, name, apply, isolate = false) {
    const func = new _ExposeableFunction(frame, name, apply, isolate);
    await func.#initialize();
    return func;
  }
  #frame;
  name;
  #apply;
  #isolate;
  #channel;
  #scripts = [];
  #disposables = new DisposableStack();
  constructor(frame, name, apply, isolate = false) {
    this.#frame = frame;
    this.name = name;
    this.#apply = apply;
    this.#isolate = isolate;
    this.#channel = `__puppeteer__${this.#frame._id}_page_exposeFunction_${this.name}`;
  }
  async #initialize() {
    const connection = this.#connection;
    const channel = {
      type: "channel",
      value: {
        channel: this.#channel,
        ownership: "root"
      }
    };
    const connectionEmitter = this.#disposables.use(new EventEmitter(connection));
    connectionEmitter.on(Bidi.ChromiumBidi.Script.EventNames.Message, this.#handleMessage);
    const functionDeclaration = stringifyFunction(interpolateFunction((callback) => {
      Object.assign(globalThis, {
        [PLACEHOLDER("name")]: function(...args) {
          return new Promise((resolve, reject) => {
            callback([resolve, reject, args]);
          });
        }
      });
    }, { name: JSON.stringify(this.name) }));
    const frames = [this.#frame];
    for (const frame of frames) {
      frames.push(...frame.childFrames());
    }
    await Promise.all(frames.map(async (frame) => {
      const realm = this.#isolate ? frame.isolatedRealm() : frame.mainRealm();
      try {
        const [script] = await Promise.all([
          frame.browsingContext.addPreloadScript(functionDeclaration, {
            arguments: [channel],
            sandbox: realm.sandbox
          }),
          realm.realm.callFunction(functionDeclaration, false, {
            arguments: [channel]
          })
        ]);
        this.#scripts.push([frame, script]);
      } catch (error) {
        debugError(error);
      }
    }));
  }
  get #connection() {
    return this.#frame.page().browser().connection;
  }
  #handleMessage = async (params) => {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
      if (params.channel !== this.#channel) {
        return;
      }
      const realm = this.#getRealm(params.source);
      if (!realm) {
        return;
      }
      const dataHandle = __addDisposableResource2(env_1, BidiJSHandle.from(params.data, realm), false);
      const argsHandle = __addDisposableResource2(env_1, await dataHandle.evaluateHandle(([, , args2]) => {
        return args2;
      }), false);
      const stack = __addDisposableResource2(env_1, new DisposableStack(), false);
      const args = [];
      for (const [index, handle] of await argsHandle.getProperties()) {
        stack.use(handle);
        if (handle instanceof BidiElementHandle) {
          args[+index] = handle;
          stack.use(handle);
          continue;
        }
        args[+index] = handle.jsonValue();
      }
      let result;
      try {
        result = await this.#apply(...await Promise.all(args));
      } catch (error) {
        try {
          if (error instanceof Error) {
            await dataHandle.evaluate(([, reject], name, message, stack2) => {
              const error2 = new Error(message);
              error2.name = name;
              if (stack2) {
                error2.stack = stack2;
              }
              reject(error2);
            }, error.name, error.message, error.stack);
          } else {
            await dataHandle.evaluate(([, reject], error2) => {
              reject(error2);
            }, error);
          }
        } catch (error2) {
          debugError(error2);
        }
        return;
      }
      try {
        await dataHandle.evaluate(([resolve], result2) => {
          resolve(result2);
        }, result);
      } catch (error) {
        debugError(error);
      }
    } catch (e_1) {
      env_1.error = e_1;
      env_1.hasError = true;
    } finally {
      __disposeResources2(env_1);
    }
  };
  #getRealm(source) {
    const frame = this.#findFrame(source.context);
    if (!frame) {
      return;
    }
    return frame.realm(source.realm);
  }
  #findFrame(id) {
    const frames = [this.#frame];
    for (const frame of frames) {
      if (frame._id === id) {
        return frame;
      }
      frames.push(...frame.childFrames());
    }
    return;
  }
  [Symbol.dispose]() {
    void this[Symbol.asyncDispose]().catch(debugError);
  }
  async [Symbol.asyncDispose]() {
    this.#disposables.dispose();
    await Promise.all(this.#scripts.map(async ([frame, script]) => {
      const realm = this.#isolate ? frame.isolatedRealm() : frame.mainRealm();
      try {
        await Promise.all([
          realm.evaluate((name) => {
            delete globalThis[name];
          }, this.name),
          ...frame.childFrames().map((childFrame) => {
            return childFrame.evaluate((name) => {
              delete globalThis[name];
            }, this.name);
          }),
          frame.browsingContext.removePreloadScript(script)
        ]);
      } catch (error) {
        debugError(error);
      }
    }));
  }
};

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/HTTPRequest.js
init_esm();

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/HTTPResponse.js
init_esm();
var __runInitializers8 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate8 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var BidiHTTPResponse = (() => {
  let _classSuper = HTTPResponse;
  let _instanceExtraInitializers = [];
  let _remoteAddress_decorators;
  return class BidiHTTPResponse2 extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      _remoteAddress_decorators = [invokeAtMostOnceForArguments];
      __esDecorate8(this, null, _remoteAddress_decorators, { kind: "method", name: "remoteAddress", static: false, private: false, access: { has: (obj) => "remoteAddress" in obj, get: (obj) => obj.remoteAddress }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    }
    static from(data, request, cdpSupported) {
      const response = new BidiHTTPResponse2(data, request, cdpSupported);
      response.#initialize();
      return response;
    }
    #data = __runInitializers8(this, _instanceExtraInitializers);
    #request;
    #securityDetails;
    #cdpSupported = false;
    constructor(data, request, cdpSupported) {
      super();
      this.#data = data;
      this.#request = request;
      this.#cdpSupported = cdpSupported;
      const securityDetails = data["goog:securityDetails"];
      if (cdpSupported && securityDetails) {
        this.#securityDetails = new SecurityDetails(securityDetails);
      }
    }
    #initialize() {
      if (this.#data.fromCache) {
        this.#request._fromMemoryCache = true;
        this.#request.frame()?.page().trustedEmitter.emit("requestservedfromcache", this.#request);
      }
      this.#request.frame()?.page().trustedEmitter.emit("response", this);
    }
    remoteAddress() {
      return {
        ip: "",
        port: -1
      };
    }
    url() {
      return this.#data.url;
    }
    status() {
      return this.#data.status;
    }
    statusText() {
      return this.#data.statusText;
    }
    headers() {
      const headers = {};
      for (const header of this.#data.headers) {
        if (header.value.type === "string") {
          headers[header.name.toLowerCase()] = header.value.value;
        }
      }
      return headers;
    }
    request() {
      return this.#request;
    }
    fromCache() {
      return this.#data.fromCache;
    }
    timing() {
      const bidiTiming = this.#request.timing();
      return {
        requestTime: bidiTiming.requestTime,
        proxyStart: -1,
        proxyEnd: -1,
        dnsStart: bidiTiming.dnsStart,
        dnsEnd: bidiTiming.dnsEnd,
        connectStart: bidiTiming.connectStart,
        connectEnd: bidiTiming.connectEnd,
        sslStart: bidiTiming.tlsStart,
        sslEnd: -1,
        workerStart: -1,
        workerReady: -1,
        workerFetchStart: -1,
        workerRespondWithSettled: -1,
        workerRouterEvaluationStart: -1,
        workerCacheLookupStart: -1,
        sendStart: bidiTiming.requestStart,
        sendEnd: -1,
        pushStart: -1,
        pushEnd: -1,
        receiveHeadersStart: bidiTiming.responseStart,
        receiveHeadersEnd: bidiTiming.responseEnd
      };
    }
    frame() {
      return this.#request.frame();
    }
    fromServiceWorker() {
      return false;
    }
    securityDetails() {
      if (!this.#cdpSupported) {
        throw new UnsupportedOperation();
      }
      return this.#securityDetails ?? null;
    }
    content() {
      throw new UnsupportedOperation();
    }
  };
})();

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/HTTPRequest.js
var _a2;
var requests = /* @__PURE__ */ new WeakMap();
var BidiHTTPRequest = class extends HTTPRequest {
  static from(bidiRequest, frame, redirect) {
    const request = new _a2(bidiRequest, frame, redirect);
    request.#initialize();
    return request;
  }
  #redirectChain;
  #response = null;
  id;
  #frame;
  #request;
  constructor(request, frame, redirect) {
    super();
    requests.set(request, this);
    this.interception.enabled = request.isBlocked;
    this.#request = request;
    this.#frame = frame;
    this.#redirectChain = redirect ? redirect.#redirectChain : [];
    this.id = request.id;
  }
  get client() {
    return this.#frame.client;
  }
  #initialize() {
    this.#request.on("redirect", (request) => {
      const httpRequest = _a2.from(request, this.#frame, this);
      this.#redirectChain.push(this);
      request.once("success", () => {
        this.#frame.page().trustedEmitter.emit("requestfinished", httpRequest);
      });
      request.once("error", () => {
        this.#frame.page().trustedEmitter.emit("requestfailed", httpRequest);
      });
      void httpRequest.finalizeInterceptions();
    });
    this.#request.once("success", (data) => {
      this.#response = BidiHTTPResponse.from(data, this, this.#frame.page().browser().cdpSupported);
    });
    this.#request.on("authenticate", this.#handleAuthentication);
    this.#frame.page().trustedEmitter.emit("request", this);
    if (this.#hasInternalHeaderOverwrite) {
      this.interception.handlers.push(async () => {
        await this.continue({
          headers: this.headers()
        }, 0);
      });
    }
  }
  url() {
    return this.#request.url;
  }
  resourceType() {
    if (!this.#frame.page().browser().cdpSupported) {
      throw new UnsupportedOperation();
    }
    return (this.#request.resourceType || "other").toLowerCase();
  }
  method() {
    return this.#request.method;
  }
  postData() {
    if (!this.#frame.page().browser().cdpSupported) {
      throw new UnsupportedOperation();
    }
    return this.#request.postData;
  }
  hasPostData() {
    if (!this.#frame.page().browser().cdpSupported) {
      throw new UnsupportedOperation();
    }
    return this.#request.hasPostData;
  }
  async fetchPostData() {
    throw new UnsupportedOperation();
  }
  get #hasInternalHeaderOverwrite() {
    return Boolean(Object.keys(this.#extraHTTPHeaders).length || Object.keys(this.#userAgentHeaders).length);
  }
  get #extraHTTPHeaders() {
    return this.#frame?.page()._extraHTTPHeaders ?? {};
  }
  get #userAgentHeaders() {
    return this.#frame?.page()._userAgentHeaders ?? {};
  }
  headers() {
    const headers = {};
    for (const header of this.#request.headers) {
      headers[header.name.toLowerCase()] = header.value.value;
    }
    return {
      ...headers,
      ...this.#extraHTTPHeaders,
      ...this.#userAgentHeaders
    };
  }
  response() {
    return this.#response;
  }
  failure() {
    if (this.#request.error === void 0) {
      return null;
    }
    return { errorText: this.#request.error };
  }
  isNavigationRequest() {
    return this.#request.navigation !== void 0;
  }
  initiator() {
    return {
      ...this.#request.initiator,
      type: this.#request.initiator?.type ?? "other"
    };
  }
  redirectChain() {
    return this.#redirectChain.slice();
  }
  frame() {
    return this.#frame;
  }
  async continue(overrides, priority) {
    return await super.continue({
      headers: this.#hasInternalHeaderOverwrite ? this.headers() : void 0,
      ...overrides
    }, priority);
  }
  async _continue(overrides = {}) {
    const headers = getBidiHeaders(overrides.headers);
    this.interception.handled = true;
    return await this.#request.continueRequest({
      url: overrides.url,
      method: overrides.method,
      body: overrides.postData ? {
        type: "base64",
        value: stringToBase64(overrides.postData)
      } : void 0,
      headers: headers.length > 0 ? headers : void 0
    }).catch((error) => {
      this.interception.handled = false;
      return handleError(error);
    });
  }
  async _abort() {
    this.interception.handled = true;
    return await this.#request.failRequest().catch((error) => {
      this.interception.handled = false;
      throw error;
    });
  }
  async _respond(response, _priority) {
    this.interception.handled = true;
    let parsedBody;
    if (response.body) {
      parsedBody = HTTPRequest.getResponse(response.body);
    }
    const headers = getBidiHeaders(response.headers);
    const hasContentLength = headers.some((header) => {
      return header.name === "content-length";
    });
    if (response.contentType) {
      headers.push({
        name: "content-type",
        value: {
          type: "string",
          value: response.contentType
        }
      });
    }
    if (parsedBody?.contentLength && !hasContentLength) {
      headers.push({
        name: "content-length",
        value: {
          type: "string",
          value: String(parsedBody.contentLength)
        }
      });
    }
    const status = response.status || 200;
    return await this.#request.provideResponse({
      statusCode: status,
      headers: headers.length > 0 ? headers : void 0,
      reasonPhrase: STATUS_TEXTS[status],
      body: parsedBody?.base64 ? {
        type: "base64",
        value: parsedBody?.base64
      } : void 0
    }).catch((error) => {
      this.interception.handled = false;
      throw error;
    });
  }
  #authenticationHandled = false;
  #handleAuthentication = async () => {
    if (!this.#frame) {
      return;
    }
    const credentials = this.#frame.page()._credentials;
    if (credentials && !this.#authenticationHandled) {
      this.#authenticationHandled = true;
      void this.#request.continueWithAuth({
        action: "provideCredentials",
        credentials: {
          type: "password",
          username: credentials.username,
          password: credentials.password
        }
      });
    } else {
      void this.#request.continueWithAuth({
        action: "cancel"
      });
    }
  };
  timing() {
    return this.#request.timing();
  }
};
_a2 = BidiHTTPRequest;
function getBidiHeaders(rawHeaders) {
  const headers = [];
  for (const [name, value] of Object.entries(rawHeaders ?? [])) {
    if (!Object.is(value, void 0)) {
      const values = Array.isArray(value) ? value : [value];
      for (const value2 of values) {
        headers.push({
          name: name.toLowerCase(),
          value: {
            type: "string",
            value: String(value2)
          }
        });
      }
    }
  }
  return headers;
}

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/Realm.js
init_esm();

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/Serializer.js
init_esm();
var UnserializableError = class extends Error {
};
var BidiSerializer = class {
  static serialize(arg) {
    switch (typeof arg) {
      case "symbol":
      case "function":
        throw new UnserializableError(`Unable to serializable ${typeof arg}`);
      case "object":
        return this.#serializeObject(arg);
      case "undefined":
        return {
          type: "undefined"
        };
      case "number":
        return this.#serializeNumber(arg);
      case "bigint":
        return {
          type: "bigint",
          value: arg.toString()
        };
      case "string":
        return {
          type: "string",
          value: arg
        };
      case "boolean":
        return {
          type: "boolean",
          value: arg
        };
    }
  }
  static #serializeNumber(arg) {
    let value;
    if (Object.is(arg, -0)) {
      value = "-0";
    } else if (Object.is(arg, Infinity)) {
      value = "Infinity";
    } else if (Object.is(arg, -Infinity)) {
      value = "-Infinity";
    } else if (Object.is(arg, NaN)) {
      value = "NaN";
    } else {
      value = arg;
    }
    return {
      type: "number",
      value
    };
  }
  static #serializeObject(arg) {
    if (arg === null) {
      return {
        type: "null"
      };
    } else if (Array.isArray(arg)) {
      const parsedArray = arg.map((subArg) => {
        return this.serialize(subArg);
      });
      return {
        type: "array",
        value: parsedArray
      };
    } else if (isPlainObject(arg)) {
      try {
        JSON.stringify(arg);
      } catch (error) {
        if (error instanceof TypeError && error.message.startsWith("Converting circular structure to JSON")) {
          error.message += " Recursive objects are not allowed.";
        }
        throw error;
      }
      const parsedObject = [];
      for (const key in arg) {
        parsedObject.push([this.serialize(key), this.serialize(arg[key])]);
      }
      return {
        type: "object",
        value: parsedObject
      };
    } else if (isRegExp(arg)) {
      return {
        type: "regexp",
        value: {
          pattern: arg.source,
          flags: arg.flags
        }
      };
    } else if (isDate(arg)) {
      return {
        type: "date",
        value: arg.toISOString()
      };
    }
    throw new UnserializableError("Custom object serialization not possible. Use plain objects instead.");
  }
};

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/util.js
init_esm();
function createEvaluationError(details) {
  if (details.exception.type !== "error") {
    return BidiDeserializer.deserialize(details.exception);
  }
  const [name = "", ...parts] = details.text.split(": ");
  const message = parts.join(": ");
  const error = new Error(message);
  error.name = name;
  const stackLines = [];
  if (details.stackTrace && stackLines.length < Error.stackTraceLimit) {
    for (const frame of details.stackTrace.callFrames.reverse()) {
      if (PuppeteerURL.isPuppeteerURL(frame.url) && frame.url !== PuppeteerURL.INTERNAL_URL) {
        const url = PuppeteerURL.parse(frame.url);
        stackLines.unshift(`    at ${frame.functionName || url.functionName} (${url.functionName} at ${url.siteString}, <anonymous>:${frame.lineNumber}:${frame.columnNumber})`);
      } else {
        stackLines.push(`    at ${frame.functionName || "<anonymous>"} (${frame.url}:${frame.lineNumber}:${frame.columnNumber})`);
      }
      if (stackLines.length >= Error.stackTraceLimit) {
        break;
      }
    }
  }
  error.stack = [details.text, ...stackLines].join("\n");
  return error;
}
function rewriteNavigationError(message, ms) {
  return (error) => {
    if (error instanceof ProtocolError) {
      error.message += ` at ${message}`;
    } else if (error instanceof TimeoutError) {
      error.message = `Navigation timeout of ${ms} ms exceeded`;
    }
    throw error;
  };
}

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/Realm.js
var __addDisposableResource3 = function(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
};
var __disposeResources3 = /* @__PURE__ */ function(SuppressedError2) {
  return function(env) {
    function fail(e) {
      env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    var r, s = 0;
    function next() {
      while (r = env.stack.pop()) {
        try {
          if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
          if (r.dispose) {
            var result = r.dispose.call(r.value);
            if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
          } else s |= 1;
        } catch (e) {
          fail(e);
        }
      }
      if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
      if (env.hasError) throw env.error;
    }
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
var BidiRealm = class extends Realm {
  realm;
  constructor(realm, timeoutSettings) {
    super(timeoutSettings);
    this.realm = realm;
  }
  initialize() {
    this.realm.on("destroyed", ({ reason }) => {
      this.taskManager.terminateAll(new Error(reason));
      this.dispose();
    });
    this.realm.on("updated", () => {
      this.internalPuppeteerUtil = void 0;
      void this.taskManager.rerunAll();
    });
  }
  internalPuppeteerUtil;
  get puppeteerUtil() {
    const promise = Promise.resolve();
    scriptInjector.inject((script) => {
      if (this.internalPuppeteerUtil) {
        void this.internalPuppeteerUtil.then((handle) => {
          void handle.dispose();
        });
      }
      this.internalPuppeteerUtil = promise.then(() => {
        return this.evaluateHandle(script);
      });
    }, !this.internalPuppeteerUtil);
    return this.internalPuppeteerUtil;
  }
  async evaluateHandle(pageFunction, ...args) {
    return await this.#evaluate(false, pageFunction, ...args);
  }
  async evaluate(pageFunction, ...args) {
    return await this.#evaluate(true, pageFunction, ...args);
  }
  async #evaluate(returnByValue, pageFunction, ...args) {
    const sourceUrlComment = getSourceUrlComment(getSourcePuppeteerURLIfAvailable(pageFunction)?.toString() ?? PuppeteerURL.INTERNAL_URL);
    let responsePromise;
    const resultOwnership = returnByValue ? "none" : "root";
    const serializationOptions = returnByValue ? {} : {
      maxObjectDepth: 0,
      maxDomDepth: 0
    };
    if (isString(pageFunction)) {
      const expression = SOURCE_URL_REGEX.test(pageFunction) ? pageFunction : `${pageFunction}
${sourceUrlComment}
`;
      responsePromise = this.realm.evaluate(expression, true, {
        resultOwnership,
        userActivation: true,
        serializationOptions
      });
    } else {
      let functionDeclaration = stringifyFunction(pageFunction);
      functionDeclaration = SOURCE_URL_REGEX.test(functionDeclaration) ? functionDeclaration : `${functionDeclaration}
${sourceUrlComment}
`;
      responsePromise = this.realm.callFunction(
        functionDeclaration,
        /* awaitPromise= */
        true,
        {
          // LazyArgs are used only internally and should not affect the order
          // evaluate calls for the public APIs.
          arguments: args.some((arg) => {
            return arg instanceof LazyArg;
          }) ? await Promise.all(args.map((arg) => {
            return this.serializeAsync(arg);
          })) : args.map((arg) => {
            return this.serialize(arg);
          }),
          resultOwnership,
          userActivation: true,
          serializationOptions
        }
      );
    }
    const result = await responsePromise;
    if ("type" in result && result.type === "exception") {
      throw createEvaluationError(result.exceptionDetails);
    }
    return returnByValue ? BidiDeserializer.deserialize(result.result) : this.createHandle(result.result);
  }
  createHandle(result) {
    if ((result.type === "node" || result.type === "window") && this instanceof BidiFrameRealm) {
      return BidiElementHandle.from(result, this);
    }
    return BidiJSHandle.from(result, this);
  }
  async serializeAsync(arg) {
    if (arg instanceof LazyArg) {
      arg = await arg.get(this);
    }
    return this.serialize(arg);
  }
  serialize(arg) {
    if (arg instanceof BidiJSHandle || arg instanceof BidiElementHandle) {
      if (arg.realm !== this) {
        if (!(arg.realm instanceof BidiFrameRealm) || !(this instanceof BidiFrameRealm)) {
          throw new Error("Trying to evaluate JSHandle from different global types. Usually this means you're using a handle from a worker in a page or vice versa.");
        }
        if (arg.realm.environment !== this.environment) {
          throw new Error("Trying to evaluate JSHandle from different frames. Usually this means you're using a handle from a page on a different page.");
        }
      }
      if (arg.disposed) {
        throw new Error("JSHandle is disposed!");
      }
      return arg.remoteValue();
    }
    return BidiSerializer.serialize(arg);
  }
  async destroyHandles(handles) {
    if (this.disposed) {
      return;
    }
    const handleIds = handles.map(({ id }) => {
      return id;
    }).filter((id) => {
      return id !== void 0;
    });
    if (handleIds.length === 0) {
      return;
    }
    await this.realm.disown(handleIds).catch((error) => {
      debugError(error);
    });
  }
  async adoptHandle(handle) {
    return await this.evaluateHandle((node) => {
      return node;
    }, handle);
  }
  async transferHandle(handle) {
    if (handle.realm === this) {
      return handle;
    }
    const transferredHandle = this.adoptHandle(handle);
    await handle.dispose();
    return await transferredHandle;
  }
};
var BidiFrameRealm = class _BidiFrameRealm extends BidiRealm {
  static from(realm, frame) {
    const frameRealm = new _BidiFrameRealm(realm, frame);
    frameRealm.#initialize();
    return frameRealm;
  }
  #frame;
  constructor(realm, frame) {
    super(realm, frame.timeoutSettings);
    this.#frame = frame;
  }
  #initialize() {
    super.initialize();
    this.realm.on("updated", () => {
      this.environment.clearDocumentHandle();
      this.#bindingsInstalled = false;
    });
  }
  #bindingsInstalled = false;
  get puppeteerUtil() {
    let promise = Promise.resolve();
    if (!this.#bindingsInstalled) {
      promise = Promise.all([
        ExposeableFunction.from(this.environment, "__ariaQuerySelector", ARIAQueryHandler.queryOne, !!this.sandbox),
        ExposeableFunction.from(this.environment, "__ariaQuerySelectorAll", async (element, selector) => {
          const results = ARIAQueryHandler.queryAll(element, selector);
          return await element.realm.evaluateHandle((...elements) => {
            return elements;
          }, ...await AsyncIterableUtil.collect(results));
        }, !!this.sandbox)
      ]);
      this.#bindingsInstalled = true;
    }
    return promise.then(() => {
      return super.puppeteerUtil;
    });
  }
  get sandbox() {
    return this.realm.sandbox;
  }
  get environment() {
    return this.#frame;
  }
  async adoptBackendNode(backendNodeId) {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
      const { object } = await this.#frame.client.send("DOM.resolveNode", {
        backendNodeId,
        executionContextId: await this.realm.resolveExecutionContextId()
      });
      const handle = __addDisposableResource3(env_1, BidiElementHandle.from({
        handle: object.objectId,
        type: "node"
      }, this), false);
      return await handle.evaluateHandle((element) => {
        return element;
      });
    } catch (e_1) {
      env_1.error = e_1;
      env_1.hasError = true;
    } finally {
      __disposeResources3(env_1);
    }
  }
};
var BidiWorkerRealm = class _BidiWorkerRealm extends BidiRealm {
  static from(realm, worker) {
    const workerRealm = new _BidiWorkerRealm(realm, worker);
    workerRealm.initialize();
    return workerRealm;
  }
  #worker;
  constructor(realm, frame) {
    super(realm, frame.timeoutSettings);
    this.#worker = frame;
  }
  get environment() {
    return this.#worker;
  }
  async adoptBackendNode() {
    throw new Error("Cannot adopt DOM nodes into a worker.");
  }
};

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/WebWorker.js
init_esm();
var BidiWebWorker = class _BidiWebWorker extends WebWorker {
  static from(frame, realm) {
    const worker = new _BidiWebWorker(frame, realm);
    return worker;
  }
  #frame;
  #realm;
  constructor(frame, realm) {
    super(realm.origin);
    this.#frame = frame;
    this.#realm = BidiWorkerRealm.from(realm, this);
  }
  get frame() {
    return this.#frame;
  }
  mainRealm() {
    return this.#realm;
  }
  get client() {
    throw new UnsupportedOperation();
  }
};

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/Frame.js
var __runInitializers9 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate9 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __setFunctionName = function(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
function convertConsoleMessageLevel(method) {
  switch (method) {
    case "group":
      return "startGroup";
    case "groupCollapsed":
      return "startGroupCollapsed";
    case "groupEnd":
      return "endGroup";
    default:
      return method;
  }
}
var BidiFrame = (() => {
  var _a3;
  let _classSuper = Frame;
  let _instanceExtraInitializers = [];
  let _goto_decorators;
  let _setContent_decorators;
  let _waitForNavigation_decorators;
  let _private_waitForLoad$_decorators;
  let _private_waitForLoad$_descriptor;
  let _private_waitForNetworkIdle$_decorators;
  let _private_waitForNetworkIdle$_descriptor;
  let _setFiles_decorators;
  let _locateNodes_decorators;
  return class BidiFrame2 extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      _goto_decorators = [throwIfDetached];
      _setContent_decorators = [throwIfDetached];
      _waitForNavigation_decorators = [throwIfDetached];
      _private_waitForLoad$_decorators = [throwIfDetached];
      _private_waitForNetworkIdle$_decorators = [throwIfDetached];
      _setFiles_decorators = [throwIfDetached];
      _locateNodes_decorators = [throwIfDetached];
      __esDecorate9(this, null, _goto_decorators, { kind: "method", name: "goto", static: false, private: false, access: { has: (obj) => "goto" in obj, get: (obj) => obj.goto }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate9(this, null, _setContent_decorators, { kind: "method", name: "setContent", static: false, private: false, access: { has: (obj) => "setContent" in obj, get: (obj) => obj.setContent }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate9(this, null, _waitForNavigation_decorators, { kind: "method", name: "waitForNavigation", static: false, private: false, access: { has: (obj) => "waitForNavigation" in obj, get: (obj) => obj.waitForNavigation }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate9(this, _private_waitForLoad$_descriptor = { value: __setFunctionName(function(options = {}) {
        let { waitUntil = "load" } = options;
        const { timeout: ms = this.timeoutSettings.navigationTimeout() } = options;
        if (!Array.isArray(waitUntil)) {
          waitUntil = [waitUntil];
        }
        const events = /* @__PURE__ */ new Set();
        for (const lifecycleEvent of waitUntil) {
          switch (lifecycleEvent) {
            case "load": {
              events.add("load");
              break;
            }
            case "domcontentloaded": {
              events.add("DOMContentLoaded");
              break;
            }
          }
        }
        if (events.size === 0) {
          return of(void 0);
        }
        return combineLatest([...events].map((event) => {
          return fromEmitterEvent(this.browsingContext, event);
        })).pipe(map(() => {
        }), first(), raceWith(timeout(ms), this.#detached$().pipe(map(() => {
          throw new Error("Frame detached.");
        }))));
      }, "#waitForLoad$") }, _private_waitForLoad$_decorators, { kind: "method", name: "#waitForLoad$", static: false, private: true, access: { has: (obj) => #waitForLoad$ in obj, get: (obj) => obj.#waitForLoad$ }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate9(this, _private_waitForNetworkIdle$_descriptor = { value: __setFunctionName(function(options = {}) {
        let { waitUntil = "load" } = options;
        if (!Array.isArray(waitUntil)) {
          waitUntil = [waitUntil];
        }
        let concurrency = Infinity;
        for (const event of waitUntil) {
          switch (event) {
            case "networkidle0": {
              concurrency = Math.min(0, concurrency);
              break;
            }
            case "networkidle2": {
              concurrency = Math.min(2, concurrency);
              break;
            }
          }
        }
        if (concurrency === Infinity) {
          return of(void 0);
        }
        return this.page().waitForNetworkIdle$({
          idleTime: 500,
          timeout: options.timeout ?? this.timeoutSettings.timeout(),
          concurrency
        });
      }, "#waitForNetworkIdle$") }, _private_waitForNetworkIdle$_decorators, { kind: "method", name: "#waitForNetworkIdle$", static: false, private: true, access: { has: (obj) => #waitForNetworkIdle$ in obj, get: (obj) => obj.#waitForNetworkIdle$ }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate9(this, null, _setFiles_decorators, { kind: "method", name: "setFiles", static: false, private: false, access: { has: (obj) => "setFiles" in obj, get: (obj) => obj.setFiles }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate9(this, null, _locateNodes_decorators, { kind: "method", name: "locateNodes", static: false, private: false, access: { has: (obj) => "locateNodes" in obj, get: (obj) => obj.locateNodes }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    }
    static from(parent, browsingContext) {
      const frame = new BidiFrame2(parent, browsingContext);
      frame.#initialize();
      return frame;
    }
    #parent = __runInitializers9(this, _instanceExtraInitializers);
    browsingContext;
    #frames = /* @__PURE__ */ new WeakMap();
    realms;
    _id;
    client;
    accessibility;
    constructor(parent, browsingContext) {
      super();
      this.#parent = parent;
      this.browsingContext = browsingContext;
      this._id = browsingContext.id;
      this.client = new BidiCdpSession(this);
      this.realms = {
        default: BidiFrameRealm.from(this.browsingContext.defaultRealm, this),
        internal: BidiFrameRealm.from(this.browsingContext.createWindowRealm(`__puppeteer_internal_${Math.ceil(Math.random() * 1e4)}`), this)
      };
      this.accessibility = new Accessibility(this.realms.default, this._id);
    }
    #initialize() {
      for (const browsingContext of this.browsingContext.children) {
        this.#createFrameTarget(browsingContext);
      }
      this.browsingContext.on("browsingcontext", ({ browsingContext }) => {
        this.#createFrameTarget(browsingContext);
      });
      this.browsingContext.on("closed", () => {
        for (const session of BidiCdpSession.sessions.values()) {
          if (session.frame === this) {
            session.onClose();
          }
        }
        this.page().trustedEmitter.emit("framedetached", this);
      });
      this.browsingContext.on("request", ({ request }) => {
        const httpRequest = BidiHTTPRequest.from(request, this);
        request.once("success", () => {
          this.page().trustedEmitter.emit("requestfinished", httpRequest);
        });
        request.once("error", () => {
          this.page().trustedEmitter.emit("requestfailed", httpRequest);
        });
        void httpRequest.finalizeInterceptions();
      });
      this.browsingContext.on("navigation", ({ navigation }) => {
        navigation.once("fragment", () => {
          this.page().trustedEmitter.emit("framenavigated", this);
        });
      });
      this.browsingContext.on("load", () => {
        this.page().trustedEmitter.emit("load", void 0);
      });
      this.browsingContext.on("DOMContentLoaded", () => {
        this._hasStartedLoading = true;
        this.page().trustedEmitter.emit("domcontentloaded", void 0);
        this.page().trustedEmitter.emit("framenavigated", this);
      });
      this.browsingContext.on("userprompt", ({ userPrompt }) => {
        this.page().trustedEmitter.emit("dialog", BidiDialog.from(userPrompt));
      });
      this.browsingContext.on("log", ({ entry }) => {
        if (this._id !== entry.source.context) {
          return;
        }
        if (isConsoleLogEntry(entry)) {
          const args = entry.args.map((arg) => {
            return this.mainRealm().createHandle(arg);
          });
          const text = args.reduce((value, arg) => {
            const parsedValue = arg instanceof BidiJSHandle && arg.isPrimitiveValue ? BidiDeserializer.deserialize(arg.remoteValue()) : arg.toString();
            return `${value} ${parsedValue}`;
          }, "").slice(1);
          this.page().trustedEmitter.emit("console", new ConsoleMessage(convertConsoleMessageLevel(entry.method), text, args, getStackTraceLocations(entry.stackTrace), this));
        } else if (isJavaScriptLogEntry(entry)) {
          const error = new Error(entry.text ?? "");
          const messageHeight = error.message.split("\n").length;
          const messageLines = error.stack.split("\n").splice(0, messageHeight);
          const stackLines = [];
          if (entry.stackTrace) {
            for (const frame of entry.stackTrace.callFrames) {
              stackLines.push(`    at ${frame.functionName || "<anonymous>"} (${frame.url}:${frame.lineNumber + 1}:${frame.columnNumber + 1})`);
              if (stackLines.length >= Error.stackTraceLimit) {
                break;
              }
            }
          }
          error.stack = [...messageLines, ...stackLines].join("\n");
          this.page().trustedEmitter.emit("pageerror", error);
        } else {
          debugError(`Unhandled LogEntry with type "${entry.type}", text "${entry.text}" and level "${entry.level}"`);
        }
      });
      this.browsingContext.on("worker", ({ realm }) => {
        const worker = BidiWebWorker.from(this, realm);
        realm.on("destroyed", () => {
          this.page().trustedEmitter.emit("workerdestroyed", worker);
        });
        this.page().trustedEmitter.emit("workercreated", worker);
      });
    }
    #createFrameTarget(browsingContext) {
      const frame = BidiFrame2.from(this, browsingContext);
      this.#frames.set(browsingContext, frame);
      this.page().trustedEmitter.emit("frameattached", frame);
      browsingContext.on("closed", () => {
        this.#frames.delete(browsingContext);
      });
      return frame;
    }
    get timeoutSettings() {
      return this.page()._timeoutSettings;
    }
    mainRealm() {
      return this.realms.default;
    }
    isolatedRealm() {
      return this.realms.internal;
    }
    realm(id) {
      for (const realm of Object.values(this.realms)) {
        if (realm.realm.id === id) {
          return realm;
        }
      }
      return;
    }
    page() {
      let parent = this.#parent;
      while (parent instanceof BidiFrame2) {
        parent = parent.#parent;
      }
      return parent;
    }
    url() {
      return this.browsingContext.url;
    }
    parentFrame() {
      if (this.#parent instanceof BidiFrame2) {
        return this.#parent;
      }
      return null;
    }
    childFrames() {
      return [...this.browsingContext.children].map((child) => {
        return this.#frames.get(child);
      });
    }
    #detached$() {
      return defer(() => {
        if (this.detached) {
          return of(this);
        }
        return fromEmitterEvent(
          this.page().trustedEmitter,
          "framedetached"
          /* PageEvent.FrameDetached */
        ).pipe(filter((detachedFrame) => {
          return detachedFrame === this;
        }));
      });
    }
    async goto(url, options = {}) {
      const [response] = await Promise.all([
        this.waitForNavigation(options),
        // Some implementations currently only report errors when the
        // readiness=interactive.
        //
        // Related: https://bugzilla.mozilla.org/show_bug.cgi?id=1846601
        this.browsingContext.navigate(
          url,
          "interactive"
          /* Bidi.BrowsingContext.ReadinessState.Interactive */
        ).catch((error) => {
          if (isErrorLike(error) && error.message.includes("net::ERR_HTTP_RESPONSE_CODE_FAILURE")) {
            return;
          }
          if (error.message.includes("navigation canceled")) {
            return;
          }
          if (error.message.includes("Navigation was aborted by another navigation")) {
            return;
          }
          throw error;
        })
      ]).catch(rewriteNavigationError(url, options.timeout ?? this.timeoutSettings.navigationTimeout()));
      return response;
    }
    async setContent(html, options = {}) {
      await Promise.all([
        this.setFrameContent(html),
        firstValueFrom(combineLatest([
          this.#waitForLoad$(options),
          this.#waitForNetworkIdle$(options)
        ]))
      ]);
    }
    async waitForNavigation(options = {}) {
      const { timeout: ms = this.timeoutSettings.navigationTimeout(), signal } = options;
      const frames = this.childFrames().map((frame) => {
        return frame.#detached$();
      });
      return await firstValueFrom(combineLatest([
        race(fromEmitterEvent(this.browsingContext, "navigation"), fromEmitterEvent(this.browsingContext, "historyUpdated").pipe(map(() => {
          return { navigation: null };
        }))).pipe(first()).pipe(switchMap(({ navigation }) => {
          if (navigation === null) {
            return of(null);
          }
          return this.#waitForLoad$(options).pipe(delayWhen(() => {
            if (frames.length === 0) {
              return of(void 0);
            }
            return combineLatest(frames);
          }), raceWith(fromEmitterEvent(navigation, "fragment"), fromEmitterEvent(navigation, "failed"), fromEmitterEvent(navigation, "aborted").pipe(map(({ url }) => {
            throw new Error(`Navigation aborted: ${url}`);
          }))), switchMap(() => {
            if (navigation.request) {
              let requestFinished$ = function(request) {
                if (navigation === null) {
                  return of(null);
                }
                if (request.response || request.error) {
                  return of(navigation);
                }
                if (request.redirect) {
                  return requestFinished$(request.redirect);
                }
                return fromEmitterEvent(request, "success").pipe(raceWith(fromEmitterEvent(request, "error")), raceWith(fromEmitterEvent(request, "redirect"))).pipe(switchMap(() => {
                  return requestFinished$(request);
                }));
              };
              return requestFinished$(navigation.request);
            }
            return of(navigation);
          }));
        })),
        this.#waitForNetworkIdle$(options)
      ]).pipe(map(([navigation]) => {
        if (!navigation) {
          return null;
        }
        const request = navigation.request;
        if (!request) {
          return null;
        }
        const lastRequest = request.lastRedirect ?? request;
        const httpRequest = requests.get(lastRequest);
        return httpRequest.response();
      }), raceWith(timeout(ms), fromAbortSignal(signal), this.#detached$().pipe(map(() => {
        throw new TargetCloseError("Frame detached.");
      })))));
    }
    waitForDevicePrompt() {
      throw new UnsupportedOperation();
    }
    get detached() {
      return this.browsingContext.closed;
    }
    #exposedFunctions = /* @__PURE__ */ new Map();
    async exposeFunction(name, apply) {
      if (this.#exposedFunctions.has(name)) {
        throw new Error(`Failed to add page binding with name ${name}: globalThis['${name}'] already exists!`);
      }
      const exposeable = await ExposeableFunction.from(this, name, apply);
      this.#exposedFunctions.set(name, exposeable);
    }
    async removeExposedFunction(name) {
      const exposedFunction = this.#exposedFunctions.get(name);
      if (!exposedFunction) {
        throw new Error(`Failed to remove page binding with name ${name}: window['${name}'] does not exists!`);
      }
      this.#exposedFunctions.delete(name);
      await exposedFunction[Symbol.asyncDispose]();
    }
    async createCDPSession() {
      if (!this.page().browser().cdpSupported) {
        throw new UnsupportedOperation();
      }
      const cdpConnection = this.page().browser().cdpConnection;
      return await cdpConnection._createSession({ targetId: this._id });
    }
    get #waitForLoad$() {
      return _private_waitForLoad$_descriptor.value;
    }
    get #waitForNetworkIdle$() {
      return _private_waitForNetworkIdle$_descriptor.value;
    }
    async setFiles(element, files) {
      await this.browsingContext.setFiles(
        // SAFETY: ElementHandles are always remote references.
        element.remoteValue(),
        files
      );
    }
    async locateNodes(element, locator) {
      return await this.browsingContext.locateNodes(
        locator,
        // SAFETY: ElementHandles are always remote references.
        [element.remoteValue()]
      );
    }
  };
})();
function isConsoleLogEntry(event) {
  return event.type === "console";
}
function isJavaScriptLogEntry(event) {
  return event.type === "javascript";
}
function getStackTraceLocations(stackTrace) {
  const stackTraceLocations = [];
  if (stackTrace) {
    for (const callFrame of stackTrace.callFrames) {
      stackTraceLocations.push({
        url: callFrame.url,
        lineNumber: callFrame.lineNumber,
        columnNumber: callFrame.columnNumber
      });
    }
  }
  return stackTraceLocations;
}

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/Input.js
init_esm();
var SourceActionsType;
(function(SourceActionsType2) {
  SourceActionsType2["None"] = "none";
  SourceActionsType2["Key"] = "key";
  SourceActionsType2["Pointer"] = "pointer";
  SourceActionsType2["Wheel"] = "wheel";
})(SourceActionsType || (SourceActionsType = {}));
var ActionType;
(function(ActionType2) {
  ActionType2["Pause"] = "pause";
  ActionType2["KeyDown"] = "keyDown";
  ActionType2["KeyUp"] = "keyUp";
  ActionType2["PointerUp"] = "pointerUp";
  ActionType2["PointerDown"] = "pointerDown";
  ActionType2["PointerMove"] = "pointerMove";
  ActionType2["Scroll"] = "scroll";
})(ActionType || (ActionType = {}));
var getBidiKeyValue = (key) => {
  switch (key) {
    case "\r":
    case "\n":
      key = "Enter";
      break;
  }
  if ([...key].length === 1) {
    return key;
  }
  switch (key) {
    case "Cancel":
      return "";
    case "Help":
      return "";
    case "Backspace":
      return "";
    case "Tab":
      return "";
    case "Clear":
      return "";
    case "Enter":
      return "";
    case "Shift":
    case "ShiftLeft":
      return "";
    case "Control":
    case "ControlLeft":
      return "";
    case "Alt":
    case "AltLeft":
      return "";
    case "Pause":
      return "";
    case "Escape":
      return "";
    case "PageUp":
      return "";
    case "PageDown":
      return "";
    case "End":
      return "";
    case "Home":
      return "";
    case "ArrowLeft":
      return "";
    case "ArrowUp":
      return "";
    case "ArrowRight":
      return "";
    case "ArrowDown":
      return "";
    case "Insert":
      return "";
    case "Delete":
      return "";
    case "NumpadEqual":
      return "";
    case "Numpad0":
      return "";
    case "Numpad1":
      return "";
    case "Numpad2":
      return "";
    case "Numpad3":
      return "";
    case "Numpad4":
      return "";
    case "Numpad5":
      return "";
    case "Numpad6":
      return "";
    case "Numpad7":
      return "";
    case "Numpad8":
      return "";
    case "Numpad9":
      return "";
    case "NumpadMultiply":
      return "";
    case "NumpadAdd":
      return "";
    case "NumpadSubtract":
      return "";
    case "NumpadDecimal":
      return "";
    case "NumpadDivide":
      return "";
    case "F1":
      return "";
    case "F2":
      return "";
    case "F3":
      return "";
    case "F4":
      return "";
    case "F5":
      return "";
    case "F6":
      return "";
    case "F7":
      return "";
    case "F8":
      return "";
    case "F9":
      return "";
    case "F10":
      return "";
    case "F11":
      return "";
    case "F12":
      return "";
    case "Meta":
    case "MetaLeft":
      return "";
    case "ShiftRight":
      return "";
    case "ControlRight":
      return "";
    case "AltRight":
      return "";
    case "MetaRight":
      return "";
    case "Digit0":
      return "0";
    case "Digit1":
      return "1";
    case "Digit2":
      return "2";
    case "Digit3":
      return "3";
    case "Digit4":
      return "4";
    case "Digit5":
      return "5";
    case "Digit6":
      return "6";
    case "Digit7":
      return "7";
    case "Digit8":
      return "8";
    case "Digit9":
      return "9";
    case "KeyA":
      return "a";
    case "KeyB":
      return "b";
    case "KeyC":
      return "c";
    case "KeyD":
      return "d";
    case "KeyE":
      return "e";
    case "KeyF":
      return "f";
    case "KeyG":
      return "g";
    case "KeyH":
      return "h";
    case "KeyI":
      return "i";
    case "KeyJ":
      return "j";
    case "KeyK":
      return "k";
    case "KeyL":
      return "l";
    case "KeyM":
      return "m";
    case "KeyN":
      return "n";
    case "KeyO":
      return "o";
    case "KeyP":
      return "p";
    case "KeyQ":
      return "q";
    case "KeyR":
      return "r";
    case "KeyS":
      return "s";
    case "KeyT":
      return "t";
    case "KeyU":
      return "u";
    case "KeyV":
      return "v";
    case "KeyW":
      return "w";
    case "KeyX":
      return "x";
    case "KeyY":
      return "y";
    case "KeyZ":
      return "z";
    case "Semicolon":
      return ";";
    case "Equal":
      return "=";
    case "Comma":
      return ",";
    case "Minus":
      return "-";
    case "Period":
      return ".";
    case "Slash":
      return "/";
    case "Backquote":
      return "`";
    case "BracketLeft":
      return "[";
    case "Backslash":
      return "\\";
    case "BracketRight":
      return "]";
    case "Quote":
      return '"';
    default:
      throw new Error(`Unknown key: "${key}"`);
  }
};
var BidiKeyboard = class extends Keyboard {
  #page;
  constructor(page) {
    super();
    this.#page = page;
  }
  async down(key, _options) {
    await this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Key,
        id: "__puppeteer_keyboard",
        actions: [
          {
            type: ActionType.KeyDown,
            value: getBidiKeyValue(key)
          }
        ]
      }
    ]);
  }
  async up(key) {
    await this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Key,
        id: "__puppeteer_keyboard",
        actions: [
          {
            type: ActionType.KeyUp,
            value: getBidiKeyValue(key)
          }
        ]
      }
    ]);
  }
  async press(key, options = {}) {
    const { delay = 0 } = options;
    const actions = [
      {
        type: ActionType.KeyDown,
        value: getBidiKeyValue(key)
      }
    ];
    if (delay > 0) {
      actions.push({
        type: ActionType.Pause,
        duration: delay
      });
    }
    actions.push({
      type: ActionType.KeyUp,
      value: getBidiKeyValue(key)
    });
    await this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Key,
        id: "__puppeteer_keyboard",
        actions
      }
    ]);
  }
  async type(text, options = {}) {
    const { delay = 0 } = options;
    const values = [...text].map(getBidiKeyValue);
    const actions = [];
    if (delay <= 0) {
      for (const value of values) {
        actions.push({
          type: ActionType.KeyDown,
          value
        }, {
          type: ActionType.KeyUp,
          value
        });
      }
    } else {
      for (const value of values) {
        actions.push({
          type: ActionType.KeyDown,
          value
        }, {
          type: ActionType.Pause,
          duration: delay
        }, {
          type: ActionType.KeyUp,
          value
        });
      }
    }
    await this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Key,
        id: "__puppeteer_keyboard",
        actions
      }
    ]);
  }
  async sendCharacter(char) {
    if ([...char].length > 1) {
      throw new Error("Cannot send more than 1 character.");
    }
    const frame = await this.#page.focusedFrame();
    await frame.isolatedRealm().evaluate(async (char2) => {
      document.execCommand("insertText", false, char2);
    }, char);
  }
};
var getBidiButton = (button) => {
  switch (button) {
    case MouseButton.Left:
      return 0;
    case MouseButton.Middle:
      return 1;
    case MouseButton.Right:
      return 2;
    case MouseButton.Back:
      return 3;
    case MouseButton.Forward:
      return 4;
  }
};
var BidiMouse = class extends Mouse {
  #page;
  #lastMovePoint = { x: 0, y: 0 };
  constructor(page) {
    super();
    this.#page = page;
  }
  async reset() {
    this.#lastMovePoint = { x: 0, y: 0 };
    await this.#page.mainFrame().browsingContext.releaseActions();
  }
  async move(x, y, options = {}) {
    const from2 = this.#lastMovePoint;
    const to = {
      x: Math.round(x),
      y: Math.round(y)
    };
    const actions = [];
    const steps = options.steps ?? 0;
    for (let i = 0; i < steps; ++i) {
      actions.push({
        type: ActionType.PointerMove,
        x: from2.x + (to.x - from2.x) * (i / steps),
        y: from2.y + (to.y - from2.y) * (i / steps),
        origin: options.origin
      });
    }
    actions.push({
      type: ActionType.PointerMove,
      ...to,
      origin: options.origin
    });
    this.#lastMovePoint = to;
    await this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: "__puppeteer_mouse",
        actions
      }
    ]);
  }
  async down(options = {}) {
    await this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: "__puppeteer_mouse",
        actions: [
          {
            type: ActionType.PointerDown,
            button: getBidiButton(options.button ?? MouseButton.Left)
          }
        ]
      }
    ]);
  }
  async up(options = {}) {
    await this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: "__puppeteer_mouse",
        actions: [
          {
            type: ActionType.PointerUp,
            button: getBidiButton(options.button ?? MouseButton.Left)
          }
        ]
      }
    ]);
  }
  async click(x, y, options = {}) {
    const actions = [
      {
        type: ActionType.PointerMove,
        x: Math.round(x),
        y: Math.round(y),
        origin: options.origin
      }
    ];
    const pointerDownAction = {
      type: ActionType.PointerDown,
      button: getBidiButton(options.button ?? MouseButton.Left)
    };
    const pointerUpAction = {
      type: ActionType.PointerUp,
      button: pointerDownAction.button
    };
    for (let i = 1; i < (options.count ?? 1); ++i) {
      actions.push(pointerDownAction, pointerUpAction);
    }
    actions.push(pointerDownAction);
    if (options.delay) {
      actions.push({
        type: ActionType.Pause,
        duration: options.delay
      });
    }
    actions.push(pointerUpAction);
    await this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: "__puppeteer_mouse",
        actions
      }
    ]);
  }
  async wheel(options = {}) {
    await this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Wheel,
        id: "__puppeteer_wheel",
        actions: [
          {
            type: ActionType.Scroll,
            ...this.#lastMovePoint ?? {
              x: 0,
              y: 0
            },
            deltaX: options.deltaX ?? 0,
            deltaY: options.deltaY ?? 0
          }
        ]
      }
    ]);
  }
  drag() {
    throw new UnsupportedOperation();
  }
  dragOver() {
    throw new UnsupportedOperation();
  }
  dragEnter() {
    throw new UnsupportedOperation();
  }
  drop() {
    throw new UnsupportedOperation();
  }
  dragAndDrop() {
    throw new UnsupportedOperation();
  }
};
var BidiTouchHandle = class {
  #started = false;
  #x;
  #y;
  #bidiId;
  #page;
  #touchScreen;
  #properties;
  constructor(page, touchScreen, id, x, y, properties) {
    this.#page = page;
    this.#touchScreen = touchScreen;
    this.#x = Math.round(x);
    this.#y = Math.round(y);
    this.#properties = properties;
    this.#bidiId = `${"__puppeteer_finger"}_${id}`;
  }
  async start(options = {}) {
    if (this.#started) {
      throw new TouchError("Touch has already started");
    }
    await this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: this.#bidiId,
        parameters: {
          pointerType: "touch"
        },
        actions: [
          {
            type: ActionType.PointerMove,
            x: this.#x,
            y: this.#y,
            origin: options.origin
          },
          {
            ...this.#properties,
            type: ActionType.PointerDown,
            button: 0
          }
        ]
      }
    ]);
    this.#started = true;
  }
  move(x, y) {
    const newX = Math.round(x);
    const newY = Math.round(y);
    return this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: this.#bidiId,
        parameters: {
          pointerType: "touch"
        },
        actions: [
          {
            ...this.#properties,
            type: ActionType.PointerMove,
            x: newX,
            y: newY
          }
        ]
      }
    ]);
  }
  async end() {
    await this.#page.mainFrame().browsingContext.performActions([
      {
        type: SourceActionsType.Pointer,
        id: this.#bidiId,
        parameters: {
          pointerType: "touch"
        },
        actions: [
          {
            type: ActionType.PointerUp,
            button: 0
          }
        ]
      }
    ]);
    this.#touchScreen.removeHandle(this);
  }
};
var BidiTouchscreen = class extends Touchscreen {
  #page;
  constructor(page) {
    super();
    this.#page = page;
  }
  async touchStart(x, y, options = {}) {
    const id = this.idGenerator();
    const properties = {
      width: 0.5 * 2,
      // 2 times default touch radius.
      height: 0.5 * 2,
      // 2 times default touch radius.
      pressure: 0.5,
      altitudeAngle: Math.PI / 2
    };
    const touch = new BidiTouchHandle(this.#page, this, id, x, y, properties);
    await touch.start(options);
    this.touches.push(touch);
    return touch;
  }
};

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/Page.js
var __esDecorate10 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __runInitializers10 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __addDisposableResource4 = function(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
};
var __disposeResources4 = /* @__PURE__ */ function(SuppressedError2) {
  return function(env) {
    function fail(e) {
      env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    var r, s = 0;
    function next() {
      while (r = env.stack.pop()) {
        try {
          if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
          if (r.dispose) {
            var result = r.dispose.call(r.value);
            if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
          } else s |= 1;
        } catch (e) {
          fail(e);
        }
      }
      if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
      if (env.hasError) throw env.error;
    }
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
var BidiPage = (() => {
  let _classSuper = Page;
  let _trustedEmitter_decorators;
  let _trustedEmitter_initializers = [];
  let _trustedEmitter_extraInitializers = [];
  return class BidiPage2 extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      _trustedEmitter_decorators = [bubble()];
      __esDecorate10(this, null, _trustedEmitter_decorators, { kind: "accessor", name: "trustedEmitter", static: false, private: false, access: { has: (obj) => "trustedEmitter" in obj, get: (obj) => obj.trustedEmitter, set: (obj, value) => {
        obj.trustedEmitter = value;
      } }, metadata: _metadata }, _trustedEmitter_initializers, _trustedEmitter_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    }
    static from(browserContext, browsingContext) {
      const page = new BidiPage2(browserContext, browsingContext);
      page.#initialize();
      return page;
    }
    #trustedEmitter_accessor_storage = __runInitializers10(this, _trustedEmitter_initializers, new EventEmitter());
    get trustedEmitter() {
      return this.#trustedEmitter_accessor_storage;
    }
    set trustedEmitter(value) {
      this.#trustedEmitter_accessor_storage = value;
    }
    #browserContext = __runInitializers10(this, _trustedEmitter_extraInitializers);
    #frame;
    #viewport = null;
    #workers = /* @__PURE__ */ new Set();
    keyboard;
    mouse;
    touchscreen;
    tracing;
    coverage;
    #cdpEmulationManager;
    #emulatedNetworkConditions;
    _client() {
      return this.#frame.client;
    }
    constructor(browserContext, browsingContext) {
      super();
      this.#browserContext = browserContext;
      this.#frame = BidiFrame.from(this, browsingContext);
      this.#cdpEmulationManager = new EmulationManager(this.#frame.client);
      this.tracing = new Tracing(this.#frame.client);
      this.coverage = new Coverage(this.#frame.client);
      this.keyboard = new BidiKeyboard(this);
      this.mouse = new BidiMouse(this);
      this.touchscreen = new BidiTouchscreen(this);
    }
    #initialize() {
      this.#frame.browsingContext.on("closed", () => {
        this.trustedEmitter.emit("close", void 0);
        this.trustedEmitter.removeAllListeners();
      });
      this.trustedEmitter.on("workercreated", (worker) => {
        this.#workers.add(worker);
      });
      this.trustedEmitter.on("workerdestroyed", (worker) => {
        this.#workers.delete(worker);
      });
    }
    /**
     * @internal
     */
    _userAgentHeaders = {};
    #userAgentInterception;
    #userAgentPreloadScript;
    async setUserAgent(userAgent, userAgentMetadata) {
      if (!this.#browserContext.browser().cdpSupported && userAgentMetadata) {
        throw new UnsupportedOperation("Current Browser does not support `userAgentMetadata`");
      } else if (this.#browserContext.browser().cdpSupported && userAgentMetadata) {
        return await this._client().send("Network.setUserAgentOverride", {
          userAgent,
          userAgentMetadata
        });
      }
      const enable = userAgent !== "";
      userAgent = userAgent ?? await this.#browserContext.browser().userAgent();
      this._userAgentHeaders = enable ? {
        "User-Agent": userAgent
      } : {};
      this.#userAgentInterception = await this.#toggleInterception([
        "beforeRequestSent"
        /* Bidi.Network.InterceptPhase.BeforeRequestSent */
      ], this.#userAgentInterception, enable);
      const changeUserAgent = (userAgent2) => {
        Object.defineProperty(navigator, "userAgent", {
          value: userAgent2
        });
      };
      const frames = [this.#frame];
      for (const frame of frames) {
        frames.push(...frame.childFrames());
      }
      if (this.#userAgentPreloadScript) {
        await this.removeScriptToEvaluateOnNewDocument(this.#userAgentPreloadScript);
      }
      const [evaluateToken] = await Promise.all([
        enable ? this.evaluateOnNewDocument(changeUserAgent, userAgent) : void 0,
        // When we disable the UserAgent we want to
        // evaluate the original value in all Browsing Contexts
        frames.map((frame) => {
          return frame.evaluate(changeUserAgent, userAgent);
        })
      ]);
      this.#userAgentPreloadScript = evaluateToken?.identifier;
    }
    async setBypassCSP(enabled) {
      await this._client().send("Page.setBypassCSP", { enabled });
    }
    async queryObjects(prototypeHandle) {
      assert(!prototypeHandle.disposed, "Prototype JSHandle is disposed!");
      assert(prototypeHandle.id, "Prototype JSHandle must not be referencing primitive value");
      const response = await this.#frame.client.send("Runtime.queryObjects", {
        prototypeObjectId: prototypeHandle.id
      });
      return this.#frame.mainRealm().createHandle({
        type: "array",
        handle: response.objects.objectId
      });
    }
    browser() {
      return this.browserContext().browser();
    }
    browserContext() {
      return this.#browserContext;
    }
    mainFrame() {
      return this.#frame;
    }
    async focusedFrame() {
      const env_1 = { stack: [], error: void 0, hasError: false };
      try {
        const handle = __addDisposableResource4(env_1, await this.mainFrame().isolatedRealm().evaluateHandle(() => {
          let win = window;
          while (win.document.activeElement instanceof win.HTMLIFrameElement || win.document.activeElement instanceof win.HTMLFrameElement) {
            if (win.document.activeElement.contentWindow === null) {
              break;
            }
            win = win.document.activeElement.contentWindow;
          }
          return win;
        }), false);
        const value = handle.remoteValue();
        assert(value.type === "window");
        const frame = this.frames().find((frame2) => {
          return frame2._id === value.value.context;
        });
        assert(frame);
        return frame;
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources4(env_1);
      }
    }
    frames() {
      const frames = [this.#frame];
      for (const frame of frames) {
        frames.push(...frame.childFrames());
      }
      return frames;
    }
    isClosed() {
      return this.#frame.detached;
    }
    async close(options) {
      const env_2 = { stack: [], error: void 0, hasError: false };
      try {
        const _guard = __addDisposableResource4(env_2, await this.#browserContext.waitForScreenshotOperations(), false);
        try {
          await this.#frame.browsingContext.close(options?.runBeforeUnload);
        } catch {
          return;
        }
      } catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
      } finally {
        __disposeResources4(env_2);
      }
    }
    async reload(options = {}) {
      const [response] = await Promise.all([
        this.#frame.waitForNavigation(options),
        this.#frame.browsingContext.reload()
      ]).catch(rewriteNavigationError(this.url(), options.timeout ?? this._timeoutSettings.navigationTimeout()));
      return response;
    }
    setDefaultNavigationTimeout(timeout2) {
      this._timeoutSettings.setDefaultNavigationTimeout(timeout2);
    }
    setDefaultTimeout(timeout2) {
      this._timeoutSettings.setDefaultTimeout(timeout2);
    }
    getDefaultTimeout() {
      return this._timeoutSettings.timeout();
    }
    getDefaultNavigationTimeout() {
      return this._timeoutSettings.navigationTimeout();
    }
    isJavaScriptEnabled() {
      return this.#cdpEmulationManager.javascriptEnabled;
    }
    async setGeolocation(options) {
      return await this.#cdpEmulationManager.setGeolocation(options);
    }
    async setJavaScriptEnabled(enabled) {
      return await this.#cdpEmulationManager.setJavaScriptEnabled(enabled);
    }
    async emulateMediaType(type) {
      return await this.#cdpEmulationManager.emulateMediaType(type);
    }
    async emulateCPUThrottling(factor) {
      return await this.#cdpEmulationManager.emulateCPUThrottling(factor);
    }
    async emulateMediaFeatures(features) {
      return await this.#cdpEmulationManager.emulateMediaFeatures(features);
    }
    async emulateTimezone(timezoneId) {
      return await this.#cdpEmulationManager.emulateTimezone(timezoneId);
    }
    async emulateIdleState(overrides) {
      return await this.#cdpEmulationManager.emulateIdleState(overrides);
    }
    async emulateVisionDeficiency(type) {
      return await this.#cdpEmulationManager.emulateVisionDeficiency(type);
    }
    async setViewport(viewport) {
      if (!this.browser().cdpSupported) {
        await this.#frame.browsingContext.setViewport({
          viewport: viewport?.width && viewport?.height ? {
            width: viewport.width,
            height: viewport.height
          } : null,
          devicePixelRatio: viewport?.deviceScaleFactor ? viewport.deviceScaleFactor : null
        });
        this.#viewport = viewport;
        return;
      }
      const needsReload = await this.#cdpEmulationManager.emulateViewport(viewport);
      this.#viewport = viewport;
      if (needsReload) {
        await this.reload();
      }
    }
    viewport() {
      return this.#viewport;
    }
    async pdf(options = {}) {
      const { timeout: ms = this._timeoutSettings.timeout(), path = void 0 } = options;
      const { printBackground: background, margin, landscape, width, height, pageRanges: ranges, scale, preferCSSPageSize } = parsePDFOptions(options, "cm");
      const pageRanges = ranges ? ranges.split(", ") : [];
      await firstValueFrom(from(this.mainFrame().isolatedRealm().evaluate(() => {
        return document.fonts.ready;
      })).pipe(raceWith(timeout(ms))));
      const data = await firstValueFrom(from(this.#frame.browsingContext.print({
        background,
        margin,
        orientation: landscape ? "landscape" : "portrait",
        page: {
          width,
          height
        },
        pageRanges,
        scale,
        shrinkToFit: !preferCSSPageSize
      })).pipe(raceWith(timeout(ms))));
      const typedArray = stringToTypedArray(data, true);
      await this._maybeWriteTypedArrayToFile(path, typedArray);
      return typedArray;
    }
    async createPDFStream(options) {
      const typedArray = await this.pdf(options);
      return new ReadableStream({
        start(controller) {
          controller.enqueue(typedArray);
          controller.close();
        }
      });
    }
    async _screenshot(options) {
      const { clip, type, captureBeyondViewport, quality } = options;
      if (options.omitBackground !== void 0 && options.omitBackground) {
        throw new UnsupportedOperation(`BiDi does not support 'omitBackground'.`);
      }
      if (options.optimizeForSpeed !== void 0 && options.optimizeForSpeed) {
        throw new UnsupportedOperation(`BiDi does not support 'optimizeForSpeed'.`);
      }
      if (options.fromSurface !== void 0 && !options.fromSurface) {
        throw new UnsupportedOperation(`BiDi does not support 'fromSurface'.`);
      }
      if (clip !== void 0 && clip.scale !== void 0 && clip.scale !== 1) {
        throw new UnsupportedOperation(`BiDi does not support 'scale' in 'clip'.`);
      }
      let box;
      if (clip) {
        if (captureBeyondViewport) {
          box = clip;
        } else {
          const [pageLeft, pageTop] = await this.evaluate(() => {
            if (!window.visualViewport) {
              throw new Error("window.visualViewport is not supported.");
            }
            return [
              window.visualViewport.pageLeft,
              window.visualViewport.pageTop
            ];
          });
          box = {
            ...clip,
            x: clip.x - pageLeft,
            y: clip.y - pageTop
          };
        }
      }
      const data = await this.#frame.browsingContext.captureScreenshot({
        origin: captureBeyondViewport ? "document" : "viewport",
        format: {
          type: `image/${type}`,
          ...quality !== void 0 ? { quality: quality / 100 } : {}
        },
        ...box ? { clip: { type: "box", ...box } } : {}
      });
      return data;
    }
    async createCDPSession() {
      return await this.#frame.createCDPSession();
    }
    async bringToFront() {
      await this.#frame.browsingContext.activate();
    }
    async evaluateOnNewDocument(pageFunction, ...args) {
      const expression = evaluationExpression(pageFunction, ...args);
      const script = await this.#frame.browsingContext.addPreloadScript(expression);
      return { identifier: script };
    }
    async removeScriptToEvaluateOnNewDocument(id) {
      await this.#frame.browsingContext.removePreloadScript(id);
    }
    async exposeFunction(name, pptrFunction) {
      return await this.mainFrame().exposeFunction(name, "default" in pptrFunction ? pptrFunction.default : pptrFunction);
    }
    isDragInterceptionEnabled() {
      return false;
    }
    async setCacheEnabled(enabled) {
      if (!this.#browserContext.browser().cdpSupported) {
        await this.#frame.browsingContext.setCacheBehavior(enabled ? "default" : "bypass");
        return;
      }
      await this._client().send("Network.setCacheDisabled", {
        cacheDisabled: !enabled
      });
    }
    async cookies(...urls) {
      const normalizedUrls = (urls.length ? urls : [this.url()]).map((url) => {
        return new URL(url);
      });
      const cookies = await this.#frame.browsingContext.getCookies();
      return cookies.map((cookie) => {
        return bidiToPuppeteerCookie(cookie);
      }).filter((cookie) => {
        return normalizedUrls.some((url) => {
          return testUrlMatchCookie(cookie, url);
        });
      });
    }
    isServiceWorkerBypassed() {
      throw new UnsupportedOperation();
    }
    target() {
      throw new UnsupportedOperation();
    }
    waitForFileChooser() {
      throw new UnsupportedOperation();
    }
    workers() {
      return [...this.#workers];
    }
    #userInterception;
    async setRequestInterception(enable) {
      this.#userInterception = await this.#toggleInterception([
        "beforeRequestSent"
        /* Bidi.Network.InterceptPhase.BeforeRequestSent */
      ], this.#userInterception, enable);
    }
    /**
     * @internal
     */
    _extraHTTPHeaders = {};
    #extraHeadersInterception;
    async setExtraHTTPHeaders(headers) {
      const extraHTTPHeaders = {};
      for (const [key, value] of Object.entries(headers)) {
        assert(isString(value), `Expected value of header "${key}" to be String, but "${typeof value}" is found.`);
        extraHTTPHeaders[key.toLowerCase()] = value;
      }
      this._extraHTTPHeaders = extraHTTPHeaders;
      this.#extraHeadersInterception = await this.#toggleInterception([
        "beforeRequestSent"
        /* Bidi.Network.InterceptPhase.BeforeRequestSent */
      ], this.#extraHeadersInterception, Boolean(Object.keys(this._extraHTTPHeaders).length));
    }
    /**
     * @internal
     */
    _credentials = null;
    #authInterception;
    async authenticate(credentials) {
      this.#authInterception = await this.#toggleInterception([
        "authRequired"
        /* Bidi.Network.InterceptPhase.AuthRequired */
      ], this.#authInterception, Boolean(credentials));
      this._credentials = credentials;
    }
    async #toggleInterception(phases, interception, expected) {
      if (expected && !interception) {
        return await this.#frame.browsingContext.addIntercept({
          phases
        });
      } else if (!expected && interception) {
        await this.#frame.browsingContext.userContext.browser.removeIntercept(interception);
        return;
      }
      return interception;
    }
    setDragInterception() {
      throw new UnsupportedOperation();
    }
    setBypassServiceWorker() {
      throw new UnsupportedOperation();
    }
    async setOfflineMode(enabled) {
      if (!this.#browserContext.browser().cdpSupported) {
        throw new UnsupportedOperation();
      }
      if (!this.#emulatedNetworkConditions) {
        this.#emulatedNetworkConditions = {
          offline: false,
          upload: -1,
          download: -1,
          latency: 0
        };
      }
      this.#emulatedNetworkConditions.offline = enabled;
      return await this.#applyNetworkConditions();
    }
    async emulateNetworkConditions(networkConditions) {
      if (!this.#browserContext.browser().cdpSupported) {
        throw new UnsupportedOperation();
      }
      if (!this.#emulatedNetworkConditions) {
        this.#emulatedNetworkConditions = {
          offline: false,
          upload: -1,
          download: -1,
          latency: 0
        };
      }
      this.#emulatedNetworkConditions.upload = networkConditions ? networkConditions.upload : -1;
      this.#emulatedNetworkConditions.download = networkConditions ? networkConditions.download : -1;
      this.#emulatedNetworkConditions.latency = networkConditions ? networkConditions.latency : 0;
      return await this.#applyNetworkConditions();
    }
    async #applyNetworkConditions() {
      if (!this.#emulatedNetworkConditions) {
        return;
      }
      await this._client().send("Network.emulateNetworkConditions", {
        offline: this.#emulatedNetworkConditions.offline,
        latency: this.#emulatedNetworkConditions.latency,
        uploadThroughput: this.#emulatedNetworkConditions.upload,
        downloadThroughput: this.#emulatedNetworkConditions.download
      });
    }
    async setCookie(...cookies) {
      const pageURL = this.url();
      const pageUrlStartsWithHTTP = pageURL.startsWith("http");
      for (const cookie of cookies) {
        let cookieUrl = cookie.url || "";
        if (!cookieUrl && pageUrlStartsWithHTTP) {
          cookieUrl = pageURL;
        }
        assert(cookieUrl !== "about:blank", `Blank page can not have cookie "${cookie.name}"`);
        assert(!String.prototype.startsWith.call(cookieUrl || "", "data:"), `Data URL page can not have cookie "${cookie.name}"`);
        assert(cookie.partitionKey === void 0 || typeof cookie.partitionKey === "string", "BiDi only allows domain partition keys");
        const normalizedUrl = URL.canParse(cookieUrl) ? new URL(cookieUrl) : void 0;
        const domain = cookie.domain ?? normalizedUrl?.hostname;
        assert(domain !== void 0, `At least one of the url and domain needs to be specified`);
        const bidiCookie = {
          domain,
          name: cookie.name,
          value: {
            type: "string",
            value: cookie.value
          },
          ...cookie.path !== void 0 ? { path: cookie.path } : {},
          ...cookie.httpOnly !== void 0 ? { httpOnly: cookie.httpOnly } : {},
          ...cookie.secure !== void 0 ? { secure: cookie.secure } : {},
          ...cookie.sameSite !== void 0 ? { sameSite: convertCookiesSameSiteCdpToBiDi(cookie.sameSite) } : {},
          ...{ expiry: convertCookiesExpiryCdpToBiDi(cookie.expires) },
          // Chrome-specific properties.
          ...cdpSpecificCookiePropertiesFromPuppeteerToBidi(cookie, "sameParty", "sourceScheme", "priority", "url")
        };
        if (cookie.partitionKey !== void 0) {
          await this.browserContext().userContext.setCookie(bidiCookie, cookie.partitionKey);
        } else {
          await this.#frame.browsingContext.setCookie(bidiCookie);
        }
      }
    }
    async deleteCookie(...cookies) {
      await Promise.all(cookies.map(async (deleteCookieRequest) => {
        const cookieUrl = deleteCookieRequest.url ?? this.url();
        const normalizedUrl = URL.canParse(cookieUrl) ? new URL(cookieUrl) : void 0;
        const domain = deleteCookieRequest.domain ?? normalizedUrl?.hostname;
        assert(domain !== void 0, `At least one of the url and domain needs to be specified`);
        const filter2 = {
          domain,
          name: deleteCookieRequest.name,
          ...deleteCookieRequest.path !== void 0 ? { path: deleteCookieRequest.path } : {}
        };
        await this.#frame.browsingContext.deleteCookie(filter2);
      }));
    }
    async removeExposedFunction(name) {
      await this.#frame.removeExposedFunction(name);
    }
    metrics() {
      throw new UnsupportedOperation();
    }
    async goBack(options = {}) {
      return await this.#go(-1, options);
    }
    async goForward(options = {}) {
      return await this.#go(1, options);
    }
    async #go(delta, options) {
      const controller = new AbortController();
      try {
        const [response] = await Promise.all([
          this.waitForNavigation({
            ...options,
            signal: controller.signal
          }),
          this.#frame.browsingContext.traverseHistory(delta)
        ]);
        return response;
      } catch (error) {
        controller.abort();
        if (isErrorLike(error)) {
          if (error.message.includes("no such history entry")) {
            return null;
          }
        }
        throw error;
      }
    }
    waitForDevicePrompt() {
      throw new UnsupportedOperation();
    }
  };
})();
function evaluationExpression(fun, ...args) {
  return `() => {${evaluationString(fun, ...args)}}`;
}
function testUrlMatchCookieHostname(cookie, normalizedUrl) {
  const cookieDomain = cookie.domain.toLowerCase();
  const urlHostname = normalizedUrl.hostname.toLowerCase();
  if (cookieDomain === urlHostname) {
    return true;
  }
  return cookieDomain.startsWith(".") && urlHostname.endsWith(cookieDomain);
}
function testUrlMatchCookiePath(cookie, normalizedUrl) {
  const uriPath = normalizedUrl.pathname;
  const cookiePath = cookie.path;
  if (uriPath === cookiePath) {
    return true;
  }
  if (uriPath.startsWith(cookiePath)) {
    if (cookiePath.endsWith("/")) {
      return true;
    }
    if (uriPath[cookiePath.length] === "/") {
      return true;
    }
  }
  return false;
}
function testUrlMatchCookie(cookie, url) {
  const normalizedUrl = new URL(url);
  assert(cookie !== void 0);
  if (!testUrlMatchCookieHostname(cookie, normalizedUrl)) {
    return false;
  }
  return testUrlMatchCookiePath(cookie, normalizedUrl);
}
function bidiToPuppeteerCookie(bidiCookie, returnCompositePartitionKey = false) {
  const partitionKey = bidiCookie[CDP_SPECIFIC_PREFIX + "partitionKey"];
  function getParitionKey() {
    if (typeof partitionKey === "string") {
      return { partitionKey };
    }
    if (typeof partitionKey === "object" && partitionKey !== null) {
      if (returnCompositePartitionKey) {
        return {
          partitionKey: {
            sourceOrigin: partitionKey.topLevelSite,
            hasCrossSiteAncestor: partitionKey.hasCrossSiteAncestor ?? false
          }
        };
      }
      return {
        // TODO: a breaking change in Puppeteer is required to change
        // partitionKey type and report the composite partition key.
        partitionKey: partitionKey.topLevelSite
      };
    }
    return {};
  }
  return {
    name: bidiCookie.name,
    // Presents binary value as base64 string.
    value: bidiCookie.value.value,
    domain: bidiCookie.domain,
    path: bidiCookie.path,
    size: bidiCookie.size,
    httpOnly: bidiCookie.httpOnly,
    secure: bidiCookie.secure,
    sameSite: convertCookiesSameSiteBiDiToCdp(bidiCookie.sameSite),
    expires: bidiCookie.expiry ?? -1,
    session: bidiCookie.expiry === void 0 || bidiCookie.expiry <= 0,
    // Extending with CDP-specific properties with `goog:` prefix.
    ...cdpSpecificCookiePropertiesFromBidiToPuppeteer(bidiCookie, "sameParty", "sourceScheme", "partitionKeyOpaque", "priority"),
    ...getParitionKey()
  };
}
var CDP_SPECIFIC_PREFIX = "goog:";
function cdpSpecificCookiePropertiesFromBidiToPuppeteer(bidiCookie, ...propertyNames) {
  const result = {};
  for (const property of propertyNames) {
    if (bidiCookie[CDP_SPECIFIC_PREFIX + property] !== void 0) {
      result[property] = bidiCookie[CDP_SPECIFIC_PREFIX + property];
    }
  }
  return result;
}
function cdpSpecificCookiePropertiesFromPuppeteerToBidi(cookieParam, ...propertyNames) {
  const result = {};
  for (const property of propertyNames) {
    if (cookieParam[property] !== void 0) {
      result[CDP_SPECIFIC_PREFIX + property] = cookieParam[property];
    }
  }
  return result;
}
function convertCookiesSameSiteBiDiToCdp(sameSite) {
  return sameSite === "strict" ? "Strict" : sameSite === "lax" ? "Lax" : "None";
}
function convertCookiesSameSiteCdpToBiDi(sameSite) {
  return sameSite === "Strict" ? "strict" : sameSite === "Lax" ? "lax" : "none";
}
function convertCookiesExpiryCdpToBiDi(expiry) {
  return [void 0, -1].includes(expiry) ? void 0 : expiry;
}
function convertCookiesPartitionKeyFromPuppeteerToBiDi(partitionKey) {
  if (partitionKey === void 0 || typeof partitionKey === "string") {
    return partitionKey;
  }
  if (partitionKey.hasCrossSiteAncestor) {
    throw new UnsupportedOperation("WebDriver BiDi does not support `hasCrossSiteAncestor` yet.");
  }
  return partitionKey.sourceOrigin;
}

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/Target.js
init_esm();
var BidiBrowserTarget = class extends Target {
  #browser;
  constructor(browser) {
    super();
    this.#browser = browser;
  }
  asPage() {
    throw new UnsupportedOperation();
  }
  url() {
    return "";
  }
  createCDPSession() {
    throw new UnsupportedOperation();
  }
  type() {
    return TargetType.BROWSER;
  }
  browser() {
    return this.#browser;
  }
  browserContext() {
    return this.#browser.defaultBrowserContext();
  }
  opener() {
    throw new UnsupportedOperation();
  }
};
var BidiPageTarget = class extends Target {
  #page;
  constructor(page) {
    super();
    this.#page = page;
  }
  async page() {
    return this.#page;
  }
  async asPage() {
    return BidiPage.from(this.browserContext(), this.#page.mainFrame().browsingContext);
  }
  url() {
    return this.#page.url();
  }
  createCDPSession() {
    return this.#page.createCDPSession();
  }
  type() {
    return TargetType.PAGE;
  }
  browser() {
    return this.browserContext().browser();
  }
  browserContext() {
    return this.#page.browserContext();
  }
  opener() {
    throw new UnsupportedOperation();
  }
};
var BidiFrameTarget = class extends Target {
  #frame;
  #page;
  constructor(frame) {
    super();
    this.#frame = frame;
  }
  async page() {
    if (this.#page === void 0) {
      this.#page = BidiPage.from(this.browserContext(), this.#frame.browsingContext);
    }
    return this.#page;
  }
  async asPage() {
    return BidiPage.from(this.browserContext(), this.#frame.browsingContext);
  }
  url() {
    return this.#frame.url();
  }
  createCDPSession() {
    return this.#frame.createCDPSession();
  }
  type() {
    return TargetType.PAGE;
  }
  browser() {
    return this.browserContext().browser();
  }
  browserContext() {
    return this.#frame.page().browserContext();
  }
  opener() {
    throw new UnsupportedOperation();
  }
};
var BidiWorkerTarget = class extends Target {
  #worker;
  constructor(worker) {
    super();
    this.#worker = worker;
  }
  async page() {
    throw new UnsupportedOperation();
  }
  async asPage() {
    throw new UnsupportedOperation();
  }
  url() {
    return this.#worker.url();
  }
  createCDPSession() {
    throw new UnsupportedOperation();
  }
  type() {
    return TargetType.OTHER;
  }
  browser() {
    return this.browserContext().browser();
  }
  browserContext() {
    return this.#worker.frame.page().browserContext();
  }
  opener() {
    throw new UnsupportedOperation();
  }
};

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/BrowserContext.js
var __esDecorate11 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __runInitializers11 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __addDisposableResource5 = function(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
};
var __disposeResources5 = /* @__PURE__ */ function(SuppressedError2) {
  return function(env) {
    function fail(e) {
      env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    var r, s = 0;
    function next() {
      while (r = env.stack.pop()) {
        try {
          if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
          if (r.dispose) {
            var result = r.dispose.call(r.value);
            if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
          } else s |= 1;
        } catch (e) {
          fail(e);
        }
      }
      if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
      if (env.hasError) throw env.error;
    }
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
var BidiBrowserContext = (() => {
  let _classSuper = BrowserContext;
  let _trustedEmitter_decorators;
  let _trustedEmitter_initializers = [];
  let _trustedEmitter_extraInitializers = [];
  return class BidiBrowserContext2 extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      _trustedEmitter_decorators = [bubble()];
      __esDecorate11(this, null, _trustedEmitter_decorators, { kind: "accessor", name: "trustedEmitter", static: false, private: false, access: { has: (obj) => "trustedEmitter" in obj, get: (obj) => obj.trustedEmitter, set: (obj, value) => {
        obj.trustedEmitter = value;
      } }, metadata: _metadata }, _trustedEmitter_initializers, _trustedEmitter_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    }
    static from(browser, userContext, options) {
      const context = new BidiBrowserContext2(browser, userContext, options);
      context.#initialize();
      return context;
    }
    #trustedEmitter_accessor_storage = __runInitializers11(this, _trustedEmitter_initializers, new EventEmitter());
    get trustedEmitter() {
      return this.#trustedEmitter_accessor_storage;
    }
    set trustedEmitter(value) {
      this.#trustedEmitter_accessor_storage = value;
    }
    #browser = __runInitializers11(this, _trustedEmitter_extraInitializers);
    #defaultViewport;
    // This is public because of cookies.
    userContext;
    #pages = /* @__PURE__ */ new WeakMap();
    #targets = /* @__PURE__ */ new Map();
    #overrides = [];
    constructor(browser, userContext, options) {
      super();
      this.#browser = browser;
      this.userContext = userContext;
      this.#defaultViewport = options.defaultViewport;
    }
    #initialize() {
      for (const browsingContext of this.userContext.browsingContexts) {
        this.#createPage(browsingContext);
      }
      this.userContext.on("browsingcontext", ({ browsingContext }) => {
        const page = this.#createPage(browsingContext);
        if (browsingContext.originalOpener) {
          for (const context of this.userContext.browsingContexts) {
            if (context.id === browsingContext.originalOpener) {
              this.#pages.get(context).trustedEmitter.emit("popup", page);
            }
          }
        }
      });
      this.userContext.on("closed", () => {
        this.trustedEmitter.removeAllListeners();
      });
    }
    #createPage(browsingContext) {
      const page = BidiPage.from(this, browsingContext);
      this.#pages.set(browsingContext, page);
      page.trustedEmitter.on("close", () => {
        this.#pages.delete(browsingContext);
      });
      const pageTarget = new BidiPageTarget(page);
      const pageTargets = /* @__PURE__ */ new Map();
      this.#targets.set(page, [pageTarget, pageTargets]);
      page.trustedEmitter.on("frameattached", (frame) => {
        const bidiFrame = frame;
        const target = new BidiFrameTarget(bidiFrame);
        pageTargets.set(bidiFrame, target);
        this.trustedEmitter.emit("targetcreated", target);
      });
      page.trustedEmitter.on("framenavigated", (frame) => {
        const bidiFrame = frame;
        const target = pageTargets.get(bidiFrame);
        if (target === void 0) {
          this.trustedEmitter.emit("targetchanged", pageTarget);
        } else {
          this.trustedEmitter.emit("targetchanged", target);
        }
      });
      page.trustedEmitter.on("framedetached", (frame) => {
        const bidiFrame = frame;
        const target = pageTargets.get(bidiFrame);
        if (target === void 0) {
          return;
        }
        pageTargets.delete(bidiFrame);
        this.trustedEmitter.emit("targetdestroyed", target);
      });
      page.trustedEmitter.on("workercreated", (worker) => {
        const bidiWorker = worker;
        const target = new BidiWorkerTarget(bidiWorker);
        pageTargets.set(bidiWorker, target);
        this.trustedEmitter.emit("targetcreated", target);
      });
      page.trustedEmitter.on("workerdestroyed", (worker) => {
        const bidiWorker = worker;
        const target = pageTargets.get(bidiWorker);
        if (target === void 0) {
          return;
        }
        pageTargets.delete(worker);
        this.trustedEmitter.emit("targetdestroyed", target);
      });
      page.trustedEmitter.on("close", () => {
        this.#targets.delete(page);
        this.trustedEmitter.emit("targetdestroyed", pageTarget);
      });
      this.trustedEmitter.emit("targetcreated", pageTarget);
      return page;
    }
    targets() {
      return [...this.#targets.values()].flatMap(([target, frames]) => {
        return [target, ...frames.values()];
      });
    }
    async newPage() {
      const env_1 = { stack: [], error: void 0, hasError: false };
      try {
        const _guard = __addDisposableResource5(env_1, await this.waitForScreenshotOperations(), false);
        const context = await this.userContext.createBrowsingContext(
          "tab"
          /* Bidi.BrowsingContext.CreateType.Tab */
        );
        const page = this.#pages.get(context);
        if (!page) {
          throw new Error("Page is not found");
        }
        if (this.#defaultViewport) {
          try {
            await page.setViewport(this.#defaultViewport);
          } catch {
          }
        }
        return page;
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources5(env_1);
      }
    }
    async close() {
      assert(this.userContext.id !== UserContext.DEFAULT, "Default BrowserContext cannot be closed!");
      try {
        await this.userContext.remove();
      } catch (error) {
        debugError(error);
      }
      this.#targets.clear();
    }
    browser() {
      return this.#browser;
    }
    async pages() {
      return [...this.userContext.browsingContexts].map((context) => {
        return this.#pages.get(context);
      });
    }
    async overridePermissions(origin, permissions) {
      const permissionsSet = new Set(permissions.map((permission) => {
        const protocolPermission = WEB_PERMISSION_TO_PROTOCOL_PERMISSION.get(permission);
        if (!protocolPermission) {
          throw new Error("Unknown permission: " + permission);
        }
        return permission;
      }));
      await Promise.all(Array.from(WEB_PERMISSION_TO_PROTOCOL_PERMISSION.keys()).map((permission) => {
        const result = this.userContext.setPermissions(
          origin,
          {
            name: permission
          },
          permissionsSet.has(permission) ? "granted" : "denied"
          /* Bidi.Permissions.PermissionState.Denied */
        );
        this.#overrides.push({ origin, permission });
        if (!permissionsSet.has(permission)) {
          return result.catch(debugError);
        }
        return result;
      }));
    }
    async clearPermissionOverrides() {
      const promises = this.#overrides.map(({ permission, origin }) => {
        return this.userContext.setPermissions(
          origin,
          {
            name: permission
          },
          "prompt"
          /* Bidi.Permissions.PermissionState.Prompt */
        ).catch(debugError);
      });
      this.#overrides = [];
      await Promise.all(promises);
    }
    get id() {
      if (this.userContext.id === UserContext.DEFAULT) {
        return void 0;
      }
      return this.userContext.id;
    }
    async cookies() {
      const cookies = await this.userContext.getCookies();
      return cookies.map((cookie) => {
        return bidiToPuppeteerCookie(cookie, true);
      });
    }
    async setCookie(...cookies) {
      await Promise.all(cookies.map(async (cookie) => {
        const bidiCookie = {
          domain: cookie.domain,
          name: cookie.name,
          value: {
            type: "string",
            value: cookie.value
          },
          ...cookie.path !== void 0 ? { path: cookie.path } : {},
          ...cookie.httpOnly !== void 0 ? { httpOnly: cookie.httpOnly } : {},
          ...cookie.secure !== void 0 ? { secure: cookie.secure } : {},
          ...cookie.sameSite !== void 0 ? { sameSite: convertCookiesSameSiteCdpToBiDi(cookie.sameSite) } : {},
          ...{ expiry: convertCookiesExpiryCdpToBiDi(cookie.expires) },
          // Chrome-specific properties.
          ...cdpSpecificCookiePropertiesFromPuppeteerToBidi(cookie, "sameParty", "sourceScheme", "priority", "url")
        };
        return await this.userContext.setCookie(bidiCookie, convertCookiesPartitionKeyFromPuppeteerToBiDi(cookie.partitionKey));
      }));
    }
  };
})();

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/core/Session.js
init_esm();

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/core/Browser.js
init_esm();
var __runInitializers12 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate12 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __addDisposableResource6 = function(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
};
var __disposeResources6 = /* @__PURE__ */ function(SuppressedError2) {
  return function(env) {
    function fail(e) {
      env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
      env.hasError = true;
    }
    var r, s = 0;
    function next() {
      while (r = env.stack.pop()) {
        try {
          if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
          if (r.dispose) {
            var result = r.dispose.call(r.value);
            if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
              fail(e);
              return next();
            });
          } else s |= 1;
        } catch (e) {
          fail(e);
        }
      }
      if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
      if (env.hasError) throw env.error;
    }
    return next();
  };
}(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
});
var Browser2 = (() => {
  let _classSuper = EventEmitter;
  let _instanceExtraInitializers = [];
  let _dispose_decorators;
  let _close_decorators;
  let _addPreloadScript_decorators;
  let _removeIntercept_decorators;
  let _removePreloadScript_decorators;
  let _createUserContext_decorators;
  return class Browser3 extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate12(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate12(this, null, _close_decorators, { kind: "method", name: "close", static: false, private: false, access: { has: (obj) => "close" in obj, get: (obj) => obj.close }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate12(this, null, _addPreloadScript_decorators, { kind: "method", name: "addPreloadScript", static: false, private: false, access: { has: (obj) => "addPreloadScript" in obj, get: (obj) => obj.addPreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate12(this, null, _removeIntercept_decorators, { kind: "method", name: "removeIntercept", static: false, private: false, access: { has: (obj) => "removeIntercept" in obj, get: (obj) => obj.removeIntercept }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate12(this, null, _removePreloadScript_decorators, { kind: "method", name: "removePreloadScript", static: false, private: false, access: { has: (obj) => "removePreloadScript" in obj, get: (obj) => obj.removePreloadScript }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate12(this, null, _createUserContext_decorators, { kind: "method", name: "createUserContext", static: false, private: false, access: { has: (obj) => "createUserContext" in obj, get: (obj) => obj.createUserContext }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    }
    static async from(session) {
      const browser = new Browser3(session);
      await browser.#initialize();
      return browser;
    }
    #closed = (__runInitializers12(this, _instanceExtraInitializers), false);
    #reason;
    #disposables = new DisposableStack();
    #userContexts = /* @__PURE__ */ new Map();
    session;
    #sharedWorkers = /* @__PURE__ */ new Map();
    constructor(session) {
      super();
      this.session = session;
    }
    async #initialize() {
      const sessionEmitter = this.#disposables.use(new EventEmitter(this.session));
      sessionEmitter.once("ended", ({ reason }) => {
        this.dispose(reason);
      });
      sessionEmitter.on("script.realmCreated", (info) => {
        if (info.type !== "shared-worker") {
          return;
        }
        this.#sharedWorkers.set(info.realm, SharedWorkerRealm.from(this, info.realm, info.origin));
      });
      await this.#syncUserContexts();
      await this.#syncBrowsingContexts();
    }
    async #syncUserContexts() {
      const { result: { userContexts } } = await this.session.send("browser.getUserContexts", {});
      for (const context of userContexts) {
        this.#createUserContext(context.userContext);
      }
    }
    async #syncBrowsingContexts() {
      const contextIds = /* @__PURE__ */ new Set();
      let contexts;
      {
        const env_1 = { stack: [], error: void 0, hasError: false };
        try {
          const sessionEmitter = __addDisposableResource6(env_1, new EventEmitter(this.session), false);
          sessionEmitter.on("browsingContext.contextCreated", (info) => {
            contextIds.add(info.context);
          });
          const { result } = await this.session.send("browsingContext.getTree", {});
          contexts = result.contexts;
        } catch (e_1) {
          env_1.error = e_1;
          env_1.hasError = true;
        } finally {
          __disposeResources6(env_1);
        }
      }
      for (const info of contexts) {
        if (!contextIds.has(info.context)) {
          this.session.emit("browsingContext.contextCreated", info);
        }
        if (info.children) {
          contexts.push(...info.children);
        }
      }
    }
    #createUserContext(id) {
      const userContext = UserContext.create(this, id);
      this.#userContexts.set(userContext.id, userContext);
      const userContextEmitter = this.#disposables.use(new EventEmitter(userContext));
      userContextEmitter.once("closed", () => {
        userContextEmitter.removeAllListeners();
        this.#userContexts.delete(userContext.id);
      });
      return userContext;
    }
    get closed() {
      return this.#closed;
    }
    get defaultUserContext() {
      return this.#userContexts.get(UserContext.DEFAULT);
    }
    get disconnected() {
      return this.#reason !== void 0;
    }
    get disposed() {
      return this.disconnected;
    }
    get userContexts() {
      return this.#userContexts.values();
    }
    dispose(reason, closed = false) {
      this.#closed = closed;
      this.#reason = reason;
      this[disposeSymbol]();
    }
    async close() {
      try {
        await this.session.send("browser.close", {});
      } finally {
        this.dispose("Browser already closed.", true);
      }
    }
    async addPreloadScript(functionDeclaration, options = {}) {
      const { result: { script } } = await this.session.send("script.addPreloadScript", {
        functionDeclaration,
        ...options,
        contexts: options.contexts?.map((context) => {
          return context.id;
        })
      });
      return script;
    }
    async removeIntercept(intercept) {
      await this.session.send("network.removeIntercept", {
        intercept
      });
    }
    async removePreloadScript(script) {
      await this.session.send("script.removePreloadScript", {
        script
      });
    }
    async createUserContext() {
      const { result: { userContext: context } } = await this.session.send("browser.createUserContext", {});
      return this.#createUserContext(context);
    }
    [(_dispose_decorators = [inertIfDisposed], _close_decorators = [throwIfDisposed((browser) => {
      return browser.#reason;
    })], _addPreloadScript_decorators = [throwIfDisposed((browser) => {
      return browser.#reason;
    })], _removeIntercept_decorators = [throwIfDisposed((browser) => {
      return browser.#reason;
    })], _removePreloadScript_decorators = [throwIfDisposed((browser) => {
      return browser.#reason;
    })], _createUserContext_decorators = [throwIfDisposed((browser) => {
      return browser.#reason;
    })], disposeSymbol)]() {
      this.#reason ??= "Browser was disconnected, probably because the session ended.";
      if (this.closed) {
        this.emit("closed", { reason: this.#reason });
      }
      this.emit("disconnected", { reason: this.#reason });
      this.#disposables.dispose();
      super[disposeSymbol]();
    }
  };
})();

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/core/Session.js
var __runInitializers13 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate13 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var Session = (() => {
  let _classSuper = EventEmitter;
  let _instanceExtraInitializers = [];
  let _connection_decorators;
  let _connection_initializers = [];
  let _connection_extraInitializers = [];
  let _dispose_decorators;
  let _send_decorators;
  let _subscribe_decorators;
  let _addIntercepts_decorators;
  let _end_decorators;
  return class Session2 extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate13(this, null, _connection_decorators, { kind: "accessor", name: "connection", static: false, private: false, access: { has: (obj) => "connection" in obj, get: (obj) => obj.connection, set: (obj, value) => {
        obj.connection = value;
      } }, metadata: _metadata }, _connection_initializers, _connection_extraInitializers);
      __esDecorate13(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: (obj) => "dispose" in obj, get: (obj) => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate13(this, null, _send_decorators, { kind: "method", name: "send", static: false, private: false, access: { has: (obj) => "send" in obj, get: (obj) => obj.send }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate13(this, null, _subscribe_decorators, { kind: "method", name: "subscribe", static: false, private: false, access: { has: (obj) => "subscribe" in obj, get: (obj) => obj.subscribe }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate13(this, null, _addIntercepts_decorators, { kind: "method", name: "addIntercepts", static: false, private: false, access: { has: (obj) => "addIntercepts" in obj, get: (obj) => obj.addIntercepts }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate13(this, null, _end_decorators, { kind: "method", name: "end", static: false, private: false, access: { has: (obj) => "end" in obj, get: (obj) => obj.end }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    }
    static async from(connection, capabilities) {
      const { result } = await connection.send("session.new", {
        capabilities
      });
      const session = new Session2(connection, result);
      await session.#initialize();
      return session;
    }
    #reason = __runInitializers13(this, _instanceExtraInitializers);
    #disposables = new DisposableStack();
    #info;
    browser;
    #connection_accessor_storage = __runInitializers13(this, _connection_initializers, void 0);
    get connection() {
      return this.#connection_accessor_storage;
    }
    set connection(value) {
      this.#connection_accessor_storage = value;
    }
    constructor(connection, info) {
      super();
      __runInitializers13(this, _connection_extraInitializers);
      this.#info = info;
      this.connection = connection;
    }
    async #initialize() {
      this.browser = await Browser2.from(this);
      const browserEmitter = this.#disposables.use(this.browser);
      browserEmitter.once("closed", ({ reason }) => {
        this.dispose(reason);
      });
      const seen = /* @__PURE__ */ new WeakSet();
      this.on("browsingContext.fragmentNavigated", (info) => {
        if (seen.has(info)) {
          return;
        }
        seen.add(info);
        this.emit("browsingContext.navigationStarted", info);
        this.emit("browsingContext.fragmentNavigated", info);
      });
    }
    get capabilities() {
      return this.#info.capabilities;
    }
    get disposed() {
      return this.ended;
    }
    get ended() {
      return this.#reason !== void 0;
    }
    get id() {
      return this.#info.sessionId;
    }
    dispose(reason) {
      this.#reason = reason;
      this[disposeSymbol]();
    }
    /**
     * Currently, there is a 1:1 relationship between the session and the
     * session. In the future, we might support multiple sessions and in that
     * case we always needs to make sure that the session for the right session
     * object is used, so we implement this method here, although it's not defined
     * in the spec.
     */
    async send(method, params) {
      return await this.connection.send(method, params);
    }
    async subscribe(events, contexts) {
      await this.send("session.subscribe", {
        events,
        contexts
      });
    }
    async addIntercepts(events, contexts) {
      await this.send("session.subscribe", {
        events,
        contexts
      });
    }
    async end() {
      try {
        await this.send("session.end", {});
      } finally {
        this.dispose(`Session already ended.`);
      }
    }
    [(_connection_decorators = [bubble()], _dispose_decorators = [inertIfDisposed], _send_decorators = [throwIfDisposed((session) => {
      return session.#reason;
    })], _subscribe_decorators = [throwIfDisposed((session) => {
      return session.#reason;
    })], _addIntercepts_decorators = [throwIfDisposed((session) => {
      return session.#reason;
    })], _end_decorators = [throwIfDisposed((session) => {
      return session.#reason;
    })], disposeSymbol)]() {
      this.#reason ??= "Session already destroyed, probably because the connection broke.";
      this.emit("ended", { reason: this.#reason });
      this.#disposables.dispose();
      super[disposeSymbol]();
    }
  };
})();

// node_modules/.pnpm/puppeteer-core@24.0.0_bare-buffer@3.0.1/node_modules/puppeteer-core/lib/esm/puppeteer/bidi/Browser.js
var __esDecorate14 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};
var __runInitializers14 = function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __setFunctionName2 = function(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var BidiBrowser = (() => {
  let _classSuper = Browser;
  let _private_trustedEmitter_decorators;
  let _private_trustedEmitter_initializers = [];
  let _private_trustedEmitter_extraInitializers = [];
  let _private_trustedEmitter_descriptor;
  return class BidiBrowser2 extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      _private_trustedEmitter_decorators = [bubble()];
      __esDecorate14(this, _private_trustedEmitter_descriptor = { get: __setFunctionName2(function() {
        return this.#trustedEmitter_accessor_storage;
      }, "#trustedEmitter", "get"), set: __setFunctionName2(function(value) {
        this.#trustedEmitter_accessor_storage = value;
      }, "#trustedEmitter", "set") }, _private_trustedEmitter_decorators, { kind: "accessor", name: "#trustedEmitter", static: false, private: true, access: { has: (obj) => #trustedEmitter in obj, get: (obj) => obj.#trustedEmitter, set: (obj, value) => {
        obj.#trustedEmitter = value;
      } }, metadata: _metadata }, _private_trustedEmitter_initializers, _private_trustedEmitter_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    }
    protocol = "webDriverBiDi";
    static subscribeModules = [
      "browsingContext",
      "network",
      "log",
      "script"
    ];
    static subscribeCdpEvents = [
      // Coverage
      "cdp.Debugger.scriptParsed",
      "cdp.CSS.styleSheetAdded",
      "cdp.Runtime.executionContextsCleared",
      // Tracing
      "cdp.Tracing.tracingComplete",
      // TODO: subscribe to all CDP events in the future.
      "cdp.Network.requestWillBeSent",
      "cdp.Debugger.scriptParsed",
      "cdp.Page.screencastFrame"
    ];
    static async create(opts) {
      const session = await Session.from(opts.connection, {
        firstMatch: opts.capabilities?.firstMatch,
        alwaysMatch: {
          ...opts.capabilities?.alwaysMatch,
          // Capabilities that come from Puppeteer's API take precedence.
          acceptInsecureCerts: opts.acceptInsecureCerts,
          unhandledPromptBehavior: {
            default: "ignore"
          },
          webSocketUrl: true,
          // Puppeteer with WebDriver BiDi does not support prerendering
          // yet because WebDriver BiDi behavior is not specified. See
          // https://github.com/w3c/webdriver-bidi/issues/321.
          "goog:prerenderingDisabled": true
        }
      });
      await session.subscribe(session.capabilities.browserName.toLocaleLowerCase().includes("firefox") ? BidiBrowser2.subscribeModules : [...BidiBrowser2.subscribeModules, ...BidiBrowser2.subscribeCdpEvents]);
      const browser = new BidiBrowser2(session.browser, opts);
      browser.#initialize();
      return browser;
    }
    #trustedEmitter_accessor_storage = __runInitializers14(this, _private_trustedEmitter_initializers, new EventEmitter());
    get #trustedEmitter() {
      return _private_trustedEmitter_descriptor.get.call(this);
    }
    set #trustedEmitter(value) {
      return _private_trustedEmitter_descriptor.set.call(this, value);
    }
    #process = __runInitializers14(this, _private_trustedEmitter_extraInitializers);
    #closeCallback;
    #browserCore;
    #defaultViewport;
    #browserContexts = /* @__PURE__ */ new WeakMap();
    #target = new BidiBrowserTarget(this);
    #cdpConnection;
    constructor(browserCore, opts) {
      super();
      this.#process = opts.process;
      this.#closeCallback = opts.closeCallback;
      this.#browserCore = browserCore;
      this.#defaultViewport = opts.defaultViewport;
      this.#cdpConnection = opts.cdpConnection;
    }
    #initialize() {
      for (const userContext of this.#browserCore.userContexts) {
        this.#createBrowserContext(userContext);
      }
      this.#browserCore.once("disconnected", () => {
        this.#trustedEmitter.emit("disconnected", void 0);
        this.#trustedEmitter.removeAllListeners();
      });
      this.#process?.once("close", () => {
        this.#browserCore.dispose("Browser process exited.", true);
        this.connection.dispose();
      });
    }
    get #browserName() {
      return this.#browserCore.session.capabilities.browserName;
    }
    get #browserVersion() {
      return this.#browserCore.session.capabilities.browserVersion;
    }
    get cdpSupported() {
      return this.#cdpConnection !== void 0;
    }
    get cdpConnection() {
      return this.#cdpConnection;
    }
    async userAgent() {
      return this.#browserCore.session.capabilities.userAgent;
    }
    #createBrowserContext(userContext) {
      const browserContext = BidiBrowserContext.from(this, userContext, {
        defaultViewport: this.#defaultViewport
      });
      this.#browserContexts.set(userContext, browserContext);
      browserContext.trustedEmitter.on("targetcreated", (target) => {
        this.#trustedEmitter.emit("targetcreated", target);
      });
      browserContext.trustedEmitter.on("targetchanged", (target) => {
        this.#trustedEmitter.emit("targetchanged", target);
      });
      browserContext.trustedEmitter.on("targetdestroyed", (target) => {
        this.#trustedEmitter.emit("targetdestroyed", target);
      });
      return browserContext;
    }
    get connection() {
      return this.#browserCore.session.connection;
    }
    wsEndpoint() {
      return this.connection.url;
    }
    async close() {
      if (this.connection.closed) {
        return;
      }
      try {
        await this.#browserCore.close();
        await this.#closeCallback?.call(null);
      } catch (error) {
        debugError(error);
      } finally {
        this.connection.dispose();
      }
    }
    get connected() {
      return !this.#browserCore.disconnected;
    }
    process() {
      return this.#process ?? null;
    }
    async createBrowserContext(_options) {
      const userContext = await this.#browserCore.createUserContext();
      return this.#createBrowserContext(userContext);
    }
    async version() {
      return `${this.#browserName}/${this.#browserVersion}`;
    }
    browserContexts() {
      return [...this.#browserCore.userContexts].map((context) => {
        return this.#browserContexts.get(context);
      });
    }
    defaultBrowserContext() {
      return this.#browserContexts.get(this.#browserCore.defaultUserContext);
    }
    newPage() {
      return this.defaultBrowserContext().newPage();
    }
    targets() {
      return [
        this.#target,
        ...this.browserContexts().flatMap((context) => {
          return context.targets();
        })
      ];
    }
    target() {
      return this.#target;
    }
    async disconnect() {
      try {
        await this.#browserCore.session.end();
      } catch (error) {
        debugError(error);
      } finally {
        this.connection.dispose();
      }
    }
    get debugInfo() {
      return {
        pendingProtocolErrors: this.connection.getPendingProtocolErrors()
      };
    }
  };
})();
export {
  BidiBrowser,
  BidiBrowserContext,
  BidiConnection,
  BidiElementHandle,
  BidiFrame,
  BidiFrameRealm,
  BidiHTTPRequest,
  BidiHTTPResponse,
  BidiJSHandle,
  BidiKeyboard,
  BidiMouse,
  BidiPage,
  BidiRealm,
  BidiTouchscreen,
  BidiWorkerRealm,
  bidiToPuppeteerCookie,
  cdpSpecificCookiePropertiesFromPuppeteerToBidi,
  connectBidiOverCdp,
  convertCookiesExpiryCdpToBiDi,
  convertCookiesPartitionKeyFromPuppeteerToBiDi,
  convertCookiesSameSiteCdpToBiDi,
  requests
};
/*! Bundled license information:

puppeteer-core/lib/esm/puppeteer/bidi/Connection.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/BidiOverCdp.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/core/Navigation.js:
  (**
   * @license
   * Copyright 2024 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/core/Realm.js:
  (**
   * @license
   * Copyright 2024 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/core/Request.js:
  (**
   * @license
   * Copyright 2024 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/core/UserPrompt.js:
  (**
   * @license
   * Copyright 2024 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/core/BrowsingContext.js:
  (**
   * @license
   * Copyright 2024 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/core/UserContext.js:
  (**
   * @license
   * Copyright 2024 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/Deserializer.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/Dialog.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/JSHandle.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/ElementHandle.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/ExposedFunction.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/Serializer.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/util.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/WebWorker.js:
  (**
   * @license
   * Copyright 2024 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/Frame.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/Input.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/Page.js:
  (**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/Target.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/BrowserContext.js:
  (**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/core/Browser.js:
  (**
   * @license
   * Copyright 2024 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/core/Session.js:
  (**
   * @license
   * Copyright 2024 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/Browser.js:
  (**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

puppeteer-core/lib/esm/puppeteer/bidi/bidi.js:
  (**
   * @license
   * Copyright 2022 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
//# sourceMappingURL=bidi-UUOSQ4ZM.mjs.map
