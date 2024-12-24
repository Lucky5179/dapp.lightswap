import {
  p as q,
  d as ce,
  cn as k,
  cv as s,
  cL as F,
  dd as Y,
  _ as R,
  d7 as de,
  O as J,
  cy as G,
  cJ as b,
  eM as ue,
  cz as v,
  cT as Z,
  ec as he,
  di as we,
  cM as Q,
  er as pe,
  cP as ee,
  eE as me,
  et as fe,
  dt as ge,
  cA as S,
} from "./assets/index-POi8GhpC.js";
import { P as be } from "./C2Mbex37.js";
import { V as ye } from "./BNG_iicX.js";
import { j as xe, h as ve } from "./O10yLqW6.js";
import "./Dm4mEk3Z.js";
(function () {
  try {
    var e =
        typeof window < "u"
          ? window
          : typeof global < "u"
          ? global
          : typeof self < "u"
          ? self
          : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "c2d75650-7c06-4e87-aa01-f06c2f36fed4"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-c2d75650-7c06-4e87-aa01-f06c2f36fed4"));
  } catch {}
})();
var V = { exports: {} },
  M = { exports: {} },
  E = 1e3,
  _ = E * 60,
  I = _ * 60,
  A = I * 24,
  je = A * 365.25,
  ke = function (e, t) {
    t = t || {};
    var n = typeof e;
    if (n === "string" && e.length > 0) return Ce(e);
    if (n === "number" && isNaN(e) === !1) return t.long ? Oe(e) : Ne(e);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(e)
    );
  };
function Ce(e) {
  if (((e = String(e)), !(e.length > 100))) {
    var t =
      /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        e
      );
    if (t) {
      var n = parseFloat(t[1]),
        r = (t[2] || "ms").toLowerCase();
      switch (r) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * je;
        case "days":
        case "day":
        case "d":
          return n * A;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * I;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * _;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * E;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return;
      }
    }
  }
}
function Ne(e) {
  return e >= A
    ? Math.round(e / A) + "d"
    : e >= I
    ? Math.round(e / I) + "h"
    : e >= _
    ? Math.round(e / _) + "m"
    : e >= E
    ? Math.round(e / E) + "s"
    : e + "ms";
}
function Oe(e) {
  return (
    P(e, A, "day") ||
    P(e, I, "hour") ||
    P(e, _, "minute") ||
    P(e, E, "second") ||
    e + " ms"
  );
}
function P(e, t, n) {
  if (!(e < t))
    return e < t * 1.5
      ? Math.floor(e / t) + " " + n
      : Math.ceil(e / t) + " " + n + "s";
}
(function (e, t) {
  (t = e.exports = i.debug = i.default = i),
    (t.coerce = h),
    (t.disable = l),
    (t.enable = u),
    (t.enabled = c),
    (t.humanize = ke),
    (t.names = []),
    (t.skips = []),
    (t.formatters = {});
  var n;
  function r(o) {
    var a = 0,
      d;
    for (d in o) (a = (a << 5) - a + o.charCodeAt(d)), (a |= 0);
    return t.colors[Math.abs(a) % t.colors.length];
  }
  function i(o) {
    function a() {
      if (a.enabled) {
        var d = a,
          f = +new Date(),
          x = f - (n || f);
        (d.diff = x), (d.prev = n), (d.curr = f), (n = f);
        for (var g = new Array(arguments.length), O = 0; O < g.length; O++)
          g[O] = arguments[O];
        (g[0] = t.coerce(g[0])), typeof g[0] != "string" && g.unshift("%O");
        var H = 0;
        (g[0] = g[0].replace(/%([a-zA-Z%])/g, function (j, K) {
          if (j === "%%") return j;
          H++;
          var W = t.formatters[K];
          if (typeof W == "function") {
            var B = g[H];
            (j = W.call(d, B)), g.splice(H, 1), H--;
          }
          return j;
        })),
          t.formatArgs.call(d, g);
        var z = a.log || t.log || console.log.bind(console);
        z.apply(d, g);
      }
    }
    return (
      (a.namespace = o),
      (a.enabled = t.enabled(o)),
      (a.useColors = t.useColors()),
      (a.color = r(o)),
      typeof t.init == "function" && t.init(a),
      a
    );
  }
  function u(o) {
    t.save(o), (t.names = []), (t.skips = []);
    for (
      var a = (typeof o == "string" ? o : "").split(/[\s,]+/),
        d = a.length,
        f = 0;
      f < d;
      f++
    )
      a[f] &&
        ((o = a[f].replace(/\*/g, ".*?")),
        o[0] === "-"
          ? t.skips.push(new RegExp("^" + o.substr(1) + "$"))
          : t.names.push(new RegExp("^" + o + "$")));
  }
  function l() {
    t.enable("");
  }
  function c(o) {
    var a, d;
    for (a = 0, d = t.skips.length; a < d; a++)
      if (t.skips[a].test(o)) return !1;
    for (a = 0, d = t.names.length; a < d; a++)
      if (t.names[a].test(o)) return !0;
    return !1;
  }
  function h(o) {
    return o instanceof Error ? o.stack || o.message : o;
  }
})(M, M.exports);
var He = M.exports;
(function (e, t) {
  var n = {};
  (t = e.exports = He),
    (t.log = u),
    (t.formatArgs = i),
    (t.save = l),
    (t.load = c),
    (t.useColors = r),
    (t.storage =
      typeof chrome < "u" && typeof chrome.storage < "u"
        ? chrome.storage.local
        : h()),
    (t.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson",
    ]);
  function r() {
    return typeof window < "u" &&
      window.process &&
      window.process.type === "renderer"
      ? !0
      : (typeof document < "u" &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
          (typeof window < "u" &&
            window.console &&
            (window.console.firebug ||
              (window.console.exception && window.console.table))) ||
          (typeof navigator < "u" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
            parseInt(RegExp.$1, 10) >= 31) ||
          (typeof navigator < "u" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
  }
  t.formatters.j = function (o) {
    try {
      return JSON.stringify(o);
    } catch (a) {
      return "[UnexpectedJSONParseError]: " + a.message;
    }
  };
  function i(o) {
    var a = this.useColors;
    if (
      ((o[0] =
        (a ? "%c" : "") +
        this.namespace +
        (a ? " %c" : " ") +
        o[0] +
        (a ? "%c " : " ") +
        "+" +
        t.humanize(this.diff)),
      !!a)
    ) {
      var d = "color: " + this.color;
      o.splice(1, 0, d, "color: inherit");
      var f = 0,
        x = 0;
      o[0].replace(/%[a-zA-Z%]/g, function (g) {
        g !== "%%" && (f++, g === "%c" && (x = f));
      }),
        o.splice(x, 0, d);
    }
  }
  function u() {
    return (
      typeof console == "object" &&
      console.log &&
      Function.prototype.apply.call(console.log, console, arguments)
    );
  }
  function l(o) {
    try {
      o == null ? t.storage.removeItem("debug") : (t.storage.debug = o);
    } catch {}
  }
  function c() {
    var o;
    try {
      o = t.storage.debug;
    } catch {}
    return !o && typeof q < "u" && "env" in q && (o = n.DEBUG), o;
  }
  t.enable(c());
  function h() {
    try {
      return window.localStorage;
    } catch {}
  }
})(V, V.exports);
var We = V.exports,
  te = We("jsonp"),
  Re = _e,
  Se = 0;
function Ee() {}
function _e(e, t, n) {
  typeof t == "function" && ((n = t), (t = {})), t || (t = {});
  var r = t.prefix || "__jp",
    i = t.name || r + Se++,
    u = t.param || "callback",
    l = t.timeout != null ? t.timeout : 6e4,
    c = encodeURIComponent,
    h = document.getElementsByTagName("script")[0] || document.head,
    o,
    a;
  l &&
    (a = setTimeout(function () {
      d(), n && n(new Error("Timeout"));
    }, l));
  function d() {
    o.parentNode && o.parentNode.removeChild(o),
      (window[i] = Ee),
      a && clearTimeout(a);
  }
  function f() {
    window[i] && d();
  }
  return (
    (window[i] = function (x) {
      te("jsonp got", x), d(), n && n(null, x);
    }),
    (e += (~e.indexOf("?") ? "&" : "?") + u + "=" + c(i)),
    (e = e.replace("?&", "?")),
    te('jsonp req "%s"', e),
    (o = document.createElement("script")),
    (o.src = e),
    h.parentNode.insertBefore(o, h),
    f
  );
}
const C = ce(Re);
var Ie = Object.defineProperty,
  Ae = Object.defineProperties,
  Te = Object.getOwnPropertyDescriptors,
  $ = Object.getOwnPropertySymbols,
  ne = Object.prototype.hasOwnProperty,
  re = Object.prototype.propertyIsEnumerable,
  oe = (e, t, n) =>
    t in e
      ? Ie(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  y = (e, t) => {
    for (var n in t || (t = {})) ne.call(t, n) && oe(e, n, t[n]);
    if ($) for (var n of $(t)) re.call(t, n) && oe(e, n, t[n]);
    return e;
  },
  L = (e, t) => Ae(e, Te(t)),
  D = (e, t) => {
    var n = {};
    for (var r in e) ne.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && $)
      for (var r of $(e)) t.indexOf(r) < 0 && re.call(e, r) && (n[r] = e[r]);
    return n;
  };
function Pe(e) {
  return (t) => {
    var n = t,
      {
        bgStyle: r = {},
        borderRadius: i = 0,
        iconFillColor: u = "white",
        round: l = !1,
        size: c = 64,
      } = n,
      h = D(n, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
    return s.jsxs(
      "svg",
      L(y({ viewBox: "0 0 64 64", width: c, height: c }, h), {
        children: [
          l
            ? s.jsx("circle", {
                cx: "32",
                cy: "32",
                r: "32",
                fill: e.color,
                style: r,
              })
            : s.jsx("rect", {
                width: "64",
                height: "64",
                rx: i,
                ry: i,
                fill: e.color,
                style: r,
              }),
          s.jsx("path", { d: e.path, fill: u }),
        ],
      })
    );
  };
}
function w(e) {
  const t = Object.entries(e)
    .filter(([, n]) => n != null)
    .map(
      ([n, r]) => `${encodeURIComponent(n)}=${encodeURIComponent(String(r))}`
    );
  return t.length > 0 ? `?${t.join("&")}` : "";
}
const $e = (e) =>
    !!e &&
    (typeof e == "object" || typeof e == "function") &&
    typeof e.then == "function",
  Le = (e, t) => ({
    left:
      window.outerWidth / 2 +
      (window.screenX || window.screenLeft || 0) -
      e / 2,
    top:
      window.outerHeight / 2 +
      (window.screenY || window.screenTop || 0) -
      t / 2,
  }),
  De = (e, t) => ({
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2,
  });
function ze(e, t, n) {
  var r = t,
    { height: i, width: u } = r,
    l = D(r, ["height", "width"]);
  const c = y(
      {
        height: i,
        width: u,
        location: "no",
        toolbar: "no",
        status: "no",
        directories: "no",
        menubar: "no",
        scrollbars: "yes",
        resizable: "no",
        centerscreen: "yes",
        chrome: "yes",
      },
      l
    ),
    h = window.open(
      e,
      "",
      Object.keys(c)
        .map((o) => `${o}=${c[o]}`)
        .join(", ")
    );
  if (n) {
    const o = window.setInterval(() => {
      try {
        (h === null || h.closed) && (window.clearInterval(o), n(h));
      } catch (a) {
        console.error(a);
      }
    }, 1e3);
  }
  return h;
}
function Ke(e) {
  var t = e,
    {
      beforeOnClick: n,
      children: r,
      className: i,
      disabled: u,
      disabledStyle: l = { opacity: 0.6 },
      forwardedRef: c,
      htmlTitle: h,
      networkLink: o,
      networkName: a,
      onClick: d,
      onShareWindowClose: f,
      openShareDialogOnClick: x = !0,
      opts: g,
      resetButtonStyle: O = !0,
      style: H,
      url: z,
      windowHeight: j = 400,
      windowPosition: K = "windowCenter",
      windowWidth: W = 550,
    } = t,
    B = D(t, [
      "beforeOnClick",
      "children",
      "className",
      "disabled",
      "disabledStyle",
      "forwardedRef",
      "htmlTitle",
      "networkLink",
      "networkName",
      "onClick",
      "onShareWindowClose",
      "openShareDialogOnClick",
      "opts",
      "resetButtonStyle",
      "style",
      "url",
      "windowHeight",
      "windowPosition",
      "windowWidth",
    ]);
  const se = async (U) => {
      const X = o(z, g);
      if (!u) {
        if ((U.preventDefault(), n)) {
          const T = n();
          $e(T) && (await T);
        }
        if (x) {
          const T = y(
            { height: j, width: W },
            K === "windowCenter" ? Le(W, j) : De(W, j)
          );
          ze(X, T, f);
        }
        d && d(U, X);
      }
    },
    ae = F(
      "react-share__ShareButton",
      { "react-share__ShareButton--disabled": !!u, disabled: !!u },
      i
    ),
    le = y(
      y(
        O
          ? {
              backgroundColor: "transparent",
              border: "none",
              padding: 0,
              font: "inherit",
              color: "inherit",
              cursor: "pointer",
            }
          : {},
        H
      ),
      u && l
    );
  return s.jsx(
    "button",
    L(y({}, B), {
      className: ae,
      onClick: se,
      ref: c,
      style: le,
      title: h,
      children: r,
    })
  );
}
function m(e, t, n, r) {
  function i(u, l) {
    const c = n(u),
      h = y({}, u);
    return (
      Object.keys(c).forEach((o) => {
        delete h[o];
      }),
      s.jsx(
        Ke,
        L(y(y({}, r), h), {
          forwardedRef: l,
          networkName: e,
          networkLink: t,
          opts: n(u),
        })
      )
    );
  }
  return (i.displayName = `ShareButton-${e}`), k.forwardRef(i);
}
function Be(e, { subject: t, body: n, separator: r }) {
  return "mailto:" + w({ subject: t, body: n ? n + r + e : e });
}
m(
  "email",
  Be,
  (e) => ({ subject: e.subject, body: e.body, separator: e.separator || " " }),
  {
    openShareDialogOnClick: !1,
    onClick: (e, t) => {
      window.location.href = t;
    },
  }
);
function Ve(e, { appId: t, redirectUri: n, to: r }) {
  return (
    "https://www.facebook.com/dialog/send" +
    w({ link: e, redirect_uri: n || e, app_id: t, to: r })
  );
}
m(
  "facebookmessenger",
  Ve,
  (e) => ({ appId: e.appId, redirectUri: e.redirectUri, to: e.to }),
  { windowWidth: 1e3, windowHeight: 820 }
);
class Me extends Error {
  constructor(t) {
    super(t), (this.name = "AssertionError");
  }
}
function p(e, t) {
  if (!e) throw new Me(t);
}
function Ue(e, { hashtag: t }) {
  return (
    p(e, "facebook.url"),
    "https://www.facebook.com/sharer/sharer.php" + w({ u: e, hashtag: t })
  );
}
m("facebook", Ue, (e) => ({ hashtag: e.hashtag }), {
  windowWidth: 550,
  windowHeight: 400,
});
function Xe() {
  const e = k.useRef(!1);
  return (
    k.useEffect(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    k.useCallback(() => e.current, [])
  );
}
function qe(e) {
  var t = e,
    { children: n = (f) => f, className: r, getCount: i, url: u } = t,
    l = D(t, ["children", "className", "getCount", "url"]);
  const c = Xe(),
    [h, o] = k.useState(void 0),
    [a, d] = k.useState(!1);
  return (
    k.useEffect(() => {
      d(!0),
        i(u, (f) => {
          c() && (o(f), d(!1));
        });
    }, [u]),
    s.jsx(
      "span",
      L(y({ className: F("react-share__ShareCount", r) }, l), {
        children: !a && h !== void 0 && n(h),
      })
    )
  );
}
function N(e) {
  const t = (n) => s.jsx(qe, y({ getCount: e }, n));
  return (t.displayName = `ShareCount(${e.name})`), t;
}
function Fe(e, t) {
  const n = `https://graph.facebook.com/?id=${e}&fields=og_object{engagement}`;
  C(n, (r, i) => {
    t(
      !r && i && i.og_object && i.og_object.engagement
        ? i.og_object.engagement.count
        : void 0
    );
  });
}
N(Fe);
function Ye(e, { title: t }) {
  return (
    p(e, "hatena.url"),
    `http://b.hatena.ne.jp/add?mode=confirm&url=${e}&title=${t}`
  );
}
m("hatena", Ye, (e) => ({ title: e.title }), {
  windowWidth: 660,
  windowHeight: 460,
  windowPosition: "windowCenter",
});
function Je(e, t) {
  C("https://bookmark.hatenaapis.com/count/entry" + w({ url: e }), (n, r) => {
    t(r ?? void 0);
  });
}
N(Je);
function Ge(e, { title: t, description: n }) {
  return (
    p(e, "instapaper.url"),
    "http://www.instapaper.com/hello2" + w({ url: e, title: t, description: n })
  );
}
m("instapaper", Ge, (e) => ({ title: e.title, description: e.description }), {
  windowWidth: 500,
  windowHeight: 500,
  windowPosition: "windowCenter",
});
function Ze(e, { title: t }) {
  return (
    p(e, "line.url"),
    "https://social-plugins.line.me/lineit/share" + w({ url: e, text: t })
  );
}
m("line", Ze, (e) => ({ title: e.title }), {
  windowWidth: 500,
  windowHeight: 500,
});
function Qe(e, { title: t, summary: n, source: r }) {
  return (
    p(e, "linkedin.url"),
    "https://linkedin.com/shareArticle" +
      w({ url: e, mini: "true", title: t, summary: n, source: r })
  );
}
m(
  "linkedin",
  Qe,
  ({ title: e, summary: t, source: n }) => ({
    title: e,
    summary: t,
    source: n,
  }),
  { windowWidth: 750, windowHeight: 600 }
);
function et(e, { title: t, description: n }) {
  return (
    p(e, "livejournal.url"),
    "https://www.livejournal.com/update.bml" + w({ subject: t, event: n })
  );
}
m("livejournal", et, (e) => ({ title: e.title, description: e.description }), {
  windowWidth: 660,
  windowHeight: 460,
});
function tt(e, { title: t, description: n, imageUrl: r }) {
  return (
    p(e, "mailru.url"),
    "https://connect.mail.ru/share" +
      w({ url: e, title: t, description: n, image_url: r })
  );
}
m(
  "mailru",
  tt,
  (e) => ({ title: e.title, description: e.description, imageUrl: e.imageUrl }),
  { windowWidth: 660, windowHeight: 460 }
);
function nt(e, { title: t, description: n, image: r }) {
  return (
    p(e, "ok.url"),
    "https://connect.ok.ru/offer" +
      w({ url: e, title: t, description: n, imageUrl: r })
  );
}
m(
  "ok",
  nt,
  (e) => ({ title: e.title, description: e.description, image: e.image }),
  { windowWidth: 588, windowHeight: 480, windowPosition: "screenCenter" }
);
function rt(e, t) {
  window.OK ||
    (window.OK = {
      Share: {
        count: function (i, u) {
          var l, c;
          (c = (l = window.OK.callbacks)[i]) == null || c.call(l, u);
        },
      },
      callbacks: [],
    });
  const n = "https://connect.ok.ru/dk",
    r = window.OK.callbacks.length;
  return (
    (window.ODKL = {
      updateCount(i, u) {
        var l, c;
        const h = i === "" ? 0 : parseInt(i.replace("react-share-", ""), 10);
        (c = (l = window.OK.callbacks)[h]) == null ||
          c.call(l, u === "" ? void 0 : parseInt(u, 10));
      },
    }),
    window.OK.callbacks.push(t),
    C(n + w({ "st.cmd": "extLike", uid: `react-share-${r}`, ref: e }))
  );
}
N(rt);
function ot(e, { media: t, description: n, pinId: r }) {
  return r
    ? `https://pinterest.com/pin/${r}/repin/x/`
    : (p(e, "pinterest.url"),
      p(t, "pinterest.media"),
      "https://pinterest.com/pin/create/button/" +
        w({ url: e, media: t, description: n }));
}
m(
  "pinterest",
  ot,
  (e) => ({ media: e.media, description: e.description, pinId: e.pinId }),
  { windowWidth: 1e3, windowHeight: 730 }
);
function it(e, t) {
  C("https://api.pinterest.com/v1/urls/count.json" + w({ url: e }), (n, r) => {
    t(r ? r.count : void 0);
  });
}
N(it);
function st(e, { title: t }) {
  return (
    p(e, "pocket.url"), "https://getpocket.com/save" + w({ url: e, title: t })
  );
}
m("pocket", st, (e) => ({ title: e.title }), {
  windowWidth: 500,
  windowHeight: 500,
});
function at(e, { title: t }) {
  return (
    p(e, "reddit.url"),
    "https://www.reddit.com/web/submit" + w({ url: e, title: t })
  );
}
m("reddit", at, (e) => ({ title: e.title }), {
  windowWidth: 660,
  windowHeight: 460,
  windowPosition: "windowCenter",
});
function lt(e, { title: t }) {
  return p(e, "gab.url"), "https://gab.com/compose" + w({ url: e, text: t });
}
m("gab", lt, (e) => ({ title: e.title }), {
  windowWidth: 660,
  windowHeight: 640,
  windowPosition: "windowCenter",
});
function ct(e, t) {
  const n = `https://www.reddit.com/api/info.json?limit=1&url=${e}`;
  C(n, { param: "jsonp" }, (r, i) => {
    t(
      !r &&
        i &&
        i.data &&
        i.data.children.length > 0 &&
        i.data.children[0].data.score
        ? i.data.children[0].data.score
        : void 0
    );
  });
}
N(ct);
function dt(e, { title: t }) {
  return (
    p(e, "telegram.url"),
    "https://telegram.me/share/url" + w({ url: e, text: t })
  );
}
m("telegram", dt, (e) => ({ title: e.title }), {
  windowWidth: 550,
  windowHeight: 400,
});
function ut(e, { title: t, caption: n, tags: r, posttype: i }) {
  return (
    p(e, "tumblr.url"),
    "https://www.tumblr.com/widgets/share/tool" +
      w({ canonicalUrl: e, title: t, caption: n, tags: r, posttype: i })
  );
}
m(
  "tumblr",
  ut,
  (e) => ({
    title: e.title,
    tags: (e.tags || []).join(","),
    caption: e.caption,
    posttype: e.posttype || "link",
  }),
  { windowWidth: 660, windowHeight: 460 }
);
function ht(e, t) {
  return C("https://api.tumblr.com/v2/share/stats" + w({ url: e }), (n, r) => {
    t(!n && r && r.response ? r.response.note_count : void 0);
  });
}
N(ht);
function wt(e, { title: t, via: n, hashtags: r = [], related: i = [] }) {
  return (
    p(e, "twitter.url"),
    p(Array.isArray(r), "twitter.hashtags is not an array"),
    p(Array.isArray(i), "twitter.related is not an array"),
    "https://twitter.com/intent/tweet" +
      w({
        url: e,
        text: t,
        via: n,
        hashtags: r.length > 0 ? r.join(",") : void 0,
        related: i.length > 0 ? i.join(",") : void 0,
      })
  );
}
const pt = m(
    "twitter",
    wt,
    (e) => ({
      hashtags: e.hashtags,
      title: e.title,
      via: e.via,
      related: e.related,
    }),
    { windowWidth: 550, windowHeight: 400 }
  ),
  mt = pt;
function ft(e, { title: t, separator: n }) {
  return p(e, "viber.url"), "viber://forward" + w({ text: t ? t + n + e : e });
}
m("viber", ft, (e) => ({ title: e.title, separator: e.separator || " " }), {
  windowWidth: 660,
  windowHeight: 460,
});
function gt(e, { title: t, image: n, noParse: r, noVkLinks: i }) {
  return (
    p(e, "vk.url"),
    "https://vk.com/share.php" +
      w({
        url: e,
        title: t,
        image: n,
        noparse: r ? 1 : 0,
        no_vk_links: i ? 1 : 0,
      })
  );
}
m(
  "vk",
  gt,
  (e) => ({
    title: e.title,
    image: e.image,
    noParse: e.noParse,
    noVkLinks: e.noVkLinks,
  }),
  { windowWidth: 660, windowHeight: 460 }
);
function bt(e, t) {
  window.VK || (window.VK = {}),
    (window.VK.Share = {
      count: (i, u) => {
        var l, c;
        return (c = (l = window.VK.callbacks) == null ? void 0 : l[i]) == null
          ? void 0
          : c.call(l, u);
      },
    }),
    (window.VK.callbacks = []);
  const n = "https://vk.com/share.php",
    r = window.VK.callbacks.length;
  return (
    window.VK.callbacks.push(t), C(n + w({ act: "count", index: r, url: e }))
  );
}
N(bt);
function yt(e, { title: t, image: n }) {
  return (
    p(e, "weibo.url"),
    "http://service.weibo.com/share/share.php" + w({ url: e, title: t, pic: n })
  );
}
m("weibo", yt, (e) => ({ title: e.title, image: e.image }), {
  windowWidth: 660,
  windowHeight: 550,
  windowPosition: "screenCenter",
});
function xt() {
  return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
}
function vt(e, { title: t, separator: n }) {
  return (
    p(e, "whatsapp.url"),
    "https://" +
      (xt() ? "api" : "web") +
      ".whatsapp.com/send" +
      w({ text: t ? t + n + e : e })
  );
}
m("whatsapp", vt, (e) => ({ title: e.title, separator: e.separator || " " }), {
  windowWidth: 550,
  windowHeight: 400,
});
function jt(e, { quote: t, hashtag: n }) {
  return (
    p(e, "workplace.url"),
    "https://work.facebook.com/sharer.php" + w({ u: e, quote: t, hashtag: n })
  );
}
m("workplace", jt, (e) => ({ quote: e.quote, hashtag: e.hashtag }), {
  windowWidth: 550,
  windowHeight: 400,
});
const kt = Pe({
    color: "#000000",
    networkName: "X",
    path: "M 41.116 18.375 h 4.962 l -10.8405 12.39 l 12.753 16.86 H 38.005 l -7.821 -10.2255 L 21.235 47.625 H 16.27 l 11.595 -13.2525 L 15.631 18.375 H 25.87 l 7.0695 9.3465 z m -1.7415 26.28 h 2.7495 L 24.376 21.189 H 21.4255 z",
  }),
  Ct = kt,
  Nt = () => {
    const { getWalletAddress: e } = Y(),
      t = e(R.THORChain),
      [n, r] = de(`referral-name:${t}`, ""),
      { data: i, isLoading: u } = xe({ chain: R.THORChain }),
      l = i == null ? void 0 : i.sort((a, d) => a.localeCompare(d)),
      c = n ? `${window.location.origin}/swap?ref=${n}` : "",
      { data: h } = ve({ chain: R.THORChain, name: n }),
      o =
        (h == null ? void 0 : h.preferredAsset) ||
        J.from({ chain: R.THORChain });
    return (
      k.useEffect(() => {
        !n && l && (l == null ? void 0 : l.length) > 0 && r(l[0]);
      }, [l]),
      u || !l
        ? s.jsx(G, { spin: !0, name: "loader", size: 32 })
        : s.jsxs(b, {
            col: !0,
            className: "self-stretch",
            flex: 1,
            children: [
              s.jsxs(b, {
                className:
                  "flex flex-1 self-stretch gap-4 flex-col md:flex-row",
                children: [
                  (l == null ? void 0 : l.length) > 0
                    ? s.jsx(ue, {
                        buttonClassName: "!flex !flex-1",
                        className: "!flex !flex-1",
                        menuItems:
                          l == null
                            ? void 0
                            : l.map((a) => ({ value: a, label: a })),
                        onChange: r,
                        openComponent: s.jsx(b, {
                          alignCenter: !0,
                          className: "gap-x-2",
                          children: s.jsx(v, {
                            children: n || "Select THORName",
                          }),
                        }),
                        value: n,
                      })
                    : s.jsx(b, {
                        className: "flex-1 items-center justify-start",
                        children: s.jsx(v, {
                          className: "text-sm text-gray-500 mx-2",
                          variant: "secondary",
                          children: "No THORNames registered",
                        }),
                      }),
                  s.jsx(b, {
                    className: "items-center justify-center",
                    children: s.jsx(Z, {
                      className: "!decoration-btn-primary hover:underline",
                      to: "/thorname",
                      children: s.jsx(v, {
                        className:
                          "!text-btn-primary !text-xs !decoration-btn-primary font-semibold",
                        children: "Register THORName",
                      }),
                    }),
                  }),
                ],
              }),
              s.jsx(b, {
                className: "flex items-center gap-2 flex-1 mt-2",
                children: s.jsx(he, {
                  className: "flex-1 pl-2",
                  showBorder: !1,
                  label: s.jsx(we, {
                    value: "Preferred asset",
                    tooltip: "You will receive rewards in this asset.",
                  }),
                  value: s.jsxs(b, {
                    className: "items-center gap-1",
                    children: [
                      s.jsx(v, { children: o == null ? void 0 : o.symbol }),
                      s.jsx(Q, { asset: o, size: 16 }),
                      " ",
                      s.jsx(Z, {
                        className:
                          "!decoration-btn-primary hover:underline ml-2",
                        to: "/thorname",
                        children: s.jsx(v, {
                          className:
                            "!text-btn-primary !text-xs !decoration-btn-primary font-semibold",
                          children: "Change",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              s.jsxs(b, {
                col: !0,
                className: "mt-6",
                children: [
                  s.jsx("span", {
                    className:
                      "text-sm text-gray-500 mx-2 text-secondary-foreground",
                    children: "Your referral link",
                  }),
                  s.jsxs(b, {
                    className: "relative",
                    children: [
                      s.jsx(pe, {
                        readOnly: !0,
                        stretch: !0,
                        border: "rounded",
                        className: "!text-md p-1.5 flex-1 border w-full",
                        value: c,
                      }),
                      s.jsx(b, {
                        className: "absolute right-1 top-1/2 -translate-y-1/2",
                        children: s.jsx(ee, {
                          className: "!rounded-md",
                          onClick: () => {
                            me("Referral link copied"), fe(c);
                          },
                          tooltip: "Copy link",
                          variant: "tint",
                          children: s.jsx(G, { name: "copy", size: 24 }),
                        }),
                      }),
                    ],
                  }),
                  s.jsx(mt, {
                    url: c,
                    title: `Your Keys, Your Coins.
Leave CEXs behind and swap cross-chain on @LIGHTSwap AI, the best multi-chain DEX.

Trade Native Bitcoin, Ethereum, Solana, DOGE, BNB, AVAX and 6,000+ tokens seamlessly in a single transaction.

Get started:`,
                    className:
                      "Demo__some-network__share-button flex items-center self-end mt-4",
                    children: s.jsxs(b, {
                      className:
                        "flex items-center self-start bg-black rounded-full p-2 pl-4",
                      children: [
                        s.jsx("span", {
                          className: "text-sm font-semibold",
                          children: "Share on ",
                        }),
                        s.jsx(Ct, { size: 32, round: !0 }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
    );
  },
  ie = () => {
    const { setIsConnectModalOpen: e } = ge(),
      { getWalletAddress: t } = Y(),
      n = t(R.THORChain);
    return s.jsxs(be, {
      description: S("views.referral.description"),
      header: s.jsxs(b, {
        col: !0,
        children: [
          s.jsx(ye, { title: S("views.referral.title") }),
          s.jsx(b, {
            className: "px-2.5 pt-1",
            justify: "between",
            children: s.jsx(v, {
              fontWeight: "medium",
              textStyle: "caption",
              variant: "secondary",
              children: S("views.referral.description"),
            }),
          }),
        ],
      }),
      keywords: "THORName, LIGHTSwap AI, THORChain, DEFI, DEX",
      title: S("views.referral.title"),
      children: [
        s.jsxs(b, {
          className: "flex-col",
          children: [
            s.jsx(v, {
              className: "mx-2 !mb-1",
              children: S("views.referral.info"),
            }),
            s.jsx(v, {
              className: "mx-2 !mb-6 w-full",
              children: "Referral fee will be included on a best effort basis.",
            }),
            s.jsx(v, {
              className: "mx-2 !mb-6 font-semibold",
              variant: "secondary",
              children: S("views.referral.note"),
            }),
          ],
        }),
        n
          ? s.jsx(Nt, {})
          : s.jsx(ee, {
              stretch: !0,
              className: "w-full",
              onClick: () => e(!0),
              rightIcon: s.jsx(Q, {
                asset: J.from({ chain: R.THORChain }),
                size: 18,
              }),
              size: "lg",
              variant: "fancy",
              children: "Connect",
            }),
      ],
    });
  };
export { ie as Referral, ie as default };
