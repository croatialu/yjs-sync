import {
  BOLD,
  GREY,
  Observable,
  ObservableV2,
  UNBOLD,
  UNCOLOR,
  applyUpdate,
  create,
  create2,
  createDecoder,
  createEncoder,
  createModuleLogger,
  createUint8ArrayFromArrayBuffer,
  encodeStateAsUpdate,
  encodeStateVector,
  encodeUtf8,
  equalityDeep,
  floor,
  fromBase64,
  getUnixTime,
  log10,
  min,
  offChange,
  onChange,
  rand,
  readAny,
  readUint8,
  readVarString,
  readVarUint,
  readVarUint8Array,
  reject,
  resolve,
  setIfUndefined,
  toBase64,
  toUint8Array,
  uuidv4,
  varStorage,
  writeAny,
  writeUint8,
  writeVarString,
  writeVarUint,
  writeVarUint8Array
} from "./chunk-A6DUTV2S.js";
import {
  __commonJS,
  __require,
  __toESM
} from "./chunk-3EJPJMEH.js";

// ../../node_modules/.pnpm/simple-peer@9.11.1/node_modules/simple-peer/simplepeer.min.js
var require_simplepeer_min = __commonJS({
  "../../node_modules/.pnpm/simple-peer@9.11.1/node_modules/simple-peer/simplepeer.min.js"(exports, module) {
    (function(e) {
      if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = e();
      else if ("function" == typeof define && define.amd)
        define([], e);
      else {
        var t;
        t = "undefined" == typeof window ? "undefined" == typeof global ? "undefined" == typeof self ? this : self : global : window, t.SimplePeer = e();
      }
    })(function() {
      var t = Math.floor, n = Math.abs, r = Math.pow;
      return (/* @__PURE__ */ function() {
        function d(s, e, n2) {
          function t2(o, i) {
            if (!e[o]) {
              if (!s[o]) {
                var l = "function" == typeof __require && __require;
                if (!i && l)
                  return l(o, true);
                if (r2)
                  return r2(o, true);
                var c = new Error("Cannot find module '" + o + "'");
                throw c.code = "MODULE_NOT_FOUND", c;
              }
              var a2 = e[o] = { exports: {} };
              s[o][0].call(a2.exports, function(e2) {
                var r3 = s[o][1][e2];
                return t2(r3 || e2);
              }, a2, a2.exports, d, s, e, n2);
            }
            return e[o].exports;
          }
          for (var r2 = "function" == typeof __require && __require, a = 0; a < n2.length; a++)
            t2(n2[a]);
          return t2;
        }
        return d;
      }())({ 1: [function(e, t2, n2) {
        "use strict";
        function r2(e2) {
          var t3 = e2.length;
          if (0 < t3 % 4)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var n3 = e2.indexOf("=");
          -1 === n3 && (n3 = t3);
          var r3 = n3 === t3 ? 0 : 4 - n3 % 4;
          return [n3, r3];
        }
        function a(e2, t3, n3) {
          return 3 * (t3 + n3) / 4 - n3;
        }
        function o(e2) {
          var t3, n3, o2 = r2(e2), d2 = o2[0], s2 = o2[1], l2 = new p(a(e2, d2, s2)), c2 = 0, f2 = 0 < s2 ? d2 - 4 : d2;
          for (n3 = 0; n3 < f2; n3 += 4)
            t3 = u[e2.charCodeAt(n3)] << 18 | u[e2.charCodeAt(n3 + 1)] << 12 | u[e2.charCodeAt(n3 + 2)] << 6 | u[e2.charCodeAt(n3 + 3)], l2[c2++] = 255 & t3 >> 16, l2[c2++] = 255 & t3 >> 8, l2[c2++] = 255 & t3;
          return 2 === s2 && (t3 = u[e2.charCodeAt(n3)] << 2 | u[e2.charCodeAt(n3 + 1)] >> 4, l2[c2++] = 255 & t3), 1 === s2 && (t3 = u[e2.charCodeAt(n3)] << 10 | u[e2.charCodeAt(n3 + 1)] << 4 | u[e2.charCodeAt(n3 + 2)] >> 2, l2[c2++] = 255 & t3 >> 8, l2[c2++] = 255 & t3), l2;
        }
        function d(e2) {
          return c[63 & e2 >> 18] + c[63 & e2 >> 12] + c[63 & e2 >> 6] + c[63 & e2];
        }
        function s(e2, t3, n3) {
          for (var r3, a2 = [], o2 = t3; o2 < n3; o2 += 3)
            r3 = (16711680 & e2[o2] << 16) + (65280 & e2[o2 + 1] << 8) + (255 & e2[o2 + 2]), a2.push(d(r3));
          return a2.join("");
        }
        function l(e2) {
          for (var t3, n3 = e2.length, r3 = n3 % 3, a2 = [], o2 = 16383, d2 = 0, l2 = n3 - r3; d2 < l2; d2 += o2)
            a2.push(s(e2, d2, d2 + o2 > l2 ? l2 : d2 + o2));
          return 1 === r3 ? (t3 = e2[n3 - 1], a2.push(c[t3 >> 2] + c[63 & t3 << 4] + "==")) : 2 === r3 && (t3 = (e2[n3 - 2] << 8) + e2[n3 - 1], a2.push(c[t3 >> 10] + c[63 & t3 >> 4] + c[63 & t3 << 2] + "=")), a2.join("");
        }
        n2.byteLength = function(e2) {
          var t3 = r2(e2), n3 = t3[0], a2 = t3[1];
          return 3 * (n3 + a2) / 4 - a2;
        }, n2.toByteArray = o, n2.fromByteArray = l;
        for (var c = [], u = [], p = "undefined" == typeof Uint8Array ? Array : Uint8Array, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", g = 0, _ = f.length; g < _; ++g)
          c[g] = f[g], u[f.charCodeAt(g)] = g;
        u[45] = 62, u[95] = 63;
      }, {}], 2: [function() {
      }, {}], 3: [function(e, t2, n2) {
        (function() {
          (function() {
            "use strict";
            var t3 = String.fromCharCode, o = Math.min;
            function d(e2) {
              if (2147483647 < e2)
                throw new RangeError('The value "' + e2 + '" is invalid for option "size"');
              var t4 = new Uint8Array(e2);
              return t4.__proto__ = s.prototype, t4;
            }
            function s(e2, t4, n3) {
              if ("number" == typeof e2) {
                if ("string" == typeof t4)
                  throw new TypeError('The "string" argument must be of type string. Received type number');
                return p(e2);
              }
              return l(e2, t4, n3);
            }
            function l(e2, t4, n3) {
              if ("string" == typeof e2)
                return f(e2, t4);
              if (ArrayBuffer.isView(e2))
                return g(e2);
              if (null == e2)
                throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e2);
              if (K(e2, ArrayBuffer) || e2 && K(e2.buffer, ArrayBuffer))
                return _(e2, t4, n3);
              if ("number" == typeof e2)
                throw new TypeError('The "value" argument must not be of type number. Received type number');
              var r2 = e2.valueOf && e2.valueOf();
              if (null != r2 && r2 !== e2)
                return s.from(r2, t4, n3);
              var a = h(e2);
              if (a)
                return a;
              if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e2[Symbol.toPrimitive])
                return s.from(e2[Symbol.toPrimitive]("string"), t4, n3);
              throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e2);
            }
            function c(e2) {
              if ("number" != typeof e2)
                throw new TypeError('"size" argument must be of type number');
              else if (0 > e2)
                throw new RangeError('The value "' + e2 + '" is invalid for option "size"');
            }
            function u(e2, t4, n3) {
              return c(e2), 0 >= e2 ? d(e2) : void 0 === t4 ? d(e2) : "string" == typeof n3 ? d(e2).fill(t4, n3) : d(e2).fill(t4);
            }
            function p(e2) {
              return c(e2), d(0 > e2 ? 0 : 0 | m(e2));
            }
            function f(e2, t4) {
              if (("string" != typeof t4 || "" === t4) && (t4 = "utf8"), !s.isEncoding(t4))
                throw new TypeError("Unknown encoding: " + t4);
              var n3 = 0 | b(e2, t4), r2 = d(n3), a = r2.write(e2, t4);
              return a !== n3 && (r2 = r2.slice(0, a)), r2;
            }
            function g(e2) {
              for (var t4 = 0 > e2.length ? 0 : 0 | m(e2.length), n3 = d(t4), r2 = 0; r2 < t4; r2 += 1)
                n3[r2] = 255 & e2[r2];
              return n3;
            }
            function _(e2, t4, n3) {
              if (0 > t4 || e2.byteLength < t4)
                throw new RangeError('"offset" is outside of buffer bounds');
              if (e2.byteLength < t4 + (n3 || 0))
                throw new RangeError('"length" is outside of buffer bounds');
              var r2;
              return r2 = void 0 === t4 && void 0 === n3 ? new Uint8Array(e2) : void 0 === n3 ? new Uint8Array(e2, t4) : new Uint8Array(e2, t4, n3), r2.__proto__ = s.prototype, r2;
            }
            function h(e2) {
              if (s.isBuffer(e2)) {
                var t4 = 0 | m(e2.length), n3 = d(t4);
                return 0 === n3.length ? n3 : (e2.copy(n3, 0, 0, t4), n3);
              }
              return void 0 === e2.length ? "Buffer" === e2.type && Array.isArray(e2.data) ? g(e2.data) : void 0 : "number" != typeof e2.length || X(e2.length) ? d(0) : g(e2);
            }
            function m(e2) {
              if (e2 >= 2147483647)
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + 2147483647 .toString(16) + " bytes");
              return 0 | e2;
            }
            function b(e2, t4) {
              if (s.isBuffer(e2))
                return e2.length;
              if (ArrayBuffer.isView(e2) || K(e2, ArrayBuffer))
                return e2.byteLength;
              if ("string" != typeof e2)
                throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e2);
              var n3 = e2.length, r2 = 2 < arguments.length && true === arguments[2];
              if (!r2 && 0 === n3)
                return 0;
              for (var a = false; ; )
                switch (t4) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return n3;
                  case "utf8":
                  case "utf-8":
                    return H(e2).length;
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return 2 * n3;
                  case "hex":
                    return n3 >>> 1;
                  case "base64":
                    return z(e2).length;
                  default:
                    if (a)
                      return r2 ? -1 : H(e2).length;
                    t4 = ("" + t4).toLowerCase(), a = true;
                }
            }
            function y(e2, t4, n3) {
              var r2 = false;
              if ((void 0 === t4 || 0 > t4) && (t4 = 0), t4 > this.length)
                return "";
              if ((void 0 === n3 || n3 > this.length) && (n3 = this.length), 0 >= n3)
                return "";
              if (n3 >>>= 0, t4 >>>= 0, n3 <= t4)
                return "";
              for (e2 || (e2 = "utf8"); ; )
                switch (e2) {
                  case "hex":
                    return P(this, t4, n3);
                  case "utf8":
                  case "utf-8":
                    return x(this, t4, n3);
                  case "ascii":
                    return D(this, t4, n3);
                  case "latin1":
                  case "binary":
                    return I(this, t4, n3);
                  case "base64":
                    return A(this, t4, n3);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return M(this, t4, n3);
                  default:
                    if (r2)
                      throw new TypeError("Unknown encoding: " + e2);
                    e2 = (e2 + "").toLowerCase(), r2 = true;
                }
            }
            function C(e2, t4, n3) {
              var r2 = e2[t4];
              e2[t4] = e2[n3], e2[n3] = r2;
            }
            function R(e2, t4, n3, r2, a) {
              if (0 === e2.length)
                return -1;
              if ("string" == typeof n3 ? (r2 = n3, n3 = 0) : 2147483647 < n3 ? n3 = 2147483647 : -2147483648 > n3 && (n3 = -2147483648), n3 = +n3, X(n3) && (n3 = a ? 0 : e2.length - 1), 0 > n3 && (n3 = e2.length + n3), n3 >= e2.length) {
                if (a)
                  return -1;
                n3 = e2.length - 1;
              } else if (0 > n3)
                if (a)
                  n3 = 0;
                else
                  return -1;
              if ("string" == typeof t4 && (t4 = s.from(t4, r2)), s.isBuffer(t4))
                return 0 === t4.length ? -1 : E(e2, t4, n3, r2, a);
              if ("number" == typeof t4)
                return t4 &= 255, "function" == typeof Uint8Array.prototype.indexOf ? a ? Uint8Array.prototype.indexOf.call(e2, t4, n3) : Uint8Array.prototype.lastIndexOf.call(e2, t4, n3) : E(e2, [t4], n3, r2, a);
              throw new TypeError("val must be string, number or Buffer");
            }
            function E(e2, t4, n3, r2, a) {
              function o2(e3, t5) {
                return 1 === d2 ? e3[t5] : e3.readUInt16BE(t5 * d2);
              }
              var d2 = 1, s2 = e2.length, l2 = t4.length;
              if (void 0 !== r2 && (r2 = (r2 + "").toLowerCase(), "ucs2" === r2 || "ucs-2" === r2 || "utf16le" === r2 || "utf-16le" === r2)) {
                if (2 > e2.length || 2 > t4.length)
                  return -1;
                d2 = 2, s2 /= 2, l2 /= 2, n3 /= 2;
              }
              var c2;
              if (a) {
                var u2 = -1;
                for (c2 = n3; c2 < s2; c2++)
                  if (o2(e2, c2) !== o2(t4, -1 === u2 ? 0 : c2 - u2))
                    -1 !== u2 && (c2 -= c2 - u2), u2 = -1;
                  else if (-1 === u2 && (u2 = c2), c2 - u2 + 1 === l2)
                    return u2 * d2;
              } else
                for (n3 + l2 > s2 && (n3 = s2 - l2), c2 = n3; 0 <= c2; c2--) {
                  for (var p2 = true, f2 = 0; f2 < l2; f2++)
                    if (o2(e2, c2 + f2) !== o2(t4, f2)) {
                      p2 = false;
                      break;
                    }
                  if (p2)
                    return c2;
                }
              return -1;
            }
            function w(e2, t4, n3, r2) {
              n3 = +n3 || 0;
              var a = e2.length - n3;
              r2 ? (r2 = +r2, r2 > a && (r2 = a)) : r2 = a;
              var o2 = t4.length;
              r2 > o2 / 2 && (r2 = o2 / 2);
              for (var d2, s2 = 0; s2 < r2; ++s2) {
                if (d2 = parseInt(t4.substr(2 * s2, 2), 16), X(d2))
                  return s2;
                e2[n3 + s2] = d2;
              }
              return s2;
            }
            function S(e2, t4, n3, r2) {
              return G(H(t4, e2.length - n3), e2, n3, r2);
            }
            function T(e2, t4, n3, r2) {
              return G(Y(t4), e2, n3, r2);
            }
            function v(e2, t4, n3, r2) {
              return T(e2, t4, n3, r2);
            }
            function k(e2, t4, n3, r2) {
              return G(z(t4), e2, n3, r2);
            }
            function L(e2, t4, n3, r2) {
              return G(V(t4, e2.length - n3), e2, n3, r2);
            }
            function A(e2, t4, n3) {
              return 0 === t4 && n3 === e2.length ? $.fromByteArray(e2) : $.fromByteArray(e2.slice(t4, n3));
            }
            function x(e2, t4, n3) {
              n3 = o(e2.length, n3);
              for (var r2 = [], a = t4; a < n3; ) {
                var d2 = e2[a], s2 = null, l2 = 239 < d2 ? 4 : 223 < d2 ? 3 : 191 < d2 ? 2 : 1;
                if (a + l2 <= n3) {
                  var c2, u2, p2, f2;
                  1 === l2 ? 128 > d2 && (s2 = d2) : 2 === l2 ? (c2 = e2[a + 1], 128 == (192 & c2) && (f2 = (31 & d2) << 6 | 63 & c2, 127 < f2 && (s2 = f2))) : 3 === l2 ? (c2 = e2[a + 1], u2 = e2[a + 2], 128 == (192 & c2) && 128 == (192 & u2) && (f2 = (15 & d2) << 12 | (63 & c2) << 6 | 63 & u2, 2047 < f2 && (55296 > f2 || 57343 < f2) && (s2 = f2))) : 4 === l2 ? (c2 = e2[a + 1], u2 = e2[a + 2], p2 = e2[a + 3], 128 == (192 & c2) && 128 == (192 & u2) && 128 == (192 & p2) && (f2 = (15 & d2) << 18 | (63 & c2) << 12 | (63 & u2) << 6 | 63 & p2, 65535 < f2 && 1114112 > f2 && (s2 = f2))) : void 0;
                }
                null === s2 ? (s2 = 65533, l2 = 1) : 65535 < s2 && (s2 -= 65536, r2.push(55296 | 1023 & s2 >>> 10), s2 = 56320 | 1023 & s2), r2.push(s2), a += l2;
              }
              return N(r2);
            }
            function N(e2) {
              var n3 = e2.length;
              if (n3 <= 4096)
                return t3.apply(String, e2);
              for (var r2 = "", a = 0; a < n3; )
                r2 += t3.apply(String, e2.slice(a, a += 4096));
              return r2;
            }
            function D(e2, n3, r2) {
              var a = "";
              r2 = o(e2.length, r2);
              for (var d2 = n3; d2 < r2; ++d2)
                a += t3(127 & e2[d2]);
              return a;
            }
            function I(e2, n3, r2) {
              var a = "";
              r2 = o(e2.length, r2);
              for (var d2 = n3; d2 < r2; ++d2)
                a += t3(e2[d2]);
              return a;
            }
            function P(e2, t4, n3) {
              var r2 = e2.length;
              (!t4 || 0 > t4) && (t4 = 0), (!n3 || 0 > n3 || n3 > r2) && (n3 = r2);
              for (var a = "", o2 = t4; o2 < n3; ++o2)
                a += W(e2[o2]);
              return a;
            }
            function M(e2, n3, r2) {
              for (var a = e2.slice(n3, r2), o2 = "", d2 = 0; d2 < a.length; d2 += 2)
                o2 += t3(a[d2] + 256 * a[d2 + 1]);
              return o2;
            }
            function O(e2, t4, n3) {
              if (0 != e2 % 1 || 0 > e2)
                throw new RangeError("offset is not uint");
              if (e2 + t4 > n3)
                throw new RangeError("Trying to access beyond buffer length");
            }
            function F(e2, t4, n3, r2, a, o2) {
              if (!s.isBuffer(e2))
                throw new TypeError('"buffer" argument must be a Buffer instance');
              if (t4 > a || t4 < o2)
                throw new RangeError('"value" argument is out of bounds');
              if (n3 + r2 > e2.length)
                throw new RangeError("Index out of range");
            }
            function B(e2, t4, n3, r2) {
              if (n3 + r2 > e2.length)
                throw new RangeError("Index out of range");
              if (0 > n3)
                throw new RangeError("Index out of range");
            }
            function U(e2, t4, n3, r2, a) {
              return t4 = +t4, n3 >>>= 0, a || B(e2, t4, n3, 4, 34028234663852886e22, -34028234663852886e22), J.write(e2, t4, n3, r2, 23, 4), n3 + 4;
            }
            function j(e2, t4, n3, r2, a) {
              return t4 = +t4, n3 >>>= 0, a || B(e2, t4, n3, 8, 17976931348623157e292, -17976931348623157e292), J.write(e2, t4, n3, r2, 52, 8), n3 + 8;
            }
            function q(e2) {
              if (e2 = e2.split("=")[0], e2 = e2.trim().replace(Q, ""), 2 > e2.length)
                return "";
              for (; 0 != e2.length % 4; )
                e2 += "=";
              return e2;
            }
            function W(e2) {
              return 16 > e2 ? "0" + e2.toString(16) : e2.toString(16);
            }
            function H(e2, t4) {
              t4 = t4 || 1 / 0;
              for (var n3, r2 = e2.length, a = null, o2 = [], d2 = 0; d2 < r2; ++d2) {
                if (n3 = e2.charCodeAt(d2), 55295 < n3 && 57344 > n3) {
                  if (!a) {
                    if (56319 < n3) {
                      -1 < (t4 -= 3) && o2.push(239, 191, 189);
                      continue;
                    } else if (d2 + 1 === r2) {
                      -1 < (t4 -= 3) && o2.push(239, 191, 189);
                      continue;
                    }
                    a = n3;
                    continue;
                  }
                  if (56320 > n3) {
                    -1 < (t4 -= 3) && o2.push(239, 191, 189), a = n3;
                    continue;
                  }
                  n3 = (a - 55296 << 10 | n3 - 56320) + 65536;
                } else
                  a && -1 < (t4 -= 3) && o2.push(239, 191, 189);
                if (a = null, 128 > n3) {
                  if (0 > (t4 -= 1))
                    break;
                  o2.push(n3);
                } else if (2048 > n3) {
                  if (0 > (t4 -= 2))
                    break;
                  o2.push(192 | n3 >> 6, 128 | 63 & n3);
                } else if (65536 > n3) {
                  if (0 > (t4 -= 3))
                    break;
                  o2.push(224 | n3 >> 12, 128 | 63 & n3 >> 6, 128 | 63 & n3);
                } else if (1114112 > n3) {
                  if (0 > (t4 -= 4))
                    break;
                  o2.push(240 | n3 >> 18, 128 | 63 & n3 >> 12, 128 | 63 & n3 >> 6, 128 | 63 & n3);
                } else
                  throw new Error("Invalid code point");
              }
              return o2;
            }
            function Y(e2) {
              for (var t4 = [], n3 = 0; n3 < e2.length; ++n3)
                t4.push(255 & e2.charCodeAt(n3));
              return t4;
            }
            function V(e2, t4) {
              for (var n3, r2, a, o2 = [], d2 = 0; d2 < e2.length && !(0 > (t4 -= 2)); ++d2)
                n3 = e2.charCodeAt(d2), r2 = n3 >> 8, a = n3 % 256, o2.push(a), o2.push(r2);
              return o2;
            }
            function z(e2) {
              return $.toByteArray(q(e2));
            }
            function G(e2, t4, n3, r2) {
              for (var a = 0; a < r2 && !(a + n3 >= t4.length || a >= e2.length); ++a)
                t4[a + n3] = e2[a];
              return a;
            }
            function K(e2, t4) {
              return e2 instanceof t4 || null != e2 && null != e2.constructor && null != e2.constructor.name && e2.constructor.name === t4.name;
            }
            function X(e2) {
              return e2 !== e2;
            }
            var $ = e("base64-js"), J = e("ieee754");
            n2.Buffer = s, n2.SlowBuffer = function(e2) {
              return +e2 != e2 && (e2 = 0), s.alloc(+e2);
            }, n2.INSPECT_MAX_BYTES = 50;
            n2.kMaxLength = 2147483647, s.TYPED_ARRAY_SUPPORT = function() {
              try {
                var e2 = new Uint8Array(1);
                return e2.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
                  return 42;
                } }, 42 === e2.foo();
              } catch (t4) {
                return false;
              }
            }(), s.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(s.prototype, "parent", { enumerable: true, get: function() {
              return s.isBuffer(this) ? this.buffer : void 0;
            } }), Object.defineProperty(s.prototype, "offset", { enumerable: true, get: function() {
              return s.isBuffer(this) ? this.byteOffset : void 0;
            } }), "undefined" != typeof Symbol && null != Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, { value: null, configurable: true, enumerable: false, writable: false }), s.poolSize = 8192, s.from = function(e2, t4, n3) {
              return l(e2, t4, n3);
            }, s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, s.alloc = function(e2, t4, n3) {
              return u(e2, t4, n3);
            }, s.allocUnsafe = function(e2) {
              return p(e2);
            }, s.allocUnsafeSlow = function(e2) {
              return p(e2);
            }, s.isBuffer = function(e2) {
              return null != e2 && true === e2._isBuffer && e2 !== s.prototype;
            }, s.compare = function(e2, t4) {
              if (K(e2, Uint8Array) && (e2 = s.from(e2, e2.offset, e2.byteLength)), K(t4, Uint8Array) && (t4 = s.from(t4, t4.offset, t4.byteLength)), !s.isBuffer(e2) || !s.isBuffer(t4))
                throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
              if (e2 === t4)
                return 0;
              for (var n3 = e2.length, r2 = t4.length, d2 = 0, l2 = o(n3, r2); d2 < l2; ++d2)
                if (e2[d2] !== t4[d2]) {
                  n3 = e2[d2], r2 = t4[d2];
                  break;
                }
              return n3 < r2 ? -1 : r2 < n3 ? 1 : 0;
            }, s.isEncoding = function(e2) {
              switch ((e2 + "").toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return true;
                default:
                  return false;
              }
            }, s.concat = function(e2, t4) {
              if (!Array.isArray(e2))
                throw new TypeError('"list" argument must be an Array of Buffers');
              if (0 === e2.length)
                return s.alloc(0);
              var n3;
              if (t4 === void 0)
                for (t4 = 0, n3 = 0; n3 < e2.length; ++n3)
                  t4 += e2[n3].length;
              var r2 = s.allocUnsafe(t4), a = 0;
              for (n3 = 0; n3 < e2.length; ++n3) {
                var o2 = e2[n3];
                if (K(o2, Uint8Array) && (o2 = s.from(o2)), !s.isBuffer(o2))
                  throw new TypeError('"list" argument must be an Array of Buffers');
                o2.copy(r2, a), a += o2.length;
              }
              return r2;
            }, s.byteLength = b, s.prototype._isBuffer = true, s.prototype.swap16 = function() {
              var e2 = this.length;
              if (0 != e2 % 2)
                throw new RangeError("Buffer size must be a multiple of 16-bits");
              for (var t4 = 0; t4 < e2; t4 += 2)
                C(this, t4, t4 + 1);
              return this;
            }, s.prototype.swap32 = function() {
              var e2 = this.length;
              if (0 != e2 % 4)
                throw new RangeError("Buffer size must be a multiple of 32-bits");
              for (var t4 = 0; t4 < e2; t4 += 4)
                C(this, t4, t4 + 3), C(this, t4 + 1, t4 + 2);
              return this;
            }, s.prototype.swap64 = function() {
              var e2 = this.length;
              if (0 != e2 % 8)
                throw new RangeError("Buffer size must be a multiple of 64-bits");
              for (var t4 = 0; t4 < e2; t4 += 8)
                C(this, t4, t4 + 7), C(this, t4 + 1, t4 + 6), C(this, t4 + 2, t4 + 5), C(this, t4 + 3, t4 + 4);
              return this;
            }, s.prototype.toString = function() {
              var e2 = this.length;
              return 0 === e2 ? "" : 0 === arguments.length ? x(this, 0, e2) : y.apply(this, arguments);
            }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e2) {
              if (!s.isBuffer(e2))
                throw new TypeError("Argument must be a Buffer");
              return this === e2 || 0 === s.compare(this, e2);
            }, s.prototype.inspect = function() {
              var e2 = "", t4 = n2.INSPECT_MAX_BYTES;
              return e2 = this.toString("hex", 0, t4).replace(/(.{2})/g, "$1 ").trim(), this.length > t4 && (e2 += " ... "), "<Buffer " + e2 + ">";
            }, s.prototype.compare = function(e2, t4, n3, r2, a) {
              if (K(e2, Uint8Array) && (e2 = s.from(e2, e2.offset, e2.byteLength)), !s.isBuffer(e2))
                throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e2);
              if (void 0 === t4 && (t4 = 0), void 0 === n3 && (n3 = e2 ? e2.length : 0), void 0 === r2 && (r2 = 0), void 0 === a && (a = this.length), 0 > t4 || n3 > e2.length || 0 > r2 || a > this.length)
                throw new RangeError("out of range index");
              if (r2 >= a && t4 >= n3)
                return 0;
              if (r2 >= a)
                return -1;
              if (t4 >= n3)
                return 1;
              if (t4 >>>= 0, n3 >>>= 0, r2 >>>= 0, a >>>= 0, this === e2)
                return 0;
              for (var d2 = a - r2, l2 = n3 - t4, c2 = o(d2, l2), u2 = this.slice(r2, a), p2 = e2.slice(t4, n3), f2 = 0; f2 < c2; ++f2)
                if (u2[f2] !== p2[f2]) {
                  d2 = u2[f2], l2 = p2[f2];
                  break;
                }
              return d2 < l2 ? -1 : l2 < d2 ? 1 : 0;
            }, s.prototype.includes = function(e2, t4, n3) {
              return -1 !== this.indexOf(e2, t4, n3);
            }, s.prototype.indexOf = function(e2, t4, n3) {
              return R(this, e2, t4, n3, true);
            }, s.prototype.lastIndexOf = function(e2, t4, n3) {
              return R(this, e2, t4, n3, false);
            }, s.prototype.write = function(e2, t4, n3, r2) {
              if (void 0 === t4)
                r2 = "utf8", n3 = this.length, t4 = 0;
              else if (void 0 === n3 && "string" == typeof t4)
                r2 = t4, n3 = this.length, t4 = 0;
              else if (isFinite(t4))
                t4 >>>= 0, isFinite(n3) ? (n3 >>>= 0, void 0 === r2 && (r2 = "utf8")) : (r2 = n3, n3 = void 0);
              else
                throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
              var a = this.length - t4;
              if ((void 0 === n3 || n3 > a) && (n3 = a), 0 < e2.length && (0 > n3 || 0 > t4) || t4 > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
              r2 || (r2 = "utf8");
              for (var o2 = false; ; )
                switch (r2) {
                  case "hex":
                    return w(this, e2, t4, n3);
                  case "utf8":
                  case "utf-8":
                    return S(this, e2, t4, n3);
                  case "ascii":
                    return T(this, e2, t4, n3);
                  case "latin1":
                  case "binary":
                    return v(this, e2, t4, n3);
                  case "base64":
                    return k(this, e2, t4, n3);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return L(this, e2, t4, n3);
                  default:
                    if (o2)
                      throw new TypeError("Unknown encoding: " + r2);
                    r2 = ("" + r2).toLowerCase(), o2 = true;
                }
            }, s.prototype.toJSON = function() {
              return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
            };
            s.prototype.slice = function(e2, t4) {
              var n3 = this.length;
              e2 = ~~e2, t4 = t4 === void 0 ? n3 : ~~t4, 0 > e2 ? (e2 += n3, 0 > e2 && (e2 = 0)) : e2 > n3 && (e2 = n3), 0 > t4 ? (t4 += n3, 0 > t4 && (t4 = 0)) : t4 > n3 && (t4 = n3), t4 < e2 && (t4 = e2);
              var r2 = this.subarray(e2, t4);
              return r2.__proto__ = s.prototype, r2;
            }, s.prototype.readUIntLE = function(e2, t4, n3) {
              e2 >>>= 0, t4 >>>= 0, n3 || O(e2, t4, this.length);
              for (var r2 = this[e2], a = 1, o2 = 0; ++o2 < t4 && (a *= 256); )
                r2 += this[e2 + o2] * a;
              return r2;
            }, s.prototype.readUIntBE = function(e2, t4, n3) {
              e2 >>>= 0, t4 >>>= 0, n3 || O(e2, t4, this.length);
              for (var r2 = this[e2 + --t4], a = 1; 0 < t4 && (a *= 256); )
                r2 += this[e2 + --t4] * a;
              return r2;
            }, s.prototype.readUInt8 = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 1, this.length), this[e2];
            }, s.prototype.readUInt16LE = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 2, this.length), this[e2] | this[e2 + 1] << 8;
            }, s.prototype.readUInt16BE = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 2, this.length), this[e2] << 8 | this[e2 + 1];
            }, s.prototype.readUInt32LE = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 4, this.length), (this[e2] | this[e2 + 1] << 8 | this[e2 + 2] << 16) + 16777216 * this[e2 + 3];
            }, s.prototype.readUInt32BE = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 4, this.length), 16777216 * this[e2] + (this[e2 + 1] << 16 | this[e2 + 2] << 8 | this[e2 + 3]);
            }, s.prototype.readIntLE = function(e2, t4, n3) {
              e2 >>>= 0, t4 >>>= 0, n3 || O(e2, t4, this.length);
              for (var a = this[e2], o2 = 1, d2 = 0; ++d2 < t4 && (o2 *= 256); )
                a += this[e2 + d2] * o2;
              return o2 *= 128, a >= o2 && (a -= r(2, 8 * t4)), a;
            }, s.prototype.readIntBE = function(e2, t4, n3) {
              e2 >>>= 0, t4 >>>= 0, n3 || O(e2, t4, this.length);
              for (var a = t4, o2 = 1, d2 = this[e2 + --a]; 0 < a && (o2 *= 256); )
                d2 += this[e2 + --a] * o2;
              return o2 *= 128, d2 >= o2 && (d2 -= r(2, 8 * t4)), d2;
            }, s.prototype.readInt8 = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 1, this.length), 128 & this[e2] ? -1 * (255 - this[e2] + 1) : this[e2];
            }, s.prototype.readInt16LE = function(e2, t4) {
              e2 >>>= 0, t4 || O(e2, 2, this.length);
              var n3 = this[e2] | this[e2 + 1] << 8;
              return 32768 & n3 ? 4294901760 | n3 : n3;
            }, s.prototype.readInt16BE = function(e2, t4) {
              e2 >>>= 0, t4 || O(e2, 2, this.length);
              var n3 = this[e2 + 1] | this[e2] << 8;
              return 32768 & n3 ? 4294901760 | n3 : n3;
            }, s.prototype.readInt32LE = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 4, this.length), this[e2] | this[e2 + 1] << 8 | this[e2 + 2] << 16 | this[e2 + 3] << 24;
            }, s.prototype.readInt32BE = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 4, this.length), this[e2] << 24 | this[e2 + 1] << 16 | this[e2 + 2] << 8 | this[e2 + 3];
            }, s.prototype.readFloatLE = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 4, this.length), J.read(this, e2, true, 23, 4);
            }, s.prototype.readFloatBE = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 4, this.length), J.read(this, e2, false, 23, 4);
            }, s.prototype.readDoubleLE = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 8, this.length), J.read(this, e2, true, 52, 8);
            }, s.prototype.readDoubleBE = function(e2, t4) {
              return e2 >>>= 0, t4 || O(e2, 8, this.length), J.read(this, e2, false, 52, 8);
            }, s.prototype.writeUIntLE = function(e2, t4, n3, a) {
              if (e2 = +e2, t4 >>>= 0, n3 >>>= 0, !a) {
                var o2 = r(2, 8 * n3) - 1;
                F(this, e2, t4, n3, o2, 0);
              }
              var d2 = 1, s2 = 0;
              for (this[t4] = 255 & e2; ++s2 < n3 && (d2 *= 256); )
                this[t4 + s2] = 255 & e2 / d2;
              return t4 + n3;
            }, s.prototype.writeUIntBE = function(e2, t4, n3, a) {
              if (e2 = +e2, t4 >>>= 0, n3 >>>= 0, !a) {
                var o2 = r(2, 8 * n3) - 1;
                F(this, e2, t4, n3, o2, 0);
              }
              var d2 = n3 - 1, s2 = 1;
              for (this[t4 + d2] = 255 & e2; 0 <= --d2 && (s2 *= 256); )
                this[t4 + d2] = 255 & e2 / s2;
              return t4 + n3;
            }, s.prototype.writeUInt8 = function(e2, t4, n3) {
              return e2 = +e2, t4 >>>= 0, n3 || F(this, e2, t4, 1, 255, 0), this[t4] = 255 & e2, t4 + 1;
            }, s.prototype.writeUInt16LE = function(e2, t4, n3) {
              return e2 = +e2, t4 >>>= 0, n3 || F(this, e2, t4, 2, 65535, 0), this[t4] = 255 & e2, this[t4 + 1] = e2 >>> 8, t4 + 2;
            }, s.prototype.writeUInt16BE = function(e2, t4, n3) {
              return e2 = +e2, t4 >>>= 0, n3 || F(this, e2, t4, 2, 65535, 0), this[t4] = e2 >>> 8, this[t4 + 1] = 255 & e2, t4 + 2;
            }, s.prototype.writeUInt32LE = function(e2, t4, n3) {
              return e2 = +e2, t4 >>>= 0, n3 || F(this, e2, t4, 4, 4294967295, 0), this[t4 + 3] = e2 >>> 24, this[t4 + 2] = e2 >>> 16, this[t4 + 1] = e2 >>> 8, this[t4] = 255 & e2, t4 + 4;
            }, s.prototype.writeUInt32BE = function(e2, t4, n3) {
              return e2 = +e2, t4 >>>= 0, n3 || F(this, e2, t4, 4, 4294967295, 0), this[t4] = e2 >>> 24, this[t4 + 1] = e2 >>> 16, this[t4 + 2] = e2 >>> 8, this[t4 + 3] = 255 & e2, t4 + 4;
            }, s.prototype.writeIntLE = function(e2, t4, n3, a) {
              if (e2 = +e2, t4 >>>= 0, !a) {
                var o2 = r(2, 8 * n3 - 1);
                F(this, e2, t4, n3, o2 - 1, -o2);
              }
              var d2 = 0, s2 = 1, l2 = 0;
              for (this[t4] = 255 & e2; ++d2 < n3 && (s2 *= 256); )
                0 > e2 && 0 === l2 && 0 !== this[t4 + d2 - 1] && (l2 = 1), this[t4 + d2] = 255 & (e2 / s2 >> 0) - l2;
              return t4 + n3;
            }, s.prototype.writeIntBE = function(e2, t4, n3, a) {
              if (e2 = +e2, t4 >>>= 0, !a) {
                var o2 = r(2, 8 * n3 - 1);
                F(this, e2, t4, n3, o2 - 1, -o2);
              }
              var d2 = n3 - 1, s2 = 1, l2 = 0;
              for (this[t4 + d2] = 255 & e2; 0 <= --d2 && (s2 *= 256); )
                0 > e2 && 0 === l2 && 0 !== this[t4 + d2 + 1] && (l2 = 1), this[t4 + d2] = 255 & (e2 / s2 >> 0) - l2;
              return t4 + n3;
            }, s.prototype.writeInt8 = function(e2, t4, n3) {
              return e2 = +e2, t4 >>>= 0, n3 || F(this, e2, t4, 1, 127, -128), 0 > e2 && (e2 = 255 + e2 + 1), this[t4] = 255 & e2, t4 + 1;
            }, s.prototype.writeInt16LE = function(e2, t4, n3) {
              return e2 = +e2, t4 >>>= 0, n3 || F(this, e2, t4, 2, 32767, -32768), this[t4] = 255 & e2, this[t4 + 1] = e2 >>> 8, t4 + 2;
            }, s.prototype.writeInt16BE = function(e2, t4, n3) {
              return e2 = +e2, t4 >>>= 0, n3 || F(this, e2, t4, 2, 32767, -32768), this[t4] = e2 >>> 8, this[t4 + 1] = 255 & e2, t4 + 2;
            }, s.prototype.writeInt32LE = function(e2, t4, n3) {
              return e2 = +e2, t4 >>>= 0, n3 || F(this, e2, t4, 4, 2147483647, -2147483648), this[t4] = 255 & e2, this[t4 + 1] = e2 >>> 8, this[t4 + 2] = e2 >>> 16, this[t4 + 3] = e2 >>> 24, t4 + 4;
            }, s.prototype.writeInt32BE = function(e2, t4, n3) {
              return e2 = +e2, t4 >>>= 0, n3 || F(this, e2, t4, 4, 2147483647, -2147483648), 0 > e2 && (e2 = 4294967295 + e2 + 1), this[t4] = e2 >>> 24, this[t4 + 1] = e2 >>> 16, this[t4 + 2] = e2 >>> 8, this[t4 + 3] = 255 & e2, t4 + 4;
            }, s.prototype.writeFloatLE = function(e2, t4, n3) {
              return U(this, e2, t4, true, n3);
            }, s.prototype.writeFloatBE = function(e2, t4, n3) {
              return U(this, e2, t4, false, n3);
            }, s.prototype.writeDoubleLE = function(e2, t4, n3) {
              return j(this, e2, t4, true, n3);
            }, s.prototype.writeDoubleBE = function(e2, t4, n3) {
              return j(this, e2, t4, false, n3);
            }, s.prototype.copy = function(e2, t4, n3, r2) {
              if (!s.isBuffer(e2))
                throw new TypeError("argument should be a Buffer");
              if (n3 || (n3 = 0), r2 || 0 === r2 || (r2 = this.length), t4 >= e2.length && (t4 = e2.length), t4 || (t4 = 0), 0 < r2 && r2 < n3 && (r2 = n3), r2 === n3)
                return 0;
              if (0 === e2.length || 0 === this.length)
                return 0;
              if (0 > t4)
                throw new RangeError("targetStart out of bounds");
              if (0 > n3 || n3 >= this.length)
                throw new RangeError("Index out of range");
              if (0 > r2)
                throw new RangeError("sourceEnd out of bounds");
              r2 > this.length && (r2 = this.length), e2.length - t4 < r2 - n3 && (r2 = e2.length - t4 + n3);
              var a = r2 - n3;
              if (this === e2 && "function" == typeof Uint8Array.prototype.copyWithin)
                this.copyWithin(t4, n3, r2);
              else if (this === e2 && n3 < t4 && t4 < r2)
                for (var o2 = a - 1; 0 <= o2; --o2)
                  e2[o2 + t4] = this[o2 + n3];
              else
                Uint8Array.prototype.set.call(e2, this.subarray(n3, r2), t4);
              return a;
            }, s.prototype.fill = function(e2, t4, n3, r2) {
              if ("string" == typeof e2) {
                if ("string" == typeof t4 ? (r2 = t4, t4 = 0, n3 = this.length) : "string" == typeof n3 && (r2 = n3, n3 = this.length), void 0 !== r2 && "string" != typeof r2)
                  throw new TypeError("encoding must be a string");
                if ("string" == typeof r2 && !s.isEncoding(r2))
                  throw new TypeError("Unknown encoding: " + r2);
                if (1 === e2.length) {
                  var a = e2.charCodeAt(0);
                  ("utf8" === r2 && 128 > a || "latin1" === r2) && (e2 = a);
                }
              } else
                "number" == typeof e2 && (e2 &= 255);
              if (0 > t4 || this.length < t4 || this.length < n3)
                throw new RangeError("Out of range index");
              if (n3 <= t4)
                return this;
              t4 >>>= 0, n3 = n3 === void 0 ? this.length : n3 >>> 0, e2 || (e2 = 0);
              var o2;
              if ("number" == typeof e2)
                for (o2 = t4; o2 < n3; ++o2)
                  this[o2] = e2;
              else {
                var d2 = s.isBuffer(e2) ? e2 : s.from(e2, r2), l2 = d2.length;
                if (0 === l2)
                  throw new TypeError('The value "' + e2 + '" is invalid for argument "value"');
                for (o2 = 0; o2 < n3 - t4; ++o2)
                  this[o2 + t4] = d2[o2 % l2];
              }
              return this;
            };
            var Q = /[^+/0-9A-Za-z-_]/g;
          }).call(this);
        }).call(this, e("buffer").Buffer);
      }, { "base64-js": 1, buffer: 3, ieee754: 9 }], 4: [function(e, t2, n2) {
        (function(a) {
          (function() {
            function r2() {
              let e2;
              try {
                e2 = n2.storage.getItem("debug");
              } catch (e3) {
              }
              return !e2 && "undefined" != typeof a && "env" in a && (e2 = a.env.DEBUG), e2;
            }
            n2.formatArgs = function(e2) {
              if (e2[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e2[0] + (this.useColors ? "%c " : " ") + "+" + t2.exports.humanize(this.diff), !this.useColors)
                return;
              const n3 = "color: " + this.color;
              e2.splice(1, 0, n3, "color: inherit");
              let r3 = 0, a2 = 0;
              e2[0].replace(/%[a-zA-Z%]/g, (e3) => {
                "%%" === e3 || (r3++, "%c" === e3 && (a2 = r3));
              }), e2.splice(a2, 0, n3);
            }, n2.save = function(e2) {
              try {
                e2 ? n2.storage.setItem("debug", e2) : n2.storage.removeItem("debug");
              } catch (e3) {
              }
            }, n2.load = r2, n2.useColors = function() {
              return !!("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) || !("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && 31 <= parseInt(RegExp.$1, 10) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
            }, n2.storage = function() {
              try {
                return localStorage;
              } catch (e2) {
              }
            }(), n2.destroy = /* @__PURE__ */ (() => {
              let e2 = false;
              return () => {
                e2 || (e2 = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
              };
            })(), n2.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], n2.log = console.debug || console.log || (() => {
            }), t2.exports = e("./common")(n2);
            const { formatters: o } = t2.exports;
            o.j = function(e2) {
              try {
                return JSON.stringify(e2);
              } catch (e3) {
                return "[UnexpectedJSONParseError]: " + e3.message;
              }
            };
          }).call(this);
        }).call(this, e("_process"));
      }, { "./common": 5, _process: 12 }], 5: [function(e, t2) {
        t2.exports = function(t3) {
          function r2(e2) {
            function t4(...e3) {
              if (!t4.enabled)
                return;
              const a2 = t4, o3 = +/* @__PURE__ */ new Date(), i = o3 - (n2 || o3);
              a2.diff = i, a2.prev = n2, a2.curr = o3, n2 = o3, e3[0] = r2.coerce(e3[0]), "string" != typeof e3[0] && e3.unshift("%O");
              let d = 0;
              e3[0] = e3[0].replace(/%([a-zA-Z%])/g, (t5, n3) => {
                if ("%%" === t5)
                  return "%";
                d++;
                const o4 = r2.formatters[n3];
                if ("function" == typeof o4) {
                  const n4 = e3[d];
                  t5 = o4.call(a2, n4), e3.splice(d, 1), d--;
                }
                return t5;
              }), r2.formatArgs.call(a2, e3);
              const s = a2.log || r2.log;
              s.apply(a2, e3);
            }
            let n2, o2 = null;
            return t4.namespace = e2, t4.useColors = r2.useColors(), t4.color = r2.selectColor(e2), t4.extend = a, t4.destroy = r2.destroy, Object.defineProperty(t4, "enabled", { enumerable: true, configurable: false, get: () => null === o2 ? r2.enabled(e2) : o2, set: (e3) => {
              o2 = e3;
            } }), "function" == typeof r2.init && r2.init(t4), t4;
          }
          function a(e2, t4) {
            const n2 = r2(this.namespace + ("undefined" == typeof t4 ? ":" : t4) + e2);
            return n2.log = this.log, n2;
          }
          function o(e2) {
            return e2.toString().substring(2, e2.toString().length - 2).replace(/\.\*\?$/, "*");
          }
          return r2.debug = r2, r2.default = r2, r2.coerce = function(e2) {
            return e2 instanceof Error ? e2.stack || e2.message : e2;
          }, r2.disable = function() {
            const e2 = [...r2.names.map(o), ...r2.skips.map(o).map((e3) => "-" + e3)].join(",");
            return r2.enable(""), e2;
          }, r2.enable = function(e2) {
            r2.save(e2), r2.names = [], r2.skips = [];
            let t4;
            const n2 = ("string" == typeof e2 ? e2 : "").split(/[\s,]+/), a2 = n2.length;
            for (t4 = 0; t4 < a2; t4++)
              n2[t4] && (e2 = n2[t4].replace(/\*/g, ".*?"), "-" === e2[0] ? r2.skips.push(new RegExp("^" + e2.substr(1) + "$")) : r2.names.push(new RegExp("^" + e2 + "$")));
          }, r2.enabled = function(e2) {
            if ("*" === e2[e2.length - 1])
              return true;
            let t4, n2;
            for (t4 = 0, n2 = r2.skips.length; t4 < n2; t4++)
              if (r2.skips[t4].test(e2))
                return false;
            for (t4 = 0, n2 = r2.names.length; t4 < n2; t4++)
              if (r2.names[t4].test(e2))
                return true;
            return false;
          }, r2.humanize = e("ms"), r2.destroy = function() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
          }, Object.keys(t3).forEach((e2) => {
            r2[e2] = t3[e2];
          }), r2.names = [], r2.skips = [], r2.formatters = {}, r2.selectColor = function(e2) {
            let t4 = 0;
            for (let n2 = 0; n2 < e2.length; n2++)
              t4 = (t4 << 5) - t4 + e2.charCodeAt(n2), t4 |= 0;
            return r2.colors[n(t4) % r2.colors.length];
          }, r2.enable(r2.load()), r2;
        };
      }, { ms: 11 }], 6: [function(e, t2) {
        "use strict";
        function n2(e2, t3) {
          for (const n3 in t3)
            Object.defineProperty(e2, n3, { value: t3[n3], enumerable: true, configurable: true });
          return e2;
        }
        t2.exports = function(e2, t3, r2) {
          if (!e2 || "string" == typeof e2)
            throw new TypeError("Please pass an Error to err-code");
          r2 || (r2 = {}), "object" == typeof t3 && (r2 = t3, t3 = ""), t3 && (r2.code = t3);
          try {
            return n2(e2, r2);
          } catch (t4) {
            r2.message = e2.message, r2.stack = e2.stack;
            const a = function() {
            };
            a.prototype = Object.create(Object.getPrototypeOf(e2));
            const o = n2(new a(), r2);
            return o;
          }
        };
      }, {}], 7: [function(e, t2) {
        "use strict";
        function n2(e2) {
          console && console.warn && console.warn(e2);
        }
        function r2() {
          r2.init.call(this);
        }
        function a(e2) {
          if ("function" != typeof e2)
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e2);
        }
        function o(e2) {
          return void 0 === e2._maxListeners ? r2.defaultMaxListeners : e2._maxListeners;
        }
        function i(e2, t3, r3, i2) {
          var d2, s2, l2;
          if (a(r3), s2 = e2._events, void 0 === s2 ? (s2 = e2._events = /* @__PURE__ */ Object.create(null), e2._eventsCount = 0) : (void 0 !== s2.newListener && (e2.emit("newListener", t3, r3.listener ? r3.listener : r3), s2 = e2._events), l2 = s2[t3]), void 0 === l2)
            l2 = s2[t3] = r3, ++e2._eventsCount;
          else if ("function" == typeof l2 ? l2 = s2[t3] = i2 ? [r3, l2] : [l2, r3] : i2 ? l2.unshift(r3) : l2.push(r3), d2 = o(e2), 0 < d2 && l2.length > d2 && !l2.warned) {
            l2.warned = true;
            var c2 = new Error("Possible EventEmitter memory leak detected. " + l2.length + " " + (t3 + " listeners added. Use emitter.setMaxListeners() to increase limit"));
            c2.name = "MaxListenersExceededWarning", c2.emitter = e2, c2.type = t3, c2.count = l2.length, n2(c2);
          }
          return e2;
        }
        function d() {
          if (!this.fired)
            return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
        }
        function s(e2, t3, n3) {
          var r3 = { fired: false, wrapFn: void 0, target: e2, type: t3, listener: n3 }, a2 = d.bind(r3);
          return a2.listener = n3, r3.wrapFn = a2, a2;
        }
        function l(e2, t3, n3) {
          var r3 = e2._events;
          if (r3 === void 0)
            return [];
          var a2 = r3[t3];
          return void 0 === a2 ? [] : "function" == typeof a2 ? n3 ? [a2.listener || a2] : [a2] : n3 ? f(a2) : u(a2, a2.length);
        }
        function c(e2) {
          var t3 = this._events;
          if (t3 !== void 0) {
            var n3 = t3[e2];
            if ("function" == typeof n3)
              return 1;
            if (void 0 !== n3)
              return n3.length;
          }
          return 0;
        }
        function u(e2, t3) {
          for (var n3 = Array(t3), r3 = 0; r3 < t3; ++r3)
            n3[r3] = e2[r3];
          return n3;
        }
        function p(e2, t3) {
          for (; t3 + 1 < e2.length; t3++)
            e2[t3] = e2[t3 + 1];
          e2.pop();
        }
        function f(e2) {
          for (var t3 = Array(e2.length), n3 = 0; n3 < t3.length; ++n3)
            t3[n3] = e2[n3].listener || e2[n3];
          return t3;
        }
        function g(e2, t3, n3) {
          "function" == typeof e2.on && _(e2, "error", t3, n3);
        }
        function _(e2, t3, n3, r3) {
          if ("function" == typeof e2.on)
            r3.once ? e2.once(t3, n3) : e2.on(t3, n3);
          else if ("function" == typeof e2.addEventListener)
            e2.addEventListener(t3, function a2(o2) {
              r3.once && e2.removeEventListener(t3, a2), n3(o2);
            });
          else
            throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e2);
        }
        var h, m = "object" == typeof Reflect ? Reflect : null, b = m && "function" == typeof m.apply ? m.apply : function(e2, t3, n3) {
          return Function.prototype.apply.call(e2, t3, n3);
        };
        h = m && "function" == typeof m.ownKeys ? m.ownKeys : Object.getOwnPropertySymbols ? function(e2) {
          return Object.getOwnPropertyNames(e2).concat(Object.getOwnPropertySymbols(e2));
        } : function(e2) {
          return Object.getOwnPropertyNames(e2);
        };
        var y = Number.isNaN || function(e2) {
          return e2 !== e2;
        };
        t2.exports = r2, t2.exports.once = function(e2, t3) {
          return new Promise(function(n3, r3) {
            function a2(n4) {
              e2.removeListener(t3, o2), r3(n4);
            }
            function o2() {
              "function" == typeof e2.removeListener && e2.removeListener("error", a2), n3([].slice.call(arguments));
            }
            _(e2, t3, o2, { once: true }), "error" !== t3 && g(e2, a2, { once: true });
          });
        }, r2.EventEmitter = r2, r2.prototype._events = void 0, r2.prototype._eventsCount = 0, r2.prototype._maxListeners = void 0;
        var C = 10;
        Object.defineProperty(r2, "defaultMaxListeners", { enumerable: true, get: function() {
          return C;
        }, set: function(e2) {
          if ("number" != typeof e2 || 0 > e2 || y(e2))
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e2 + ".");
          C = e2;
        } }), r2.init = function() {
          (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
        }, r2.prototype.setMaxListeners = function(e2) {
          if ("number" != typeof e2 || 0 > e2 || y(e2))
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e2 + ".");
          return this._maxListeners = e2, this;
        }, r2.prototype.getMaxListeners = function() {
          return o(this);
        }, r2.prototype.emit = function(e2) {
          for (var t3 = [], n3 = 1; n3 < arguments.length; n3++)
            t3.push(arguments[n3]);
          var r3 = "error" === e2, a2 = this._events;
          if (a2 !== void 0)
            r3 = r3 && a2.error === void 0;
          else if (!r3)
            return false;
          if (r3) {
            var o2;
            if (0 < t3.length && (o2 = t3[0]), o2 instanceof Error)
              throw o2;
            var d2 = new Error("Unhandled error." + (o2 ? " (" + o2.message + ")" : ""));
            throw d2.context = o2, d2;
          }
          var s2 = a2[e2];
          if (s2 === void 0)
            return false;
          if ("function" == typeof s2)
            b(s2, this, t3);
          else
            for (var l2 = s2.length, c2 = u(s2, l2), n3 = 0; n3 < l2; ++n3)
              b(c2[n3], this, t3);
          return true;
        }, r2.prototype.addListener = function(e2, t3) {
          return i(this, e2, t3, false);
        }, r2.prototype.on = r2.prototype.addListener, r2.prototype.prependListener = function(e2, t3) {
          return i(this, e2, t3, true);
        }, r2.prototype.once = function(e2, t3) {
          return a(t3), this.on(e2, s(this, e2, t3)), this;
        }, r2.prototype.prependOnceListener = function(e2, t3) {
          return a(t3), this.prependListener(e2, s(this, e2, t3)), this;
        }, r2.prototype.removeListener = function(e2, t3) {
          var n3, r3, o2, d2, s2;
          if (a(t3), r3 = this._events, void 0 === r3)
            return this;
          if (n3 = r3[e2], void 0 === n3)
            return this;
          if (n3 === t3 || n3.listener === t3)
            0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete r3[e2], r3.removeListener && this.emit("removeListener", e2, n3.listener || t3));
          else if ("function" != typeof n3) {
            for (o2 = -1, d2 = n3.length - 1; 0 <= d2; d2--)
              if (n3[d2] === t3 || n3[d2].listener === t3) {
                s2 = n3[d2].listener, o2 = d2;
                break;
              }
            if (0 > o2)
              return this;
            0 === o2 ? n3.shift() : p(n3, o2), 1 === n3.length && (r3[e2] = n3[0]), void 0 !== r3.removeListener && this.emit("removeListener", e2, s2 || t3);
          }
          return this;
        }, r2.prototype.off = r2.prototype.removeListener, r2.prototype.removeAllListeners = function(e2) {
          var t3, n3, r3;
          if (n3 = this._events, void 0 === n3)
            return this;
          if (void 0 === n3.removeListener)
            return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== n3[e2] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete n3[e2]), this;
          if (0 === arguments.length) {
            var a2, o2 = Object.keys(n3);
            for (r3 = 0; r3 < o2.length; ++r3)
              a2 = o2[r3], "removeListener" !== a2 && this.removeAllListeners(a2);
            return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
          }
          if (t3 = n3[e2], "function" == typeof t3)
            this.removeListener(e2, t3);
          else if (void 0 !== t3)
            for (r3 = t3.length - 1; 0 <= r3; r3--)
              this.removeListener(e2, t3[r3]);
          return this;
        }, r2.prototype.listeners = function(e2) {
          return l(this, e2, true);
        }, r2.prototype.rawListeners = function(e2) {
          return l(this, e2, false);
        }, r2.listenerCount = function(e2, t3) {
          return "function" == typeof e2.listenerCount ? e2.listenerCount(t3) : c.call(e2, t3);
        }, r2.prototype.listenerCount = c, r2.prototype.eventNames = function() {
          return 0 < this._eventsCount ? h(this._events) : [];
        };
      }, {}], 8: [function(e, t2) {
        t2.exports = function() {
          if ("undefined" == typeof globalThis)
            return null;
          var e2 = { RTCPeerConnection: globalThis.RTCPeerConnection || globalThis.mozRTCPeerConnection || globalThis.webkitRTCPeerConnection, RTCSessionDescription: globalThis.RTCSessionDescription || globalThis.mozRTCSessionDescription || globalThis.webkitRTCSessionDescription, RTCIceCandidate: globalThis.RTCIceCandidate || globalThis.mozRTCIceCandidate || globalThis.webkitRTCIceCandidate };
          return e2.RTCPeerConnection ? e2 : null;
        };
      }, {}], 9: [function(e, a, o) {
        o.read = function(t2, n2, a2, o2, l) {
          var c, u, p = 8 * l - o2 - 1, f = (1 << p) - 1, g = f >> 1, _ = -7, h = a2 ? l - 1 : 0, b = a2 ? -1 : 1, d = t2[n2 + h];
          for (h += b, c = d & (1 << -_) - 1, d >>= -_, _ += p; 0 < _; c = 256 * c + t2[n2 + h], h += b, _ -= 8)
            ;
          for (u = c & (1 << -_) - 1, c >>= -_, _ += o2; 0 < _; u = 256 * u + t2[n2 + h], h += b, _ -= 8)
            ;
          if (0 === c)
            c = 1 - g;
          else {
            if (c === f)
              return u ? NaN : (d ? -1 : 1) * (1 / 0);
            u += r(2, o2), c -= g;
          }
          return (d ? -1 : 1) * u * r(2, c - o2);
        }, o.write = function(a2, o2, l, u, p, f) {
          var h, b, y, g = Math.LN2, _ = Math.log, C = 8 * f - p - 1, R = (1 << C) - 1, E = R >> 1, w = 23 === p ? r(2, -24) - r(2, -77) : 0, S = u ? 0 : f - 1, T = u ? 1 : -1, d = 0 > o2 || 0 === o2 && 0 > 1 / o2 ? 1 : 0;
          for (o2 = n(o2), isNaN(o2) || o2 === 1 / 0 ? (b = isNaN(o2) ? 1 : 0, h = R) : (h = t(_(o2) / g), 1 > o2 * (y = r(2, -h)) && (h--, y *= 2), o2 += 1 <= h + E ? w / y : w * r(2, 1 - E), 2 <= o2 * y && (h++, y /= 2), h + E >= R ? (b = 0, h = R) : 1 <= h + E ? (b = (o2 * y - 1) * r(2, p), h += E) : (b = o2 * r(2, E - 1) * r(2, p), h = 0)); 8 <= p; a2[l + S] = 255 & b, S += T, b /= 256, p -= 8)
            ;
          for (h = h << p | b, C += p; 0 < C; a2[l + S] = 255 & h, S += T, h /= 256, C -= 8)
            ;
          a2[l + S - T] |= 128 * d;
        };
      }, {}], 10: [function(e, t2) {
        t2.exports = "function" == typeof Object.create ? function(e2, t3) {
          t3 && (e2.super_ = t3, e2.prototype = Object.create(t3.prototype, { constructor: { value: e2, enumerable: false, writable: true, configurable: true } }));
        } : function(e2, t3) {
          if (t3) {
            e2.super_ = t3;
            var n2 = function() {
            };
            n2.prototype = t3.prototype, e2.prototype = new n2(), e2.prototype.constructor = e2;
          }
        };
      }, {}], 11: [function(e, t2) {
        var r2 = Math.round;
        function a(e2) {
          if (e2 += "", !(100 < e2.length)) {
            var t3 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e2);
            if (t3) {
              var r3 = parseFloat(t3[1]), n2 = (t3[2] || "ms").toLowerCase();
              return "years" === n2 || "year" === n2 || "yrs" === n2 || "yr" === n2 || "y" === n2 ? 315576e5 * r3 : "weeks" === n2 || "week" === n2 || "w" === n2 ? 6048e5 * r3 : "days" === n2 || "day" === n2 || "d" === n2 ? 864e5 * r3 : "hours" === n2 || "hour" === n2 || "hrs" === n2 || "hr" === n2 || "h" === n2 ? 36e5 * r3 : "minutes" === n2 || "minute" === n2 || "mins" === n2 || "min" === n2 || "m" === n2 ? 6e4 * r3 : "seconds" === n2 || "second" === n2 || "secs" === n2 || "sec" === n2 || "s" === n2 ? 1e3 * r3 : "milliseconds" === n2 || "millisecond" === n2 || "msecs" === n2 || "msec" === n2 || "ms" === n2 ? r3 : void 0;
            }
          }
        }
        function o(e2) {
          var t3 = n(e2);
          return 864e5 <= t3 ? r2(e2 / 864e5) + "d" : 36e5 <= t3 ? r2(e2 / 36e5) + "h" : 6e4 <= t3 ? r2(e2 / 6e4) + "m" : 1e3 <= t3 ? r2(e2 / 1e3) + "s" : e2 + "ms";
        }
        function i(e2) {
          var t3 = n(e2);
          return 864e5 <= t3 ? s(e2, t3, 864e5, "day") : 36e5 <= t3 ? s(e2, t3, 36e5, "hour") : 6e4 <= t3 ? s(e2, t3, 6e4, "minute") : 1e3 <= t3 ? s(e2, t3, 1e3, "second") : e2 + " ms";
        }
        function s(e2, t3, a2, n2) {
          return r2(e2 / a2) + " " + n2 + (t3 >= 1.5 * a2 ? "s" : "");
        }
        var l = 24 * (60 * 6e4);
        t2.exports = function(e2, t3) {
          t3 = t3 || {};
          var n2 = typeof e2;
          if ("string" == n2 && 0 < e2.length)
            return a(e2);
          if ("number" === n2 && isFinite(e2))
            return t3.long ? i(e2) : o(e2);
          throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e2));
        };
      }, {}], 12: [function(e, t2) {
        function n2() {
          throw new Error("setTimeout has not been defined");
        }
        function r2() {
          throw new Error("clearTimeout has not been defined");
        }
        function a(t3) {
          if (c === setTimeout)
            return setTimeout(t3, 0);
          if ((c === n2 || !c) && setTimeout)
            return c = setTimeout, setTimeout(t3, 0);
          try {
            return c(t3, 0);
          } catch (n3) {
            try {
              return c.call(null, t3, 0);
            } catch (n4) {
              return c.call(this, t3, 0);
            }
          }
        }
        function o(t3) {
          if (u === clearTimeout)
            return clearTimeout(t3);
          if ((u === r2 || !u) && clearTimeout)
            return u = clearTimeout, clearTimeout(t3);
          try {
            return u(t3);
          } catch (n3) {
            try {
              return u.call(null, t3);
            } catch (n4) {
              return u.call(this, t3);
            }
          }
        }
        function i() {
          _ && f && (_ = false, f.length ? g = f.concat(g) : h = -1, g.length && d());
        }
        function d() {
          if (!_) {
            var e2 = a(i);
            _ = true;
            for (var t3 = g.length; t3; ) {
              for (f = g, g = []; ++h < t3; )
                f && f[h].run();
              h = -1, t3 = g.length;
            }
            f = null, _ = false, o(e2);
          }
        }
        function s(e2, t3) {
          this.fun = e2, this.array = t3;
        }
        function l() {
        }
        var c, u, p = t2.exports = {};
        (function() {
          try {
            c = "function" == typeof setTimeout ? setTimeout : n2;
          } catch (t3) {
            c = n2;
          }
          try {
            u = "function" == typeof clearTimeout ? clearTimeout : r2;
          } catch (t3) {
            u = r2;
          }
        })();
        var f, g = [], _ = false, h = -1;
        p.nextTick = function(e2) {
          var t3 = Array(arguments.length - 1);
          if (1 < arguments.length)
            for (var n3 = 1; n3 < arguments.length; n3++)
              t3[n3 - 1] = arguments[n3];
          g.push(new s(e2, t3)), 1 !== g.length || _ || a(d);
        }, s.prototype.run = function() {
          this.fun.apply(null, this.array);
        }, p.title = "browser", p.browser = true, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = l, p.addListener = l, p.once = l, p.off = l, p.removeListener = l, p.removeAllListeners = l, p.emit = l, p.prependListener = l, p.prependOnceListener = l, p.listeners = function() {
          return [];
        }, p.binding = function() {
          throw new Error("process.binding is not supported");
        }, p.cwd = function() {
          return "/";
        }, p.chdir = function() {
          throw new Error("process.chdir is not supported");
        }, p.umask = function() {
          return 0;
        };
      }, {}], 13: [function(e, t2) {
        (function(e2) {
          (function() {
            let n2;
            t2.exports = "function" == typeof queueMicrotask ? queueMicrotask.bind("undefined" == typeof window ? e2 : window) : (e3) => (n2 || (n2 = Promise.resolve())).then(e3).catch((e4) => setTimeout(() => {
              throw e4;
            }, 0));
          }).call(this);
        }).call(this, "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {} : window : self : global);
      }, {}], 14: [function(e, t2) {
        (function(n2, r2) {
          (function() {
            "use strict";
            var a = e("safe-buffer").Buffer, o = r2.crypto || r2.msCrypto;
            t2.exports = o && o.getRandomValues ? function(e2, t3) {
              if (e2 > 4294967295)
                throw new RangeError("requested too many random bytes");
              var r3 = a.allocUnsafe(e2);
              if (0 < e2)
                if (65536 < e2)
                  for (var i = 0; i < e2; i += 65536)
                    o.getRandomValues(r3.slice(i, i + 65536));
                else
                  o.getRandomValues(r3);
              return "function" == typeof t3 ? n2.nextTick(function() {
                t3(null, r3);
              }) : r3;
            } : function() {
              throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11");
            };
          }).call(this);
        }).call(this, e("_process"), "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {} : window : self : global);
      }, { _process: 12, "safe-buffer": 30 }], 15: [function(e, t2) {
        "use strict";
        function n2(e2, t3) {
          e2.prototype = Object.create(t3.prototype), e2.prototype.constructor = e2, e2.__proto__ = t3;
        }
        function r2(e2, t3, r3) {
          function a2(e3, n3, r4) {
            return "string" == typeof t3 ? t3 : t3(e3, n3, r4);
          }
          r3 || (r3 = Error);
          var o2 = function(e3) {
            function t4(t5, n3, r4) {
              return e3.call(this, a2(t5, n3, r4)) || this;
            }
            return n2(t4, e3), t4;
          }(r3);
          o2.prototype.name = r3.name, o2.prototype.code = e2, s[e2] = o2;
        }
        function a(e2, t3) {
          if (Array.isArray(e2)) {
            var n3 = e2.length;
            return e2 = e2.map(function(e3) {
              return e3 + "";
            }), 2 < n3 ? "one of ".concat(t3, " ").concat(e2.slice(0, n3 - 1).join(", "), ", or ") + e2[n3 - 1] : 2 === n3 ? "one of ".concat(t3, " ").concat(e2[0], " or ").concat(e2[1]) : "of ".concat(t3, " ").concat(e2[0]);
          }
          return "of ".concat(t3, " ").concat(e2 + "");
        }
        function o(e2, t3, n3) {
          return e2.substr(!n3 || 0 > n3 ? 0 : +n3, t3.length) === t3;
        }
        function i(e2, t3, n3) {
          return (void 0 === n3 || n3 > e2.length) && (n3 = e2.length), e2.substring(n3 - t3.length, n3) === t3;
        }
        function d(e2, t3, n3) {
          return "number" != typeof n3 && (n3 = 0), !(n3 + t3.length > e2.length) && -1 !== e2.indexOf(t3, n3);
        }
        var s = {};
        r2("ERR_INVALID_OPT_VALUE", function(e2, t3) {
          return 'The value "' + t3 + '" is invalid for option "' + e2 + '"';
        }, TypeError), r2("ERR_INVALID_ARG_TYPE", function(e2, t3, n3) {
          var r3;
          "string" == typeof t3 && o(t3, "not ") ? (r3 = "must not be", t3 = t3.replace(/^not /, "")) : r3 = "must be";
          var s2;
          if (i(e2, " argument"))
            s2 = "The ".concat(e2, " ").concat(r3, " ").concat(a(t3, "type"));
          else {
            var l = d(e2, ".") ? "property" : "argument";
            s2 = 'The "'.concat(e2, '" ').concat(l, " ").concat(r3, " ").concat(a(t3, "type"));
          }
          return s2 += ". Received type ".concat(typeof n3), s2;
        }, TypeError), r2("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), r2("ERR_METHOD_NOT_IMPLEMENTED", function(e2) {
          return "The " + e2 + " method is not implemented";
        }), r2("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), r2("ERR_STREAM_DESTROYED", function(e2) {
          return "Cannot call " + e2 + " after a stream was destroyed";
        }), r2("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), r2("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), r2("ERR_STREAM_WRITE_AFTER_END", "write after end"), r2("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), r2("ERR_UNKNOWN_ENCODING", function(e2) {
          return "Unknown encoding: " + e2;
        }, TypeError), r2("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), t2.exports.codes = s;
      }, {}], 16: [function(e, t2) {
        (function(n2) {
          (function() {
            "use strict";
            function r2(e2) {
              return this instanceof r2 ? void (d.call(this, e2), s.call(this, e2), this.allowHalfOpen = true, e2 && (false === e2.readable && (this.readable = false), false === e2.writable && (this.writable = false), false === e2.allowHalfOpen && (this.allowHalfOpen = false, this.once("end", a)))) : new r2(e2);
            }
            function a() {
              this._writableState.ended || n2.nextTick(o, this);
            }
            function o(e2) {
              e2.end();
            }
            var i = Object.keys || function(e2) {
              var t3 = [];
              for (var n3 in e2)
                t3.push(n3);
              return t3;
            };
            t2.exports = r2;
            var d = e("./_stream_readable"), s = e("./_stream_writable");
            e("inherits")(r2, d);
            for (var l, c = i(s.prototype), u = 0; u < c.length; u++)
              l = c[u], r2.prototype[l] || (r2.prototype[l] = s.prototype[l]);
            Object.defineProperty(r2.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
              return this._writableState.highWaterMark;
            } }), Object.defineProperty(r2.prototype, "writableBuffer", { enumerable: false, get: function() {
              return this._writableState && this._writableState.getBuffer();
            } }), Object.defineProperty(r2.prototype, "writableLength", { enumerable: false, get: function() {
              return this._writableState.length;
            } }), Object.defineProperty(r2.prototype, "destroyed", { enumerable: false, get: function() {
              return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
            }, set: function(e2) {
              void 0 === this._readableState || void 0 === this._writableState || (this._readableState.destroyed = e2, this._writableState.destroyed = e2);
            } });
          }).call(this);
        }).call(this, e("_process"));
      }, { "./_stream_readable": 18, "./_stream_writable": 20, _process: 12, inherits: 10 }], 17: [function(e, t2) {
        "use strict";
        function n2(e2) {
          return this instanceof n2 ? void r2.call(this, e2) : new n2(e2);
        }
        t2.exports = n2;
        var r2 = e("./_stream_transform");
        e("inherits")(n2, r2), n2.prototype._transform = function(e2, t3, n3) {
          n3(null, e2);
        };
      }, { "./_stream_transform": 19, inherits: 10 }], 18: [function(e, t2) {
        (function(n2, r2) {
          (function() {
            "use strict";
            function a(e2) {
              return P.from(e2);
            }
            function o(e2) {
              return P.isBuffer(e2) || e2 instanceof M;
            }
            function i(e2, t3, n3) {
              return "function" == typeof e2.prependListener ? e2.prependListener(t3, n3) : void (e2._events && e2._events[t3] ? Array.isArray(e2._events[t3]) ? e2._events[t3].unshift(n3) : e2._events[t3] = [n3, e2._events[t3]] : e2.on(t3, n3));
            }
            function d(t3, n3, r3) {
              A = A || e("./_stream_duplex"), t3 = t3 || {}, "boolean" != typeof r3 && (r3 = n3 instanceof A), this.objectMode = !!t3.objectMode, r3 && (this.objectMode = this.objectMode || !!t3.readableObjectMode), this.highWaterMark = H(this, t3, "readableHighWaterMark", r3), this.buffer = new j(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this.paused = true, this.emitClose = false !== t3.emitClose, this.autoDestroy = !!t3.autoDestroy, this.destroyed = false, this.defaultEncoding = t3.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = false, this.decoder = null, this.encoding = null, t3.encoding && (!F && (F = e("string_decoder/").StringDecoder), this.decoder = new F(t3.encoding), this.encoding = t3.encoding);
            }
            function s(t3) {
              if (A = A || e("./_stream_duplex"), !(this instanceof s))
                return new s(t3);
              var n3 = this instanceof A;
              this._readableState = new d(t3, this, n3), this.readable = true, t3 && ("function" == typeof t3.read && (this._read = t3.read), "function" == typeof t3.destroy && (this._destroy = t3.destroy)), I.call(this);
            }
            function l(e2, t3, n3, r3, o2) {
              x("readableAddChunk", t3);
              var i2 = e2._readableState;
              if (null === t3)
                i2.reading = false, g(e2, i2);
              else {
                var d2;
                if (o2 || (d2 = u(i2, t3)), d2)
                  X(e2, d2);
                else if (!(i2.objectMode || t3 && 0 < t3.length))
                  r3 || (i2.reading = false, m(e2, i2));
                else if ("string" == typeof t3 || i2.objectMode || Object.getPrototypeOf(t3) === P.prototype || (t3 = a(t3)), r3)
                  i2.endEmitted ? X(e2, new K()) : c(e2, i2, t3, true);
                else if (i2.ended)
                  X(e2, new z());
                else {
                  if (i2.destroyed)
                    return false;
                  i2.reading = false, i2.decoder && !n3 ? (t3 = i2.decoder.write(t3), i2.objectMode || 0 !== t3.length ? c(e2, i2, t3, false) : m(e2, i2)) : c(e2, i2, t3, false);
                }
              }
              return !i2.ended && (i2.length < i2.highWaterMark || 0 === i2.length);
            }
            function c(e2, t3, n3, r3) {
              t3.flowing && 0 === t3.length && !t3.sync ? (t3.awaitDrain = 0, e2.emit("data", n3)) : (t3.length += t3.objectMode ? 1 : n3.length, r3 ? t3.buffer.unshift(n3) : t3.buffer.push(n3), t3.needReadable && _(e2)), m(e2, t3);
            }
            function u(e2, t3) {
              var n3;
              return o(t3) || "string" == typeof t3 || void 0 === t3 || e2.objectMode || (n3 = new V("chunk", ["string", "Buffer", "Uint8Array"], t3)), n3;
            }
            function p(e2) {
              return 1073741824 <= e2 ? e2 = 1073741824 : (e2--, e2 |= e2 >>> 1, e2 |= e2 >>> 2, e2 |= e2 >>> 4, e2 |= e2 >>> 8, e2 |= e2 >>> 16, e2++), e2;
            }
            function f(e2, t3) {
              return 0 >= e2 || 0 === t3.length && t3.ended ? 0 : t3.objectMode ? 1 : e2 === e2 ? (e2 > t3.highWaterMark && (t3.highWaterMark = p(e2)), e2 <= t3.length ? e2 : t3.ended ? t3.length : (t3.needReadable = true, 0)) : t3.flowing && t3.length ? t3.buffer.head.data.length : t3.length;
            }
            function g(e2, t3) {
              if (x("onEofChunk"), !t3.ended) {
                if (t3.decoder) {
                  var n3 = t3.decoder.end();
                  n3 && n3.length && (t3.buffer.push(n3), t3.length += t3.objectMode ? 1 : n3.length);
                }
                t3.ended = true, t3.sync ? _(e2) : (t3.needReadable = false, !t3.emittedReadable && (t3.emittedReadable = true, h(e2)));
              }
            }
            function _(e2) {
              var t3 = e2._readableState;
              x("emitReadable", t3.needReadable, t3.emittedReadable), t3.needReadable = false, t3.emittedReadable || (x("emitReadable", t3.flowing), t3.emittedReadable = true, n2.nextTick(h, e2));
            }
            function h(e2) {
              var t3 = e2._readableState;
              x("emitReadable_", t3.destroyed, t3.length, t3.ended), !t3.destroyed && (t3.length || t3.ended) && (e2.emit("readable"), t3.emittedReadable = false), t3.needReadable = !t3.flowing && !t3.ended && t3.length <= t3.highWaterMark, S(e2);
            }
            function m(e2, t3) {
              t3.readingMore || (t3.readingMore = true, n2.nextTick(b, e2, t3));
            }
            function b(e2, t3) {
              for (; !t3.reading && !t3.ended && (t3.length < t3.highWaterMark || t3.flowing && 0 === t3.length); ) {
                var n3 = t3.length;
                if (x("maybeReadMore read 0"), e2.read(0), n3 === t3.length)
                  break;
              }
              t3.readingMore = false;
            }
            function y(e2) {
              return function() {
                var t3 = e2._readableState;
                x("pipeOnDrain", t3.awaitDrain), t3.awaitDrain && t3.awaitDrain--, 0 === t3.awaitDrain && D(e2, "data") && (t3.flowing = true, S(e2));
              };
            }
            function C(e2) {
              var t3 = e2._readableState;
              t3.readableListening = 0 < e2.listenerCount("readable"), t3.resumeScheduled && !t3.paused ? t3.flowing = true : 0 < e2.listenerCount("data") && e2.resume();
            }
            function R(e2) {
              x("readable nexttick read 0"), e2.read(0);
            }
            function E(e2, t3) {
              t3.resumeScheduled || (t3.resumeScheduled = true, n2.nextTick(w, e2, t3));
            }
            function w(e2, t3) {
              x("resume", t3.reading), t3.reading || e2.read(0), t3.resumeScheduled = false, e2.emit("resume"), S(e2), t3.flowing && !t3.reading && e2.read(0);
            }
            function S(e2) {
              var t3 = e2._readableState;
              for (x("flow", t3.flowing); t3.flowing && null !== e2.read(); )
                ;
            }
            function T(e2, t3) {
              if (0 === t3.length)
                return null;
              var n3;
              return t3.objectMode ? n3 = t3.buffer.shift() : !e2 || e2 >= t3.length ? (n3 = t3.decoder ? t3.buffer.join("") : 1 === t3.buffer.length ? t3.buffer.first() : t3.buffer.concat(t3.length), t3.buffer.clear()) : n3 = t3.buffer.consume(e2, t3.decoder), n3;
            }
            function v(e2) {
              var t3 = e2._readableState;
              x("endReadable", t3.endEmitted), t3.endEmitted || (t3.ended = true, n2.nextTick(k, t3, e2));
            }
            function k(e2, t3) {
              if (x("endReadableNT", e2.endEmitted, e2.length), !e2.endEmitted && 0 === e2.length && (e2.endEmitted = true, t3.readable = false, t3.emit("end"), e2.autoDestroy)) {
                var n3 = t3._writableState;
                (!n3 || n3.autoDestroy && n3.finished) && t3.destroy();
              }
            }
            function L(e2, t3) {
              for (var n3 = 0, r3 = e2.length; n3 < r3; n3++)
                if (e2[n3] === t3)
                  return n3;
              return -1;
            }
            t2.exports = s;
            var A;
            s.ReadableState = d;
            var x, N = e("events").EventEmitter, D = function(e2, t3) {
              return e2.listeners(t3).length;
            }, I = e("./internal/streams/stream"), P = e("buffer").Buffer, M = r2.Uint8Array || function() {
            }, O = e("util");
            x = O && O.debuglog ? O.debuglog("stream") : function() {
            };
            var F, B, U, j = e("./internal/streams/buffer_list"), q = e("./internal/streams/destroy"), W = e("./internal/streams/state"), H = W.getHighWaterMark, Y = e("../errors").codes, V = Y.ERR_INVALID_ARG_TYPE, z = Y.ERR_STREAM_PUSH_AFTER_EOF, G = Y.ERR_METHOD_NOT_IMPLEMENTED, K = Y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
            e("inherits")(s, I);
            var X = q.errorOrDestroy, $ = ["error", "close", "destroy", "pause", "resume"];
            Object.defineProperty(s.prototype, "destroyed", { enumerable: false, get: function() {
              return void 0 !== this._readableState && this._readableState.destroyed;
            }, set: function(e2) {
              this._readableState && (this._readableState.destroyed = e2);
            } }), s.prototype.destroy = q.destroy, s.prototype._undestroy = q.undestroy, s.prototype._destroy = function(e2, t3) {
              t3(e2);
            }, s.prototype.push = function(e2, t3) {
              var n3, r3 = this._readableState;
              return r3.objectMode ? n3 = true : "string" == typeof e2 && (t3 = t3 || r3.defaultEncoding, t3 !== r3.encoding && (e2 = P.from(e2, t3), t3 = ""), n3 = true), l(this, e2, t3, false, n3);
            }, s.prototype.unshift = function(e2) {
              return l(this, e2, null, true, false);
            }, s.prototype.isPaused = function() {
              return false === this._readableState.flowing;
            }, s.prototype.setEncoding = function(t3) {
              F || (F = e("string_decoder/").StringDecoder);
              var n3 = new F(t3);
              this._readableState.decoder = n3, this._readableState.encoding = this._readableState.decoder.encoding;
              for (var r3 = this._readableState.buffer.head, a2 = ""; null !== r3; )
                a2 += n3.write(r3.data), r3 = r3.next;
              return this._readableState.buffer.clear(), "" !== a2 && this._readableState.buffer.push(a2), this._readableState.length = a2.length, this;
            };
            s.prototype.read = function(e2) {
              x("read", e2), e2 = parseInt(e2, 10);
              var t3 = this._readableState, r3 = e2;
              if (0 !== e2 && (t3.emittedReadable = false), 0 === e2 && t3.needReadable && ((0 === t3.highWaterMark ? 0 < t3.length : t3.length >= t3.highWaterMark) || t3.ended))
                return x("read: emitReadable", t3.length, t3.ended), 0 === t3.length && t3.ended ? v(this) : _(this), null;
              if (e2 = f(e2, t3), 0 === e2 && t3.ended)
                return 0 === t3.length && v(this), null;
              var a2 = t3.needReadable;
              x("need readable", a2), (0 === t3.length || t3.length - e2 < t3.highWaterMark) && (a2 = true, x("length less than watermark", a2)), t3.ended || t3.reading ? (a2 = false, x("reading or ended", a2)) : a2 && (x("do read"), t3.reading = true, t3.sync = true, 0 === t3.length && (t3.needReadable = true), this._read(t3.highWaterMark), t3.sync = false, !t3.reading && (e2 = f(r3, t3)));
              var o2;
              return o2 = 0 < e2 ? T(e2, t3) : null, null === o2 ? (t3.needReadable = t3.length <= t3.highWaterMark, e2 = 0) : (t3.length -= e2, t3.awaitDrain = 0), 0 === t3.length && (!t3.ended && (t3.needReadable = true), r3 !== e2 && t3.ended && v(this)), null !== o2 && this.emit("data", o2), o2;
            }, s.prototype._read = function() {
              X(this, new G("_read()"));
            }, s.prototype.pipe = function(e2, t3) {
              function r3(e3, t4) {
                x("onunpipe"), e3 === p2 && t4 && false === t4.hasUnpiped && (t4.hasUnpiped = true, o2());
              }
              function a2() {
                x("onend"), e2.end();
              }
              function o2() {
                x("cleanup"), e2.removeListener("close", l2), e2.removeListener("finish", c2), e2.removeListener("drain", h2), e2.removeListener("error", s2), e2.removeListener("unpipe", r3), p2.removeListener("end", a2), p2.removeListener("end", u2), p2.removeListener("data", d2), m2 = true, f2.awaitDrain && (!e2._writableState || e2._writableState.needDrain) && h2();
              }
              function d2(t4) {
                x("ondata");
                var n3 = e2.write(t4);
                x("dest.write", n3), false === n3 && ((1 === f2.pipesCount && f2.pipes === e2 || 1 < f2.pipesCount && -1 !== L(f2.pipes, e2)) && !m2 && (x("false write response, pause", f2.awaitDrain), f2.awaitDrain++), p2.pause());
              }
              function s2(t4) {
                x("onerror", t4), u2(), e2.removeListener("error", s2), 0 === D(e2, "error") && X(e2, t4);
              }
              function l2() {
                e2.removeListener("finish", c2), u2();
              }
              function c2() {
                x("onfinish"), e2.removeListener("close", l2), u2();
              }
              function u2() {
                x("unpipe"), p2.unpipe(e2);
              }
              var p2 = this, f2 = this._readableState;
              switch (f2.pipesCount) {
                case 0:
                  f2.pipes = e2;
                  break;
                case 1:
                  f2.pipes = [f2.pipes, e2];
                  break;
                default:
                  f2.pipes.push(e2);
              }
              f2.pipesCount += 1, x("pipe count=%d opts=%j", f2.pipesCount, t3);
              var g2 = (!t3 || false !== t3.end) && e2 !== n2.stdout && e2 !== n2.stderr, _2 = g2 ? a2 : u2;
              f2.endEmitted ? n2.nextTick(_2) : p2.once("end", _2), e2.on("unpipe", r3);
              var h2 = y(p2);
              e2.on("drain", h2);
              var m2 = false;
              return p2.on("data", d2), i(e2, "error", s2), e2.once("close", l2), e2.once("finish", c2), e2.emit("pipe", p2), f2.flowing || (x("pipe resume"), p2.resume()), e2;
            }, s.prototype.unpipe = function(e2) {
              var t3 = this._readableState, n3 = { hasUnpiped: false };
              if (0 === t3.pipesCount)
                return this;
              if (1 === t3.pipesCount)
                return e2 && e2 !== t3.pipes ? this : (e2 || (e2 = t3.pipes), t3.pipes = null, t3.pipesCount = 0, t3.flowing = false, e2 && e2.emit("unpipe", this, n3), this);
              if (!e2) {
                var r3 = t3.pipes, a2 = t3.pipesCount;
                t3.pipes = null, t3.pipesCount = 0, t3.flowing = false;
                for (var o2 = 0; o2 < a2; o2++)
                  r3[o2].emit("unpipe", this, { hasUnpiped: false });
                return this;
              }
              var d2 = L(t3.pipes, e2);
              return -1 === d2 ? this : (t3.pipes.splice(d2, 1), t3.pipesCount -= 1, 1 === t3.pipesCount && (t3.pipes = t3.pipes[0]), e2.emit("unpipe", this, n3), this);
            }, s.prototype.on = function(e2, t3) {
              var r3 = I.prototype.on.call(this, e2, t3), a2 = this._readableState;
              return "data" === e2 ? (a2.readableListening = 0 < this.listenerCount("readable"), false !== a2.flowing && this.resume()) : "readable" == e2 && !a2.endEmitted && !a2.readableListening && (a2.readableListening = a2.needReadable = true, a2.flowing = false, a2.emittedReadable = false, x("on readable", a2.length, a2.reading), a2.length ? _(this) : !a2.reading && n2.nextTick(R, this)), r3;
            }, s.prototype.addListener = s.prototype.on, s.prototype.removeListener = function(e2, t3) {
              var r3 = I.prototype.removeListener.call(this, e2, t3);
              return "readable" === e2 && n2.nextTick(C, this), r3;
            }, s.prototype.removeAllListeners = function(e2) {
              var t3 = I.prototype.removeAllListeners.apply(this, arguments);
              return ("readable" === e2 || void 0 === e2) && n2.nextTick(C, this), t3;
            }, s.prototype.resume = function() {
              var e2 = this._readableState;
              return e2.flowing || (x("resume"), e2.flowing = !e2.readableListening, E(this, e2)), e2.paused = false, this;
            }, s.prototype.pause = function() {
              return x("call pause flowing=%j", this._readableState.flowing), false !== this._readableState.flowing && (x("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState.paused = true, this;
            }, s.prototype.wrap = function(e2) {
              var t3 = this, r3 = this._readableState, a2 = false;
              for (var o2 in e2.on("end", function() {
                if (x("wrapped end"), r3.decoder && !r3.ended) {
                  var e3 = r3.decoder.end();
                  e3 && e3.length && t3.push(e3);
                }
                t3.push(null);
              }), e2.on("data", function(n3) {
                if ((x("wrapped data"), r3.decoder && (n3 = r3.decoder.write(n3)), !(r3.objectMode && (null === n3 || void 0 === n3))) && (r3.objectMode || n3 && n3.length)) {
                  var o3 = t3.push(n3);
                  o3 || (a2 = true, e2.pause());
                }
              }), e2)
                void 0 === this[o2] && "function" == typeof e2[o2] && (this[o2] = /* @__PURE__ */ function(t4) {
                  return function() {
                    return e2[t4].apply(e2, arguments);
                  };
                }(o2));
              for (var i2 = 0; i2 < $.length; i2++)
                e2.on($[i2], this.emit.bind(this, $[i2]));
              return this._read = function(t4) {
                x("wrapped _read", t4), a2 && (a2 = false, e2.resume());
              }, this;
            }, "function" == typeof Symbol && (s.prototype[Symbol.asyncIterator] = function() {
              return void 0 === B && (B = e("./internal/streams/async_iterator")), B(this);
            }), Object.defineProperty(s.prototype, "readableHighWaterMark", { enumerable: false, get: function() {
              return this._readableState.highWaterMark;
            } }), Object.defineProperty(s.prototype, "readableBuffer", { enumerable: false, get: function() {
              return this._readableState && this._readableState.buffer;
            } }), Object.defineProperty(s.prototype, "readableFlowing", { enumerable: false, get: function() {
              return this._readableState.flowing;
            }, set: function(e2) {
              this._readableState && (this._readableState.flowing = e2);
            } }), s._fromList = T, Object.defineProperty(s.prototype, "readableLength", { enumerable: false, get: function() {
              return this._readableState.length;
            } }), "function" == typeof Symbol && (s.from = function(t3, n3) {
              return void 0 === U && (U = e("./internal/streams/from")), U(s, t3, n3);
            });
          }).call(this);
        }).call(this, e("_process"), "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {} : window : self : global);
      }, { "../errors": 15, "./_stream_duplex": 16, "./internal/streams/async_iterator": 21, "./internal/streams/buffer_list": 22, "./internal/streams/destroy": 23, "./internal/streams/from": 25, "./internal/streams/state": 27, "./internal/streams/stream": 28, _process: 12, buffer: 3, events: 7, inherits: 10, "string_decoder/": 31, util: 2 }], 19: [function(e, t2) {
        "use strict";
        function n2(e2, t3) {
          var n3 = this._transformState;
          n3.transforming = false;
          var r3 = n3.writecb;
          if (null === r3)
            return this.emit("error", new s());
          n3.writechunk = null, n3.writecb = null, null != t3 && this.push(t3), r3(e2);
          var a2 = this._readableState;
          a2.reading = false, (a2.needReadable || a2.length < a2.highWaterMark) && this._read(a2.highWaterMark);
        }
        function r2(e2) {
          return this instanceof r2 ? void (u.call(this, e2), this._transformState = { afterTransform: n2.bind(this), needTransform: false, transforming: false, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = true, this._readableState.sync = false, e2 && ("function" == typeof e2.transform && (this._transform = e2.transform), "function" == typeof e2.flush && (this._flush = e2.flush)), this.on("prefinish", a)) : new r2(e2);
        }
        function a() {
          var e2 = this;
          "function" != typeof this._flush || this._readableState.destroyed ? o(this, null, null) : this._flush(function(t3, n3) {
            o(e2, t3, n3);
          });
        }
        function o(e2, t3, n3) {
          if (t3)
            return e2.emit("error", t3);
          if (null != n3 && e2.push(n3), e2._writableState.length)
            throw new c();
          if (e2._transformState.transforming)
            throw new l();
          return e2.push(null);
        }
        t2.exports = r2;
        var i = e("../errors").codes, d = i.ERR_METHOD_NOT_IMPLEMENTED, s = i.ERR_MULTIPLE_CALLBACK, l = i.ERR_TRANSFORM_ALREADY_TRANSFORMING, c = i.ERR_TRANSFORM_WITH_LENGTH_0, u = e("./_stream_duplex");
        e("inherits")(r2, u), r2.prototype.push = function(e2, t3) {
          return this._transformState.needTransform = false, u.prototype.push.call(this, e2, t3);
        }, r2.prototype._transform = function(e2, t3, n3) {
          n3(new d("_transform()"));
        }, r2.prototype._write = function(e2, t3, n3) {
          var r3 = this._transformState;
          if (r3.writecb = n3, r3.writechunk = e2, r3.writeencoding = t3, !r3.transforming) {
            var a2 = this._readableState;
            (r3.needTransform || a2.needReadable || a2.length < a2.highWaterMark) && this._read(a2.highWaterMark);
          }
        }, r2.prototype._read = function() {
          var e2 = this._transformState;
          null === e2.writechunk || e2.transforming ? e2.needTransform = true : (e2.transforming = true, this._transform(e2.writechunk, e2.writeencoding, e2.afterTransform));
        }, r2.prototype._destroy = function(e2, t3) {
          u.prototype._destroy.call(this, e2, function(e3) {
            t3(e3);
          });
        };
      }, { "../errors": 15, "./_stream_duplex": 16, inherits: 10 }], 20: [function(e, t2) {
        (function(n2, r2) {
          (function() {
            "use strict";
            function a(e2) {
              var t3 = this;
              this.next = null, this.entry = null, this.finish = function() {
                v(t3, e2);
              };
            }
            function o(e2) {
              return x.from(e2);
            }
            function i(e2) {
              return x.isBuffer(e2) || e2 instanceof N;
            }
            function d() {
            }
            function s(t3, n3, r3) {
              k = k || e("./_stream_duplex"), t3 = t3 || {}, "boolean" != typeof r3 && (r3 = n3 instanceof k), this.objectMode = !!t3.objectMode, r3 && (this.objectMode = this.objectMode || !!t3.writableObjectMode), this.highWaterMark = P(this, t3, "writableHighWaterMark", r3), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
              var o2 = false === t3.decodeStrings;
              this.decodeStrings = !o2, this.defaultEncoding = t3.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = function(e2) {
                m(n3, e2);
              }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = false, this.errorEmitted = false, this.emitClose = false !== t3.emitClose, this.autoDestroy = !!t3.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new a(this);
            }
            function l(t3) {
              k = k || e("./_stream_duplex");
              var n3 = this instanceof k;
              return n3 || V.call(l, this) ? void (this._writableState = new s(t3, this, n3), this.writable = true, t3 && ("function" == typeof t3.write && (this._write = t3.write), "function" == typeof t3.writev && (this._writev = t3.writev), "function" == typeof t3.destroy && (this._destroy = t3.destroy), "function" == typeof t3.final && (this._final = t3.final)), A.call(this)) : new l(t3);
            }
            function c(e2, t3) {
              var r3 = new W();
              Y(e2, r3), n2.nextTick(t3, r3);
            }
            function u(e2, t3, r3, a2) {
              var o2;
              return null === r3 ? o2 = new q() : "string" != typeof r3 && !t3.objectMode && (o2 = new O("chunk", ["string", "Buffer"], r3)), !o2 || (Y(e2, o2), n2.nextTick(a2, o2), false);
            }
            function p(e2, t3, n3) {
              return e2.objectMode || false === e2.decodeStrings || "string" != typeof t3 || (t3 = x.from(t3, n3)), t3;
            }
            function f(e2, t3, n3, r3, a2, o2) {
              if (!n3) {
                var i2 = p(t3, r3, a2);
                r3 !== i2 && (n3 = true, a2 = "buffer", r3 = i2);
              }
              var d2 = t3.objectMode ? 1 : r3.length;
              t3.length += d2;
              var s2 = t3.length < t3.highWaterMark;
              if (s2 || (t3.needDrain = true), t3.writing || t3.corked) {
                var l2 = t3.lastBufferedRequest;
                t3.lastBufferedRequest = { chunk: r3, encoding: a2, isBuf: n3, callback: o2, next: null }, l2 ? l2.next = t3.lastBufferedRequest : t3.bufferedRequest = t3.lastBufferedRequest, t3.bufferedRequestCount += 1;
              } else
                g(e2, t3, false, d2, r3, a2, o2);
              return s2;
            }
            function g(e2, t3, n3, r3, a2, o2, i2) {
              t3.writelen = r3, t3.writecb = i2, t3.writing = true, t3.sync = true, t3.destroyed ? t3.onwrite(new j("write")) : n3 ? e2._writev(a2, t3.onwrite) : e2._write(a2, o2, t3.onwrite), t3.sync = false;
            }
            function _(e2, t3, r3, a2, o2) {
              --t3.pendingcb, r3 ? (n2.nextTick(o2, a2), n2.nextTick(S, e2, t3), e2._writableState.errorEmitted = true, Y(e2, a2)) : (o2(a2), e2._writableState.errorEmitted = true, Y(e2, a2), S(e2, t3));
            }
            function h(e2) {
              e2.writing = false, e2.writecb = null, e2.length -= e2.writelen, e2.writelen = 0;
            }
            function m(e2, t3) {
              var r3 = e2._writableState, a2 = r3.sync, o2 = r3.writecb;
              if ("function" != typeof o2)
                throw new B();
              if (h(r3), t3)
                _(e2, r3, a2, t3, o2);
              else {
                var i2 = R(r3) || e2.destroyed;
                i2 || r3.corked || r3.bufferProcessing || !r3.bufferedRequest || C(e2, r3), a2 ? n2.nextTick(b, e2, r3, i2, o2) : b(e2, r3, i2, o2);
              }
            }
            function b(e2, t3, n3, r3) {
              n3 || y(e2, t3), t3.pendingcb--, r3(), S(e2, t3);
            }
            function y(e2, t3) {
              0 === t3.length && t3.needDrain && (t3.needDrain = false, e2.emit("drain"));
            }
            function C(e2, t3) {
              t3.bufferProcessing = true;
              var n3 = t3.bufferedRequest;
              if (e2._writev && n3 && n3.next) {
                var r3 = t3.bufferedRequestCount, o2 = Array(r3), i2 = t3.corkedRequestsFree;
                i2.entry = n3;
                for (var d2 = 0, s2 = true; n3; )
                  o2[d2] = n3, n3.isBuf || (s2 = false), n3 = n3.next, d2 += 1;
                o2.allBuffers = s2, g(e2, t3, true, t3.length, o2, "", i2.finish), t3.pendingcb++, t3.lastBufferedRequest = null, i2.next ? (t3.corkedRequestsFree = i2.next, i2.next = null) : t3.corkedRequestsFree = new a(t3), t3.bufferedRequestCount = 0;
              } else {
                for (; n3; ) {
                  var l2 = n3.chunk, c2 = n3.encoding, u2 = n3.callback, p2 = t3.objectMode ? 1 : l2.length;
                  if (g(e2, t3, false, p2, l2, c2, u2), n3 = n3.next, t3.bufferedRequestCount--, t3.writing)
                    break;
                }
                null === n3 && (t3.lastBufferedRequest = null);
              }
              t3.bufferedRequest = n3, t3.bufferProcessing = false;
            }
            function R(e2) {
              return e2.ending && 0 === e2.length && null === e2.bufferedRequest && !e2.finished && !e2.writing;
            }
            function E(e2, t3) {
              e2._final(function(n3) {
                t3.pendingcb--, n3 && Y(e2, n3), t3.prefinished = true, e2.emit("prefinish"), S(e2, t3);
              });
            }
            function w(e2, t3) {
              t3.prefinished || t3.finalCalled || ("function" != typeof e2._final || t3.destroyed ? (t3.prefinished = true, e2.emit("prefinish")) : (t3.pendingcb++, t3.finalCalled = true, n2.nextTick(E, e2, t3)));
            }
            function S(e2, t3) {
              var n3 = R(t3);
              if (n3 && (w(e2, t3), 0 === t3.pendingcb && (t3.finished = true, e2.emit("finish"), t3.autoDestroy))) {
                var r3 = e2._readableState;
                (!r3 || r3.autoDestroy && r3.endEmitted) && e2.destroy();
              }
              return n3;
            }
            function T(e2, t3, r3) {
              t3.ending = true, S(e2, t3), r3 && (t3.finished ? n2.nextTick(r3) : e2.once("finish", r3)), t3.ended = true, e2.writable = false;
            }
            function v(e2, t3, n3) {
              var r3 = e2.entry;
              for (e2.entry = null; r3; ) {
                var a2 = r3.callback;
                t3.pendingcb--, a2(n3), r3 = r3.next;
              }
              t3.corkedRequestsFree.next = e2;
            }
            t2.exports = l;
            var k;
            l.WritableState = s;
            var L = { deprecate: e("util-deprecate") }, A = e("./internal/streams/stream"), x = e("buffer").Buffer, N = r2.Uint8Array || function() {
            }, D = e("./internal/streams/destroy"), I = e("./internal/streams/state"), P = I.getHighWaterMark, M = e("../errors").codes, O = M.ERR_INVALID_ARG_TYPE, F = M.ERR_METHOD_NOT_IMPLEMENTED, B = M.ERR_MULTIPLE_CALLBACK, U = M.ERR_STREAM_CANNOT_PIPE, j = M.ERR_STREAM_DESTROYED, q = M.ERR_STREAM_NULL_VALUES, W = M.ERR_STREAM_WRITE_AFTER_END, H = M.ERR_UNKNOWN_ENCODING, Y = D.errorOrDestroy;
            e("inherits")(l, A), s.prototype.getBuffer = function() {
              for (var e2 = this.bufferedRequest, t3 = []; e2; )
                t3.push(e2), e2 = e2.next;
              return t3;
            }, function() {
              try {
                Object.defineProperty(s.prototype, "buffer", { get: L.deprecate(function() {
                  return this.getBuffer();
                }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
              } catch (e2) {
              }
            }();
            var V;
            "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (V = Function.prototype[Symbol.hasInstance], Object.defineProperty(l, Symbol.hasInstance, { value: function(e2) {
              return !!V.call(this, e2) || !(this !== l) && e2 && e2._writableState instanceof s;
            } })) : V = function(e2) {
              return e2 instanceof this;
            }, l.prototype.pipe = function() {
              Y(this, new U());
            }, l.prototype.write = function(e2, t3, n3) {
              var r3 = this._writableState, a2 = false, s2 = !r3.objectMode && i(e2);
              return s2 && !x.isBuffer(e2) && (e2 = o(e2)), "function" == typeof t3 && (n3 = t3, t3 = null), s2 ? t3 = "buffer" : !t3 && (t3 = r3.defaultEncoding), "function" != typeof n3 && (n3 = d), r3.ending ? c(this, n3) : (s2 || u(this, r3, e2, n3)) && (r3.pendingcb++, a2 = f(this, r3, s2, e2, t3, n3)), a2;
            }, l.prototype.cork = function() {
              this._writableState.corked++;
            }, l.prototype.uncork = function() {
              var e2 = this._writableState;
              e2.corked && (e2.corked--, !e2.writing && !e2.corked && !e2.bufferProcessing && e2.bufferedRequest && C(this, e2));
            }, l.prototype.setDefaultEncoding = function(e2) {
              if ("string" == typeof e2 && (e2 = e2.toLowerCase()), !(-1 < ["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e2 + "").toLowerCase())))
                throw new H(e2);
              return this._writableState.defaultEncoding = e2, this;
            }, Object.defineProperty(l.prototype, "writableBuffer", { enumerable: false, get: function() {
              return this._writableState && this._writableState.getBuffer();
            } }), Object.defineProperty(l.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
              return this._writableState.highWaterMark;
            } }), l.prototype._write = function(e2, t3, n3) {
              n3(new F("_write()"));
            }, l.prototype._writev = null, l.prototype.end = function(e2, t3, n3) {
              var r3 = this._writableState;
              return "function" == typeof e2 ? (n3 = e2, e2 = null, t3 = null) : "function" == typeof t3 && (n3 = t3, t3 = null), null !== e2 && void 0 !== e2 && this.write(e2, t3), r3.corked && (r3.corked = 1, this.uncork()), r3.ending || T(this, r3, n3), this;
            }, Object.defineProperty(l.prototype, "writableLength", { enumerable: false, get: function() {
              return this._writableState.length;
            } }), Object.defineProperty(l.prototype, "destroyed", { enumerable: false, get: function() {
              return void 0 !== this._writableState && this._writableState.destroyed;
            }, set: function(e2) {
              this._writableState && (this._writableState.destroyed = e2);
            } }), l.prototype.destroy = D.destroy, l.prototype._undestroy = D.undestroy, l.prototype._destroy = function(e2, t3) {
              t3(e2);
            };
          }).call(this);
        }).call(this, e("_process"), "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {} : window : self : global);
      }, { "../errors": 15, "./_stream_duplex": 16, "./internal/streams/destroy": 23, "./internal/streams/state": 27, "./internal/streams/stream": 28, _process: 12, buffer: 3, inherits: 10, "util-deprecate": 32 }], 21: [function(e, t2) {
        (function(n2) {
          (function() {
            "use strict";
            function r2(e2, t3, n3) {
              return t3 in e2 ? Object.defineProperty(e2, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t3] = n3, e2;
            }
            function a(e2, t3) {
              return { value: e2, done: t3 };
            }
            function o(e2) {
              var t3 = e2[c];
              if (null !== t3) {
                var n3 = e2[h].read();
                null !== n3 && (e2[g] = null, e2[c] = null, e2[u] = null, t3(a(n3, false)));
              }
            }
            function i(e2) {
              n2.nextTick(o, e2);
            }
            function d(e2, t3) {
              return function(n3, r3) {
                e2.then(function() {
                  return t3[f] ? void n3(a(void 0, true)) : void t3[_](n3, r3);
                }, r3);
              };
            }
            var s, l = e("./end-of-stream"), c = Symbol("lastResolve"), u = Symbol("lastReject"), p = Symbol("error"), f = Symbol("ended"), g = Symbol("lastPromise"), _ = Symbol("handlePromise"), h = Symbol("stream"), m = Object.getPrototypeOf(function() {
            }), b = Object.setPrototypeOf((s = { get stream() {
              return this[h];
            }, next: function() {
              var e2 = this, t3 = this[p];
              if (null !== t3)
                return Promise.reject(t3);
              if (this[f])
                return Promise.resolve(a(void 0, true));
              if (this[h].destroyed)
                return new Promise(function(t4, r4) {
                  n2.nextTick(function() {
                    e2[p] ? r4(e2[p]) : t4(a(void 0, true));
                  });
                });
              var r3, o2 = this[g];
              if (o2)
                r3 = new Promise(d(o2, this));
              else {
                var i2 = this[h].read();
                if (null !== i2)
                  return Promise.resolve(a(i2, false));
                r3 = new Promise(this[_]);
              }
              return this[g] = r3, r3;
            } }, r2(s, Symbol.asyncIterator, function() {
              return this;
            }), r2(s, "return", function() {
              var e2 = this;
              return new Promise(function(t3, n3) {
                e2[h].destroy(null, function(e3) {
                  return e3 ? void n3(e3) : void t3(a(void 0, true));
                });
              });
            }), s), m);
            t2.exports = function(e2) {
              var t3, n3 = Object.create(b, (t3 = {}, r2(t3, h, { value: e2, writable: true }), r2(t3, c, { value: null, writable: true }), r2(t3, u, { value: null, writable: true }), r2(t3, p, { value: null, writable: true }), r2(t3, f, { value: e2._readableState.endEmitted, writable: true }), r2(t3, _, { value: function(e3, t4) {
                var r3 = n3[h].read();
                r3 ? (n3[g] = null, n3[c] = null, n3[u] = null, e3(a(r3, false))) : (n3[c] = e3, n3[u] = t4);
              }, writable: true }), t3));
              return n3[g] = null, l(e2, function(e3) {
                if (e3 && "ERR_STREAM_PREMATURE_CLOSE" !== e3.code) {
                  var t4 = n3[u];
                  return null !== t4 && (n3[g] = null, n3[c] = null, n3[u] = null, t4(e3)), void (n3[p] = e3);
                }
                var r3 = n3[c];
                null !== r3 && (n3[g] = null, n3[c] = null, n3[u] = null, r3(a(void 0, true))), n3[f] = true;
              }), e2.on("readable", i.bind(null, n3)), n3;
            };
          }).call(this);
        }).call(this, e("_process"));
      }, { "./end-of-stream": 24, _process: 12 }], 22: [function(e, t2) {
        "use strict";
        function n2(e2, t3) {
          var n3 = Object.keys(e2);
          if (Object.getOwnPropertySymbols) {
            var r3 = Object.getOwnPropertySymbols(e2);
            t3 && (r3 = r3.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e2, t4).enumerable;
            })), n3.push.apply(n3, r3);
          }
          return n3;
        }
        function r2(e2) {
          for (var t3, r3 = 1; r3 < arguments.length; r3++)
            t3 = null == arguments[r3] ? {} : arguments[r3], r3 % 2 ? n2(Object(t3), true).forEach(function(n3) {
              a(e2, n3, t3[n3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t3)) : n2(Object(t3)).forEach(function(n3) {
              Object.defineProperty(e2, n3, Object.getOwnPropertyDescriptor(t3, n3));
            });
          return e2;
        }
        function a(e2, t3, n3) {
          return t3 in e2 ? Object.defineProperty(e2, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t3] = n3, e2;
        }
        function o(e2, t3) {
          if (!(e2 instanceof t3))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(e2, t3) {
          for (var n3, r3 = 0; r3 < t3.length; r3++)
            n3 = t3[r3], n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(e2, n3.key, n3);
        }
        function d(e2, t3, n3) {
          return t3 && i(e2.prototype, t3), n3 && i(e2, n3), e2;
        }
        function s(e2, t3, n3) {
          u.prototype.copy.call(e2, t3, n3);
        }
        var l = e("buffer"), u = l.Buffer, p = e("util"), f = p.inspect, g = f && f.custom || "inspect";
        t2.exports = function() {
          function e2() {
            o(this, e2), this.head = null, this.tail = null, this.length = 0;
          }
          return d(e2, [{ key: "push", value: function(e3) {
            var t3 = { data: e3, next: null };
            0 < this.length ? this.tail.next = t3 : this.head = t3, this.tail = t3, ++this.length;
          } }, { key: "unshift", value: function(e3) {
            var t3 = { data: e3, next: this.head };
            0 === this.length && (this.tail = t3), this.head = t3, ++this.length;
          } }, { key: "shift", value: function() {
            if (0 !== this.length) {
              var e3 = this.head.data;
              return this.head = 1 === this.length ? this.tail = null : this.head.next, --this.length, e3;
            }
          } }, { key: "clear", value: function() {
            this.head = this.tail = null, this.length = 0;
          } }, { key: "join", value: function(e3) {
            if (0 === this.length)
              return "";
            for (var t3 = this.head, n3 = "" + t3.data; t3 = t3.next; )
              n3 += e3 + t3.data;
            return n3;
          } }, { key: "concat", value: function(e3) {
            if (0 === this.length)
              return u.alloc(0);
            for (var t3 = u.allocUnsafe(e3 >>> 0), n3 = this.head, r3 = 0; n3; )
              s(n3.data, t3, r3), r3 += n3.data.length, n3 = n3.next;
            return t3;
          } }, { key: "consume", value: function(e3, t3) {
            var n3;
            return e3 < this.head.data.length ? (n3 = this.head.data.slice(0, e3), this.head.data = this.head.data.slice(e3)) : e3 === this.head.data.length ? n3 = this.shift() : n3 = t3 ? this._getString(e3) : this._getBuffer(e3), n3;
          } }, { key: "first", value: function() {
            return this.head.data;
          } }, { key: "_getString", value: function(e3) {
            var t3 = this.head, r3 = 1, a2 = t3.data;
            for (e3 -= a2.length; t3 = t3.next; ) {
              var o2 = t3.data, i2 = e3 > o2.length ? o2.length : e3;
              if (a2 += i2 === o2.length ? o2 : o2.slice(0, e3), e3 -= i2, 0 === e3) {
                i2 === o2.length ? (++r3, this.head = t3.next ? t3.next : this.tail = null) : (this.head = t3, t3.data = o2.slice(i2));
                break;
              }
              ++r3;
            }
            return this.length -= r3, a2;
          } }, { key: "_getBuffer", value: function(e3) {
            var t3 = u.allocUnsafe(e3), r3 = this.head, a2 = 1;
            for (r3.data.copy(t3), e3 -= r3.data.length; r3 = r3.next; ) {
              var o2 = r3.data, i2 = e3 > o2.length ? o2.length : e3;
              if (o2.copy(t3, t3.length - e3, 0, i2), e3 -= i2, 0 === e3) {
                i2 === o2.length ? (++a2, this.head = r3.next ? r3.next : this.tail = null) : (this.head = r3, r3.data = o2.slice(i2));
                break;
              }
              ++a2;
            }
            return this.length -= a2, t3;
          } }, { key: g, value: function(e3, t3) {
            return f(this, r2({}, t3, { depth: 0, customInspect: false }));
          } }]), e2;
        }();
      }, { buffer: 3, util: 2 }], 23: [function(e, t2) {
        (function(e2) {
          (function() {
            "use strict";
            function n2(e3, t3) {
              a(e3, t3), r2(e3);
            }
            function r2(e3) {
              e3._writableState && !e3._writableState.emitClose || e3._readableState && !e3._readableState.emitClose || e3.emit("close");
            }
            function a(e3, t3) {
              e3.emit("error", t3);
            }
            t2.exports = { destroy: function(t3, o) {
              var i = this, d = this._readableState && this._readableState.destroyed, s = this._writableState && this._writableState.destroyed;
              return d || s ? (o ? o(t3) : t3 && (this._writableState ? !this._writableState.errorEmitted && (this._writableState.errorEmitted = true, e2.nextTick(a, this, t3)) : e2.nextTick(a, this, t3)), this) : (this._readableState && (this._readableState.destroyed = true), this._writableState && (this._writableState.destroyed = true), this._destroy(t3 || null, function(t4) {
                !o && t4 ? i._writableState ? i._writableState.errorEmitted ? e2.nextTick(r2, i) : (i._writableState.errorEmitted = true, e2.nextTick(n2, i, t4)) : e2.nextTick(n2, i, t4) : o ? (e2.nextTick(r2, i), o(t4)) : e2.nextTick(r2, i);
              }), this);
            }, undestroy: function() {
              this._readableState && (this._readableState.destroyed = false, this._readableState.reading = false, this._readableState.ended = false, this._readableState.endEmitted = false), this._writableState && (this._writableState.destroyed = false, this._writableState.ended = false, this._writableState.ending = false, this._writableState.finalCalled = false, this._writableState.prefinished = false, this._writableState.finished = false, this._writableState.errorEmitted = false);
            }, errorOrDestroy: function(e3, t3) {
              var n3 = e3._readableState, r3 = e3._writableState;
              n3 && n3.autoDestroy || r3 && r3.autoDestroy ? e3.destroy(t3) : e3.emit("error", t3);
            } };
          }).call(this);
        }).call(this, e("_process"));
      }, { _process: 12 }], 24: [function(e, t2) {
        "use strict";
        function n2(e2) {
          var t3 = false;
          return function() {
            if (!t3) {
              t3 = true;
              for (var n3 = arguments.length, r3 = Array(n3), a2 = 0; a2 < n3; a2++)
                r3[a2] = arguments[a2];
              e2.apply(this, r3);
            }
          };
        }
        function r2() {
        }
        function a(e2) {
          return e2.setHeader && "function" == typeof e2.abort;
        }
        function o(e2, t3, d) {
          if ("function" == typeof t3)
            return o(e2, null, t3);
          t3 || (t3 = {}), d = n2(d || r2);
          var s = t3.readable || false !== t3.readable && e2.readable, l = t3.writable || false !== t3.writable && e2.writable, c = function() {
            e2.writable || p();
          }, u = e2._writableState && e2._writableState.finished, p = function() {
            l = false, u = true, s || d.call(e2);
          }, f = e2._readableState && e2._readableState.endEmitted, g = function() {
            s = false, f = true, l || d.call(e2);
          }, _ = function(t4) {
            d.call(e2, t4);
          }, h = function() {
            var t4;
            return s && !f ? (e2._readableState && e2._readableState.ended || (t4 = new i()), d.call(e2, t4)) : l && !u ? (e2._writableState && e2._writableState.ended || (t4 = new i()), d.call(e2, t4)) : void 0;
          }, m = function() {
            e2.req.on("finish", p);
          };
          return a(e2) ? (e2.on("complete", p), e2.on("abort", h), e2.req ? m() : e2.on("request", m)) : l && !e2._writableState && (e2.on("end", c), e2.on("close", c)), e2.on("end", g), e2.on("finish", p), false !== t3.error && e2.on("error", _), e2.on("close", h), function() {
            e2.removeListener("complete", p), e2.removeListener("abort", h), e2.removeListener("request", m), e2.req && e2.req.removeListener("finish", p), e2.removeListener("end", c), e2.removeListener("close", c), e2.removeListener("finish", p), e2.removeListener("end", g), e2.removeListener("error", _), e2.removeListener("close", h);
          };
        }
        var i = e("../../../errors").codes.ERR_STREAM_PREMATURE_CLOSE;
        t2.exports = o;
      }, { "../../../errors": 15 }], 25: [function(e, t2) {
        t2.exports = function() {
          throw new Error("Readable.from is not available in the browser");
        };
      }, {}], 26: [function(e, t2) {
        "use strict";
        function n2(e2) {
          var t3 = false;
          return function() {
            t3 || (t3 = true, e2.apply(void 0, arguments));
          };
        }
        function r2(e2) {
          if (e2)
            throw e2;
        }
        function a(e2) {
          return e2.setHeader && "function" == typeof e2.abort;
        }
        function o(t3, r3, o2, i2) {
          i2 = n2(i2);
          var d2 = false;
          t3.on("close", function() {
            d2 = true;
          }), l === void 0 && (l = e("./end-of-stream")), l(t3, { readable: r3, writable: o2 }, function(e2) {
            return e2 ? i2(e2) : void (d2 = true, i2());
          });
          var s2 = false;
          return function(e2) {
            if (!d2)
              return s2 ? void 0 : (s2 = true, a(t3) ? t3.abort() : "function" == typeof t3.destroy ? t3.destroy() : void i2(e2 || new p("pipe")));
          };
        }
        function i(e2) {
          e2();
        }
        function d(e2, t3) {
          return e2.pipe(t3);
        }
        function s(e2) {
          return e2.length ? "function" == typeof e2[e2.length - 1] ? e2.pop() : r2 : r2;
        }
        var l, c = e("../../../errors").codes, u = c.ERR_MISSING_ARGS, p = c.ERR_STREAM_DESTROYED;
        t2.exports = function() {
          for (var e2 = arguments.length, t3 = Array(e2), n3 = 0; n3 < e2; n3++)
            t3[n3] = arguments[n3];
          var r3 = s(t3);
          if (Array.isArray(t3[0]) && (t3 = t3[0]), 2 > t3.length)
            throw new u("streams");
          var a2, l2 = t3.map(function(e3, n4) {
            var d2 = n4 < t3.length - 1;
            return o(e3, d2, 0 < n4, function(e4) {
              a2 || (a2 = e4), e4 && l2.forEach(i), d2 || (l2.forEach(i), r3(a2));
            });
          });
          return t3.reduce(d);
        };
      }, { "../../../errors": 15, "./end-of-stream": 24 }], 27: [function(e, n2) {
        "use strict";
        function r2(e2, t2, n3) {
          return null == e2.highWaterMark ? t2 ? e2[n3] : null : e2.highWaterMark;
        }
        var a = e("../../../errors").codes.ERR_INVALID_OPT_VALUE;
        n2.exports = { getHighWaterMark: function(e2, n3, o, i) {
          var d = r2(n3, i, o);
          if (null != d) {
            if (!(isFinite(d) && t(d) === d) || 0 > d) {
              var s = i ? o : "highWaterMark";
              throw new a(s, d);
            }
            return t(d);
          }
          return e2.objectMode ? 16 : 16384;
        } };
      }, { "../../../errors": 15 }], 28: [function(e, t2) {
        t2.exports = e("events").EventEmitter;
      }, { events: 7 }], 29: [function(e, t2, n2) {
        n2 = t2.exports = e("./lib/_stream_readable.js"), n2.Stream = n2, n2.Readable = n2, n2.Writable = e("./lib/_stream_writable.js"), n2.Duplex = e("./lib/_stream_duplex.js"), n2.Transform = e("./lib/_stream_transform.js"), n2.PassThrough = e("./lib/_stream_passthrough.js"), n2.finished = e("./lib/internal/streams/end-of-stream.js"), n2.pipeline = e("./lib/internal/streams/pipeline.js");
      }, { "./lib/_stream_duplex.js": 16, "./lib/_stream_passthrough.js": 17, "./lib/_stream_readable.js": 18, "./lib/_stream_transform.js": 19, "./lib/_stream_writable.js": 20, "./lib/internal/streams/end-of-stream.js": 24, "./lib/internal/streams/pipeline.js": 26 }], 30: [function(e, t2, n2) {
        function r2(e2, t3) {
          for (var n3 in e2)
            t3[n3] = e2[n3];
        }
        function a(e2, t3, n3) {
          return i(e2, t3, n3);
        }
        var o = e("buffer"), i = o.Buffer;
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t2.exports = o : (r2(o, n2), n2.Buffer = a), a.prototype = Object.create(i.prototype), r2(i, a), a.from = function(e2, t3, n3) {
          if ("number" == typeof e2)
            throw new TypeError("Argument must not be a number");
          return i(e2, t3, n3);
        }, a.alloc = function(e2, t3, n3) {
          if ("number" != typeof e2)
            throw new TypeError("Argument must be a number");
          var r3 = i(e2);
          return void 0 === t3 ? r3.fill(0) : "string" == typeof n3 ? r3.fill(t3, n3) : r3.fill(t3), r3;
        }, a.allocUnsafe = function(e2) {
          if ("number" != typeof e2)
            throw new TypeError("Argument must be a number");
          return i(e2);
        }, a.allocUnsafeSlow = function(e2) {
          if ("number" != typeof e2)
            throw new TypeError("Argument must be a number");
          return o.SlowBuffer(e2);
        };
      }, { buffer: 3 }], 31: [function(e, t2, n2) {
        "use strict";
        function r2(e2) {
          if (!e2)
            return "utf8";
          for (var t3; ; )
            switch (e2) {
              case "utf8":
              case "utf-8":
                return "utf8";
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return "utf16le";
              case "latin1":
              case "binary":
                return "latin1";
              case "base64":
              case "ascii":
              case "hex":
                return e2;
              default:
                if (t3)
                  return;
                e2 = ("" + e2).toLowerCase(), t3 = true;
            }
        }
        function a(e2) {
          var t3 = r2(e2);
          if ("string" != typeof t3 && (m.isEncoding === b || !b(e2)))
            throw new Error("Unknown encoding: " + e2);
          return t3 || e2;
        }
        function o(e2) {
          this.encoding = a(e2);
          var t3;
          switch (this.encoding) {
            case "utf16le":
              this.text = u, this.end = p, t3 = 4;
              break;
            case "utf8":
              this.fillLast = c, t3 = 4;
              break;
            case "base64":
              this.text = f, this.end = g, t3 = 3;
              break;
            default:
              return this.write = _, void (this.end = h);
          }
          this.lastNeed = 0, this.lastTotal = 0, this.lastChar = m.allocUnsafe(t3);
        }
        function d(e2) {
          if (127 >= e2)
            return 0;
          return 6 == e2 >> 5 ? 2 : 14 == e2 >> 4 ? 3 : 30 == e2 >> 3 ? 4 : 2 == e2 >> 6 ? -1 : -2;
        }
        function s(e2, t3, n3) {
          var r3 = t3.length - 1;
          if (r3 < n3)
            return 0;
          var a2 = d(t3[r3]);
          return 0 <= a2 ? (0 < a2 && (e2.lastNeed = a2 - 1), a2) : --r3 < n3 || -2 === a2 ? 0 : (a2 = d(t3[r3]), 0 <= a2) ? (0 < a2 && (e2.lastNeed = a2 - 2), a2) : --r3 < n3 || -2 === a2 ? 0 : (a2 = d(t3[r3]), 0 <= a2 ? (0 < a2 && (2 === a2 ? a2 = 0 : e2.lastNeed = a2 - 3), a2) : 0);
        }
        function l(e2, t3) {
          if (128 != (192 & t3[0]))
            return e2.lastNeed = 0, "�";
          if (1 < e2.lastNeed && 1 < t3.length) {
            if (128 != (192 & t3[1]))
              return e2.lastNeed = 1, "�";
            if (2 < e2.lastNeed && 2 < t3.length && 128 != (192 & t3[2]))
              return e2.lastNeed = 2, "�";
          }
        }
        function c(e2) {
          var t3 = this.lastTotal - this.lastNeed, n3 = l(this, e2, t3);
          return void 0 === n3 ? this.lastNeed <= e2.length ? (e2.copy(this.lastChar, t3, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : void (e2.copy(this.lastChar, t3, 0, e2.length), this.lastNeed -= e2.length) : n3;
        }
        function u(e2, t3) {
          if (0 == (e2.length - t3) % 2) {
            var n3 = e2.toString("utf16le", t3);
            if (n3) {
              var r3 = n3.charCodeAt(n3.length - 1);
              if (55296 <= r3 && 56319 >= r3)
                return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e2[e2.length - 2], this.lastChar[1] = e2[e2.length - 1], n3.slice(0, -1);
            }
            return n3;
          }
          return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e2[e2.length - 1], e2.toString("utf16le", t3, e2.length - 1);
        }
        function p(e2) {
          var t3 = e2 && e2.length ? this.write(e2) : "";
          if (this.lastNeed) {
            var n3 = this.lastTotal - this.lastNeed;
            return t3 + this.lastChar.toString("utf16le", 0, n3);
          }
          return t3;
        }
        function f(e2, t3) {
          var r3 = (e2.length - t3) % 3;
          return 0 == r3 ? e2.toString("base64", t3) : (this.lastNeed = 3 - r3, this.lastTotal = 3, 1 == r3 ? this.lastChar[0] = e2[e2.length - 1] : (this.lastChar[0] = e2[e2.length - 2], this.lastChar[1] = e2[e2.length - 1]), e2.toString("base64", t3, e2.length - r3));
        }
        function g(e2) {
          var t3 = e2 && e2.length ? this.write(e2) : "";
          return this.lastNeed ? t3 + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t3;
        }
        function _(e2) {
          return e2.toString(this.encoding);
        }
        function h(e2) {
          return e2 && e2.length ? this.write(e2) : "";
        }
        var m = e("safe-buffer").Buffer, b = m.isEncoding || function(e2) {
          switch (e2 = "" + e2, e2 && e2.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
              return true;
            default:
              return false;
          }
        };
        n2.StringDecoder = o, o.prototype.write = function(e2) {
          if (0 === e2.length)
            return "";
          var t3, n3;
          if (this.lastNeed) {
            if (t3 = this.fillLast(e2), void 0 === t3)
              return "";
            n3 = this.lastNeed, this.lastNeed = 0;
          } else
            n3 = 0;
          return n3 < e2.length ? t3 ? t3 + this.text(e2, n3) : this.text(e2, n3) : t3 || "";
        }, o.prototype.end = function(e2) {
          var t3 = e2 && e2.length ? this.write(e2) : "";
          return this.lastNeed ? t3 + "�" : t3;
        }, o.prototype.text = function(e2, t3) {
          var n3 = s(this, e2, t3);
          if (!this.lastNeed)
            return e2.toString("utf8", t3);
          this.lastTotal = n3;
          var r3 = e2.length - (n3 - this.lastNeed);
          return e2.copy(this.lastChar, 0, r3), e2.toString("utf8", t3, r3);
        }, o.prototype.fillLast = function(e2) {
          return this.lastNeed <= e2.length ? (e2.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : void (e2.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e2.length), this.lastNeed -= e2.length);
        };
      }, { "safe-buffer": 30 }], 32: [function(e, t2) {
        (function(e2) {
          (function() {
            function n2(t3) {
              try {
                if (!e2.localStorage)
                  return false;
              } catch (e3) {
                return false;
              }
              var n3 = e2.localStorage[t3];
              return null != n3 && "true" === (n3 + "").toLowerCase();
            }
            t2.exports = function(e3, t3) {
              function r2() {
                if (!a) {
                  if (n2("throwDeprecation"))
                    throw new Error(t3);
                  else
                    n2("traceDeprecation") ? console.trace(t3) : console.warn(t3);
                  a = true;
                }
                return e3.apply(this, arguments);
              }
              if (n2("noDeprecation"))
                return e3;
              var a = false;
              return r2;
            };
          }).call(this);
        }).call(this, "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {} : window : self : global);
      }, {}], "/": [function(e, t2) {
        function n2(e2) {
          return e2.replace(/a=ice-options:trickle\s\n/g, "");
        }
        function r2(e2) {
          console.warn(e2);
        }
        const a = e("debug")("simple-peer"), o = e("get-browser-rtc"), i = e("randombytes"), d = e("readable-stream"), s = e("queue-microtask"), l = e("err-code"), { Buffer: c } = e("buffer"), u = 65536;
        class p extends d.Duplex {
          constructor(e2) {
            if (e2 = Object.assign({ allowHalfOpen: false }, e2), super(e2), this._id = i(4).toString("hex").slice(0, 7), this._debug("new peer %o", e2), this.channelName = e2.initiator ? e2.channelName || i(20).toString("hex") : null, this.initiator = e2.initiator || false, this.channelConfig = e2.channelConfig || p.channelConfig, this.channelNegotiated = this.channelConfig.negotiated, this.config = Object.assign({}, p.config, e2.config), this.offerOptions = e2.offerOptions || {}, this.answerOptions = e2.answerOptions || {}, this.sdpTransform = e2.sdpTransform || ((e3) => e3), this.streams = e2.streams || (e2.stream ? [e2.stream] : []), this.trickle = void 0 === e2.trickle || e2.trickle, this.allowHalfTrickle = void 0 !== e2.allowHalfTrickle && e2.allowHalfTrickle, this.iceCompleteTimeout = e2.iceCompleteTimeout || 5e3, this.destroyed = false, this.destroying = false, this._connected = false, this.remoteAddress = void 0, this.remoteFamily = void 0, this.remotePort = void 0, this.localAddress = void 0, this.localFamily = void 0, this.localPort = void 0, this._wrtc = e2.wrtc && "object" == typeof e2.wrtc ? e2.wrtc : o(), !this._wrtc)
              if ("undefined" == typeof window)
                throw l(new Error("No WebRTC support: Specify `opts.wrtc` option in this environment"), "ERR_WEBRTC_SUPPORT");
              else
                throw l(new Error("No WebRTC support: Not a supported browser"), "ERR_WEBRTC_SUPPORT");
            this._pcReady = false, this._channelReady = false, this._iceComplete = false, this._iceCompleteTimer = null, this._channel = null, this._pendingCandidates = [], this._isNegotiating = false, this._firstNegotiation = true, this._batchedNegotiation = false, this._queuedNegotiation = false, this._sendersAwaitingStable = [], this._senderMap = /* @__PURE__ */ new Map(), this._closingInterval = null, this._remoteTracks = [], this._remoteStreams = [], this._chunk = null, this._cb = null, this._interval = null;
            try {
              this._pc = new this._wrtc.RTCPeerConnection(this.config);
            } catch (e3) {
              return void this.destroy(l(e3, "ERR_PC_CONSTRUCTOR"));
            }
            this._isReactNativeWebrtc = "number" == typeof this._pc._peerConnectionId, this._pc.oniceconnectionstatechange = () => {
              this._onIceStateChange();
            }, this._pc.onicegatheringstatechange = () => {
              this._onIceStateChange();
            }, this._pc.onconnectionstatechange = () => {
              this._onConnectionStateChange();
            }, this._pc.onsignalingstatechange = () => {
              this._onSignalingStateChange();
            }, this._pc.onicecandidate = (e3) => {
              this._onIceCandidate(e3);
            }, "object" == typeof this._pc.peerIdentity && this._pc.peerIdentity.catch((e3) => {
              this.destroy(l(e3, "ERR_PC_PEER_IDENTITY"));
            }), this.initiator || this.channelNegotiated ? this._setupData({ channel: this._pc.createDataChannel(this.channelName, this.channelConfig) }) : this._pc.ondatachannel = (e3) => {
              this._setupData(e3);
            }, this.streams && this.streams.forEach((e3) => {
              this.addStream(e3);
            }), this._pc.ontrack = (e3) => {
              this._onTrack(e3);
            }, this._debug("initial negotiation"), this._needsNegotiation(), this._onFinishBound = () => {
              this._onFinish();
            }, this.once("finish", this._onFinishBound);
          }
          get bufferSize() {
            return this._channel && this._channel.bufferedAmount || 0;
          }
          get connected() {
            return this._connected && "open" === this._channel.readyState;
          }
          address() {
            return { port: this.localPort, family: this.localFamily, address: this.localAddress };
          }
          signal(e2) {
            if (!this.destroying) {
              if (this.destroyed)
                throw l(new Error("cannot signal after peer is destroyed"), "ERR_DESTROYED");
              if ("string" == typeof e2)
                try {
                  e2 = JSON.parse(e2);
                } catch (t3) {
                  e2 = {};
                }
              this._debug("signal()"), e2.renegotiate && this.initiator && (this._debug("got request to renegotiate"), this._needsNegotiation()), e2.transceiverRequest && this.initiator && (this._debug("got request for transceiver"), this.addTransceiver(e2.transceiverRequest.kind, e2.transceiverRequest.init)), e2.candidate && (this._pc.remoteDescription && this._pc.remoteDescription.type ? this._addIceCandidate(e2.candidate) : this._pendingCandidates.push(e2.candidate)), e2.sdp && this._pc.setRemoteDescription(new this._wrtc.RTCSessionDescription(e2)).then(() => {
                this.destroyed || (this._pendingCandidates.forEach((e3) => {
                  this._addIceCandidate(e3);
                }), this._pendingCandidates = [], "offer" === this._pc.remoteDescription.type && this._createAnswer());
              }).catch((e3) => {
                this.destroy(l(e3, "ERR_SET_REMOTE_DESCRIPTION"));
              }), e2.sdp || e2.candidate || e2.renegotiate || e2.transceiverRequest || this.destroy(l(new Error("signal() called with invalid signal data"), "ERR_SIGNALING"));
            }
          }
          _addIceCandidate(e2) {
            const t3 = new this._wrtc.RTCIceCandidate(e2);
            this._pc.addIceCandidate(t3).catch((e3) => {
              !t3.address || t3.address.endsWith(".local") ? r2("Ignoring unsupported ICE candidate.") : this.destroy(l(e3, "ERR_ADD_ICE_CANDIDATE"));
            });
          }
          send(e2) {
            if (!this.destroying) {
              if (this.destroyed)
                throw l(new Error("cannot send after peer is destroyed"), "ERR_DESTROYED");
              this._channel.send(e2);
            }
          }
          addTransceiver(e2, t3) {
            if (!this.destroying) {
              if (this.destroyed)
                throw l(new Error("cannot addTransceiver after peer is destroyed"), "ERR_DESTROYED");
              if (this._debug("addTransceiver()"), this.initiator)
                try {
                  this._pc.addTransceiver(e2, t3), this._needsNegotiation();
                } catch (e3) {
                  this.destroy(l(e3, "ERR_ADD_TRANSCEIVER"));
                }
              else
                this.emit("signal", { type: "transceiverRequest", transceiverRequest: { kind: e2, init: t3 } });
            }
          }
          addStream(e2) {
            if (!this.destroying) {
              if (this.destroyed)
                throw l(new Error("cannot addStream after peer is destroyed"), "ERR_DESTROYED");
              this._debug("addStream()"), e2.getTracks().forEach((t3) => {
                this.addTrack(t3, e2);
              });
            }
          }
          addTrack(e2, t3) {
            if (this.destroying)
              return;
            if (this.destroyed)
              throw l(new Error("cannot addTrack after peer is destroyed"), "ERR_DESTROYED");
            this._debug("addTrack()");
            const n3 = this._senderMap.get(e2) || /* @__PURE__ */ new Map();
            let r3 = n3.get(t3);
            if (!r3)
              r3 = this._pc.addTrack(e2, t3), n3.set(t3, r3), this._senderMap.set(e2, n3), this._needsNegotiation();
            else if (r3.removed)
              throw l(new Error("Track has been removed. You should enable/disable tracks that you want to re-add."), "ERR_SENDER_REMOVED");
            else
              throw l(new Error("Track has already been added to that stream."), "ERR_SENDER_ALREADY_ADDED");
          }
          replaceTrack(e2, t3, n3) {
            if (this.destroying)
              return;
            if (this.destroyed)
              throw l(new Error("cannot replaceTrack after peer is destroyed"), "ERR_DESTROYED");
            this._debug("replaceTrack()");
            const r3 = this._senderMap.get(e2), a2 = r3 ? r3.get(n3) : null;
            if (!a2)
              throw l(new Error("Cannot replace track that was never added."), "ERR_TRACK_NOT_ADDED");
            t3 && this._senderMap.set(t3, r3), null == a2.replaceTrack ? this.destroy(l(new Error("replaceTrack is not supported in this browser"), "ERR_UNSUPPORTED_REPLACETRACK")) : a2.replaceTrack(t3);
          }
          removeTrack(e2, t3) {
            if (this.destroying)
              return;
            if (this.destroyed)
              throw l(new Error("cannot removeTrack after peer is destroyed"), "ERR_DESTROYED");
            this._debug("removeSender()");
            const n3 = this._senderMap.get(e2), r3 = n3 ? n3.get(t3) : null;
            if (!r3)
              throw l(new Error("Cannot remove track that was never added."), "ERR_TRACK_NOT_ADDED");
            try {
              r3.removed = true, this._pc.removeTrack(r3);
            } catch (e3) {
              "NS_ERROR_UNEXPECTED" === e3.name ? this._sendersAwaitingStable.push(r3) : this.destroy(l(e3, "ERR_REMOVE_TRACK"));
            }
            this._needsNegotiation();
          }
          removeStream(e2) {
            if (!this.destroying) {
              if (this.destroyed)
                throw l(new Error("cannot removeStream after peer is destroyed"), "ERR_DESTROYED");
              this._debug("removeSenders()"), e2.getTracks().forEach((t3) => {
                this.removeTrack(t3, e2);
              });
            }
          }
          _needsNegotiation() {
            this._debug("_needsNegotiation"), this._batchedNegotiation || (this._batchedNegotiation = true, s(() => {
              this._batchedNegotiation = false, this.initiator || !this._firstNegotiation ? (this._debug("starting batched negotiation"), this.negotiate()) : this._debug("non-initiator initial negotiation request discarded"), this._firstNegotiation = false;
            }));
          }
          negotiate() {
            if (!this.destroying) {
              if (this.destroyed)
                throw l(new Error("cannot negotiate after peer is destroyed"), "ERR_DESTROYED");
              this.initiator ? this._isNegotiating ? (this._queuedNegotiation = true, this._debug("already negotiating, queueing")) : (this._debug("start negotiation"), setTimeout(() => {
                this._createOffer();
              }, 0)) : this._isNegotiating ? (this._queuedNegotiation = true, this._debug("already negotiating, queueing")) : (this._debug("requesting negotiation from initiator"), this.emit("signal", { type: "renegotiate", renegotiate: true })), this._isNegotiating = true;
            }
          }
          destroy(e2) {
            this._destroy(e2, () => {
            });
          }
          _destroy(e2, t3) {
            this.destroyed || this.destroying || (this.destroying = true, this._debug("destroying (error: %s)", e2 && (e2.message || e2)), s(() => {
              if (this.destroyed = true, this.destroying = false, this._debug("destroy (error: %s)", e2 && (e2.message || e2)), this.readable = this.writable = false, this._readableState.ended || this.push(null), this._writableState.finished || this.end(), this._connected = false, this._pcReady = false, this._channelReady = false, this._remoteTracks = null, this._remoteStreams = null, this._senderMap = null, clearInterval(this._closingInterval), this._closingInterval = null, clearInterval(this._interval), this._interval = null, this._chunk = null, this._cb = null, this._onFinishBound && this.removeListener("finish", this._onFinishBound), this._onFinishBound = null, this._channel) {
                try {
                  this._channel.close();
                } catch (e3) {
                }
                this._channel.onmessage = null, this._channel.onopen = null, this._channel.onclose = null, this._channel.onerror = null;
              }
              if (this._pc) {
                try {
                  this._pc.close();
                } catch (e3) {
                }
                this._pc.oniceconnectionstatechange = null, this._pc.onicegatheringstatechange = null, this._pc.onsignalingstatechange = null, this._pc.onicecandidate = null, this._pc.ontrack = null, this._pc.ondatachannel = null;
              }
              this._pc = null, this._channel = null, e2 && this.emit("error", e2), this.emit("close"), t3();
            }));
          }
          _setupData(e2) {
            if (!e2.channel)
              return this.destroy(l(new Error("Data channel event is missing `channel` property"), "ERR_DATA_CHANNEL"));
            this._channel = e2.channel, this._channel.binaryType = "arraybuffer", "number" == typeof this._channel.bufferedAmountLowThreshold && (this._channel.bufferedAmountLowThreshold = u), this.channelName = this._channel.label, this._channel.onmessage = (e3) => {
              this._onChannelMessage(e3);
            }, this._channel.onbufferedamountlow = () => {
              this._onChannelBufferedAmountLow();
            }, this._channel.onopen = () => {
              this._onChannelOpen();
            }, this._channel.onclose = () => {
              this._onChannelClose();
            }, this._channel.onerror = (e3) => {
              const t4 = e3.error instanceof Error ? e3.error : new Error(`Datachannel error: ${e3.message} ${e3.filename}:${e3.lineno}:${e3.colno}`);
              this.destroy(l(t4, "ERR_DATA_CHANNEL"));
            };
            let t3 = false;
            this._closingInterval = setInterval(() => {
              this._channel && "closing" === this._channel.readyState ? (t3 && this._onChannelClose(), t3 = true) : t3 = false;
            }, 5e3);
          }
          _read() {
          }
          _write(e2, t3, n3) {
            if (this.destroyed)
              return n3(l(new Error("cannot write after peer is destroyed"), "ERR_DATA_CHANNEL"));
            if (this._connected) {
              try {
                this.send(e2);
              } catch (e3) {
                return this.destroy(l(e3, "ERR_DATA_CHANNEL"));
              }
              this._channel.bufferedAmount > u ? (this._debug("start backpressure: bufferedAmount %d", this._channel.bufferedAmount), this._cb = n3) : n3(null);
            } else
              this._debug("write before connect"), this._chunk = e2, this._cb = n3;
          }
          _onFinish() {
            if (!this.destroyed) {
              const e2 = () => {
                setTimeout(() => this.destroy(), 1e3);
              };
              this._connected ? e2() : this.once("connect", e2);
            }
          }
          _startIceCompleteTimeout() {
            this.destroyed || this._iceCompleteTimer || (this._debug("started iceComplete timeout"), this._iceCompleteTimer = setTimeout(() => {
              this._iceComplete || (this._iceComplete = true, this._debug("iceComplete timeout completed"), this.emit("iceTimeout"), this.emit("_iceComplete"));
            }, this.iceCompleteTimeout));
          }
          _createOffer() {
            this.destroyed || this._pc.createOffer(this.offerOptions).then((e2) => {
              if (this.destroyed)
                return;
              this.trickle || this.allowHalfTrickle || (e2.sdp = n2(e2.sdp)), e2.sdp = this.sdpTransform(e2.sdp);
              const t3 = () => {
                if (!this.destroyed) {
                  const t4 = this._pc.localDescription || e2;
                  this._debug("signal"), this.emit("signal", { type: t4.type, sdp: t4.sdp });
                }
              };
              this._pc.setLocalDescription(e2).then(() => {
                this._debug("createOffer success"), this.destroyed || (this.trickle || this._iceComplete ? t3() : this.once("_iceComplete", t3));
              }).catch((e3) => {
                this.destroy(l(e3, "ERR_SET_LOCAL_DESCRIPTION"));
              });
            }).catch((e2) => {
              this.destroy(l(e2, "ERR_CREATE_OFFER"));
            });
          }
          _requestMissingTransceivers() {
            this._pc.getTransceivers && this._pc.getTransceivers().forEach((e2) => {
              e2.mid || !e2.sender.track || e2.requested || (e2.requested = true, this.addTransceiver(e2.sender.track.kind));
            });
          }
          _createAnswer() {
            this.destroyed || this._pc.createAnswer(this.answerOptions).then((e2) => {
              if (this.destroyed)
                return;
              this.trickle || this.allowHalfTrickle || (e2.sdp = n2(e2.sdp)), e2.sdp = this.sdpTransform(e2.sdp);
              const t3 = () => {
                if (!this.destroyed) {
                  const t4 = this._pc.localDescription || e2;
                  this._debug("signal"), this.emit("signal", { type: t4.type, sdp: t4.sdp }), this.initiator || this._requestMissingTransceivers();
                }
              };
              this._pc.setLocalDescription(e2).then(() => {
                this.destroyed || (this.trickle || this._iceComplete ? t3() : this.once("_iceComplete", t3));
              }).catch((e3) => {
                this.destroy(l(e3, "ERR_SET_LOCAL_DESCRIPTION"));
              });
            }).catch((e2) => {
              this.destroy(l(e2, "ERR_CREATE_ANSWER"));
            });
          }
          _onConnectionStateChange() {
            this.destroyed || "failed" === this._pc.connectionState && this.destroy(l(new Error("Connection failed."), "ERR_CONNECTION_FAILURE"));
          }
          _onIceStateChange() {
            if (this.destroyed)
              return;
            const e2 = this._pc.iceConnectionState, t3 = this._pc.iceGatheringState;
            this._debug("iceStateChange (connection: %s) (gathering: %s)", e2, t3), this.emit("iceStateChange", e2, t3), ("connected" === e2 || "completed" === e2) && (this._pcReady = true, this._maybeReady()), "failed" === e2 && this.destroy(l(new Error("Ice connection failed."), "ERR_ICE_CONNECTION_FAILURE")), "closed" === e2 && this.destroy(l(new Error("Ice connection closed."), "ERR_ICE_CONNECTION_CLOSED"));
          }
          getStats(e2) {
            const t3 = (e3) => ("[object Array]" === Object.prototype.toString.call(e3.values) && e3.values.forEach((t4) => {
              Object.assign(e3, t4);
            }), e3);
            0 === this._pc.getStats.length || this._isReactNativeWebrtc ? this._pc.getStats().then((n3) => {
              const r3 = [];
              n3.forEach((e3) => {
                r3.push(t3(e3));
              }), e2(null, r3);
            }, (t4) => e2(t4)) : 0 < this._pc.getStats.length ? this._pc.getStats((n3) => {
              if (this.destroyed)
                return;
              const r3 = [];
              n3.result().forEach((e3) => {
                const n4 = {};
                e3.names().forEach((t4) => {
                  n4[t4] = e3.stat(t4);
                }), n4.id = e3.id, n4.type = e3.type, n4.timestamp = e3.timestamp, r3.push(t3(n4));
              }), e2(null, r3);
            }, (t4) => e2(t4)) : e2(null, []);
          }
          _maybeReady() {
            if (this._debug("maybeReady pc %s channel %s", this._pcReady, this._channelReady), this._connected || this._connecting || !this._pcReady || !this._channelReady)
              return;
            this._connecting = true;
            const e2 = () => {
              this.destroyed || this.getStats((t3, n3) => {
                if (this.destroyed)
                  return;
                t3 && (n3 = []);
                const r3 = {}, a2 = {}, o2 = {};
                let i2 = false;
                n3.forEach((e3) => {
                  ("remotecandidate" === e3.type || "remote-candidate" === e3.type) && (r3[e3.id] = e3), ("localcandidate" === e3.type || "local-candidate" === e3.type) && (a2[e3.id] = e3), ("candidatepair" === e3.type || "candidate-pair" === e3.type) && (o2[e3.id] = e3);
                });
                const d2 = (e3) => {
                  i2 = true;
                  let t4 = a2[e3.localCandidateId];
                  t4 && (t4.ip || t4.address) ? (this.localAddress = t4.ip || t4.address, this.localPort = +t4.port) : t4 && t4.ipAddress ? (this.localAddress = t4.ipAddress, this.localPort = +t4.portNumber) : "string" == typeof e3.googLocalAddress && (t4 = e3.googLocalAddress.split(":"), this.localAddress = t4[0], this.localPort = +t4[1]), this.localAddress && (this.localFamily = this.localAddress.includes(":") ? "IPv6" : "IPv4");
                  let n4 = r3[e3.remoteCandidateId];
                  n4 && (n4.ip || n4.address) ? (this.remoteAddress = n4.ip || n4.address, this.remotePort = +n4.port) : n4 && n4.ipAddress ? (this.remoteAddress = n4.ipAddress, this.remotePort = +n4.portNumber) : "string" == typeof e3.googRemoteAddress && (n4 = e3.googRemoteAddress.split(":"), this.remoteAddress = n4[0], this.remotePort = +n4[1]), this.remoteAddress && (this.remoteFamily = this.remoteAddress.includes(":") ? "IPv6" : "IPv4"), this._debug("connect local: %s:%s remote: %s:%s", this.localAddress, this.localPort, this.remoteAddress, this.remotePort);
                };
                if (n3.forEach((e3) => {
                  "transport" === e3.type && e3.selectedCandidatePairId && d2(o2[e3.selectedCandidatePairId]), ("googCandidatePair" === e3.type && "true" === e3.googActiveConnection || ("candidatepair" === e3.type || "candidate-pair" === e3.type) && e3.selected) && d2(e3);
                }), !i2 && (!Object.keys(o2).length || Object.keys(a2).length))
                  return void setTimeout(e2, 100);
                if (this._connecting = false, this._connected = true, this._chunk) {
                  try {
                    this.send(this._chunk);
                  } catch (e4) {
                    return this.destroy(l(e4, "ERR_DATA_CHANNEL"));
                  }
                  this._chunk = null, this._debug('sent chunk from "write before connect"');
                  const e3 = this._cb;
                  this._cb = null, e3(null);
                }
                "number" != typeof this._channel.bufferedAmountLowThreshold && (this._interval = setInterval(() => this._onInterval(), 150), this._interval.unref && this._interval.unref()), this._debug("connect"), this.emit("connect");
              });
            };
            e2();
          }
          _onInterval() {
            this._cb && this._channel && !(this._channel.bufferedAmount > u) && this._onChannelBufferedAmountLow();
          }
          _onSignalingStateChange() {
            this.destroyed || ("stable" === this._pc.signalingState && (this._isNegotiating = false, this._debug("flushing sender queue", this._sendersAwaitingStable), this._sendersAwaitingStable.forEach((e2) => {
              this._pc.removeTrack(e2), this._queuedNegotiation = true;
            }), this._sendersAwaitingStable = [], this._queuedNegotiation ? (this._debug("flushing negotiation queue"), this._queuedNegotiation = false, this._needsNegotiation()) : (this._debug("negotiated"), this.emit("negotiated"))), this._debug("signalingStateChange %s", this._pc.signalingState), this.emit("signalingStateChange", this._pc.signalingState));
          }
          _onIceCandidate(e2) {
            this.destroyed || (e2.candidate && this.trickle ? this.emit("signal", { type: "candidate", candidate: { candidate: e2.candidate.candidate, sdpMLineIndex: e2.candidate.sdpMLineIndex, sdpMid: e2.candidate.sdpMid } }) : !e2.candidate && !this._iceComplete && (this._iceComplete = true, this.emit("_iceComplete")), e2.candidate && this._startIceCompleteTimeout());
          }
          _onChannelMessage(e2) {
            if (this.destroyed)
              return;
            let t3 = e2.data;
            t3 instanceof ArrayBuffer && (t3 = c.from(t3)), this.push(t3);
          }
          _onChannelBufferedAmountLow() {
            if (!this.destroyed && this._cb) {
              this._debug("ending backpressure: bufferedAmount %d", this._channel.bufferedAmount);
              const e2 = this._cb;
              this._cb = null, e2(null);
            }
          }
          _onChannelOpen() {
            this._connected || this.destroyed || (this._debug("on channel open"), this._channelReady = true, this._maybeReady());
          }
          _onChannelClose() {
            this.destroyed || (this._debug("on channel close"), this.destroy());
          }
          _onTrack(e2) {
            this.destroyed || e2.streams.forEach((t3) => {
              this._debug("on track"), this.emit("track", e2.track, t3), this._remoteTracks.push({ track: e2.track, stream: t3 }), this._remoteStreams.some((e3) => e3.id === t3.id) || (this._remoteStreams.push(t3), s(() => {
                this._debug("on stream"), this.emit("stream", t3);
              }));
            });
          }
          _debug() {
            const e2 = [].slice.call(arguments);
            e2[0] = "[" + this._id + "] " + e2[0], a.apply(null, e2);
          }
        }
        p.WEBRTC_SUPPORT = !!o(), p.config = { iceServers: [{ urls: ["stun:stun.l.google.com:19302", "stun:global.stun.twilio.com:3478"] }], sdpSemantics: "unified-plan" }, p.channelConfig = {}, t2.exports = p;
      }, { buffer: 3, debug: 4, "err-code": 6, "get-browser-rtc": 8, "queue-microtask": 13, randombytes: 14, "readable-stream": 29 }] }, {}, [])("/");
    });
  }
});

// ../../node_modules/.pnpm/lib0@0.2.93/node_modules/lib0/websocket.js
var reconnectTimeoutBase = 1200;
var maxReconnectTimeout = 2500;
var messageReconnectTimeout = 3e4;
var setupWS = (wsclient) => {
  if (wsclient.shouldConnect && wsclient.ws === null) {
    const websocket = new WebSocket(wsclient.url);
    const binaryType = wsclient.binaryType;
    let pingTimeout = null;
    if (binaryType) {
      websocket.binaryType = binaryType;
    }
    wsclient.ws = websocket;
    wsclient.connecting = true;
    wsclient.connected = false;
    websocket.onmessage = (event) => {
      wsclient.lastMessageReceived = getUnixTime();
      const data = event.data;
      const message = typeof data === "string" ? JSON.parse(data) : data;
      if (message && message.type === "pong") {
        clearTimeout(pingTimeout);
        pingTimeout = setTimeout(sendPing, messageReconnectTimeout / 2);
      }
      wsclient.emit("message", [message, wsclient]);
    };
    const onclose = (error) => {
      if (wsclient.ws !== null) {
        wsclient.ws = null;
        wsclient.connecting = false;
        if (wsclient.connected) {
          wsclient.connected = false;
          wsclient.emit("disconnect", [{ type: "disconnect", error }, wsclient]);
        } else {
          wsclient.unsuccessfulReconnects++;
        }
        setTimeout(setupWS, min(log10(wsclient.unsuccessfulReconnects + 1) * reconnectTimeoutBase, maxReconnectTimeout), wsclient);
      }
      clearTimeout(pingTimeout);
    };
    const sendPing = () => {
      if (wsclient.ws === websocket) {
        wsclient.send({
          type: "ping"
        });
      }
    };
    websocket.onclose = () => onclose(null);
    websocket.onerror = (error) => onclose(error);
    websocket.onopen = () => {
      wsclient.lastMessageReceived = getUnixTime();
      wsclient.connecting = false;
      wsclient.connected = true;
      wsclient.unsuccessfulReconnects = 0;
      wsclient.emit("connect", [{ type: "connect" }, wsclient]);
      pingTimeout = setTimeout(sendPing, messageReconnectTimeout / 2);
    };
  }
};
var WebsocketClient = class extends Observable {
  /**
   * @param {string} url
   * @param {object} opts
   * @param {'arraybuffer' | 'blob' | null} [opts.binaryType] Set `ws.binaryType`
   */
  constructor(url, { binaryType } = {}) {
    super();
    this.url = url;
    this.ws = null;
    this.binaryType = binaryType || null;
    this.connected = false;
    this.connecting = false;
    this.unsuccessfulReconnects = 0;
    this.lastMessageReceived = 0;
    this.shouldConnect = true;
    this._checkInterval = setInterval(() => {
      if (this.connected && messageReconnectTimeout < getUnixTime() - this.lastMessageReceived) {
        this.ws.close();
      }
    }, messageReconnectTimeout / 2);
    setupWS(this);
  }
  /**
   * @param {any} message
   */
  send(message) {
    if (this.ws) {
      this.ws.send(JSON.stringify(message));
    }
  }
  destroy() {
    clearInterval(this._checkInterval);
    this.disconnect();
    super.destroy();
  }
  disconnect() {
    this.shouldConnect = false;
    if (this.ws !== null) {
      this.ws.close();
    }
  }
  connect() {
    this.shouldConnect = true;
    if (!this.connected && this.ws === null) {
      setupWS(this);
    }
  }
};

// ../../node_modules/.pnpm/lib0@0.2.93/node_modules/lib0/broadcastchannel.js
var channels = /* @__PURE__ */ new Map();
var LocalStoragePolyfill = class {
  /**
   * @param {string} room
   */
  constructor(room) {
    this.room = room;
    this.onmessage = null;
    this._onChange = (e) => e.key === room && this.onmessage !== null && this.onmessage({ data: fromBase64(e.newValue || "") });
    onChange(this._onChange);
  }
  /**
   * @param {ArrayBuffer} buf
   */
  postMessage(buf) {
    varStorage.setItem(this.room, toBase64(createUint8ArrayFromArrayBuffer(buf)));
  }
  close() {
    offChange(this._onChange);
  }
};
var BC = typeof BroadcastChannel === "undefined" ? LocalStoragePolyfill : BroadcastChannel;
var getChannel = (room) => setIfUndefined(channels, room, () => {
  const subs = create();
  const bc = new BC(room);
  bc.onmessage = (e) => subs.forEach((sub) => sub(e.data, "broadcastchannel"));
  return {
    bc,
    subs
  };
});
var subscribe = (room, f) => {
  getChannel(room).subs.add(f);
  return f;
};
var unsubscribe = (room, f) => {
  const channel = getChannel(room);
  const unsubscribed = channel.subs.delete(f);
  if (unsubscribed && channel.subs.size === 0) {
    channel.bc.close();
    channels.delete(room);
  }
  return unsubscribed;
};
var publish = (room, data, origin = null) => {
  const c = getChannel(room);
  c.bc.postMessage(data);
  c.subs.forEach((sub) => sub(data, origin));
};

// ../../node_modules/.pnpm/lib0@0.2.93/node_modules/lib0/mutex.js
var createMutex = () => {
  let token = true;
  return (f, g) => {
    if (token) {
      token = false;
      try {
        f();
      } finally {
        token = true;
      }
    } else if (g !== void 0) {
      g();
    }
  };
};

// ../../node_modules/.pnpm/y-webrtc@10.3.0_yjs@13.6.14/node_modules/y-webrtc/src/y-webrtc.js
var import_simplepeer_min = __toESM(require_simplepeer_min());

// ../../node_modules/.pnpm/y-protocols@1.0.6_yjs@13.6.14/node_modules/y-protocols/sync.js
var messageYjsSyncStep1 = 0;
var messageYjsSyncStep2 = 1;
var messageYjsUpdate = 2;
var writeSyncStep1 = (encoder, doc) => {
  writeVarUint(encoder, messageYjsSyncStep1);
  const sv = encodeStateVector(doc);
  writeVarUint8Array(encoder, sv);
};
var writeSyncStep2 = (encoder, doc, encodedStateVector) => {
  writeVarUint(encoder, messageYjsSyncStep2);
  writeVarUint8Array(encoder, encodeStateAsUpdate(doc, encodedStateVector));
};
var readSyncStep1 = (decoder, encoder, doc) => writeSyncStep2(encoder, doc, readVarUint8Array(decoder));
var readSyncStep2 = (decoder, doc, transactionOrigin) => {
  try {
    applyUpdate(doc, readVarUint8Array(decoder), transactionOrigin);
  } catch (error) {
    console.error("Caught error while handling a Yjs update", error);
  }
};
var writeUpdate = (encoder, update) => {
  writeVarUint(encoder, messageYjsUpdate);
  writeVarUint8Array(encoder, update);
};
var readUpdate = readSyncStep2;
var readSyncMessage = (decoder, encoder, doc, transactionOrigin) => {
  const messageType = readVarUint(decoder);
  switch (messageType) {
    case messageYjsSyncStep1:
      readSyncStep1(decoder, encoder, doc);
      break;
    case messageYjsSyncStep2:
      readSyncStep2(decoder, doc, transactionOrigin);
      break;
    case messageYjsUpdate:
      readUpdate(decoder, doc, transactionOrigin);
      break;
    default:
      throw new Error("Unknown message type");
  }
  return messageType;
};

// ../../node_modules/.pnpm/y-protocols@1.0.6_yjs@13.6.14/node_modules/y-protocols/awareness.js
var outdatedTimeout = 3e4;
var Awareness = class extends Observable {
  /**
   * @param {Y.Doc} doc
   */
  constructor(doc) {
    super();
    this.doc = doc;
    this.clientID = doc.clientID;
    this.states = /* @__PURE__ */ new Map();
    this.meta = /* @__PURE__ */ new Map();
    this._checkInterval = /** @type {any} */
    setInterval(() => {
      const now = getUnixTime();
      if (this.getLocalState() !== null && outdatedTimeout / 2 <= now - /** @type {{lastUpdated:number}} */
      this.meta.get(this.clientID).lastUpdated) {
        this.setLocalState(this.getLocalState());
      }
      const remove = [];
      this.meta.forEach((meta, clientid) => {
        if (clientid !== this.clientID && outdatedTimeout <= now - meta.lastUpdated && this.states.has(clientid)) {
          remove.push(clientid);
        }
      });
      if (remove.length > 0) {
        removeAwarenessStates(this, remove, "timeout");
      }
    }, floor(outdatedTimeout / 10));
    doc.on("destroy", () => {
      this.destroy();
    });
    this.setLocalState({});
  }
  destroy() {
    this.emit("destroy", [this]);
    this.setLocalState(null);
    super.destroy();
    clearInterval(this._checkInterval);
  }
  /**
   * @return {Object<string,any>|null}
   */
  getLocalState() {
    return this.states.get(this.clientID) || null;
  }
  /**
   * @param {Object<string,any>|null} state
   */
  setLocalState(state) {
    const clientID = this.clientID;
    const currLocalMeta = this.meta.get(clientID);
    const clock = currLocalMeta === void 0 ? 0 : currLocalMeta.clock + 1;
    const prevState = this.states.get(clientID);
    if (state === null) {
      this.states.delete(clientID);
    } else {
      this.states.set(clientID, state);
    }
    this.meta.set(clientID, {
      clock,
      lastUpdated: getUnixTime()
    });
    const added = [];
    const updated = [];
    const filteredUpdated = [];
    const removed = [];
    if (state === null) {
      removed.push(clientID);
    } else if (prevState == null) {
      if (state != null) {
        added.push(clientID);
      }
    } else {
      updated.push(clientID);
      if (!equalityDeep(prevState, state)) {
        filteredUpdated.push(clientID);
      }
    }
    if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) {
      this.emit("change", [{ added, updated: filteredUpdated, removed }, "local"]);
    }
    this.emit("update", [{ added, updated, removed }, "local"]);
  }
  /**
   * @param {string} field
   * @param {any} value
   */
  setLocalStateField(field, value) {
    const state = this.getLocalState();
    if (state !== null) {
      this.setLocalState({
        ...state,
        [field]: value
      });
    }
  }
  /**
   * @return {Map<number,Object<string,any>>}
   */
  getStates() {
    return this.states;
  }
};
var removeAwarenessStates = (awareness, clients, origin) => {
  const removed = [];
  for (let i = 0; i < clients.length; i++) {
    const clientID = clients[i];
    if (awareness.states.has(clientID)) {
      awareness.states.delete(clientID);
      if (clientID === awareness.clientID) {
        const curMeta = (
          /** @type {MetaClientState} */
          awareness.meta.get(clientID)
        );
        awareness.meta.set(clientID, {
          clock: curMeta.clock + 1,
          lastUpdated: getUnixTime()
        });
      }
      removed.push(clientID);
    }
  }
  if (removed.length > 0) {
    awareness.emit("change", [{ added: [], updated: [], removed }, origin]);
    awareness.emit("update", [{ added: [], updated: [], removed }, origin]);
  }
};
var encodeAwarenessUpdate = (awareness, clients, states = awareness.states) => {
  const len = clients.length;
  const encoder = createEncoder();
  writeVarUint(encoder, len);
  for (let i = 0; i < len; i++) {
    const clientID = clients[i];
    const state = states.get(clientID) || null;
    const clock = (
      /** @type {MetaClientState} */
      awareness.meta.get(clientID).clock
    );
    writeVarUint(encoder, clientID);
    writeVarUint(encoder, clock);
    writeVarString(encoder, JSON.stringify(state));
  }
  return toUint8Array(encoder);
};
var applyAwarenessUpdate = (awareness, update, origin) => {
  const decoder = createDecoder(update);
  const timestamp = getUnixTime();
  const added = [];
  const updated = [];
  const filteredUpdated = [];
  const removed = [];
  const len = readVarUint(decoder);
  for (let i = 0; i < len; i++) {
    const clientID = readVarUint(decoder);
    let clock = readVarUint(decoder);
    const state = JSON.parse(readVarString(decoder));
    const clientMeta = awareness.meta.get(clientID);
    const prevState = awareness.states.get(clientID);
    const currClock = clientMeta === void 0 ? 0 : clientMeta.clock;
    if (currClock < clock || currClock === clock && state === null && awareness.states.has(clientID)) {
      if (state === null) {
        if (clientID === awareness.clientID && awareness.getLocalState() != null) {
          clock++;
        } else {
          awareness.states.delete(clientID);
        }
      } else {
        awareness.states.set(clientID, state);
      }
      awareness.meta.set(clientID, {
        clock,
        lastUpdated: timestamp
      });
      if (clientMeta === void 0 && state !== null) {
        added.push(clientID);
      } else if (clientMeta !== void 0 && state === null) {
        removed.push(clientID);
      } else if (state !== null) {
        if (!equalityDeep(state, prevState)) {
          filteredUpdated.push(clientID);
        }
        updated.push(clientID);
      }
    }
  }
  if (added.length > 0 || filteredUpdated.length > 0 || removed.length > 0) {
    awareness.emit("change", [{
      added,
      updated: filteredUpdated,
      removed
    }, origin]);
  }
  if (added.length > 0 || updated.length > 0 || removed.length > 0) {
    awareness.emit("update", [{
      added,
      updated,
      removed
    }, origin]);
  }
};

// ../../node_modules/.pnpm/y-webrtc@10.3.0_yjs@13.6.14/node_modules/y-webrtc/src/crypto.js
var deriveKey = (secret, roomName) => {
  const secretBuffer = encodeUtf8(secret).buffer;
  const salt = encodeUtf8(roomName).buffer;
  return crypto.subtle.importKey(
    "raw",
    secretBuffer,
    "PBKDF2",
    false,
    ["deriveKey"]
  ).then(
    (keyMaterial) => crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt,
        iterations: 1e5,
        hash: "SHA-256"
      },
      keyMaterial,
      {
        name: "AES-GCM",
        length: 256
      },
      true,
      ["encrypt", "decrypt"]
    )
  );
};
var encrypt = (data, key) => {
  if (!key) {
    return (
      /** @type {PromiseLike<Uint8Array>} */
      resolve(data)
    );
  }
  const iv = crypto.getRandomValues(new Uint8Array(12));
  return crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv
    },
    key,
    data
  ).then((cipher) => {
    const encryptedDataEncoder = createEncoder();
    writeVarString(encryptedDataEncoder, "AES-GCM");
    writeVarUint8Array(encryptedDataEncoder, iv);
    writeVarUint8Array(encryptedDataEncoder, new Uint8Array(cipher));
    return toUint8Array(encryptedDataEncoder);
  });
};
var encryptJson = (data, key) => {
  const dataEncoder = createEncoder();
  writeAny(dataEncoder, data);
  return encrypt(toUint8Array(dataEncoder), key);
};
var decrypt = (data, key) => {
  if (!key) {
    return (
      /** @type {PromiseLike<Uint8Array>} */
      resolve(data)
    );
  }
  const dataDecoder = createDecoder(data);
  const algorithm = readVarString(dataDecoder);
  if (algorithm !== "AES-GCM") {
    reject(create2("Unknown encryption algorithm"));
  }
  const iv = readVarUint8Array(dataDecoder);
  const cipher = readVarUint8Array(dataDecoder);
  return crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv
    },
    key,
    cipher
  ).then((data2) => new Uint8Array(data2));
};
var decryptJson = (data, key) => decrypt(data, key).then(
  (decryptedValue) => readAny(createDecoder(new Uint8Array(decryptedValue)))
);

// ../../node_modules/.pnpm/y-webrtc@10.3.0_yjs@13.6.14/node_modules/y-webrtc/src/y-webrtc.js
var log = createModuleLogger("y-webrtc");
var messageSync = 0;
var messageQueryAwareness = 3;
var messageAwareness = 1;
var messageBcPeerId = 4;
var signalingConns = /* @__PURE__ */ new Map();
var rooms = /* @__PURE__ */ new Map();
var checkIsSynced = (room) => {
  let synced = true;
  room.webrtcConns.forEach((peer) => {
    if (!peer.synced) {
      synced = false;
    }
  });
  if (!synced && room.synced || synced && !room.synced) {
    room.synced = synced;
    room.provider.emit("synced", [{ synced }]);
    log("synced ", BOLD, room.name, UNBOLD, " with all peers");
  }
};
var readMessage = (room, buf, syncedCallback) => {
  const decoder = createDecoder(buf);
  const encoder = createEncoder();
  const messageType = readVarUint(decoder);
  if (room === void 0) {
    return null;
  }
  const awareness = room.awareness;
  const doc = room.doc;
  let sendReply = false;
  switch (messageType) {
    case messageSync: {
      writeVarUint(encoder, messageSync);
      const syncMessageType = readSyncMessage(decoder, encoder, doc, room);
      if (syncMessageType === messageYjsSyncStep2 && !room.synced) {
        syncedCallback();
      }
      if (syncMessageType === messageYjsSyncStep1) {
        sendReply = true;
      }
      break;
    }
    case messageQueryAwareness:
      writeVarUint(encoder, messageAwareness);
      writeVarUint8Array(encoder, encodeAwarenessUpdate(awareness, Array.from(awareness.getStates().keys())));
      sendReply = true;
      break;
    case messageAwareness:
      applyAwarenessUpdate(awareness, readVarUint8Array(decoder), room);
      break;
    case messageBcPeerId: {
      const add = readUint8(decoder) === 1;
      const peerName = readVarString(decoder);
      if (peerName !== room.peerId && (room.bcConns.has(peerName) && !add || !room.bcConns.has(peerName) && add)) {
        const removed = [];
        const added = [];
        if (add) {
          room.bcConns.add(peerName);
          added.push(peerName);
        } else {
          room.bcConns.delete(peerName);
          removed.push(peerName);
        }
        room.provider.emit("peers", [{
          added,
          removed,
          webrtcPeers: Array.from(room.webrtcConns.keys()),
          bcPeers: Array.from(room.bcConns)
        }]);
        broadcastBcPeerId(room);
      }
      break;
    }
    default:
      console.error("Unable to compute message");
      return encoder;
  }
  if (!sendReply) {
    return null;
  }
  return encoder;
};
var readPeerMessage = (peerConn, buf) => {
  const room = peerConn.room;
  log("received message from ", BOLD, peerConn.remotePeerId, GREY, " (", room.name, ")", UNBOLD, UNCOLOR);
  return readMessage(room, buf, () => {
    peerConn.synced = true;
    log("synced ", BOLD, room.name, UNBOLD, " with ", BOLD, peerConn.remotePeerId);
    checkIsSynced(room);
  });
};
var sendWebrtcConn = (webrtcConn, encoder) => {
  log("send message to ", BOLD, webrtcConn.remotePeerId, UNBOLD, GREY, " (", webrtcConn.room.name, ")", UNCOLOR);
  try {
    webrtcConn.peer.send(toUint8Array(encoder));
  } catch (e) {
  }
};
var broadcastWebrtcConn = (room, m) => {
  log("broadcast message in ", BOLD, room.name, UNBOLD);
  room.webrtcConns.forEach((conn) => {
    try {
      conn.peer.send(m);
    } catch (e) {
    }
  });
};
var WebrtcConn = class {
  /**
   * @param {SignalingConn} signalingConn
   * @param {boolean} initiator
   * @param {string} remotePeerId
   * @param {Room} room
   */
  constructor(signalingConn, initiator, remotePeerId, room) {
    log("establishing connection to ", BOLD, remotePeerId);
    this.room = room;
    this.remotePeerId = remotePeerId;
    this.glareToken = void 0;
    this.closed = false;
    this.connected = false;
    this.synced = false;
    this.peer = new import_simplepeer_min.default({ initiator, ...room.provider.peerOpts });
    this.peer.on("signal", (signal) => {
      if (this.glareToken === void 0) {
        this.glareToken = Date.now() + Math.random();
      }
      publishSignalingMessage(signalingConn, room, { to: remotePeerId, from: room.peerId, type: "signal", token: this.glareToken, signal });
    });
    this.peer.on("connect", () => {
      log("connected to ", BOLD, remotePeerId);
      this.connected = true;
      const provider = room.provider;
      const doc = provider.doc;
      const awareness = room.awareness;
      const encoder = createEncoder();
      writeVarUint(encoder, messageSync);
      writeSyncStep1(encoder, doc);
      sendWebrtcConn(this, encoder);
      const awarenessStates = awareness.getStates();
      if (awarenessStates.size > 0) {
        const encoder2 = createEncoder();
        writeVarUint(encoder2, messageAwareness);
        writeVarUint8Array(encoder2, encodeAwarenessUpdate(awareness, Array.from(awarenessStates.keys())));
        sendWebrtcConn(this, encoder2);
      }
    });
    this.peer.on("close", () => {
      this.connected = false;
      this.closed = true;
      if (room.webrtcConns.has(this.remotePeerId)) {
        room.webrtcConns.delete(this.remotePeerId);
        room.provider.emit("peers", [{
          removed: [this.remotePeerId],
          added: [],
          webrtcPeers: Array.from(room.webrtcConns.keys()),
          bcPeers: Array.from(room.bcConns)
        }]);
      }
      checkIsSynced(room);
      this.peer.destroy();
      log("closed connection to ", BOLD, remotePeerId);
      announceSignalingInfo(room);
    });
    this.peer.on("error", (err) => {
      log("Error in connection to ", BOLD, remotePeerId, ": ", err);
      announceSignalingInfo(room);
    });
    this.peer.on("data", (data) => {
      const answer = readPeerMessage(this, data);
      if (answer !== null) {
        sendWebrtcConn(this, answer);
      }
    });
  }
  destroy() {
    this.peer.destroy();
  }
};
var broadcastBcMessage = (room, m) => encrypt(m, room.key).then(
  (data) => room.mux(
    () => publish(room.name, data)
  )
);
var broadcastRoomMessage = (room, m) => {
  if (room.bcconnected) {
    broadcastBcMessage(room, m);
  }
  broadcastWebrtcConn(room, m);
};
var announceSignalingInfo = (room) => {
  signalingConns.forEach((conn) => {
    if (conn.connected) {
      conn.send({ type: "subscribe", topics: [room.name] });
      if (room.webrtcConns.size < room.provider.maxConns) {
        publishSignalingMessage(conn, room, { type: "announce", from: room.peerId });
      }
    }
  });
};
var broadcastBcPeerId = (room) => {
  if (room.provider.filterBcConns) {
    const encoderPeerIdBc = createEncoder();
    writeVarUint(encoderPeerIdBc, messageBcPeerId);
    writeUint8(encoderPeerIdBc, 1);
    writeVarString(encoderPeerIdBc, room.peerId);
    broadcastBcMessage(room, toUint8Array(encoderPeerIdBc));
  }
};
var Room = class {
  /**
   * @param {Y.Doc} doc
   * @param {WebrtcProvider} provider
   * @param {string} name
   * @param {CryptoKey|null} key
   */
  constructor(doc, provider, name, key) {
    this.peerId = uuidv4();
    this.doc = doc;
    this.awareness = provider.awareness;
    this.provider = provider;
    this.synced = false;
    this.name = name;
    this.key = key;
    this.webrtcConns = /* @__PURE__ */ new Map();
    this.bcConns = /* @__PURE__ */ new Set();
    this.mux = createMutex();
    this.bcconnected = false;
    this._bcSubscriber = (data) => decrypt(new Uint8Array(data), key).then(
      (m) => this.mux(() => {
        const reply = readMessage(this, m, () => {
        });
        if (reply) {
          broadcastBcMessage(this, toUint8Array(reply));
        }
      })
    );
    this._docUpdateHandler = (update, _origin) => {
      const encoder = createEncoder();
      writeVarUint(encoder, messageSync);
      writeUpdate(encoder, update);
      broadcastRoomMessage(this, toUint8Array(encoder));
    };
    this._awarenessUpdateHandler = ({ added, updated, removed }, _origin) => {
      const changedClients = added.concat(updated).concat(removed);
      const encoderAwareness = createEncoder();
      writeVarUint(encoderAwareness, messageAwareness);
      writeVarUint8Array(encoderAwareness, encodeAwarenessUpdate(this.awareness, changedClients));
      broadcastRoomMessage(this, toUint8Array(encoderAwareness));
    };
    this._beforeUnloadHandler = () => {
      removeAwarenessStates(this.awareness, [doc.clientID], "window unload");
      rooms.forEach((room) => {
        room.disconnect();
      });
    };
    if (typeof window !== "undefined") {
      window.addEventListener("beforeunload", this._beforeUnloadHandler);
    } else if (typeof process !== "undefined") {
      process.on("exit", this._beforeUnloadHandler);
    }
  }
  connect() {
    this.doc.on("update", this._docUpdateHandler);
    this.awareness.on("update", this._awarenessUpdateHandler);
    announceSignalingInfo(this);
    const roomName = this.name;
    subscribe(roomName, this._bcSubscriber);
    this.bcconnected = true;
    broadcastBcPeerId(this);
    const encoderSync = createEncoder();
    writeVarUint(encoderSync, messageSync);
    writeSyncStep1(encoderSync, this.doc);
    broadcastBcMessage(this, toUint8Array(encoderSync));
    const encoderState = createEncoder();
    writeVarUint(encoderState, messageSync);
    writeSyncStep2(encoderState, this.doc);
    broadcastBcMessage(this, toUint8Array(encoderState));
    const encoderAwarenessQuery = createEncoder();
    writeVarUint(encoderAwarenessQuery, messageQueryAwareness);
    broadcastBcMessage(this, toUint8Array(encoderAwarenessQuery));
    const encoderAwarenessState = createEncoder();
    writeVarUint(encoderAwarenessState, messageAwareness);
    writeVarUint8Array(encoderAwarenessState, encodeAwarenessUpdate(this.awareness, [this.doc.clientID]));
    broadcastBcMessage(this, toUint8Array(encoderAwarenessState));
  }
  disconnect() {
    signalingConns.forEach((conn) => {
      if (conn.connected) {
        conn.send({ type: "unsubscribe", topics: [this.name] });
      }
    });
    removeAwarenessStates(this.awareness, [this.doc.clientID], "disconnect");
    const encoderPeerIdBc = createEncoder();
    writeVarUint(encoderPeerIdBc, messageBcPeerId);
    writeUint8(encoderPeerIdBc, 0);
    writeVarString(encoderPeerIdBc, this.peerId);
    broadcastBcMessage(this, toUint8Array(encoderPeerIdBc));
    unsubscribe(this.name, this._bcSubscriber);
    this.bcconnected = false;
    this.doc.off("update", this._docUpdateHandler);
    this.awareness.off("update", this._awarenessUpdateHandler);
    this.webrtcConns.forEach((conn) => conn.destroy());
  }
  destroy() {
    this.disconnect();
    if (typeof window !== "undefined") {
      window.removeEventListener("beforeunload", this._beforeUnloadHandler);
    } else if (typeof process !== "undefined") {
      process.off("exit", this._beforeUnloadHandler);
    }
  }
};
var openRoom = (doc, provider, name, key) => {
  if (rooms.has(name)) {
    throw create2(`A Yjs Doc connected to room "${name}" already exists!`);
  }
  const room = new Room(doc, provider, name, key);
  rooms.set(
    name,
    /** @type {Room} */
    room
  );
  return room;
};
var publishSignalingMessage = (conn, room, data) => {
  if (room.key) {
    encryptJson(data, room.key).then((data2) => {
      conn.send({ type: "publish", topic: room.name, data: toBase64(data2) });
    });
  } else {
    conn.send({ type: "publish", topic: room.name, data });
  }
};
var SignalingConn = class extends WebsocketClient {
  constructor(url) {
    super(url);
    this.providers = /* @__PURE__ */ new Set();
    this.on("connect", () => {
      log(`connected (${url})`);
      const topics = Array.from(rooms.keys());
      this.send({ type: "subscribe", topics });
      rooms.forEach(
        (room) => publishSignalingMessage(this, room, { type: "announce", from: room.peerId })
      );
    });
    this.on("message", (m) => {
      switch (m.type) {
        case "publish": {
          const roomName = m.topic;
          const room = rooms.get(roomName);
          if (room == null || typeof roomName !== "string") {
            return;
          }
          const execMessage = (data) => {
            const webrtcConns = room.webrtcConns;
            const peerId = room.peerId;
            if (data == null || data.from === peerId || data.to !== void 0 && data.to !== peerId || room.bcConns.has(data.from)) {
              return;
            }
            const emitPeerChange = webrtcConns.has(data.from) ? () => {
            } : () => room.provider.emit("peers", [{
              removed: [],
              added: [data.from],
              webrtcPeers: Array.from(room.webrtcConns.keys()),
              bcPeers: Array.from(room.bcConns)
            }]);
            switch (data.type) {
              case "announce":
                if (webrtcConns.size < room.provider.maxConns) {
                  setIfUndefined(webrtcConns, data.from, () => new WebrtcConn(this, true, data.from, room));
                  emitPeerChange();
                }
                break;
              case "signal":
                if (data.signal.type === "offer") {
                  const existingConn = webrtcConns.get(data.from);
                  if (existingConn) {
                    const remoteToken = data.token;
                    const localToken = existingConn.glareToken;
                    if (localToken && localToken > remoteToken) {
                      log("offer rejected: ", data.from);
                      return;
                    }
                    existingConn.glareToken = void 0;
                  }
                }
                if (data.signal.type === "answer") {
                  log("offer answered by: ", data.from);
                  const existingConn = webrtcConns.get(data.from);
                  existingConn.glareToken = void 0;
                }
                if (data.to === peerId) {
                  setIfUndefined(webrtcConns, data.from, () => new WebrtcConn(this, false, data.from, room)).peer.signal(data.signal);
                  emitPeerChange();
                }
                break;
            }
          };
          if (room.key) {
            if (typeof m.data === "string") {
              decryptJson(fromBase64(m.data), room.key).then(execMessage);
            }
          } else {
            execMessage(m.data);
          }
        }
      }
    });
    this.on("disconnect", () => log(`disconnect (${url})`));
  }
};
var emitStatus = (provider) => {
  provider.emit("status", [{
    connected: provider.connected
  }]);
};
var WebrtcProvider = class extends ObservableV2 {
  /**
   * @param {string} roomName
   * @param {Y.Doc} doc
   * @param {ProviderOptions?} opts
   */
  constructor(roomName, doc, {
    signaling = ["wss://y-webrtc-eu.fly.dev"],
    password = null,
    awareness = new Awareness(doc),
    maxConns = 20 + floor(rand() * 15),
    // the random factor reduces the chance that n clients form a cluster
    filterBcConns = true,
    peerOpts = {}
    // simple-peer options. See https://github.com/feross/simple-peer#peer--new-peeropts
  } = {}) {
    super();
    this.roomName = roomName;
    this.doc = doc;
    this.filterBcConns = filterBcConns;
    this.awareness = awareness;
    this.shouldConnect = false;
    this.signalingUrls = signaling;
    this.signalingConns = [];
    this.maxConns = maxConns;
    this.peerOpts = peerOpts;
    this.key = password ? deriveKey(password, roomName) : (
      /** @type {PromiseLike<null>} */
      resolve(null)
    );
    this.room = null;
    this.key.then((key) => {
      this.room = openRoom(doc, this, roomName, key);
      if (this.shouldConnect) {
        this.room.connect();
      } else {
        this.room.disconnect();
      }
      emitStatus(this);
    });
    this.connect();
    this.destroy = this.destroy.bind(this);
    doc.on("destroy", this.destroy);
  }
  /**
   * Indicates whether the provider is looking for other peers.
   *
   * Other peers can be found via signaling servers or via broadcastchannel (cross browser-tab
   * communication). You never know when you are connected to all peers. You also don't know if
   * there are other peers. connected doesn't mean that you are connected to any physical peers
   * working on the same resource as you. It does not change unless you call provider.disconnect()
   *
   * `this.on('status', (event) => { console.log(event.connected) })`
   *
   * @type {boolean}
   */
  get connected() {
    return this.room !== null && this.shouldConnect;
  }
  connect() {
    this.shouldConnect = true;
    this.signalingUrls.forEach((url) => {
      const signalingConn = setIfUndefined(signalingConns, url, () => new SignalingConn(url));
      this.signalingConns.push(signalingConn);
      signalingConn.providers.add(this);
    });
    if (this.room) {
      this.room.connect();
      emitStatus(this);
    }
  }
  disconnect() {
    this.shouldConnect = false;
    this.signalingConns.forEach((conn) => {
      conn.providers.delete(this);
      if (conn.providers.size === 0) {
        conn.destroy();
        signalingConns.delete(conn.url);
      }
    });
    if (this.room) {
      this.room.disconnect();
      emitStatus(this);
    }
  }
  destroy() {
    this.doc.off("destroy", this.destroy);
    this.key.then(() => {
      this.room.destroy();
      rooms.delete(this.roomName);
    });
    super.destroy();
  }
};
export {
  Room,
  SignalingConn,
  WebrtcConn,
  WebrtcProvider
};
/*! Bundled license information:

simple-peer/simplepeer.min.js:
  (*!
  * The buffer module from node.js, for the browser.
  *
  * @author   Feross Aboukhadijeh <https://feross.org>
  * @license  MIT
  *)
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
  (*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
  (*! simple-peer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
//# sourceMappingURL=y-webrtc.js.map
