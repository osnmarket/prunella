"use strict";

var React$1 = require("react");
var react = require("@chakra-ui/react");
var fi = require("react-icons/fi");
var formik = require("formik");
var vsc = require("react-icons/vsc");
var createStyled = require("@emotion/styled");
var react$1 = require("@emotion/react");
var jsxRuntime = require("react/jsx-runtime");
var Link = require("next/link");
var fa = require("react-icons/fa");

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(
          n,
          k,
          d.get
            ? d
            : {
                enumerable: true,
                get: function () {
                  return e[k];
                },
              }
        );
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var fa__namespace = /*#__PURE__*/ _interopNamespaceDefault(fa);

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var commonjsGlobal =
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof window !== "undefined"
    ? window
    : typeof global !== "undefined"
    ? global
    : typeof self !== "undefined"
    ? self
    : {};

var propTypesExports = {};
var propTypes = {
  get exports() {
    return propTypesExports;
  },
  set exports(v) {
    propTypesExports = v;
  },
};

var reactIsExports = {};
var reactIs = {
  get exports() {
    return reactIsExports;
  },
  set exports(v) {
    reactIsExports = v;
  },
};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min) return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.block") : 60121,
    w = b ? Symbol.for("react.fundamental") : 60117,
    x = b ? Symbol.for("react.responder") : 60118,
    y = b ? Symbol.for("react.scope") : 60119;
  function z(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c:
          switch (((a = a.type), a)) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;
            default:
              switch (((a = a && a.$$typeof), a)) {
                case k:
                case n:
                case t:
                case r:
                case h:
                  return a;
                default:
                  return u;
              }
          }
        case d:
          return u;
      }
    }
  }
  function A(a) {
    return z(a) === m;
  }
  reactIs_production_min.AsyncMode = l;
  reactIs_production_min.ConcurrentMode = m;
  reactIs_production_min.ContextConsumer = k;
  reactIs_production_min.ContextProvider = h;
  reactIs_production_min.Element = c;
  reactIs_production_min.ForwardRef = n;
  reactIs_production_min.Fragment = e;
  reactIs_production_min.Lazy = t;
  reactIs_production_min.Memo = r;
  reactIs_production_min.Portal = d;
  reactIs_production_min.Profiler = g;
  reactIs_production_min.StrictMode = f;
  reactIs_production_min.Suspense = p;
  reactIs_production_min.isAsyncMode = function (a) {
    return A(a) || z(a) === l;
  };
  reactIs_production_min.isConcurrentMode = A;
  reactIs_production_min.isContextConsumer = function (a) {
    return z(a) === k;
  };
  reactIs_production_min.isContextProvider = function (a) {
    return z(a) === h;
  };
  reactIs_production_min.isElement = function (a) {
    return "object" === typeof a && null !== a && a.$$typeof === c;
  };
  reactIs_production_min.isForwardRef = function (a) {
    return z(a) === n;
  };
  reactIs_production_min.isFragment = function (a) {
    return z(a) === e;
  };
  reactIs_production_min.isLazy = function (a) {
    return z(a) === t;
  };
  reactIs_production_min.isMemo = function (a) {
    return z(a) === r;
  };
  reactIs_production_min.isPortal = function (a) {
    return z(a) === d;
  };
  reactIs_production_min.isProfiler = function (a) {
    return z(a) === g;
  };
  reactIs_production_min.isStrictMode = function (a) {
    return z(a) === f;
  };
  reactIs_production_min.isSuspense = function (a) {
    return z(a) === p;
  };
  reactIs_production_min.isValidElementType = function (a) {
    return (
      "string" === typeof a ||
      "function" === typeof a ||
      a === e ||
      a === m ||
      a === g ||
      a === f ||
      a === p ||
      a === q ||
      ("object" === typeof a &&
        null !== a &&
        (a.$$typeof === t ||
          a.$$typeof === r ||
          a.$$typeof === h ||
          a.$$typeof === k ||
          a.$$typeof === n ||
          a.$$typeof === w ||
          a.$$typeof === x ||
          a.$$typeof === y ||
          a.$$typeof === v))
    );
  };
  reactIs_production_min.typeOf = z;
  return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development() {
  if (hasRequiredReactIs_development) return reactIs_development;
  hasRequiredReactIs_development = 1;

  if (process.env.NODE_ENV !== "production") {
    (function () {
      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol
        ? Symbol.for("react.fragment")
        : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol
        ? Symbol.for("react.strict_mode")
        : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol
        ? Symbol.for("react.profiler")
        : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol
        ? Symbol.for("react.provider")
        : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol
        ? Symbol.for("react.async_mode")
        : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol
        ? Symbol.for("react.concurrent_mode")
        : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol
        ? Symbol.for("react.forward_ref")
        : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol
        ? Symbol.for("react.suspense")
        : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol
        ? Symbol.for("react.suspense_list")
        : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol
        ? Symbol.for("react.fundamental")
        : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol
        ? Symbol.for("react.responder")
        : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 0xead7;

      function isValidElementType(type) {
        return (
          typeof type === "string" ||
          typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE ||
          type === REACT_CONCURRENT_MODE_TYPE ||
          type === REACT_PROFILER_TYPE ||
          type === REACT_STRICT_MODE_TYPE ||
          type === REACT_SUSPENSE_TYPE ||
          type === REACT_SUSPENSE_LIST_TYPE ||
          (typeof type === "object" &&
            type !== null &&
            (type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
              type.$$typeof === REACT_RESPONDER_TYPE ||
              type.$$typeof === REACT_SCOPE_TYPE ||
              type.$$typeof === REACT_BLOCK_TYPE))
        );
      }

      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }
              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode

      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console["warn"](
              "The ReactIs.isAsyncMode() alias has been deprecated, " +
                "and will be removed in React 17+. Update your code to use " +
                "ReactIs.isConcurrentMode() instead. It has the exact same API."
            );
          }
        }

        return (
          isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE
        );
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return (
          typeof object === "object" &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE
        );
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      reactIs_development.AsyncMode = AsyncMode;
      reactIs_development.ConcurrentMode = ConcurrentMode;
      reactIs_development.ContextConsumer = ContextConsumer;
      reactIs_development.ContextProvider = ContextProvider;
      reactIs_development.Element = Element;
      reactIs_development.ForwardRef = ForwardRef;
      reactIs_development.Fragment = Fragment;
      reactIs_development.Lazy = Lazy;
      reactIs_development.Memo = Memo;
      reactIs_development.Portal = Portal;
      reactIs_development.Profiler = Profiler;
      reactIs_development.StrictMode = StrictMode;
      reactIs_development.Suspense = Suspense;
      reactIs_development.isAsyncMode = isAsyncMode;
      reactIs_development.isConcurrentMode = isConcurrentMode;
      reactIs_development.isContextConsumer = isContextConsumer;
      reactIs_development.isContextProvider = isContextProvider;
      reactIs_development.isElement = isElement;
      reactIs_development.isForwardRef = isForwardRef;
      reactIs_development.isFragment = isFragment;
      reactIs_development.isLazy = isLazy;
      reactIs_development.isMemo = isMemo;
      reactIs_development.isPortal = isPortal;
      reactIs_development.isProfiler = isProfiler;
      reactIs_development.isStrictMode = isStrictMode;
      reactIs_development.isSuspense = isSuspense;
      reactIs_development.isValidElementType = isValidElementType;
      reactIs_development.typeOf = typeOf;
    })();
  }
  return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs() {
  if (hasRequiredReactIs) return reactIsExports;
  hasRequiredReactIs = 1;
  (function (module) {
    if (process.env.NODE_ENV === "production") {
      module.exports = requireReactIs_production_min();
    } else {
      module.exports = requireReactIs_development();
    }
  })(reactIs);
  return reactIsExports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign() {
  if (hasRequiredObjectAssign) return objectAssign;
  hasRequiredObjectAssign = 1;
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError(
        "Object.assign cannot be called with null or undefined"
      );
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }

      // Detect buggy property enumeration order in older V8 versions.

      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String("abc"); // eslint-disable-line no-new-wrappers
      test1[5] = "de";
      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2["_" + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });
      if (order2.join("") !== "0123456789") {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {};
      "abcdefghijklmnopqrst".split("").forEach(function (letter) {
        test3[letter] = letter;
      });
      if (
        Object.keys(Object.assign({}, test3)).join("") !==
        "abcdefghijklmnopqrst"
      ) {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  objectAssign = shouldUseNative()
    ? Object.assign
    : function (target, source) {
        var from;
        var to = toObject(target);
        var symbols;

        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);

          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }

          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }

        return to;
      };
  return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;

  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas() {
  if (hasRequiredHas) return has;
  hasRequiredHas = 1;
  has = Function.call.bind(Object.prototype.hasOwnProperty);
  return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes() {
  if (hasRequiredCheckPropTypes) return checkPropTypes_1;
  hasRequiredCheckPropTypes = 1;

  var printWarning = function () {};

  if (process.env.NODE_ENV !== "production") {
    var ReactPropTypesSecret = requireReactPropTypesSecret();
    var loggedTypeFailures = {};
    var has = requireHas();

    printWarning = function (text) {
      var message = "Warning: " + text;
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {
        /**/
      }
    };
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(
    typeSpecs,
    values,
    location,
    componentName,
    getStack
  ) {
    if (process.env.NODE_ENV !== "production") {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== "function") {
              var err = Error(
                (componentName || "React class") +
                  ": " +
                  location +
                  " type `" +
                  typeSpecName +
                  "` is invalid; " +
                  "it must be a function, usually from the `prop-types` package, but received `" +
                  typeof typeSpecs[typeSpecName] +
                  "`." +
                  "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              err.name = "Invariant Violation";
              throw err;
            }
            error = typeSpecs[typeSpecName](
              values,
              typeSpecName,
              componentName,
              location,
              null,
              ReactPropTypesSecret
            );
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || "React class") +
                ": type specification of " +
                location +
                " `" +
                typeSpecName +
                "` is invalid; the type checker " +
                "function must return `null` or an `Error` but returned a " +
                typeof error +
                ". " +
                "You may have forgotten to pass an argument to the type checker " +
                "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " +
                "shape all require an argument)."
            );
          }
          if (
            error instanceof Error &&
            !(error.message in loggedTypeFailures)
          ) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;

            var stack = getStack ? getStack() : "";

            printWarning(
              "Failed " +
                location +
                " type: " +
                error.message +
                (stack != null ? stack : "")
            );
          }
        }
      }
    }
  }

  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes.resetWarningCache = function () {
    if (process.env.NODE_ENV !== "production") {
      loggedTypeFailures = {};
    }
  };

  checkPropTypes_1 = checkPropTypes;
  return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers() {
  if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
  hasRequiredFactoryWithTypeCheckers = 1;

  var ReactIs = requireReactIs();
  var assign = requireObjectAssign();

  var ReactPropTypesSecret = requireReactPropTypesSecret();
  var has = requireHas();
  var checkPropTypes = requireCheckPropTypes();

  var printWarning = function () {};

  if (process.env.NODE_ENV !== "production") {
    printWarning = function (text) {
      var message = "Warning: " + text;
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator"; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn =
        maybeIterable &&
        ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
          maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === "function") {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = "<<anonymous>>";

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker("array"),
      bigint: createPrimitiveTypeChecker("bigint"),
      bool: createPrimitiveTypeChecker("boolean"),
      func: createPrimitiveTypeChecker("function"),
      number: createPrimitiveTypeChecker("number"),
      object: createPrimitiveTypeChecker("object"),
      string: createPrimitiveTypeChecker("string"),
      symbol: createPrimitiveTypeChecker("symbol"),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message, data) {
      this.message = message;
      this.data = data && typeof data === "object" ? data : {};
      this.stack = "";
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      if (process.env.NODE_ENV !== "production") {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(
        isRequired,
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret
      ) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
                "Use `PropTypes.checkPropTypes()` to call them. " +
                "Read more at http://fb.me/use-check-prop-types"
            );
            err.name = "Invariant Violation";
            throw err;
          } else if (
            process.env.NODE_ENV !== "production" &&
            typeof console !== "undefined"
          ) {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ":" + propName;
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning(
                "You are manually calling a React.PropTypes validation " +
                  "function for the `" +
                  propFullName +
                  "` prop on `" +
                  componentName +
                  "`. This is deprecated " +
                  "and will throw in the standalone `prop-types` package. " +
                  "You may be seeing this warning due to a third-party PropTypes " +
                  "library. See https://fb.me/react-warning-dont-call-proptypes " +
                  "for details."
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError(
                "The " +
                  location +
                  " `" +
                  propFullName +
                  "` is marked as required " +
                  ("in `" + componentName + "`, but its value is `null`.")
              );
            }
            return new PropTypeError(
              "The " +
                location +
                " `" +
                propFullName +
                "` is marked as required in " +
                ("`" + componentName + "`, but its value is `undefined`.")
            );
          }
          return null;
        } else {
          return validate(
            props,
            propName,
            componentName,
            location,
            propFullName
          );
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret
      ) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);

          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                preciseType +
                "` supplied to `" +
                componentName +
                "`, expected ") +
              ("`" + expectedType + "`."),
            { expectedType: expectedType }
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError(
            "Property `" +
              propFullName +
              "` of component `" +
              componentName +
              "` has invalid PropType notation inside arrayOf."
          );
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected an array.")
          );
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(
            propValue,
            i,
            componentName,
            location,
            propFullName + "[" + i + "]",
            ReactPropTypesSecret
          );
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected a single ReactElement.")
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];
        if (!ReactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected a single ReactElement type.")
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                actualClassName +
                "` supplied to `" +
                componentName +
                "`, expected ") +
              ("instance of `" + expectedClassName + "`.")
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        if (process.env.NODE_ENV !== "production") {
          if (arguments.length > 1) {
            printWarning(
              "Invalid arguments supplied to oneOf, expected an array, got " +
                arguments.length +
                " arguments. " +
                "A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
            );
          } else {
            printWarning(
              "Invalid argument supplied to oneOf, expected an array."
            );
          }
        }
        return emptyFunctionThatReturnsNull;
      }

      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(
          expectedValues,
          function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          }
        );
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of value `" +
            String(propValue) +
            "` " +
            ("supplied to `" +
              componentName +
              "`, expected one of " +
              valuesString +
              ".")
        );
      }
      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError(
            "Property `" +
              propFullName +
              "` of component `" +
              componentName +
              "` has invalid PropType notation inside objectOf."
          );
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected an object.")
          );
        }
        for (var key in propValue) {
          if (has(propValue, key)) {
            var error = typeChecker(
              propValue,
              key,
              componentName,
              location,
              propFullName + "." + key,
              ReactPropTypesSecret
            );
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        process.env.NODE_ENV !== "production"
          ? printWarning(
              "Invalid argument supplied to oneOfType, expected an instance of array."
            )
          : void 0;
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== "function") {
          printWarning(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but " +
              "received " +
              getPostfixForTypeWarning(checker) +
              " at index " +
              i +
              "."
          );
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var expectedTypes = [];
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          var checkerResult = checker(
            props,
            propName,
            componentName,
            location,
            propFullName,
            ReactPropTypesSecret
          );
          if (checkerResult == null) {
            return null;
          }
          if (checkerResult.data && has(checkerResult.data, "expectedType")) {
            expectedTypes.push(checkerResult.data.expectedType);
          }
        }
        var expectedTypesMessage =
          expectedTypes.length > 0
            ? ", expected one of type [" + expectedTypes.join(", ") + "]"
            : "";
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` supplied to " +
            ("`" + componentName + "`" + expectedTypesMessage + ".")
        );
      }
      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (!isNode(props[propName])) {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` supplied to " +
              ("`" + componentName + "`, expected a ReactNode.")
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function invalidValidatorError(
      componentName,
      location,
      propFullName,
      key,
      type
    ) {
      return new PropTypeError(
        (componentName || "React class") +
          ": " +
          location +
          " type `" +
          propFullName +
          "." +
          key +
          "` is invalid; " +
          "it must be a function, usually from the `prop-types` package, but received `" +
          type +
          "`."
      );
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type `" +
              propType +
              "` " +
              ("supplied to `" + componentName + "`, expected `object`.")
          );
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (typeof checker !== "function") {
            return invalidValidatorError(
              componentName,
              location,
              propFullName,
              key,
              getPreciseType(checker)
            );
          }
          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + "." + key,
            ReactPropTypesSecret
          );
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type `" +
              propType +
              "` " +
              ("supplied to `" + componentName + "`, expected `object`.")
          );
        }
        // We need to check all keys in case some are required but missing from props.
        var allKeys = assign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (has(shapeTypes, key) && typeof checker !== "function") {
            return invalidValidatorError(
              componentName,
              location,
              propFullName,
              key,
              getPreciseType(checker)
            );
          }
          if (!checker) {
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` key `" +
                key +
                "` supplied to `" +
                componentName +
                "`." +
                "\nBad object: " +
                JSON.stringify(props[propName], null, "  ") +
                "\nValid keys: " +
                JSON.stringify(Object.keys(shapeTypes), null, "  ")
            );
          }
          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + "." + key,
            ReactPropTypesSecret
          );
          if (error) {
            return error;
          }
        }
        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case "number":
        case "string":
        case "undefined":
          return true;
        case "boolean":
          return !propValue;
        case "object":
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;
        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === "symbol") {
        return true;
      }

      // falsy value can't be a Symbol
      if (!propValue) {
        return false;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue["@@toStringTag"] === "Symbol") {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === "function" && propValue instanceof Symbol) {
        return true;
      }

      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return "array";
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return "object";
      }
      if (isSymbol(propType, propValue)) {
        return "symbol";
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === "undefined" || propValue === null) {
        return "" + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === "object") {
        if (propValue instanceof Date) {
          return "date";
        } else if (propValue instanceof RegExp) {
          return "regexp";
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case "array":
        case "object":
          return "an " + type;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };
  return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;

  var ReactPropTypesSecret = requireReactPropTypesSecret();

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  factoryWithThrowingShims = function () {
    function shim(
      props,
      propName,
      componentName,
      location,
      propFullName,
      secret
    ) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
          "Use PropTypes.checkPropTypes() to call them. " +
          "Read more at http://fb.me/use-check-prop-types"
      );
      err.name = "Invariant Violation";
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    } // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bigint: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction,
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };
  return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== "production") {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(
    ReactIs.isElement,
    throwOnDirectAccess
  );
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

var IconedButton = function IconedButton(_ref) {
  var onClick = _ref.onClick,
    style = _ref.style,
    message = _ref.message,
    rightIcon = _ref.rightIcon,
    leftIcon = _ref.leftIcon;
  return /*#__PURE__*/ React$1.createElement(
    react.Button,
    _extends(
      {
        rightIcon: rightIcon,
        leftIcon: leftIcon,
      },
      !rightIcon &&
        !leftIcon && {
          rightIcon: /*#__PURE__*/ React$1.createElement(fi.FiArrowRight, {
            size: "1.5rem",
          }),
        },
      onClick,
      style
    ),
    message
  );
};
IconedButton.defaultProps = {
  style: {
    colorScheme: "orange",
    bgColor: "#fff",
    color: "orange",
    message: "variant",
    variant: "outline",
    justifyContent: "center",
    borderWidth: "2px",
    fontSize: "1rem",
    h: "3rem",
  },
  rightIcon: /*#__PURE__*/ React$1.createElement(fi.FiArrowRight, {
    size: "1.5rem",
  }),
  leftIcon: /*#__PURE__*/ React$1.createElement(fi.FiArrowLeft, {
    size: "1.5rem",
  }),
  message: "Retour en arriere",
  onClick: {},
};
var SocialButton = function SocialButton(_ref2) {
  var onClick = _ref2.onClick,
    colorScheme = _ref2.colorScheme,
    bgColor = _ref2.bgColor,
    color = _ref2.color,
    message = _ref2.message,
    icon = _ref2.icon,
    variant = _ref2.variant,
    pl = _ref2.pl,
    size = _ref2.size,
    justifyContent = _ref2.justifyContent;
  return /*#__PURE__*/ React$1.createElement(
    react.Button,
    {
      leftIcon:
        icon ||
        /*#__PURE__*/ React$1.createElement(fi.FiArrowLeft, {
          size: "1.5rem",
        }),
      pl: pl,
      justifyContent: justifyContent,
      variant: variant,
      onClick: onClick,
      colorScheme: colorScheme,
      bgColor: bgColor,
      color: color,
      size: size,
      fontSize: "1rem",
      h: "1.5rem",
    },
    message
  );
};
var BackToHome = function BackToHome(_ref3) {
  var onClick = _ref3.onClick,
    cta = _ref3.cta,
    leftIcon = _ref3.leftIcon;
  return /*#__PURE__*/ React$1.createElement(
    react.Button,
    {
      leftIcon:
        leftIcon ||
        /*#__PURE__*/ React$1.createElement(fi.FiArrowLeft, {
          size: "1.5rem",
        }),
      colorScheme: "transparent",
      variant: "ghost",
      fontSize: "1rem",
      h: "1.5rem",
      pl: 0,
      onClick: onClick,
    },
    cta || "Retour vers l'accueil du portail"
  );
};
var AvisButton = function AvisButton(_ref4) {
  var bgColor = _ref4.bgColor,
    icon = _ref4.icon,
    message = _ref4.message,
    h = _ref4.h,
    p = _ref4.p,
    iconSize = _ref4.iconSize,
    textSize = _ref4.textSize,
    externe = _ref4.externe;
  return externe
    ? /*#__PURE__*/ React$1.createElement(
        react.VStack,
        null,
        /*#__PURE__*/ React$1.createElement(
          react.Button,
          {
            bgColor: bgColor,
            p: p,
            fontSize: iconSize || "3rem",
            h: h || "auto",
          },
          icon
        ),
        /*#__PURE__*/ React$1.createElement(
          react.Text,
          {
            fontSize: textSize,
          },
          message
        )
      )
    : /*#__PURE__*/ React$1.createElement(
        react.Button,
        {
          bgColor: bgColor,
          p: p,
          h: h || "auto",
        },
        /*#__PURE__*/ React$1.createElement(
          react.VStack,
          null,
          /*#__PURE__*/ React$1.createElement(
            react.Text,
            {
              fontSize: iconSize,
            },
            icon
          ),
          /*#__PURE__*/ React$1.createElement(
            react.Text,
            {
              fontSize: textSize,
            },
            message
          )
        )
      );
};
AvisButton.propTypes = {
  icon: propTypesExports.PropTypes.string,
  bgColor: propTypesExports.PropTypes.string,
  message: propTypesExports.PropTypes.string,
  h: propTypesExports.PropTypes.string,
  p: propTypesExports.PropTypes.string,
  fontSize: propTypesExports.PropTypes.string,
  externe: propTypesExports.PropTypes.bool,
};
AvisButton.defaultProps = {
  bgColor: "#eeeeee",
  message: "Decevant",
  icon: "ðŸ¥°",
  p: "1rem",
  iconSize: "3rem",
  textSize: "1rem",
  externe: false,
};

var Heading$1 = function Heading(_ref) {
  var containerStyle = _ref.containerStyle,
    title = _ref.title,
    subTitle = _ref.subTitle;
  return /*#__PURE__*/ React$1.createElement(
    react.Box,
    containerStyle,
    title &&
      /*#__PURE__*/ React$1.createElement(react.Text, title.style, title.text),
    subTitle &&
      /*#__PURE__*/ React$1.createElement(
        react.Text,
        subTitle.style,
        subTitle.text
      )
  );
};
Heading$1.propTypes = {
  containerStyle: propTypesExports.PropTypes.shape({
    align: "center",
  }),
  title: propTypesExports.PropTypes.shape({
    text: propTypesExports.PropTypes.string,
    style: propTypesExports.PropTypes.shape({
      size: propTypesExports.PropTypes.string,
      textTransform: propTypesExports.PropTypes.string,
    }),
  }),
  subTitle: propTypesExports.PropTypes.shape({
    text: propTypesExports.PropTypes.string,
    tyle: propTypesExports.PropTypes.shape({
      fontSize: propTypesExports.PropTypes.string,
      pt: propTypesExports.PropTypes.string,
    }),
  }),
};
Heading$1.defaultProps = {
  containerStyle: {
    align: "center",
  },
  title: {
    text: "Summary",
    style: {
      fontSize: "1.5rem",
      textTransform: "uppercase",
    },
  },
  subTitle: {
    text: "View a summary of all your clients over the last month.",
    style: {
      fontSize: "1rem",
      pt: "2",
    },
  },
};

var _FormInput$defaultPro;
var activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};
var theme = react.extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: _objectSpread2({}, activeLabelStyles),
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) + label":
              _objectSpread2({}, activeLabelStyles),
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});
var FormInput = function FormInput(_ref) {
  var colors = _ref.colors,
    select = _ref.select,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    textArea = _ref.textArea,
    uid = _ref.uid,
    label = _ref.label,
    errors = _ref.errors,
    placeholder = _ref.placeholder,
    handleChange = _ref.handleChange,
    handleBlur = _ref.handleBlur,
    touched = _ref.touched,
    type = _ref.type,
    values = _ref.values,
    py = _ref.py,
    pt = _ref.pt,
    pb = _ref.pb,
    isDisabled = _ref.isDisabled,
    passwordTypeToggler = _ref.passwordTypeToggler,
    secureTextEntry = _ref.secureTextEntry;
  var inputProps = {
    bgColor: colors.bgColor,
    color: colors.colors,
    name: uid,
    onChange: handleChange,
    onBlur: handleBlur,
    borderColor: colors.borderColor,
    fontcolor: colors.fontColor,
    placeholder: placeholder,
    type: type || "text",
    value: values[uid],
    h: 50,
    w: "100%",
    isDisabled: isDisabled,
  };
  return /*#__PURE__*/ React$1.createElement(
    react.ChakraProvider,
    {
      theme: theme,
    },
    /*#__PURE__*/ React$1.createElement(
      react.FormControl,
      {
        pt: pt,
        pb: pb,
        py: py,
        isInvalid: errors[uid],
        variant: "floating",
      },
      /*#__PURE__*/ React$1.createElement(
        react.FormLabel,
        {
          color: inputProps.color,
          fontWeight: "bold",
        },
        label
      ),
      textArea
        ? /*#__PURE__*/ React$1.createElement(
            react.Textarea,
            _extends(
              {
                p: 5,
                minH: 220,
                maxH: 220,
              },
              inputProps
            )
          )
        : select
        ? /*#__PURE__*/ React$1.createElement(
            react.Select,
            inputProps,
            options.map(function (option, i) {
              return /*#__PURE__*/ React$1.createElement(
                "option",
                {
                  value: option.value,
                  key: "".concat(uid, "-option-").concat(i),
                },
                option.name
              );
            })
          )
        : /*#__PURE__*/ React$1.createElement(
            react.Box,
            {
              pos: "relative",
              w: "100%",
            },
            /*#__PURE__*/ React$1.createElement(react.Input, inputProps),
            secureTextEntry &&
              /*#__PURE__*/ React$1.createElement(
                react.Box,
                {
                  pos: "absolute",
                  right: "3%",
                  top: "30%",
                  _hover: {
                    cursor: "pointer",
                  },
                  onClick: passwordTypeToggler,
                  zIndex: 2,
                },
                type == "password"
                  ? /*#__PURE__*/ React$1.createElement(vsc.VscEye, {
                      color: inputProps.color,
                      size: "1.25rem",
                    })
                  : /*#__PURE__*/ React$1.createElement(vsc.VscEyeClosed, {
                      color: inputProps.color,
                      size: "1.25rem",
                    })
              )
          ),
      errors[uid] &&
        touched[uid] &&
        /*#__PURE__*/ React$1.createElement(
          react.FormErrorMessage,
          null,
          errors[uid]
        )
    )
  );
};
FormInput.defaultProps =
  ((_FormInput$defaultPro = {
    type: "password",
    errors: [],
    values: [],
  }),
  _defineProperty(_FormInput$defaultPro, "type", "text"),
  _defineProperty(_FormInput$defaultPro, "colors", {
    bgColor: "#FFF",
    color: "#FFF",
    borderColor: "#959595",
    fontColor: "#000",
  }),
  _defineProperty(_FormInput$defaultPro, "label", "test"),
  _FormInput$defaultPro);
var FormSubmit = function FormSubmit(_ref2) {
  var colors = _ref2.colors,
    loadingText = _ref2.loadingText,
    uid = _ref2.uid,
    touched = _ref2.touched,
    errors = _ref2.errors,
    submit_message = _ref2.submit_message,
    handleSubmit = _ref2.handleSubmit,
    isSubmitting = _ref2.isSubmitting,
    pt = _ref2.pt,
    pb = _ref2.pb,
    colorScheme = _ref2.colorScheme,
    color = _ref2.color,
    rightIcon = _ref2.rightIcon,
    leftIcon = _ref2.leftIcon,
    borderRadius = _ref2.borderRadius,
    borderWidth = _ref2.borderWidth,
    _ref2$h = _ref2.h,
    h = _ref2$h === void 0 ? "3rem" : _ref2$h;
  return /*#__PURE__*/ React$1.createElement(
    react.FormControl,
    {
      pt: pt,
      pb: pb,
      colorScheme: colorScheme,
    },
    /*#__PURE__*/ React$1.createElement(
      react.Button,
      {
        rightIcon: rightIcon,
        leftIcon: leftIcon,
        onClick: handleSubmit,
        colorScheme: colorScheme,
        borderWidth: borderWidth,
        borderRadius: borderRadius,
        color: color,
        h: h,
        bgColor: colors.bgColor,
        w: "100%",
        type: "submit",
        isDisabled: isSubmitting,
        isLoading: isSubmitting,
        loadingText: loadingText,
      },
      submit_message
    ),
    errors[uid] &&
      touched[uid] &&
      /*#__PURE__*/ React$1.createElement(
        react.VStack,
        null,
        /*#__PURE__*/ React$1.createElement(formik.ErrorMessage, {
          style: {
            color: colors.error,
          },
          render: function render(errorMessage) {
            return /*#__PURE__*/ React$1.createElement(
              react.Text,
              {
                color: colors.error,
              },
              errorMessage
            );
          },
          name: uid,
        })
      )
  );
};
FormSubmit.defaultProps = {
  errors: [],
  colors: {
    bgColor: "orange",
    color: "#FFF",
    borderColor: "#959595",
    fontColor: "#000",
    error: "red",
  },
  colorScheme: "orange",
  isSubmitting: false,
  loadingText: "Soumettre",
  submit_message: "Soumettre",
};
var FormSearch = function FormSearch(_ref3) {
  var uid = _ref3.uid,
    errors = _ref3.errors,
    colors = _ref3.colors,
    handleChange = _ref3.handleChange,
    handleBlur = _ref3.handleBlur,
    value = _ref3.value,
    isDisabled = _ref3.isDisabled,
    placeholder = _ref3.placeholder;
  var inputProps = {
    borderColor: colors.black,
    fontWeight: 500,
    name: uid,
    onChange: handleChange,
    onBlur: handleBlur,
    placeholder: placeholder,
    value: value,
    h: "3rem",
    w: "100%",
    isDisabled: isDisabled,
  };
  return /*#__PURE__*/ React$1.createElement(
    react.FormControl,
    {
      isInvalid: errors[uid],
    },
    /*#__PURE__*/ React$1.createElement(
      react.InputGroup,
      null,
      /*#__PURE__*/ React$1.createElement(
        react.InputLeftElement,
        {
          alignSelf: "center",
          h: "100%",
          width: "3rem",
        },
        /*#__PURE__*/ React$1.createElement(fi.FiSearch, {
          size: "1.3rem",
        })
      ),
      /*#__PURE__*/ React$1.createElement(react.Input, inputProps)
    )
  );
};
FormSearch.defaultProps = {
  errors: [],
  colors: {
    borderColor: "#959595",
  },
  isDisabled: false,
};

var SiteHeading = function SiteHeading(_ref) {
  var images = _ref.images,
    sitename = _ref.sitename,
    onClick = _ref.onClick;
  return /*#__PURE__*/ React$1.createElement(
    react.HStack,
    {
      alignItems: "inherit",
      _hover: {
        cursor: "pointer",
      },
      onClick: onClick,
    },
    images.logo &&
      /*#__PURE__*/ React$1.createElement(react.Image, images.logo),
    /*#__PURE__*/ React$1.createElement(
      react.Heading,
      {
        fontSize: "1.875rem",
        lineHeight: "2rem",
      },
      sitename
    )
  );
};
SiteHeading.defaultProps = {
  images: {
    logo: {
      src: "https://bit.ly/dan-abramov",
      alt: "Souxate",
    },
  },
  sitename: "Souxate",
  onClick: {},
};
var MenuLink = function MenuLink(_ref2) {
  var colors = _ref2.colors,
    dark = _ref2.dark,
    withIndicator = _ref2.withIndicator,
    active = _ref2.active,
    activeTint = _ref2.activeTint,
    inactiveTint = _ref2.inactiveTint,
    desktop = _ref2.desktop,
    color = _ref2.color,
    link = _ref2.link,
    title = _ref2.title,
    fontSize = _ref2.fontSize,
    fontWeight = _ref2.fontWeight,
    lineHeight = _ref2.lineHeight,
    borderHeight = _ref2.borderHeight;
  var def = {
    pos: "absolute",
    bgColor: activeTint || colors.bgColor,
  };
  return /*#__PURE__*/ React$1.createElement(
    react.Box,
    {
      position: "relative",
    },
    /*#__PURE__*/ React$1.createElement(
      react.Link,
      {
        href: link,
      },
      /*#__PURE__*/ React$1.createElement(
        react.Text,
        _extends(
          {
            color: inactiveTint || color || colors.text.activeTint,
          },
          dark && {
            color: (!active && inactiveTint) || colors.text.dark,
          },
          withIndicator && {
            color: active
              ? colors.text.withIndicator
              : colors.text.withIndicator,
          },
          active &&
            !desktop && {
              pl: ".5rem",
            },
          {
            fontSize: fontSize || "1rem",
            fontWeight: fontWeight || "medium",
            lineHeight: lineHeight || "1.5rem",
          }
        ),
        title
      ),
      active &&
        desktop &&
        /*#__PURE__*/ React$1.createElement(
          react.Box,
          _extends({}, def, {
            h: borderHeight || 0.5,
            w: "100%",
            bottom: "-1.2rem",
          })
        ),
      active &&
        !desktop &&
        /*#__PURE__*/ React$1.createElement(
          react.Box,
          _extends({}, def, {
            h: borderHeight || "1.2rem",
            w: "2%",
            top: 1,
            let: "-1.2rem",
          })
        )
    )
  );
};
MenuLink.propTypes = {
  colors: propTypesExports.arrayOf(),
  dark: propTypesExports.bool,
  withIndicator: propTypesExports.bool,
  active: propTypesExports.bool,
  activeTint: propTypesExports.string,
  inactiveTint: propTypesExports.string,
  desktop: propTypesExports.bool,
  color: propTypesExports.string,
  link: propTypesExports.string,
  title: propTypesExports.string,
  fontSize: propTypesExports.string,
  fontWeight: propTypesExports.string,
  lineHeight: propTypesExports.string,
  borderHeight: propTypesExports.string,
};
MenuLink.defaultProps = {
  white: "#fff",
  black: "#OOO",
  colors: {
    bgColor: "orange",
    text: {
      activeTint: "orange",
      dark: "black",
      withIndicator: "black",
    },
  },
  title: "Orange Money",
  link: "/",
  active: true,
  desktop: true,
};

var NotFound = function NotFound(_ref) {
  var cta = _ref.cta,
    message = _ref.message,
    item = _ref.item,
    status = _ref.status;
  return /*#__PURE__*/ React$1.createElement(
    react.Box,
    {
      textAlign: "center",
      py: 10,
      px: 6,
    },
    /*#__PURE__*/ React$1.createElement(
      react.Heading,
      {
        display: "inline-block",
        as: "h2",
        size: "2xl",
        bgGradient: "linear(to-r, orange.400, orange.600)",
        backgroundClip: "text",
      },
      status
    ),
    /*#__PURE__*/ React$1.createElement(
      react.Text,
      {
        fontSize: 18,
        mt: 3,
        mb: 2,
      },
      "".concat(item, " Not Found")
    ),
    /*#__PURE__*/ React$1.createElement(
      react.Text,
      {
        color: "gray.500",
        mb: 6,
      },
      message
    ),
    /*#__PURE__*/ React$1.createElement(
      react.Button,
      {
        onClick: function onClick() {
          return window.history.go(-1);
        },
        colorScheme: "orange",
        bgGradient: "linear(to-r, orange.400, orange.500, orange.600)",
        color: "white",
        variant: "solid",
      },
      cta
    )
  );
};
NotFound.defaultProps = {
  message: "Not Found",
  status: "404",
  item: "Page Home ",
  cta: "Retour",
};

var SkeletonLoading = function SkeletonLoading() {
  return /*#__PURE__*/ React$1.createElement(
    React$1.Fragment,
    null,
    /*#__PURE__*/ React$1.createElement(
      react.Box,
      {
        padding: "6",
        boxShadow: "lg",
        bg: "white",
      },
      /*#__PURE__*/ React$1.createElement(react.SkeletonText, {
        mt: "4",
        noOfLines: 4,
        spacing: "4",
        skeletonHeight: "2",
      }),
      /*#__PURE__*/ React$1.createElement(react.SkeletonText, {
        mt: "4",
        noOfLines: 4,
        spacing: "4",
        skeletonHeight: "2",
      }),
      /*#__PURE__*/ React$1.createElement(react.SkeletonText, {
        mt: "4",
        noOfLines: 4,
        spacing: "4",
        skeletonHeight: "2",
      }),
      /*#__PURE__*/ React$1.createElement(react.SkeletonText, {
        mt: "4",
        noOfLines: 4,
        spacing: "4",
        skeletonHeight: "2",
      })
    )
  );
};

var ErrorComponent = function ErrorComponent(_ref) {
  var title = _ref.title,
    desc = _ref.desc;
  return /*#__PURE__*/ React$1.createElement(
    react.Alert,
    {
      status: "error",
    },
    /*#__PURE__*/ React$1.createElement(react.AlertIcon, null),
    /*#__PURE__*/ React$1.createElement(
      react.AlertTitle,
      null,
      title || "oups",
      " "
    ),
    /*#__PURE__*/ React$1.createElement(
      react.AlertDescription,
      null,
      desc || "We have trouble loading this component. Please try again"
    )
  );
};
ErrorComponent.defaultProps = {
  title: "Oups",
  desc: "We have trouble loading this component. Please try again",
};
var WarningComponent = function WarningComponent(_ref2) {
  var message = _ref2.message;
  return /*#__PURE__*/ React$1.createElement(
    react.Alert,
    {
      status: "warning",
    },
    /*#__PURE__*/ React$1.createElement(react.AlertIcon, null),
    message || "This component might load incorrectly"
  );
};
WarningComponent.defaultProps = {
  message: "This component might load incorrectly",
};
var LoadingComponent = function LoadingComponent(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/ React$1.createElement(react.Spinner, {
    color: color,
  });
};
WarningComponent.defaultProps = {
  color: "orange",
};

function useTheme() {
  const theme = React$1.useContext(react$1.ThemeContext);
  if (!theme) {
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  }
  return theme;
}

var ColorModeContext = React$1.createContext({});
ColorModeContext.displayName = "ColorModeContext";
function useColorMode() {
  const context = React$1.useContext(ColorModeContext);
  if (context === void 0) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
}

function useChakra() {
  const colorModeResult = useColorMode();
  const theme = useTheme();
  return { ...colorModeResult, theme };
}

// src/index.ts
var cx = (...classNames) => classNames.filter(Boolean).join(" ");
function isObject(value) {
  const type = typeof value;
  return (
    value != null &&
    (type === "object" || type === "function") &&
    !Array.isArray(value)
  );
}
function runIfFn$1(valueOrFn, ...args) {
  return isFunction$1(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}
var isFunction$1 = (value) => typeof value === "function";

var lodash_mergewithExports = {};
var lodash_mergewith = {
  get exports() {
    return lodash_mergewithExports;
  },
  set exports(v) {
    lodash_mergewithExports = v;
  },
};

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

(function (module, exports) {
  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = "__lodash_hash_undefined__";

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
    HOT_SPAN = 16;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /** `Object#toString` result references. */
  var argsTag = "[object Arguments]",
    arrayTag = "[object Array]",
    asyncTag = "[object AsyncFunction]",
    boolTag = "[object Boolean]",
    dateTag = "[object Date]",
    errorTag = "[object Error]",
    funcTag = "[object Function]",
    genTag = "[object GeneratorFunction]",
    mapTag = "[object Map]",
    numberTag = "[object Number]",
    nullTag = "[object Null]",
    objectTag = "[object Object]",
    proxyTag = "[object Proxy]",
    regexpTag = "[object RegExp]",
    setTag = "[object Set]",
    stringTag = "[object String]",
    undefinedTag = "[object Undefined]",
    weakMapTag = "[object WeakMap]";

  var arrayBufferTag = "[object ArrayBuffer]",
    dataViewTag = "[object DataView]",
    float32Tag = "[object Float32Array]",
    float64Tag = "[object Float64Array]",
    int8Tag = "[object Int8Array]",
    int16Tag = "[object Int16Array]",
    int32Tag = "[object Int32Array]",
    uint8Tag = "[object Uint8Array]",
    uint8ClampedTag = "[object Uint8ClampedArray]",
    uint16Tag = "[object Uint16Array]",
    uint32Tag = "[object Uint32Array]";

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] =
    typedArrayTags[float64Tag] =
    typedArrayTags[int8Tag] =
    typedArrayTags[int16Tag] =
    typedArrayTags[int32Tag] =
    typedArrayTags[uint8Tag] =
    typedArrayTags[uint8ClampedTag] =
    typedArrayTags[uint16Tag] =
    typedArrayTags[uint32Tag] =
      true;
  typedArrayTags[argsTag] =
    typedArrayTags[arrayTag] =
    typedArrayTags[arrayBufferTag] =
    typedArrayTags[boolTag] =
    typedArrayTags[dataViewTag] =
    typedArrayTags[dateTag] =
    typedArrayTags[errorTag] =
    typedArrayTags[funcTag] =
    typedArrayTags[mapTag] =
    typedArrayTags[numberTag] =
    typedArrayTags[objectTag] =
    typedArrayTags[regexpTag] =
    typedArrayTags[setTag] =
    typedArrayTags[stringTag] =
    typedArrayTags[weakMapTag] =
      false;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal =
    typeof commonjsGlobal == "object" &&
    commonjsGlobal &&
    commonjsGlobal.Object === Object &&
    commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf =
    typeof self == "object" && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function("return this")();

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule =
    freeExports && "object" == "object" && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function () {
    try {
      // Use `util.types` for Node.js 10+.
      var types =
        freeModule && freeModule.require && freeModule.require("util").types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {}
  })();

  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
      result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function (value) {
      return func(value);
    };
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }

  /** Used for built-in method references. */
  var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root["__core-js_shared__"];

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function () {
    var uid = /[^.]+$/.exec(
      (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || ""
    );
    return uid ? "Symbol(src)_1." + uid : "";
  })();

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString.call(Object);

  /** Used to detect if a method is native. */
  var reIsNative = RegExp(
    "^" +
      funcToString
        .call(hasOwnProperty)
        .replace(reRegExpChar, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

  var defineProperty = (function () {
    try {
      var func = getNative(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e) {}
  })();

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeMax = Math.max,
    nativeNow = Date.now;

  /* Built-in method references that are verified to be native. */
  var Map = getNative(root, "Map"),
    nativeCreate = getNative(Object, "create");

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate = (function () {
    function object() {}
    return function (proto) {
      if (!isObject(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = undefined;
      return result;
    };
  })();

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
  }

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate
      ? data[key] !== undefined
      : hasOwnProperty.call(data, key);
  }

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
      index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
      index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
      index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      hash: new Hash(),
      map: new (Map || ListCache)(),
      string: new Hash(),
    };
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
      size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = (this.__data__ = new ListCache(entries));
    this.size = data.size;
  }

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
      result = data["delete"](key);

    this.size = data.size;
    return result;
  }

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

    for (var key in value) {
      if (
        (inherited || hasOwnProperty.call(value, key)) &&
        !(
          skipIndexes &&
          // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == "length" ||
            // Node.js 0.10 has enumerable non-index properties on buffers.
            (isBuff && (key == "offset" || key == "parent")) ||
            // PhantomJS 2 has enumerable non-index properties on typed arrays.
            (isType &&
              (key == "buffer" ||
                key == "byteLength" ||
                key == "byteOffset")) ||
            // Skip index properties.
            isIndex(key, length))
        )
      ) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * This function is like `assignValue` except that it doesn't assign
   * `undefined` values.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignMergeValue(object, key, value) {
    if (
      (value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))
    ) {
      baseAssignValue(object, key, value);
    }
  }

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (
      !(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))
    ) {
      baseAssignValue(object, key, value);
    }
  }

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty) {
      defineProperty(object, key, {
        configurable: true,
        enumerable: true,
        value: value,
        writable: true,
      });
    } else {
      object[key] = value;
    }
  }

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  var baseFor = createBaseFor();

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value)
      ? getRawTag(value)
      : objectToString(value);
  }

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return (
      isObjectLike(value) &&
      isLength(value.length) &&
      !!typedArrayTags[baseGetTag(value)]
    );
  }

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object),
      result = [];

    for (var key in object) {
      if (
        !(
          key == "constructor" &&
          (isProto || !hasOwnProperty.call(object, key))
        )
      ) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.merge` without support for multiple sources.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} [customizer] The function to customize merged values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor(
      source,
      function (srcValue, key) {
        stack || (stack = new Stack());
        if (isObject(srcValue)) {
          baseMergeDeep(
            object,
            source,
            key,
            srcIndex,
            baseMerge,
            customizer,
            stack
          );
        } else {
          var newValue = customizer
            ? customizer(
                safeGet(object, key),
                srcValue,
                key + "",
                object,
                source,
                stack
              )
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      },
      keysIn
    );
  }

  /**
   * A specialized version of `baseMerge` for arrays and objects which performs
   * deep merges and tracks traversed objects enabling objects with circular
   * references to be merged.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {string} key The key of the value to merge.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} mergeFunc The function to merge values.
   * @param {Function} [customizer] The function to customize assigned values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMergeDeep(
    object,
    source,
    key,
    srcIndex,
    mergeFunc,
    customizer,
    stack
  ) {
    var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

    if (stacked) {
      assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer
      ? customizer(objValue, srcValue, key + "", object, source, stack)
      : undefined;

    var isCommon = newValue === undefined;

    if (isCommon) {
      var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray(srcValue, true);
        } else {
          newValue = [];
        }
      } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
        newValue = objValue;
        if (isArguments(objValue)) {
          newValue = toPlainObject(objValue);
        } else if (!isObject(objValue) || isFunction(objValue)) {
          newValue = initCloneObject(srcValue);
        }
      } else {
        isCommon = false;
      }
    }
    if (isCommon) {
      // Recursively merge objects and arrays (susceptible to call stack limits).
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack["delete"](srcValue);
    }
    assignMergeValue(object, key, newValue);
  }

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + "");
  }

  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var baseSetToString = !defineProperty
    ? identity
    : function (func, string) {
        return defineProperty(func, "toString", {
          configurable: true,
          enumerable: false,
          value: constant(string),
          writable: true,
        });
      };

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length,
      result = allocUnsafe
        ? allocUnsafe(length)
        : new buffer.constructor(length);

    buffer.copy(result);
    return result;
  }

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep
      ? cloneArrayBuffer(typedArray.buffer)
      : typedArray.buffer;
    return new typedArray.constructor(
      buffer,
      typedArray.byteOffset,
      typedArray.length
    );
  }

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
      length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});

    var index = -1,
      length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }

  /**
   * Creates a function like `_.assign`.
   *
   * @private
   * @param {Function} assigner The function to assign values.
   * @returns {Function} Returns the new assigner function.
   */
  function createAssigner(assigner) {
    return baseRest(function (object, sources) {
      var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

      customizer =
        assigner.length > 3 && typeof customizer == "function"
          ? (length--, customizer)
          : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseFor(fromRight) {
    return function (object, iteratee, keysFunc) {
      var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == "string" ? "string" : "hash"]
      : data.map;
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype(object)
      ? baseCreate(getPrototype(object))
      : {};
  }

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;

    return (
      !!length &&
      (type == "number" || (type != "symbol" && reIsUint.test(value))) &&
      value > -1 &&
      value % 1 == 0 &&
      value < length
    );
  }

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index;
    if (
      type == "number"
        ? isArrayLike(object) && isIndex(index, object.length)
        : type == "string" && index in object
    ) {
      return eq(object[index], value);
    }
    return false;
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" ||
      type == "number" ||
      type == "symbol" ||
      type == "boolean"
      ? value !== "__proto__"
      : value === null;
  }

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
      proto = (typeof Ctor == "function" && Ctor.prototype) || objectProto;

    return value === proto;
  }

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */
  function overRest(func, start, transform) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function () {
      var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }

  /**
   * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function safeGet(object, key) {
    if (key === "constructor" && typeof object[key] === "function") {
      return;
    }

    if (key == "__proto__") {
      return;
    }

    return object[key];
  }

  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var setToString = shortOut(baseSetToString);

  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */
  function shortOut(func) {
    var count = 0,
      lastCalled = 0;

    return function () {
      var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(undefined, arguments);
    };
  }

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return func + "";
      } catch (e) {}
    }
    return "";
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = baseIsArguments(
    (function () {
      return arguments;
    })()
  )
    ? baseIsArguments
    : function (value) {
        return (
          isObjectLike(value) &&
          hasOwnProperty.call(value, "callee") &&
          !propertyIsEnumerable.call(value, "callee")
        );
      };

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  /**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse;

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return (
      tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag
    );
  }

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return (
      typeof value == "number" &&
      value > -1 &&
      value % 1 == 0 &&
      value <= MAX_SAFE_INTEGER
    );
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return (
      typeof Ctor == "function" &&
      Ctor instanceof Ctor &&
      funcToString.call(Ctor) == objectCtorString
    );
  }

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray
    ? baseUnary(nodeIsTypedArray)
    : baseIsTypedArray;

  /**
   * Converts `value` to a plain object flattening inherited enumerable string
   * keyed properties of `value` to own properties of the plain object.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {Object} Returns the converted plain object.
   * @example
   *
   * function Foo() {
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.assign({ 'a': 1 }, new Foo);
   * // => { 'a': 1, 'b': 2 }
   *
   * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
   * // => { 'a': 1, 'b': 2, 'c': 3 }
   */
  function toPlainObject(value) {
    return copyObject(value, keysIn(value));
  }

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    return isArrayLike(object)
      ? arrayLikeKeys(object, true)
      : baseKeysIn(object);
  }

  /**
   * This method is like `_.merge` except that it accepts `customizer` which
   * is invoked to produce the merged values of the destination and source
   * properties. If `customizer` returns `undefined`, merging is handled by the
   * method instead. The `customizer` is invoked with six arguments:
   * (objValue, srcValue, key, object, source, stack).
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} sources The source objects.
   * @param {Function} customizer The function to customize assigned values.
   * @returns {Object} Returns `object`.
   * @example
   *
   * function customizer(objValue, srcValue) {
   *   if (_.isArray(objValue)) {
   *     return objValue.concat(srcValue);
   *   }
   * }
   *
   * var object = { 'a': [1], 'b': [2] };
   * var other = { 'a': [3], 'b': [4] };
   *
   * _.mergeWith(object, other, customizer);
   * // => { 'a': [1, 3], 'b': [2, 4] }
   */
  var mergeWith = createAssigner(function (
    object,
    source,
    srcIndex,
    customizer
  ) {
    baseMerge(object, source, srcIndex, customizer);
  });

  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */
  function constant(value) {
    return function () {
      return value;
    };
  }

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
  function identity(value) {
    return value;
  }

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  module.exports = mergeWith;
})(lodash_mergewith, lodash_mergewithExports);

var mergeWith = lodash_mergewithExports;

// src/utils/create-transform.ts
var isImportant = (value) => /!(important)?$/.test(value);
var withoutImportant = (value) =>
  typeof value === "string"
    ? value.replace(/!(important)?$/, "").trim()
    : value;
var tokenToCSSVar = (scale, value) => (theme) => {
  const valueStr = String(value);
  const important = isImportant(valueStr);
  const valueWithoutImportant = withoutImportant(valueStr);
  const key = scale
    ? `${scale}.${valueWithoutImportant}`
    : valueWithoutImportant;
  let transformed =
    isObject(theme.__cssMap) && key in theme.__cssMap
      ? theme.__cssMap[key].varRef
      : value;
  transformed = withoutImportant(transformed);
  return important ? `${transformed} !important` : transformed;
};
function createTransform(options) {
  const { scale, transform: transform2, compose } = options;
  const fn = (value, theme) => {
    var _a;
    const _value = tokenToCSSVar(scale, value)(theme);
    let result =
      (_a = transform2 == null ? void 0 : transform2(_value, theme)) != null
        ? _a
        : _value;
    if (compose) {
      result = compose(result, theme);
    }
    return result;
  };
  return fn;
}

// src/utils/pipe.ts
var pipe =
  (...fns) =>
  (v) =>
    fns.reduce((a, b) => b(a), v);

// src/utils/prop-config.ts
function toConfig(scale, transform2) {
  return (property) => {
    const result = { property, scale };
    result.transform = createTransform({
      scale,
      transform: transform2,
    });
    return result;
  };
}
var getRtl =
  ({ rtl, ltr }) =>
  (theme) =>
    theme.direction === "rtl" ? rtl : ltr;
function logical(options) {
  const { property, scale, transform: transform2 } = options;
  return {
    scale,
    property: getRtl(property),
    transform: scale
      ? createTransform({
          scale,
          compose: transform2,
        })
      : transform2,
  };
}

// src/utils/templates.ts
var transformTemplate = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))",
];
function getTransformTemplate() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...transformTemplate,
  ].join(" ");
}
function getTransformGpuTemplate() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...transformTemplate,
  ].join(" ");
}
var filterTemplate = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: [
    "var(--chakra-blur)",
    "var(--chakra-brightness)",
    "var(--chakra-contrast)",
    "var(--chakra-grayscale)",
    "var(--chakra-hue-rotate)",
    "var(--chakra-invert)",
    "var(--chakra-saturate)",
    "var(--chakra-sepia)",
    "var(--chakra-drop-shadow)",
  ].join(" "),
};
var backdropFilterTemplate = {
  backdropFilter: [
    "var(--chakra-backdrop-blur)",
    "var(--chakra-backdrop-brightness)",
    "var(--chakra-backdrop-contrast)",
    "var(--chakra-backdrop-grayscale)",
    "var(--chakra-backdrop-hue-rotate)",
    "var(--chakra-backdrop-invert)",
    "var(--chakra-backdrop-opacity)",
    "var(--chakra-backdrop-saturate)",
    "var(--chakra-backdrop-sepia)",
  ].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
};
function getRingTemplate(value) {
  return {
    "--chakra-ring-offset-shadow": `var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)`,
    "--chakra-ring-shadow": `var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)`,
    "--chakra-ring-width": value,
    boxShadow: [
      `var(--chakra-ring-offset-shadow)`,
      `var(--chakra-ring-shadow)`,
      `var(--chakra-shadow, 0 0 #0000)`,
    ].join(", "),
  };
}
var flexDirectionTemplate = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse",
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse",
  },
};

// src/utils/parse-gradient.ts
var directionMap = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left",
};
var valueSet = new Set(Object.values(directionMap));
var globalSet = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset",
]);
var trimSpace = (str) => str.trim();
function parseGradient(value, theme) {
  if (value == null || globalSet.has(value)) return value;
  const prevent = isCSSFunction(value) || globalSet.has(value);
  if (!prevent) return `url('${value}')`;
  const regex = /(^[a-z-A-Z]+)\((.*)\)/g;
  const results = regex.exec(value);
  const type = results == null ? void 0 : results[1];
  const values = results == null ? void 0 : results[2];
  if (!type || !values) return value;
  const _type = type.includes("-gradient") ? type : `${type}-gradient`;
  const [maybeDirection, ...stops] = values
    .split(",")
    .map(trimSpace)
    .filter(Boolean);
  if ((stops == null ? void 0 : stops.length) === 0) return value;
  const direction =
    maybeDirection in directionMap
      ? directionMap[maybeDirection]
      : maybeDirection;
  stops.unshift(direction);
  const _values = stops.map((stop) => {
    if (valueSet.has(stop)) return stop;
    const firstStop = stop.indexOf(" ");
    const [_color, _stop] =
      firstStop !== -1
        ? [stop.substr(0, firstStop), stop.substr(firstStop + 1)]
        : [stop];
    const _stopOrFunc = isCSSFunction(_stop)
      ? _stop
      : _stop && _stop.split(" ");
    const key = `colors.${_color}`;
    const color2 = key in theme.__cssMap ? theme.__cssMap[key].varRef : _color;
    return _stopOrFunc
      ? [
          color2,
          ...(Array.isArray(_stopOrFunc) ? _stopOrFunc : [_stopOrFunc]),
        ].join(" ")
      : color2;
  });
  return `${_type}(${_values.join(", ")})`;
}
var isCSSFunction = (value) => {
  return (
    typeof value === "string" && value.includes("(") && value.includes(")")
  );
};
var gradientTransform = (value, theme) =>
  parseGradient(value, theme != null ? theme : {});

// src/utils/transform-functions.ts
function isCssVar(value) {
  return /^var\(--.+\)$/.test(value);
}
var analyzeCSSValue = (value) => {
  const num = parseFloat(value.toString());
  const unit = value.toString().replace(String(num), "");
  return { unitless: !unit, value: num, unit };
};
var wrap = (str) => (value) => `${str}(${value})`;
var transformFunctions = {
  filter(value) {
    return value !== "auto" ? value : filterTemplate;
  },
  backdropFilter(value) {
    return value !== "auto" ? value : backdropFilterTemplate;
  },
  ring(value) {
    return getRingTemplate(transformFunctions.px(value));
  },
  bgClip(value) {
    return value === "text"
      ? { color: "transparent", backgroundClip: "text" }
      : { backgroundClip: value };
  },
  transform(value) {
    if (value === "auto") return getTransformTemplate();
    if (value === "auto-gpu") return getTransformGpuTemplate();
    return value;
  },
  vh(value) {
    return value === "$100vh" ? "var(--chakra-vh)" : value;
  },
  px(value) {
    if (value == null) return value;
    const { unitless } = analyzeCSSValue(value);
    return unitless || typeof value === "number" ? `${value}px` : value;
  },
  fraction(value) {
    return !(typeof value === "number") || value > 1
      ? value
      : `${value * 100}%`;
  },
  float(value, theme) {
    const map = { left: "right", right: "left" };
    return theme.direction === "rtl" ? map[value] : value;
  },
  degree(value) {
    if (isCssVar(value) || value == null) return value;
    const unitless = typeof value === "string" && !value.endsWith("deg");
    return typeof value === "number" || unitless ? `${value}deg` : value;
  },
  gradient: gradientTransform,
  blur: wrap("blur"),
  opacity: wrap("opacity"),
  brightness: wrap("brightness"),
  contrast: wrap("contrast"),
  dropShadow: wrap("drop-shadow"),
  grayscale: wrap("grayscale"),
  hueRotate: wrap("hue-rotate"),
  invert: wrap("invert"),
  saturate: wrap("saturate"),
  sepia: wrap("sepia"),
  bgImage(value) {
    if (value == null) return value;
    const prevent = isCSSFunction(value) || globalSet.has(value);
    return !prevent ? `url(${value})` : value;
  },
  outline(value) {
    const isNoneOrZero = String(value) === "0" || String(value) === "none";
    return value !== null && isNoneOrZero
      ? { outline: "2px solid transparent", outlineOffset: "2px" }
      : { outline: value };
  },
  flexDirection(value) {
    var _a;
    const { space: space2, divide: divide2 } =
      (_a = flexDirectionTemplate[value]) != null ? _a : {};
    const result = { flexDirection: value };
    if (space2) result[space2] = 1;
    if (divide2) result[divide2] = 1;
    return result;
  },
};

// src/utils/index.ts
var t = {
  borderWidths: toConfig("borderWidths"),
  borderStyles: toConfig("borderStyles"),
  colors: toConfig("colors"),
  borders: toConfig("borders"),
  gradients: toConfig("gradients", transformFunctions.gradient),
  radii: toConfig("radii", transformFunctions.px),
  space: toConfig("space", pipe(transformFunctions.vh, transformFunctions.px)),
  spaceT: toConfig("space", pipe(transformFunctions.vh, transformFunctions.px)),
  degreeT(property) {
    return { property, transform: transformFunctions.degree };
  },
  prop(property, scale, transform2) {
    return {
      property,
      scale,
      ...(scale && {
        transform: createTransform({ scale, transform: transform2 }),
      }),
    };
  },
  propT(property, transform2) {
    return { property, transform: transform2 };
  },
  sizes: toConfig("sizes", pipe(transformFunctions.vh, transformFunctions.px)),
  sizesT: toConfig(
    "sizes",
    pipe(transformFunctions.vh, transformFunctions.fraction)
  ),
  shadows: toConfig("shadows"),
  logical,
  blur: toConfig("blur", transformFunctions.blur),
};

// src/config/background.ts
var background = {
  background: t.colors("background"),
  backgroundColor: t.colors("backgroundColor"),
  backgroundImage: t.gradients("backgroundImage"),
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundClip: { transform: transformFunctions.bgClip },
  bgSize: t.prop("backgroundSize"),
  bgPosition: t.prop("backgroundPosition"),
  bg: t.colors("background"),
  bgColor: t.colors("backgroundColor"),
  bgPos: t.prop("backgroundPosition"),
  bgRepeat: t.prop("backgroundRepeat"),
  bgAttachment: t.prop("backgroundAttachment"),
  bgGradient: t.gradients("backgroundImage"),
  bgClip: { transform: transformFunctions.bgClip },
};
Object.assign(background, {
  bgImage: background.backgroundImage,
  bgImg: background.backgroundImage,
});

// src/config/border.ts
var border = {
  border: t.borders("border"),
  borderWidth: t.borderWidths("borderWidth"),
  borderStyle: t.borderStyles("borderStyle"),
  borderColor: t.colors("borderColor"),
  borderRadius: t.radii("borderRadius"),
  borderTop: t.borders("borderTop"),
  borderBlockStart: t.borders("borderBlockStart"),
  borderTopLeftRadius: t.radii("borderTopLeftRadius"),
  borderStartStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius",
    },
  }),
  borderEndStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius",
    },
  }),
  borderTopRightRadius: t.radii("borderTopRightRadius"),
  borderStartEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius",
    },
  }),
  borderEndEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius",
    },
  }),
  borderRight: t.borders("borderRight"),
  borderInlineEnd: t.borders("borderInlineEnd"),
  borderBottom: t.borders("borderBottom"),
  borderBlockEnd: t.borders("borderBlockEnd"),
  borderBottomLeftRadius: t.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: t.radii("borderBottomRightRadius"),
  borderLeft: t.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders",
  },
  borderInlineStartRadius: t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"],
    },
  }),
  borderInlineEndRadius: t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    },
  }),
  borderX: t.borders(["borderLeft", "borderRight"]),
  borderInline: t.borders("borderInline"),
  borderY: t.borders(["borderTop", "borderBottom"]),
  borderBlock: t.borders("borderBlock"),
  borderTopWidth: t.borderWidths("borderTopWidth"),
  borderBlockStartWidth: t.borderWidths("borderBlockStartWidth"),
  borderTopColor: t.colors("borderTopColor"),
  borderBlockStartColor: t.colors("borderBlockStartColor"),
  borderTopStyle: t.borderStyles("borderTopStyle"),
  borderBlockStartStyle: t.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: t.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: t.borderWidths("borderBlockEndWidth"),
  borderBottomColor: t.colors("borderBottomColor"),
  borderBlockEndColor: t.colors("borderBlockEndColor"),
  borderBottomStyle: t.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: t.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: t.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: t.borderWidths("borderInlineStartWidth"),
  borderLeftColor: t.colors("borderLeftColor"),
  borderInlineStartColor: t.colors("borderInlineStartColor"),
  borderLeftStyle: t.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: t.borderStyles("borderInlineStartStyle"),
  borderRightWidth: t.borderWidths("borderRightWidth"),
  borderInlineEndWidth: t.borderWidths("borderInlineEndWidth"),
  borderRightColor: t.colors("borderRightColor"),
  borderInlineEndColor: t.colors("borderInlineEndColor"),
  borderRightStyle: t.borderStyles("borderRightStyle"),
  borderInlineEndStyle: t.borderStyles("borderInlineEndStyle"),
  borderTopRadius: t.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: t.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ]),
  borderLeftRadius: t.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: t.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius",
  ]),
};
Object.assign(border, {
  rounded: border.borderRadius,
  roundedTop: border.borderTopRadius,
  roundedTopLeft: border.borderTopLeftRadius,
  roundedTopRight: border.borderTopRightRadius,
  roundedTopStart: border.borderStartStartRadius,
  roundedTopEnd: border.borderStartEndRadius,
  roundedBottom: border.borderBottomRadius,
  roundedBottomLeft: border.borderBottomLeftRadius,
  roundedBottomRight: border.borderBottomRightRadius,
  roundedBottomStart: border.borderEndStartRadius,
  roundedBottomEnd: border.borderEndEndRadius,
  roundedLeft: border.borderLeftRadius,
  roundedRight: border.borderRightRadius,
  roundedStart: border.borderInlineStartRadius,
  roundedEnd: border.borderInlineEndRadius,
  borderStart: border.borderInlineStart,
  borderEnd: border.borderInlineEnd,
  borderTopStartRadius: border.borderStartStartRadius,
  borderTopEndRadius: border.borderStartEndRadius,
  borderBottomStartRadius: border.borderEndStartRadius,
  borderBottomEndRadius: border.borderEndEndRadius,
  borderStartRadius: border.borderInlineStartRadius,
  borderEndRadius: border.borderInlineEndRadius,
  borderStartWidth: border.borderInlineStartWidth,
  borderEndWidth: border.borderInlineEndWidth,
  borderStartColor: border.borderInlineStartColor,
  borderEndColor: border.borderInlineEndColor,
  borderStartStyle: border.borderInlineStartStyle,
  borderEndStyle: border.borderInlineEndStyle,
});

// src/config/color.ts
var color = {
  color: t.colors("color"),
  textColor: t.colors("color"),
  fill: t.colors("fill"),
  stroke: t.colors("stroke"),
};

// src/config/effect.ts
var effect = {
  boxShadow: t.shadows("boxShadow"),
  mixBlendMode: true,
  blendMode: t.prop("mixBlendMode"),
  backgroundBlendMode: true,
  bgBlendMode: t.prop("backgroundBlendMode"),
  opacity: true,
};
Object.assign(effect, {
  shadow: effect.boxShadow,
});

// src/config/filter.ts
var filter = {
  filter: { transform: transformFunctions.filter },
  blur: t.blur("--chakra-blur"),
  brightness: t.propT("--chakra-brightness", transformFunctions.brightness),
  contrast: t.propT("--chakra-contrast", transformFunctions.contrast),
  hueRotate: t.degreeT("--chakra-hue-rotate"),
  invert: t.propT("--chakra-invert", transformFunctions.invert),
  saturate: t.propT("--chakra-saturate", transformFunctions.saturate),
  dropShadow: t.propT("--chakra-drop-shadow", transformFunctions.dropShadow),
  backdropFilter: { transform: transformFunctions.backdropFilter },
  backdropBlur: t.blur("--chakra-backdrop-blur"),
  backdropBrightness: t.propT(
    "--chakra-backdrop-brightness",
    transformFunctions.brightness
  ),
  backdropContrast: t.propT(
    "--chakra-backdrop-contrast",
    transformFunctions.contrast
  ),
  backdropHueRotate: t.degreeT("--chakra-backdrop-hue-rotate"),
  backdropInvert: t.propT(
    "--chakra-backdrop-invert",
    transformFunctions.invert
  ),
  backdropSaturate: t.propT(
    "--chakra-backdrop-saturate",
    transformFunctions.saturate
  ),
};

// src/config/flexbox.ts
var flexbox = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: { transform: transformFunctions.flexDirection },
  flex: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: t.sizes("flexBasis"),
  justifySelf: true,
  alignSelf: true,
  order: true,
  placeItems: true,
  placeContent: true,
  placeSelf: true,
  gap: t.space("gap"),
  rowGap: t.space("rowGap"),
  columnGap: t.space("columnGap"),
};
Object.assign(flexbox, {
  flexDir: flexbox.flexDirection,
});

// src/config/grid.ts
var grid = {
  gridGap: t.space("gridGap"),
  gridColumnGap: t.space("gridColumnGap"),
  gridRowGap: t.space("gridRowGap"),
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  gridRowStart: true,
  gridRowEnd: true,
  gridAutoRows: true,
  gridTemplate: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true,
};

// src/config/interactivity.ts
var interactivity = {
  appearance: true,
  cursor: true,
  resize: true,
  userSelect: true,
  pointerEvents: true,
  outline: { transform: transformFunctions.outline },
  outlineOffset: true,
  outlineColor: t.colors("outlineColor"),
};

// src/config/layout.ts
var layout = {
  width: t.sizesT("width"),
  inlineSize: t.sizesT("inlineSize"),
  height: t.sizes("height"),
  blockSize: t.sizes("blockSize"),
  boxSize: t.sizes(["width", "height"]),
  minWidth: t.sizes("minWidth"),
  minInlineSize: t.sizes("minInlineSize"),
  minHeight: t.sizes("minHeight"),
  minBlockSize: t.sizes("minBlockSize"),
  maxWidth: t.sizes("maxWidth"),
  maxInlineSize: t.sizes("maxInlineSize"),
  maxHeight: t.sizes("maxHeight"),
  maxBlockSize: t.sizes("maxBlockSize"),
  overflow: true,
  overflowX: true,
  overflowY: true,
  overscrollBehavior: true,
  overscrollBehaviorX: true,
  overscrollBehaviorY: true,
  display: true,
  aspectRatio: true,
  hideFrom: {
    scale: "breakpoints",
    transform: (value, theme) => {
      var _a, _b, _c;
      const breakpoint =
        (_c =
          (_b = (_a = theme.__breakpoints) == null ? void 0 : _a.get(value)) ==
          null
            ? void 0
            : _b.minW) != null
          ? _c
          : value;
      const mq = `@media screen and (min-width: ${breakpoint})`;
      return { [mq]: { display: "none" } };
    },
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (value, theme) => {
      var _a, _b, _c;
      const breakpoint =
        (_c =
          (_b = (_a = theme.__breakpoints) == null ? void 0 : _a.get(value)) ==
          null
            ? void 0
            : _b._minW) != null
          ? _c
          : value;
      const mq = `@media screen and (max-width: ${breakpoint})`;
      return { [mq]: { display: "none" } };
    },
  },
  verticalAlign: true,
  boxSizing: true,
  boxDecorationBreak: true,
  float: t.propT("float", transformFunctions.float),
  objectFit: true,
  objectPosition: true,
  visibility: true,
  isolation: true,
};
Object.assign(layout, {
  w: layout.width,
  h: layout.height,
  minW: layout.minWidth,
  maxW: layout.maxWidth,
  minH: layout.minHeight,
  maxH: layout.maxHeight,
  overscroll: layout.overscrollBehavior,
  overscrollX: layout.overscrollBehaviorX,
  overscrollY: layout.overscrollBehaviorY,
});

// src/config/list.ts
var list = {
  listStyleType: true,
  listStylePosition: true,
  listStylePos: t.prop("listStylePosition"),
  listStyleImage: true,
  listStyleImg: t.prop("listStyleImage"),
};

// src/get.ts
function get$1(obj, path, fallback, index) {
  const key = typeof path === "string" ? path.split(".") : [path];
  for (index = 0; index < key.length; index += 1) {
    if (!obj) break;
    obj = obj[key[index]];
  }
  return obj === void 0 ? fallback : obj;
}
var memoize$1 = (fn) => {
  const cache = /* @__PURE__ */ new WeakMap();
  const memoizedFn = (obj, path, fallback, index) => {
    if (typeof obj === "undefined") {
      return fn(obj, path, fallback);
    }
    if (!cache.has(obj)) {
      cache.set(obj, /* @__PURE__ */ new Map());
    }
    const map = cache.get(obj);
    if (map.has(path)) {
      return map.get(path);
    }
    const value = fn(obj, path, fallback, index);
    map.set(path, value);
    return value;
  };
  return memoizedFn;
};
var memoizedGet$1 = memoize$1(get$1);

// src/config/others.ts
var srOnly = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute",
};
var srFocusable = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal",
};
var getWithPriority = (theme, key, styles) => {
  const result = {};
  const obj = memoizedGet$1(theme, key, {});
  for (const prop in obj) {
    const isInStyles = prop in styles && styles[prop] != null;
    if (!isInStyles) result[prop] = obj[prop];
  }
  return result;
};
var others = {
  srOnly: {
    transform(value) {
      if (value === true) return srOnly;
      if (value === "focusable") return srFocusable;
      return {};
    },
  },
  layerStyle: {
    processResult: true,
    transform: (value, theme, styles) =>
      getWithPriority(theme, `layerStyles.${value}`, styles),
  },
  textStyle: {
    processResult: true,
    transform: (value, theme, styles) =>
      getWithPriority(theme, `textStyles.${value}`, styles),
  },
  apply: {
    processResult: true,
    transform: (value, theme, styles) => getWithPriority(theme, value, styles),
  },
};

// src/config/position.ts
var position = {
  position: true,
  pos: t.prop("position"),
  zIndex: t.prop("zIndex", "zIndices"),
  inset: t.spaceT("inset"),
  insetX: t.spaceT(["left", "right"]),
  insetInline: t.spaceT("insetInline"),
  insetY: t.spaceT(["top", "bottom"]),
  insetBlock: t.spaceT("insetBlock"),
  top: t.spaceT("top"),
  insetBlockStart: t.spaceT("insetBlockStart"),
  bottom: t.spaceT("bottom"),
  insetBlockEnd: t.spaceT("insetBlockEnd"),
  left: t.spaceT("left"),
  insetInlineStart: t.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" },
  }),
  right: t.spaceT("right"),
  insetInlineEnd: t.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" },
  }),
};
Object.assign(position, {
  insetStart: position.insetInlineStart,
  insetEnd: position.insetInlineEnd,
});

// src/config/ring.ts
var ring = {
  ring: { transform: transformFunctions.ring },
  ringColor: t.colors("--chakra-ring-color"),
  ringOffset: t.prop("--chakra-ring-offset-width"),
  ringOffsetColor: t.colors("--chakra-ring-offset-color"),
  ringInset: t.prop("--chakra-ring-inset"),
};

// src/config/space.ts
var space = {
  margin: t.spaceT("margin"),
  marginTop: t.spaceT("marginTop"),
  marginBlockStart: t.spaceT("marginBlockStart"),
  marginRight: t.spaceT("marginRight"),
  marginInlineEnd: t.spaceT("marginInlineEnd"),
  marginBottom: t.spaceT("marginBottom"),
  marginBlockEnd: t.spaceT("marginBlockEnd"),
  marginLeft: t.spaceT("marginLeft"),
  marginInlineStart: t.spaceT("marginInlineStart"),
  marginX: t.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: t.spaceT("marginInline"),
  marginY: t.spaceT(["marginTop", "marginBottom"]),
  marginBlock: t.spaceT("marginBlock"),
  padding: t.space("padding"),
  paddingTop: t.space("paddingTop"),
  paddingBlockStart: t.space("paddingBlockStart"),
  paddingRight: t.space("paddingRight"),
  paddingBottom: t.space("paddingBottom"),
  paddingBlockEnd: t.space("paddingBlockEnd"),
  paddingLeft: t.space("paddingLeft"),
  paddingInlineStart: t.space("paddingInlineStart"),
  paddingInlineEnd: t.space("paddingInlineEnd"),
  paddingX: t.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: t.space("paddingInline"),
  paddingY: t.space(["paddingTop", "paddingBottom"]),
  paddingBlock: t.space("paddingBlock"),
};
Object.assign(space, {
  m: space.margin,
  mt: space.marginTop,
  mr: space.marginRight,
  me: space.marginInlineEnd,
  marginEnd: space.marginInlineEnd,
  mb: space.marginBottom,
  ml: space.marginLeft,
  ms: space.marginInlineStart,
  marginStart: space.marginInlineStart,
  mx: space.marginX,
  my: space.marginY,
  p: space.padding,
  pt: space.paddingTop,
  py: space.paddingY,
  px: space.paddingX,
  pb: space.paddingBottom,
  pl: space.paddingLeft,
  ps: space.paddingInlineStart,
  paddingStart: space.paddingInlineStart,
  pr: space.paddingRight,
  pe: space.paddingInlineEnd,
  paddingEnd: space.paddingInlineEnd,
});

// src/config/text-decoration.ts
var textDecoration = {
  textDecorationColor: t.colors("textDecorationColor"),
  textDecoration: true,
  textDecor: { property: "textDecoration" },
  textDecorationLine: true,
  textDecorationStyle: true,
  textDecorationThickness: true,
  textUnderlineOffset: true,
  textShadow: t.shadows("textShadow"),
};

// src/config/transform.ts
var transform = {
  clipPath: true,
  transform: t.propT("transform", transformFunctions.transform),
  transformOrigin: true,
  translateX: t.spaceT("--chakra-translate-x"),
  translateY: t.spaceT("--chakra-translate-y"),
  skewX: t.degreeT("--chakra-skew-x"),
  skewY: t.degreeT("--chakra-skew-y"),
  scaleX: t.prop("--chakra-scale-x"),
  scaleY: t.prop("--chakra-scale-y"),
  scale: t.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: t.degreeT("--chakra-rotate"),
};

// src/config/transition.ts
var transition = {
  transition: true,
  transitionDelay: true,
  animation: true,
  willChange: true,
  transitionDuration: t.prop("transitionDuration", "transition.duration"),
  transitionProperty: t.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: t.prop(
    "transitionTimingFunction",
    "transition.easing"
  ),
};

// src/config/typography.ts
var typography = {
  fontFamily: t.prop("fontFamily", "fonts"),
  fontSize: t.prop("fontSize", "fontSizes", transformFunctions.px),
  fontWeight: t.prop("fontWeight", "fontWeights"),
  lineHeight: t.prop("lineHeight", "lineHeights"),
  letterSpacing: t.prop("letterSpacing", "letterSpacings"),
  textAlign: true,
  fontStyle: true,
  textIndent: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  isTruncated: {
    transform(value) {
      if (value === true) {
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        };
      }
    },
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "var(--chakra-line-clamp)",
    },
    property: "--chakra-line-clamp",
  },
};

// src/config/scroll.ts
var scroll = {
  scrollBehavior: true,
  scrollSnapAlign: true,
  scrollSnapStop: true,
  scrollSnapType: true,
  scrollMargin: t.spaceT("scrollMargin"),
  scrollMarginTop: t.spaceT("scrollMarginTop"),
  scrollMarginBottom: t.spaceT("scrollMarginBottom"),
  scrollMarginLeft: t.spaceT("scrollMarginLeft"),
  scrollMarginRight: t.spaceT("scrollMarginRight"),
  scrollMarginX: t.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: t.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  scrollPadding: t.spaceT("scrollPadding"),
  scrollPaddingTop: t.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: t.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: t.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: t.spaceT("scrollPaddingRight"),
  scrollPaddingX: t.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: t.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]),
};
function resolveReference(operand) {
  if (isObject(operand) && operand.reference) {
    return operand.reference;
  }
  return String(operand);
}
var toExpression = (operator, ...operands) =>
  operands.map(resolveReference).join(` ${operator} `).replace(/calc/g, "");
var add = (...operands) => `calc(${toExpression("+", ...operands)})`;
var subtract = (...operands) => `calc(${toExpression("-", ...operands)})`;
var multiply = (...operands) => `calc(${toExpression("*", ...operands)})`;
var divide = (...operands) => `calc(${toExpression("/", ...operands)})`;
var negate = (x) => {
  const value = resolveReference(x);
  if (value != null && !Number.isNaN(parseFloat(value))) {
    return String(value).startsWith("-") ? String(value).slice(1) : `-${value}`;
  }
  return multiply(value, -1);
};
var calc = Object.assign(
  (x) => ({
    add: (...operands) => calc(add(x, ...operands)),
    subtract: (...operands) => calc(subtract(x, ...operands)),
    multiply: (...operands) => calc(multiply(x, ...operands)),
    divide: (...operands) => calc(divide(x, ...operands)),
    negate: () => calc(negate(x)),
    toString: () => x.toString(),
  }),
  {
    add,
    subtract,
    multiply,
    divide,
    negate,
  }
);
function analyzeCSSValue2(value) {
  const num = parseFloat(value.toString());
  const unit = value.toString().replace(String(num), "");
  return { unitless: !unit, value: num, unit };
}
function px(value) {
  if (value == null) return value;
  const { unitless } = analyzeCSSValue2(value);
  return unitless || typeof value === "number" ? `${value}px` : value;
}
function toMediaQueryString(min, max) {
  const query = ["@media screen"];
  if (min) query.push("and", `(min-width: ${px(min)})`);
  if (max) query.push("and", `(max-width: ${px(max)})`);
  return query.join(" ");
}

// src/pseudos.ts
var state = {
  hover: (str, post) => `${str}:hover ${post}, ${str}[data-hover] ${post}`,
  focus: (str, post) => `${str}:focus ${post}, ${str}[data-focus] ${post}`,
  focusVisible: (str, post) => `${str}:focus-visible ${post}`,
  focusWithin: (str, post) => `${str}:focus-within ${post}`,
  active: (str, post) => `${str}:active ${post}, ${str}[data-active] ${post}`,
  disabled: (str, post) =>
    `${str}:disabled ${post}, ${str}[data-disabled] ${post}`,
  invalid: (str, post) =>
    `${str}:invalid ${post}, ${str}[data-invalid] ${post}`,
  checked: (str, post) =>
    `${str}:checked ${post}, ${str}[data-checked] ${post}`,
  indeterminate: (str, post) =>
    `${str}:indeterminate ${post}, ${str}[aria-checked=mixed] ${post}, ${str}[data-indeterminate] ${post}`,
  readOnly: (str, post) =>
    `${str}:read-only ${post}, ${str}[readonly] ${post}, ${str}[data-read-only] ${post}`,
  expanded: (str, post) =>
    `${str}:read-only ${post}, ${str}[aria-expanded=true] ${post}, ${str}[data-expanded] ${post}`,
  placeholderShown: (str, post) => `${str}:placeholder-shown ${post}`,
};
var toGroup = (fn) =>
  merge((v) => fn(v, "&"), "[role=group]", "[data-group]", ".group");
var toPeer = (fn) => merge((v) => fn(v, "~ &"), "[data-peer]", ".peer");
var merge = (fn, ...selectors) => selectors.map(fn).join(", ");
var pseudoSelectors = {
  _hover: "&:hover, &[data-hover]",
  _active: "&:active, &[data-active]",
  _focus: "&:focus, &[data-focus]",
  _highlighted: "&[data-highlighted]",
  _focusWithin: "&:focus-within",
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  _before: "&::before",
  _after: "&::after",
  _empty: "&:empty",
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  _checked: "&[aria-checked=true], &[data-checked]",
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  _valid: "&[data-valid], &[data-state=valid]",
  _loading: "&[data-loading], &[aria-busy=true]",
  _selected: "&[aria-selected=true], &[data-selected]",
  _hidden: "&[hidden], &[data-hidden]",
  _autofill: "&:-webkit-autofill",
  _even: "&:nth-of-type(even)",
  _odd: "&:nth-of-type(odd)",
  _first: "&:first-of-type",
  _firstLetter: "&::first-letter",
  _last: "&:last-of-type",
  _notFirst: "&:not(:first-of-type)",
  _notLast: "&:not(:last-of-type)",
  _visited: "&:visited",
  _activeLink: "&[aria-current=page]",
  _activeStep: "&[aria-current=step]",
  _indeterminate:
    "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  _groupHover: toGroup(state.hover),
  _peerHover: toPeer(state.hover),
  _groupFocus: toGroup(state.focus),
  _peerFocus: toPeer(state.focus),
  _groupFocusVisible: toGroup(state.focusVisible),
  _peerFocusVisible: toPeer(state.focusVisible),
  _groupActive: toGroup(state.active),
  _peerActive: toPeer(state.active),
  _groupDisabled: toGroup(state.disabled),
  _peerDisabled: toPeer(state.disabled),
  _groupInvalid: toGroup(state.invalid),
  _peerInvalid: toPeer(state.invalid),
  _groupChecked: toGroup(state.checked),
  _peerChecked: toPeer(state.checked),
  _groupFocusWithin: toGroup(state.focusWithin),
  _peerFocusWithin: toPeer(state.focusWithin),
  _peerPlaceholderShown: toPeer(state.placeholderShown),
  _placeholder: "&::placeholder",
  _placeholderShown: "&:placeholder-shown",
  _fullScreen: "&:fullscreen",
  _selection: "&::selection",
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  _mediaDark: "@media (prefers-color-scheme: dark)",
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  _dark:
    ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  _light:
    ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
  _horizontal: "&[data-orientation=horizontal]",
  _vertical: "&[data-orientation=vertical]",
};
var pseudoPropNames = Object.keys(pseudoSelectors);

// ../../utilities/object-utils/src/omit.ts
function omit$1(object, keysToOmit = []) {
  const clone = Object.assign({}, object);
  for (const key of keysToOmit) {
    if (key in clone) {
      delete clone[key];
    }
  }
  return clone;
}
var systemProps = mergeWith(
  {},
  background,
  border,
  color,
  flexbox,
  layout,
  filter,
  ring,
  interactivity,
  grid,
  others,
  position,
  effect,
  space,
  scroll,
  typography,
  textDecoration,
  transform,
  list,
  transition
);
Object.assign({}, space, layout, flexbox, grid, position);
var propNames = [...Object.keys(systemProps), ...pseudoPropNames];
var styleProps = { ...systemProps, ...pseudoSelectors };
var isStyleProp = (prop) => prop in styleProps;
var expandResponsive = (styles) => (theme) => {
  if (!theme.__breakpoints) return styles;
  const { isResponsive, toArrayValue, media: medias } = theme.__breakpoints;
  const computedStyles = {};
  for (const key in styles) {
    let value = runIfFn$1(styles[key], theme);
    if (value == null) continue;
    value =
      isObject(value) && isResponsive(value) ? toArrayValue(value) : value;
    if (!Array.isArray(value)) {
      computedStyles[key] = value;
      continue;
    }
    const queries = value.slice(0, medias.length).length;
    for (let index = 0; index < queries; index += 1) {
      const media = medias == null ? void 0 : medias[index];
      if (!media) {
        computedStyles[key] = value[index];
        continue;
      }
      computedStyles[media] = computedStyles[media] || {};
      if (value[index] == null) {
        continue;
      }
      computedStyles[media][key] = value[index];
    }
  }
  return computedStyles;
};

// src/utils/split-by-comma.ts
function splitByComma(value) {
  const chunks = [];
  let chunk = "";
  let inParens = false;
  for (let i = 0; i < value.length; i++) {
    const char = value[i];
    if (char === "(") {
      inParens = true;
      chunk += char;
    } else if (char === ")") {
      inParens = false;
      chunk += char;
    } else if (char === "," && !inParens) {
      chunks.push(chunk);
      chunk = "";
    } else {
      chunk += char;
    }
  }
  chunk = chunk.trim();
  if (chunk) {
    chunks.push(chunk);
  }
  return chunks;
}

// src/css.ts
function isCssVar2(value) {
  return /^var\(--.+\)$/.test(value);
}
var isCSSVariableTokenValue = (key, value) =>
  key.startsWith("--") && typeof value === "string" && !isCssVar2(value);
var resolveTokenValue = (theme, value) => {
  var _a, _b;
  if (value == null) return value;
  const getVar = (val) => {
    var _a2, _b2;
    return (_b2 = (_a2 = theme.__cssMap) == null ? void 0 : _a2[val]) == null
      ? void 0
      : _b2.varRef;
  };
  const getValue = (val) => {
    var _a2;
    return (_a2 = getVar(val)) != null ? _a2 : val;
  };
  const [tokenValue, fallbackValue] = splitByComma(value);
  value =
    (_b = (_a = getVar(tokenValue)) != null ? _a : getValue(fallbackValue)) !=
    null
      ? _b
      : getValue(value);
  return value;
};
function getCss(options) {
  const { configs = {}, pseudos = {}, theme } = options;
  const css2 = (stylesOrFn, nested = false) => {
    var _a, _b, _c;
    const _styles = runIfFn$1(stylesOrFn, theme);
    const styles = expandResponsive(_styles)(theme);
    let computedStyles = {};
    for (let key in styles) {
      const valueOrFn = styles[key];
      let value = runIfFn$1(valueOrFn, theme);
      if (key in pseudos) {
        key = pseudos[key];
      }
      if (isCSSVariableTokenValue(key, value)) {
        value = resolveTokenValue(theme, value);
      }
      let config = configs[key];
      if (config === true) {
        config = { property: key };
      }
      if (isObject(value)) {
        computedStyles[key] = (_a = computedStyles[key]) != null ? _a : {};
        computedStyles[key] = mergeWith(
          {},
          computedStyles[key],
          css2(value, true)
        );
        continue;
      }
      let rawValue =
        (_c =
          (_b = config == null ? void 0 : config.transform) == null
            ? void 0
            : _b.call(config, value, theme, _styles)) != null
          ? _c
          : value;
      rawValue = (config == null ? void 0 : config.processResult)
        ? css2(rawValue, true)
        : rawValue;
      const configProperty = runIfFn$1(
        config == null ? void 0 : config.property,
        theme
      );
      if (!nested && (config == null ? void 0 : config.static)) {
        const staticStyles = runIfFn$1(config.static, theme);
        computedStyles = mergeWith({}, computedStyles, staticStyles);
      }
      if (configProperty && Array.isArray(configProperty)) {
        for (const property of configProperty) {
          computedStyles[property] = rawValue;
        }
        continue;
      }
      if (configProperty) {
        if (configProperty === "&" && isObject(rawValue)) {
          computedStyles = mergeWith({}, computedStyles, rawValue);
        } else {
          computedStyles[configProperty] = rawValue;
        }
        continue;
      }
      if (isObject(rawValue)) {
        computedStyles = mergeWith({}, computedStyles, rawValue);
        continue;
      }
      computedStyles[key] = rawValue;
    }
    return computedStyles;
  };
  return css2;
}
var css = (styles) => (theme) => {
  const cssFn = getCss({
    theme,
    pseudos: pseudoSelectors,
    configs: systemProps,
  });
  return cssFn(styles);
};
function normalize2(value, toArray) {
  if (Array.isArray(value)) return value;
  if (isObject(value)) return toArray(value);
  if (value != null) return [value];
}
function getNextIndex(values, i) {
  for (let j = i + 1; j < values.length; j++) {
    if (values[j] != null) return j;
  }
  return -1;
}
function createResolver(theme) {
  const breakpointUtil = theme.__breakpoints;
  return function resolver(config, prop, value, props) {
    var _a, _b;
    if (!breakpointUtil) return;
    const result = {};
    const normalized = normalize2(value, breakpointUtil.toArrayValue);
    if (!normalized) return result;
    const len = normalized.length;
    const isSingle = len === 1;
    const isMultipart = !!config.parts;
    for (let i = 0; i < len; i++) {
      const key = breakpointUtil.details[i];
      const nextKey = breakpointUtil.details[getNextIndex(normalized, i)];
      const query = toMediaQueryString(
        key.minW,
        nextKey == null ? void 0 : nextKey._minW
      );
      const styles = runIfFn$1(
        (_a = config[prop]) == null ? void 0 : _a[normalized[i]],
        props
      );
      if (!styles) continue;
      if (isMultipart) {
        (_b = config.parts) == null
          ? void 0
          : _b.forEach((part) => {
              mergeWith(result, {
                [part]: isSingle ? styles[part] : { [query]: styles[part] },
              });
            });
        continue;
      }
      if (!isMultipart) {
        if (isSingle) mergeWith(result, styles);
        else result[query] = styles;
        continue;
      }
      result[query] = styles;
    }
    return result;
  };
}
function resolveStyleConfig(config) {
  return (props) => {
    var _a;
    const { variant, size, theme } = props;
    const recipe = createResolver(theme);
    return mergeWith(
      {},
      runIfFn$1((_a = config.baseStyle) != null ? _a : {}, props),
      recipe(config, "sizes", size, props),
      recipe(config, "variants", variant, props)
    );
  };
}

// src/theming-props.ts
function omitThemingProps(props) {
  return omit$1(props, ["styleConfig", "size", "variant", "colorScheme"]);
}

// src/object.ts
function omit(object, keys) {
  const result = {};
  Object.keys(object).forEach((key) => {
    if (keys.includes(key)) return;
    result[key] = object[key];
  });
  return result;
}
function get(obj, path, fallback, index) {
  const key = typeof path === "string" ? path.split(".") : [path];
  for (index = 0; index < key.length; index += 1) {
    if (!obj) break;
    obj = obj[key[index]];
  }
  return obj === void 0 ? fallback : obj;
}
var memoize = (fn) => {
  const cache = /* @__PURE__ */ new WeakMap();
  const memoizedFn = (obj, path, fallback, index) => {
    if (typeof obj === "undefined") {
      return fn(obj, path, fallback);
    }
    if (!cache.has(obj)) {
      cache.set(obj, /* @__PURE__ */ new Map());
    }
    const map = cache.get(obj);
    if (map.has(path)) {
      return map.get(path);
    }
    const value = fn(obj, path, fallback, index);
    map.set(path, value);
    return value;
  };
  return memoizedFn;
};
var memoizedGet = memoize(get);
function objectFilter(object, fn) {
  const result = {};
  Object.keys(object).forEach((key) => {
    const value = object[key];
    const shouldPass = fn(value, key, object);
    if (shouldPass) {
      result[key] = value;
    }
  });
  return result;
}
var filterUndefined = (object) =>
  objectFilter(object, (val) => val !== null && val !== void 0);

// src/assertion.ts
function isFunction(value) {
  return typeof value === "function";
}
process.env.NODE_ENV !== "production";
process.env.NODE_ENV === "test";

// src/function.ts
function runIfFn(valueOrFn, ...args) {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== "undefined";
var hasMap = typeof Map === "function";
var hasSet = typeof Set === "function";
var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.3
  if (a === b) return true;

  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0; ) if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0; ) if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    // START: Modifications:
    // Apply guards for `Object.create(null)` handling. See:
    // - https://github.com/FormidableLabs/react-fast-compare/issues/64
    // - https://github.com/epoberezkin/fast-deep-equal/issues/49
    if (
      a.valueOf !== Object.prototype.valueOf &&
      typeof a.valueOf === "function" &&
      typeof b.valueOf === "function"
    )
      return a.valueOf() === b.valueOf();
    if (
      a.toString !== Object.prototype.toString &&
      typeof a.toString === "function" &&
      typeof b.toString === "function"
    )
      return a.toString() === b.toString();
    // END: Modifications

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0; ) {
      if (
        (keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") &&
        a.$$typeof
      ) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

var reactFastCompare = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message || "").match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn("react-fast-compare cannot handle circular refs");
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};

function useStyleConfigImpl(themeKey, props = {}) {
  var _a;
  const { styleConfig: styleConfigProp, ...rest } = props;
  const { theme, colorMode } = useChakra();
  const themeStyleConfig = themeKey
    ? memoizedGet(theme, `components.${themeKey}`)
    : void 0;
  const styleConfig = styleConfigProp || themeStyleConfig;
  const mergedProps = mergeWith(
    { theme, colorMode },
    (_a = styleConfig == null ? void 0 : styleConfig.defaultProps) != null
      ? _a
      : {},
    filterUndefined(omit(rest, ["children"]))
  );
  const stylesRef = React$1.useRef({});
  if (styleConfig) {
    const getStyles = resolveStyleConfig(styleConfig);
    const styles = getStyles(mergedProps);
    const isStyleEqual = reactFastCompare(stylesRef.current, styles);
    if (!isStyleEqual) {
      stylesRef.current = styles;
    }
  }
  return stylesRef.current;
}
function useStyleConfig(themeKey, props = {}) {
  return useStyleConfigImpl(themeKey, props);
}

var allPropNames = /* @__PURE__ */ new Set([
  ...propNames,
  "textStyle",
  "layerStyle",
  "apply",
  "noOfLines",
  "focusBorderColor",
  "errorBorderColor",
  "as",
  "__css",
  "css",
  "sx",
]);
var validHTMLProps = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate",
]);
function shouldForwardProp(prop) {
  return validHTMLProps.has(prop) || !allPropNames.has(prop);
}

// src/assign-after.ts
function assignAfter(target, ...sources) {
  if (target == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }
  const result = { ...target };
  for (const nextSource of sources) {
    if (nextSource == null) continue;
    for (const nextKey in nextSource) {
      if (!Object.prototype.hasOwnProperty.call(nextSource, nextKey)) continue;
      if (nextKey in result) delete result[nextKey];
      result[nextKey] = nextSource[nextKey];
    }
  }
  return result;
}

var _a;
var emotion_styled = (_a = createStyled.default) != null ? _a : createStyled;
var toCSSObject =
  ({ baseStyle }) =>
  (props) => {
    const { theme, css: cssProp, __css, sx, ...rest } = props;
    const styleProps = objectFilter(rest, (_, prop) => isStyleProp(prop));
    const finalBaseStyle = runIfFn(baseStyle, props);
    const finalStyles = assignAfter(
      {},
      __css,
      finalBaseStyle,
      filterUndefined(styleProps),
      sx
    );
    const computedCSS = css(finalStyles)(props.theme);
    return cssProp ? [computedCSS, cssProp] : computedCSS;
  };
function styled(component, options) {
  const { baseStyle, ...styledOptions } = options != null ? options : {};
  if (!styledOptions.shouldForwardProp) {
    styledOptions.shouldForwardProp = shouldForwardProp;
  }
  const styleObject = toCSSObject({ baseStyle });
  const Component = emotion_styled(component, styledOptions)(styleObject);
  const chakraComponent = React$1.forwardRef(function ChakraComponent(
    props,
    ref
  ) {
    const { colorMode, forced } = useColorMode();
    return React$1.createElement(Component, {
      ref,
      "data-theme": forced ? colorMode : void 0,
      ...props,
    });
  });
  return chakraComponent;
}

// src/factory.ts
function factory() {
  const cache = /* @__PURE__ */ new Map();
  return new Proxy(styled, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(target, thisArg, argArray) {
      return styled(...argArray);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(_, element) {
      if (!cache.has(element)) {
        cache.set(element, styled(element));
      }
      return cache.get(element);
    },
  });
}
var chakra = factory();

function forwardRef(component) {
  return React$1.forwardRef(component);
}

// src/index.ts
function getValidChildren(children) {
  return React$1.Children.toArray(children).filter((child) =>
    React$1.isValidElement(child)
  );
}

// src/responsive.ts
function mapResponsive(prop, mapper) {
  if (Array.isArray(prop)) {
    return prop.map((item) => (item === null ? null : mapper(item)));
  }
  if (isObject(prop)) {
    return Object.keys(prop).reduce((result, key) => {
      result[key] = mapper(prop[key]);
      return result;
    }, {});
  }
  if (prop != null) {
    return mapper(prop);
  }
  return null;
}

var StackItem = (props) =>
  /* @__PURE__ */ jsxRuntime.jsx(chakra.div, {
    className: "chakra-stack__item",
    ...props,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...props["__css"],
    },
  });
StackItem.displayName = "StackItem";

function getDividerStyles(options) {
  const { spacing, direction } = options;
  const dividerStyles = {
    column: {
      my: spacing,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px",
    },
    "column-reverse": {
      my: spacing,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px",
    },
    row: {
      mx: spacing,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0,
    },
    "row-reverse": {
      mx: spacing,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0,
    },
  };
  return {
    "&": mapResponsive(direction, (value) => dividerStyles[value]),
  };
}

var Stack = forwardRef((props, ref) => {
  const {
    isInline,
    direction: directionProp,
    align,
    justify,
    spacing = "0.5rem",
    wrap,
    children,
    divider,
    className,
    shouldWrapChildren,
    ...rest
  } = props;
  const direction = isInline
    ? "row"
    : directionProp != null
    ? directionProp
    : "column";
  const dividerStyle = React$1.useMemo(
    () => getDividerStyles({ spacing, direction }),
    [spacing, direction]
  );
  const hasDivider = !!divider;
  const shouldUseChildren = !shouldWrapChildren && !hasDivider;
  const clones = React$1.useMemo(() => {
    const validChildren = getValidChildren(children);
    return shouldUseChildren
      ? validChildren
      : validChildren.map((child, index) => {
          const key = typeof child.key !== "undefined" ? child.key : index;
          const isLast = index + 1 === validChildren.length;
          const wrappedChild = /* @__PURE__ */ jsxRuntime.jsx(
            StackItem,
            { children: child },
            key
          );
          const _child = shouldWrapChildren ? wrappedChild : child;
          if (!hasDivider) return _child;
          const clonedDivider = React$1.cloneElement(divider, {
            __css: dividerStyle,
          });
          const _divider = isLast ? null : clonedDivider;
          return /* @__PURE__ */ jsxRuntime.jsxs(
            React$1.Fragment,
            { children: [_child, _divider] },
            key
          );
        });
  }, [
    divider,
    dividerStyle,
    hasDivider,
    shouldUseChildren,
    shouldWrapChildren,
    children,
  ]);
  const _className = cx("chakra-stack", className);
  return /* @__PURE__ */ jsxRuntime.jsx(chakra.div, {
    ref,
    display: "flex",
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction,
    flexWrap: wrap,
    gap: hasDivider ? void 0 : spacing,
    className: _className,
    ...rest,
    children: clones,
  });
});
Stack.displayName = "Stack";

var Heading = forwardRef(function Heading2(props, ref) {
  const styles = useStyleConfig("Heading", props);
  const { className, ...rest } = omitThemingProps(props);
  return /* @__PURE__ */ jsxRuntime.jsx(chakra.h2, {
    ref,
    className: cx("chakra-heading", props.className),
    ...rest,
    __css: styles,
  });
});
Heading.displayName = "Heading";

var Teaserheading = function Teaserheading(_ref) {
  var colors = _ref.colors,
    color = _ref.color,
    descColor = _ref.descColor,
    title = _ref.title,
    desc = _ref.desc,
    size = _ref.size,
    fontW = _ref.fontW;
  return /*#__PURE__*/ React$1.createElement(
    Stack,
    {
      gap: "1rem",
      maxW: "28rem",
    },
    /*#__PURE__*/ React$1.createElement(
      Heading,
      {
        color: color || colors.title,
        size: "sm",
      },
      title
    ),
    /*#__PURE__*/ React$1.createElement(
      Heading,
      {
        color: descColor || colors.desc,
        size: size || "lg",
        fontWeight: fontW || "bold",
      },
      desc
    )
  );
};

var IconedListItem = function IconedListItem(_ref) {
  var checkMark = _ref.checkMark,
    text = _ref.text;
  return /*#__PURE__*/ React$1.createElement(
    react.ListItem,
    {
      fontSize: ".875rem",
      gap: "1rem",
    },
    /*#__PURE__*/ React$1.createElement(react.ListIcon, {
      fontSize: "1rem",
      as: checkMark,
    }),
    text
  );
};
var ClickableListItem = function ClickableListItem(_ref2) {
  var text = _ref2.text,
    link = _ref2.link,
    fontSize = _ref2.fontSize,
    color = _ref2.color;
  return /*#__PURE__*/ React$1.createElement(
    react.ListItem,
    {
      fontSize: fontSize,
      color: color,
      gap: "1rem",
    },
    /*#__PURE__*/ React$1.createElement(
      Link,
      {
        href: link,
      },
      text
    )
  );
};
ClickableListItem.defaultProps = {
  fontSize: ".875rem",
  color: "orange",
};

var AccordionItemCard = function AccordionItemCard(_ref) {
  var borderWidth = _ref.borderWidth,
    borderColor = _ref.borderColor,
    borderRadius = _ref.borderRadius,
    my = _ref.my,
    p = _ref.p,
    title = _ref.title,
    desc = _ref.desc;
  _ref.isExpanded;
  return /*#__PURE__*/ React$1.createElement(
    react.AccordionItem,
    {
      borderWidth: borderWidth,
      borderColor: borderColor,
      borderRadius: borderRadius,
      my: my,
      p: p,
    },
    function (_ref2) {
      var isExpanded = _ref2.isExpanded;
      return /*#__PURE__*/ React$1.createElement(AccordionContent, {
        isExpanded: isExpanded,
        title: title,
        desc: desc,
      });
    }
  );
};
var AccordionContent = function AccordionContent(_ref3) {
  var isExpanded = _ref3.isExpanded,
    title = _ref3.title,
    desc = _ref3.desc;
  return /*#__PURE__*/ React$1.createElement(
    React$1.Fragment,
    null,
    /*#__PURE__*/ React$1.createElement(
      react.Heading,
      {
        fontSize: "md",
      },
      /*#__PURE__*/ React$1.createElement(
        react.AccordionButton,
        {
          _hover: {
            bgColor: "transparent",
          },
        },
        /*#__PURE__*/ React$1.createElement(
          react.Box,
          {
            as: "span",
            flex: "1",
            textAlign: "left",
          },
          /*#__PURE__*/ React$1.createElement(
            react.Heading,
            {
              fontSize: "1rem",
            },
            title
          )
        ),
        isExpanded
          ? /*#__PURE__*/ React$1.createElement(fa.FaMinus, null)
          : /*#__PURE__*/ React$1.createElement(fa.FaPlus, null)
      )
    ),
    /*#__PURE__*/ React$1.createElement(
      react.AccordionPanel,
      {
        pb: 4,
      },
      desc
    )
  );
};
var AccordionList = function AccordionList(_ref4) {
  var payload = _ref4.payload;
  return /*#__PURE__*/ React$1.createElement(
    react.Accordion,
    {
      allowToggle: true,
    },
    payload.map(function (accordion, i) {
      return /*#__PURE__*/ React$1.createElement(
        AccordionItemCard,
        _extends(
          {
            key: "AccordionItemCard-".concat(i),
          },
          accordion
        )
      );
    })
  );
};
AccordionList.defaultProps = {
  payload: [
    {
      borderWidth: 1,
      borderColor: "black",
      my: 4,
      p: 2,
      borderRadius: 8,
      title: "Orange Money",
      desc: "Mobile payement",
      isExpanded: "false",
    },
    {
      borderWidth: 1,
      borderColor: "black",
      my: 4,
      p: 2,
      borderRadius: 8,
      title: "Orange et Moi",
      desc: "selcare",
      isExpanded: "false",
    },
  ],
};

var BubbleCard = function BubbleCard(_ref) {
  var children = _ref.children,
    cardStyle = _ref.cardStyle,
    imgStyle = _ref.imgStyle,
    containerStyle = _ref.containerStyle,
    bubbleBorderStyle = _ref.bubbleBorderStyle,
    bubbleStyle = _ref.bubbleStyle,
    display = _ref.display;
  return /*#__PURE__*/ React$1.createElement(
    react.HStack,
    containerStyle,
    imgStyle &&
      /*#__PURE__*/ React$1.createElement(
        react.Box,
        {
          display: display == "left" ? "block" : "none",
        },
        /*#__PURE__*/ React$1.createElement(react.Avatar, imgStyle)
      ),
    /*#__PURE__*/ React$1.createElement(
      react.HStack,
      {
        w: "100%",
      },
      /*#__PURE__*/ React$1.createElement(
        react.Box,
        {
          position: "relative",
          zIndex: 2,
          display: display == "left" ? "block" : "none",
        },
        bubbleBorderStyle &&
          /*#__PURE__*/ React$1.createElement(
            react.Box,
            _extends(
              {
                style: {
                  clipPath: "polygon(50% 25%, 0 50%, 50% 75%)",
                },
                left: "-4px",
              },
              bubbleBorderStyle
            )
          ),
        bubbleStyle &&
          /*#__PURE__*/ React$1.createElement(
            react.Box,
            _extends(
              {
                style: {
                  clipPath: "polygon(50% 25%, 0 50%, 50% 75%)",
                },
                left: "-3px",
              },
              bubbleStyle
            )
          )
      ),
      /*#__PURE__*/ React$1.createElement(
        react.Card,
        _extends(
          {
            flex: 1,
          },
          cardStyle
        ),
        children
      ),
      /*#__PURE__*/ React$1.createElement(
        react.Box,
        {
          position: "relative",
          zIndex: 2,
          display: display == "right" ? "block" : "none",
        },
        bubbleBorderStyle &&
          /*#__PURE__*/ React$1.createElement(
            react.Box,
            _extends(
              {
                style: {
                  clipPath: "polygon(100% 50%, 50% 25%, 50% 75%)",
                },
                right: "-4px",
              },
              bubbleBorderStyle
            )
          ),
        bubbleStyle &&
          /*#__PURE__*/ React$1.createElement(
            react.Box,
            _extends(
              {
                style: {
                  clipPath: "polygon(100% 50%, 50% 25%, 50% 75%)",
                },
                right: "-3px",
              },
              bubbleStyle
            )
          )
      )
    ),
    imgStyle &&
      /*#__PURE__*/ React$1.createElement(
        react.Box,
        {
          display: display == "right" ? "block" : "none",
        },
        /*#__PURE__*/ React$1.createElement(react.Avatar, imgStyle)
      )
  );
};
BubbleCard.propTypes = {
  children: propTypesExports.element,
  imgStyle: propTypesExports.shape({
    src: propTypesExports.string,
    alt: propTypesExports.string,
    boxSize: propTypesExports.string,
  }),
  containerStyle: propTypesExports.shape({
    spacing: propTypesExports.string,
  }),
  bubbleBorderStyle: propTypesExports.shape({
    style: propTypesExports.any.isRequired,
    h: propTypesExports.string.isRequired,
    w: propTypesExports.string.isRequired,
    display: propTypesExports.string.isRequired,
    top: propTypesExports.string.isRequired,
    left: propTypesExports.string.isRequired,
    right: propTypesExports.string.isRequired,
    justifyContent: propTypesExports.string.isRequired,
    alignItems: propTypesExports.string.isRequired,
  }),
  bubbleStyle: propTypesExports.shape({
    style: propTypesExports.any.isRequired,
    h: propTypesExports.string.isRequired,
    w: propTypesExports.string.isRequired,
    display: propTypesExports.string.isRequired,
    top: propTypesExports.string.isRequired,
    left: propTypesExports.string.isRequired,
    right: propTypesExports.string.isRequired,
    justifyContent: propTypesExports.string.isRequired,
    alignItems: propTypesExports.string.isRequired,
  }),
  display: propTypesExports.oneOf(["left", "right"]),
  cardStyle: propTypesExports.shape({
    bg: propTypesExports.string,
    border: propTypesExports.string,
  }),
};
BubbleCard.defaultProps = {
  children: /*#__PURE__*/ React$1.createElement(
    react.Text,
    null,
    "View a summary of all your customers over the last month."
  ),
  imgStyle: {
    alt: "Dan Abrahmov",
    src: "https://bit.ly/dan-abramov",
    boxSize: "50px",
  },
  bubbleStyle: {
    display: "flex",
    top: "0",
    left: "-4px",
    position: "absolute",
    justifyContent: "end",
    alignItems: "center",
  },
  containerStyle: {
    spacing: "20px",
    alignItems: "end",
  },
  cardStyle: {
    bg: "#b5e8f7",
    border: "1px solid black",
    h: "100px",
    p: 2,
  },
};

var InfoCard = function InfoCard(_ref) {
  var children = _ref.children,
    cardStyle = _ref.cardStyle,
    bodyStyle = _ref.bodyStyle,
    iconStyle = _ref.iconStyle;
  return /*#__PURE__*/ React$1.createElement(
    react.Box,
    cardStyle,
    /*#__PURE__*/ React$1.createElement(
      react.Box,
      bodyStyle,
      iconStyle && /*#__PURE__*/ React$1.createElement(react.Image, iconStyle),
      children
    )
  );
};
InfoCard.propTypes = {
  children: propTypesExports.element,
  cardStyle: propTypesExports.shape({
    bg: propTypesExports.string,
    rounded: propTypesExports.string,
    w: propTypesExports.string.isRequired,
    bgImage: propTypesExports.string,
    bgPosition: propTypesExports.string,
    bgRepeat: propTypesExports.string,
  }),
  bodyStyle: propTypesExports.shape({
    p: propTypesExports.string,
    display: propTypesExports.string,
    alignItems: propTypesExports.string,
    justifyContent: propTypesExports.string,
    flexDirection: propTypesExports.string,
    gap: propTypesExports.string,
  }),
  iconStyle: propTypesExports.shape({
    src: propTypesExports.string.isRequired,
    alt: propTypesExports.string.isRequired,
    h: propTypesExports.string.isRequired,
  }),
};
InfoCard.defaultProps = {
  cardStyle: {
    bg: "#FFF6B6",
    rounded: 7,
    w: "300px",
  },
  children: /*#__PURE__*/ React$1.createElement(
    react.Text,
    null,
    "View a summary of all your customers over the last month."
  ),
  iconStyle: {
    alt: "check",
    src: "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/7B3EE0F5-3F2C-4C9A-A0D5-285F8C8F7A88.svg",
    height: "40px",
  },
};

var _excluded = ["activeStyle", "noActiveStyle", "commonStyle", "children"];
var RadioCard = function RadioCard(_ref) {
  var activeStyle = _ref.activeStyle,
    noActiveStyle = _ref.noActiveStyle,
    commonStyle = _ref.commonStyle,
    children = _ref.children,
    radioProps = _objectWithoutProperties(_ref, _excluded);
  var _useRadio = react.useRadio(radioProps),
    state = _useRadio.state,
    getInputProps = _useRadio.getInputProps,
    getRadioProps = _useRadio.getRadioProps,
    htmlProps = _useRadio.htmlProps;
  return /*#__PURE__*/ React$1.createElement(
    react.chakra.label,
    htmlProps,
    /*#__PURE__*/ React$1.createElement("input", getInputProps({})),
    /*#__PURE__*/ React$1.createElement(
      react.Box,
      _extends(
        {
          bg: state.isChecked ? activeStyle.bg : noActiveStyle.bg,
        },
        getRadioProps(),
        commonStyle.box
      ),
      /*#__PURE__*/ React$1.createElement(
        react.HStack,
        null,
        /*#__PURE__*/ React$1.createElement(
          react.Box,
          _extends(
            {
              bordercolor: state.isChecked
                ? activeStyle.borderColor
                : noActiveStyle.borderColor,
            },
            commonStyle.check
          ),
          /*#__PURE__*/ React$1.createElement(react.Box, {
            bg: state.isChecked ? activeStyle.checkbg : noActiveStyle.checkbg,
            rounded: commonStyle.check.rounded,
            p: commonStyle.check.p,
          })
        ),
        children
      )
    )
  );
};
RadioCard.propTypes = {
  commonStyle: propTypesExports.shape({
    box: propTypesExports.shape({}),
    check: propTypesExports.shape({}),
  }),
  activeStyle: propTypesExports.shape({
    bg: propTypesExports.string,
    borderColor: propTypesExports.string,
    checkbg: propTypesExports.string,
  }),
  noActiveBg: propTypesExports.shape({
    bg: propTypesExports.string,
    borderColor: propTypesExports.string,
    checkbg: propTypesExports.string,
  }),
};
RadioCard.defaultProps = {
  commonStyle: {
    box: {
      p: 5,
      rounded: "md",
    },
    check: {
      border: "2px",
      h: "5",
      p: "1",
      rounded: "full",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bg: "#fff",
    },
  },
  activeStyle: {
    bg: "#ff7900",
    borderColor: "black",
    checkbg: "black",
  },
  noActiveStyle: {
    bg: "black",
    borderColor: "#fff",
    checkbg: "#fff",
  },
};

var Summary = function Summary(_ref) {
  var containerStyle = _ref.containerStyle,
    headerStyle = _ref.headerStyle,
    bodyStyle = _ref.bodyStyle,
    footerStyle = _ref.footerStyle,
    data = _ref.data;
  return /*#__PURE__*/ React.createElement(
    react.Card,
    _extends({}, containerStyle, {
      fontSize: {
        base: "1rem",
      },
    }),
    /*#__PURE__*/ React.createElement(
      react.CardHeader,
      headerStyle,
      /*#__PURE__*/ React$1.isValidElement(data.header)
        ? data.header
        : /*#__PURE__*/ React.createElement(react.Text, null, data.header)
    ),
    /*#__PURE__*/ React.createElement(
      react.CardBody,
      null,
      /*#__PURE__*/ React$1.isValidElement(data.body)
        ? data.body
        : /*#__PURE__*/ React.createElement(
            react.Stack,
            null,
            data.body.map(function (item) {
              return /*#__PURE__*/ React.createElement(
                react.HStack,
                bodyStyle,
                /*#__PURE__*/ React.createElement(react.Text, null, item.title),
                /*#__PURE__*/ React.createElement(
                  react.Text,
                  null,
                  item.value + " " + item.unit
                )
              );
            })
          )
    ),
    /*#__PURE__*/ React.createElement(
      react.CardFooter,
      null,
      /*#__PURE__*/ React.createElement(
        react.HStack,
        footerStyle,
        /*#__PURE__*/ React$1.isValidElement(data.footer)
          ? data.footer
          : /*#__PURE__*/ React.createElement(
              React.Fragment,
              null,
              /*#__PURE__*/ React.createElement(
                react.Text,
                null,
                " ",
                data.footer.title,
                " "
              ),
              /*#__PURE__*/ React.createElement(
                react.Text,
                null,
                " ",
                data.footer.value + " " + data.footer.unit,
                " "
              )
            )
      )
    )
  );
};
Summary.propTypes = {
  containerStyle: propTypesExports.PropTypes.shape({
    bg: propTypesExports.PropTypes.string,
  }),
  headerStyle: propTypesExports.PropTypes.shape({
    w: propTypesExports.PropTypes.string,
    fontSize: propTypesExports.PropTypes.string,
  }),
  bodyStyle: propTypesExports.PropTypes.shape({
    w: propTypesExports.PropTypes.string,
    justifyContent: propTypesExports.PropTypes.string,
    fontSize: propTypesExports.PropTypes.string,
  }),
  footerStyle: propTypesExports.PropTypes.shape({
    w: propTypesExports.PropTypes.string,
    justifyContent: propTypesExports.PropTypes.string,
    fontSize: propTypesExports.PropTypes.string,
  }),
  data: propTypesExports.PropTypes.shape({
    header:
      propTypesExports.PropTypes.element ||
      propTypesExports.PropTypes.string.isRequired,
    body:
      propTypesExports.PropTypes.element ||
      propTypesExports.PropTypes.arrayOf(
        propTypesExports.PropTypes.shape({
          title: propTypesExports.PropTypes.string.isRequired,
          value: propTypesExports.PropTypes.number.isRequired,
          unit: propTypesExports.PropTypes.string.isRequired,
        })
      ),
    footer:
      propTypesExports.PropTypes.element ||
      propTypesExports.PropTypes.shape({
        title: propTypesExports.PropTypes.string.isRequired,
        value: propTypesExports.PropTypes.number.isRequired,
        unit: propTypesExports.PropTypes.string.isRequired,
      }),
  }),
};
Summary.defaultProps = {
  containerStyle: {
    p: 4,
    bg: "#eeeeee",
  },
  headerStyle: {},
  bodyStyle: {
    justifyContent: "space-between",
  },
  footerStyle: {
    justifyContent: "space-between",
  },
  data: {
    header: "Montant a payer",
    body: [
      {
        title: "Frais d’accès au service ",
        value: "0",
        unit: "FCFA",
      },
      {
        title: "1 numéro illimité",
        value: "5000",
        unit: "FCFA",
      },
      {
        title: "2 wifi extenders",
        value: "10 000",
        unit: "FCFA",
      },
    ],
    footer: {
      title: "Total",
      value: "27900",
      unit: "FCFA",
    },
  },
};

var VerticalStepper = function VerticalStepper(_ref) {
  var activeStepControl = _ref.activeStepControl,
    parentStepStyle = _ref.parentStepStyle,
    childStepStyle = _ref.childStepStyle,
    steps = _ref.steps;
  return /*#__PURE__*/ React$1.createElement(
    react.Stepper,
    {
      index: activeStepControl.parent,
      size: "lg",
      orientation: "vertical",
      colorScheme:
        parentStepStyle && parentStepStyle.colorScheme
          ? parentStepStyle.colorScheme
          : "",
      gap: "0",
      zIndex: "0",
    },
    steps.map(function (step, index) {
      return !step.sub
        ? /*#__PURE__*/ React$1.createElement(
            react.Step,
            {
              key: "parentStep-".concat(index),
            },
            /*#__PURE__*/ React$1.createElement(
              react.StepIndicator,
              null,
              /*#__PURE__*/ React$1.createElement(react.StepStatus, {
                complete: step.style.onComplete
                  ? /*#__PURE__*/ React$1.createElement(react.Image, {
                      src: step.style.onComplete,
                      alt: "",
                      rounded:
                        parentStepStyle && parentStepStyle.rounded
                          ? parentStepStyle.rounded
                          : "full",
                    })
                  : /*#__PURE__*/ React$1.createElement(React$1.Fragment, null),
                active: step.style.onActive
                  ? /*#__PURE__*/ React$1.createElement(react.Image, {
                      src: step.style.onActive,
                      alt: "",
                      rounded:
                        parentStepStyle && parentStepStyle.rounded
                          ? parentStepStyle.rounded
                          : "full",
                    })
                  : /*#__PURE__*/ React$1.createElement(React$1.Fragment, null),
                incomplete: step.style.onInComplete
                  ? /*#__PURE__*/ React$1.createElement(react.Image, {
                      src: step.style.onInComplete,
                      alt: "",
                      rounded:
                        parentStepStyle && parentStepStyle.rounded
                          ? parentStepStyle.rounded
                          : "full",
                    })
                  : /*#__PURE__*/ React$1.createElement(React$1.Fragment, null),
              })
            ),
            step.title &&
              /*#__PURE__*/ React$1.createElement(
                react.Box,
                {
                  flexShrink: "0",
                  height:
                    parentStepStyle && parentStepStyle.spacing
                      ? parentStepStyle.spacing
                      : "90px",
                },
                /*#__PURE__*/ React$1.createElement(
                  react.StepTitle,
                  {
                    color:
                      index > activeStepControl.parent ? "#cccccc" : "#000000",
                  },
                  step.title
                )
              ),
            /*#__PURE__*/ React$1.createElement(react.StepSeparator, {
              style:
                index <= activeStepControl.parent
                  ? {
                      background:
                        parentStepStyle && parentStepStyle.separatorColor
                          ? parentStepStyle.separatorColor
                          : "black",
                    }
                  : {},
            })
          )
        : /*#__PURE__*/ React$1.createElement(
            React$1.Fragment,
            null,
            /*#__PURE__*/ React$1.createElement(
              react.Step,
              {
                key: "parentStep-".concat(index),
              },
              /*#__PURE__*/ React$1.createElement(
                react.StepIndicator,
                null,
                /*#__PURE__*/ React$1.createElement(react.StepStatus, {
                  complete: step.style.onComplete
                    ? /*#__PURE__*/ React$1.createElement(react.Image, {
                        src: step.style.onComplete,
                        alt: "",
                        rounded:
                          parentStepStyle && parentStepStyle.rounded
                            ? parentStepStyle.rounded
                            : "full",
                      })
                    : /*#__PURE__*/ React$1.createElement(
                        React$1.Fragment,
                        null
                      ),
                  active: step.style.onActive
                    ? /*#__PURE__*/ React$1.createElement(react.Image, {
                        src: step.style.onActive,
                        alt: "",
                        rounded:
                          parentStepStyle && parentStepStyle.rounded
                            ? parentStepStyle.rounded
                            : "full",
                      })
                    : /*#__PURE__*/ React$1.createElement(
                        React$1.Fragment,
                        null
                      ),
                  incomplete: step.style.onInComplete
                    ? /*#__PURE__*/ React$1.createElement(react.Image, {
                        src: step.style.onInComplete,
                        alt: "",
                        rounded:
                          parentStepStyle && parentStepStyle.rounded
                            ? parentStepStyle.rounded
                            : "full",
                      })
                    : /*#__PURE__*/ React$1.createElement(
                        React$1.Fragment,
                        null
                      ),
                })
              ),
              step.title &&
                /*#__PURE__*/ React$1.createElement(
                  react.Box,
                  {
                    flexShrink: "0",
                    height:
                      parentStepStyle && parentStepStyle.spacing
                        ? parentStepStyle.spacing
                        : "90px",
                  },
                  /*#__PURE__*/ React$1.createElement(
                    react.StepTitle,
                    {
                      color:
                        index > activeStepControl.parent
                          ? "#cccccc"
                          : "#000000",
                    },
                    step.title
                  )
                ),
              /*#__PURE__*/ React$1.createElement(react.StepSeparator, {
                style:
                  index <= activeStepControl.parent
                    ? {
                        background:
                          parentStepStyle && parentStepStyle.separatorColor
                            ? parentStepStyle.separatorColor
                            : "black",
                      }
                    : {},
              })
            ),
            /*#__PURE__*/ React$1.createElement(
              react.Step,
              {
                key: index,
                display: !step.isOpen ? "none" : "flex",
              },
              /*#__PURE__*/ React$1.createElement(
                react.Stepper,
                {
                  index: activeStepControl.child,
                  size: "sm",
                  orientation: "vertical",
                  colorScheme: childStepStyle.colorScheme
                    ? childStepStyle.colorScheme
                    : "",
                  gap: "0",
                  ml: "8px",
                  zIndex: "1",
                },
                step.sub.data.map(function (stepChild, indexChild) {
                  return /*#__PURE__*/ React$1.createElement(
                    react.Step,
                    {
                      key: "childStep-".concat(indexChild),
                    },
                    /*#__PURE__*/ React$1.createElement(
                      react.StepIndicator,
                      null,
                      /*#__PURE__*/ React$1.createElement(react.StepStatus, {
                        complete: childStepStyle.onComplete
                          ? /*#__PURE__*/ React$1.createElement(react.Image, {
                              src: childStepStyle.onComplete,
                              alt: "",
                              rounded: childStepStyle.rounded
                                ? childStepStyle.rounded
                                : "full",
                            })
                          : /*#__PURE__*/ React$1.createElement(
                              React$1.Fragment,
                              null
                            ),
                        active: childStepStyle.onActive
                          ? /*#__PURE__*/ React$1.createElement(react.Image, {
                              src: childStepStyle.onActive,
                              alt: "",
                              rounded: childStepStyle.rounded
                                ? childStepStyle.rounded
                                : "full",
                            })
                          : /*#__PURE__*/ React$1.createElement(
                              React$1.Fragment,
                              null
                            ),
                        incomplete: childStepStyle.onInComplete
                          ? /*#__PURE__*/ React$1.createElement(react.Image, {
                              src: childStepStyle.onInComplete,
                              alt: "",
                              rounded: childStepStyle.rounded
                                ? childStepStyle.rounded
                                : "full",
                            })
                          : /*#__PURE__*/ React$1.createElement(react.Box, {
                              w: "20px",
                              h: "20px",
                              rounded: childStepStyle.rounded
                                ? childStepStyle.rounded
                                : "full",
                              bg: "#fff",
                            }),
                      })
                    ),
                    stepChild.title &&
                      /*#__PURE__*/ React$1.createElement(
                        react.Box,
                        {
                          flexShrink: "0",
                          height: childStepStyle.spacing
                            ? childStepStyle.spacing
                            : "70px",
                        },
                        /*#__PURE__*/ React$1.createElement(
                          react.StepTitle,
                          {
                            color:
                              indexChild > activeStepControl.child
                                ? "#cccccc"
                                : "#000000",
                          },
                          stepChild.title
                        )
                      ),
                    /*#__PURE__*/ React$1.createElement(react.StepSeparator, {
                      style: {
                        background: childStepStyle.separatorColor
                          ? childStepStyle.separatorColor
                          : "black",
                      },
                    })
                  );
                })
              ),
              /*#__PURE__*/ React$1.createElement(react.StepSeparator, {
                style: {
                  background: childStepStyle.separatorColor
                    ? childStepStyle.separatorColor
                    : "black",
                },
              })
            )
          );
    })
  );
};
VerticalStepper.propTypes = {
  activeStepControl: propTypesExports.shape({
    parent: propTypesExports.number.isRequired,
    child: propTypesExports.number,
  }),
  steps: propTypesExports.arrayOf(
    propTypesExports.shape({
      title: propTypesExports.string.isRequired,
      style: propTypesExports.shape({
        onComplete: propTypesExports.string.isRequired,
        onActive: propTypesExports.string.isRequired,
        onInComplete: propTypesExports.string,
      }),
      isOpen: propTypesExports.bool,
      sub: propTypesExports.arrayOf(
        propTypesExports.shape({
          data: propTypesExports.arrayOf(
            propTypesExports.shape({
              title: propTypesExports.string,
            })
          ),
        })
      ),
    })
  ),
  parentStepStyle: propTypesExports.shape({
    rounded: propTypesExports.string,
    separatorColor: propTypesExports.string,
    colorScheme: propTypesExports.string,
    spacing: propTypesExports.string,
  }),
  childStepStyle: propTypesExports.shape({
    rounded: propTypesExports.string,
    colorScheme: propTypesExports.string,
    spacing: propTypesExports.string,
    separatorColor: propTypesExports.string,
    onActive: propTypesExports.string.isRequired,
    onComplete: propTypesExports.string.isRequired,
    onInComplete: propTypesExports.string,
  }),
};
VerticalStepper.defaultProps = {
  activeStepControl: {
    parent: 0,
    child: 0,
  },
  steps: [
    {
      title: "Test d'eligibilite",
      style: {
        onComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/8E80C5BF-161C-404A-BAE0-C879975D78EF-optimized.png",
        onActive:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/8E80C5BF-161C-404A-BAE0-C879975D78EF-optimized.png",
      },
      isOpen: true,
      sub: {
        data: [
          {
            title: "Information personnelle",
          },
          {
            title: "Localisation",
          },
        ],
      },
    },
    {
      title: "Inscription",
      style: {
        onComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/42E58232-6B10-4B72-8487-B26DCAFB6CDE.png",
        onActive:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/42E58232-6B10-4B72-8487-B26DCAFB6CDE.png",
      },
      isOpen: false,
      sub: {
        data: [
          {
            title: "Type d'abonnement",
          },
          {
            title: "Information de l'abonnement",
          },
          {
            title: "Verification",
          },
          {
            title: "Confirmation",
          },
          {
            title: "Signature",
          },
        ],
      },
    },
    {
      title: "Paiement",
      style: {
        onComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/D1304866-F4C8-4881-9A7F-D89CF0F63974.png",
        onActive:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/D1304866-F4C8-4881-9A7F-D89CF0F63974.png",
      },
    },
    {
      title: "Notification",
      style: {
        onComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/579AFAC9-4FF9-4EEC-81C5-0CB28A247932-optimized.png",
        onActive:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/579AFAC9-4FF9-4EEC-81C5-0CB28A247932-optimized.png",
      },
    },
  ],
  childStepStyle: {
    onActive:
      "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/2704FC34-E4E2-4800-8610-59ED464962D9-optimized.png",
    onComplete:
      "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/2B5B02C1-231F-401C-8B1F-A2C287548DBA-optimized.png",
    //onInComplete:'https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/777F4553-0884-4894-A369-87613BFAFDD5.svg',
  },
};

var HorizontalStepper = function HorizontalStepper(_ref) {
  var activeStepControl = _ref.activeStepControl,
    stepStyle = _ref.stepStyle,
    separatorStyle = _ref.separatorStyle,
    steps = _ref.steps;
  return /*#__PURE__*/ React$1.createElement(
    react.Stack,
    null,
    /*#__PURE__*/ React$1.createElement(
      react.Stepper,
      {
        size: stepStyle.size ? stepStyle.size : "md",
        colorScheme:
          stepStyle && stepStyle.colorScheme ? stepStyle.colorScheme : "",
        index: activeStepControl,
        justifyContent: "start",
        //orientation="vertical"
      },
      steps.map(function (step, index) {
        return /*#__PURE__*/ React$1.createElement(
          react.Step,
          {
            key: index,
            flex: "none",
          },
          /*#__PURE__*/ React$1.createElement(
            react.HStack,
            {
              bg:
                index < activeStepControl
                  ? stepStyle.onComplete
                  : index == activeStepControl
                  ? stepStyle.onActive
                  : stepStyle.onInComplete,
              opacity: index <= activeStepControl ? 1 : 0.5,
              p: stepStyle.padding ? stepStyle.padding : "3",
              borderRadius: stepStyle.borderRadius
                ? stepStyle.borderRadius
                : "0.5rem",
              color:
                index < activeStepControl
                  ? stepStyle.color.before
                  : stepStyle.color.after,
            },
            /*#__PURE__*/ React$1.createElement(
              react.StepIndicator,
              null,
              /*#__PURE__*/ React$1.createElement(react.StepStatus, {
                complete: step.style.onComplete
                  ? /*#__PURE__*/ React$1.createElement(react.Image, {
                      src: step.style.onComplete,
                      alt: "",
                      rounded:
                        stepStyle && stepStyle.rounded
                          ? stepStyle.rounded
                          : "full",
                    })
                  : /*#__PURE__*/ React$1.createElement(React$1.Fragment, null),
                active: step.style.onActive
                  ? /*#__PURE__*/ React$1.createElement(react.Image, {
                      src: step.style.onActive,
                      alt: "",
                      rounded:
                        stepStyle && stepStyle.rounded
                          ? stepStyle.rounded
                          : "full",
                    })
                  : /*#__PURE__*/ React$1.createElement(React$1.Fragment, null),
                incomplete: step.style.onInComplete
                  ? /*#__PURE__*/ React$1.createElement(react.Image, {
                      src: step.style.onInComplete,
                      alt: "",
                      rounded:
                        stepStyle && stepStyle.rounded
                          ? stepStyle.rounded
                          : "full",
                    })
                  : /*#__PURE__*/ React$1.createElement(React$1.Fragment, null),
              })
            ),
            step.title &&
              /*#__PURE__*/ React$1.createElement(
                react.Box,
                {
                  flexShrink: "0",
                },
                /*#__PURE__*/ React$1.createElement(
                  react.StepTitle,
                  null,
                  step.title
                )
              )
          ),
          /*#__PURE__*/ React$1.createElement(
            react.StepSeparator,
            {
              style:
                index < activeStepControl
                  ? {
                      background: separatorStyle.onComplete,
                      width: stepStyle.spacing ? stepStyle.spacing : "30px",
                    }
                  : {
                      background: separatorStyle.onInComplete,
                      width: stepStyle.spacing ? stepStyle.spacing : "30px",
                    },
            },
            /*#__PURE__*/ React$1.createElement(react.Box, {
              position: "absolute",
              top: stepStyle.padding ? stepStyle.padding : "3",
              right: "-0.5",
              bgColor:
                index < activeStepControl
                  ? separatorStyle.onComplete
                  : separatorStyle.onInComplete,
              h: "30px",
              w: "30px",
              style: {
                clipPath:
                  "polygon(47% 23%, 100% 52%, 47% 79%, 47% 69%, 90% 52%, 47% 33%)",
              },
            })
          )
        );
      })
    )
  );
};
HorizontalStepper.propTypes = {
  activeStepControl: propTypesExports.PropTypes.number.isRequired,
  stepStyle: propTypesExports.PropTypes.shape({
    size: propTypesExports.PropTypes.string.isRequired,
    padding: propTypesExports.PropTypes.string,
    rounded: propTypesExports.PropTypes.string,
    colorScheme: propTypesExports.PropTypes.string,
    spacing: propTypesExports.PropTypes.number,
    borderRadius: propTypesExports.PropTypes.string,
    color: propTypesExports.PropTypes.shape({
      before: propTypesExports.PropTypes.string,
      after: propTypesExports.PropTypes.string,
    }),
  }),
  separatorStyle: propTypesExports.PropTypes.shape({
    onComplete: propTypesExports.PropTypes.string.isRequired,
    onInComplete: propTypesExports.PropTypes.string.isRequired,
  }),
  steps: propTypesExports.PropTypes.arrayOf(
    propTypesExports.PropTypes.shape({
      title: propTypesExports.PropTypes.string,
      style: propTypesExports.PropTypes.shape({
        onComplete: propTypesExports.PropTypes.string.isRequired,
        onActive: propTypesExports.PropTypes.string.isRequired,
        onInComplete: propTypesExports.PropTypes.string,
      }),
    })
  ),
};
HorizontalStepper.defaultProps = {
  activeStepControl: 0,
  stepStyle: {
    size: "md",
    onComplete: "black",
    onActive: "#ff7900",
    onInComplete: "#dddddd",
    color: {
      before: "white",
      after: "black",
    },
  },
  separatorStyle: {
    onComplete: "black",
    onInComplete: "#dddddd",
  },
  steps: [
    {
      title: "Test d'eligibilite",
      style: {
        onComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/8E80C5BF-161C-404A-BAE0-C879975D78EF-optimized.png",
        onActive:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/8E80C5BF-161C-404A-BAE0-C879975D78EF-optimized.png",
        onInComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/8E80C5BF-161C-404A-BAE0-C879975D78EF-optimized.png",
      },
    },
    {
      title: "Inscription",
      style: {
        onComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/42E58232-6B10-4B72-8487-B26DCAFB6CDE.png",
        onActive:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/42E58232-6B10-4B72-8487-B26DCAFB6CDE.png",
        onInComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/42E58232-6B10-4B72-8487-B26DCAFB6CDE.png",
      },
    },
    {
      title: "Paiement",
      style: {
        onComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/D1304866-F4C8-4881-9A7F-D89CF0F63974.png",
        onActive:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/D1304866-F4C8-4881-9A7F-D89CF0F63974.png",
        onInComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/D1304866-F4C8-4881-9A7F-D89CF0F63974.png",
      },
    },
    {
      title: "Notification",
      style: {
        onComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/579AFAC9-4FF9-4EEC-81C5-0CB28A247932-optimized.png",
        onActive:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/579AFAC9-4FF9-4EEC-81C5-0CB28A247932-optimized.png",
        onInComplete:
          "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/579AFAC9-4FF9-4EEC-81C5-0CB28A247932-optimized.png",
      },
    },
  ],
};

var ModalCard = function ModalCard(_ref) {
  var title = _ref.title,
    children = _ref.children,
    footer = _ref.footer,
    props = _ref.props,
    overlay = _ref.overlay;
  var disclosure = react.useDisclosure();
  return /*#__PURE__*/ React$1.createElement(
    React$1.Fragment,
    null,
    !props &&
      /*#__PURE__*/ React$1.createElement(
        react.Button,
        {
          onClick: disclosure.onOpen,
        },
        "Open Modal"
      ),
    /*#__PURE__*/ React$1.createElement(
      react.Modal,
      props || disclosure,
      /*#__PURE__*/ React$1.createElement(react.ModalOverlay, overlay),
      /*#__PURE__*/ React$1.createElement(
        react.ModalContent,
        null,
        title &&
          /*#__PURE__*/ React$1.createElement(react.ModalHeader, null, title),
        /*#__PURE__*/ React$1.createElement(react.ModalCloseButton, null),
        /*#__PURE__*/ React$1.createElement(react.ModalBody, null, children),
        footer &&
          /*#__PURE__*/ React$1.createElement(react.ModalFooter, null, footer)
      )
    )
  );
};
ModalCard.propTypes = {
  props: propTypesExports.PropTypes.shape({
    isOpen: propTypesExports.PropTypes.bool,
    isClose: propTypesExports.PropTypes.bool,
    size: propTypesExports.PropTypes.oneOf([
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "full",
    ]),
  }),
};
ModalCard.defaultProps = {
  title: "Suivre une demande",
  overlay: {
    bg: "blackAlpha.300",
    backdropFilter: "blur(10px) hue-rotate(90deg)",
  },
};

var ProgressBar = function ProgressBar(_ref) {
  var label = _ref.label,
    progress = _ref.progress,
    desc = _ref.desc;
  return /*#__PURE__*/ React$1.createElement(
    React$1.Fragment,
    null,
    /*#__PURE__*/ React$1.createElement(
      react.Progress,
      progress,
      /*#__PURE__*/ React$1.createElement(
        react.ProgressLabel,
        label.style,
        label.value
      )
    ),
    desc &&
      /*#__PURE__*/ React$1.createElement(
        react.HStack,
        {
          mt: "0.5rem",
        },
        desc.img && /*#__PURE__*/ React$1.createElement(react.Image, desc.img),
        /*#__PURE__*/ React$1.createElement(react.Text, null, desc.message)
      )
  );
};
ProgressBar.propTypes = {
  label: propTypesExports.PropTypes.shape({
    value: propTypesExports.PropTypes.string,
    style: propTypesExports.PropTypes.shape({
      color: propTypesExports.PropTypes.string,
      fontSize: propTypesExports.PropTypes.string,
    }),
  }),
  progress: propTypesExports.PropTypes.shape({
    value: propTypesExports.PropTypes.string.isRequired,
    height: propTypesExports.PropTypes.string.isRequired,
  }),
  desc: propTypesExports.PropTypes.shape({
    img: propTypesExports.PropTypes.shape({
      src: propTypesExports.PropTypes.string.isRequired,
      alt: propTypesExports.PropTypes.string.isRequired,
    }),
    message: propTypesExports.PropTypes.string,
  }),
};
ProgressBar.defaultProps = {
  label: {
    value: "En cours",
    style: {
      color: "white",
      fontSize: "1rem",
    },
  },
  progress: {
    value: "60",
    isAnimated: true,
    height: "30px",
    colorScheme: "blue",
  },
  desc: {
    img: {
      src: "https://cdn.zeplin.io/5d506e4b754cd99aef936750/assets/0A5704E8-B1A2-41B7-8E33-EE06FC3E31F4-optimized.png",
      alt: "En cours",
      h: "5",
      w: "5",
    },
    message: "Intervention de l’équipe sur le terrain",
  },
};

var common = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  AccordionContent: AccordionContent,
  AccordionItemCard: AccordionItemCard,
  AccordionList: AccordionList,
  AvisButton: AvisButton,
  BackToHome: BackToHome,
  BubbleCard: BubbleCard,
  ClickableListItem: ClickableListItem,
  ErrorComponent: ErrorComponent,
  FormInput: FormInput,
  FormSearch: FormSearch,
  FormSubmit: FormSubmit,
  Heading: Heading$1,
  HorizontalStepper: HorizontalStepper,
  IconedButton: IconedButton,
  IconedListItem: IconedListItem,
  InfoCard: InfoCard,
  LoadingComponent: LoadingComponent,
  MenuLink: MenuLink,
  ModalCard: ModalCard,
  NotFound: NotFound,
  ProgressBar: ProgressBar,
  RadioCard: RadioCard,
  SiteHeading: SiteHeading,
  SkeletonLoading: SkeletonLoading,
  SocialButton: SocialButton,
  Summary: Summary,
  Teaserheading: Teaserheading,
  VerticalStepper: VerticalStepper,
  WarningComponent: WarningComponent,
});

var NavBreadcrumb = function NavBreadcrumb(_ref) {
  var spacing = _ref.spacing,
    separator = _ref.separator,
    crumbs = _ref.crumbs,
    fontSize = _ref.fontSize,
    fontWeight = _ref.fontWeight,
    bgColor = _ref.bgColor,
    textColor = _ref.textColor,
    pl = _ref.pl;
  return /*#__PURE__*/ React$1.createElement(
    react.Breadcrumb,
    {
      spacing: spacing,
      separator: separator,
      bgColor: bgColor,
      pl: pl,
    },
    crumbs.map(function (_ref2, i) {
      var title = _ref2.title,
        link = _ref2.link;
      return /*#__PURE__*/ React$1.createElement(
        react.BreadcrumbItem,
        {
          key: "crumb-".concat(title, "-").concat(i),
          height: "3.125rem",
        },
        /*#__PURE__*/ React$1.createElement(
          react.BreadcrumbLink,
          {
            fontSize: fontSize,
            fontWeight: fontWeight,
            textColor: textColor,
            href: link || "#",
          },
          title
        )
      );
    })
  );
};
NavBreadcrumb.defaultProps = {
  crumbs: [
    {
      title: "Start",
      link: "#",
    },
    {
      title: "Internet et fixe",
      link: "#",
    },
  ],
  bgColor: "black",
  textColor: "white",
  separator: /*#__PURE__*/ React$1.createElement(fi.FiChevronRight, {
    color: "white",
  }),
  spacing: "10px",
  pl: "1rem",
};

var IndicatorMenuList = function IndicatorMenuList(_ref3) {
  var payload = _ref3.payload,
    active = _ref3.active;
  return /*#__PURE__*/ React$1.createElement(
    Stack,
    {
      alignItems: "flex-start",
      gap: "2rem",
      py: ".1rem",
    },
    payload.map(function (_ref4, i) {
      var title = _ref4.title,
        link = _ref4.cta.link;
      return /*#__PURE__*/ React$1.createElement(MenuLink, {
        withIndicator: true,
        active: active == i,
        title: title,
        link: link,
        key: "top-menu-".concat(i),
      });
    })
  );
};

var MobileDrawer = function MobileDrawer(_ref) {
  var active = _ref.active,
    isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    mainMenu = _ref.mainMenu,
    borderColor = _ref.borderColor;
  return /*#__PURE__*/ React$1.createElement(
    CustomDrawer,
    {
      closeOnEsc: true,
      isFullHeight: true,
      onClose: onClose,
      isOpen: isOpen,
      size: "full",
      placement: "right",
      heading: /*#__PURE__*/ React$1.createElement(react.Stack, {
        divider: /*#__PURE__*/ React$1.createElement(react.StackDivider, {
          borderColor: borderColor,
          borderStyle: "dashed",
        }),
      }),
    },
    /*#__PURE__*/ React$1.createElement(
      react.VStack,
      {
        alignItems: "flex-start",
        justifyContent: "space-between",
        pos: "relative",
        h: "100%",
      },
      /*#__PURE__*/ React$1.createElement(IndicatorMenuList, {
        payload: mainMenu,
        active: active,
      })
    )
  );
};
MobileDrawer.propTypes = {
  isOpen: propTypesExports.PropTypes.bool,
  onClose: propTypesExports.PropTypes.bool,
  active: propTypesExports.PropTypes.bool,
  mainMenu: propTypesExports.PropTypes.arrayOf(),
};
MobileDrawer.defaultProps = {
  mainMenu: [
    {
      title: "Orange Money",
      cta: {
        link: "/",
      },
    },
    {
      title: "Orange et Moi",
      cta: {
        link: "/",
      },
    },
  ],
  active: true,
  isOpen: false,
  onClose: true,
  borderColor: "orange",
};

var CustomDrawer = function CustomDrawer(_ref) {
  var size = _ref.size,
    placement = _ref.placement,
    closeOnEsc = _ref.closeOnEsc,
    isFullHeight = _ref.isFullHeight,
    onClose = _ref.onClose,
    isOpen = _ref.isOpen,
    heading = _ref.heading,
    children = _ref.children;
  return /*#__PURE__*/ React$1.createElement(
    react.Drawer,
    {
      onClose: onClose,
      isOpen: isOpen,
      size: size,
      placement: placement,
      closeOnEsc: closeOnEsc,
      isFullHeight: isFullHeight,
    },
    /*#__PURE__*/ React$1.createElement(react.DrawerOverlay, null),
    /*#__PURE__*/ React$1.createElement(
      react.DrawerContent,
      null,
      /*#__PURE__*/ React$1.createElement(react.DrawerCloseButton, null),
      /*#__PURE__*/ React$1.createElement(react.DrawerHeader, null, heading),
      /*#__PURE__*/ React$1.createElement(react.DrawerBody, null, children)
    )
  );
};

var FollowUs = function FollowUs(_ref) {
  var payload = _ref.payload,
    color = _ref.color;
  return /*#__PURE__*/ React$1.createElement(
    react.HStack,
    null,
    /*#__PURE__*/ React$1.createElement(
      react.Box,
      null,
      /*#__PURE__*/ React$1.createElement(
        react.Heading,
        {
          fontSize: "1.5rem",
          color: color,
        },
        "Retrouvez "
      )
    ),
    /*#__PURE__*/ React$1.createElement(
      react.HStack,
      {
        alignItems: "flex-start",
      },
      payload.map(function (_ref2) {
        var pl = _ref2.pl,
          icon = _ref2.icon,
          defaultStyling = _ref2.defaultStyling;
        return /*#__PURE__*/ React$1.createElement(SocialButton, {
          pl: pl,
          icon: icon,
          defaultStyling: defaultStyling,
        });
      })
    )
  );
};
FollowUs.defaultProps = {
  payload: [
    {
      pl: 0,
      icon: /*#__PURE__*/ React$1.createElement(
        fa__namespace.FaFacebookF,
        null
      ),
      defaultStyling: {
        size: "sm",
        variant: "unstyle",
        color: "black",
      },
    },
    {
      pl: 0,
      icon: /*#__PURE__*/ React$1.createElement(
        fa__namespace.FaInstagram,
        null
      ),
      defaultStyling: {
        size: "sm",
        variant: "unstyle",
        color: "black",
      },
    },
    {
      pl: 0,
      icon: /*#__PURE__*/ React$1.createElement(
        fa__namespace.FaGooglePlus,
        null
      ),
      defaultStyling: {
        size: "sm",
        variant: "unstyle",
        color: "black",
      },
    },
  ],
  color: "black",
};

var FooterColumn = function FooterColumn(_ref) {
  var menu = _ref.menu,
    submenu = _ref.submenu,
    colors = _ref.colors;
  return /*#__PURE__*/ React$1.createElement(
    react.Stack,
    {
      gap: {
        base: 2,
        lg: 4,
      },
    },
    /*#__PURE__*/ React$1.createElement(
      react.Box,
      null,
      /*#__PURE__*/ React$1.createElement(
        react.Heading,
        {
          fontSize: "1rem",
          color: colors.heading,
        },
        menu
      )
    ),
    /*#__PURE__*/ React$1.createElement(
      react.Box,
      null,
      submenu === null || submenu === void 0
        ? void 0
        : submenu.map(function (sub, i) {
            return /*#__PURE__*/ React$1.createElement(
              react.Text,
              {
                color: colors.text,
                key: i,
                lineHeight: "2rem",
              },
              /*#__PURE__*/ React$1.createElement(
                react.Link,
                {
                  href: sub === null || sub === void 0 ? void 0 : sub.link,
                  fontSize: "1rem",
                  color: colors.link,
                },
                sub === null || sub === void 0 ? void 0 : sub.message
              )
            );
          })
    )
  );
};
FooterColumn.defaultProps = {
  menu: "Boutique en ligne",
  submenu: [
    {
      message: "Accessoires",
      link: "/",
    },
    {
      message: "Mobiles",
      link: "/",
    },
    {
      message: "Internet et fixe",
      link: "/",
    },
    {
      message: "E-cartes",
      link: "/",
    },
  ],
  colors: {
    heading: "black",
    link: "black",
    text: "black",
  },
};

var Recap = function Recap(_ref) {
  var title = _ref.title,
    cta = _ref.cta,
    data = _ref.data,
    grid = _ref.grid,
    onClick = _ref.onClick,
    leftIcon = _ref.leftIcon,
    message = _ref.message;
  var defaultCta = {
    leftIcon:
      leftIcon ||
      /*#__PURE__*/ React$1.createElement(fi.FiEdit, {
        size: "1.5rem",
      }),
    message: message || "Modifier",
    onClick: onClick,
    style: {
      colorScheme: "blackAlpha",
      bgColor: "#fff",
      color: "black",
      variant: "outline",
      justifyContent: "center",
      borderWidth: "1px",
      borderRadius: 0,
      p: 4,
      fontSize: "1rem",
      h: "2rem",
    },
  };
  return /*#__PURE__*/ React$1.createElement(
    React$1.Fragment,
    null,
    /*#__PURE__*/ React$1.createElement(
      react.VStack,
      {
        align: "stretch",
      },
      /*#__PURE__*/ React$1.createElement(
        react.HStack,
        null,
        /*#__PURE__*/ React$1.createElement(react.Text, null, title),
        /*#__PURE__*/ React$1.createElement(IconedButton, defaultCta || cta)
      ),
      /*#__PURE__*/ React$1.createElement(
        react.SimpleGrid,
        grid,
        data.map(function (_ref2, i) {
          var title = _ref2.title,
            value = _ref2.value;
          return /*#__PURE__*/ React$1.createElement(
            react.HStack,
            {
              key: "item-".concat(i),
            },
            /*#__PURE__*/ React$1.createElement(react.Text, null, title, " :"),
            /*#__PURE__*/ React$1.createElement(react.Text, null, value)
          );
        })
      )
    )
  );
};
Recap.defaultProps = {
  title: "Adresse d’installation",
  cta: {},
  grid: {
    columns: "3",
    spacing: "5",
  },
  data: [
    {
      title: "Region",
      value: "Dakar",
    },
    {
      title: "Ville",
      value: "Dakar",
    },
    {
      title: "Commune",
      value: "Sicap Liberte",
    },
    {
      title: "Quartier",
      value: "Liberte 6",
    },
    {
      title: "Type de logement",
      value: "Villa",
    },
    {
      title: "Numéro",
      value: "6090",
    },
  ],
};

var func = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  CustomDrawer: CustomDrawer,
  FollowUs: FollowUs,
  FooterColumn: FooterColumn,
  MobileDrawer: MobileDrawer,
  NavBreadcrumb: NavBreadcrumb,
  Recap: Recap,
});

var index = _objectSpread2(_objectSpread2({}, common), func);

module.exports = index;
