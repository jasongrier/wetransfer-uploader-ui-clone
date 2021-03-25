(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(require("react"), require("react-dom"))
    : typeof define === "function" && define.amd
    ? define(["react", "react-dom"], factory)
    : ((global = typeof globalThis !== "undefined" ? globalThis : global || self),
      factory(global.React, global.ReactDOM));
})(this, function (React, reactDom) {
  "use strict";

  function _interopDefaultLegacy(e) {
    return e && typeof e === "object" && "default" in e ? e : { default: e };
  }

  var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

  function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }

  function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }

  function createCommonjsModule(fn) {
    var module = { exports: {} };
    return fn(module, module.exports), module.exports;
  }

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var b$2 = "function" === typeof Symbol && Symbol.for,
    c$1 = b$2 ? Symbol.for("react.element") : 60103,
    d$1 = b$2 ? Symbol.for("react.portal") : 60106,
    e = b$2 ? Symbol.for("react.fragment") : 60107,
    f$1 = b$2 ? Symbol.for("react.strict_mode") : 60108,
    g$2 = b$2 ? Symbol.for("react.profiler") : 60114,
    h$1 = b$2 ? Symbol.for("react.provider") : 60109,
    k$2 = b$2 ? Symbol.for("react.context") : 60110,
    l$1 = b$2 ? Symbol.for("react.async_mode") : 60111,
    m = b$2 ? Symbol.for("react.concurrent_mode") : 60111,
    n$1 = b$2 ? Symbol.for("react.forward_ref") : 60112,
    p$1 = b$2 ? Symbol.for("react.suspense") : 60113,
    q$2 = b$2 ? Symbol.for("react.suspense_list") : 60120,
    r$1 = b$2 ? Symbol.for("react.memo") : 60115,
    t$1 = b$2 ? Symbol.for("react.lazy") : 60116,
    v$2 = b$2 ? Symbol.for("react.block") : 60121,
    w$2 = b$2 ? Symbol.for("react.fundamental") : 60117,
    x$2 = b$2 ? Symbol.for("react.responder") : 60118,
    y$2 = b$2 ? Symbol.for("react.scope") : 60119;
  function z$2(a) {
    if ("object" === typeof a && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c$1:
          switch (((a = a.type), a)) {
            case l$1:
            case m:
            case e:
            case g$2:
            case f$1:
            case p$1:
              return a;
            default:
              switch (((a = a && a.$$typeof), a)) {
                case k$2:
                case n$1:
                case t$1:
                case r$1:
                case h$1:
                  return a;
                default:
                  return u;
              }
          }
        case d$1:
          return u;
      }
    }
  }
  function A$2(a) {
    return z$2(a) === m;
  }
  var AsyncMode = l$1;
  var ConcurrentMode = m;
  var ContextConsumer = k$2;
  var ContextProvider = h$1;
  var Element = c$1;
  var ForwardRef = n$1;
  var Fragment = e;
  var Lazy = t$1;
  var Memo = r$1;
  var Portal = d$1;
  var Profiler = g$2;
  var StrictMode = f$1;
  var Suspense = p$1;
  var isAsyncMode = function (a) {
    return A$2(a) || z$2(a) === l$1;
  };
  var isConcurrentMode = A$2;
  var isContextConsumer = function (a) {
    return z$2(a) === k$2;
  };
  var isContextProvider = function (a) {
    return z$2(a) === h$1;
  };
  var isElement = function (a) {
    return "object" === typeof a && null !== a && a.$$typeof === c$1;
  };
  var isForwardRef = function (a) {
    return z$2(a) === n$1;
  };
  var isFragment = function (a) {
    return z$2(a) === e;
  };
  var isLazy = function (a) {
    return z$2(a) === t$1;
  };
  var isMemo = function (a) {
    return z$2(a) === r$1;
  };
  var isPortal = function (a) {
    return z$2(a) === d$1;
  };
  var isProfiler = function (a) {
    return z$2(a) === g$2;
  };
  var isStrictMode = function (a) {
    return z$2(a) === f$1;
  };
  var isSuspense = function (a) {
    return z$2(a) === p$1;
  };
  var isValidElementType = function (a) {
    return (
      "string" === typeof a ||
      "function" === typeof a ||
      a === e ||
      a === m ||
      a === g$2 ||
      a === f$1 ||
      a === p$1 ||
      a === q$2 ||
      ("object" === typeof a &&
        null !== a &&
        (a.$$typeof === t$1 ||
          a.$$typeof === r$1 ||
          a.$$typeof === h$1 ||
          a.$$typeof === k$2 ||
          a.$$typeof === n$1 ||
          a.$$typeof === w$2 ||
          a.$$typeof === x$2 ||
          a.$$typeof === y$2 ||
          a.$$typeof === v$2))
    );
  };
  var typeOf = z$2;

  var reactIs_production_min = {
    AsyncMode: AsyncMode,
    ConcurrentMode: ConcurrentMode,
    ContextConsumer: ContextConsumer,
    ContextProvider: ContextProvider,
    Element: Element,
    ForwardRef: ForwardRef,
    Fragment: Fragment,
    Lazy: Lazy,
    Memo: Memo,
    Portal: Portal,
    Profiler: Profiler,
    StrictMode: StrictMode,
    Suspense: Suspense,
    isAsyncMode: isAsyncMode,
    isConcurrentMode: isConcurrentMode,
    isContextConsumer: isContextConsumer,
    isContextProvider: isContextProvider,
    isElement: isElement,
    isForwardRef: isForwardRef,
    isFragment: isFragment,
    isLazy: isLazy,
    isMemo: isMemo,
    isPortal: isPortal,
    isProfiler: isProfiler,
    isStrictMode: isStrictMode,
    isSuspense: isSuspense,
    isValidElementType: isValidElementType,
    typeOf: typeOf,
  };

  var reactIs = createCommonjsModule(function (module) {
    {
      module.exports = reactIs_production_min;
    }
  });

  function stylis_min(W) {
    function M(d, c, e, h, a) {
      for (
        var m = 0,
          b = 0,
          v = 0,
          n = 0,
          q,
          g,
          x = 0,
          K = 0,
          k,
          u = (k = q = 0),
          l = 0,
          r = 0,
          I = 0,
          t = 0,
          B = e.length,
          J = B - 1,
          y,
          f = "",
          p = "",
          F = "",
          G = "",
          C;
        l < B;

      ) {
        g = e.charCodeAt(l);
        l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), (n = v = m = 0), B++, J++);

        if (0 === b + n + v + m) {
          if (l === J && (0 < r && (f = f.replace(N, "")), 0 < f.trim().length)) {
            switch (g) {
              case 32:
              case 9:
              case 59:
              case 13:
              case 10:
                break;

              default:
                f += e.charAt(l);
            }

            g = 59;
          }

          switch (g) {
            case 123:
              f = f.trim();
              q = f.charCodeAt(0);
              k = 1;

              for (t = ++l; l < B; ) {
                switch ((g = e.charCodeAt(l))) {
                  case 123:
                    k++;
                    break;

                  case 125:
                    k--;
                    break;

                  case 47:
                    switch ((g = e.charCodeAt(l + 1))) {
                      case 42:
                      case 47:
                        a: {
                          for (u = l + 1; u < J; ++u) {
                            switch (e.charCodeAt(u)) {
                              case 47:
                                if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                  l = u + 1;
                                  break a;
                                }

                                break;

                              case 10:
                                if (47 === g) {
                                  l = u + 1;
                                  break a;
                                }
                            }
                          }

                          l = u;
                        }
                    }

                    break;

                  case 91:
                    g++;

                  case 40:
                    g++;

                  case 34:
                  case 39:
                    for (; l++ < J && e.charCodeAt(l) !== g; ) {}
                }

                if (0 === k) break;
                l++;
              }

              k = e.substring(t, l);
              0 === q && (q = (f = f.replace(ca, "").trim()).charCodeAt(0));

              switch (q) {
                case 64:
                  0 < r && (f = f.replace(N, ""));
                  g = f.charCodeAt(1);

                  switch (g) {
                    case 100:
                    case 109:
                    case 115:
                    case 45:
                      r = c;
                      break;

                    default:
                      r = O;
                  }

                  k = M(c, r, k, g, a + 1);
                  t = k.length;
                  0 < A &&
                    ((r = X(O, f, I)),
                    (C = H(3, k, r, c, D, z, t, g, a, h)),
                    (f = r.join("")),
                    void 0 !== C && 0 === (t = (k = C.trim()).length) && ((g = 0), (k = "")));
                  if (0 < t)
                    switch (g) {
                      case 115:
                        f = f.replace(da, ea);

                      case 100:
                      case 109:
                      case 45:
                        k = f + "{" + k + "}";
                        break;

                      case 107:
                        f = f.replace(fa, "$1 $2");
                        k = f + "{" + k + "}";
                        k = 1 === w || (2 === w && L("@" + k, 3)) ? "@-webkit-" + k + "@" + k : "@" + k;
                        break;

                      default:
                        (k = f + k), 112 === h && (k = ((p += k), ""));
                    }
                  else k = "";
                  break;

                default:
                  k = M(c, X(c, f, I), k, h, a + 1);
              }

              F += k;
              k = I = r = u = q = 0;
              f = "";
              g = e.charCodeAt(++l);
              break;

            case 125:
            case 59:
              f = (0 < r ? f.replace(N, "") : f).trim();
              if (1 < (t = f.length))
                switch (
                  (0 === u &&
                    ((q = f.charCodeAt(0)), 45 === q || (96 < q && 123 > q)) &&
                    (t = (f = f.replace(" ", ":")).length),
                  0 < A &&
                    void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) &&
                    0 === (t = (f = C.trim()).length) &&
                    (f = "\x00\x00"),
                  (q = f.charCodeAt(0)),
                  (g = f.charCodeAt(1)),
                  q)
                ) {
                  case 0:
                    break;

                  case 64:
                    if (105 === g || 99 === g) {
                      G += f + e.charAt(l);
                      break;
                    }

                  default:
                    58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
                }
              I = r = u = q = 0;
              f = "";
              g = e.charCodeAt(++l);
          }
        }

        switch (g) {
          case 13:
          case 10:
            47 === b ? (b = 0) : 0 === 1 + q && 107 !== h && 0 < f.length && ((r = 1), (f += "\x00"));
            0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
            z = 1;
            D++;
            break;

          case 59:
          case 125:
            if (0 === b + n + v + m) {
              z++;
              break;
            }

          default:
            z++;
            y = e.charAt(l);

            switch (g) {
              case 9:
              case 32:
                if (0 === n + m + b)
                  switch (x) {
                    case 44:
                    case 58:
                    case 9:
                    case 32:
                      y = "";
                      break;

                    default:
                      32 !== g && (y = " ");
                  }
                break;

              case 0:
                y = "\\0";
                break;

              case 12:
                y = "\\f";
                break;

              case 11:
                y = "\\v";
                break;

              case 38:
                0 === n + b + m && ((r = I = 1), (y = "\f" + y));
                break;

              case 108:
                if (0 === n + b + m + E && 0 < u)
                  switch (l - u) {
                    case 2:
                      112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                    case 8:
                      111 === K && (E = K);
                  }
                break;

              case 58:
                0 === n + b + m && (u = l);
                break;

              case 44:
                0 === b + v + n + m && ((r = 1), (y += "\r"));
                break;

              case 34:
              case 39:
                0 === b && (n = n === g ? 0 : 0 === n ? g : n);
                break;

              case 91:
                0 === n + b + v && m++;
                break;

              case 93:
                0 === n + b + v && m--;
                break;

              case 41:
                0 === n + b + m && v--;
                break;

              case 40:
                if (0 === n + b + m) {
                  if (0 === q)
                    switch (2 * x + 3 * K) {
                      case 533:
                        break;

                      default:
                        q = 1;
                    }
                  v++;
                }

                break;

              case 64:
                0 === b + v + n + m + u + k && (k = 1);
                break;

              case 42:
              case 47:
                if (!(0 < n + m + v))
                  switch (b) {
                    case 0:
                      switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                        case 235:
                          b = 47;
                          break;

                        case 220:
                          (t = l), (b = 42);
                      }

                      break;

                    case 42:
                      47 === g &&
                        42 === x &&
                        t + 2 !== l &&
                        (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), (y = ""), (b = 0));
                  }
            }

            0 === b && (f += y);
        }

        K = x;
        x = g;
        l++;
      }

      t = p.length;

      if (0 < t) {
        r = c;
        if (0 < A && ((C = H(2, p, r, d, D, z, t, h, a, h)), void 0 !== C && 0 === (p = C).length)) return G + p + F;
        p = r.join(",") + "{" + p + "}";

        if (0 !== w * E) {
          2 !== w || L(p, 2) || (E = 0);

          switch (E) {
            case 111:
              p = p.replace(ha, ":-moz-$1") + p;
              break;

            case 112:
              p = p.replace(Q, "::-webkit-input-$1") + p.replace(Q, "::-moz-$1") + p.replace(Q, ":-ms-input-$1") + p;
          }

          E = 0;
        }
      }

      return G + p + F;
    }

    function X(d, c, e) {
      var h = c.trim().split(ia);
      c = h;
      var a = h.length,
        m = d.length;

      switch (m) {
        case 0:
        case 1:
          var b = 0;

          for (d = 0 === m ? "" : d[0] + " "; b < a; ++b) {
            c[b] = Z(d, c[b], e).trim();
          }

          break;

        default:
          var v = (b = 0);

          for (c = []; b < a; ++b) {
            for (var n = 0; n < m; ++n) {
              c[v++] = Z(d[n] + " ", h[b], e).trim();
            }
          }
      }

      return c;
    }

    function Z(d, c, e) {
      var h = c.charCodeAt(0);
      33 > h && (h = (c = c.trim()).charCodeAt(0));

      switch (h) {
        case 38:
          return c.replace(F, "$1" + d.trim());

        case 58:
          return d.trim() + c.replace(F, "$1" + d.trim());

        default:
          if (0 < 1 * e && 0 < c.indexOf("\f")) return c.replace(F, (58 === d.charCodeAt(0) ? "" : "$1") + d.trim());
      }

      return d + c;
    }

    function P(d, c, e, h) {
      var a = d + ";",
        m = 2 * c + 3 * e + 4 * h;

      if (944 === m) {
        d = a.indexOf(":", 9) + 1;
        var b = a.substring(d, a.length - 1).trim();
        b = a.substring(0, d).trim() + b + ";";
        return 1 === w || (2 === w && L(b, 1)) ? "-webkit-" + b + b : b;
      }

      if (0 === w || (2 === w && !L(a, 1))) return a;

      switch (m) {
        case 1015:
          return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;

        case 951:
          return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;

        case 963:
          return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;

        case 1009:
          if (100 !== a.charCodeAt(4)) break;

        case 969:
        case 942:
          return "-webkit-" + a + a;

        case 978:
          return "-webkit-" + a + "-moz-" + a + a;

        case 1019:
        case 983:
          return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;

        case 883:
          if (45 === a.charCodeAt(8)) return "-webkit-" + a + a;
          if (0 < a.indexOf("image-set(", 11)) return a.replace(ja, "$1-webkit-$2") + a;
          break;

        case 932:
          if (45 === a.charCodeAt(4))
            switch (a.charCodeAt(5)) {
              case 103:
                return (
                  "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a
                );

              case 115:
                return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;

              case 98:
                return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a;
            }
          return "-webkit-" + a + "-ms-" + a + a;

        case 964:
          return "-webkit-" + a + "-ms-flex-" + a + a;

        case 1023:
          if (99 !== a.charCodeAt(8)) break;
          b = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
          return "-webkit-box-pack" + b + "-webkit-" + a + "-ms-flex-pack" + b + a;

        case 1005:
          return ka.test(a) ? a.replace(aa, ":-webkit-") + a.replace(aa, ":-moz-") + a : a;

        case 1e3:
          b = a.substring(13).trim();
          c = b.indexOf("-") + 1;

          switch (b.charCodeAt(0) + b.charCodeAt(c)) {
            case 226:
              b = a.replace(G, "tb");
              break;

            case 232:
              b = a.replace(G, "tb-rl");
              break;

            case 220:
              b = a.replace(G, "lr");
              break;

            default:
              return a;
          }

          return "-webkit-" + a + "-ms-" + b + a;

        case 1017:
          if (-1 === a.indexOf("sticky", 9)) break;

        case 975:
          c = (a = d).length - 10;
          b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(":", 7) + 1).trim();

          switch ((m = b.charCodeAt(0) + (b.charCodeAt(7) | 0))) {
            case 203:
              if (111 > b.charCodeAt(8)) break;

            case 115:
              a = a.replace(b, "-webkit-" + b) + ";" + a;
              break;

            case 207:
            case 102:
              a =
                a.replace(b, "-webkit-" + (102 < m ? "inline-" : "") + "box") +
                ";" +
                a.replace(b, "-webkit-" + b) +
                ";" +
                a.replace(b, "-ms-" + b + "box") +
                ";" +
                a;
          }

          return a + ";";

        case 938:
          if (45 === a.charCodeAt(5))
            switch (a.charCodeAt(6)) {
              case 105:
                return (b = a.replace("-items", "")), "-webkit-" + a + "-webkit-box-" + b + "-ms-flex-" + b + a;

              case 115:
                return "-webkit-" + a + "-ms-flex-item-" + a.replace(ba, "") + a;

              default:
                return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(ba, "") + a;
            }
          break;

        case 973:
        case 989:
          if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

        case 931:
        case 953:
          if (!0 === la.test(d))
            return 115 === (b = d.substring(d.indexOf(":") + 1)).charCodeAt(0)
              ? P(d.replace("stretch", "fill-available"), c, e, h).replace(":fill-available", ":stretch")
              : a.replace(b, "-webkit-" + b) + a.replace(b, "-moz-" + b.replace("fill-", "")) + a;
          break;

        case 962:
          if (
            ((a = "-webkit-" + a + (102 === a.charCodeAt(5) ? "-ms-" + a : "") + a),
            211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf("transform", 10))
          )
            return a.substring(0, a.indexOf(";", 27) + 1).replace(ma, "$1-webkit-$2") + a;
      }

      return a;
    }

    function L(d, c) {
      var e = d.indexOf(1 === c ? ":" : "{"),
        h = d.substring(0, 3 !== c ? e : 10);
      e = d.substring(e + 1, d.length - 1);
      return R(2 !== c ? h : h.replace(na, "$1"), e, c);
    }

    function ea(d, c) {
      var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
      return e !== c + ";" ? e.replace(oa, " or ($1)").substring(4) : "(" + c + ")";
    }

    function H(d, c, e, h, a, m, b, v, n, q) {
      for (var g = 0, x = c, w; g < A; ++g) {
        switch ((w = S[g].call(B, d, x, e, h, a, m, b, v, n, q))) {
          case void 0:
          case !1:
          case !0:
          case null:
            break;

          default:
            x = w;
        }
      }

      if (x !== c) return x;
    }

    function T(d) {
      switch (d) {
        case void 0:
        case null:
          A = S.length = 0;
          break;

        default:
          if ("function" === typeof d) S[A++] = d;
          else if ("object" === typeof d)
            for (var c = 0, e = d.length; c < e; ++c) {
              T(d[c]);
            }
          else Y = !!d | 0;
      }

      return T;
    }

    function U(d) {
      d = d.prefix;
      void 0 !== d && ((R = null), d ? ("function" !== typeof d ? (w = 1) : ((w = 2), (R = d))) : (w = 0));
      return U;
    }

    function B(d, c) {
      var e = d;
      33 > e.charCodeAt(0) && (e = e.trim());
      V = e;
      e = [V];

      if (0 < A) {
        var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
        void 0 !== h && "string" === typeof h && (c = h);
      }

      var a = M(O, e, c, 0, 0);
      0 < A && ((h = H(-2, a, e, e, D, z, a.length, 0, 0, 0)), void 0 !== h && (a = h));
      V = "";
      E = 0;
      z = D = 1;
      return a;
    }

    var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = "";
    B.use = T;
    B.set = U;
    void 0 !== W && U(W);
    return B;
  }

  var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  };

  function memoize(fn) {
    var cache = {};
    return function (arg) {
      if (cache[arg] === undefined) cache[arg] = fn(arg);
      return cache[arg];
    };
  }

  var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

  var index = memoize(
    function (prop) {
      return (
        reactPropsRegex.test(prop) ||
        (prop.charCodeAt(0) === 111 &&
          /* o */
          prop.charCodeAt(1) === 110 &&
          /* n */
          prop.charCodeAt(2) < 91)
      );
    }
    /* Z+1 */
  );

  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
  var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true,
  };
  var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true,
  };
  var FORWARD_REF_STATICS = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
  };
  var MEMO_STATICS = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true,
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

  function getStatics(component) {
    // React v16.11 and below
    if (reactIs.isMemo(component)) {
      return MEMO_STATICS;
    } // React v16.12 and above

    return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
  }

  var defineProperty = Object.defineProperty;
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var getPrototypeOf = Object.getPrototypeOf;
  var objectPrototype = Object.prototype;
  function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== "string") {
      // don't hoist over string (html) components
      if (objectPrototype) {
        var inheritedComponent = getPrototypeOf(sourceComponent);

        if (inheritedComponent && inheritedComponent !== objectPrototype) {
          hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
        }
      }

      var keys = getOwnPropertyNames(sourceComponent);

      if (getOwnPropertySymbols) {
        keys = keys.concat(getOwnPropertySymbols(sourceComponent));
      }

      var targetStatics = getStatics(targetComponent);
      var sourceStatics = getStatics(sourceComponent);

      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];

        if (
          !KNOWN_STATICS[key] &&
          !(blacklist && blacklist[key]) &&
          !(sourceStatics && sourceStatics[key]) &&
          !(targetStatics && targetStatics[key])
        ) {
          var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

          try {
            // Avoid failures from read-only properties
            defineProperty(targetComponent, key, descriptor);
          } catch (e) {}
        }
      }
    }

    return targetComponent;
  }

  var hoistNonReactStatics_cjs = hoistNonReactStatics;

  function v$1() {
    return (v$1 =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }).apply(this, arguments);
  }
  var y$1 = function (e, t) {
      for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
      return n;
    },
    g$1 = function (t) {
      return (
        null !== t &&
        "object" == typeof t &&
        "[object Object]" === (t.toString ? t.toString() : Object.prototype.toString.call(t)) &&
        !reactIs.typeOf(t)
      );
    },
    S$1 = Object.freeze([]),
    w$1 = Object.freeze({});
  function E$1(e) {
    return "function" == typeof e;
  }
  function b$1(e) {
    return e.displayName || e.name || "Component";
  }
  function N(e) {
    return e && "string" == typeof e.styledComponentId;
  }
  var _$1 = ("undefined" != typeof process && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) || "data-styled",
    A$1 = "undefined" != typeof window && "HTMLElement" in window,
    I$1 = Boolean(
      "boolean" == typeof SC_DISABLE_SPEEDY
        ? SC_DISABLE_SPEEDY
        : "undefined" != typeof process &&
          void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY &&
          "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY
        ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY
        : "undefined" != typeof process &&
          void 0 !== process.env.SC_DISABLE_SPEEDY &&
          "" !== process.env.SC_DISABLE_SPEEDY
        ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY
        : "production" !== "production"
    ),
    P$1 = {};
  function D$1(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    throw new Error(
      "An error occurred. See https://git.io/JUIaE#" +
        e +
        " for more information." +
        (n.length > 0 ? " Args: " + n.join(", ") : "")
    );
  }
  var j$1 = (function () {
      function e(e) {
        (this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = e);
      }
      var t = e.prototype;
      return (
        (t.indexOfGroup = function (e) {
          for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
          return t;
        }),
        (t.insertRules = function (e, t) {
          if (e >= this.groupSizes.length) {
            for (var n = this.groupSizes, r = n.length, o = r; e >= o; ) (o <<= 1) < 0 && D$1(16, "" + e);
            (this.groupSizes = new Uint32Array(o)), this.groupSizes.set(n), (this.length = o);
            for (var s = r; s < o; s++) this.groupSizes[s] = 0;
          }
          for (var i = this.indexOfGroup(e + 1), a = 0, c = t.length; a < c; a++)
            this.tag.insertRule(i, t[a]) && (this.groupSizes[e]++, i++);
        }),
        (t.clearGroup = function (e) {
          if (e < this.length) {
            var t = this.groupSizes[e],
              n = this.indexOfGroup(e),
              r = n + t;
            this.groupSizes[e] = 0;
            for (var o = n; o < r; o++) this.tag.deleteRule(n);
          }
        }),
        (t.getGroup = function (e) {
          var t = "";
          if (e >= this.length || 0 === this.groupSizes[e]) return t;
          for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, s = r; s < o; s++)
            t += this.tag.getRule(s) + "/*!sc*/\n";
          return t;
        }),
        e
      );
    })(),
    T = new Map(),
    x$1 = new Map(),
    k$1 = 1,
    V = function (e) {
      if (T.has(e)) return T.get(e);
      for (; x$1.has(k$1); ) k$1++;
      var t = k$1++;
      return T.set(e, t), x$1.set(t, e), t;
    },
    M$1 = function (e) {
      return x$1.get(e);
    },
    B$1 = function (e, t) {
      T.set(e, t), x$1.set(t, e);
    },
    z$1 = "style[" + _$1 + '][data-styled-version="5.2.1"]',
    L$1 = new RegExp("^" + _$1 + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
    G$1 = function (e, t, n) {
      for (var r, o = n.split(","), s = 0, i = o.length; s < i; s++) (r = o[s]) && e.registerName(t, r);
    },
    F$1 = function (e, t) {
      for (var n = t.innerHTML.split("/*!sc*/\n"), r = [], o = 0, s = n.length; o < s; o++) {
        var i = n[o].trim();
        if (i) {
          var a = i.match(L$1);
          if (a) {
            var c = 0 | parseInt(a[1], 10),
              u = a[2];
            0 !== c && (B$1(u, c), G$1(e, u, a[3]), e.getTag().insertRules(c, r)), (r.length = 0);
          } else r.push(i);
        }
      }
    },
    Y = function () {
      return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
    },
    q$1 = function (e) {
      var t = document.head,
        n = e || t,
        r = document.createElement("style"),
        o = (function (e) {
          for (var t = e.childNodes, n = t.length; n >= 0; n--) {
            var r = t[n];
            if (r && 1 === r.nodeType && r.hasAttribute(_$1)) return r;
          }
        })(n),
        s = void 0 !== o ? o.nextSibling : null;
      r.setAttribute(_$1, "active"), r.setAttribute("data-styled-version", "5.2.1");
      var i = Y();
      return i && r.setAttribute("nonce", i), n.insertBefore(r, s), r;
    },
    H$1 = (function () {
      function e(e) {
        var t = (this.element = q$1(e));
        t.appendChild(document.createTextNode("")),
          (this.sheet = (function (e) {
            if (e.sheet) return e.sheet;
            for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
              var o = t[n];
              if (o.ownerNode === e) return o;
            }
            D$1(17);
          })(t)),
          (this.length = 0);
      }
      var t = e.prototype;
      return (
        (t.insertRule = function (e, t) {
          try {
            return this.sheet.insertRule(t, e), this.length++, !0;
          } catch (e) {
            return !1;
          }
        }),
        (t.deleteRule = function (e) {
          this.sheet.deleteRule(e), this.length--;
        }),
        (t.getRule = function (e) {
          var t = this.sheet.cssRules[e];
          return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
        }),
        e
      );
    })(),
    $ = (function () {
      function e(e) {
        var t = (this.element = q$1(e));
        (this.nodes = t.childNodes), (this.length = 0);
      }
      var t = e.prototype;
      return (
        (t.insertRule = function (e, t) {
          if (e <= this.length && e >= 0) {
            var n = document.createTextNode(t),
              r = this.nodes[e];
            return this.element.insertBefore(n, r || null), this.length++, !0;
          }
          return !1;
        }),
        (t.deleteRule = function (e) {
          this.element.removeChild(this.nodes[e]), this.length--;
        }),
        (t.getRule = function (e) {
          return e < this.length ? this.nodes[e].textContent : "";
        }),
        e
      );
    })(),
    W$1 = (function () {
      function e(e) {
        (this.rules = []), (this.length = 0);
      }
      var t = e.prototype;
      return (
        (t.insertRule = function (e, t) {
          return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
        }),
        (t.deleteRule = function (e) {
          this.rules.splice(e, 1), this.length--;
        }),
        (t.getRule = function (e) {
          return e < this.length ? this.rules[e] : "";
        }),
        e
      );
    })(),
    U$1 = A$1,
    J = { isServer: !A$1, useCSSOMInjection: !I$1 },
    Z$1 = (function () {
      function e(e, t, n) {
        void 0 === e && (e = w$1),
          void 0 === t && (t = {}),
          (this.options = v$1({}, J, {}, e)),
          (this.gs = t),
          (this.names = new Map(n)),
          !this.options.isServer &&
            A$1 &&
            U$1 &&
            ((U$1 = !1),
            (function (e) {
              for (var t = document.querySelectorAll(z$1), n = 0, r = t.length; n < r; n++) {
                var o = t[n];
                o && "active" !== o.getAttribute(_$1) && (F$1(e, o), o.parentNode && o.parentNode.removeChild(o));
              }
            })(this));
      }
      e.registerId = function (e) {
        return V(e);
      };
      var t = e.prototype;
      return (
        (t.reconstructWithOptions = function (t, n) {
          return void 0 === n && (n = !0), new e(v$1({}, this.options, {}, t), this.gs, (n && this.names) || void 0);
        }),
        (t.allocateGSInstance = function (e) {
          return (this.gs[e] = (this.gs[e] || 0) + 1);
        }),
        (t.getTag = function () {
          return (
            this.tag ||
            (this.tag =
              ((n = (t = this.options).isServer),
              (r = t.useCSSOMInjection),
              (o = t.target),
              (e = n ? new W$1(o) : r ? new H$1(o) : new $(o)),
              new j$1(e)))
          );
          var e, t, n, r, o;
        }),
        (t.hasNameForId = function (e, t) {
          return this.names.has(e) && this.names.get(e).has(t);
        }),
        (t.registerName = function (e, t) {
          if ((V(e), this.names.has(e))) this.names.get(e).add(t);
          else {
            var n = new Set();
            n.add(t), this.names.set(e, n);
          }
        }),
        (t.insertRules = function (e, t, n) {
          this.registerName(e, t), this.getTag().insertRules(V(e), n);
        }),
        (t.clearNames = function (e) {
          this.names.has(e) && this.names.get(e).clear();
        }),
        (t.clearRules = function (e) {
          this.getTag().clearGroup(V(e)), this.clearNames(e);
        }),
        (t.clearTag = function () {
          this.tag = void 0;
        }),
        (t.toString = function () {
          return (function (e) {
            for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
              var s = M$1(o);
              if (void 0 !== s) {
                var i = e.names.get(s),
                  a = t.getGroup(o);
                if (void 0 !== i && 0 !== a.length) {
                  var c = _$1 + ".g" + o + '[id="' + s + '"]',
                    u = "";
                  void 0 !== i &&
                    i.forEach(function (e) {
                      e.length > 0 && (u += e + ",");
                    }),
                    (r += "" + a + c + '{content:"' + u + '"}/*!sc*/\n');
                }
              }
            }
            return r;
          })(this);
        }),
        e
      );
    })(),
    X$1 = /(a)(d)/gi,
    K = function (e) {
      return String.fromCharCode(e + (e > 25 ? 39 : 97));
    };
  function Q$1(e) {
    var t,
      n = "";
    for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = K(t % 52) + n;
    return (K(t % 52) + n).replace(X$1, "$1-$2");
  }
  var ee = function (e, t) {
      for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
      return e;
    },
    te = function (e) {
      return ee(5381, e);
    };
  function ne(e) {
    for (var t = 0; t < e.length; t += 1) {
      var n = e[t];
      if (E$1(n) && !N(n)) return !1;
    }
    return !0;
  }
  var re = te("5.2.1"),
    oe = (function () {
      function e(e, t, n) {
        (this.rules = e),
          (this.staticRulesId = ""),
          (this.isStatic = (void 0 === n || n.isStatic) && ne(e)),
          (this.componentId = t),
          (this.baseHash = ee(re, t)),
          (this.baseStyle = n),
          Z$1.registerId(t);
      }
      return (
        (e.prototype.generateAndInjectStyles = function (e, t, n) {
          var r = this.componentId,
            o = [];
          if ((this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash))
            if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);
            else {
              var s = Ne(this.rules, e, t, n).join(""),
                i = Q$1(ee(this.baseHash, s.length) >>> 0);
              if (!t.hasNameForId(r, i)) {
                var a = n(s, "." + i, void 0, r);
                t.insertRules(r, i, a);
              }
              o.push(i), (this.staticRulesId = i);
            }
          else {
            for (var c = this.rules.length, u = ee(this.baseHash, n.hash), l = "", d = 0; d < c; d++) {
              var h = this.rules[d];
              if ("string" == typeof h) (l += h), "production" !== "production";
              else if (h) {
                var p = Ne(h, e, t, n),
                  f = Array.isArray(p) ? p.join("") : p;
                (u = ee(u, f + d)), (l += f);
              }
            }
            if (l) {
              var m = Q$1(u >>> 0);
              if (!t.hasNameForId(r, m)) {
                var v = n(l, "." + m, void 0, r);
                t.insertRules(r, m, v);
              }
              o.push(m);
            }
          }
          return o.join(" ");
        }),
        e
      );
    })(),
    se = /^\s*\/\/.*$/gm,
    ie = [":", "[", ".", "#"];
  function ae(e) {
    var t,
      n,
      r,
      o,
      s = void 0 === e ? w$1 : e,
      i = s.options,
      a = void 0 === i ? w$1 : i,
      c = s.plugins,
      u = void 0 === c ? S$1 : c,
      l = new stylis_min(a),
      d = [],
      p = (function (e) {
        function t(t) {
          if (t)
            try {
              e(t + "}");
            } catch (e) {}
        }
        return function (n, r, o, s, i, a, c, u, l, d) {
          switch (n) {
            case 1:
              if (0 === l && 64 === r.charCodeAt(0)) return e(r + ";"), "";
              break;
            case 2:
              if (0 === u) return r + "/*|*/";
              break;
            case 3:
              switch (u) {
                case 102:
                case 112:
                  return e(o[0] + r), "";
                default:
                  return r + (0 === d ? "/*|*/" : "");
              }
            case -2:
              r.split("/*|*/}").forEach(t);
          }
        };
      })(function (e) {
        d.push(e);
      }),
      f = function (e, r, s) {
        return (0 === r && ie.includes(s[n.length])) || s.match(o) ? e : "." + t;
      };
    function m(e, s, i, a) {
      void 0 === a && (a = "&");
      var c = e.replace(se, ""),
        u = s && i ? i + " " + s + " { " + c + " }" : c;
      return (
        (t = a),
        (n = s),
        (r = new RegExp("\\" + n + "\\b", "g")),
        (o = new RegExp("(\\" + n + "\\b){2,}")),
        l(i || !s ? "" : s, u)
      );
    }
    return (
      l.use(
        [].concat(u, [
          function (e, t, o) {
            2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, f));
          },
          p,
          function (e) {
            if (-2 === e) {
              var t = d;
              return (d = []), t;
            }
          },
        ])
      ),
      (m.hash = u.length
        ? u
            .reduce(function (e, t) {
              return t.name || D$1(15), ee(e, t.name);
            }, 5381)
            .toString()
        : ""),
      m
    );
  }
  var ce = React__default["default"].createContext();
  ce.Consumer;
  var le = React__default["default"].createContext(),
    de = (le.Consumer, new Z$1()),
    he = ae();
  function pe() {
    return React.useContext(ce) || de;
  }
  function fe() {
    return React.useContext(le) || he;
  }
  var ve = (function () {
      function e(e, t) {
        var n = this;
        (this.inject = function (e, t) {
          void 0 === t && (t = he);
          var r = n.name + t.hash;
          e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
        }),
          (this.toString = function () {
            return D$1(12, String(n.name));
          }),
          (this.name = e),
          (this.id = "sc-keyframes-" + e),
          (this.rules = t);
      }
      return (
        (e.prototype.getName = function (e) {
          return void 0 === e && (e = he), this.name + e.hash;
        }),
        e
      );
    })(),
    ye = /([A-Z])/,
    ge = /([A-Z])/g,
    Se = /^ms-/,
    we = function (e) {
      return "-" + e.toLowerCase();
    };
  function Ee(e) {
    return ye.test(e) ? e.replace(ge, we).replace(Se, "-ms-") : e;
  }
  var be = function (e) {
    return null == e || !1 === e || "" === e;
  };
  function Ne(e, n, r, o) {
    if (Array.isArray(e)) {
      for (var s, i = [], a = 0, c = e.length; a < c; a += 1)
        "" !== (s = Ne(e[a], n, r, o)) && (Array.isArray(s) ? i.push.apply(i, s) : i.push(s));
      return i;
    }
    if (be(e)) return "";
    if (N(e)) return "." + e.styledComponentId;
    if (E$1(e)) {
      if ("function" != typeof (l = e) || (l.prototype && l.prototype.isReactComponent) || !n) return e;
      var u = e(n);
      return Ne(u, n, r, o);
    }
    var l;
    return e instanceof ve
      ? r
        ? (e.inject(r, o), e.getName(o))
        : e
      : g$1(e)
      ? (function e(t, n) {
          var r,
            o,
            s = [];
          for (var i in t)
            t.hasOwnProperty(i) &&
              !be(t[i]) &&
              (g$1(t[i])
                ? s.push.apply(s, e(t[i], i))
                : E$1(t[i])
                ? s.push(Ee(i) + ":", t[i], ";")
                : s.push(
                    Ee(i) +
                      ": " +
                      ((r = i),
                      null == (o = t[i]) || "boolean" == typeof o || "" === o
                        ? ""
                        : "number" != typeof o || 0 === o || r in unitlessKeys
                        ? String(o).trim()
                        : o + "px") +
                      ";"
                  ));
          return n ? [n + " {"].concat(s, ["}"]) : s;
        })(e)
      : e.toString();
  }
  function _e(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return E$1(e) || g$1(e)
      ? Ne(y$1(S$1, [e].concat(n)))
      : 0 === n.length && 1 === e.length && "string" == typeof e[0]
      ? e
      : Ne(y$1(e, n));
  }
  var Pe = function (e, t, n) {
      return void 0 === n && (n = w$1), (e.theme !== n.theme && e.theme) || t || n.theme;
    },
    Oe = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    Re = /(^-|-$)/g;
  function De(e) {
    return e.replace(Oe, "-").replace(Re, "");
  }
  var je = function (e) {
    return Q$1(te(e) >>> 0);
  };
  function Te(e) {
    return "string" == typeof e && "production" === "production";
  }
  var xe = function (e) {
      return "function" == typeof e || ("object" == typeof e && null !== e && !Array.isArray(e));
    },
    ke = function (e) {
      return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
    };
  function Ve(e, t, n) {
    var r = e[n];
    xe(t) && xe(r) ? Me(r, t) : (e[n] = t);
  }
  function Me(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    for (var o = 0, s = n; o < s.length; o++) {
      var i = s[o];
      if (xe(i)) for (var a in i) ke(a) && Ve(e, i[a], a);
    }
    return e;
  }
  var Be = React__default["default"].createContext();
  Be.Consumer;
  var Ge = {};
  function Fe(e, t, n) {
    var o = N(e),
      i = !Te(e),
      a = t.attrs,
      c = void 0 === a ? S$1 : a,
      d = t.componentId,
      h =
        void 0 === d
          ? (function (e, t) {
              var n = "string" != typeof e ? "sc" : De(e);
              Ge[n] = (Ge[n] || 0) + 1;
              var r = n + "-" + je("5.2.1" + n + Ge[n]);
              return t ? t + "-" + r : r;
            })(t.displayName, t.parentComponentId)
          : d,
      p = t.displayName,
      y =
        void 0 === p
          ? (function (e) {
              return Te(e) ? "styled." + e : "Styled(" + b$1(e) + ")";
            })(e)
          : p,
      g = t.displayName && t.componentId ? De(t.displayName) + "-" + t.componentId : t.componentId || h,
      _ = o && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c,
      C = t.shouldForwardProp;
    o &&
      e.shouldForwardProp &&
      (C = t.shouldForwardProp
        ? function (n, r) {
            return e.shouldForwardProp(n, r) && t.shouldForwardProp(n, r);
          }
        : e.shouldForwardProp);
    var A,
      I = new oe(n, g, o ? e.componentStyle : void 0),
      P = I.isStatic && 0 === c.length,
      O = function (e, t) {
        return (function (e, t, n, r) {
          var o = e.attrs,
            i = e.componentStyle,
            a = e.defaultProps,
            c = e.foldedComponentIds,
            d = e.shouldForwardProp,
            h = e.styledComponentId,
            p = e.target;
          var m = (function (e, t, n) {
              void 0 === e && (e = w$1);
              var r = v$1({}, t, { theme: e }),
                o = {};
              return (
                n.forEach(function (e) {
                  var t,
                    n,
                    s,
                    i = e;
                  for (t in (E$1(i) && (i = i(r)), i))
                    r[t] = o[t] = "className" === t ? ((n = o[t]), (s = i[t]), n && s ? n + " " + s : n || s) : i[t];
                }),
                [r, o]
              );
            })(Pe(t, React.useContext(Be), a) || w$1, t, o),
            y = m[0],
            g = m[1],
            S = (function (e, t, n, r) {
              var o = pe(),
                s = fe(),
                i = t ? e.generateAndInjectStyles(w$1, o, s) : e.generateAndInjectStyles(n, o, s);
              return i;
            })(i, r, y),
            b = n,
            N = g.$as || t.$as || g.as || t.as || p,
            _ = Te(N),
            C = g !== t ? v$1({}, t, {}, g) : t,
            A = {};
          for (var I in C)
            "$" !== I[0] &&
              "as" !== I &&
              ("forwardedAs" === I ? (A.as = C[I]) : (d ? d(I, index) : !_ || index(I)) && (A[I] = C[I]));
          return (
            t.style && g.style !== t.style && (A.style = v$1({}, t.style, {}, g.style)),
            (A.className = Array.prototype
              .concat(c, h, S !== h ? S : null, t.className, g.className)
              .filter(Boolean)
              .join(" ")),
            (A.ref = b),
            React.createElement(N, A)
          );
        })(A, e, t, P);
      };
    return (
      (O.displayName = y),
      ((A = React__default["default"].forwardRef(O)).attrs = _),
      (A.componentStyle = I),
      (A.displayName = y),
      (A.shouldForwardProp = C),
      (A.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : S$1),
      (A.styledComponentId = g),
      (A.target = o ? e.target : e),
      (A.withComponent = function (e) {
        var r = t.componentId,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              s = Object.keys(e);
            for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(t, ["componentId"]),
          s = r && r + "-" + (Te(e) ? e : De(b$1(e)));
        return Fe(e, v$1({}, o, { attrs: _, componentId: s }), n);
      }),
      Object.defineProperty(A, "defaultProps", {
        get: function () {
          return this._foldedDefaultProps;
        },
        set: function (t) {
          this._foldedDefaultProps = o ? Me({}, e.defaultProps, t) : t;
        },
      }),
      (A.toString = function () {
        return "." + A.styledComponentId;
      }),
      i &&
        hoistNonReactStatics_cjs(A, e, {
          attrs: !0,
          componentStyle: !0,
          displayName: !0,
          foldedComponentIds: !0,
          shouldForwardProp: !0,
          styledComponentId: !0,
          target: !0,
          withComponent: !0,
        }),
      A
    );
  }
  var Ye = function (e) {
    return (function e(t, r, o) {
      if ((void 0 === o && (o = w$1), !reactIs.isValidElementType(r))) return D$1(1, String(r));
      var s = function () {
        return t(r, o, _e.apply(void 0, arguments));
      };
      return (
        (s.withConfig = function (n) {
          return e(t, r, v$1({}, o, {}, n));
        }),
        (s.attrs = function (n) {
          return e(t, r, v$1({}, o, { attrs: Array.prototype.concat(o.attrs, n).filter(Boolean) }));
        }),
        s
      );
    })(Fe, e);
  };
  [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ].forEach(function (e) {
    Ye[e] = Ye(e);
  });
  var qe = (function () {
    function e(e, t) {
      (this.rules = e), (this.componentId = t), (this.isStatic = ne(e)), Z$1.registerId(this.componentId + 1);
    }
    var t = e.prototype;
    return (
      (t.createStyles = function (e, t, n, r) {
        var o = r(Ne(this.rules, t, n, r).join(""), ""),
          s = this.componentId + e;
        n.insertRules(s, s, o);
      }),
      (t.removeStyles = function (e, t) {
        t.clearRules(this.componentId + e);
      }),
      (t.renderStyles = function (e, t, n, r) {
        e > 2 && Z$1.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r);
      }),
      e
    );
  })();
  function He(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
    var i = _e.apply(void 0, [e].concat(n)),
      a = "sc-global-" + je(JSON.stringify(i)),
      u = new qe(i, a);
    function l(e) {
      var t = pe(),
        n = fe(),
        o = React.useContext(Be),
        u = React.useRef(t.allocateGSInstance(a)).current;
      return d(u, e, t, o, n), null;
    }
    function d(e, t, n, r, o) {
      if (u.isStatic) u.renderStyles(e, P$1, n, o);
      else {
        var s = v$1({}, t, { theme: Pe(t, r, l.defaultProps) });
        u.renderStyles(e, s, n, o);
      }
    }
    return React__default["default"].memo(l);
  }

  var COLORS;

  (function (COLORS) {
    COLORS["BLACK"] = "#000";
    COLORS["WHITE"] = "#fff";
    COLORS["WTR_BLUE"] = "#409fff";
    COLORS["WTR_TRACK_GRAY"] = "#eee";
  })(COLORS || (COLORS = {}));

  var COLORS$1 = COLORS;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function () {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
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

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  createCommonjsModule(function (module) {
    {
      // By explicitly using `prop-types` you are opting into new production behavior.
      // http://fb.me/prop-types-in-prod
      module.exports = factoryWithThrowingShims();
    }
  });

  var ReactReduxContext = /*#__PURE__*/ React__default["default"].createContext(null);

  // Default to a dummy "batch" implementation that just runs the callback
  function defaultNoopBatch(callback) {
    callback();
  }

  var batch = defaultNoopBatch; // Allow injecting another batching function later

  var setBatch = function setBatch(newBatch) {
    return (batch = newBatch);
  }; // Supply a getter just to skip dealing with ESM bindings

  var getBatch = function getBatch() {
    return batch;
  };

  // well as nesting subscriptions of descendant components, so that we can ensure the
  // ancestor components re-render before descendants

  var nullListeners = {
    notify: function notify() {},
  };

  function createListenerCollection() {
    var batch = getBatch();
    var first = null;
    var last = null;
    return {
      clear: function clear() {
        first = null;
        last = null;
      },
      notify: function notify() {
        batch(function () {
          var listener = first;

          while (listener) {
            listener.callback();
            listener = listener.next;
          }
        });
      },
      get: function get() {
        var listeners = [];
        var listener = first;

        while (listener) {
          listeners.push(listener);
          listener = listener.next;
        }

        return listeners;
      },
      subscribe: function subscribe(callback) {
        var isSubscribed = true;
        var listener = (last = {
          callback: callback,
          next: null,
          prev: last,
        });

        if (listener.prev) {
          listener.prev.next = listener;
        } else {
          first = listener;
        }

        return function unsubscribe() {
          if (!isSubscribed || first === null) return;
          isSubscribed = false;

          if (listener.next) {
            listener.next.prev = listener.prev;
          } else {
            last = listener.prev;
          }

          if (listener.prev) {
            listener.prev.next = listener.next;
          } else {
            first = listener.next;
          }
        };
      },
    };
  }

  var Subscription = /*#__PURE__*/ (function () {
    function Subscription(store, parentSub) {
      this.store = store;
      this.parentSub = parentSub;
      this.unsubscribe = null;
      this.listeners = nullListeners;
      this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
    }

    var _proto = Subscription.prototype;

    _proto.addNestedSub = function addNestedSub(listener) {
      this.trySubscribe();
      return this.listeners.subscribe(listener);
    };

    _proto.notifyNestedSubs = function notifyNestedSubs() {
      this.listeners.notify();
    };

    _proto.handleChangeWrapper = function handleChangeWrapper() {
      if (this.onStateChange) {
        this.onStateChange();
      }
    };

    _proto.isSubscribed = function isSubscribed() {
      return Boolean(this.unsubscribe);
    };

    _proto.trySubscribe = function trySubscribe() {
      if (!this.unsubscribe) {
        this.unsubscribe = this.parentSub
          ? this.parentSub.addNestedSub(this.handleChangeWrapper)
          : this.store.subscribe(this.handleChangeWrapper);
        this.listeners = createListenerCollection();
      }
    };

    _proto.tryUnsubscribe = function tryUnsubscribe() {
      if (this.unsubscribe) {
        this.unsubscribe();
        this.unsubscribe = null;
        this.listeners.clear();
        this.listeners = nullListeners;
      }
    };

    return Subscription;
  })();

  // To get around it, we can conditionally useEffect on the server (no-op) and
  // useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
  // subscription callback always has the selector from the latest render commit
  // available, otherwise a store update may happen between render and the effect,
  // which may cause missed updates; we also must ensure the store subscription
  // is created synchronously, otherwise a store update may occur before the
  // subscription is created and an inconsistent state may be observed

  var useIsomorphicLayoutEffect =
    typeof window !== "undefined" &&
    typeof window.document !== "undefined" &&
    typeof window.document.createElement !== "undefined"
      ? React.useLayoutEffect
      : React.useEffect;

  function Provider(_ref) {
    var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
    var contextValue = React.useMemo(
      function () {
        var subscription = new Subscription(store);
        subscription.onStateChange = subscription.notifyNestedSubs;
        return {
          store: store,
          subscription: subscription,
        };
      },
      [store]
    );
    var previousState = React.useMemo(
      function () {
        return store.getState();
      },
      [store]
    );
    useIsomorphicLayoutEffect(
      function () {
        var subscription = contextValue.subscription;
        subscription.trySubscribe();

        if (previousState !== store.getState()) {
          subscription.notifyNestedSubs();
        }

        return function () {
          subscription.tryUnsubscribe();
          subscription.onStateChange = null;
        };
      },
      [contextValue, previousState]
    );
    var Context = context || ReactReduxContext;
    return /*#__PURE__*/ React__default["default"].createElement(
      Context.Provider,
      {
        value: contextValue,
      },
      children
    );
  }

  function _extends() {
    _extends =
      Object.assign ||
      function (target) {
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

  function symbolObservablePonyfill(root) {
    var result;
    var Symbol = root.Symbol;

    if (typeof Symbol === "function") {
      if (Symbol.observable) {
        result = Symbol.observable;
      } else {
        result = Symbol("observable");
        Symbol.observable = result;
      }
    } else {
      result = "@@observable";
    }

    return result;
  }

  /* global window */

  var root;

  if (typeof self !== "undefined") {
    root = self;
  } else if (typeof window !== "undefined") {
    root = window;
  } else if (typeof global !== "undefined") {
    root = global;
  } else if (typeof module !== "undefined") {
    root = module;
  } else {
    root = Function("return this")();
  }

  var result = symbolObservablePonyfill(root);

  /**
   * These are private action types reserved by Redux.
   * For any unknown actions, you must return the current state.
   * If the current state is undefined, you must return the initial state.
   * Do not reference these action types directly in your code.
   */
  var randomString = function randomString() {
    return Math.random().toString(36).substring(7).split("").join(".");
  };

  var ActionTypes = {
    INIT: "@@redux/INIT" + randomString(),
    REPLACE: "@@redux/REPLACE" + randomString(),
    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
      return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
    },
  };

  /**
   * @param {any} obj The object to inspect.
   * @returns {boolean} True if the argument appears to be a plain object.
   */
  function isPlainObject(obj) {
    if (typeof obj !== "object" || obj === null) return false;
    var proto = obj;

    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }

    return Object.getPrototypeOf(obj) === proto;
  }

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */

  function createStore(reducer, preloadedState, enhancer) {
    var _ref2;

    if (
      (typeof preloadedState === "function" && typeof enhancer === "function") ||
      (typeof enhancer === "function" && typeof arguments[3] === "function")
    ) {
      throw new Error(
        "It looks like you are passing several store enhancers to " +
          "createStore(). This is not supported. Instead, compose them " +
          "together to a single function."
      );
    }

    if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
      enhancer = preloadedState;
      preloadedState = undefined;
    }

    if (typeof enhancer !== "undefined") {
      if (typeof enhancer !== "function") {
        throw new Error("Expected the enhancer to be a function.");
      }

      return enhancer(createStore)(reducer, preloadedState);
    }

    if (typeof reducer !== "function") {
      throw new Error("Expected the reducer to be a function.");
    }

    var currentReducer = reducer;
    var currentState = preloadedState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;
    /**
     * This makes a shallow copy of currentListeners so we can use
     * nextListeners as a temporary list while dispatching.
     *
     * This prevents any bugs around consumers calling
     * subscribe/unsubscribe in the middle of a dispatch.
     */

    function ensureCanMutateNextListeners() {
      if (nextListeners === currentListeners) {
        nextListeners = currentListeners.slice();
      }
    }
    /**
     * Reads the state tree managed by the store.
     *
     * @returns {any} The current state tree of your application.
     */

    function getState() {
      if (isDispatching) {
        throw new Error(
          "You may not call store.getState() while the reducer is executing. " +
            "The reducer has already received the state as an argument. " +
            "Pass it down from the top reducer instead of reading it from the store."
        );
      }

      return currentState;
    }
    /**
     * Adds a change listener. It will be called any time an action is dispatched,
     * and some part of the state tree may potentially have changed. You may then
     * call `getState()` to read the current state tree inside the callback.
     *
     * You may call `dispatch()` from a change listener, with the following
     * caveats:
     *
     * 1. The subscriptions are snapshotted just before every `dispatch()` call.
     * If you subscribe or unsubscribe while the listeners are being invoked, this
     * will not have any effect on the `dispatch()` that is currently in progress.
     * However, the next `dispatch()` call, whether nested or not, will use a more
     * recent snapshot of the subscription list.
     *
     * 2. The listener should not expect to see all state changes, as the state
     * might have been updated multiple times during a nested `dispatch()` before
     * the listener is called. It is, however, guaranteed that all subscribers
     * registered before the `dispatch()` started will be called with the latest
     * state by the time it exits.
     *
     * @param {Function} listener A callback to be invoked on every dispatch.
     * @returns {Function} A function to remove this change listener.
     */

    function subscribe(listener) {
      if (typeof listener !== "function") {
        throw new Error("Expected the listener to be a function.");
      }

      if (isDispatching) {
        throw new Error(
          "You may not call store.subscribe() while the reducer is executing. " +
            "If you would like to be notified after the store has been updated, subscribe from a " +
            "component and invoke store.getState() in the callback to access the latest state. " +
            "See https://redux.js.org/api-reference/store#subscribelistener for more details."
        );
      }

      var isSubscribed = true;
      ensureCanMutateNextListeners();
      nextListeners.push(listener);
      return function unsubscribe() {
        if (!isSubscribed) {
          return;
        }

        if (isDispatching) {
          throw new Error(
            "You may not unsubscribe from a store listener while the reducer is executing. " +
              "See https://redux.js.org/api-reference/store#subscribelistener for more details."
          );
        }

        isSubscribed = false;
        ensureCanMutateNextListeners();
        var index = nextListeners.indexOf(listener);
        nextListeners.splice(index, 1);
        currentListeners = null;
      };
    }
    /**
     * Dispatches an action. It is the only way to trigger a state change.
     *
     * The `reducer` function, used to create the store, will be called with the
     * current state tree and the given `action`. Its return value will
     * be considered the **next** state of the tree, and the change listeners
     * will be notified.
     *
     * The base implementation only supports plain object actions. If you want to
     * dispatch a Promise, an Observable, a thunk, or something else, you need to
     * wrap your store creating function into the corresponding middleware. For
     * example, see the documentation for the `redux-thunk` package. Even the
     * middleware will eventually dispatch plain object actions using this method.
     *
     * @param {Object} action A plain object representing “what changed”. It is
     * a good idea to keep actions serializable so you can record and replay user
     * sessions, or use the time travelling `redux-devtools`. An action must have
     * a `type` property which may not be `undefined`. It is a good idea to use
     * string constants for action types.
     *
     * @returns {Object} For convenience, the same action object you dispatched.
     *
     * Note that, if you use a custom middleware, it may wrap `dispatch()` to
     * return something else (for example, a Promise you can await).
     */

    function dispatch(action) {
      if (!isPlainObject(action)) {
        throw new Error("Actions must be plain objects. " + "Use custom middleware for async actions.");
      }

      if (typeof action.type === "undefined") {
        throw new Error('Actions may not have an undefined "type" property. ' + "Have you misspelled a constant?");
      }

      if (isDispatching) {
        throw new Error("Reducers may not dispatch actions.");
      }

      try {
        isDispatching = true;
        currentState = currentReducer(currentState, action);
      } finally {
        isDispatching = false;
      }

      var listeners = (currentListeners = nextListeners);

      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        listener();
      }

      return action;
    }
    /**
     * Replaces the reducer currently used by the store to calculate the state.
     *
     * You might need this if your app implements code splitting and you want to
     * load some of the reducers dynamically. You might also need this if you
     * implement a hot reloading mechanism for Redux.
     *
     * @param {Function} nextReducer The reducer for the store to use instead.
     * @returns {void}
     */

    function replaceReducer(nextReducer) {
      if (typeof nextReducer !== "function") {
        throw new Error("Expected the nextReducer to be a function.");
      }

      currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
      // Any reducers that existed in both the new and old rootReducer
      // will receive the previous state. This effectively populates
      // the new state tree with any relevant data from the old one.

      dispatch({
        type: ActionTypes.REPLACE,
      });
    }
    /**
     * Interoperability point for observable/reactive libraries.
     * @returns {observable} A minimal observable of state changes.
     * For more information, see the observable proposal:
     * https://github.com/tc39/proposal-observable
     */

    function observable() {
      var _ref;

      var outerSubscribe = subscribe;
      return (
        (_ref = {
          /**
           * The minimal observable subscription method.
           * @param {Object} observer Any object that can be used as an observer.
           * The observer object should have a `next` method.
           * @returns {subscription} An object with an `unsubscribe` method that can
           * be used to unsubscribe the observable from the store, and prevent further
           * emission of values from the observable.
           */
          subscribe: function subscribe(observer) {
            if (typeof observer !== "object" || observer === null) {
              throw new TypeError("Expected the observer to be an object.");
            }

            function observeState() {
              if (observer.next) {
                observer.next(getState());
              }
            }

            observeState();
            var unsubscribe = outerSubscribe(observeState);
            return {
              unsubscribe: unsubscribe,
            };
          },
        }),
        (_ref[result] = function () {
          return this;
        }),
        _ref
      );
    } // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.

    dispatch({
      type: ActionTypes.INIT,
    });
    return (
      (_ref2 = {
        dispatch: dispatch,
        subscribe: subscribe,
        getState: getState,
        replaceReducer: replaceReducer,
      }),
      (_ref2[result] = observable),
      _ref2
    );
  }

  function _defineProperty(obj, key, value) {
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

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      keys.push.apply(keys, Object.getOwnPropertySymbols(object));
    }

    if (enumerableOnly)
      keys = keys.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  /**
   * Composes single-argument functions from right to left. The rightmost
   * function can take multiple arguments as it provides the signature for
   * the resulting composite function.
   *
   * @param {...Function} funcs The functions to compose.
   * @returns {Function} A function obtained by composing the argument functions
   * from right to left. For example, compose(f, g, h) is identical to doing
   * (...args) => f(g(h(...args))).
   */
  function compose() {
    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }

    if (funcs.length === 0) {
      return function (arg) {
        return arg;
      };
    }

    if (funcs.length === 1) {
      return funcs[0];
    }

    return funcs.reduce(function (a, b) {
      return function () {
        return a(b.apply(void 0, arguments));
      };
    });
  }

  /**
   * Creates a store enhancer that applies middleware to the dispatch method
   * of the Redux store. This is handy for a variety of tasks, such as expressing
   * asynchronous actions in a concise manner, or logging every action payload.
   *
   * See `redux-thunk` package as an example of the Redux middleware.
   *
   * Because middleware is potentially asynchronous, this should be the first
   * store enhancer in the composition chain.
   *
   * Note that each middleware will be given the `dispatch` and `getState` functions
   * as named arguments.
   *
   * @param {...Function} middlewares The middleware chain to be applied.
   * @returns {Function} A store enhancer applying the middleware.
   */

  function applyMiddleware() {
    for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
      middlewares[_key] = arguments[_key];
    }

    return function (createStore) {
      return function () {
        var store = createStore.apply(void 0, arguments);

        var _dispatch = function dispatch() {
          throw new Error(
            "Dispatching while constructing your middleware is not allowed. " +
              "Other middleware would not be applied to this dispatch."
          );
        };

        var middlewareAPI = {
          getState: store.getState,
          dispatch: function dispatch() {
            return _dispatch.apply(void 0, arguments);
          },
        };
        var chain = middlewares.map(function (middleware) {
          return middleware(middlewareAPI);
        });
        _dispatch = compose.apply(void 0, chain)(store.dispatch);
        return _objectSpread2({}, store, {
          dispatch: _dispatch,
        });
      };
    };
  }

  /**
   * A hook to access the value of the `ReactReduxContext`. This is a low-level
   * hook that you should usually not need to call directly.
   *
   * @returns {any} the value of the `ReactReduxContext`
   *
   * @example
   *
   * import React from 'react'
   * import { useReduxContext } from 'react-redux'
   *
   * export const CounterComponent = ({ value }) => {
   *   const { store } = useReduxContext()
   *   return <div>{store.getState()}</div>
   * }
   */

  function useReduxContext() {
    var contextValue = React.useContext(ReactReduxContext);

    return contextValue;
  }

  /**
   * Hook factory, which creates a `useStore` hook bound to a given context.
   *
   * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
   * @returns {Function} A `useStore` hook bound to the specified context.
   */

  function createStoreHook(context) {
    if (context === void 0) {
      context = ReactReduxContext;
    }

    var useReduxContext$1 =
      context === ReactReduxContext
        ? useReduxContext
        : function () {
            return React.useContext(context);
          };
    return function useStore() {
      var _useReduxContext = useReduxContext$1(),
        store = _useReduxContext.store;

      return store;
    };
  }
  /**
   * A hook to access the redux store.
   *
   * @returns {any} the redux store
   *
   * @example
   *
   * import React from 'react'
   * import { useStore } from 'react-redux'
   *
   * export const ExampleComponent = () => {
   *   const store = useStore()
   *   return <div>{store.getState()}</div>
   * }
   */

  var useStore = /*#__PURE__*/ createStoreHook();

  /**
   * Hook factory, which creates a `useDispatch` hook bound to a given context.
   *
   * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
   * @returns {Function} A `useDispatch` hook bound to the specified context.
   */

  function createDispatchHook(context) {
    if (context === void 0) {
      context = ReactReduxContext;
    }

    var useStore$1 = context === ReactReduxContext ? useStore : createStoreHook(context);
    return function useDispatch() {
      var store = useStore$1();
      return store.dispatch;
    };
  }
  /**
   * A hook to access the redux `dispatch` function.
   *
   * @returns {any|function} redux store's `dispatch` function
   *
   * @example
   *
   * import React, { useCallback } from 'react'
   * import { useDispatch } from 'react-redux'
   *
   * export const CounterComponent = ({ value }) => {
   *   const dispatch = useDispatch()
   *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
   *   return (
   *     <div>
   *       <span>{value}</span>
   *       <button onClick={increaseCounter}>Increase counter</button>
   *     </div>
   *   )
   * }
   */

  var useDispatch = /*#__PURE__*/ createDispatchHook();

  var refEquality = function refEquality(a, b) {
    return a === b;
  };

  function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
    var _useReducer = React.useReducer(function (s) {
        return s + 1;
      }, 0),
      forceRender = _useReducer[1];

    var subscription = React.useMemo(
      function () {
        return new Subscription(store, contextSub);
      },
      [store, contextSub]
    );
    var latestSubscriptionCallbackError = React.useRef();
    var latestSelector = React.useRef();
    var latestStoreState = React.useRef();
    var latestSelectedState = React.useRef();
    var storeState = store.getState();
    var selectedState;

    try {
      if (
        selector !== latestSelector.current ||
        storeState !== latestStoreState.current ||
        latestSubscriptionCallbackError.current
      ) {
        var newSelectedState = selector(storeState); // ensure latest selected state is reused so that a custom equality function can result in identical references

        if (latestSelectedState.current === undefined || !equalityFn(newSelectedState, latestSelectedState.current)) {
          selectedState = newSelectedState;
        } else {
          selectedState = latestSelectedState.current;
        }
      } else {
        selectedState = latestSelectedState.current;
      }
    } catch (err) {
      if (latestSubscriptionCallbackError.current) {
        err.message +=
          "\nThe error may be correlated with this previous error:\n" +
          latestSubscriptionCallbackError.current.stack +
          "\n\n";
      }

      throw err;
    }

    useIsomorphicLayoutEffect(function () {
      latestSelector.current = selector;
      latestStoreState.current = storeState;
      latestSelectedState.current = selectedState;
      latestSubscriptionCallbackError.current = undefined;
    });
    useIsomorphicLayoutEffect(
      function () {
        function checkForUpdates() {
          try {
            var _newSelectedState = latestSelector.current(store.getState());

            if (equalityFn(_newSelectedState, latestSelectedState.current)) {
              return;
            }

            latestSelectedState.current = _newSelectedState;
          } catch (err) {
            // we ignore all errors here, since when the component
            // is re-rendered, the selectors are called again, and
            // will throw again, if neither props nor store state
            // changed
            latestSubscriptionCallbackError.current = err;
          }

          forceRender();
        }

        subscription.onStateChange = checkForUpdates;
        subscription.trySubscribe();
        checkForUpdates();
        return function () {
          return subscription.tryUnsubscribe();
        };
      },
      [store, subscription]
    );
    return selectedState;
  }
  /**
   * Hook factory, which creates a `useSelector` hook bound to a given context.
   *
   * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
   * @returns {Function} A `useSelector` hook bound to the specified context.
   */

  function createSelectorHook(context) {
    if (context === void 0) {
      context = ReactReduxContext;
    }

    var useReduxContext$1 =
      context === ReactReduxContext
        ? useReduxContext
        : function () {
            return React.useContext(context);
          };
    return function useSelector(selector, equalityFn) {
      if (equalityFn === void 0) {
        equalityFn = refEquality;
      }

      var _useReduxContext = useReduxContext$1(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

      var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
      React.useDebugValue(selectedState);
      return selectedState;
    };
  }
  /**
   * A hook to access the redux store's state. This hook takes a selector function
   * as an argument. The selector is called with the store state.
   *
   * This hook takes an optional equality comparison function as the second parameter
   * that allows you to customize the way the selected state is compared to determine
   * whether the component needs to be re-rendered.
   *
   * @param {Function} selector the selector function
   * @param {Function=} equalityFn the function that will be used to determine equality
   *
   * @returns {any} the selected state
   *
   * @example
   *
   * import React from 'react'
   * import { useSelector } from 'react-redux'
   *
   * export const CounterComponent = () => {
   *   const counter = useSelector(state => state.counter)
   *   return <div>{counter}</div>
   * }
   */

  var useSelector = /*#__PURE__*/ createSelectorHook();

  setBatch(reactDom.unstable_batchedUpdates);

  var createSymbol = function createSymbol(name) {
    return "@@redux-saga/" + name;
  };

  var CANCEL$1 =
    /*#__PURE__*/
    createSymbol("CANCEL_PROMISE");
  var CHANNEL_END_TYPE =
    /*#__PURE__*/
    createSymbol("CHANNEL_END");
  var IO =
    /*#__PURE__*/
    createSymbol("IO");
  var MATCH =
    /*#__PURE__*/
    createSymbol("MATCH");
  var MULTICAST =
    /*#__PURE__*/
    createSymbol("MULTICAST");
  var SAGA_ACTION =
    /*#__PURE__*/
    createSymbol("SAGA_ACTION");
  var SELF_CANCELLATION =
    /*#__PURE__*/
    createSymbol("SELF_CANCELLATION");
  var TASK =
    /*#__PURE__*/
    createSymbol("TASK");
  var TASK_CANCEL =
    /*#__PURE__*/
    createSymbol("TASK_CANCEL");
  var TERMINATE =
    /*#__PURE__*/
    createSymbol("TERMINATE");
  var SAGA_LOCATION =
    /*#__PURE__*/
    createSymbol("LOCATION");

  var undef = function undef(v) {
    return v === null || v === undefined;
  };
  var notUndef = function notUndef(v) {
    return v !== null && v !== undefined;
  };
  var func = function func(f) {
    return typeof f === "function";
  };
  var string$1 = function string(s) {
    return typeof s === "string";
  };
  var array$1 = Array.isArray;
  var promise = function promise(p) {
    return p && func(p.then);
  };
  var iterator = function iterator(it) {
    return it && func(it.next) && func(it.throw);
  };
  var pattern = function pattern(pat) {
    return pat && (string$1(pat) || symbol$1(pat) || func(pat) || (array$1(pat) && pat.every(pattern)));
  };
  var channel$1 = function channel(ch) {
    return ch && func(ch.take) && func(ch.close);
  };
  var stringableFunc = function stringableFunc(f) {
    return func(f) && f.hasOwnProperty("toString");
  };
  var symbol$1 = function symbol(sym) {
    return Boolean(sym) && typeof Symbol === "function" && sym.constructor === Symbol && sym !== Symbol.prototype;
  };
  var multicast = function multicast(ch) {
    return channel$1(ch) && ch[MULTICAST];
  };

  var konst = function konst(v) {
    return function () {
      return v;
    };
  };
  var kTrue =
    /*#__PURE__*/
    konst(true);

  var noop = function noop() {};
  var identity = function identity(v) {
    return v;
  };
  var assignWithSymbols = function assignWithSymbols(target, source) {
    _extends(target, source);

    if (Object.getOwnPropertySymbols) {
      Object.getOwnPropertySymbols(source).forEach(function (s) {
        target[s] = source[s];
      });
    }
  };
  var flatMap = function flatMap(mapper, arr) {
    var _ref;

    return (_ref = []).concat.apply(_ref, arr.map(mapper));
  };
  function remove(array, item) {
    var index = array.indexOf(item);

    if (index >= 0) {
      array.splice(index, 1);
    }
  }
  function once(fn) {
    var called = false;
    return function () {
      if (called) {
        return;
      }

      called = true;
      fn();
    };
  }

  var kThrow = function kThrow(err) {
    throw err;
  };

  var kReturn = function kReturn(value) {
    return {
      value: value,
      done: true,
    };
  };

  function makeIterator(next, thro, name) {
    if (thro === void 0) {
      thro = kThrow;
    }

    if (name === void 0) {
      name = "iterator";
    }

    var iterator = {
      meta: {
        name: name,
      },
      next: next,
      throw: thro,
      return: kReturn,
      isSagaIterator: true,
    };

    if (typeof Symbol !== "undefined") {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }
  function logError(error, _ref2) {
    var sagaStack = _ref2.sagaStack;

    /*eslint-disable no-console*/
    console.error(error);
    console.error(sagaStack);
  }

  var createEmptyArray = function createEmptyArray(n) {
    return Array.apply(null, new Array(n));
  };
  var wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
    return function (action) {
      return dispatch(
        Object.defineProperty(action, SAGA_ACTION, {
          value: true,
        })
      );
    };
  };
  var shouldTerminate = function shouldTerminate(res) {
    return res === TERMINATE;
  };
  var shouldCancel = function shouldCancel(res) {
    return res === TASK_CANCEL;
  };
  var shouldComplete = function shouldComplete(res) {
    return shouldTerminate(res) || shouldCancel(res);
  };
  function createAllStyleChildCallbacks(shape, parentCallback) {
    var keys = Object.keys(shape);
    var totalCount = keys.length;

    var completedCount = 0;
    var completed;
    var results = array$1(shape) ? createEmptyArray(totalCount) : {};
    var childCallbacks = {};

    function checkEnd() {
      if (completedCount === totalCount) {
        completed = true;
        parentCallback(results);
      }
    }

    keys.forEach(function (key) {
      var chCbAtKey = function chCbAtKey(res, isErr) {
        if (completed) {
          return;
        }

        if (isErr || shouldComplete(res)) {
          parentCallback.cancel();
          parentCallback(res, isErr);
        } else {
          results[key] = res;
          completedCount++;
          checkEnd();
        }
      };

      chCbAtKey.cancel = noop;
      childCallbacks[key] = chCbAtKey;
    });

    parentCallback.cancel = function () {
      if (!completed) {
        completed = true;
        keys.forEach(function (key) {
          return childCallbacks[key].cancel();
        });
      }
    };

    return childCallbacks;
  }
  function getMetaInfo(fn) {
    return {
      name: fn.name || "anonymous",
      location: getLocation(fn),
    };
  }
  function getLocation(instrumented) {
    return instrumented[SAGA_LOCATION];
  }

  var BUFFER_OVERFLOW = "Channel's Buffer overflow!";
  var ON_OVERFLOW_THROW = 1;
  var ON_OVERFLOW_SLIDE = 3;
  var ON_OVERFLOW_EXPAND = 4;

  function ringBuffer(limit, overflowAction) {
    if (limit === void 0) {
      limit = 10;
    }

    var arr = new Array(limit);
    var length = 0;
    var pushIndex = 0;
    var popIndex = 0;

    var push = function push(it) {
      arr[pushIndex] = it;
      pushIndex = (pushIndex + 1) % limit;
      length++;
    };

    var take = function take() {
      if (length != 0) {
        var it = arr[popIndex];
        arr[popIndex] = null;
        length--;
        popIndex = (popIndex + 1) % limit;
        return it;
      }
    };

    var flush = function flush() {
      var items = [];

      while (length) {
        items.push(take());
      }

      return items;
    };

    return {
      isEmpty: function isEmpty() {
        return length == 0;
      },
      put: function put(it) {
        if (length < limit) {
          push(it);
        } else {
          var doubledLimit;

          switch (overflowAction) {
            case ON_OVERFLOW_THROW:
              throw new Error(BUFFER_OVERFLOW);

            case ON_OVERFLOW_SLIDE:
              arr[pushIndex] = it;
              pushIndex = (pushIndex + 1) % limit;
              popIndex = pushIndex;
              break;

            case ON_OVERFLOW_EXPAND:
              doubledLimit = 2 * limit;
              arr = flush();
              length = arr.length;
              pushIndex = arr.length;
              popIndex = 0;
              arr.length = doubledLimit;
              limit = doubledLimit;
              push(it);
              break;
          }
        }
      },
      take: take,
      flush: flush,
    };
  }
  var expanding = function expanding(initialSize) {
    return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
  };

  var TAKE = "TAKE";
  var PUT = "PUT";
  var ALL = "ALL";
  var RACE = "RACE";
  var CALL = "CALL";
  var CPS = "CPS";
  var FORK = "FORK";
  var JOIN = "JOIN";
  var CANCEL = "CANCEL";
  var SELECT = "SELECT";
  var ACTION_CHANNEL = "ACTION_CHANNEL";
  var CANCELLED$1 = "CANCELLED";
  var FLUSH = "FLUSH";
  var GET_CONTEXT = "GET_CONTEXT";
  var SET_CONTEXT = "SET_CONTEXT";

  var makeEffect = function makeEffect(type, payload) {
    var _ref;

    return (
      (_ref = {}), (_ref[IO] = true), (_ref.combinator = false), (_ref.type = type), (_ref.payload = payload), _ref
    );
  };
  function take(patternOrChannel, multicastPattern) {
    if (patternOrChannel === void 0) {
      patternOrChannel = "*";
    }

    if (pattern(patternOrChannel)) {
      return makeEffect(TAKE, {
        pattern: patternOrChannel,
      });
    }

    if (multicast(patternOrChannel) && notUndef(multicastPattern) && pattern(multicastPattern)) {
      return makeEffect(TAKE, {
        channel: patternOrChannel,
        pattern: multicastPattern,
      });
    }

    if (channel$1(patternOrChannel)) {
      return makeEffect(TAKE, {
        channel: patternOrChannel,
      });
    }
  }
  function put(channel$1$1, action) {
    if (undef(action)) {
      action = channel$1$1; // `undefined` instead of `null` to make default parameter work

      channel$1$1 = undefined;
    }

    return makeEffect(PUT, {
      channel: channel$1$1,
      action: action,
    });
  }

  function getFnCallDescriptor(fnDescriptor, args) {
    var context = null;
    var fn;

    if (func(fnDescriptor)) {
      fn = fnDescriptor;
    } else {
      if (array$1(fnDescriptor)) {
        context = fnDescriptor[0];
        fn = fnDescriptor[1];
      } else {
        context = fnDescriptor.context;
        fn = fnDescriptor.fn;
      }

      if (context && string$1(fn) && func(context[fn])) {
        fn = context[fn];
      }
    }

    return {
      context: context,
      fn: fn,
      args: args,
    };
  }
  function fork(fnDescriptor) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return makeEffect(FORK, getFnCallDescriptor(fnDescriptor, args));
  }
  function cancel$1(taskOrTasks) {
    if (taskOrTasks === void 0) {
      taskOrTasks = SELF_CANCELLATION;
    }

    return makeEffect(CANCEL, taskOrTasks);
  }
  function select(selector) {
    if (selector === void 0) {
      selector = identity;
    }

    for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      args[_key5 - 1] = arguments[_key5];
    }

    return makeEffect(SELECT, {
      selector: selector,
      args: args,
    });
  }

  function deferred() {
    var def = {};
    def.promise = new Promise(function (resolve, reject) {
      def.resolve = resolve;
      def.reject = reject;
    });
    return def;
  }

  var queue = [];
  /**
      Variable to hold a counting semaphore
      - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
        already suspended)
      - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
        triggers flushing the queued tasks.
    **/

  var semaphore = 0;
  /**
      Executes a task 'atomically'. Tasks scheduled during this execution will be queued
      and flushed after this task has finished (assuming the scheduler endup in a released
      state).
    **/

  function exec(task) {
    try {
      suspend();
      task();
    } finally {
      release();
    }
  }
  /**
      Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
    **/

  function asap(task) {
    queue.push(task);

    if (!semaphore) {
      suspend();
      flush();
    }
  }
  /**
   * Puts the scheduler in a `suspended` state and executes a task immediately.
   */

  function immediately(task) {
    try {
      suspend();
      return task();
    } finally {
      flush();
    }
  }
  /**
      Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
      scheduler is released.
    **/

  function suspend() {
    semaphore++;
  }
  /**
      Puts the scheduler in a `released` state.
    **/

  function release() {
    semaphore--;
  }
  /**
      Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
    **/

  function flush() {
    release();
    var task;

    while (!semaphore && (task = queue.shift()) !== undefined) {
      exec(task);
    }
  }

  var array = function array(patterns) {
    return function (input) {
      return patterns.some(function (p) {
        return matcher(p)(input);
      });
    };
  };
  var predicate = function predicate(_predicate) {
    return function (input) {
      return _predicate(input);
    };
  };
  var string = function string(pattern) {
    return function (input) {
      return input.type === String(pattern);
    };
  };
  var symbol = function symbol(pattern) {
    return function (input) {
      return input.type === pattern;
    };
  };
  var wildcard = function wildcard() {
    return kTrue;
  };
  function matcher(pattern) {
    // prettier-ignore
    var matcherCreator = pattern === '*' ? wildcard : string$1(pattern) ? string : array$1(pattern) ? array : stringableFunc(pattern) ? string : func(pattern) ? predicate : symbol$1(pattern) ? symbol : null;

    if (matcherCreator === null) {
      throw new Error("invalid pattern: " + pattern);
    }

    return matcherCreator(pattern);
  }

  var END = {
    type: CHANNEL_END_TYPE,
  };
  var isEnd = function isEnd(a) {
    return a && a.type === CHANNEL_END_TYPE;
  };
  function channel(buffer$1) {
    if (buffer$1 === void 0) {
      buffer$1 = expanding();
    }

    var closed = false;
    var takers = [];

    function put(input) {
      if (closed) {
        return;
      }

      if (takers.length === 0) {
        return buffer$1.put(input);
      }

      var cb = takers.shift();
      cb(input);
    }

    function take(cb) {
      if (closed && buffer$1.isEmpty()) {
        cb(END);
      } else if (!buffer$1.isEmpty()) {
        cb(buffer$1.take());
      } else {
        takers.push(cb);

        cb.cancel = function () {
          remove(takers, cb);
        };
      }
    }

    function flush(cb) {
      if (closed && buffer$1.isEmpty()) {
        cb(END);
        return;
      }

      cb(buffer$1.flush());
    }

    function close() {
      if (closed) {
        return;
      }

      closed = true;
      var arr = takers;
      takers = [];

      for (var i = 0, len = arr.length; i < len; i++) {
        var taker = arr[i];
        taker(END);
      }
    }

    return {
      take: take,
      put: put,
      flush: flush,
      close: close,
    };
  }
  function multicastChannel() {
    var _ref;

    var closed = false;
    var currentTakers = [];
    var nextTakers = currentTakers;

    var ensureCanMutateNextTakers = function ensureCanMutateNextTakers() {
      if (nextTakers !== currentTakers) {
        return;
      }

      nextTakers = currentTakers.slice();
    };

    var close = function close() {
      closed = true;
      var takers = (currentTakers = nextTakers);
      nextTakers = [];
      takers.forEach(function (taker) {
        taker(END);
      });
    };

    return (
      (_ref = {}),
      (_ref[MULTICAST] = true),
      (_ref.put = function put(input) {
        if (closed) {
          return;
        }

        if (isEnd(input)) {
          close();
          return;
        }

        var takers = (currentTakers = nextTakers);

        for (var i = 0, len = takers.length; i < len; i++) {
          var taker = takers[i];

          if (taker[MATCH](input)) {
            taker.cancel();
            taker(input);
          }
        }
      }),
      (_ref.take = function take(cb, matcher) {
        if (matcher === void 0) {
          matcher = wildcard;
        }

        if (closed) {
          cb(END);
          return;
        }

        cb[MATCH] = matcher;
        ensureCanMutateNextTakers();
        nextTakers.push(cb);
        cb.cancel = once(function () {
          ensureCanMutateNextTakers();
          remove(nextTakers, cb);
        });
      }),
      (_ref.close = close),
      _ref
    );
  }
  function stdChannel() {
    var chan = multicastChannel();
    var put = chan.put;

    chan.put = function (input) {
      if (input[SAGA_ACTION]) {
        put(input);
        return;
      }

      asap(function () {
        put(input);
      });
    };

    return chan;
  }

  var RUNNING = 0;
  var CANCELLED = 1;
  var ABORTED = 2;
  var DONE = 3;

  function resolvePromise(promise, cb) {
    var cancelPromise = promise[CANCEL$1];

    if (func(cancelPromise)) {
      cb.cancel = cancelPromise;
    }

    promise.then(cb, function (error) {
      cb(error, true);
    });
  }

  var current = 0;
  var nextSagaId = function () {
    return ++current;
  };

  var _effectRunnerMap;

  function getIteratorMetaInfo(iterator, fn) {
    if (iterator.isSagaIterator) {
      return {
        name: iterator.meta.name,
      };
    }

    return getMetaInfo(fn);
  }

  function createTaskIterator(_ref) {
    var context = _ref.context,
      fn = _ref.fn,
      args = _ref.args;

    // catch synchronous failures; see #152 and #441
    try {
      var result = fn.apply(context, args); // i.e. a generator function returns an iterator

      if (iterator(result)) {
        return result;
      }

      var resolved = false;

      var next = function next(arg) {
        if (!resolved) {
          resolved = true; // Only promises returned from fork will be interpreted. See #1573

          return {
            value: result,
            done: !promise(result),
          };
        } else {
          return {
            value: arg,
            done: true,
          };
        }
      };

      return makeIterator(next);
    } catch (err) {
      // do not bubble up synchronous failures for detached forks
      // instead create a failed task. See #152 and #441
      return makeIterator(function () {
        throw err;
      });
    }
  }

  function runPutEffect(env, _ref2, cb) {
    var channel = _ref2.channel,
      action = _ref2.action,
      resolve = _ref2.resolve;

    /**
       Schedule the put in case another saga is holding a lock.
       The put will be executed atomically. ie nested puts will execute after
       this put has terminated.
       **/
    asap(function () {
      var result;

      try {
        result = (channel ? channel.put : env.dispatch)(action);
      } catch (error) {
        cb(error, true);
        return;
      }

      if (resolve && promise(result)) {
        resolvePromise(result, cb);
      } else {
        cb(result);
      }
    }); // Put effects are non cancellables
  }

  function runTakeEffect(env, _ref3, cb) {
    var _ref3$channel = _ref3.channel,
      channel = _ref3$channel === void 0 ? env.channel : _ref3$channel,
      pattern = _ref3.pattern,
      maybe = _ref3.maybe;

    var takeCb = function takeCb(input) {
      if (input instanceof Error) {
        cb(input, true);
        return;
      }

      if (isEnd(input) && !maybe) {
        cb(TERMINATE);
        return;
      }

      cb(input);
    };

    try {
      channel.take(takeCb, notUndef(pattern) ? matcher(pattern) : null);
    } catch (err) {
      cb(err, true);
      return;
    }

    cb.cancel = takeCb.cancel;
  }

  function runCallEffect(env, _ref4, cb, _ref5) {
    var context = _ref4.context,
      fn = _ref4.fn,
      args = _ref4.args;
    var task = _ref5.task;

    // catch synchronous failures; see #152
    try {
      var result = fn.apply(context, args);

      if (promise(result)) {
        resolvePromise(result, cb);
        return;
      }

      if (iterator(result)) {
        // resolve iterator
        proc(
          env,
          result,
          task.context,
          current,
          getMetaInfo(fn),
          /* isRoot */
          false,
          cb
        );
        return;
      }

      cb(result);
    } catch (error) {
      cb(error, true);
    }
  }

  function runCPSEffect(env, _ref6, cb) {
    var context = _ref6.context,
      fn = _ref6.fn,
      args = _ref6.args;

    // CPS (ie node style functions) can define their own cancellation logic
    // by setting cancel field on the cb
    // catch synchronous failures; see #152
    try {
      var cpsCb = function cpsCb(err, res) {
        if (undef(err)) {
          cb(res);
        } else {
          cb(err, true);
        }
      };

      fn.apply(context, args.concat(cpsCb));

      if (cpsCb.cancel) {
        cb.cancel = cpsCb.cancel;
      }
    } catch (error) {
      cb(error, true);
    }
  }

  function runForkEffect(env, _ref7, cb, _ref8) {
    var context = _ref7.context,
      fn = _ref7.fn,
      args = _ref7.args,
      detached = _ref7.detached;
    var parent = _ref8.task;
    var taskIterator = createTaskIterator({
      context: context,
      fn: fn,
      args: args,
    });
    var meta = getIteratorMetaInfo(taskIterator, fn);
    immediately(function () {
      var child = proc(env, taskIterator, parent.context, current, meta, detached, undefined);

      if (detached) {
        cb(child);
      } else {
        if (child.isRunning()) {
          parent.queue.addTask(child);
          cb(child);
        } else if (child.isAborted()) {
          parent.queue.abort(child.error());
        } else {
          cb(child);
        }
      }
    }); // Fork effects are non cancellables
  }

  function runJoinEffect(env, taskOrTasks, cb, _ref9) {
    var task = _ref9.task;

    var joinSingleTask = function joinSingleTask(taskToJoin, cb) {
      if (taskToJoin.isRunning()) {
        var joiner = {
          task: task,
          cb: cb,
        };

        cb.cancel = function () {
          if (taskToJoin.isRunning()) remove(taskToJoin.joiners, joiner);
        };

        taskToJoin.joiners.push(joiner);
      } else {
        if (taskToJoin.isAborted()) {
          cb(taskToJoin.error(), true);
        } else {
          cb(taskToJoin.result());
        }
      }
    };

    if (array$1(taskOrTasks)) {
      if (taskOrTasks.length === 0) {
        cb([]);
        return;
      }

      var childCallbacks = createAllStyleChildCallbacks(taskOrTasks, cb);
      taskOrTasks.forEach(function (t, i) {
        joinSingleTask(t, childCallbacks[i]);
      });
    } else {
      joinSingleTask(taskOrTasks, cb);
    }
  }

  function cancelSingleTask(taskToCancel) {
    if (taskToCancel.isRunning()) {
      taskToCancel.cancel();
    }
  }

  function runCancelEffect(env, taskOrTasks, cb, _ref10) {
    var task = _ref10.task;

    if (taskOrTasks === SELF_CANCELLATION) {
      cancelSingleTask(task);
    } else if (array$1(taskOrTasks)) {
      taskOrTasks.forEach(cancelSingleTask);
    } else {
      cancelSingleTask(taskOrTasks);
    }

    cb(); // cancel effects are non cancellables
  }

  function runAllEffect(env, effects, cb, _ref11) {
    var digestEffect = _ref11.digestEffect;
    var effectId = current;
    var keys = Object.keys(effects);

    if (keys.length === 0) {
      cb(array$1(effects) ? [] : {});
      return;
    }

    var childCallbacks = createAllStyleChildCallbacks(effects, cb);
    keys.forEach(function (key) {
      digestEffect(effects[key], effectId, childCallbacks[key], key);
    });
  }

  function runRaceEffect(env, effects, cb, _ref12) {
    var digestEffect = _ref12.digestEffect;
    var effectId = current;
    var keys = Object.keys(effects);
    var response = array$1(effects) ? createEmptyArray(keys.length) : {};
    var childCbs = {};
    var completed = false;
    keys.forEach(function (key) {
      var chCbAtKey = function chCbAtKey(res, isErr) {
        if (completed) {
          return;
        }

        if (isErr || shouldComplete(res)) {
          // Race Auto cancellation
          cb.cancel();
          cb(res, isErr);
        } else {
          cb.cancel();
          completed = true;
          response[key] = res;
          cb(response);
        }
      };

      chCbAtKey.cancel = noop;
      childCbs[key] = chCbAtKey;
    });

    cb.cancel = function () {
      // prevents unnecessary cancellation
      if (!completed) {
        completed = true;
        keys.forEach(function (key) {
          return childCbs[key].cancel();
        });
      }
    };

    keys.forEach(function (key) {
      if (completed) {
        return;
      }

      digestEffect(effects[key], effectId, childCbs[key], key);
    });
  }

  function runSelectEffect(env, _ref13, cb) {
    var selector = _ref13.selector,
      args = _ref13.args;

    try {
      var state = selector.apply(void 0, [env.getState()].concat(args));
      cb(state);
    } catch (error) {
      cb(error, true);
    }
  }

  function runChannelEffect(env, _ref14, cb) {
    var pattern = _ref14.pattern,
      buffer = _ref14.buffer;
    var chan = channel(buffer);
    var match = matcher(pattern);

    var taker = function taker(action) {
      if (!isEnd(action)) {
        env.channel.take(taker, match);
      }

      chan.put(action);
    };

    var close = chan.close;

    chan.close = function () {
      taker.cancel();
      close();
    };

    env.channel.take(taker, match);
    cb(chan);
  }

  function runCancelledEffect(env, data, cb, _ref15) {
    var task = _ref15.task;
    cb(task.isCancelled());
  }

  function runFlushEffect(env, channel, cb) {
    channel.flush(cb);
  }

  function runGetContextEffect(env, prop, cb, _ref16) {
    var task = _ref16.task;
    cb(task.context[prop]);
  }

  function runSetContextEffect(env, props, cb, _ref17) {
    var task = _ref17.task;
    assignWithSymbols(task.context, props);
    cb();
  }

  var effectRunnerMap =
    ((_effectRunnerMap = {}),
    (_effectRunnerMap[TAKE] = runTakeEffect),
    (_effectRunnerMap[PUT] = runPutEffect),
    (_effectRunnerMap[ALL] = runAllEffect),
    (_effectRunnerMap[RACE] = runRaceEffect),
    (_effectRunnerMap[CALL] = runCallEffect),
    (_effectRunnerMap[CPS] = runCPSEffect),
    (_effectRunnerMap[FORK] = runForkEffect),
    (_effectRunnerMap[JOIN] = runJoinEffect),
    (_effectRunnerMap[CANCEL] = runCancelEffect),
    (_effectRunnerMap[SELECT] = runSelectEffect),
    (_effectRunnerMap[ACTION_CHANNEL] = runChannelEffect),
    (_effectRunnerMap[CANCELLED$1] = runCancelledEffect),
    (_effectRunnerMap[FLUSH] = runFlushEffect),
    (_effectRunnerMap[GET_CONTEXT] = runGetContextEffect),
    (_effectRunnerMap[SET_CONTEXT] = runSetContextEffect),
    _effectRunnerMap);

  /**
     Used to track a parent task and its forks
     In the fork model, forked tasks are attached by default to their parent
     We model this using the concept of Parent task && main Task
     main task is the main flow of the current Generator, the parent tasks is the
     aggregation of the main tasks + all its forked tasks.
     Thus the whole model represents an execution tree with multiple branches (vs the
     linear execution tree in sequential (non parallel) programming)

     A parent tasks has the following semantics
     - It completes if all its forks either complete or all cancelled
     - If it's cancelled, all forks are cancelled as well
     - It aborts if any uncaught error bubbles up from forks
     - If it completes, the return value is the one returned by the main task
     **/

  function forkQueue(mainTask, onAbort, cont) {
    var tasks = [];
    var result;
    var completed = false;
    addTask(mainTask);

    var getTasks = function getTasks() {
      return tasks;
    };

    function abort(err) {
      onAbort();
      cancelAll();
      cont(err, true);
    }

    function addTask(task) {
      tasks.push(task);

      task.cont = function (res, isErr) {
        if (completed) {
          return;
        }

        remove(tasks, task);
        task.cont = noop;

        if (isErr) {
          abort(res);
        } else {
          if (task === mainTask) {
            result = res;
          }

          if (!tasks.length) {
            completed = true;
            cont(result);
          }
        }
      };
    }

    function cancelAll() {
      if (completed) {
        return;
      }

      completed = true;
      tasks.forEach(function (t) {
        t.cont = noop;
        t.cancel();
      });
      tasks = [];
    }

    return {
      addTask: addTask,
      cancelAll: cancelAll,
      abort: abort,
      getTasks: getTasks,
    };
  }

  // there can be only a single saga error created at any given moment

  function formatLocation(fileName, lineNumber) {
    return fileName + "?" + lineNumber;
  }

  function effectLocationAsString(effect) {
    var location = getLocation(effect);

    if (location) {
      var code = location.code,
        fileName = location.fileName,
        lineNumber = location.lineNumber;
      var source = code + "  " + formatLocation(fileName, lineNumber);
      return source;
    }

    return "";
  }

  function sagaLocationAsString(sagaMeta) {
    var name = sagaMeta.name,
      location = sagaMeta.location;

    if (location) {
      return name + "  " + formatLocation(location.fileName, location.lineNumber);
    }

    return name;
  }

  function cancelledTasksAsString(sagaStack) {
    var cancelledTasks = flatMap(function (i) {
      return i.cancelledTasks;
    }, sagaStack);

    if (!cancelledTasks.length) {
      return "";
    }

    return ["Tasks cancelled due to error:"].concat(cancelledTasks).join("\n");
  }

  var crashedEffect = null;
  var sagaStack = [];
  var addSagaFrame = function addSagaFrame(frame) {
    frame.crashedEffect = crashedEffect;
    sagaStack.push(frame);
  };
  var clear = function clear() {
    crashedEffect = null;
    sagaStack.length = 0;
  }; // this sets crashed effect for the soon-to-be-reported saga frame
  // this slightly streatches the singleton nature of this module into wrong direction
  // as it's even less obvious what's the data flow here, but it is what it is for now

  var setCrashedEffect = function setCrashedEffect(effect) {
    crashedEffect = effect;
  };
  /**
      @returns {string}

      @example
      The above error occurred in task errorInPutSaga {pathToFile}
      when executing effect put({type: 'REDUCER_ACTION_ERROR_IN_PUT'}) {pathToFile}
          created by fetchSaga {pathToFile}
          created by rootSaga {pathToFile}
    */

  var toString = function toString() {
    var firstSaga = sagaStack[0],
      otherSagas = sagaStack.slice(1);
    var crashedEffectLocation = firstSaga.crashedEffect ? effectLocationAsString(firstSaga.crashedEffect) : null;
    var errorMessage =
      "The above error occurred in task " +
      sagaLocationAsString(firstSaga.meta) +
      (crashedEffectLocation ? " \n when executing effect " + crashedEffectLocation : "");
    return [errorMessage]
      .concat(
        otherSagas.map(function (s) {
          return "    created by " + sagaLocationAsString(s.meta);
        }),
        [cancelledTasksAsString(sagaStack)]
      )
      .join("\n");
  };

  function newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont) {
    var _task;

    if (cont === void 0) {
      cont = noop;
    }

    var status = RUNNING;
    var taskResult;
    var taskError;
    var deferredEnd = null;
    var cancelledDueToErrorTasks = [];
    var context = Object.create(parentContext);
    var queue = forkQueue(
      mainTask,
      function onAbort() {
        cancelledDueToErrorTasks.push.apply(
          cancelledDueToErrorTasks,
          queue.getTasks().map(function (t) {
            return t.meta.name;
          })
        );
      },
      end
    );
    /**
       This may be called by a parent generator to trigger/propagate cancellation
       cancel all pending tasks (including the main task), then end the current task.
        Cancellation propagates down to the whole execution tree held by this Parent task
       It's also propagated to all joiners of this task and their execution tree/joiners
        Cancellation is noop for terminated/Cancelled tasks tasks
       **/

    function cancel() {
      if (status === RUNNING) {
        // Setting status to CANCELLED does not necessarily mean that the task/iterators are stopped
        // effects in the iterator's finally block will still be executed
        status = CANCELLED;
        queue.cancelAll(); // Ending with a TASK_CANCEL will propagate the Cancellation to all joiners

        end(TASK_CANCEL, false);
      }
    }

    function end(result, isErr) {
      if (!isErr) {
        // The status here may be RUNNING or CANCELLED
        // If the status is CANCELLED, then we do not need to change it here
        if (result === TASK_CANCEL) {
          status = CANCELLED;
        } else if (status !== CANCELLED) {
          status = DONE;
        }

        taskResult = result;
        deferredEnd && deferredEnd.resolve(result);
      } else {
        status = ABORTED;
        addSagaFrame({
          meta: meta,
          cancelledTasks: cancelledDueToErrorTasks,
        });

        if (task.isRoot) {
          var sagaStack = toString(); // we've dumped the saga stack to string and are passing it to user's code
          // we know that it won't be needed anymore and we need to clear it

          clear();
          env.onError(result, {
            sagaStack: sagaStack,
          });
        }

        taskError = result;
        deferredEnd && deferredEnd.reject(result);
      }

      task.cont(result, isErr);
      task.joiners.forEach(function (joiner) {
        joiner.cb(result, isErr);
      });
      task.joiners = null;
    }

    function setContext(props) {
      assignWithSymbols(context, props);
    }

    function toPromise() {
      if (deferredEnd) {
        return deferredEnd.promise;
      }

      deferredEnd = deferred();

      if (status === ABORTED) {
        deferredEnd.reject(taskError);
      } else if (status !== RUNNING) {
        deferredEnd.resolve(taskResult);
      }

      return deferredEnd.promise;
    }

    var task =
      ((_task = {}),
      (_task[TASK] = true),
      (_task.id = parentEffectId),
      (_task.meta = meta),
      (_task.isRoot = isRoot),
      (_task.context = context),
      (_task.joiners = []),
      (_task.queue = queue),
      (_task.cancel = cancel),
      (_task.cont = cont),
      (_task.end = end),
      (_task.setContext = setContext),
      (_task.toPromise = toPromise),
      (_task.isRunning = function isRunning() {
        return status === RUNNING;
      }),
      (_task.isCancelled = function isCancelled() {
        return status === CANCELLED || (status === RUNNING && mainTask.status === CANCELLED);
      }),
      (_task.isAborted = function isAborted() {
        return status === ABORTED;
      }),
      (_task.result = function result() {
        return taskResult;
      }),
      (_task.error = function error() {
        return taskError;
      }),
      _task);
    return task;
  }

  function proc(env, iterator$1, parentContext, parentEffectId, meta, isRoot, cont) {
    var finalRunEffect = env.finalizeRunEffect(runEffect);
    /**
        Tracks the current effect cancellation
        Each time the generator progresses. calling runEffect will set a new value
        on it. It allows propagating cancellation to child effects
      **/

    next.cancel = noop;
    /** Creates a main task to track the main flow */

    var mainTask = {
      meta: meta,
      cancel: cancelMain,
      status: RUNNING,
    };
    /**
       Creates a new task descriptor for this generator.
       A task is the aggregation of it's mainTask and all it's forked tasks.
       **/

    var task = newTask(env, mainTask, parentContext, parentEffectId, meta, isRoot, cont);
    var executingContext = {
      task: task,
      digestEffect: digestEffect,
    };
    /**
        cancellation of the main task. We'll simply resume the Generator with a TASK_CANCEL
      **/

    function cancelMain() {
      if (mainTask.status === RUNNING) {
        mainTask.status = CANCELLED;
        next(TASK_CANCEL);
      }
    }
    /**
        attaches cancellation logic to this task's continuation
        this will permit cancellation to propagate down the call chain
      **/

    if (cont) {
      cont.cancel = task.cancel;
    } // kicks up the generator

    next(); // then return the task descriptor to the caller

    return task;
    /**
     * This is the generator driver
     * It's a recursive async/continuation function which calls itself
     * until the generator terminates or throws
     * @param {internal commands(TASK_CANCEL | TERMINATE) | any} arg - value, generator will be resumed with.
     * @param {boolean} isErr - the flag shows if effect finished with an error
     *
     * receives either (command | effect result, false) or (any thrown thing, true)
     */

    function next(arg, isErr) {
      try {
        var result;

        if (isErr) {
          result = iterator$1.throw(arg); // user handled the error, we can clear bookkept values

          clear();
        } else if (shouldCancel(arg)) {
          /**
              getting TASK_CANCEL automatically cancels the main task
              We can get this value here
               - By cancelling the parent task manually
              - By joining a Cancelled task
            **/
          mainTask.status = CANCELLED;
          /**
              Cancels the current effect; this will propagate the cancellation down to any called tasks
            **/

          next.cancel();
          /**
              If this Generator has a `return` method then invokes it
              This will jump to the finally block
            **/

          result = func(iterator$1.return)
            ? iterator$1.return(TASK_CANCEL)
            : {
                done: true,
                value: TASK_CANCEL,
              };
        } else if (shouldTerminate(arg)) {
          // We get TERMINATE flag, i.e. by taking from a channel that ended using `take` (and not `takem` used to trap End of channels)
          result = func(iterator$1.return)
            ? iterator$1.return()
            : {
                done: true,
              };
        } else {
          result = iterator$1.next(arg);
        }

        if (!result.done) {
          digestEffect(result.value, parentEffectId, next);
        } else {
          /**
              This Generator has ended, terminate the main task and notify the fork queue
            **/
          if (mainTask.status !== CANCELLED) {
            mainTask.status = DONE;
          }

          mainTask.cont(result.value);
        }
      } catch (error) {
        if (mainTask.status === CANCELLED) {
          throw error;
        }

        mainTask.status = ABORTED;
        mainTask.cont(error, true);
      }
    }

    function runEffect(effect, effectId, currCb) {
      /**
          each effect runner must attach its own logic of cancellation to the provided callback
          it allows this generator to propagate cancellation downward.
           ATTENTION! effect runners must setup the cancel logic by setting cb.cancel = [cancelMethod]
          And the setup must occur before calling the callback
           This is a sort of inversion of control: called async functions are responsible
          of completing the flow by calling the provided continuation; while caller functions
          are responsible for aborting the current flow by calling the attached cancel function
           Library users can attach their own cancellation logic to promises by defining a
          promise[CANCEL] method in their returned promises
          ATTENTION! calling cancel must have no effect on an already completed or cancelled effect
        **/
      if (promise(effect)) {
        resolvePromise(effect, currCb);
      } else if (iterator(effect)) {
        // resolve iterator
        proc(
          env,
          effect,
          task.context,
          effectId,
          meta,
          /* isRoot */
          false,
          currCb
        );
      } else if (effect && effect[IO]) {
        var effectRunner = effectRunnerMap[effect.type];
        effectRunner(env, effect.payload, currCb, executingContext);
      } else {
        // anything else returned as is
        currCb(effect);
      }
    }

    function digestEffect(effect, parentEffectId, cb, label) {
      if (label === void 0) {
        label = "";
      }

      var effectId = nextSagaId();
      env.sagaMonitor &&
        env.sagaMonitor.effectTriggered({
          effectId: effectId,
          parentEffectId: parentEffectId,
          label: label,
          effect: effect,
        });
      /**
          completion callback and cancel callback are mutually exclusive
          We can't cancel an already completed effect
          And We can't complete an already cancelled effectId
        **/

      var effectSettled; // Completion callback passed to the appropriate effect runner

      function currCb(res, isErr) {
        if (effectSettled) {
          return;
        }

        effectSettled = true;
        cb.cancel = noop; // defensive measure

        if (env.sagaMonitor) {
          if (isErr) {
            env.sagaMonitor.effectRejected(effectId, res);
          } else {
            env.sagaMonitor.effectResolved(effectId, res);
          }
        }

        if (isErr) {
          setCrashedEffect(effect);
        }

        cb(res, isErr);
      } // tracks down the current cancel

      currCb.cancel = noop; // setup cancellation logic on the parent cb

      cb.cancel = function () {
        // prevents cancelling an already completed effect
        if (effectSettled) {
          return;
        }

        effectSettled = true;
        currCb.cancel(); // propagates cancel downward

        currCb.cancel = noop; // defensive measure

        env.sagaMonitor && env.sagaMonitor.effectCancelled(effectId);
      };

      finalRunEffect(effect, effectId, currCb);
    }
  }
  function runSaga(_ref, saga) {
    var _ref$channel = _ref.channel,
      channel = _ref$channel === void 0 ? stdChannel() : _ref$channel,
      dispatch = _ref.dispatch,
      getState = _ref.getState,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? {} : _ref$context,
      sagaMonitor = _ref.sagaMonitor,
      effectMiddlewares = _ref.effectMiddlewares,
      _ref$onError = _ref.onError,
      onError = _ref$onError === void 0 ? logError : _ref$onError;

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var iterator$1 = saga.apply(void 0, args);

    var effectId = nextSagaId();

    if (sagaMonitor) {
      // monitors are expected to have a certain interface, let's fill-in any missing ones
      sagaMonitor.rootSagaStarted = sagaMonitor.rootSagaStarted || noop;
      sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || noop;
      sagaMonitor.effectResolved = sagaMonitor.effectResolved || noop;
      sagaMonitor.effectRejected = sagaMonitor.effectRejected || noop;
      sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || noop;
      sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || noop;
      sagaMonitor.rootSagaStarted({
        effectId: effectId,
        saga: saga,
        args: args,
      });
    }

    var finalizeRunEffect;

    if (effectMiddlewares) {
      var middleware = compose.apply(void 0, effectMiddlewares);

      finalizeRunEffect = function finalizeRunEffect(runEffect) {
        return function (effect, effectId, currCb) {
          var plainRunEffect = function plainRunEffect(eff) {
            return runEffect(eff, effectId, currCb);
          };

          return middleware(plainRunEffect)(effect);
        };
      };
    } else {
      finalizeRunEffect = identity;
    }

    var env = {
      channel: channel,
      dispatch: wrapSagaDispatch(dispatch),
      getState: getState,
      sagaMonitor: sagaMonitor,
      onError: onError,
      finalizeRunEffect: finalizeRunEffect,
    };
    return immediately(function () {
      var task = proc(
        env,
        iterator$1,
        context,
        effectId,
        getMetaInfo(saga),
        /* isRoot */
        true,
        undefined
      );

      if (sagaMonitor) {
        sagaMonitor.effectResolved(effectId, task);
      }

      return task;
    });
  }

  function sagaMiddlewareFactory(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$context = _ref.context,
      context = _ref$context === void 0 ? {} : _ref$context,
      _ref$channel = _ref.channel,
      channel = _ref$channel === void 0 ? stdChannel() : _ref$channel,
      sagaMonitor = _ref.sagaMonitor,
      options = _objectWithoutPropertiesLoose(_ref, ["context", "channel", "sagaMonitor"]);

    var boundRunSaga;

    function sagaMiddleware(_ref2) {
      var getState = _ref2.getState,
        dispatch = _ref2.dispatch;
      boundRunSaga = runSaga.bind(
        null,
        _extends({}, options, {
          context: context,
          channel: channel,
          dispatch: dispatch,
          getState: getState,
          sagaMonitor: sagaMonitor,
        })
      );
      return function (next) {
        return function (action) {
          if (sagaMonitor && sagaMonitor.actionDispatched) {
            sagaMonitor.actionDispatched(action);
          }

          var result = next(action); // hit reducers

          channel.put(action);
          return result;
        };
      };
    }

    sagaMiddleware.run = function () {
      return boundRunSaga.apply(void 0, arguments);
    };

    sagaMiddleware.setContext = function (props) {
      assignWithSymbols(context, props);
    };

    return sagaMiddleware;
  }

  function n(n) {
    for (var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++) t[e - 1] = arguments[e];
    throw Error(
      "[Immer] minified error nr: " +
        n +
        (t.length
          ? " " +
            t
              .map(function (n) {
                return "'" + n + "'";
              })
              .join(",")
          : "") +
        ". Find the full error at: https://bit.ly/3cXEKWf"
    );
  }
  function r(n) {
    return !!n && !!n[Q];
  }
  function t(n) {
    return (
      !!n &&
      ((function (n) {
        if (!n || "object" != typeof n) return !1;
        var r = Object.getPrototypeOf(n);
        if (null === r) return !0;
        var t = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
        return "function" == typeof t && Function.toString.call(t) === Z;
      })(n) ||
        Array.isArray(n) ||
        !!n[L] ||
        !!n.constructor[L] ||
        s(n) ||
        v(n))
    );
  }
  function i(n, r, t) {
    void 0 === t && (t = !1),
      0 === o(n)
        ? (t ? Object.keys : nn)(n).forEach(function (e) {
            (t && "symbol" == typeof e) || r(e, n[e], n);
          })
        : n.forEach(function (t, e) {
            return r(e, t, n);
          });
  }
  function o(n) {
    var r = n[Q];
    return r ? (r.i > 3 ? r.i - 4 : r.i) : Array.isArray(n) ? 1 : s(n) ? 2 : v(n) ? 3 : 0;
  }
  function u(n, r) {
    return 2 === o(n) ? n.has(r) : Object.prototype.hasOwnProperty.call(n, r);
  }
  function a(n, r) {
    return 2 === o(n) ? n.get(r) : n[r];
  }
  function f(n, r, t) {
    var e = o(n);
    2 === e ? n.set(r, t) : 3 === e ? (n.delete(r), n.add(t)) : (n[r] = t);
  }
  function c(n, r) {
    return n === r ? 0 !== n || 1 / n == 1 / r : n != n && r != r;
  }
  function s(n) {
    return X && n instanceof Map;
  }
  function v(n) {
    return q && n instanceof Set;
  }
  function p(n) {
    return n.o || n.t;
  }
  function l(n) {
    if (Array.isArray(n)) return Array.prototype.slice.call(n);
    var r = rn(n);
    delete r[Q];
    for (var t = nn(r), e = 0; e < t.length; e++) {
      var i = t[e],
        o = r[i];
      !1 === o.writable && ((o.writable = !0), (o.configurable = !0)),
        (o.get || o.set) && (r[i] = { configurable: !0, writable: !0, enumerable: o.enumerable, value: n[i] });
    }
    return Object.create(Object.getPrototypeOf(n), r);
  }
  function d(n, e) {
    return (
      void 0 === e && (e = !1),
      y(n) || r(n) || !t(n)
        ? n
        : (o(n) > 1 && (n.set = n.add = n.clear = n.delete = h),
          Object.freeze(n),
          e &&
            i(
              n,
              function (n, r) {
                return d(r, !0);
              },
              !0
            ),
          n)
    );
  }
  function h() {
    n(2);
  }
  function y(n) {
    return null == n || "object" != typeof n || Object.isFrozen(n);
  }
  function b(r) {
    var t = tn[r];
    return t || n(18, r), t;
  }
  function _() {
    return U;
  }
  function j(n, r) {
    r && (b("Patches"), (n.u = []), (n.s = []), (n.v = r));
  }
  function g(n) {
    O(n), n.p.forEach(S), (n.p = null);
  }
  function O(n) {
    n === U && (U = n.l);
  }
  function w(n) {
    return (U = { p: [], l: U, h: n, m: !0, _: 0 });
  }
  function S(n) {
    var r = n[Q];
    0 === r.i || 1 === r.i ? r.j() : (r.g = !0);
  }
  function P(r, e) {
    e._ = e.p.length;
    var i = e.p[0],
      o = void 0 !== r && r !== i;
    return (
      e.h.O || b("ES5").S(e, r, o),
      o
        ? (i[Q].P && (g(e), n(4)), t(r) && ((r = M(e, r)), e.l || x(e, r)), e.u && b("Patches").M(i[Q], r, e.u, e.s))
        : (r = M(e, i, [])),
      g(e),
      e.u && e.v(e.u, e.s),
      r !== H ? r : void 0
    );
  }
  function M(n, r, t) {
    if (y(r)) return r;
    var e = r[Q];
    if (!e)
      return (
        i(
          r,
          function (i, o) {
            return A(n, e, r, i, o, t);
          },
          !0
        ),
        r
      );
    if (e.A !== n) return r;
    if (!e.P) return x(n, e.t, !0), e.t;
    if (!e.I) {
      (e.I = !0), e.A._--;
      var o = 4 === e.i || 5 === e.i ? (e.o = l(e.k)) : e.o;
      i(3 === e.i ? new Set(o) : o, function (r, i) {
        return A(n, e, o, r, i, t);
      }),
        x(n, o, !1),
        t && n.u && b("Patches").R(e, t, n.u, n.s);
    }
    return e.o;
  }
  function A(e, i, o, a, c, s) {
    if (r(c)) {
      var v = M(e, c, s && i && 3 !== i.i && !u(i.D, a) ? s.concat(a) : void 0);
      if ((f(o, a, v), !r(v))) return;
      e.m = !1;
    }
    if (t(c) && !y(c)) {
      if (!e.h.F && e._ < 1) return;
      M(e, c), (i && i.A.l) || x(e, c);
    }
  }
  function x(n, r, t) {
    void 0 === t && (t = !1), n.h.F && n.m && d(r, t);
  }
  function z(n, r) {
    var t = n[Q];
    return (t ? p(t) : n)[r];
  }
  function I(n, r) {
    if (r in n)
      for (var t = Object.getPrototypeOf(n); t; ) {
        var e = Object.getOwnPropertyDescriptor(t, r);
        if (e) return e;
        t = Object.getPrototypeOf(t);
      }
  }
  function k(n) {
    n.P || ((n.P = !0), n.l && k(n.l));
  }
  function E(n) {
    n.o || (n.o = l(n.t));
  }
  function R(n, r, t) {
    var e = s(r)
      ? b("MapSet").N(r, t)
      : v(r)
      ? b("MapSet").T(r, t)
      : n.O
      ? (function (n, r) {
          var t = Array.isArray(n),
            e = { i: t ? 1 : 0, A: r ? r.A : _(), P: !1, I: !1, D: {}, l: r, t: n, k: null, o: null, j: null, C: !1 },
            i = e,
            o = en;
          t && ((i = [e]), (o = on));
          var u = Proxy.revocable(i, o),
            a = u.revoke,
            f = u.proxy;
          return (e.k = f), (e.j = a), f;
        })(r, t)
      : b("ES5").J(r, t);
    return (t ? t.A : _()).p.push(e), e;
  }
  function D(e) {
    return (
      r(e) || n(22, e),
      (function n(r) {
        if (!t(r)) return r;
        var e,
          u = r[Q],
          c = o(r);
        if (u) {
          if (!u.P && (u.i < 4 || !b("ES5").K(u))) return u.t;
          (u.I = !0), (e = F(r, c)), (u.I = !1);
        } else e = F(r, c);
        return (
          i(e, function (r, t) {
            (u && a(u.t, r) === t) || f(e, r, n(t));
          }),
          3 === c ? new Set(e) : e
        );
      })(e)
    );
  }
  function F(n, r) {
    switch (r) {
      case 2:
        return new Map(n);
      case 3:
        return Array.from(n);
    }
    return l(n);
  }
  var G,
    U,
    W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
    X = "undefined" != typeof Map,
    q = "undefined" != typeof Set,
    B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
    H = W ? Symbol.for("immer-nothing") : (((G = {})["immer-nothing"] = !0), G),
    L = W ? Symbol.for("immer-draftable") : "__$immer_draftable",
    Q = W ? Symbol.for("immer-state") : "__$immer_state",
    Z = "" + Object.prototype.constructor,
    nn =
      "undefined" != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : void 0 !== Object.getOwnPropertySymbols
        ? function (n) {
            return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
          }
        : Object.getOwnPropertyNames,
    rn =
      Object.getOwnPropertyDescriptors ||
      function (n) {
        var r = {};
        return (
          nn(n).forEach(function (t) {
            r[t] = Object.getOwnPropertyDescriptor(n, t);
          }),
          r
        );
      },
    tn = {},
    en = {
      get: function (n, r) {
        if (r === Q) return n;
        var e = p(n);
        if (!u(e, r))
          return (function (n, r, t) {
            var e,
              i = I(r, t);
            return i ? ("value" in i ? i.value : null === (e = i.get) || void 0 === e ? void 0 : e.call(n.k)) : void 0;
          })(n, e, r);
        var i = e[r];
        return n.I || !t(i) ? i : i === z(n.t, r) ? (E(n), (n.o[r] = R(n.A.h, i, n))) : i;
      },
      has: function (n, r) {
        return r in p(n);
      },
      ownKeys: function (n) {
        return Reflect.ownKeys(p(n));
      },
      set: function (n, r, t) {
        var e = I(p(n), r);
        if (null == e ? void 0 : e.set) return e.set.call(n.k, t), !0;
        if (!n.P) {
          var i = z(p(n), r),
            o = null == i ? void 0 : i[Q];
          if (o && o.t === t) return (n.o[r] = t), (n.D[r] = !1), !0;
          if (c(t, i) && (void 0 !== t || u(n.t, r))) return !0;
          E(n), k(n);
        }
        return (n.o[r] === t && "number" != typeof t) || ((n.o[r] = t), (n.D[r] = !0), !0);
      },
      deleteProperty: function (n, r) {
        return void 0 !== z(n.t, r) || r in n.t ? ((n.D[r] = !1), E(n), k(n)) : delete n.D[r], n.o && delete n.o[r], !0;
      },
      getOwnPropertyDescriptor: function (n, r) {
        var t = p(n),
          e = Reflect.getOwnPropertyDescriptor(t, r);
        return e
          ? { writable: !0, configurable: 1 !== n.i || "length" !== r, enumerable: e.enumerable, value: t[r] }
          : e;
      },
      defineProperty: function () {
        n(11);
      },
      getPrototypeOf: function (n) {
        return Object.getPrototypeOf(n.t);
      },
      setPrototypeOf: function () {
        n(12);
      },
    },
    on = {};
  i(en, function (n, r) {
    on[n] = function () {
      return (arguments[0] = arguments[0][0]), r.apply(this, arguments);
    };
  }),
    (on.deleteProperty = function (r, t) {
      return en.deleteProperty.call(this, r[0], t);
    }),
    (on.set = function (r, t, e) {
      return en.set.call(this, r[0], t, e, r[0]);
    });
  var un = (function () {
      function e(r) {
        var e = this;
        (this.O = B),
          (this.F = !0),
          (this.produce = function (r, i, o) {
            if ("function" == typeof r && "function" != typeof i) {
              var u = i;
              i = r;
              var a = e;
              return function (n) {
                var r = this;
                void 0 === n && (n = u);
                for (var t = arguments.length, e = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) e[o - 1] = arguments[o];
                return a.produce(n, function (n) {
                  var t;
                  return (t = i).call.apply(t, [r, n].concat(e));
                });
              };
            }
            var f;
            if (("function" != typeof i && n(6), void 0 !== o && "function" != typeof o && n(7), t(r))) {
              var c = w(e),
                s = R(e, r, void 0),
                v = !0;
              try {
                (f = i(s)), (v = !1);
              } finally {
                v ? g(c) : O(c);
              }
              return "undefined" != typeof Promise && f instanceof Promise
                ? f.then(
                    function (n) {
                      return j(c, o), P(n, c);
                    },
                    function (n) {
                      throw (g(c), n);
                    }
                  )
                : (j(c, o), P(f, c));
            }
            if (!r || "object" != typeof r) {
              if ((f = i(r)) === H) return;
              return void 0 === f && (f = r), e.F && d(f, !0), f;
            }
            n(21, r);
          }),
          (this.produceWithPatches = function (n, r) {
            return "function" == typeof n
              ? function (r) {
                  for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                    i[o - 1] = arguments[o];
                  return e.produceWithPatches(r, function (r) {
                    return n.apply(void 0, [r].concat(i));
                  });
                }
              : [
                  e.produce(n, r, function (n, r) {
                    (t = n), (i = r);
                  }),
                  t,
                  i,
                ];
            var t, i;
          }),
          "boolean" == typeof (null == r ? void 0 : r.useProxies) && this.setUseProxies(r.useProxies),
          "boolean" == typeof (null == r ? void 0 : r.autoFreeze) && this.setAutoFreeze(r.autoFreeze);
      }
      var i = e.prototype;
      return (
        (i.createDraft = function (e) {
          t(e) || n(8), r(e) && (e = D(e));
          var i = w(this),
            o = R(this, e, void 0);
          return (o[Q].C = !0), O(i), o;
        }),
        (i.finishDraft = function (r, t) {
          var e = r && r[Q];
          var i = e.A;
          return j(i, t), P(void 0, i);
        }),
        (i.setAutoFreeze = function (n) {
          this.F = n;
        }),
        (i.setUseProxies = function (r) {
          r && !B && n(20), (this.O = r);
        }),
        (i.applyPatches = function (n, t) {
          var e;
          for (e = t.length - 1; e >= 0; e--) {
            var i = t[e];
            if (0 === i.path.length && "replace" === i.op) {
              n = i.value;
              break;
            }
          }
          var o = b("Patches").$;
          return r(n)
            ? o(n, t)
            : this.produce(n, function (n) {
                return o(n, t.slice(e + 1));
              });
        }),
        e
      );
    })(),
    an = new un(),
    fn = an.produce;
  an.produceWithPatches.bind(an);
  an.setAutoFreeze.bind(an);
  an.setUseProxies.bind(an);
  an.applyPatches.bind(an);
  an.createDraft.bind(an);
  an.finishDraft.bind(an);

  var FAKE_TOTAL_SIZE = 360000000;
  var FAKE_TOTAL_TIME = 30;
  var WIDTH = 156;
  var STROKE_WIDTH = 12;
  var RADIUS = WIDTH / 2 - STROKE_WIDTH / 2;
  var CENTER = WIDTH / 2;
  var CIRCUMFERENCE = Math.PI * RADIUS * 2;
  var CANCEL_UPLOAD = "CANCEL_UPLOAD";
  var START_UPLOAD = "START_UPLOAD";
  var UPDATE_FILE_COUNT = "UPDATE_FILE_COUNT";
  var UPDATE_RECIPIENTS_COUNT = "UPDATE_RECIPIENTS_COUNT";
  var UPDATE_TIME_REMAINING = "UPDATE_TIME_REMAINING";
  var UPDATE_TOTAL_SIZE = "UPDATE_TOTAL_SIZE";
  var UPDATE_UPLOADED_SIZE = "UPDATE_UPLOADED_SIZE";

  var initialState = {
    fileCount: 0,
    recipientsCount: 0,
    timeRemaining: 0,
    totalSize: 0,
    uploadedSize: 0,
    uploadInProgress: false,
  };
  var reducer = function reducer(state, _a) {
    if (state === void 0) {
      state = initialState;
    }

    var type = _a.type,
      payload = _a.payload;

    switch (type) {
      case CANCEL_UPLOAD: {
        return fn(state, function (draftState) {
          draftState.uploadInProgress = false;
        });
      }

      case START_UPLOAD: {
        return fn(state, function (draftState) {
          draftState.uploadInProgress = true;
        });
      }

      case UPDATE_FILE_COUNT: {
        return fn(state, function (draftState) {
          draftState.fileCount = payload;
        });
      }

      case UPDATE_RECIPIENTS_COUNT: {
        return fn(state, function (draftState) {
          draftState.recipientsCount = payload;
        });
      }

      case UPDATE_TIME_REMAINING: {
        return fn(state, function (draftState) {
          draftState.timeRemaining = payload;
        });
      }

      case UPDATE_TOTAL_SIZE: {
        return fn(state, function (draftState) {
          draftState.totalSize = payload;
        });
      }

      case UPDATE_UPLOADED_SIZE: {
        return fn(state, function (draftState) {
          draftState.uploadedSize = payload;
        });
      }

      default:
        return state;
    }
  };

  var done = function done(value) {
    return {
      done: true,
      value: value,
    };
  };

  var qEnd = {};
  function safeName(patternOrChannel) {
    if (channel$1(patternOrChannel)) {
      return "channel";
    }

    if (stringableFunc(patternOrChannel)) {
      return String(patternOrChannel);
    }

    if (func(patternOrChannel)) {
      return patternOrChannel.name;
    }

    return String(patternOrChannel);
  }
  function fsmIterator(fsm, startState, name) {
    var stateUpdater,
      errorState,
      effect,
      nextState = startState;

    function next(arg, error) {
      if (nextState === qEnd) {
        return done(arg);
      }

      if (error && !errorState) {
        nextState = qEnd;
        throw error;
      } else {
        stateUpdater && stateUpdater(arg);
        var currentState = error ? fsm[errorState](error) : fsm[nextState]();
        nextState = currentState.nextState;
        effect = currentState.effect;
        stateUpdater = currentState.stateUpdater;
        errorState = currentState.errorState;
        return nextState === qEnd ? done(arg) : effect;
      }
    }

    return makeIterator(
      next,
      function (error) {
        return next(null, error);
      },
      name
    );
  }

  function takeLatest(patternOrChannel, worker) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var yTake = {
      done: false,
      value: take(patternOrChannel),
    };

    var yFork = function yFork(ac) {
      return {
        done: false,
        value: fork.apply(void 0, [worker].concat(args, [ac])),
      };
    };

    var yCancel = function yCancel(task) {
      return {
        done: false,
        value: cancel$1(task),
      };
    };

    var task, action;

    var setTask = function setTask(t) {
      return (task = t);
    };

    var setAction = function setAction(ac) {
      return (action = ac);
    };

    return fsmIterator(
      {
        q1: function q1() {
          return {
            nextState: "q2",
            effect: yTake,
            stateUpdater: setAction,
          };
        },
        q2: function q2() {
          return task
            ? {
                nextState: "q3",
                effect: yCancel(task),
              }
            : {
                nextState: "q1",
                effect: yFork(action),
                stateUpdater: setTask,
              };
        },
        q3: function q3() {
          return {
            nextState: "q1",
            effect: yFork(action),
            stateUpdater: setTask,
          };
        },
      },
      "q1",
      "takeLatest(" + safeName(patternOrChannel) + ", " + worker.name + ")"
    );
  }
  function takeLatest$1(patternOrChannel, worker) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    return fork.apply(void 0, [takeLatest, patternOrChannel, worker].concat(args));
  }

  var cancelUpload = function cancelUpload() {
    return {
      type: CANCEL_UPLOAD,
      payload: null,
    };
  };
  var startUpload = function startUpload() {
    return {
      type: START_UPLOAD,
      payload: null,
    };
  };
  var updateFileCount = function updateFileCount(count) {
    return {
      type: UPDATE_FILE_COUNT,
      payload: count,
    };
  };
  var updateRecipientsCount = function updateRecipientsCount(count) {
    return {
      type: UPDATE_RECIPIENTS_COUNT,
      payload: count,
    };
  };
  var updateTimeRemaining = function updateTimeRemaining(time) {
    return {
      type: UPDATE_TIME_REMAINING,
      payload: time,
    };
  };
  var updateTotalSize = function updateTotalSize(size) {
    return {
      type: UPDATE_TOTAL_SIZE,
      payload: size,
    };
  };
  var updateUploadedSize = function updateUploadedSize(size) {
    return {
      type: UPDATE_UPLOADED_SIZE,
      payload: size,
    };
  };

  /**
   * Fakes some API/FileReader stuff that happens when upload begins
   */

  function start() {
    var err_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 6, , 7]);

          return [
            4,
            /*yield*/
            put(updateFileCount(11)),
          ];

        case 1:
          _a.sent();

          return [
            4,
            /*yield*/
            put(updateRecipientsCount(4)),
          ];

        case 2:
          _a.sent();

          return [
            4,
            /*yield*/
            put(updateTimeRemaining(FAKE_TOTAL_TIME)),
          ];

        case 3:
          _a.sent();

          return [
            4,
            /*yield*/
            put(updateTotalSize(FAKE_TOTAL_SIZE)),
          ];

        case 4:
          _a.sent();

          return [
            4,
            /*yield*/
            put(updateUploadedSize(1)),
          ];

        case 5:
          _a.sent();

          return [
            3,
            /*break*/
            7,
          ];

        case 6:
          err_1 = _a.sent();
          console.error(err_1);
          return [
            3,
            /*break*/
            7,
          ];

        case 7:
          return [
            2,
            /*return*/
          ];
      }
    });
  }
  /**
   * Fakes some upload time estimates
   */

  function updateSize() {
    var state, err_2;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 3, , 4]);

          return [
            4,
            /*yield*/
            select(),
          ];

        case 1:
          state = _a.sent();
          return [
            4,
            /*yield*/
            put(updateTimeRemaining(FAKE_TOTAL_TIME - (FAKE_TOTAL_TIME * state.uploadedSize) / FAKE_TOTAL_SIZE)),
          ];

        case 2:
          _a.sent();

          return [
            3,
            /*break*/
            4,
          ];

        case 3:
          err_2 = _a.sent();
          console.error(err_2);
          return [
            3,
            /*break*/
            4,
          ];

        case 4:
          return [
            2,
            /*return*/
          ];
      }
    });
  }
  /**
   * Fakes some stuff that happens when upload is cancelled
   */

  function cancel() {
    var err_3;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 4, , 5]);

          return [
            4,
            /*yield*/
            put(updateFileCount(0)),
          ];

        case 1:
          _a.sent();

          return [
            4,
            /*yield*/
            put(updateRecipientsCount(0)),
          ];

        case 2:
          _a.sent();

          return [
            4,
            /*yield*/
            put(updateTotalSize(0)),
          ];

        case 3:
          _a.sent();

          return [
            3,
            /*break*/
            5,
          ];

        case 4:
          err_3 = _a.sent();
          console.error(err_3);
          return [
            3,
            /*break*/
            5,
          ];

        case 5:
          return [
            2,
            /*return*/
          ];
      }
    });
  }

  function fileUploader() {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [
            4,
            /*yield*/
            takeLatest$1(START_UPLOAD, start),
          ];

        case 1:
          _a.sent();

          return [
            4,
            /*yield*/
            takeLatest$1(CANCEL_UPLOAD, cancel),
          ];

        case 2:
          _a.sent();

          return [
            4,
            /*yield*/
            takeLatest$1(UPDATE_UPLOADED_SIZE, updateSize),
          ];

        case 3:
          _a.sent();

          return [
            2,
            /*return*/
          ];
      }
    });
  }

  /**
   * The file uploader's frame
   *
   * @returns ReactElement
   */

  function FileUploader$2(_a) {
    var children = _a.children;
    var Box = Ye.div(
      templateObject_1$7 ||
        (templateObject_1$7 = __makeTemplateObject(
          [
            "\n    background: #fff;\n    border-radius: 10px;\n    box-shadow: 0 0 12px 0 rgb(0 0 0 / 10%), 0 10px 30px 0 rgb(0 0 0 / 20%);\n    height: 25.625em;\n    left: 5em;\n    margin: -12.8125em 0 0;\n    position: absolute;\n    text-align: center;\n    top: 50%;\n    transition: transform .5s cubic-bezier(.77,0,.175,1);\n    width: 17.5em;\n    z-index: 30;\n  ",
          ],
          [
            "\n    background: #fff;\n    border-radius: 10px;\n    box-shadow: 0 0 12px 0 rgb(0 0 0 / 10%), 0 10px 30px 0 rgb(0 0 0 / 20%);\n    height: 25.625em;\n    left: 5em;\n    margin: -12.8125em 0 0;\n    position: absolute;\n    text-align: center;\n    top: 50%;\n    transition: transform .5s cubic-bezier(.77,0,.175,1);\n    width: 17.5em;\n    z-index: 30;\n  ",
          ]
        ))
    );
    return React__default["default"].createElement(Box, null, children);
  }
  var templateObject_1$7;

  /**
   * Generic button with a "secondary" state
   *
   * @returns ReactElement
   */

  function Button(_a) {
    var children = _a.children,
      onClick = _a.onClick,
      primary = _a.primary;
    var Button = Ye.button(
      templateObject_3$3 ||
        (templateObject_3$3 = __makeTemplateObject(
          [
            "\n    border-radius: 20px;\n    border: 1px solid ",
            ";\n    cursor: pointer;\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n    width: 156px;\n\n    &:active,\n    &:focus {\n      outline: none;\n    }\n\n    ",
            "\n  ",
          ],
          [
            "\n    border-radius: 20px;\n    border: 1px solid ",
            ";\n    cursor: pointer;\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n    width: 156px;\n\n    &:active,\n    &:focus {\n      outline: none;\n    }\n\n    ",
            "\n  ",
          ]
        )),
      COLORS$1.WTR_BLUE,
      function (_a) {
        var primary = _a.primary;
        return primary
          ? _e(
              templateObject_1$6 ||
                (templateObject_1$6 = __makeTemplateObject(
                  ["\n        background-color: ", ";\n        color: ", ";\n      "],
                  ["\n        background-color: ", ";\n        color: ", ";\n      "]
                )),
              COLORS$1.WTR_BLUE,
              COLORS$1.WHITE
            )
          : _e(
              templateObject_2$6 ||
                (templateObject_2$6 = __makeTemplateObject(
                  ["\n        background-color: ", ";\n        color: ", ";\n      "],
                  ["\n        background-color: ", ";\n        color: ", ";\n      "]
                )),
              COLORS$1.WHITE,
              COLORS$1.WTR_BLUE
            );
      }
    );
    return React__default["default"].createElement(
      Button,
      {
        onClick: onClick,
        primary: primary,
      },
      children
    );
  }
  var templateObject_1$6, templateObject_2$6, templateObject_3$3;

  /**
   * IRL this would wrap a <input type="file">, or FileReader, or something
   *
   * @returns ReactElement
   */

  function File() {
    var uploadedSize = useSelector(function (state) {
      return {
        uploadedSize: state.uploadedSize,
      };
    }).uploadedSize;
    var dispatch = useDispatch();
    React.useEffect(
      function startUploading() {
        var timeoutId = window.setTimeout(function () {
          var updatedUploadedSize = uploadedSize + 1000000;

          if (updatedUploadedSize > FAKE_TOTAL_SIZE) {
            dispatch(cancelUpload());
          } else {
            dispatch(updateUploadedSize(updatedUploadedSize));
          }
        }, 250);
        return function cleanup() {
          clearTimeout(timeoutId);
        };
      },
      [uploadedSize]
    );
    return React__default["default"].createElement(React.Fragment, null);
  }

  function formatFileSize(size) {
    if (size > 999999) {
      return Math.round(size / 1000000) + "GB";
    } else if (size > 99999) {
      return Math.round(size / 100000) + "MB";
    } else if (size > 999) {
      return Math.round(size / 1000) + "KB";
    } else {
      return size + "B";
    }
  }
  /**
   * It holds the button and the dial
   *
   * @returns ReactElement
   */

  function Info(_a) {
    var fileCount = _a.fileCount,
      recipientsCount = _a.recipientsCount,
      timeRemaining = _a.timeRemaining,
      totalSize = _a.totalSize,
      uploadedSize = _a.uploadedSize;
    var InfoInner = Ye.div(
      templateObject_1$5 ||
        (templateObject_1$5 = __makeTemplateObject(
          [
            "\n    font-size: 16px;\n    font-weight: 100;\n    line-height: 22px;\n    margin-top: 230px;\n    text-align: center;\n  ",
          ],
          [
            "\n    font-size: 16px;\n    font-weight: 100;\n    line-height: 22px;\n    margin-top: 230px;\n    text-align: center;\n  ",
          ]
        ))
    );
    var InfoHeader = Ye.h5(
      templateObject_2$5 ||
        (templateObject_2$5 = __makeTemplateObject(
          ["\n    font-size: 24px;\n    font-weight: 100;\n    margin: 20px 0 5px 0;\n    padding: 0;\n  "],
          ["\n    font-size: 24px;\n    font-weight: 100;\n    margin: 20px 0 5px 0;\n    padding: 0;\n  "]
        ))
    );
    return React__default["default"].createElement(
      InfoInner,
      null,
      React__default["default"].createElement(InfoHeader, null, "Transferring\u2026"),
      "Sending ",
      fileCount,
      " files to ",
      recipientsCount,
      " recipients",
      React__default["default"].createElement("br", null),
      formatFileSize(uploadedSize),
      " of ",
      formatFileSize(totalSize),
      " uploaded",
      React__default["default"].createElement("br", null),
      Math.round(timeRemaining),
      " minutes remaining",
      React__default["default"].createElement("br", null)
    );
  }
  var templateObject_1$5, templateObject_2$5;

  /**
   * It shows information about a file upload
   *
   * @returns ReactElement
   */

  function FileUploader$1(_a) {
    var buttonOnClick = _a.buttonOnClick,
      fileCount = _a.fileCount,
      recipientsCount = _a.recipientsCount,
      timeRemaining = _a.timeRemaining,
      totalSize = _a.totalSize,
      uploadedSize = _a.uploadedSize,
      uploadInProgress = _a.uploadInProgress;
    var ButtonWrapper = Ye.div(
      templateObject_1$4 ||
        (templateObject_1$4 = __makeTemplateObject(
          ["\n    position: absolute;\n    bottom: 15px;\n    left: 50%;\n    margin-left: -78px;\n  "],
          ["\n    position: absolute;\n    bottom: 15px;\n    left: 50%;\n    margin-left: -78px;\n  "]
        ))
    );
    var Dial = Ye.svg(
      templateObject_2$4 ||
        (templateObject_2$4 = __makeTemplateObject(
          [
            "\n    position: absolute;\n    height: ",
            "px;\n    width: ",
            "px;\n    top: 30px;\n    left: 50%;\n    margin-left: -",
            "px;\n    z-index: 2;\n  ",
          ],
          [
            "\n    position: absolute;\n    height: ",
            "px;\n    width: ",
            "px;\n    top: 30px;\n    left: 50%;\n    margin-left: -",
            "px;\n    z-index: 2;\n  ",
          ]
        )),
      WIDTH,
      WIDTH,
      WIDTH / 2
    );
    var Track = Ye.circle(
      templateObject_3$2 ||
        (templateObject_3$2 = __makeTemplateObject(
          [
            "\n    fill: none;\n    stroke-dasharray: ",
            ";\n    stroke-dashoffset: 0;\n    stroke-width: ",
            "px;\n    stroke: ",
            ";\n  ",
          ],
          [
            "\n    fill: none;\n    stroke-dasharray: ",
            ";\n    stroke-dashoffset: 0;\n    stroke-width: ",
            "px;\n    stroke: ",
            ";\n  ",
          ]
        )),
      CIRCUMFERENCE,
      STROKE_WIDTH,
      COLORS$1.WTR_TRACK_GRAY
    );
    var Label = Ye.div(
      templateObject_4 ||
        (templateObject_4 = __makeTemplateObject(
          [
            "\n    font-size: 57px;\n    height: ",
            "px;\n    left: 50%;\n    line-height: ",
            "px;\n    margin-left: -",
            "px;\n    position: absolute;\n    position: absolute;\n    top: 25px;\n    width: ",
            "px;\n    z-index: 3;\n  ",
          ],
          [
            "\n    font-size: 57px;\n    height: ",
            "px;\n    left: 50%;\n    line-height: ",
            "px;\n    margin-left: -",
            "px;\n    position: absolute;\n    position: absolute;\n    top: 25px;\n    width: ",
            "px;\n    z-index: 3;\n  ",
          ]
        )),
      WIDTH,
      WIDTH,
      WIDTH / 2,
      WIDTH
    );
    var Sign = Ye.sup(
      templateObject_5 ||
        (templateObject_5 = __makeTemplateObject(
          ["\n    font-size: 24px;\n    color: #999;\n  "],
          ["\n    font-size: 24px;\n    color: #999;\n  "]
        ))
    );
    return React__default["default"].createElement(
      React__default["default"].Fragment,
      null,
      uploadInProgress &&
        React__default["default"].createElement(
          React__default["default"].Fragment,
          null,
          React__default["default"].createElement(File, null),
          React__default["default"].createElement(
            Dial,
            {
              viewBox: "0 0 " + WIDTH + " " + WIDTH,
            },
            React__default["default"].createElement(Track, {
              cx: CENTER,
              cy: CENTER,
              r: RADIUS,
            })
          ),
          React__default["default"].createElement(
            Label,
            null,
            Math.round((uploadedSize / totalSize) * 100),
            React__default["default"].createElement(Sign, null, "%")
          ),
          React__default["default"].createElement(Info, {
            fileCount: fileCount,
            recipientsCount: recipientsCount,
            timeRemaining: timeRemaining,
            totalSize: totalSize,
            uploadedSize: uploadedSize,
          })
        ),
      React__default["default"].createElement(
        ButtonWrapper,
        null,
        React__default["default"].createElement(
          Button,
          {
            onClick: buttonOnClick,
            primary: !uploadInProgress,
          },
          uploadInProgress ? "Cancel" : "Transfer"
        )
      )
    );
  }
  var templateObject_1$4, templateObject_2$4, templateObject_3$2, templateObject_4, templateObject_5;

  /**
   * It orchestrates various UI features
   *
   * @returns ReactElement
   */

  function FileUploaderContainer() {
    var _a = useSelector(function (state) {
        return {
          fileCount: state.fileCount,
          recipientsCount: state.recipientsCount,
          timeRemaining: state.timeRemaining,
          totalSize: state.totalSize,
          uploadedSize: state.uploadedSize,
          uploadInProgress: state.uploadInProgress,
        };
      }),
      fileCount = _a.fileCount,
      recipientsCount = _a.recipientsCount,
      timeRemaining = _a.timeRemaining,
      totalSize = _a.totalSize,
      uploadedSize = _a.uploadedSize,
      uploadInProgress = _a.uploadInProgress;

    var dispatch = useDispatch();
    React.useEffect(
      function dirtyOldSchoolRendering() {
        var progressCircleEl = document.getElementById("progress-circle");
        if (!progressCircleEl) return;

        if (uploadInProgress && uploadedSize && totalSize) {
          progressCircleEl.style.opacity = "1";
          progressCircleEl.style.strokeDashoffset = (
            CIRCUMFERENCE -
            (CIRCUMFERENCE * uploadedSize) / totalSize
          ).toString();
        } else {
          progressCircleEl.style.opacity = "0";
        }
      },
      [totalSize, uploadedSize, uploadInProgress]
    );
    var buttonOnClick = React.useCallback(
      function () {
        dispatch(uploadInProgress ? cancelUpload() : startUpload());
      },
      [uploadInProgress]
    );
    return React__default["default"].createElement(FileUploader$1, {
      buttonOnClick: buttonOnClick,
      fileCount: fileCount,
      recipientsCount: recipientsCount,
      timeRemaining: timeRemaining,
      totalSize: totalSize,
      uploadedSize: uploadedSize,
      uploadInProgress: uploadInProgress,
    });
  }

  /**
   * A progress circle to be used outside Provider so it doesn't re-render
   *
   * @returns ReactElement
   */

  function ProgressCircle() {
    var Svg = Ye.svg(
      templateObject_1$3 ||
        (templateObject_1$3 = __makeTemplateObject(
          [
            "\n    position: absolute;\n    height: ",
            "px;\n    width: ",
            "px;\n    top: 30px;\n    margin-left: -",
            "px;\n    z-index: 2;\n  ",
          ],
          [
            "\n    position: absolute;\n    height: ",
            "px;\n    width: ",
            "px;\n    top: 30px;\n    margin-left: -",
            "px;\n    z-index: 2;\n  ",
          ]
        )),
      WIDTH,
      WIDTH,
      WIDTH / 2
    );
    var ProgressCircle = Ye.circle(
      templateObject_2$3 ||
        (templateObject_2$3 = __makeTemplateObject(
          [
            "\n    animation-duration: 2000ms;\n    animation-iteration-count: infinite;\n    animation-name: spin;\n    animation-timing-function: linear;\n    fill: none;\n    opacity: 0;\n    stroke-dasharray: ",
            ";\n    stroke-dashoffset: 0;\n    stroke-linecap: round;\n    stroke-width: ",
            "px;\n    stroke: ",
            ";\n    transform-origin: center;\n    transition: stroke-dasharray 250ms;\n\n    @keyframes spin {\n      from {\n        transform:rotate(0deg);\n      }\n      to {\n        transform:rotate(360deg);\n      }\n    }\n  ",
          ],
          [
            "\n    animation-duration: 2000ms;\n    animation-iteration-count: infinite;\n    animation-name: spin;\n    animation-timing-function: linear;\n    fill: none;\n    opacity: 0;\n    stroke-dasharray: ",
            ";\n    stroke-dashoffset: 0;\n    stroke-linecap: round;\n    stroke-width: ",
            "px;\n    stroke: ",
            ";\n    transform-origin: center;\n    transition: stroke-dasharray 250ms;\n\n    @keyframes spin {\n      from {\n        transform:rotate(0deg);\n      }\n      to {\n        transform:rotate(360deg);\n      }\n    }\n  ",
          ]
        )),
      CIRCUMFERENCE,
      STROKE_WIDTH,
      COLORS$1.WTR_BLUE
    );
    return React__default["default"].createElement(
      Svg,
      {
        viewBox: "0 0 " + WIDTH + " " + WIDTH,
      },
      React__default["default"].createElement(ProgressCircle, {
        cx: CENTER,
        cy: CENTER,
        id: "progress-circle",
        r: RADIUS,
      })
    );
  }
  var templateObject_1$3, templateObject_2$3;

  var sagaMiddleware = sagaMiddlewareFactory();
  var composeEnhancers = compose;
  var store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(fileUploader);
  var FileUploader = function () {
    return React.createElement(
      React.StrictMode,
      {},
      React.createElement(
        FileUploader$2,
        {},
        React.createElement(
          Provider,
          {
            store: store,
          },
          React.createElement(FileUploaderContainer)
        ),
        React.createElement(ProgressCircle)
      )
    );
  };

  /**
   * "we" SVG
   *
   * @returns ReactElement
   */

  function Logo() {
    var Svg = Ye.svg(
      templateObject_1$2 ||
        (templateObject_1$2 = __makeTemplateObject(
          ["\n    width: 52px;\n    height: 29px;\n  "],
          ["\n    width: 52px;\n    height: 29px;\n  "]
        ))
    );
    var Path = Ye.path(
      templateObject_2$2 ||
        (templateObject_2$2 = __makeTemplateObject(["\n    fill: #484a4d;\n  "], ["\n    fill: #484a4d;\n  "]))
    );
    return React__default["default"].createElement(
      Svg,
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 33 15.3",
        width: "2500",
        height: "1159",
      },
      React__default["default"].createElement(Path, {
        d:
          "M19 7.5C19 2.9 22.3.1 26.6.1 30.4.1 33 2 33 4.7c0 2.6-2.2 4.2-4.6 4.2-1.4 0-2.3-.2-3-.8-.2-.1-.3-.1-.3.2 0 1 .4 1.7 1 2.4.5.5 1.5.9 2.4.9 1 0 1.8-.2 2.6-.6s1.3-.2 1.7.4c.5.7-.1 1.6-.7 2.2-1 1-2.9 1.8-5.3 1.8-4.9-.3-7.7-3.5-7.8-7.9zm-9.9 3.1c.4 0 .8.2 1 .8l1.4 2.2c.5.8 1 1.4 1.9 1.4s1.5-.4 2-1.5c.6-1.3 1.3-3.1 1.8-5.3.7-2.6 1-4.1 1-5.3s-.4-2-1.8-2.3C14.5.1 11.8 0 9.1 0S3.7.1 1.8.5C.4.8 0 1.5 0 2.8s.3 2.8.9 5.3c.6 2.3 1.2 3.9 1.8 5.3.5 1.1 1 1.5 1.9 1.5s1.4-.6 1.9-1.4l1.4-2.2c.4-.4.7-.7 1.2-.7z",
      })
    );
  }
  var templateObject_1$2, templateObject_2$2;

  /**
   * These are just for show...
   *
   * @returns ReactElement
   */

  function FunButtons() {
    var Nav = Ye.ul(
      templateObject_1$1 ||
        (templateObject_1$1 = __makeTemplateObject(
          [
            "\n    background-clip: padding-box;\n    background: #fff;\n    border-radius: 5px;\n    border: 1px solid rgba(23,24,26,.11);\n    overflow: hidden;\n    padding: 0;\n    margin: 0;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    user-select: none;\n  ",
          ],
          [
            "\n    background-clip: padding-box;\n    background: #fff;\n    border-radius: 5px;\n    border: 1px solid rgba(23,24,26,.11);\n    overflow: hidden;\n    padding: 0;\n    margin: 0;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    user-select: none;\n  ",
          ]
        ))
    );
    var NavItem = Ye.li(
      templateObject_2$1 ||
        (templateObject_2$1 = __makeTemplateObject(
          [
            "\n    align-items: center;\n    border-right: 1px solid #d4d7d9;\n    display: inline-block;\n    padding: 5px 10px;\n  ",
          ],
          [
            "\n    align-items: center;\n    border-right: 1px solid #d4d7d9;\n    display: inline-block;\n    padding: 5px 10px;\n  ",
          ]
        ))
    );
    var NavLink = Ye.a(
      templateObject_3$1 ||
        (templateObject_3$1 = __makeTemplateObject(
          ["\n    color: inherit;\n    text-decoration: none;\n  "],
          ["\n    color: inherit;\n    text-decoration: none;\n  "]
        ))
    );
    return React__default["default"].createElement(
      Nav,
      null,
      React__default["default"].createElement(
        NavItem,
        null,
        React__default["default"].createElement(
          NavLink,
          {
            href: "#",
          },
          "Help"
        )
      ),
      React__default["default"].createElement(
        NavItem,
        null,
        React__default["default"].createElement(
          NavLink,
          {
            href: "#",
          },
          "About us"
        )
      ),
      React__default["default"].createElement(
        NavItem,
        null,
        React__default["default"].createElement(
          NavLink,
          {
            href: "#",
          },
          "Got Plus?"
        )
      )
    );
  }
  var templateObject_1$1, templateObject_2$1, templateObject_3$1;

  /**
   * Just a place for us to hang out...
   *
   * @param props PropsWithChildren<{}>
   * @returns ReactElement
   */

  function App(_a) {
    var GlobalStyle = He(
      templateObject_1 ||
        (templateObject_1 = __makeTemplateObject(
          [
            "\n    @font-face {\n      font-family: 'Actief Grotesque';\n      src: url('ActiefGrotesque_W_Md.woff') format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    body {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      background-color: ",
            ";\n      font-family: Actief Grotesque, sans-serif;\n    }\n  ",
          ],
          [
            "\n    @font-face {\n      font-family: 'Actief Grotesque';\n      src: url('ActiefGrotesque_W_Md.woff') format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    body {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      background-color: ",
            ";\n      font-family: Actief Grotesque, sans-serif;\n    }\n  ",
          ]
        )),
      COLORS$1.BLACK
    );
    var Logo$1 = Ye(Logo)(
      templateObject_2 ||
        (templateObject_2 = __makeTemplateObject(
          ["\n    position: fixed;\n    top: 0;\n    left: 0;\n  "],
          ["\n    position: fixed;\n    top: 0;\n    left: 0;\n  "]
        ))
    );
    var FunButtons$1 = Ye(FunButtons)(
      templateObject_3 ||
        (templateObject_3 = __makeTemplateObject(
          ["\n    position: fixed;\n    top: 0;\n    left: 0;\n  "],
          ["\n    position: fixed;\n    top: 0;\n    left: 0;\n  "]
        ))
    );
    return React__default["default"].createElement(
      React__default["default"].Fragment,
      null,
      React__default["default"].createElement(GlobalStyle, null),
      React__default["default"].createElement(Logo$1, null),
      React__default["default"].createElement(FunButtons$1, null),
      React__default["default"].createElement(FileUploader, null)
    );
  }
  var templateObject_1, templateObject_2, templateObject_3;

  reactDom.render(
    React.createElement(React.StrictMode, {}, React.createElement(App, {}, "Foo")),
    document.getElementById("root")
  );
});
//# sourceMappingURL=wtr-clone-demo.js.map
