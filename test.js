!(function (e, n) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = n();
  else if ("function" == typeof define && define.amd) define([], n);
  else {
    var t = n();
    for (var r in t) ("object" == typeof exports ? exports : e)[r] = t[r];
  }
})(window, function () {
  return (function (e) {
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    var t = {};
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function (n) {
                return e[n];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
      }),
      (n.p = "/"),
      n((n.s = "mdyV"))
    );
  })({
    "+Gyt": function (e, n, t) {
      "use strict";
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var o = function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var n, t = 1, r = arguments.length; t < r; t++)
                for (var o in (n = arguments[t]))
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              return e;
            }).apply(this, arguments);
        },
        i = function (e, n, t, r) {
          return new (t || (t = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? o(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(a, u);
            }
            s((r = r.apply(e, n || [])).next());
          });
        },
        a = function (e, n) {
          function t(t) {
            return function (a) {
              return (function (t) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; u; )
                  try {
                    if (
                      ((r = 1),
                      o &&
                        (i =
                          2 & t[0]
                            ? o.return
                            : t[0]
                            ? o.throw || ((i = o.return) && i.call(o), 0)
                            : o.next) &&
                        !(i = i.call(o, t[1])).done)
                    )
                      return i;
                    switch (((o = 0), i && (t = [2 & t[0], i.value]), t[0])) {
                      case 0:
                      case 1:
                        i = t;
                        break;
                      case 4:
                        return u.label++, { value: t[1], done: !1 };
                      case 5:
                        u.label++, (o = t[1]), (t = [0]);
                        continue;
                      case 7:
                        (t = u.ops.pop()), u.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = u.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== t[0] && 2 !== t[0]))
                        ) {
                          u = 0;
                          continue;
                        }
                        if (
                          3 === t[0] &&
                          (!i || (t[1] > i[0] && t[1] < i[3]))
                        ) {
                          u.label = t[1];
                          break;
                        }
                        if (6 === t[0] && u.label < i[1]) {
                          (u.label = i[1]), (i = t);
                          break;
                        }
                        if (i && u.label < i[2]) {
                          (u.label = i[2]), u.ops.push(t);
                          break;
                        }
                        i[2] && u.ops.pop(), u.trys.pop();
                        continue;
                    }
                    t = n.call(e, u);
                  } catch (e) {
                    (t = [6, e]), (o = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & t[0]) throw t[1];
                return { value: t[0] ? t[1] : void 0, done: !0 };
              })([t, a]);
            };
          }
          var r,
            o,
            i,
            a,
            u = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: t(0), throw: t(1), return: t(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
        },
        u = function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Protection = void 0);
      var s = t("G3mm"),
        c = t("W9DM"),
        l = t("sBzF"),
        p = t("LDrR"),
        f = t("ckl+"),
        d = t("ssro"),
        h = t("uT+l"),
        v = t("FQMc"),
        m = t("jR5A"),
        y = t("XVVq"),
        g = t("yQkV"),
        _ = t("jzmo"),
        b = t("dB+e"),
        R = t("xPuB"),
        w = t("/eOC"),
        C = t("Tb1B"),
        E = t("M/j+"),
        x = t("jbuc"),
        P = t("T4bI"),
        O = t("2G8J"),
        k = t("QpTe"),
        T = u(t("8aYc")),
        A = t("m7yq"),
        S = function (e, n) {
          (this.eventName = e), (this.handler = n);
        },
        I = (function () {
          function e() {}
          return (
            (e.callbacks = []),
            (e.render = function (n) {
              (e.fallbackStatusFromAdapter = n.status),
                e.configure(
                  new s.Options(
                    n.storeDomain,
                    n.token,
                    n.subtotal,
                    n.currency,
                    n.environment,
                    n.status,
                    n.theme,
                    n.themeUrl,
                    n.merchantId,
                    n.theming,
                    n.cartRef,
                    n.cartItems
                  )
                );
            }),
            (e.create = function (n) {
              e.render(n);
            }),
            (e.sampleConfigure = function () {
              e.configure(
                new s.Options(
                  "route-rafael-demo-store.myshopify.com",
                  "",
                  "4087.32",
                  "USD",
                  d.Environment.Stage,
                  void 0,
                  void 0,
                  "http://d1cwup7r903a1d.cloudfront.net/route-protection-widget/route-protect-widget-themes/route-protection-widget-standard/index.html",
                  "merch_123456789012345"
                )
              );
            }),
            (e.isValid = function () {
              var n, t, r;
              return !!(
                (null === (n = e.options.merchantId) || void 0 === n
                  ? void 0
                  : n.startsWith("merch_")) &&
                (null ===
                  (r =
                    null === (t = e.options) || void 0 === t
                      ? void 0
                      : t.merchantId) || void 0 === r
                  ? void 0
                  : r.length) > 7
              );
            }),
            (e.getWidgetLocation = function () {
              return P.isCheckoutPage() ? "checkout" : "cart";
            }),
            (e.getWidgetDomain = function () {
              return e.options.storeDomain.includes("myshopify")
                ? "Shopify"
                : "Unknown";
            }),
            (e.toggle = function () {
              e.notify(l.StatusChangeEventName, {
                from: e.status,
                to: (e.status =
                  e.status === h.Status.Active
                    ? h.Status.Inactive
                    : h.Status.Active),
              }),
                e.trackEvent(R.EventType.StatusChange, {
                  toggle_state: 1 === e.status,
                });
            }),
            (e.getWidgetVariant = function () {
              var n;
              if (
                (null === (n = e.options) || void 0 === n
                  ? void 0
                  : n.merchantId) &&
                e.isValid()
              ) {
                var t = e.options.merchantId;
                return A.legacylist.includes(t) ||
                  A.greenMerchantblocklist.includes(t)
                  ? k.WidgetVariantType.LEGACY
                  : k.WidgetVariantType.DEFAULT;
              }
            }),
            (e.toggleModal = function () {
              e.notify(l.ModalOpenEventName, {
                from: e.modal,
                to: (e.modal =
                  e.modal === v.Modal.Active
                    ? v.Modal.Inactive
                    : v.Modal.Active),
              }),
                e.modal === v.Modal.Active &&
                  e.trackEvent(R.EventType.ModalActivate, {
                    protect_enabled: e.status === h.Status.Active,
                  });
            }),
            (e.configure = function (n, t, r) {
              var o, i;
              void 0 === t && (t = new p.ThemeBasedRenderingEngine()),
                void 0 === r && (r = new f.MerchantRepository()),
                (e.options = n),
                (e.renderingEngine = t),
                (e.merchantRepository = r),
                (e.analyticsConnector = new b.AnalyticsConnector({
                  environment:
                    null === (o = e.options) || void 0 === o
                      ? void 0
                      : o.environment,
                })),
                (e.assetManagementConnector = new O.AssetManagementConnector()),
                e.analyticsConnector.sessionStart(),
                e.handleOptions(),
                e.notify(l.LoadEventName, {
                  coverage: e.options.coverage,
                  status: e.status,
                  quote: e.quote,
                }),
                (
                  null === (i = e.options) || void 0 === i
                    ? void 0
                    : i.merchantId
                )
                  ? e.isValid()
                    ? e.trackBulkEvents(R.EventType.Load, {
                        protect_enabled: e.status === h.Status.Active,
                      })
                    : e.trackBulkEvents(R.EventType.NoMerchantIDFound, {
                        err: "invalid merchant id",
                      })
                  : e.trackBulkEvents(R.EventType.NoMerchantIDFound, {
                      err: "no merchant id",
                    });
            }),
            (e.on = function (n, t) {
              return e.callbacks.push(new S(n, t)), e;
            }),
            (e.forceUpdateQuote = function (n, t) {
              var i, a, u, s, c;
              void 0 === t && (t = !1),
                r(
                  e.quote,
                  o(o({}, e.quote), {
                    premium: o(
                      o(
                        {},
                        null === (i = null == e ? void 0 : e.quote) ||
                          void 0 === i
                          ? void 0
                          : i.premium
                      ),
                      { amount: n }
                    ),
                  })
                ),
                t
                  ? e.notify(l.GetQuoteEventName, { quote: e.quote })
                  : y.ProtectionWidgetTheme.setQuote({
                      insurancePrice:
                        null ===
                          (u =
                            null === (a = null == e ? void 0 : e.quote) ||
                            void 0 === a
                              ? void 0
                              : a.premium) || void 0 === u
                          ? void 0
                          : u.amount,
                      currency:
                        null ===
                          (c =
                            null === (s = null == e ? void 0 : e.quote) ||
                            void 0 === s
                              ? void 0
                              : s.premium) || void 0 === c
                          ? void 0
                          : c.currency,
                    });
            }),
            (e.handleRendered = function (n, t) {
              var r, o, i, a;
              void 0 === n && (n = !0),
                void 0 === t && (t = R.EventType.RenderWidget);
              var u = {
                rendered: n,
                protect_enabled: e.status === h.Status.Active,
                premium_amount_rendered: w.prettifyCurrency(
                  null ===
                    (o =
                      null === (r = e.quote) || void 0 === r
                        ? void 0
                        : r.premium) || void 0 === o
                    ? void 0
                    : o.amount,
                  null ===
                    (a =
                      null === (i = e.quote) || void 0 === i
                        ? void 0
                        : i.premium) || void 0 === a
                    ? void 0
                    : a.currency
                ),
                theme: "Lightning Bolt",
                is_visible: C.isInViewport(
                  document.querySelector(".route-div")
                ),
              };
              t == R.EventType.RenderWidget && e.notify(l.RenderEventName, u),
                e.trackBulkEvents(t, u);
            }),
            (e.trackBannerEvent = function (n, t) {
              var r,
                o = {
                  rendered: !0,
                  protect_enabled: e.status === h.Status.Active,
                  cart_subtotal: n.amount,
                  banner_currency: n.currency,
                  cart_currency:
                    null === (r = e.options) || void 0 === r
                      ? void 0
                      : r.currency,
                  threshold_amount: n.thresholdAmount,
                  banner_offering: n.offering,
                };
              e.trackBulkEvents(t, o);
            }),
            (e.hide = function () {
              y.ProtectionWidgetTheme.hide();
            }),
            (e.show = function () {
              y.ProtectionWidgetTheme.show();
            }),
            (e.createQuote = function (n, t, r, o) {
              e.merchantRepository
                .createQuote(
                  e.options.merchantId,
                  n,
                  t,
                  r,
                  o,
                  e.options.environment
                )
                .then(function (i) {
                  var a, u, s, c, p;
                  e.notify(l.CreateQuoteEventName, { quote: i });
                  var f = {
                    cart_ref: n,
                    cart_items: JSON.stringify(t),
                    cart_subtotal: r,
                    cart_currency: o,
                    quote_id: i.id,
                    protect_type:
                      null ===
                        (a = null == i ? void 0 : i.payment_responsible) ||
                      void 0 === a
                        ? void 0
                        : a.type,
                    protect_toggle_state:
                      null ===
                        (u = null == i ? void 0 : i.payment_responsible) ||
                      void 0 === u
                        ? void 0
                        : u.ToggleState,
                    rate:
                      null ===
                        (p =
                          null ===
                            (c =
                              null === (s = window.__Route) || void 0 === s
                                ? void 0
                                : s.backendExchangeRate) || void 0 === c
                            ? void 0
                            : c.rate) || void 0 === p
                        ? void 0
                        : p.value,
                  };
                  e.trackBulkEvents(R.EventType.CalculateQuote, f),
                    x.getCookie(e.analyticsConnector.cookies.cartCreated) ||
                      (x.setCookie(
                        e.analyticsConnector.cookies.cartCreated,
                        x.generateUUID()
                      ),
                      e.trackBulkEvents(R.EventType.CartCreated, f));
                });
            }),
            (e.refresh = function () {
              e.unmountWidget(), e.handleOptions();
            }),
            (e.identify = function (n, t) {
              var r, o;
              void 0 === t && (t = {}),
                (null === (r = e.analyticsConnector) || void 0 === r
                  ? void 0
                  : r.hasCartCreated()) &&
                  e.trackBulkEvents(R.EventType.CheckoutComplete, t),
                (null === (o = e.analyticsConnector) || void 0 === o
                  ? void 0
                  : o.hasSessionCreated()) &&
                  e.analyticsConnector.sessionEnd(n, t);
            }),
            (e.getQuote = function (n, t, r, o, i, a, u) {
              e.merchantRepository
                .getQuote(n, t, r, o, i, a)
                .then(function (n) {
                  return (e.quote = n), u && u(n), n;
                });
            }),
            (e.trackEvent = function (n, t, r) {
              void 0 === r && (r = R.CustomEventType.Other);
              var i = {
                event_name: n,
                custom_event_type: r,
                custom_attributes: o(o({}, t), {
                  merchant_id: e.options.merchantId,
                  store_domain: e.options.storeDomain,
                  widget_location: e.getWidgetLocation(),
                  platform: e.getWidgetDomain(),
                  cart_id: e.options.cartRef,
                  created_on: E.getCurrentTimestamp(),
                }),
              };
              e.analyticsConnector.trackEvent(i);
            }),
            (e.trackBulkEvents = function (n, t, r) {
              void 0 === r && (r = R.CustomEventType.Other);
              var i = {
                event_name: n,
                custom_event_type: r,
                custom_attributes: o(o({}, t), {
                  merchant_id: e.options.merchantId,
                  store_domain: e.options.storeDomain,
                  widget_location: e.getWidgetLocation(),
                  platform: e.getWidgetDomain(),
                  cart_id: e.options.cartRef,
                  created_on: E.getCurrentTimestamp(),
                }),
              };
              e.analyticsConnector.trackBulkEvent(i);
            }),
            (e.handleOptions = function () {
              e.handleQuote(), e.handleStatus(), e.handleBanner();
            }),
            (e.handleBanner = function () {
              e.renderBanner();
            }),
            (e.handleStatus = function () {
              switch (
                null == e.options.coverage
                  ? e.fallbackStatusFromAdapter
                  : e.options.coverage
              ) {
                case c.Coverage.None:
                case c.Coverage.InactiveByDefault:
                  e.status = h.Status.Inactive;
                  break;
                case c.Coverage.ActiveByDefault:
                case c.Coverage.Full:
                  e.status = h.Status.Active;
              }
            }),
            (e.handleQuote = function () {
              switch (e.options.coverage) {
                case c.Coverage.None:
                  break;
                case c.Coverage.ActiveByDefault:
                case c.Coverage.InactiveByDefault:
                case c.Coverage.Full:
                default:
                  e.getQuote(
                    m.extractDomain(e.options.storeDomain),
                    e.options.token,
                    e.options.subTotal,
                    e.options.currency,
                    e.options.environment,
                    e.options.merchantId,
                    function (n) {
                      var t, r, o, i, a, u;
                      switch (
                        null === (t = n.paymentResponsible) || void 0 === t
                          ? void 0
                          : t.toggleState
                      ) {
                        case "checked":
                          e.status = h.Status.Active;
                          break;
                        case "unchecked":
                        default:
                          e.status = h.Status.Inactive;
                      }
                      e.handleStatus(),
                        e.renderWidget(),
                        n &&
                          (e.notify(l.GetQuoteEventName, { quote: n }),
                          (null === (r = e.options) || void 0 === r
                            ? void 0
                            : r.merchantId) &&
                            e.trackBulkEvents(R.EventType.GetQuote, {
                              premium_amount: w.prettifyCurrency(
                                null === (o = n.premium) || void 0 === o
                                  ? void 0
                                  : o.amount,
                                null === (i = n.premium) || void 0 === i
                                  ? void 0
                                  : i.currency
                              ),
                              protect_type:
                                null === (a = n.paymentResponsible) ||
                                void 0 === a
                                  ? void 0
                                  : a.type,
                              protect_enabled_default:
                                "checked" ===
                                (null === (u = n.paymentResponsible) ||
                                void 0 === u
                                  ? void 0
                                  : u.toggleState),
                              protect_enabled: e.status === h.Status.Active,
                            }),
                          e.options.cartItems &&
                            e.options.cartRef &&
                            e.createQuote(
                              e.options.cartRef,
                              e.options.cartItems,
                              e.options.subTotal,
                              e.options.currency
                            ));
                    }
                  );
              }
            }),
            (e.notify = function (n, t) {
              e.callbacks.forEach(function (e) {
                ("*" !== e.eventName && e.eventName != n) || e.handler(t);
              });
            }),
            (e.renderWidget = function () {
              return i(void 0, void 0, void 0, function () {
                var n, t, r, o, i;
                return a(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        e.unmountWidget(),
                        (null === (i = e.options) || void 0 === i
                          ? void 0
                          : i.merchantId) && e.isValid()
                          ? [
                              4,
                              e.assetManagementConnector.getReleasedEnabledWidget(
                                e.options.environment,
                                e.options.merchantId
                              ),
                            ]
                          : [2]
                      );
                    case 1:
                      for (
                        n = a.sent(),
                          t = {
                            quote: e.quote,
                            status: e.status === h.Status.Active,
                            themeUrl: e.getThemeUrl(n),
                            mode: e.getThemeMode(n),
                            alignment: e.getThemeAlignment(n),
                            variant: e.getWidgetVariant(),
                          },
                          r = document.getElementsByClassName("route-div"),
                          e.renderingEngine.renderWidgetTheme(t.themeUrl),
                          o = 0;
                        o < r.length;
                        o++
                      )
                        e.renderingEngine.renderWidget(t, r[o]);
                      return [2];
                  }
                });
              });
            }),
            (e.renderBanner = function (n) {
              return (
                void 0 === n && (n = null),
                i(void 0, void 0, void 0, function () {
                  var t, r, o, i, u, c, l, f, d, h, v;
                  return a(this, function (a) {
                    switch (a.label) {
                      case 0:
                        return (
                          n &&
                            ((e.options = new s.Options(
                              n.storeDomain,
                              null === (i = e.options) || void 0 === i
                                ? void 0
                                : i.token,
                              n.subtotal,
                              n.currency,
                              n.environment,
                              null === (u = e.options) || void 0 === u
                                ? void 0
                                : u.coverage,
                              null === (c = e.options) || void 0 === c
                                ? void 0
                                : c.theme,
                              null === (l = e.options) || void 0 === l
                                ? void 0
                                : l.themeUrl,
                              n.merchantId,
                              null === (f = e.options) || void 0 === f
                                ? void 0
                                : f.theming,
                              null === (d = e.options) || void 0 === d
                                ? void 0
                                : d.cartRef,
                              null === (h = e.options) || void 0 === h
                                ? void 0
                                : h.cartItems
                            )),
                            (e.renderingEngine =
                              new p.ThemeBasedRenderingEngine()),
                            (e.assetManagementConnector =
                              new O.AssetManagementConnector()),
                            (e.analyticsConnector = new b.AnalyticsConnector({
                              environment:
                                null === (v = e.options) || void 0 === v
                                  ? void 0
                                  : v.environment,
                            }))),
                          e.unmountWidget("protect-banner-theme"),
                          !e.options.merchantId || P.isCheckoutPage()
                            ? [2]
                            : [
                                4,
                                e.assetManagementConnector.getReleasedEnabledBanner(
                                  e.options.environment,
                                  e.options.merchantId
                                ),
                              ]
                        );
                      case 1:
                        return (t = a.sent())
                          ? ((r = e.getBannerThemeUrl()),
                            e.renderingEngine.renderWidgetTheme(
                              r,
                              "protect-banner-theme"
                            ),
                            (o = {
                              textColor: t.font_color,
                              backgroundColor: t.background_color,
                              thresholdAmount: t.threshold_amount,
                              currency: t.currency,
                              sticky: t.sticky,
                              hideOnScroll: t.hide_on_scroll,
                              offering: t.offering,
                              position: t.location,
                              closable: t.closable,
                              amount: parseFloat(e.options.subTotal) || 0,
                              fontSize: t.font_size,
                              fontFamily: t.font_family,
                            }),
                            e.renderingEngine.renderBanner(o, document.body),
                            [2])
                          : [2];
                    }
                  });
                })
              );
            }),
            (e.getThemeUrl = function (n) {
              var t;
              void 0 === n && (n = null);
              var r =
                  e.options.environment === d.Environment.Stage
                    ? g.routeLightningWidgetURLStaging
                    : g.routeLightningWidgetURL,
                o =
                  e.options.environment === d.Environment.Stage
                    ? g.routeWidgetLegacyURLStaging
                    : g.routeWidgetLegacyURL;
              return e.options.themeUrl
                ? T.default.isNotEmptyOrBlank(e.options.themeUrl) &&
                  -1 !== e.options.themeUrl.indexOf(".js")
                  ? e.options.themeUrl
                  : r
                : void 0 !==
                    (null === (t = null == n ? void 0 : n.widget_version) ||
                    void 0 === t
                      ? void 0
                      : t.theme_url) &&
                  T.default.isNotEmptyOrBlank(n.widget_version) &&
                  T.default.isNotEmptyOrBlank(n.widget_version.theme_url) &&
                  -1 !== n.widget_version.theme_url.indexOf(".js")
                ? n.widget_version.theme_url
                : void 0 !== (null == n ? void 0 : n.theme_url) &&
                  T.default.isNotEmptyOrBlank(n.theme_url) &&
                  T.default.isNotEmptyOrBlank(n.theme_url) &&
                  -1 !== n.theme_url.indexOf(".js")
                ? n.theme_url
                : _.blocklist.includes(e.options.storeDomain)
                ? o
                : r;
            }),
            (e.getBannerThemeUrl = function () {
              return e.options.environment === d.Environment.Stage
                ? g.routeBannerURLStaging
                : g.routeBannerURL;
            }),
            (e.getThemeMode = function (n) {
              var t, r, o, i, a, u;
              void 0 === n && (n = null);
              var s = ["dark", "light"];
              return void 0 !==
                (null ===
                  (r =
                    null === (t = e.options) || void 0 === t
                      ? void 0
                      : t.theming) || void 0 === r
                  ? void 0
                  : r.mode) &&
                T.default.isNotEmptyOrBlank(
                  null ===
                    (i =
                      null === (o = e.options) || void 0 === o
                        ? void 0
                        : o.theming) || void 0 === i
                    ? void 0
                    : i.mode
                ) &&
                s.includes(
                  null ===
                    (u =
                      null === (a = e.options) || void 0 === a
                        ? void 0
                        : a.theming) || void 0 === u
                    ? void 0
                    : u.mode
                )
                ? e.options.theming.mode
                : void 0 !== (null == n ? void 0 : n.mode) &&
                  T.default.isNotEmptyOrBlank(n.mode) &&
                  s.includes(n.mode)
                ? n.mode
                : k.WidgetThemeType.WHITE;
            }),
            (e.getThemeAlignment = function (n) {
              var t, r, o, i, a, u;
              void 0 === n && (n = null);
              var s = ["left", "center", "right"];
              return void 0 !==
                (null ===
                  (r =
                    null === (t = e.options) || void 0 === t
                      ? void 0
                      : t.theming) || void 0 === r
                  ? void 0
                  : r.alignment) &&
                T.default.isNotEmptyOrBlank(
                  null ===
                    (i =
                      null === (o = e.options) || void 0 === o
                        ? void 0
                        : o.theming) || void 0 === i
                    ? void 0
                    : i.alignment
                ) &&
                s.includes(
                  null ===
                    (u =
                      null === (a = e.options) || void 0 === a
                        ? void 0
                        : a.theming) || void 0 === u
                    ? void 0
                    : u.alignment
                )
                ? e.options.theming.alignment
                : void 0 !== (null == n ? void 0 : n.alignment) &&
                  T.default.isNotEmptyOrBlank(n.alignment) &&
                  s.includes(n.alignment)
                ? n.alignment
                : k.WidgetAlignmentType.RIGHT;
            }),
            (e.unmountWidget = function (n) {
              void 0 === n && (n = "route-div");
              for (
                var t = document.getElementsByClassName(n), r = 0;
                r < t.length;
                r++
              )
                e.renderingEngine.removeWidget(t[r]);
            }),
            e
          );
        })();
      n.Protection = I;
    },
    "/eOC": function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.roundNumber = n.prettifyCurrency = void 0),
        (n.prettifyCurrency = function (e, n) {
          return (
            void 0 === e && (e = 0),
            void 0 === n && (n = "USD"),
            new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: n,
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(e)
          );
        }),
        (n.roundNumber = function (e, n) {
          void 0 === n && (n = 2);
          var t = Math.pow(10, n);
          return "" + (Math.round(Number(e) * t) / t).toFixed(n);
        });
    },
    "2G8J": function (e, n, t) {
      "use strict";
      var r = function (e, n, t, r) {
          return new (t || (t = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? o(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(a, u);
            }
            s((r = r.apply(e, n || [])).next());
          });
        },
        o = function (e, n) {
          function t(t) {
            return function (a) {
              return (function (t) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; u; )
                  try {
                    if (
                      ((r = 1),
                      o &&
                        (i =
                          2 & t[0]
                            ? o.return
                            : t[0]
                            ? o.throw || ((i = o.return) && i.call(o), 0)
                            : o.next) &&
                        !(i = i.call(o, t[1])).done)
                    )
                      return i;
                    switch (((o = 0), i && (t = [2 & t[0], i.value]), t[0])) {
                      case 0:
                      case 1:
                        i = t;
                        break;
                      case 4:
                        return u.label++, { value: t[1], done: !1 };
                      case 5:
                        u.label++, (o = t[1]), (t = [0]);
                        continue;
                      case 7:
                        (t = u.ops.pop()), u.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = u.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== t[0] && 2 !== t[0]))
                        ) {
                          u = 0;
                          continue;
                        }
                        if (
                          3 === t[0] &&
                          (!i || (t[1] > i[0] && t[1] < i[3]))
                        ) {
                          u.label = t[1];
                          break;
                        }
                        if (6 === t[0] && u.label < i[1]) {
                          (u.label = i[1]), (i = t);
                          break;
                        }
                        if (i && u.label < i[2]) {
                          (u.label = i[2]), u.ops.push(t);
                          break;
                        }
                        i[2] && u.ops.pop(), u.trys.pop();
                        continue;
                    }
                    t = n.call(e, u);
                  } catch (e) {
                    (t = [6, e]), (o = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & t[0]) throw t[1];
                return { value: t[0] ? t[1] : void 0, done: !0 };
              })([t, a]);
            };
          }
          var r,
            o,
            i,
            a,
            u = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: t(0), throw: t(1), return: t(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
        };
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.AssetManagementConnector = void 0);
      var i = t("5N7G"),
        a = t("QJQO");
      n.AssetManagementConnector = function () {
        var e = this;
        (this.assetSessionKey = "_route_protect_assets"),
          (this.getReleasedEnabledBanner = function (n, t) {
            return r(e, void 0, void 0, function () {
              var e;
              return o(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.getReleasedEnabledAsset(n, t)];
                  case 1:
                    return [
                      2,
                      null == (e = r.sent())
                        ? void 0
                        : e.banners.find(function (e) {
                            return "released" == e.status && 1 == e.enabled;
                          }),
                    ];
                }
              });
            });
          }),
          (this.getReleasedEnabledWidget = function (n, t) {
            return r(e, void 0, void 0, function () {
              var e;
              return o(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.getReleasedEnabledAsset(n, t)];
                  case 1:
                    return [
                      2,
                      null == (e = r.sent())
                        ? void 0
                        : e.widgets.find(function (e) {
                            return "released" == e.status && 1 == e.active;
                          }),
                    ];
                }
              });
            });
          }),
          (this.getReleasedEnabledAsset = function (n, t) {
            return r(e, void 0, void 0, function () {
              var e;
              return o(this, function (r) {
                switch (r.label) {
                  case 0:
                    return null !==
                      (e = a.SessionStorage.getItem(this.assetSessionKey))
                      ? [3, 2]
                      : [
                          4,
                          this.assetManagementRepository.getReleasedEnabledAsset(
                            n,
                            t
                          ),
                        ];
                  case 1:
                    (e = r.sent()),
                      a.SessionStorage.setItem(this.assetSessionKey, e, 10),
                      (r.label = 2);
                  case 2:
                    return [2, e];
                }
              });
            });
          }),
          (this.assetManagementRepository = new i.AssetManagementRepository());
      };
    },
    "2KG9": function (e, n, t) {
      "use strict";
      var r = t("OmE2");
      e.exports = function (e, n, t, o, i) {
        var a = new Error(e);
        return r(a, n, t, o, i);
      };
    },
    "4OlW": function (e, n, t) {
      "use strict";
      var r = t("ovh1");
      e.exports = function (e, n, t) {
        return (
          r.forEach(t, function (t) {
            e = t(e, n);
          }),
          e
        );
      };
    },
    "5+HP": function (e, n, t) {
      "use strict";
      function r(e) {
        return Boolean(e && void 0 !== e.length);
      }
      function o() {}
      function i(e) {
        if (!(this instanceof i))
          throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        (this._state = 0),
          (this._handled = !1),
          (this._value = void 0),
          (this._deferreds = []),
          p(e, this);
      }
      function a(e, n) {
        for (; 3 === e._state; ) e = e._value;
        0 !== e._state
          ? ((e._handled = !0),
            i._immediateFn(function () {
              var t = 1 === e._state ? n.onFulfilled : n.onRejected;
              if (null !== t) {
                var r;
                try {
                  r = t(e._value);
                } catch (e) {
                  return void s(n.promise, e);
                }
                u(n.promise, r);
              } else (1 === e._state ? u : s)(n.promise, e._value);
            }))
          : e._deferreds.push(n);
      }
      function u(e, n) {
        try {
          if (n === e)
            throw new TypeError("A promise cannot be resolved with itself.");
          if (n && ("object" == typeof n || "function" == typeof n)) {
            var t = n.then;
            if (n instanceof i)
              return (e._state = 3), (e._value = n), void c(e);
            if ("function" == typeof t)
              return void p(
                ((r = t),
                (o = n),
                function () {
                  r.apply(o, arguments);
                }),
                e
              );
          }
          (e._state = 1), (e._value = n), c(e);
        } catch (n) {
          s(e, n);
        }
        var r, o;
      }
      function s(e, n) {
        (e._state = 2), (e._value = n), c(e);
      }
      function c(e) {
        2 === e._state &&
          0 === e._deferreds.length &&
          i._immediateFn(function () {
            e._handled || i._unhandledRejectionFn(e._value);
          });
        for (var n = 0, t = e._deferreds.length; n < t; n++)
          a(e, e._deferreds[n]);
        e._deferreds = null;
      }
      function l(e, n, t) {
        (this.onFulfilled = "function" == typeof e ? e : null),
          (this.onRejected = "function" == typeof n ? n : null),
          (this.promise = t);
      }
      function p(e, n) {
        var t = !1;
        try {
          e(
            function (e) {
              t || ((t = !0), u(n, e));
            },
            function (e) {
              t || ((t = !0), s(n, e));
            }
          );
        } catch (e) {
          if (t) return;
          (t = !0), s(n, e);
        }
      }
      var f = function (e) {
        return e && e.__esModule ? e : { default: e };
      };
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = f(t("Z3s7")),
        h = f(t("AIuu")),
        v = setTimeout;
      (i.prototype.catch = function (e) {
        return this.then(null, e);
      }),
        (i.prototype.then = function (e, n) {
          var t = new this.constructor(o);
          return a(this, new l(e, n, t)), t;
        }),
        (i.prototype.finally = d.default),
        (i.all = function (e) {
          return new i(function (n, t) {
            function o(e, r) {
              try {
                if (r && ("object" == typeof r || "function" == typeof r)) {
                  var u = r.then;
                  if ("function" == typeof u)
                    return void u.call(
                      r,
                      function (n) {
                        o(e, n);
                      },
                      t
                    );
                }
                (i[e] = r), 0 == --a && n(i);
              } catch (e) {
                t(e);
              }
            }
            if (!r(e)) return t(new TypeError("Promise.all accepts an array"));
            var i = Array.prototype.slice.call(e);
            if (0 === i.length) return n([]);
            for (var a = i.length, u = 0; u < i.length; u++) o(u, i[u]);
          });
        }),
        (i.allSettled = h.default),
        (i.resolve = function (e) {
          return e && "object" == typeof e && e.constructor === i
            ? e
            : new i(function (n) {
                n(e);
              });
        }),
        (i.reject = function (e) {
          return new i(function (n, t) {
            t(e);
          });
        }),
        (i.race = function (e) {
          return new i(function (n, t) {
            if (!r(e)) return t(new TypeError("Promise.race accepts an array"));
            for (var o = 0, a = e.length; o < a; o++)
              i.resolve(e[o]).then(n, t);
          });
        }),
        (i._immediateFn =
          ("function" == typeof setImmediate &&
            function (e) {
              setImmediate(e);
            }) ||
          function (e) {
            v(e, 0);
          }),
        (i._unhandledRejectionFn = function (e) {
          "undefined" != typeof console &&
            console &&
            console.warn("Possible Unhandled Promise Rejection:", e);
        }),
        (n.default = i);
    },
    "5N7G": function (e, n, t) {
      "use strict";
      var r = function (e, n, t, r) {
          return new (t || (t = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? o(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(a, u);
            }
            s((r = r.apply(e, n || [])).next());
          });
        },
        o = function (e, n) {
          function t(t) {
            return function (a) {
              return (function (t) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; u; )
                  try {
                    if (
                      ((r = 1),
                      o &&
                        (i =
                          2 & t[0]
                            ? o.return
                            : t[0]
                            ? o.throw || ((i = o.return) && i.call(o), 0)
                            : o.next) &&
                        !(i = i.call(o, t[1])).done)
                    )
                      return i;
                    switch (((o = 0), i && (t = [2 & t[0], i.value]), t[0])) {
                      case 0:
                      case 1:
                        i = t;
                        break;
                      case 4:
                        return u.label++, { value: t[1], done: !1 };
                      case 5:
                        u.label++, (o = t[1]), (t = [0]);
                        continue;
                      case 7:
                        (t = u.ops.pop()), u.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = u.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== t[0] && 2 !== t[0]))
                        ) {
                          u = 0;
                          continue;
                        }
                        if (
                          3 === t[0] &&
                          (!i || (t[1] > i[0] && t[1] < i[3]))
                        ) {
                          u.label = t[1];
                          break;
                        }
                        if (6 === t[0] && u.label < i[1]) {
                          (u.label = i[1]), (i = t);
                          break;
                        }
                        if (i && u.label < i[2]) {
                          (u.label = i[2]), u.ops.push(t);
                          break;
                        }
                        i[2] && u.ops.pop(), u.trys.pop();
                        continue;
                    }
                    t = n.call(e, u);
                  } catch (e) {
                    (t = [6, e]), (o = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & t[0]) throw t[1];
                return { value: t[0] ? t[1] : void 0, done: !0 };
              })([t, a]);
            };
          }
          var r,
            o,
            i,
            a,
            u = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: t(0), throw: t(1), return: t(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
        };
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.AssetManagementRepository = void 0);
      var i = t("ssro"),
        a = t("uUrk"),
        u = t("y4F4");
      n.AssetManagementRepository = function () {
        var e = this;
        (this.getBaseURL = function (e) {
          return e == i.Environment.Production
            ? "https://api.route.com"
            : "https://api-stage.route.com";
        }),
          (this.getS3BaseUrl = function (e) {
            return e == i.Environment.Production
              ? "https://ddbmicszvqxcg.cloudfront.net"
              : e == i.Environment.Stage
              ? "https://d2ex76ilqascga.cloudfront.net"
              : "https://protect-assets.sandbox.route.com";
          }),
          (this.getAssets = function (n, t) {
            return r(e, void 0, void 0, function () {
              var e;
              return o(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      r.trys.push([0, 2, , 3]),
                      (e = this.getBaseURL(n)),
                      [
                        4,
                        a.getRequest(
                          e + "/v1/protect/merchants/" + t + "/assets"
                        ),
                      ]
                    );
                  case 1:
                    return [2, r.sent().data];
                  case 2:
                    return (
                      r.sent(),
                      console.log("Error getting assets for merchant " + t),
                      [2, []]
                    );
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (this.getAssetFromS3 = function (n, t) {
            return r(e, void 0, void 0, function () {
              var e;
              return o(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      r.trys.push([0, 2, , 3]),
                      (e = this.getS3BaseUrl(n)),
                      [
                        4,
                        a.getRequest(e + "/" + t + ".json", {
                          headers: { Accept: "application/json" },
                        }),
                      ]
                    );
                  case 1:
                    return [2, [r.sent().data]];
                  case 2:
                    return (
                      r.sent(),
                      console.log(
                        "Error getting assets for merchant from S3 " + t
                      ),
                      [2, []]
                    );
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (this.getReleasedEnabledAsset = function (n, t) {
            return r(e, void 0, void 0, function () {
              var e, r, i, a, s, c;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      o.trys.push([0, 2, , 3]),
                      (e = this.getAssets(n, t)),
                      (r = this.getAssetFromS3(n, t)),
                      (i = Promise.race([u.timeout(1e4), e])),
                      (a = Promise.race([u.timeout(3e3), r])),
                      [4, Promise.all([i, a])]
                    );
                  case 1:
                    return [
                      2,
                      ((s = o.sent())[0].length > 0 ? s[0] : s[1]).find(
                        function (e) {
                          return "released" == e.status && 1 == e.enabled;
                        }
                      ),
                    ];
                  case 2:
                    return (
                      (c = o.sent()),
                      console.log(
                        "Error getting assets for merchant " +
                          t +
                          " with error " +
                          c
                      ),
                      [3, 3]
                    );
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (this.getReleasedEnabledBanner = function (n, t) {
            return r(e, void 0, void 0, function () {
              var e;
              return o(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      r.trys.push([0, 2, , 3]),
                      [4, this.getReleasedEnabledAsset(n, t)]
                    );
                  case 1:
                    return [
                      2,
                      null == (e = r.sent())
                        ? void 0
                        : e.banners.find(function (e) {
                            return "released" == e.status && 1 == e.enabled;
                          }),
                    ];
                  case 2:
                    return (
                      r.sent(),
                      console.log("Error getting assets for merchant " + t),
                      [3, 3]
                    );
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (this.getReleasedEnabledWidget = function (n, t) {
            return r(e, void 0, void 0, function () {
              var e;
              return o(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      r.trys.push([0, 2, , 3]),
                      [4, this.getReleasedEnabledAsset(n, t)]
                    );
                  case 1:
                    return [
                      2,
                      null == (e = r.sent())
                        ? void 0
                        : e.widgets.find(function (e) {
                            return "released" == e.status && 1 == e.active;
                          }),
                    ];
                  case 2:
                    return (
                      r.sent(),
                      console.log("Error getting assets for merchant " + t),
                      [3, 3]
                    );
                  case 3:
                    return [2];
                }
              });
            });
          });
      };
    },
    "5QbJ": function (e) {
      "use strict";
      e.exports = function (e, n) {
        return function () {
          for (var t = new Array(arguments.length), r = 0; r < t.length; r++)
            t[r] = arguments[r];
          return e.apply(n, t);
        };
      };
    },
    "6s8r": function (e) {
      "use strict";
      e.exports = function (e) {
        return function (n) {
          return e.apply(null, n);
        };
      };
    },
    "71kK": function (e, n, t) {
      "use strict";
      var r = t("ovh1");
      e.exports = function (e, n) {
        r.forEach(e, function (t, r) {
          r !== n &&
            r.toUpperCase() === n.toUpperCase() &&
            ((e[n] = t), delete e[r]);
        });
      };
    },
    "8aYc": function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      n.default = {
        isNotEmptyOrBlank: function (e) {
          return !(
            null == e ||
            ("string" == typeof e &&
              e.hasOwnProperty("length") &&
              0 === e.length) ||
            (Array.isArray(e) && 0 === e.length) ||
            (e.constructor === Object && 0 === Object.keys(e).length)
          );
        },
        has: function e(n, t) {
          var r = t.split(".");
          return (
            !!n &&
            (r.length > 1
              ? e(n[r[0]], r.slice(1).join("."))
              : n.hasOwnProperty.call(n, t))
          );
        },
      };
    },
    AIuu: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = function (e) {
          return new this(function (n, t) {
            function r(e, t) {
              if (t && ("object" == typeof t || "function" == typeof t)) {
                var a = t.then;
                if ("function" == typeof a)
                  return void a.call(
                    t,
                    function (n) {
                      r(e, n);
                    },
                    function (t) {
                      (o[e] = { status: "rejected", reason: t }),
                        0 == --i && n(o);
                    }
                  );
              }
              (o[e] = { status: "fulfilled", value: t }), 0 == --i && n(o);
            }
            if (!e || void 0 === e.length)
              return t(
                new TypeError(
                  typeof e +
                    " " +
                    e +
                    " is not iterable(cannot read property Symbol(Symbol.iterator))"
                )
              );
            var o = Array.prototype.slice.call(e);
            if (0 === o.length) return n([]);
            for (var i = o.length, a = 0; a < o.length; a++) r(a, o[a]);
          });
        });
    },
    C4jd: function (e, n, t) {
      "use strict";
      var r = function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var n, t = 1, r = arguments.length; t < r; t++)
                for (var o in (n = arguments[t]))
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              return e;
            }).apply(this, arguments);
        },
        o = function (e, n, t, r) {
          return new (t || (t = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? o(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(a, u);
            }
            s((r = r.apply(e, n || [])).next());
          });
        },
        i = function (e, n) {
          function t(t) {
            return function (a) {
              return (function (t) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; u; )
                  try {
                    if (
                      ((r = 1),
                      o &&
                        (i =
                          2 & t[0]
                            ? o.return
                            : t[0]
                            ? o.throw || ((i = o.return) && i.call(o), 0)
                            : o.next) &&
                        !(i = i.call(o, t[1])).done)
                    )
                      return i;
                    switch (((o = 0), i && (t = [2 & t[0], i.value]), t[0])) {
                      case 0:
                      case 1:
                        i = t;
                        break;
                      case 4:
                        return u.label++, { value: t[1], done: !1 };
                      case 5:
                        u.label++, (o = t[1]), (t = [0]);
                        continue;
                      case 7:
                        (t = u.ops.pop()), u.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = u.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== t[0] && 2 !== t[0]))
                        ) {
                          u = 0;
                          continue;
                        }
                        if (
                          3 === t[0] &&
                          (!i || (t[1] > i[0] && t[1] < i[3]))
                        ) {
                          u.label = t[1];
                          break;
                        }
                        if (6 === t[0] && u.label < i[1]) {
                          (u.label = i[1]), (i = t);
                          break;
                        }
                        if (i && u.label < i[2]) {
                          (u.label = i[2]), u.ops.push(t);
                          break;
                        }
                        i[2] && u.ops.pop(), u.trys.pop();
                        continue;
                    }
                    t = n.call(e, u);
                  } catch (e) {
                    (t = [6, e]), (o = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & t[0]) throw t[1];
                return { value: t[0] ? t[1] : void 0, done: !0 };
              })([t, a]);
            };
          }
          var r,
            o,
            i,
            a,
            u = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: t(0), throw: t(1), return: t(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
        };
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.AnalyticsRepository = void 0);
      var a = t("ssro"),
        u = t("uUrk"),
        s = t("M/j+");
      n.AnalyticsRepository = function (e) {
        var n = this;
        (this.sessionStart = function (e, t) {
          return o(n, void 0, void 0, function () {
            var n, o, a, s;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  (n =
                    null == e
                      ? void 0
                      : e.replace(/[^0-9]/g, "").substring(0, 18)),
                    (o = {
                      application_info: r({}, this.getApplicationInfo()),
                      device_info: r({}, this.getDeviceInfo()),
                      user_attributes: {},
                      location: {},
                      user_identities: { other_id_2: e },
                      events: {
                        data: {
                          session_id: n,
                          session_uuid: e,
                          session_start_unixtime_ms: t,
                        },
                        event_type: "session_start",
                      },
                    }),
                    (i.label = 1);
                case 1:
                  return (
                    i.trys.push([1, 3, , 4]),
                    [
                      4,
                      u.postRequest(
                        this.getBaseURL() + "/v1/analytics/session_start",
                        o
                      ),
                    ]
                  );
                case 2:
                  return (a = i.sent().data), [2, Promise.resolve({ data: a })];
                case 3:
                  return (
                    (s = i.sent()),
                    console.log("Error creating the Session Start", s),
                    [3, 4]
                  );
                case 4:
                  return [2];
              }
            });
          });
        }),
          (this.sessionEnd = function (e, t, a, s) {
            return (
              void 0 === s && (s = {}),
              o(n, void 0, void 0, function () {
                var n, o, c, l, p;
                return i(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (n = new Date().getTime() - Number(a)),
                        (o =
                          null == e
                            ? void 0
                            : e.replace(/[^0-9]/g, "").substring(0, 18)),
                        (c = {
                          application_info: r({}, this.getApplicationInfo()),
                          device_info: r({}, this.getDeviceInfo()),
                          user_attributes: {
                            first_name: t.first_name,
                            last_name: t.last_name,
                            email: t.email,
                          },
                          location: {},
                          user_identities: { other_id_2: e, email: t.email },
                          events: {
                            data: {
                              session_id: o,
                              session_uuid: e,
                              session_duration_ms: n,
                              session_start_unixtime_ms: a,
                              custom_attributes: r({}, s),
                            },
                            event_type: "session_end",
                          },
                        }),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          u.postRequest(
                            this.getBaseURL() + "/v1/analytics/session_end",
                            c
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (l = i.sent().data), [2, Promise.resolve({ data: l })]
                      );
                    case 3:
                      return (
                        (p = i.sent()),
                        console.log("Error creating the Session End", p),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              })
            );
          }),
          (this.sendEvent = function (e, t) {
            return o(n, void 0, void 0, function () {
              var n, o, a;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    (n = {
                      application_info: r({}, this.getApplicationInfo()),
                      device_info: r({}, this.getDeviceInfo()),
                      user_attributes: {},
                      location: {},
                      user_identities: { other_id_2: t },
                      events: { data: r({}, e), event_type: "custom_event" },
                    }),
                      (i.label = 1);
                  case 1:
                    return (
                      i.trys.push([1, 3, , 4]),
                      [
                        4,
                        u.postRequest(
                          this.getBaseURL() + "/v1/analytics/events",
                          n
                        ),
                      ]
                    );
                  case 2:
                    return (
                      (o = i.sent().data), [2, Promise.resolve({ data: o })]
                    );
                  case 3:
                    return (
                      (a = i.sent()),
                      console.log("Error creating the Events", a),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (this.sendBulkEvents = function (e, t) {
            return o(n, void 0, void 0, function () {
              var n, o, a;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    (n = {
                      application_info: r({}, this.getApplicationInfo()),
                      device_info: r({}, this.getDeviceInfo()),
                      user_attributes: {},
                      location: {},
                      user_identities: { other_id_2: t },
                      events: e.map(function (e) {
                        return { data: r({}, e), event_type: "custom_event" };
                      }),
                    }),
                      (i.label = 1);
                  case 1:
                    return (
                      i.trys.push([1, 3, , 4]),
                      [
                        4,
                        u.postRequest(
                          this.getBaseURL() + "/v1/analytics/bulkevents",
                          n
                        ),
                      ]
                    );
                  case 2:
                    return (
                      (o = i.sent().data), [2, Promise.resolve({ data: o })]
                    );
                  case 3:
                    return (
                      (a = i.sent()),
                      console.log("Error creating the Bulk Events", a),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (this.getBaseURL = function () {
            return n.environment == a.Environment.Production ||
              "production" === n.environment
              ? "https://api.route.com"
              : "https://api-stage.route.com";
          }),
          (this.getApplicationInfo = function () {
            return {
              application_name: "Protect Core",
              application_version: "0.0.1",
            };
          }),
          (this.getDeviceInfo = function () {
            var e = s.browserInfo(),
              n = s.screenSizeInfo();
            return {
              brand: e.name,
              device: navigator.userAgent,
              os_version: e.os,
              screen_height: n.height,
              screen_width: n.width,
              locale_language: navigator.language,
              platform: "web",
            };
          }),
          (this.environment = e.environment);
      };
    },
    E02R: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    FQMc: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Modal = void 0),
        (function (e) {
          (e[(e.Inactive = 0)] = "Inactive"), (e[(e.Active = 1)] = "Active");
        })(n.Modal || (n.Modal = {}));
    },
    G3mm: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Options = void 0),
        (n.Options = function (e, n, t, r, o, i, a, u, s, c, l, p) {
          (this.storeDomain = e),
            (this.token = n),
            (this.coverage = i),
            (this.subTotal = t),
            (this.currency = r),
            (this.environment = o),
            (this.theme = a),
            (this.themeUrl = u),
            (this.merchantId = s),
            (this.theming = c),
            (this.cartRef = l),
            (this.cartItems = p);
        });
    },
    IccH: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }), t("wthT");
    },
    LDrR: function (e, n, t) {
      "use strict";
      var r = function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var n, t = 1, r = arguments.length; t < r; t++)
                for (var o in (n = arguments[t]))
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              return e;
            }).apply(this, arguments);
        },
        o = function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.ThemeBasedRenderingEngine = void 0);
      var i = t("hosL"),
        a = o(t("fxiE")),
        u = t("Xzrz");
      n.ThemeBasedRenderingEngine = function () {
        (this.renderWidget = function (e, n) {
          i.render(i.h(u.ProtectionWidget, r({}, e)), n);
        }),
          (this.renderBanner = function (e, n) {
            i.render(i.h(a.default, r({}, e)), n);
          }),
          (this.renderWidgetTheme = function (e, n) {
            if (
              (void 0 === n && (n = "protect-widget-theme"),
              0 === document.getElementsByClassName(n).length)
            ) {
              var t = document.createElement("script");
              (t.src = e),
                t.setAttribute("class", n),
                document.body.appendChild(t);
            }
          }),
          (this.removeWidget = function (e) {
            i.render(null, e);
          });
      };
    },
    "M/j+": function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.screenSizeInfo =
          n.browserInfo =
          n.getOS =
          n.getCurrentTimestamp =
            void 0),
        (n.getCurrentTimestamp = function () {
          var e;
          return window.performance &&
            (null ===
              (e =
                null === window || void 0 === window
                  ? void 0
                  : window.performance) || void 0 === e
              ? void 0
              : e.now) &&
            window.performance.timing &&
            window.performance.timing.navigationStart
            ? window.performance.now() +
                window.performance.timing.navigationStart
            : Date.now();
        }),
        (n.getOS = function () {
          var e = window.navigator.userAgent,
            n = window.navigator.platform,
            t = null;
          return (
            -1 !== ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(n)
              ? (t = "Mac OS")
              : -1 !== ["iPhone", "iPad", "iPod"].indexOf(n)
              ? (t = "iOS")
              : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(n)
              ? (t = "Windows")
              : /Android/.test(e)
              ? (t = "Android")
              : !t && /Linux/.test(n) && (t = "Linux"),
            t
          );
        }),
        (n.browserInfo = function () {
          var e,
            t,
            r = navigator.userAgent;
          return (
            (t = void 0),
            (e =
              r.match(/(android)\s([0-9\.]*)/i) ||
              r.match(
                /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
              ) ||
              []),
            /android/i.test(e[1])
              ? { name: "android", version: parseInt(e[2]) }
              : /trident/i.test(e[1])
              ? ((t = /\brv[ :]+(\d+)/g.exec(r) || []),
                { name: "ie", version: parseInt(t[1]) || "" })
              : "Chrome" === e[1] &&
                null !== (t = r.match(/\b(OPR|Edge)\/(\d+)/))
              ? { name: t[1].replace("OPR", "opera"), version: parseInt(t[2]) }
              : ((e = e[2]
                  ? [e[1], e[2]]
                  : [navigator.appName, navigator.appVersion, "-?"]),
                null !== (t = r.match(/version\/(\d+)/i)) &&
                  e.splice(1, 1, t[1]),
                {
                  name: e[0].toLowerCase(),
                  version: parseInt(e[1]),
                  os: n.getOS(),
                })
          );
        }),
        (n.screenSizeInfo = function () {
          var e = window,
            n = document,
            t = n.documentElement,
            r = n.getElementsByTagName("body")[0];
          return {
            width: e.innerWidth || t.clientWidth || r.clientWidth,
            height: e.innerHeight || t.clientHeight || r.clientHeight,
          };
        });
    },
    NS33: function (e, n, t) {
      "use strict";
      function r() {}
      function o() {}
      var i = t("E02R");
      (o.resetWarningCache = r),
        (e.exports = function () {
          function e(e, n, t, r, o, a) {
            if (a !== i) {
              var u = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((u.name = "Invariant Violation"), u);
            }
          }
          function n() {
            return e;
          }
          e.isRequired = e;
          var t = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: n,
            element: e,
            elementType: e,
            instanceOf: n,
            node: e,
            objectOf: n,
            oneOf: n,
            oneOfType: n,
            shape: n,
            exact: n,
            checkPropTypes: o,
            resetWarningCache: r,
          };
          return (t.PropTypes = t), t;
        });
    },
    OBDY: function (e) {
      "use strict";
      e.exports = function (e) {
        return "object" == typeof e && !0 === e.isAxiosError;
      };
    },
    OHXD: function (e, n, t) {
      "use strict";
      function r(e) {
        if ("function" != typeof e)
          throw new TypeError("executor must be a function.");
        var n;
        this.promise = new Promise(function (e) {
          n = e;
        });
        var t = this;
        e(function (e) {
          t.reason || ((t.reason = new o(e)), n(t.reason));
        });
      }
      var o = t("tImM");
      (r.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
        (r.source = function () {
          var e;
          return {
            token: new r(function (n) {
              e = n;
            }),
            cancel: e,
          };
        }),
        (e.exports = r);
    },
    OmE2: function (e) {
      "use strict";
      e.exports = function (e, n, t, r, o) {
        return (
          (e.config = n),
          t && (e.code = t),
          (e.request = r),
          (e.response = o),
          (e.isAxiosError = !0),
          (e.toJSON = function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
            };
          }),
          e
        );
      };
    },
    QJQO: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.SessionStorage = void 0);
      var t = (function () {
        function e() {}
        return (
          (e.getItem = function (e) {
            var n = window.sessionStorage.getItem(e);
            if (null !== n) {
              var t = JSON.parse(n);
              if (new Date(t.expirationDate) > new Date()) return t.value;
              window.sessionStorage.removeItem(e);
            }
            return null;
          }),
          (e.setItem = function (e, n, t) {
            void 0 === t && (t = 10);
            var r = {
              value: n,
              expirationDate: new Date(
                new Date().getTime() + 6e4 * t
              ).toISOString(),
            };
            window.sessionStorage.setItem(e, JSON.stringify(r));
          }),
          e
        );
      })();
      n.SessionStorage = t;
    },
    QRet: function (e, n, t) {
      "use strict";
      function r(e, n) {
        m.options.__h && m.options.__h(h, e, y || n), (y = 0);
        var t = h.__H || (h.__H = { __: [], __h: [] });
        return e >= t.__.length && t.__.push({}), t.__[e];
      }
      function o(e) {
        return (y = 1), i(f, e);
      }
      function i(e, n, t) {
        var o = r(d++, 2);
        return (
          (o.t = e),
          o.__c ||
            ((o.__c = h),
            (o.__ = [
              t ? t(n) : f(void 0, n),
              function (e) {
                var n = o.t(o.__[0], e);
                o.__[0] !== n && ((o.__ = [n, o.__[1]]), o.__c.setState({}));
              },
            ])),
          o.__
        );
      }
      function a(e, n) {
        var t = r(d++, 4);
        !m.options.__s &&
          p(t.__H, n) &&
          ((t.__ = e), (t.__H = n), h.__h.push(t));
      }
      function u(e, n) {
        var t = r(d++, 7);
        return p(t.__H, n) ? ((t.__H = n), (t.__h = e), (t.__ = e())) : t.__;
      }
      function s() {
        g.some(function (e) {
          if (e.__P)
            try {
              e.__H.__h.forEach(c), e.__H.__h.forEach(l), (e.__H.__h = []);
            } catch (n) {
              return (e.__H.__h = []), m.options.__e(n, e.__v), !0;
            }
        }),
          (g = []);
      }
      function c(e) {
        "function" == typeof e.u && e.u();
      }
      function l(e) {
        e.u = e.__();
      }
      function p(e, n) {
        return (
          !e ||
          n.some(function (n, t) {
            return n !== e[t];
          })
        );
      }
      function f(e, n) {
        return "function" == typeof n ? n(e) : n;
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.useErrorBoundary =
          n.useDebugValue =
          n.useContext =
          n.useCallback =
          n.useMemo =
          n.useImperativeHandle =
          n.useRef =
          n.useLayoutEffect =
          n.useEffect =
          n.useReducer =
          n.useState =
            void 0);
      var d,
        h,
        v,
        m = t("hosL"),
        y = 0,
        g = [],
        _ = m.options.__r,
        b = m.options.diffed,
        R = m.options.__c,
        w = m.options.unmount;
      (n.useState = o),
        (n.useReducer = i),
        (n.useEffect = function (e, n) {
          var t = r(d++, 3);
          !m.options.__s &&
            p(t.__H, n) &&
            ((t.__ = e), (t.__H = n), h.__H.__h.push(t));
        }),
        (n.useLayoutEffect = a),
        (n.useRef = function (e) {
          return (
            (y = 5),
            u(function () {
              return { current: e };
            }, [])
          );
        }),
        (n.useImperativeHandle = function (e, n, t) {
          (y = 6),
            a(
              function () {
                "function" == typeof e ? e(n()) : e && (e.current = n());
              },
              null == t ? t : t.concat(e)
            );
        }),
        (n.useMemo = u),
        (n.useCallback = function (e, n) {
          return (
            (y = 8),
            u(function () {
              return e;
            }, n)
          );
        }),
        (n.useContext = function (e) {
          var n = h.context[e.__c],
            t = r(d++, 9);
          return (
            (t.__c = e),
            n ? (null == t.__ && ((t.__ = !0), n.sub(h)), n.props.value) : e.__
          );
        }),
        (n.useDebugValue = function (e, n) {
          m.options.useDebugValue && m.options.useDebugValue(n ? n(e) : e);
        }),
        (n.useErrorBoundary = function (e) {
          var n = r(d++, 10),
            t = o();
          return (
            (n.__ = e),
            h.componentDidCatch ||
              (h.componentDidCatch = function (e) {
                n.__ && n.__(e), t[1](e);
              }),
            [
              t[0],
              function () {
                t[1](void 0);
              },
            ]
          );
        }),
        (m.options.__r = function (e) {
          _ && _(e), (d = 0);
          var n = (h = e.__c).__H;
          n && (n.__h.forEach(c), n.__h.forEach(l), (n.__h = []));
        }),
        (m.options.diffed = function (e) {
          b && b(e);
          var n = e.__c;
          n &&
            n.__H &&
            n.__H.__h.length &&
            ((1 !== g.push(n) && v === m.options.requestAnimationFrame) ||
              (
                (v = m.options.requestAnimationFrame) ||
                function (e) {
                  var n,
                    t = function () {
                      clearTimeout(r),
                        C && cancelAnimationFrame(n),
                        setTimeout(e);
                    },
                    r = setTimeout(t, 100);
                  C && (n = requestAnimationFrame(t));
                }
              )(s));
        }),
        (m.options.__c = function (e, n) {
          n.some(function (e) {
            try {
              e.__h.forEach(c),
                (e.__h = e.__h.filter(function (e) {
                  return !e.__ || l(e);
                }));
            } catch (t) {
              n.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (n = []),
                m.options.__e(t, e.__v);
            }
          }),
            R && R(e, n);
        }),
        (m.options.unmount = function (e) {
          w && w(e);
          var n = e.__c;
          if (n && n.__H)
            try {
              n.__H.__.forEach(c);
            } catch (e) {
              m.options.__e(e, n.__v);
            }
        });
      var C = "function" == typeof requestAnimationFrame;
    },
    QpTe: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.BannerOfferingType =
          n.BannerLocationType =
          n.AssetStatusType =
          n.WidgetVariantType =
          n.WidgetAlignmentType =
          n.WidgetThemeType =
          n.StatusType =
            void 0),
        (function (e) {
          (e.BETA = "beta"),
            (e.STABLE = "released"),
            (e.DEPRECATED = "deprecated");
        })(n.StatusType || (n.StatusType = {})),
        (function (e) {
          (e.DARK = "dark"), (e.WHITE = "light");
        })(n.WidgetThemeType || (n.WidgetThemeType = {})),
        (function (e) {
          (e.LEFT = "left"), (e.CENTER = "center"), (e.RIGHT = "right");
        })(n.WidgetAlignmentType || (n.WidgetAlignmentType = {})),
        (function (e) {
          (e.LEGACY = "legacy"), (e.DEFAULT = "default");
        })(n.WidgetVariantType || (n.WidgetVariantType = {})),
        (function (e) {
          (e.BETA = "beta"),
            (e.RELEASED = "released"),
            (e.DEPRECATED = "deprecated");
        })(n.AssetStatusType || (n.AssetStatusType = {})),
        (function (e) {
          (e.TOP = "top"), (e.BOTTOM = "bottom");
        })(n.BannerLocationType || (n.BannerLocationType = {})),
        (function (e) {
          (e.FreeShippingOverAmount = "FreeShippingOverAmount"),
            (e.FreeProtectionOverAmount = "FreeProtectionOverAmount"),
            (e.FreeShippingAndProtectionOverAmount =
              "FreeShippingAndProtectionOverAmount"),
            (e.FreeShippingAndProtection = "FreeShippingAndProtection"),
            (e.FreeShipping = "FreeShipping"),
            (e.FreeProtection = "FreeProtection");
        })(n.BannerOfferingType || (n.BannerOfferingType = {}));
    },
    Rzld: function (e) {
      "use strict";
      e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
      };
    },
    T4bI: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.isCheckoutPage = void 0),
        (n.isCheckoutPage = function () {
          return window.location.href.includes("/checkout");
        });
    },
    TDIH: function (e, n, t) {
      "use strict";
      function r(e) {
        var n = new a(e),
          t = i(a.prototype.request, n);
        return o.extend(t, a.prototype, n), o.extend(t, n), t;
      }
      var o = t("ovh1"),
        i = t("5QbJ"),
        a = t("uahg"),
        u = t("Zrjs"),
        s = r(t("bRtl"));
      (s.Axios = a),
        (s.create = function (e) {
          return r(u(s.defaults, e));
        }),
        (s.Cancel = t("tImM")),
        (s.CancelToken = t("OHXD")),
        (s.isCancel = t("e5jZ")),
        (s.all = function (e) {
          return Promise.all(e);
        }),
        (s.spread = t("6s8r")),
        (s.isAxiosError = t("OBDY")),
        (e.exports = s),
        (e.exports.default = s);
    },
    Tb1B: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.isInViewport = n.stripTags = void 0),
        (n.stripTags = function (e, n) {
          n = (
            ((n || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []
          ).join("");
          return e
            .replace(/<title.*>.*?<\/title>/gi, "")
            .replace(/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi, "")
            .replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, function (e, t) {
              return n.indexOf("<" + t.toLowerCase() + ">") > -1 ? "" : e;
            });
        }),
        (n.isInViewport = function (e) {
          if (!e) return !1;
          var n = null == e ? void 0 : e.getBoundingClientRect(),
            t = window.innerWidth,
            r = window.innerHeight,
            o = function (e, n) {
              if (document.elementFromPoint)
                return document.elementFromPoint(e, n);
            };
          return (
            !(n.right < 0 || n.bottom < 0 || n.left > t || n.top > r) &&
            (e.contains(o(n.left, n.top)) ||
              e.contains(o(n.right, n.top)) ||
              e.contains(o(n.right, n.bottom)) ||
              e.contains(o(n.left, n.bottom)))
          );
        });
    },
    W0B4: function (e, n, t) {
      "use strict";
      e.exports = t("NS33")();
    },
    W9DM: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Coverage = void 0),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.ActiveByDefault = 1)] = "ActiveByDefault"),
            (e[(e.InactiveByDefault = 2)] = "InactiveByDefault"),
            (e[(e.Full = 3)] = "Full");
        })(n.Coverage || (n.Coverage = {}));
    },
    XVVq: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.ProtectionWidgetTheme = void 0);
      var r = t("/eOC"),
        o = (function () {
          function e() {}
          return (
            (e.initialize = function (e) {
              this.widget = e;
            }),
            (e.getCurrentWidget = function () {
              return (
                ("" !== this.widget && null !== this.widget) ||
                  (this.widget = document.querySelectorAll(
                    "route-protect-widget"
                  )),
                this.widget
              );
            }),
            (e.setQuote = function (e) {
              for (
                var n,
                  t = document.querySelectorAll("route-protect-widget"),
                  o = 0;
                o < t.length;
                o++
              )
                if (t[o] && null !== t[o]) {
                  var i = r.prettifyCurrency(e.insurancePrice, e.currency);
                  if (
                    0 === t.length ||
                    !(null === (n = t[o]) || void 0 === n
                      ? void 0
                      : n.hasAttribute("quote"))
                  )
                    continue;
                  t[o].setAttribute("quote", i);
                }
            }),
            (e.setTitle = function (e) {
              null == this.widget && (this.widget = this.getCurrentWidget());
              for (var n = 0; n < this.widget.length; n++)
                this.widget[n].querySelector(".title") &&
                  (this.widget[n].querySelector(".title").innerHTML = e);
            }),
            (e.setSubtitle = function (e) {
              "" == this.widget && (this.widget = this.getCurrentWidget());
              for (var n = 0; n < this.widget.length; n++)
                this.widget[n].querySelector(".subtitle") &&
                  (this.widget[n].querySelector(".subtitle").innerHTML = e);
            }),
            (e.hide = function () {
              this.widget = this.getCurrentWidget();
              for (var e = 0; e < this.widget.length; e++)
                this.widget[e].style.display = "none";
            }),
            (e.show = function () {
              this.widget = this.getCurrentWidget();
              for (var e = 0; e < this.widget.length; e++)
                this.widget[e].style.display = "block";
            }),
            (e.widget = ""),
            e
          );
        })();
      n.ProtectionWidgetTheme = o;
    },
    Xzrz: function (e, n, t) {
      "use strict";
      var r,
        o =
          ((r = function (e, n) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, n) {
                  e.__proto__ = n;
                }) ||
              function (e, n) {
                for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
              })(e, n);
          }),
          function (e, n) {
            function t() {
              this.constructor = e;
            }
            r(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((t.prototype = n.prototype), new t()));
          }),
        i = function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.ProtectionWidget = void 0);
      var a = t("hosL"),
        u = i(t("W0B4")),
        s = t("+Gyt"),
        c = t("sBzF"),
        l = t("uT+l"),
        p = t("/eOC"),
        f = t("xPuB"),
        d = (function (e) {
          function n(n) {
            var t = e.call(this, n) || this;
            return (
              (t.ref = null),
              (t.render = function () {
                var e, n, r, o, i, u;
                return a.h("route-protect-widget", {
                  "data-protection-widget": !0,
                  ref: t.ref,
                  quote: p.prettifyCurrency(
                    null ===
                      (n =
                        null === (e = t.props.quote) || void 0 === e
                          ? void 0
                          : e.premium) || void 0 === n
                      ? void 0
                      : n.amount,
                    null ===
                      (o =
                        null === (r = t.props.quote) || void 0 === r
                          ? void 0
                          : r.premium) || void 0 === o
                      ? void 0
                      : o.currency
                  ),
                  payer:
                    null ===
                      (u =
                        null === (i = t.props.quote) || void 0 === i
                          ? void 0
                          : i.paymentResponsible) || void 0 === u
                      ? void 0
                      : u.type,
                  status:
                    void 0 !== t.state.status
                      ? t.state.status.toString()
                      : t.props.status.toString(),
                  mode: t.props.mode,
                  alignment: t.props.alignment,
                  variant: t.props.variant,
                });
              }),
              (t.ref = a.createRef()),
              t
            );
          }
          return (
            o(n, e),
            (n.prototype.componentDidMount = function () {
              var e = this;
              s.Protection.on(c.StatusChangeEventName, function (n) {
                e.ref.current &&
                  e.setState({ status: n.to === l.Status.Active });
              }),
                this.ref.current.removeEventListener(
                  "route:widget:toggle",
                  this.toggleHandler,
                  !1
                ),
                this.ref.current.addEventListener(
                  "route:widget:toggle",
                  this.toggleHandler,
                  !1
                ),
                this.ref.current.removeEventListener(
                  "route:modal:toggle",
                  this.toggleModalHandler,
                  !1
                ),
                this.ref.current.addEventListener(
                  "route:modal:toggle",
                  this.toggleModalHandler,
                  !1
                ),
                this.ref.current.removeEventListener(
                  "route:modal:rendered",
                  this.modalRenderedHandler,
                  !1
                ),
                this.ref.current.addEventListener(
                  "route:modal:rendered",
                  this.modalRenderedHandler,
                  !1
                ),
                this.renderedHandler();
            }),
            (n.prototype.renderedHandler = function () {
              var e = this;
              try {
                var n = 15,
                  t = setInterval(function () {
                    var r,
                      o,
                      i =
                        null !==
                        (null ===
                          (o =
                            null === (r = e.ref) || void 0 === r
                              ? void 0
                              : r.current) || void 0 === o
                          ? void 0
                          : o.firstChild);
                    (i || 0 === n) &&
                      (s.Protection.handleRendered(i), clearInterval(t)),
                      n--;
                  }, 100);
              } catch (e) {
                s.Protection.handleRendered(!1);
              }
            }),
            (n.prototype.toggleHandler = function () {
              s.Protection.toggle();
            }),
            (n.prototype.toggleModalHandler = function () {
              s.Protection.toggleModal();
            }),
            (n.prototype.onRendered = function () {
              s.Protection.handleRendered();
            }),
            (n.prototype.modalRenderedHandler = function () {
              s.Protection.handleRendered(!0, f.EventType.RenderModal);
            }),
            (n.propTypes = {
              quote: u.default.object,
              status: u.default.bool.isRequired,
              mode: u.default.string.isRequired,
              alignment: u.default.string,
            }),
            (n.state = { status: status }),
            n
          );
        })(a.Component);
      n.ProtectionWidget = d;
    },
    Z3s7: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = function (e) {
          var n = this.constructor;
          return this.then(
            function (t) {
              return n.resolve(e()).then(function () {
                return t;
              });
            },
            function (t) {
              return n.resolve(e()).then(function () {
                return n.reject(t);
              });
            }
          );
        });
    },
    Zrjs: function (e, n, t) {
      "use strict";
      var r = t("ovh1");
      e.exports = function (e, n) {
        function t(e, n) {
          return r.isPlainObject(e) && r.isPlainObject(n)
            ? r.merge(e, n)
            : r.isPlainObject(n)
            ? r.merge({}, n)
            : r.isArray(n)
            ? n.slice()
            : n;
        }
        function o(o) {
          r.isUndefined(n[o])
            ? r.isUndefined(e[o]) || (i[o] = t(void 0, e[o]))
            : (i[o] = t(e[o], n[o]));
        }
        n = n || {};
        var i = {},
          a = ["url", "method", "data"],
          u = ["headers", "auth", "proxy", "params"],
          s = [
            "baseURL",
            "transformRequest",
            "transformResponse",
            "paramsSerializer",
            "timeout",
            "timeoutMessage",
            "withCredentials",
            "adapter",
            "responseType",
            "xsrfCookieName",
            "xsrfHeaderName",
            "onUploadProgress",
            "onDownloadProgress",
            "decompress",
            "maxContentLength",
            "maxBodyLength",
            "maxRedirects",
            "transport",
            "httpAgent",
            "httpsAgent",
            "cancelToken",
            "socketPath",
            "responseEncoding",
          ],
          c = ["validateStatus"];
        r.forEach(a, function (e) {
          r.isUndefined(n[e]) || (i[e] = t(void 0, n[e]));
        }),
          r.forEach(u, o),
          r.forEach(s, function (o) {
            r.isUndefined(n[o])
              ? r.isUndefined(e[o]) || (i[o] = t(void 0, e[o]))
              : (i[o] = t(void 0, n[o]));
          }),
          r.forEach(c, function (r) {
            r in n
              ? (i[r] = t(e[r], n[r]))
              : r in e && (i[r] = t(void 0, e[r]));
          });
        var l = a.concat(u).concat(s).concat(c),
          p = Object.keys(e)
            .concat(Object.keys(n))
            .filter(function (e) {
              return -1 === l.indexOf(e);
            });
        return r.forEach(p, o), i;
      };
    },
    aECo: function (e, n, t) {
      "use strict";
      var r = t("2KG9");
      e.exports = function (e, n, t) {
        var o = t.config.validateStatus;
        t.status && o && !o(t.status)
          ? n(
              r(
                "Request failed with status code " + t.status,
                t.config,
                null,
                t.request,
                t
              )
            )
          : e(t);
      };
    },
    aa5x: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.quoteFunctionFallbackJS = n.quoteFunctionJS = void 0),
        (n.quoteFunctionJS =
          '(function() { \n\n  const percentageOptions = Object.freeze({ precision: 4, truncEnabled: false });\n  const defaultCurrencyOptions = Object.freeze({\n    precision: 2,\n    truncEnabled: false,\n  });\n  const defaultDecimalOptions = Object.freeze({\n    precision: 2,\n    truncEnabled: true,\n  });\n  const defaultExchangeRateOptions = Object.freeze({\n    precision: 6,\n    truncEnabled: false,\n  });\n  const defaultCurrencyType = Object.freeze("USD");\n  ("use strict");\n  function _typeof(obj) {\n    "@babel/helpers - typeof";\n    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {\n      _typeof = function _typeof(obj) {\n        return typeof obj;\n      };\n    } else {\n      _typeof = function _typeof(obj) {\n        return obj &&\n          typeof Symbol === "function" &&\n          obj.constructor === Symbol &&\n          obj !== Symbol.prototype\n          ? "symbol"\n          : typeof obj;\n      };\n    }\n    return _typeof(obj);\n  }\n  function ownKeys(object, enumerableOnly) {\n    var keys = Object.keys(object);\n    if (Object.getOwnPropertySymbols) {\n      var symbols = Object.getOwnPropertySymbols(object);\n      if (enumerableOnly)\n        symbols = symbols.filter(function (sym) {\n          return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n        });\n      keys.push.apply(keys, symbols);\n    }\n    return keys;\n  }\n  function _objectSpread(target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i] != null ? arguments[i] : {};\n      if (i % 2) {\n        ownKeys(Object(source), true).forEach(function (key) {\n          _defineProperty(target, key, source[key]);\n        });\n      } else if (Object.getOwnPropertyDescriptors) {\n        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n      } else {\n        ownKeys(Object(source)).forEach(function (key) {\n          Object.defineProperty(\n            target,\n            key,\n            Object.getOwnPropertyDescriptor(source, key)\n          );\n        });\n      }\n    }\n    return target;\n  }\n  function _defineProperty(obj, key, value) {\n    if (key in obj) {\n      Object.defineProperty(obj, key, {\n        value: value,\n        enumerable: true,\n        configurable: true,\n        writable: true,\n      });\n    } else {\n      obj[key] = value;\n    }\n    return obj;\n  }\n  function _inherits(subClass, superClass) {\n    if (typeof superClass !== "function" && superClass !== null) {\n      throw new TypeError("Super expression must either be null or a function");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n      constructor: { value: subClass, writable: true, configurable: true },\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n  }\n  function _setPrototypeOf(o, p) {\n    _setPrototypeOf =\n      Object.setPrototypeOf ||\n      function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n      };\n    return _setPrototypeOf(o, p);\n  }\n  function _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n      var Super = _getPrototypeOf(Derived),\n        result;\n      if (hasNativeReflectConstruct) {\n        var NewTarget = _getPrototypeOf(this).constructor;\n        result = Reflect.construct(Super, arguments, NewTarget);\n      } else {\n        result = Super.apply(this, arguments);\n      }\n      return _possibleConstructorReturn(this, result);\n    };\n  }\n  function _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === "object" || typeof call === "function")) {\n      return call;\n    }\n    return _assertThisInitialized(self);\n  }\n  function _assertThisInitialized(self) {\n    if (self === void 0) {\n      throw new ReferenceError(\n        "this hasn\'t been initialised - super() hasn\'t been called"\n      );\n    }\n    return self;\n  }\n  function _isNativeReflectConstruct() {\n    if (typeof Reflect === "undefined" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === "function") return true;\n    try {\n      Boolean.prototype.valueOf.call(\n        Reflect.construct(Boolean, [], function () {})\n      );\n      return true;\n    } catch (e) {\n      return false;\n    }\n  }\n  function _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf\n      ? Object.getPrototypeOf\n      : function _getPrototypeOf(o) {\n          return o.__proto__ || Object.getPrototypeOf(o);\n        };\n    return _getPrototypeOf(o);\n  }\n  function _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n      throw new TypeError("Cannot call a class as a function");\n    }\n  }\n  function _defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if ("value" in descriptor) descriptor.writable = true;\n      Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }\n  function _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n  }\n  var Condition = /*#__PURE__*/ (function () {\n    function Condition(expression) {\n      _classCallCheck(this, Condition);\n      this.expression = assertNotNull(expression, "expression");\n    }\n    _createClass(Condition, [\n      {\n        key: "IsSatisfied",\n        value: function IsSatisfied(ctx, input) {\n          return this.expression(ctx, input);\n        },\n      },\n    ]);\n    return Condition;\n  })();\n  var CompositeCondition = /*#__PURE__*/ (function (_Condition) {\n    _inherits(CompositeCondition, _Condition);\n    var _super = _createSuper(CompositeCondition);\n    function CompositeCondition(expression, conditions) {\n      var _this;\n      _classCallCheck(this, CompositeCondition);\n      _this = _super.call(this, expression);\n      _this.conditions = assertNotNull(conditions, "conditions");\n      return _this;\n    }\n    return CompositeCondition;\n  })(Condition);\n  var RateRule = /*#__PURE__*/ (function () {\n    function RateRule() {\n      _classCallCheck(this, RateRule);\n    }\n    _createClass(\n      RateRule,\n      [\n        {\n          key: "Rate",\n          // eslint-disable-next-line class-methods-use-this\n          value: function Rate(ctx, input) {\n            assertNotNull(ctx);\n            assertNotNull(input);\n            throw new Error("this method must be overridden");\n          },\n        },\n      ],\n      [\n        {\n          key: "normalizeInputCurrency",\n          value: function normalizeInputCurrency(input) {\n            var covered = input.CartInfo.CoveredAmount;\n            var coveredCurrencyType = covered.Type;\n            if (coveredCurrencyType !== defaultCurrencyType) {\n              var exchangeRate = input.ExchangeRateProvider.FindExchangeRate(\n                coveredCurrencyType,\n                defaultCurrencyType\n              );\n              if (exchangeRate == null) {\n                throw new Error(\n                  "no exchange rate found to convert in amount from type=["\n                    .concat(coveredCurrencyType, "] to ")\n                    .concat(defaultCurrencyType)\n                );\n              }\n              return covered.Exchange(exchangeRate);\n            }\n            return covered;\n          },\n        },\n        {\n          key: "ValidateIfInputCanBeRated",\n          value: function ValidateIfInputCanBeRated(ctx, input) {\n            assertNotNull(input, "input");\n            assertCoverageAgreementIsValid(input.CoverageAgreement);\n            assertNotNull(input.CartInfo, "input.CartInfo");\n            assertCurrencyIsValid(input.CartInfo.CoveredAmount);\n            if (!input.CoverageAgreement.IsProtectEnabled) {\n              return false;\n            }\n            var covered = input.CartInfo.CoveredAmount;\n            if (covered.Amount.IsPositive === false) {\n              return false;\n            }\n            covered = RateRule.normalizeInputCurrency(input); // If in covered is below lower limit or greater than upper limit returns no coverage\n            if (covered.Amount.LessThan(input.CoverageAgreement.LowerLimit)) {\n              return false;\n            }\n            return !covered.Amount.GreaterThan(\n              input.CoverageAgreement.UpperLimit\n            );\n          },\n        },\n      ]\n    );\n    return RateRule;\n  })();\n  var AndCondition = /*#__PURE__*/ (function (_CompositeCondition) {\n    _inherits(AndCondition, _CompositeCondition);\n    var _super2 = _createSuper(AndCondition);\n    function AndCondition(conditions) {\n      var _this2;\n      _classCallCheck(this, AndCondition);\n      return (_this2 = _super2.call(\n        this,\n        function (ctx, input) {\n          return _this2.conditions.every(function (condition) {\n            return condition.IsSatisfied(ctx, input);\n          });\n        },\n        conditions\n      ));\n    }\n    return AndCondition;\n  })(CompositeCondition);\n  function isNull(o) {\n    return o === undefined || o === null;\n  }\n  function assertNotNull(o, objName) {\n    if (isNull(o)) {\n      throw new Error("object [".concat(objName, "] is mandatory"));\n    }\n    return o;\n  }\n  var CartInfo = /*#__PURE__*/ (function () {\n    function CartInfo(_ref) {\n      var _ref$coveredAmount = _ref.coveredAmount,\n        coveredAmount =\n          _ref$coveredAmount === void 0 ? new Currency() : _ref$coveredAmount;\n      _classCallCheck(this, CartInfo);\n      this.coveredAmount = coveredAmount;\n      this.coveredAmountUSD = null;\n    }\n    _createClass(CartInfo, [\n      {\n        key: "CoveredAmount",\n        get: function get() {\n          return this.coveredAmount;\n        },\n      },\n      {\n        key: "CoveredAmountInUSD",\n        value: function CoveredAmountInUSD(ctx, exchangeRateProvider) {\n          if (this.coveredAmountUSD === null) {\n            if (this.coveredAmount.Type === "USD") {\n              this.coveredAmountUSD = this.coveredAmount;\n            } else {\n              var exchangeRate = exchangeRateProvider.FindExchangeRate(\n                ctx,\n                this.coveredAmount.Type,\n                defaultCurrencyType\n              );\n              this.coveredAmountUSD = this.coveredAmount.Exchange(exchangeRate);\n            }\n          }\n          return this.coveredAmountUSD;\n        },\n      },\n    ]);\n    return CartInfo;\n  })();\n  var ConditionalRateRule = /*#__PURE__*/ (function (_RateRule) {\n    _inherits(ConditionalRateRule, _RateRule);\n    var _super3 = _createSuper(ConditionalRateRule);\n    function ConditionalRateRule(_ref2) {\n      var _this3;\n      var _ref2$condition = _ref2.condition,\n        condition = _ref2$condition === void 0 ? null : _ref2$condition,\n        rateRule = _ref2.rateRule,\n        _ref2$fallbackRateRul = _ref2.fallbackRateRule,\n        fallbackRateRule =\n          _ref2$fallbackRateRul === void 0\n            ? NoCoverageRateRule\n            : _ref2$fallbackRateRul;\n      _classCallCheck(this, ConditionalRateRule);\n      _this3 = _super3.call(this);\n      _this3.condition = condition;\n      _this3.rateRule = assertNotNull(rateRule, "RateRule");\n      _this3.fallbackRateRule = assertNotNull(\n        fallbackRateRule,\n        "FallbackRateRule"\n      );\n      return _this3;\n    }\n    _createClass(ConditionalRateRule, [\n      {\n        key: "Rate",\n        value: function Rate(ctx, input) {\n          if (!RateRule.ValidateIfInputCanBeRated(ctx, input)) {\n            return NoCoverageResult;\n          }\n          if (isNull(this.condition) || this.condition.IsSatisfied(ctx, input)) {\n            return this.rateRule.Rate(ctx, input);\n          }\n          return this.fallbackRateRule.Rate(ctx, input);\n        },\n      },\n    ]);\n    return ConditionalRateRule;\n  })(RateRule);\n  function assertCoverageAgreementIsValid(a) {\n    if (isNull(a)) throw new Error("invalid null CoverageAgreement");\n    if (isNull(a.IsProtectEnabled))\n      throw new Error(\n        \'given CoverageAgreement does not have the "IsProtectEnabled" property\'\n      );\n    if (typeof a.IsProtectEnabled !== "boolean")\n      throw new Error(\n        "CoverageAgreement.IsProtectEnabled=[".concat(\n          a.IsProtectEnabled,\n          "] is not a boolean"\n        )\n      );\n    assertDecimalIsValid(a.UpperLimit);\n    assertDecimalIsValid(a.LowerLimit);\n    return a;\n  }\n  function assertCurrencyIsValid(c) {\n    if (isNull(c)) throw new Error("invalid null currency");\n    if (isNull(c.currencyType))\n      throw new Error(\'given currency does not have the "currencyType" property\');\n    assertDecimalIsValid(c.currencyValue);\n    return c;\n  }\n  var Currency = /*#__PURE__*/ (function () {\n    function Currency() {\n      var _ref3 =\n          arguments.length > 0 && arguments[0] !== undefined\n            ? arguments[0]\n            : {\n                type: defaultCurrencyType,\n                value: new Decimal(),\n                currency: null,\n                amount: null,\n              },\n        _ref3$type = _ref3.type,\n        type = _ref3$type === void 0 ? defaultCurrencyType : _ref3$type,\n        _ref3$value = _ref3.value,\n        value = _ref3$value === void 0 ? new Decimal() : _ref3$value,\n        _ref3$currency = _ref3.currency,\n        currency = _ref3$currency === void 0 ? null : _ref3$currency,\n        _ref3$amount = _ref3.amount,\n        amount = _ref3$amount === void 0 ? null : _ref3$amount;\n      _classCallCheck(this, Currency);\n      var finalValue = value;\n      if (amount !== null) finalValue = amount;\n      var finalType = type;\n      if (currency !== null) finalType = currency;\n      if (!(finalValue instanceof Decimal)) {\n        finalValue = new Decimal(\n          finalValue,\n          _objectSpread({}, defaultCurrencyOptions)\n        );\n      }\n      this.currencyType = finalType;\n      this.currencyValue = finalValue;\n    }\n    _createClass(Currency, [\n      {\n        key: "Type",\n        get: function get() {\n          return this.currencyType;\n        },\n      },\n      {\n        key: "Currency",\n        get: function get() {\n          return this.currencyType;\n        },\n      },\n      {\n        key: "Amount",\n        get: function get() {\n          return this.currencyValue;\n        },\n      },\n      {\n        key: "HasTheSameTypeAs",\n        value: function HasTheSameTypeAs(giveType) {\n          return giveType === this.currencyType;\n        },\n      },\n      {\n        key: "HasTheSameTypeAsTheOther",\n        value: function HasTheSameTypeAsTheOther(other) {\n          return this.HasTheSameTypeAs(other.currencyType);\n        },\n      },\n      {\n        key: "Exchange",\n        value: function Exchange(exchangeRate) {\n          if (this.HasTheSameTypeAs(exchangeRate.FromCurrencyType)) {\n            return new Currency({\n              type: exchangeRate.ToCurrencyType,\n              value: this.Amount.Multiply(exchangeRate.Rate, {\n                resultOptions: defaultCurrencyOptions,\n                truncEnabled: defaultExchangeRateOptions.truncEnabled,\n              }),\n            });\n          }\n          if (this.HasTheSameTypeAs(exchangeRate.ToCurrencyType)) {\n            return new Currency({\n              type: exchangeRate.FromCurrencyType,\n              value: this.Amount.Divide(exchangeRate.Rate, {\n                resultOptions: defaultCurrencyOptions,\n                truncEnabled: defaultExchangeRateOptions.truncEnabled,\n              }),\n            });\n          }\n          throw new Error(\n            "exchange rate cannot be used with currency type: "\n              .concat(this, ", ")\n              .concat(exchangeRate)\n          );\n        },\n      },\n    ]);\n    return Currency;\n  })();\n  function assertDecimalIsValid(d) {\n    if (isNull(d)) throw new Error("decimal is null");\n    if (isNull(d.value))\n      throw new Error(\'given decimal does not have the "value" property\');\n    if (typeof d.value !== "number")\n      throw new Error("decimal.value=[".concat(d.value, "] is not a number"));\n    if (isNull(d.options))\n      throw new Error(\'given decimal does not have the "options" property\');\n    if (isNull(d.options.precision))\n      throw new Error(\n        \'given decimal.options does not have the "precision" property\'\n      );\n    if (typeof d.options.precision !== "number")\n      throw new Error(\n        "decimal.options.precision=[".concat(\n          d.options.precision,\n          "] is not a number"\n        )\n      );\n    if (isNull(d.options.truncEnabled))\n      throw new Error(\n        \'given decimal.options does not have the "truncEnabled" property\'\n      );\n    if (typeof d.options.truncEnabled !== "boolean")\n      throw new Error(\n        "decimal.options.precision=[".concat(\n          d.options.truncEnabled,\n          "] is not a boolean"\n        )\n      );\n    return d;\n  }\n  var Decimal = /*#__PURE__*/ (function () {\n    function Decimal() {\n      var value =\n        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n      var options =\n        arguments.length > 1 && arguments[1] !== undefined\n          ? arguments[1]\n          : Object.freeze(defaultDecimalOptions);\n      _classCallCheck(this, Decimal);\n      if (options.asIs === true) {\n        var resolvedOptions = Decimal.assertOptionsIsValid(options);\n        this.value = value;\n        this.options = {\n          precision: resolvedOptions.precision,\n          truncEnabled: resolvedOptions.truncEnabled,\n        };\n      } else if (typeof value === "number") {\n        this.fromNumber(value, options);\n      } else if (typeof value === "string") {\n        this.fromString(value, options);\n      } else {\n        throw new Error(\n          "invalid data type=".concat(_typeof(value), " to create a decimal")\n        );\n      }\n    }\n    _createClass(\n      Decimal,\n      [\n        {\n          key: "Value",\n          get: function get() {\n            return this.value;\n          },\n        },\n        {\n          key: "IsZero",\n          get: function get() {\n            return this.value === 0;\n          },\n        },\n        {\n          key: "IsNegative",\n          get: function get() {\n            return this.value < 0;\n          },\n        },\n        {\n          key: "IsPositive",\n          get: function get() {\n            return this.value > 0;\n          }\n          /**\n           * Multiply expects an optional OperationOptions with the following properties:\n           *\n           * {   //specifies the options for the decimal created by Multiply\n           *     resultOptions Options // same as provided in the constructor\n           *     //specifies the truncation behavior\n           *     truncEnabled\n           * }\n           */,\n        },\n        {\n          key: "Multiply",\n          value: function Multiply(other) {\n            var operationOptions =\n              arguments.length > 1 && arguments[1] !== undefined\n                ? arguments[1]\n                : null;\n            var newOptions = _objectSpread({}, this.options);\n            var operationTruncEnabled = this.options.truncEnabled;\n            if (this.options.precision < other.options.precision) {\n              newOptions.precision = other.options.precision;\n            }\n            if (!isNull(operationOptions)) {\n              operationTruncEnabled = operationOptions.truncEnabled;\n              newOptions = Decimal.assertOptionsIsValid(\n                operationOptions.resultOptions\n              );\n            }\n            var newValue = Decimal.adjustPrecision(\n              other.value * this.value,\n              this.options.precision + other.options.precision,\n              newOptions.precision,\n              operationTruncEnabled\n            );\n            return new Decimal(\n              newValue,\n              _objectSpread(_objectSpread({}, newOptions), {}, { asIs: true })\n            );\n          },\n        },\n        {\n          key: "Divide",\n          value: function Divide(other) {\n            var operationOptions =\n              arguments.length > 1 && arguments[1] !== undefined\n                ? arguments[1]\n                : null;\n            var newOptions = _objectSpread({}, this.options);\n            var operationTruncEnabled = this.options.truncEnabled;\n            if (this.options.precision < other.options.precision) {\n              newOptions.precision = other.options.precision;\n            }\n            if (!isNull(operationOptions)) {\n              operationTruncEnabled = operationOptions.truncEnabled;\n              newOptions = Decimal.assertOptionsIsValid(\n                operationOptions.resultOptions\n              );\n            }\n            var left;\n            var newValue;\n            if (operationTruncEnabled) {\n              left = Decimal.adjustPrecision(\n                this.value,\n                this.options.precision,\n                newOptions.precision + other.options.precision,\n                operationTruncEnabled\n              );\n              newValue = Math.trunc(left / other.value);\n            } else {\n              left = Decimal.adjustPrecision(\n                this.value,\n                this.options.precision,\n                newOptions.precision + other.options.precision + 1,\n                operationTruncEnabled\n              );\n              var roundValue = Decimal.roundValue(other.value < 0);\n              newValue = Math.trunc((left / other.value + roundValue) / 10);\n            }\n            return new Decimal(\n              newValue,\n              _objectSpread(_objectSpread({}, newOptions), {}, { asIs: true })\n            );\n          },\n        },\n        {\n          key: "Compare",\n          value: function Compare(other) {\n            var result = 0;\n            this.normalizeWith(other, function (v1, v2) {\n              result = v1 - v2;\n            });\n            return result;\n          },\n        },\n        {\n          key: "Equals",\n          value: function Equals(other) {\n            return this.Compare(other) === 0;\n          },\n        },\n        {\n          key: "LessThan",\n          value: function LessThan(other) {\n            return this.Compare(other) < 0;\n          },\n        },\n        {\n          key: "LessThanOrEquals",\n          value: function LessThanOrEquals(other) {\n            return this.Compare(other) <= 0;\n          },\n        },\n        {\n          key: "GreaterThan",\n          value: function GreaterThan(other) {\n            return this.Compare(other) > 0;\n          },\n        },\n        {\n          key: "GreaterThanOrEquals",\n          value: function GreaterThanOrEquals(other) {\n            return this.Compare(other) >= 0;\n          },\n        },\n        {\n          key: "fromNumber",\n          value: function fromNumber(num, options) {\n            var resolvedOptions = Decimal.assertOptionsIsValid(options);\n            var pow10 = Math.pow(10, resolvedOptions.precision);\n            this.options = resolvedOptions;\n            if (resolvedOptions.truncEnabled) {\n              this.value = Math.trunc(num * pow10);\n            } else {\n              var roundValue = Decimal.roundValue(num < 0);\n              this.value = Math.trunc((num * pow10 * 10 + roundValue) / 10);\n            }\n          },\n        },\n        {\n          key: "fromString",\n          value: function fromString(value, options) {\n            var parts = value.trim().split(".");\n            var numOfParts = parts.length;\n            if (numOfParts > 2) {\n              throw new Error(\n                "given value=[".concat(\n                  value,\n                  "] has more than one decimal separator"\n                )\n              );\n            }\n            var resolvedOptions = Decimal.assertOptionsIsValid(options);\n            var pow10 = Math.pow(10, resolvedOptions.precision);\n            if (numOfParts === 1 || parts[1].length === 0) {\n              var _integerPart = parseInt(parts[0], 10);\n              if (Number.isNaN(_integerPart)) {\n                throw new Error(\n                  "given invalid integer value=[".concat(value, "]")\n                );\n              }\n              this.value = _integerPart * pow10;\n              this.options = resolvedOptions;\n              return;\n            }\n            var offset = 1;\n            var integerPart = parts[0];\n            var decimalPart = parts[1];\n            var decimalSize = decimalPart.length;\n            if (decimalSize !== resolvedOptions.precision) {\n              if (decimalSize > resolvedOptions.precision) {\n                decimalPart = decimalPart.substring(0, resolvedOptions.precision);\n              } else {\n                offset = Math.pow(10, resolvedOptions.precision) - decimalSize;\n              }\n            }\n            var intPlusDec = parseInt(integerPart + decimalPart, 10);\n            if (Number.isNaN(intPlusDec)) {\n              throw new Error("given invalid integer value=[".concat(value, "]"));\n            }\n            this.value = intPlusDec * offset;\n            this.options = resolvedOptions;\n          },\n        },\n        {\n          key: "normalizeWith",\n          value: function normalizeWith(other, onNormalized) {\n            if (this.options.precision > other.options.precision) {\n              onNormalized(\n                this.value,\n                Decimal.adjustPrecision(\n                  other.value,\n                  other.options.precision,\n                  this.options.precision,\n                  other.options.truncEnabled\n                )\n              );\n              return;\n            }\n            if (this.options.precision < other.options.precision) {\n              onNormalized(\n                Decimal.adjustPrecision(\n                  this.value,\n                  this.options.precision,\n                  other.options.precision,\n                  this.options.truncEnabled\n                ),\n                other.value\n              );\n              return;\n            }\n            onNormalized(this.value, other.value);\n          },\n        },\n        {\n          key: "ToNumber",\n          value: function ToNumber() {\n            return this.value / Math.pow(10, this.options.precision);\n          },\n        },\n      ],\n      [\n        {\n          key: "roundValue",\n          value: function roundValue(negative) {\n            return negative ? -5 : 5;\n          },\n        },\n        {\n          key: "assertOptionsIsValid",\n          value: function assertOptionsIsValid(options) {\n            if (isNull(options)) {\n              return _objectSpread({}, defaultDecimalOptions);\n            }\n            return {\n              precision: Decimal.assertValidPrecision(options.precision),\n              truncEnabled: Decimal.assertValidTruncEnabled(options.truncEnabled),\n            };\n          },\n        },\n        {\n          key: "assertValidTruncEnabled",\n          value: function assertValidTruncEnabled(truncEnabled) {\n            if (isNull(truncEnabled)) {\n              return defaultDecimalOptions.truncEnabled;\n            }\n            if (typeof truncEnabled !== "boolean")\n              throw new Error("options.truncEnabled is not a boolean");\n            return truncEnabled;\n          },\n        },\n        {\n          key: "assertValidPrecision",\n          value: function assertValidPrecision(precision) {\n            if (isNull(precision)) {\n              return defaultDecimalOptions.precision;\n            }\n            if (typeof precision !== "number")\n              throw new Error("options.precision is not a number");\n            if (precision < 0)\n              throw new Error(\n                "invalid negative precision=[".concat(precision, "]")\n              );\n            return Math.trunc(precision);\n          },\n        },\n        {\n          key: "adjustPrecision",\n          value: function adjustPrecision(\n            v,\n            currentPrecision,\n            newPrecision,\n            truncateEnabled\n          ) {\n            if (currentPrecision === newPrecision) {\n              return Math.trunc(v);\n            }\n            if (currentPrecision < newPrecision) {\n              var lShift10 = Math.pow(10, newPrecision - currentPrecision);\n              return Math.trunc(v * lShift10);\n            }\n            var rShift10 = Math.pow(10, currentPrecision - newPrecision);\n            if (truncateEnabled) {\n              return Math.trunc(v / rShift10);\n            }\n            var roundValue = Decimal.roundValue(v < 0);\n            return Math.trunc((v / (rShift10 / 10) + roundValue) / 10);\n          },\n        },\n      ]\n    );\n    return Decimal;\n  })();\n  function assertExchangeRateIsValid(rate) {\n    if (isNull(rate)) throw new Error("given exchange rate is null");\n    if (isNull(rate.to))\n      throw new Error(\'given exchange rate does not have the "to" property\');\n    if (isNull(rate.from))\n      throw new Error(\'given exchange rate does not have the "from" property\');\n    assertDecimalIsValid(rate.rate);\n    if (rate.to !== defaultCurrencyType && rate.from !== defaultCurrencyType) {\n      throw new Error(\n        \'exchange rate must have the "from" or "to" property with the currency type=[\'.concat(\n          defaultCurrencyType,\n          "]"\n        )\n      );\n    }\n    return rate;\n  }\n  var ExchangeRate = /*#__PURE__*/ (function () {\n    function ExchangeRate() {\n      var _ref4 =\n          arguments.length > 0 && arguments[0] !== undefined\n            ? arguments[0]\n            : {\n                from: defaultCurrencyType,\n                to: defaultCurrencyType,\n                rate: new Decimal(1, defaultExchangeRateOptions),\n              },\n        _ref4$from = _ref4.from,\n        from = _ref4$from === void 0 ? defaultCurrencyType : _ref4$from,\n        _ref4$to = _ref4.to,\n        to = _ref4$to === void 0 ? defaultCurrencyType : _ref4$to,\n        _ref4$rate = _ref4.rate,\n        rate =\n          _ref4$rate === void 0\n            ? new Decimal(1, defaultExchangeRateOptions)\n            : _ref4$rate;\n      _classCallCheck(this, ExchangeRate);\n      var finalRate = rate;\n      if (!(rate instanceof Decimal))\n        finalRate = new Decimal(rate, defaultExchangeRateOptions);\n      this.to = to;\n      this.from = from;\n      this.rate = finalRate;\n    }\n    _createClass(ExchangeRate, [\n      {\n        key: "ToCurrencyType",\n        get: function get() {\n          return this.to;\n        },\n      },\n      {\n        key: "FromCurrencyType",\n        get: function get() {\n          return this.from;\n        },\n      },\n      {\n        key: "Rate",\n        get: function get() {\n          return this.rate;\n        },\n      },\n    ]);\n    return ExchangeRate;\n  })();\n  var one = new Decimal(1, { precision: 0 });\n  var LocalExchangeRateProvider = /*#__PURE__*/ (function () {\n    function LocalExchangeRateProvider() {\n      var exchangeRate =\n        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      _classCallCheck(this, LocalExchangeRateProvider);\n      this.exchangeRate = exchangeRate;\n    }\n    _createClass(LocalExchangeRateProvider, [\n      {\n        key: "FindExchangeRate",\n        value: function FindExchangeRate(from, to) {\n          if (this.exchangeRate.ToCurrencyType === to) {\n            if (this.exchangeRate.FromCurrencyType === from) {\n              return this.exchangeRate;\n            }\n          } else if (this.exchangeRate.ToCurrencyType === from) {\n            if (this.exchangeRate.FromCurrencyType === to) {\n              return new ExchangeRate({\n                from: from,\n                to: to,\n                rate: one.Divide(this.exchangeRate.Rate),\n              });\n            }\n          }\n          throw new Error(\n            "no exchange rate found from=".concat(from, " to=").concat(to)\n          );\n        },\n      },\n    ]);\n    return LocalExchangeRateProvider;\n  })();\n  var FixedAmountRateRule = /*#__PURE__*/ (function (_RateRule2) {\n    _inherits(FixedAmountRateRule, _RateRule2);\n    var _super4 = _createSuper(FixedAmountRateRule);\n    function FixedAmountRateRule(_ref5) {\n      var _this4;\n      var premiumAmount = _ref5.premiumAmount,\n        paymentResponsible = _ref5.paymentResponsible;\n      _classCallCheck(this, FixedAmountRateRule);\n      _this4 = _super4.call(this);\n      _this4.premiumAmount = premiumAmount;\n      _this4.paymentResponsible = paymentResponsible;\n      return _this4;\n    }\n    _createClass(FixedAmountRateRule, [\n      {\n        key: "Rate",\n        value: function Rate(ctx, input) {\n          if (!RateRule.ValidateIfInputCanBeRated(ctx, input)) {\n            return NewRateResult();\n          }\n          if (\n            this.premiumAmount.HasTheSameTypeAsTheOther(\n              input.CartInfo.CoveredAmount\n            )\n          ) {\n            return NewRateResult({\n              premiumAmount: this.premiumAmount,\n              paymentResponsible: this.paymentResponsible,\n            });\n          } // If fixed premium and covered amount have distinct currency types, then exchange rate should be used\n          var exchangeRate = input.ExchangeRateProvider.FindExchangeRate(\n            this.premiumAmount.Type,\n            input.CartInfo.CoveredAmount.Type\n          );\n          if (exchangeRate === null) {\n          }\n          var exchangedPremiumAmount = this.premiumAmount.Exchange(exchangeRate);\n          return NewRateResult({\n            premiumAmount: exchangedPremiumAmount,\n            paymentResponsible: this.paymentResponsible,\n          });\n        },\n      },\n    ]);\n    return FixedAmountRateRule;\n  })(RateRule);\n  var Input = /*#__PURE__*/ (function () {\n    function Input(_ref6) {\n      var cartInfo = _ref6.cartInfo,\n        exchangeRateProvider = _ref6.exchangeRateProvider,\n        coverageAgreement = _ref6.coverageAgreement;\n      _classCallCheck(this, Input);\n      this.cartInfo = assertNotNull(cartInfo);\n      this.exchangeRateProvider = assertNotNull(exchangeRateProvider);\n      this.coverageAgreement = assertNotNull(coverageAgreement);\n    }\n    _createClass(Input, [\n      {\n        key: "CartInfo",\n        get: function get() {\n          return this.cartInfo;\n        },\n      },\n      {\n        key: "ExchangeRateProvider",\n        get: function get() {\n          return this.exchangeRateProvider;\n        },\n      },\n      {\n        key: "CoverageAgreement",\n        get: function get() {\n          return this.coverageAgreement;\n        },\n      },\n    ]);\n    return Input;\n  })();\n  var NoCoverageRateRule = {\n    Rate: function Rate() {\n      return NoCoverageResult;\n    },\n  };\n  var NoCoveragePaymentResponsible = { type: "no_coverage" };\n  var MerchantPaymentResponsible = { type: "merchant" };\n  function CustomerPaymentResponsible() {\n    var toggleStatus =\n      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n    var state = "unchecked";\n    if (toggleStatus) {\n      state = "checked";\n    }\n    return { type: "customer", toggle_state: state };\n  }\n  var PercentageRateRule = /*#__PURE__*/ (function (_RateRule3) {\n    _inherits(PercentageRateRule, _RateRule3);\n    var _super5 = _createSuper(PercentageRateRule);\n    function PercentageRateRule(_ref7) {\n      var _this5;\n      var percentage = _ref7.percentage,\n        paymentResponsible = _ref7.paymentResponsible;\n      _classCallCheck(this, PercentageRateRule);\n      _this5 = _super5.call(this);\n      _this5.percentage = percentage;\n      _this5.paymentResponsible = paymentResponsible;\n      return _this5;\n    }\n    _createClass(PercentageRateRule, [\n      {\n        key: "Rate",\n        value: function Rate(ctx, input) {\n          if (!RateRule.ValidateIfInputCanBeRated(ctx, input)) {\n            return NewRateResult();\n          }\n          var responsible = this.paymentResponsible;\n          var premium = input.CartInfo.CoveredAmount.Amount.Multiply(\n            this.percentage,\n            {\n              resultOptions: defaultCurrencyOptions,\n              truncEnabled: percentageOptions.truncEnabled,\n            }\n          );\n          if (premium.Value.IsPositive === false) {\n            premium = new Decimal();\n            responsible = NoCoveragePaymentResponsible;\n          }\n          return NewRateResult({\n            premiumAmount: new Currency({\n              value: premium,\n              type: input.CartInfo.CoveredAmount.Type,\n            }),\n            paymentResponsible: responsible,\n          });\n        },\n      },\n    ]);\n    return PercentageRateRule;\n  })(RateRule);\n  /*\n  const coveredExample1 = new Currency({currency: \'USD\', amount: 23.45});\n  const coveredExample2 = new Currency({amount: 23.45});\n  const exchangeRateExample1 = new ExchangeRate({from: \'CAD\', rate: 5.67});\n  */ function quote(\n    covered,\n    exchangeRate\n  ) {\n    assertCurrencyIsValid(covered);\n    var finalExchangeRate = assertExchangeRateIsValid(\n      !isNull(exchangeRate) || backendExchangeRate\n    );\n    return backendRateRule.Rate(\n      {},\n      new Input({\n        cartInfo: new CartInfo({ coveredAmount: covered }),\n        coverageAgreement: assertCoverageAgreementIsValid(\n          backendCoverageAgreement\n        ),\n        exchangeRateProvider: new LocalExchangeRateProvider(finalExchangeRate),\n      })\n    );\n  }\n  /* NewRateResult must return what expected by front-end */ function NewRateResult() {\n    var _ref8 =\n        arguments.length > 0 && arguments[0] !== undefined\n          ? arguments[0]\n          : {\n              premiumAmount: new Currency(),\n              paymentResponsible: NoCoveragePaymentResponsible,\n            },\n      _ref8$premiumAmount = _ref8.premiumAmount,\n      premiumAmount =\n        _ref8$premiumAmount === void 0 ? new Currency() : _ref8$premiumAmount,\n      _ref8$paymentResponsi = _ref8.paymentResponsible,\n      paymentResponsible =\n        _ref8$paymentResponsi === void 0\n          ? NoCoveragePaymentResponsible\n          : _ref8$paymentResponsi;\n    return {\n      premium: {\n        currency: premiumAmount.Type,\n        amount: premiumAmount.Amount.ToNumber(),\n      },\n      payment_responsible: paymentResponsible,\n    };\n  }\n  var NoCoverageResult = NewRateResult();\n  const backendCoverageAgreement = Object.freeze({\n    UpperLimit: new Decimal(5000.0, { precision: 2, truncEnabled: true }),\n    LowerLimit: new Decimal(0.0, { precision: 2, truncEnabled: true }),\n    IsProtectEnabled: true,\n  });\n  var backendExchangeRate = new ExchangeRate();\n  const backendRateRule = new ConditionalRateRule({\n    condition: new AndCondition([\n      new Condition((ctx, input) => {\n        return input.CartInfo.CoveredAmount.Amount.GreaterThan(\n          new Decimal(0.0, { precision: 2, truncEnabled: true })\n        );\n      }),\n      new Condition((ctx, input) => {\n        return input.CartInfo.CoveredAmount.Amount.LessThanOrEquals(\n          new Decimal(100.0, { precision: 2, truncEnabled: true })\n        );\n      }),\n    ]),\n    rateRule: new FixedAmountRateRule({\n      premiumAmount: new Currency({\n        type: "USD",\n        value: new Decimal(0.98, { precision: 2, truncEnabled: false }),\n      }),\n      paymentResponsible: CustomerPaymentResponsible(true),\n    }),\n    fallbackRateRule: new ConditionalRateRule({\n      condition: new AndCondition([\n        new Condition((ctx, input) => {\n          return input.CartInfo.CoveredAmount.Amount.GreaterThan(\n            new Decimal(100.0, { precision: 2, truncEnabled: true })\n          );\n        }),\n        new Condition((ctx, input) => {\n          return input.CartInfo.CoveredAmount.Amount.LessThanOrEquals(\n            new Decimal(500.0, { precision: 2, truncEnabled: true })\n          );\n        }),\n      ]),\n      rateRule: new PercentageRateRule({\n        percentage: new Decimal(0.01, { precision: 4, truncEnabled: false }),\n        paymentResponsible: MerchantPaymentResponsible,\n      }),\n      fallbackRateRule: new ConditionalRateRule({\n        condition: new AndCondition([\n          new Condition((ctx, input) => {\n            return input.CartInfo.CoveredAmount.Amount.GreaterThan(\n              new Decimal(500.0, { precision: 2, truncEnabled: true })\n            );\n          }),\n          new Condition((ctx, input) => {\n            return input.CartInfo.CoveredAmount.Amount.LessThanOrEquals(\n              new Decimal(5000.0, { precision: 2, truncEnabled: true })\n            );\n          }),\n        ]),\n        rateRule: new PercentageRateRule({\n          percentage: new Decimal(0.03, { precision: 4, truncEnabled: false }),\n          paymentResponsible: CustomerPaymentResponsible(false),\n        }),\n        fallbackRateRule: NoCoverageRateRule,\n      }),\n    }),\n  });\n  \n  window.__Route = { quote, Currency, backendExchangeRate } })();'),
        (n.quoteFunctionFallbackJS =
          '(function() { \n    const percentageOptions = Object.freeze({ precision: 4, truncEnabled: false });\n    const defaultCurrencyOptions = Object.freeze({\n      precision: 2,\n      truncEnabled: false,\n    });\n    const defaultDecimalOptions = Object.freeze({\n      precision: 2,\n      truncEnabled: true,\n    });\n    const defaultExchangeRateOptions = Object.freeze({\n      precision: 6,\n      truncEnabled: false,\n    });\n    const defaultCurrencyType = Object.freeze("USD");\n    ("use strict");\n    function _typeof(obj) {\n      "@babel/helpers - typeof";\n      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {\n        _typeof = function _typeof(obj) {\n          return typeof obj;\n        };\n      } else {\n        _typeof = function _typeof(obj) {\n          return obj &&\n            typeof Symbol === "function" &&\n            obj.constructor === Symbol &&\n            obj !== Symbol.prototype\n            ? "symbol"\n            : typeof obj;\n        };\n      }\n      return _typeof(obj);\n    }\n    function ownKeys(object, enumerableOnly) {\n      var keys = Object.keys(object);\n      if (Object.getOwnPropertySymbols) {\n        var symbols = Object.getOwnPropertySymbols(object);\n        if (enumerableOnly)\n          symbols = symbols.filter(function (sym) {\n            return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n          });\n        keys.push.apply(keys, symbols);\n      }\n      return keys;\n    }\n    function _objectSpread(target) {\n      for (var i = 1; i < arguments.length; i++) {\n        var source = arguments[i] != null ? arguments[i] : {};\n        if (i % 2) {\n          ownKeys(Object(source), true).forEach(function (key) {\n            _defineProperty(target, key, source[key]);\n          });\n        } else if (Object.getOwnPropertyDescriptors) {\n          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n        } else {\n          ownKeys(Object(source)).forEach(function (key) {\n            Object.defineProperty(\n              target,\n              key,\n              Object.getOwnPropertyDescriptor(source, key)\n            );\n          });\n        }\n      }\n      return target;\n    }\n    function _defineProperty(obj, key, value) {\n      if (key in obj) {\n        Object.defineProperty(obj, key, {\n          value: value,\n          enumerable: true,\n          configurable: true,\n          writable: true,\n        });\n      } else {\n        obj[key] = value;\n      }\n      return obj;\n    }\n    function _inherits(subClass, superClass) {\n      if (typeof superClass !== "function" && superClass !== null) {\n        throw new TypeError("Super expression must either be null or a function");\n      }\n      subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: { value: subClass, writable: true, configurable: true },\n      });\n      if (superClass) _setPrototypeOf(subClass, superClass);\n    }\n    function _setPrototypeOf(o, p) {\n      _setPrototypeOf =\n        Object.setPrototypeOf ||\n        function _setPrototypeOf(o, p) {\n          o.__proto__ = p;\n          return o;\n        };\n      return _setPrototypeOf(o, p);\n    }\n    function _createSuper(Derived) {\n      var hasNativeReflectConstruct = _isNativeReflectConstruct();\n      return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived),\n          result;\n        if (hasNativeReflectConstruct) {\n          var NewTarget = _getPrototypeOf(this).constructor;\n          result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n          result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n      };\n    }\n    function _possibleConstructorReturn(self, call) {\n      if (call && (_typeof(call) === "object" || typeof call === "function")) {\n        return call;\n      }\n      return _assertThisInitialized(self);\n    }\n    function _assertThisInitialized(self) {\n      if (self === void 0) {\n        throw new ReferenceError(\n          "this hasn\'t been initialised - super() hasn\'t been called"\n        );\n      }\n      return self;\n    }\n    function _isNativeReflectConstruct() {\n      if (typeof Reflect === "undefined" || !Reflect.construct) return false;\n      if (Reflect.construct.sham) return false;\n      if (typeof Proxy === "function") return true;\n      try {\n        Boolean.prototype.valueOf.call(\n          Reflect.construct(Boolean, [], function () {})\n        );\n        return true;\n      } catch (e) {\n        return false;\n      }\n    }\n    function _getPrototypeOf(o) {\n      _getPrototypeOf = Object.setPrototypeOf\n        ? Object.getPrototypeOf\n        : function _getPrototypeOf(o) {\n            return o.__proto__ || Object.getPrototypeOf(o);\n          };\n      return _getPrototypeOf(o);\n    }\n    function _classCallCheck(instance, Constructor) {\n      if (!(instance instanceof Constructor)) {\n        throw new TypeError("Cannot call a class as a function");\n      }\n    }\n    function _defineProperties(target, props) {\n      for (var i = 0; i < props.length; i++) {\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if ("value" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n      }\n    }\n    function _createClass(Constructor, protoProps, staticProps) {\n      if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n      if (staticProps) _defineProperties(Constructor, staticProps);\n      return Constructor;\n    }\n    var Condition = /*#__PURE__*/ (function () {\n      function Condition(expression) {\n        _classCallCheck(this, Condition);\n        this.expression = assertNotNull(expression, "expression");\n      }\n      _createClass(Condition, [\n        {\n          key: "IsSatisfied",\n          value: function IsSatisfied(ctx, input) {\n            return this.expression(ctx, input);\n          },\n        },\n      ]);\n      return Condition;\n    })();\n    var CompositeCondition = /*#__PURE__*/ (function (_Condition) {\n      _inherits(CompositeCondition, _Condition);\n      var _super = _createSuper(CompositeCondition);\n      function CompositeCondition(expression, conditions) {\n        var _this;\n        _classCallCheck(this, CompositeCondition);\n        _this = _super.call(this, expression);\n        _this.conditions = assertNotNull(conditions, "conditions");\n        return _this;\n      }\n      return CompositeCondition;\n    })(Condition);\n    var RateRule = /*#__PURE__*/ (function () {\n      function RateRule() {\n        _classCallCheck(this, RateRule);\n      }\n      _createClass(\n        RateRule,\n        [\n          {\n            key: "Rate",\n            // eslint-disable-next-line class-methods-use-this\n            value: function Rate(ctx, input) {\n              assertNotNull(ctx);\n              assertNotNull(input);\n              throw new Error("this method must be overridden");\n            },\n          },\n        ],\n        [\n          {\n            key: "normalizeInputCurrency",\n            value: function normalizeInputCurrency(input) {\n              var covered = input.CartInfo.CoveredAmount;\n              var coveredCurrencyType = covered.Type;\n              if (coveredCurrencyType !== defaultCurrencyType) {\n                var exchangeRate = input.ExchangeRateProvider.FindExchangeRate(\n                  coveredCurrencyType,\n                  defaultCurrencyType\n                );\n                if (exchangeRate == null) {\n                  throw new Error(\n                    "no exchange rate found to convert in amount from type=["\n                      .concat(coveredCurrencyType, "] to ")\n                      .concat(defaultCurrencyType)\n                  );\n                }\n                return covered.Exchange(exchangeRate);\n              }\n              return covered;\n            },\n          },\n          {\n            key: "ValidateIfInputCanBeRated",\n            value: function ValidateIfInputCanBeRated(ctx, input) {\n              assertNotNull(input, "input");\n              assertCoverageAgreementIsValid(input.CoverageAgreement);\n              assertNotNull(input.CartInfo, "input.CartInfo");\n              assertCurrencyIsValid(input.CartInfo.CoveredAmount);\n              if (!input.CoverageAgreement.IsProtectEnabled) {\n                return false;\n              }\n              var covered = input.CartInfo.CoveredAmount;\n              if (covered.Amount.IsPositive === false) {\n                return false;\n              }\n              covered = RateRule.normalizeInputCurrency(input); // If in covered is below lower limit or greater than upper limit returns no coverage\n              if (covered.Amount.LessThan(input.CoverageAgreement.LowerLimit)) {\n                return false;\n              }\n              return !covered.Amount.GreaterThan(\n                input.CoverageAgreement.UpperLimit\n              );\n            },\n          },\n        ]\n      );\n      return RateRule;\n    })();\n    var AndCondition = /*#__PURE__*/ (function (_CompositeCondition) {\n      _inherits(AndCondition, _CompositeCondition);\n      var _super2 = _createSuper(AndCondition);\n      function AndCondition(conditions) {\n        var _this2;\n        _classCallCheck(this, AndCondition);\n        return (_this2 = _super2.call(\n          this,\n          function (ctx, input) {\n            return _this2.conditions.every(function (condition) {\n              return condition.IsSatisfied(ctx, input);\n            });\n          },\n          conditions\n        ));\n      }\n      return AndCondition;\n    })(CompositeCondition);\n    function isNull(o) {\n      return o === undefined || o === null;\n    }\n    function assertNotNull(o, objName) {\n      if (isNull(o)) {\n        throw new Error("object [".concat(objName, "] is mandatory"));\n      }\n      return o;\n    }\n    var CartInfo = /*#__PURE__*/ (function () {\n      function CartInfo(_ref) {\n        var _ref$coveredAmount = _ref.coveredAmount,\n          coveredAmount =\n            _ref$coveredAmount === void 0 ? new Currency() : _ref$coveredAmount;\n        _classCallCheck(this, CartInfo);\n        this.coveredAmount = coveredAmount;\n        this.coveredAmountUSD = null;\n      }\n      _createClass(CartInfo, [\n        {\n          key: "CoveredAmount",\n          get: function get() {\n            return this.coveredAmount;\n          },\n        },\n        {\n          key: "CoveredAmountInUSD",\n          value: function CoveredAmountInUSD(ctx, exchangeRateProvider) {\n            if (this.coveredAmountUSD === null) {\n              if (this.coveredAmount.Type === "USD") {\n                this.coveredAmountUSD = this.coveredAmount;\n              } else {\n                var exchangeRate = exchangeRateProvider.FindExchangeRate(\n                  ctx,\n                  this.coveredAmount.Type,\n                  defaultCurrencyType\n                );\n                this.coveredAmountUSD = this.coveredAmount.Exchange(exchangeRate);\n              }\n            }\n            return this.coveredAmountUSD;\n          },\n        },\n      ]);\n      return CartInfo;\n    })();\n    var ConditionalRateRule = /*#__PURE__*/ (function (_RateRule) {\n      _inherits(ConditionalRateRule, _RateRule);\n      var _super3 = _createSuper(ConditionalRateRule);\n      function ConditionalRateRule(_ref2) {\n        var _this3;\n        var _ref2$condition = _ref2.condition,\n          condition = _ref2$condition === void 0 ? null : _ref2$condition,\n          rateRule = _ref2.rateRule,\n          _ref2$fallbackRateRul = _ref2.fallbackRateRule,\n          fallbackRateRule =\n            _ref2$fallbackRateRul === void 0\n              ? NoCoverageRateRule\n              : _ref2$fallbackRateRul;\n        _classCallCheck(this, ConditionalRateRule);\n        _this3 = _super3.call(this);\n        _this3.condition = condition;\n        _this3.rateRule = assertNotNull(rateRule, "RateRule");\n        _this3.fallbackRateRule = assertNotNull(\n          fallbackRateRule,\n          "FallbackRateRule"\n        );\n        return _this3;\n      }\n      _createClass(ConditionalRateRule, [\n        {\n          key: "Rate",\n          value: function Rate(ctx, input) {\n            if (!RateRule.ValidateIfInputCanBeRated(ctx, input)) {\n              return NoCoverageResult;\n            }\n            if (isNull(this.condition) || this.condition.IsSatisfied(ctx, input)) {\n              return this.rateRule.Rate(ctx, input);\n            }\n            return this.fallbackRateRule.Rate(ctx, input);\n          },\n        },\n      ]);\n      return ConditionalRateRule;\n    })(RateRule);\n    function assertCoverageAgreementIsValid(a) {\n      if (isNull(a)) throw new Error("invalid null CoverageAgreement");\n      if (isNull(a.IsProtectEnabled))\n        throw new Error(\n          \'given CoverageAgreement does not have the "IsProtectEnabled" property\'\n        );\n      if (typeof a.IsProtectEnabled !== "boolean")\n        throw new Error(\n          "CoverageAgreement.IsProtectEnabled=[".concat(\n            a.IsProtectEnabled,\n            "] is not a boolean"\n          )\n        );\n      assertDecimalIsValid(a.UpperLimit);\n      assertDecimalIsValid(a.LowerLimit);\n      return a;\n    }\n    function assertCurrencyIsValid(c) {\n      if (isNull(c)) throw new Error("invalid null currency");\n      if (isNull(c.currencyType))\n        throw new Error(\'given currency does not have the "currencyType" property\');\n      assertDecimalIsValid(c.currencyValue);\n      return c;\n    }\n    var Currency = /*#__PURE__*/ (function () {\n      function Currency() {\n        var _ref3 =\n            arguments.length > 0 && arguments[0] !== undefined\n              ? arguments[0]\n              : {\n                  type: defaultCurrencyType,\n                  value: new Decimal(),\n                  currency: null,\n                  amount: null,\n                },\n          _ref3$type = _ref3.type,\n          type = _ref3$type === void 0 ? defaultCurrencyType : _ref3$type,\n          _ref3$value = _ref3.value,\n          value = _ref3$value === void 0 ? new Decimal() : _ref3$value,\n          _ref3$currency = _ref3.currency,\n          currency = _ref3$currency === void 0 ? null : _ref3$currency,\n          _ref3$amount = _ref3.amount,\n          amount = _ref3$amount === void 0 ? null : _ref3$amount;\n        _classCallCheck(this, Currency);\n        var finalValue = value;\n        if (amount !== null) finalValue = amount;\n        var finalType = type;\n        if (currency !== null) finalType = currency;\n        if (!(finalValue instanceof Decimal)) {\n          finalValue = new Decimal(\n            finalValue,\n            _objectSpread({}, defaultCurrencyOptions)\n          );\n        }\n        this.currencyType = finalType;\n        this.currencyValue = finalValue;\n      }\n      _createClass(Currency, [\n        {\n          key: "Type",\n          get: function get() {\n            return this.currencyType;\n          },\n        },\n        {\n          key: "Currency",\n          get: function get() {\n            return this.currencyType;\n          },\n        },\n        {\n          key: "Amount",\n          get: function get() {\n            return this.currencyValue;\n          },\n        },\n        {\n          key: "HasTheSameTypeAs",\n          value: function HasTheSameTypeAs(giveType) {\n            return giveType === this.currencyType;\n          },\n        },\n        {\n          key: "HasTheSameTypeAsTheOther",\n          value: function HasTheSameTypeAsTheOther(other) {\n            return this.HasTheSameTypeAs(other.currencyType);\n          },\n        },\n        {\n          key: "Exchange",\n          value: function Exchange(exchangeRate) {\n            if (this.HasTheSameTypeAs(exchangeRate.FromCurrencyType)) {\n              return new Currency({\n                type: exchangeRate.ToCurrencyType,\n                value: this.Amount.Multiply(exchangeRate.Rate, {\n                  resultOptions: defaultCurrencyOptions,\n                  truncEnabled: defaultExchangeRateOptions.truncEnabled,\n                }),\n              });\n            }\n            if (this.HasTheSameTypeAs(exchangeRate.ToCurrencyType)) {\n              return new Currency({\n                type: exchangeRate.FromCurrencyType,\n                value: this.Amount.Divide(exchangeRate.Rate, {\n                  resultOptions: defaultCurrencyOptions,\n                  truncEnabled: defaultExchangeRateOptions.truncEnabled,\n                }),\n              });\n            }\n            throw new Error(\n              "exchange rate cannot be used with currency type: "\n                .concat(this, ", ")\n                .concat(exchangeRate)\n            );\n          },\n        },\n      ]);\n      return Currency;\n    })();\n    function assertDecimalIsValid(d) {\n      if (isNull(d)) throw new Error("decimal is null");\n      if (isNull(d.value))\n        throw new Error(\'given decimal does not have the "value" property\');\n      if (typeof d.value !== "number")\n        throw new Error("decimal.value=[".concat(d.value, "] is not a number"));\n      if (isNull(d.options))\n        throw new Error(\'given decimal does not have the "options" property\');\n      if (isNull(d.options.precision))\n        throw new Error(\n          \'given decimal.options does not have the "precision" property\'\n        );\n      if (typeof d.options.precision !== "number")\n        throw new Error(\n          "decimal.options.precision=[".concat(\n            d.options.precision,\n            "] is not a number"\n          )\n        );\n      if (isNull(d.options.truncEnabled))\n        throw new Error(\n          \'given decimal.options does not have the "truncEnabled" property\'\n        );\n      if (typeof d.options.truncEnabled !== "boolean")\n        throw new Error(\n          "decimal.options.precision=[".concat(\n            d.options.truncEnabled,\n            "] is not a boolean"\n          )\n        );\n      return d;\n    }\n    var Decimal = /*#__PURE__*/ (function () {\n      function Decimal() {\n        var value =\n          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n        var options =\n          arguments.length > 1 && arguments[1] !== undefined\n            ? arguments[1]\n            : Object.freeze(defaultDecimalOptions);\n        _classCallCheck(this, Decimal);\n        if (options.asIs === true) {\n          var resolvedOptions = Decimal.assertOptionsIsValid(options);\n          this.value = value;\n          this.options = {\n            precision: resolvedOptions.precision,\n            truncEnabled: resolvedOptions.truncEnabled,\n          };\n        } else if (typeof value === "number") {\n          this.fromNumber(value, options);\n        } else if (typeof value === "string") {\n          this.fromString(value, options);\n        } else {\n          throw new Error(\n            "invalid data type=".concat(_typeof(value), " to create a decimal")\n          );\n        }\n      }\n      _createClass(\n        Decimal,\n        [\n          {\n            key: "Value",\n            get: function get() {\n              return this.value;\n            },\n          },\n          {\n            key: "IsZero",\n            get: function get() {\n              return this.value === 0;\n            },\n          },\n          {\n            key: "IsNegative",\n            get: function get() {\n              return this.value < 0;\n            },\n          },\n          {\n            key: "IsPositive",\n            get: function get() {\n              return this.value > 0;\n            }\n            /**\n             * Multiply expects an optional OperationOptions with the following properties:\n             *\n             * {   //specifies the options for the decimal created by Multiply\n             *     resultOptions Options // same as provided in the constructor\n             *     //specifies the truncation behavior\n             *     truncEnabled\n             * }\n             */,\n          },\n          {\n            key: "Multiply",\n            value: function Multiply(other) {\n              var operationOptions =\n                arguments.length > 1 && arguments[1] !== undefined\n                  ? arguments[1]\n                  : null;\n              var newOptions = _objectSpread({}, this.options);\n              var operationTruncEnabled = this.options.truncEnabled;\n              if (this.options.precision < other.options.precision) {\n                newOptions.precision = other.options.precision;\n              }\n              if (!isNull(operationOptions)) {\n                operationTruncEnabled = operationOptions.truncEnabled;\n                newOptions = Decimal.assertOptionsIsValid(\n                  operationOptions.resultOptions\n                );\n              }\n              var newValue = Decimal.adjustPrecision(\n                other.value * this.value,\n                this.options.precision + other.options.precision,\n                newOptions.precision,\n                operationTruncEnabled\n              );\n              return new Decimal(\n                newValue,\n                _objectSpread(_objectSpread({}, newOptions), {}, { asIs: true })\n              );\n            },\n          },\n          {\n            key: "Divide",\n            value: function Divide(other) {\n              var operationOptions =\n                arguments.length > 1 && arguments[1] !== undefined\n                  ? arguments[1]\n                  : null;\n              var newOptions = _objectSpread({}, this.options);\n              var operationTruncEnabled = this.options.truncEnabled;\n              if (this.options.precision < other.options.precision) {\n                newOptions.precision = other.options.precision;\n              }\n              if (!isNull(operationOptions)) {\n                operationTruncEnabled = operationOptions.truncEnabled;\n                newOptions = Decimal.assertOptionsIsValid(\n                  operationOptions.resultOptions\n                );\n              }\n              var left;\n              var newValue;\n              if (operationTruncEnabled) {\n                left = Decimal.adjustPrecision(\n                  this.value,\n                  this.options.precision,\n                  newOptions.precision + other.options.precision,\n                  operationTruncEnabled\n                );\n                newValue = Math.trunc(left / other.value);\n              } else {\n                left = Decimal.adjustPrecision(\n                  this.value,\n                  this.options.precision,\n                  newOptions.precision + other.options.precision + 1,\n                  operationTruncEnabled\n                );\n                var roundValue = Decimal.roundValue(other.value < 0);\n                newValue = Math.trunc((left / other.value + roundValue) / 10);\n              }\n              return new Decimal(\n                newValue,\n                _objectSpread(_objectSpread({}, newOptions), {}, { asIs: true })\n              );\n            },\n          },\n          {\n            key: "Compare",\n            value: function Compare(other) {\n              var result = 0;\n              this.normalizeWith(other, function (v1, v2) {\n                result = v1 - v2;\n              });\n              return result;\n            },\n          },\n          {\n            key: "Equals",\n            value: function Equals(other) {\n              return this.Compare(other) === 0;\n            },\n          },\n          {\n            key: "LessThan",\n            value: function LessThan(other) {\n              return this.Compare(other) < 0;\n            },\n          },\n          {\n            key: "LessThanOrEquals",\n            value: function LessThanOrEquals(other) {\n              return this.Compare(other) <= 0;\n            },\n          },\n          {\n            key: "GreaterThan",\n            value: function GreaterThan(other) {\n              return this.Compare(other) > 0;\n            },\n          },\n          {\n            key: "GreaterThanOrEquals",\n            value: function GreaterThanOrEquals(other) {\n              return this.Compare(other) >= 0;\n            },\n          },\n          {\n            key: "fromNumber",\n            value: function fromNumber(num, options) {\n              var resolvedOptions = Decimal.assertOptionsIsValid(options);\n              var pow10 = Math.pow(10, resolvedOptions.precision);\n              this.options = resolvedOptions;\n              if (resolvedOptions.truncEnabled) {\n                this.value = Math.trunc(num * pow10);\n              } else {\n                var roundValue = Decimal.roundValue(num < 0);\n                this.value = Math.trunc((num * pow10 * 10 + roundValue) / 10);\n              }\n            },\n          },\n          {\n            key: "fromString",\n            value: function fromString(value, options) {\n              var parts = value.trim().split(".");\n              var numOfParts = parts.length;\n              if (numOfParts > 2) {\n                throw new Error(\n                  "given value=[".concat(\n                    value,\n                    "] has more than one decimal separator"\n                  )\n                );\n              }\n              var resolvedOptions = Decimal.assertOptionsIsValid(options);\n              var pow10 = Math.pow(10, resolvedOptions.precision);\n              if (numOfParts === 1 || parts[1].length === 0) {\n                var _integerPart = parseInt(parts[0], 10);\n                if (Number.isNaN(_integerPart)) {\n                  throw new Error(\n                    "given invalid integer value=[".concat(value, "]")\n                  );\n                }\n                this.value = _integerPart * pow10;\n                this.options = resolvedOptions;\n                return;\n              }\n              var offset = 1;\n              var integerPart = parts[0];\n              var decimalPart = parts[1];\n              var decimalSize = decimalPart.length;\n              if (decimalSize !== resolvedOptions.precision) {\n                if (decimalSize > resolvedOptions.precision) {\n                  decimalPart = decimalPart.substring(0, resolvedOptions.precision);\n                } else {\n                  offset = Math.pow(10, resolvedOptions.precision) - decimalSize;\n                }\n              }\n              var intPlusDec = parseInt(integerPart + decimalPart, 10);\n              if (Number.isNaN(intPlusDec)) {\n                throw new Error("given invalid integer value=[".concat(value, "]"));\n              }\n              this.value = intPlusDec * offset;\n              this.options = resolvedOptions;\n            },\n          },\n          {\n            key: "normalizeWith",\n            value: function normalizeWith(other, onNormalized) {\n              if (this.options.precision > other.options.precision) {\n                onNormalized(\n                  this.value,\n                  Decimal.adjustPrecision(\n                    other.value,\n                    other.options.precision,\n                    this.options.precision,\n                    other.options.truncEnabled\n                  )\n                );\n                return;\n              }\n              if (this.options.precision < other.options.precision) {\n                onNormalized(\n                  Decimal.adjustPrecision(\n                    this.value,\n                    this.options.precision,\n                    other.options.precision,\n                    this.options.truncEnabled\n                  ),\n                  other.value\n                );\n                return;\n              }\n              onNormalized(this.value, other.value);\n            },\n          },\n          {\n            key: "ToNumber",\n            value: function ToNumber() {\n              return this.value / Math.pow(10, this.options.precision);\n            },\n          },\n        ],\n        [\n          {\n            key: "roundValue",\n            value: function roundValue(negative) {\n              return negative ? -5 : 5;\n            },\n          },\n          {\n            key: "assertOptionsIsValid",\n            value: function assertOptionsIsValid(options) {\n              if (isNull(options)) {\n                return _objectSpread({}, defaultDecimalOptions);\n              }\n              return {\n                precision: Decimal.assertValidPrecision(options.precision),\n                truncEnabled: Decimal.assertValidTruncEnabled(options.truncEnabled),\n              };\n            },\n          },\n          {\n            key: "assertValidTruncEnabled",\n            value: function assertValidTruncEnabled(truncEnabled) {\n              if (isNull(truncEnabled)) {\n                return defaultDecimalOptions.truncEnabled;\n              }\n              if (typeof truncEnabled !== "boolean")\n                throw new Error("options.truncEnabled is not a boolean");\n              return truncEnabled;\n            },\n          },\n          {\n            key: "assertValidPrecision",\n            value: function assertValidPrecision(precision) {\n              if (isNull(precision)) {\n                return defaultDecimalOptions.precision;\n              }\n              if (typeof precision !== "number")\n                throw new Error("options.precision is not a number");\n              if (precision < 0)\n                throw new Error(\n                  "invalid negative precision=[".concat(precision, "]")\n                );\n              return Math.trunc(precision);\n            },\n          },\n          {\n            key: "adjustPrecision",\n            value: function adjustPrecision(\n              v,\n              currentPrecision,\n              newPrecision,\n              truncateEnabled\n            ) {\n              if (currentPrecision === newPrecision) {\n                return Math.trunc(v);\n              }\n              if (currentPrecision < newPrecision) {\n                var lShift10 = Math.pow(10, newPrecision - currentPrecision);\n                return Math.trunc(v * lShift10);\n              }\n              var rShift10 = Math.pow(10, currentPrecision - newPrecision);\n              if (truncateEnabled) {\n                return Math.trunc(v / rShift10);\n              }\n              var roundValue = Decimal.roundValue(v < 0);\n              return Math.trunc((v / (rShift10 / 10) + roundValue) / 10);\n            },\n          },\n        ]\n      );\n      return Decimal;\n    })();\n    function assertExchangeRateIsValid(rate) {\n      if (isNull(rate)) throw new Error("given exchange rate is null");\n      if (isNull(rate.to))\n        throw new Error(\'given exchange rate does not have the "to" property\');\n      if (isNull(rate.from))\n        throw new Error(\'given exchange rate does not have the "from" property\');\n      assertDecimalIsValid(rate.rate);\n      if (rate.to !== defaultCurrencyType && rate.from !== defaultCurrencyType) {\n        throw new Error(\n          \'exchange rate must have the "from" or "to" property with the currency type=[\'.concat(\n            defaultCurrencyType,\n            "]"\n          )\n        );\n      }\n      return rate;\n    }\n    var ExchangeRate = /*#__PURE__*/ (function () {\n      function ExchangeRate() {\n        var _ref4 =\n            arguments.length > 0 && arguments[0] !== undefined\n              ? arguments[0]\n              : {\n                  from: defaultCurrencyType,\n                  to: defaultCurrencyType,\n                  rate: new Decimal(1, defaultExchangeRateOptions),\n                },\n          _ref4$from = _ref4.from,\n          from = _ref4$from === void 0 ? defaultCurrencyType : _ref4$from,\n          _ref4$to = _ref4.to,\n          to = _ref4$to === void 0 ? defaultCurrencyType : _ref4$to,\n          _ref4$rate = _ref4.rate,\n          rate =\n            _ref4$rate === void 0\n              ? new Decimal(1, defaultExchangeRateOptions)\n              : _ref4$rate;\n        _classCallCheck(this, ExchangeRate);\n        var finalRate = rate;\n        if (!(rate instanceof Decimal))\n          finalRate = new Decimal(rate, defaultExchangeRateOptions);\n        this.to = to;\n        this.from = from;\n        this.rate = finalRate;\n      }\n      _createClass(ExchangeRate, [\n        {\n          key: "ToCurrencyType",\n          get: function get() {\n            return this.to;\n          },\n        },\n        {\n          key: "FromCurrencyType",\n          get: function get() {\n            return this.from;\n          },\n        },\n        {\n          key: "Rate",\n          get: function get() {\n            return this.rate;\n          },\n        },\n      ]);\n      return ExchangeRate;\n    })();\n    var one = new Decimal(1, { precision: 0 });\n    var LocalExchangeRateProvider = /*#__PURE__*/ (function () {\n      function LocalExchangeRateProvider() {\n        var exchangeRate =\n          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n        _classCallCheck(this, LocalExchangeRateProvider);\n        this.exchangeRate = exchangeRate;\n      }\n      _createClass(LocalExchangeRateProvider, [\n        {\n          key: "FindExchangeRate",\n          value: function FindExchangeRate(from, to) {\n            if (this.exchangeRate.ToCurrencyType === to) {\n              if (this.exchangeRate.FromCurrencyType === from) {\n                return this.exchangeRate;\n              }\n            } else if (this.exchangeRate.ToCurrencyType === from) {\n              if (this.exchangeRate.FromCurrencyType === to) {\n                return new ExchangeRate({\n                  from: from,\n                  to: to,\n                  rate: one.Divide(this.exchangeRate.Rate),\n                });\n              }\n            }\n            throw new Error(\n              "no exchange rate found from=".concat(from, " to=").concat(to)\n            );\n          },\n        },\n      ]);\n      return LocalExchangeRateProvider;\n    })();\n    var FixedAmountRateRule = /*#__PURE__*/ (function (_RateRule2) {\n      _inherits(FixedAmountRateRule, _RateRule2);\n      var _super4 = _createSuper(FixedAmountRateRule);\n      function FixedAmountRateRule(_ref5) {\n        var _this4;\n        var premiumAmount = _ref5.premiumAmount,\n          paymentResponsible = _ref5.paymentResponsible;\n        _classCallCheck(this, FixedAmountRateRule);\n        _this4 = _super4.call(this);\n        _this4.premiumAmount = premiumAmount;\n        _this4.paymentResponsible = paymentResponsible;\n        return _this4;\n      }\n      _createClass(FixedAmountRateRule, [\n        {\n          key: "Rate",\n          value: function Rate(ctx, input) {\n            if (!RateRule.ValidateIfInputCanBeRated(ctx, input)) {\n              return NewRateResult();\n            }\n            if (\n              this.premiumAmount.HasTheSameTypeAsTheOther(\n                input.CartInfo.CoveredAmount\n              )\n            ) {\n              return NewRateResult({\n                premiumAmount: this.premiumAmount,\n                paymentResponsible: this.paymentResponsible,\n              });\n            } // If fixed premium and covered amount have distinct currency types, then exchange rate should be used\n            var exchangeRate = input.ExchangeRateProvider.FindExchangeRate(\n              this.premiumAmount.Type,\n              input.CartInfo.CoveredAmount.Type\n            );\n            if (exchangeRate === null) {\n            }\n            var exchangedPremiumAmount = this.premiumAmount.Exchange(exchangeRate);\n            return NewRateResult({\n              premiumAmount: exchangedPremiumAmount,\n              paymentResponsible: this.paymentResponsible,\n            });\n          },\n        },\n      ]);\n      return FixedAmountRateRule;\n    })(RateRule);\n    var Input = /*#__PURE__*/ (function () {\n      function Input(_ref6) {\n        var cartInfo = _ref6.cartInfo,\n          exchangeRateProvider = _ref6.exchangeRateProvider,\n          coverageAgreement = _ref6.coverageAgreement;\n        _classCallCheck(this, Input);\n        this.cartInfo = assertNotNull(cartInfo);\n        this.exchangeRateProvider = assertNotNull(exchangeRateProvider);\n        this.coverageAgreement = assertNotNull(coverageAgreement);\n      }\n      _createClass(Input, [\n        {\n          key: "CartInfo",\n          get: function get() {\n            return this.cartInfo;\n          },\n        },\n        {\n          key: "ExchangeRateProvider",\n          get: function get() {\n            return this.exchangeRateProvider;\n          },\n        },\n        {\n          key: "CoverageAgreement",\n          get: function get() {\n            return this.coverageAgreement;\n          },\n        },\n      ]);\n      return Input;\n    })();\n    var NoCoverageRateRule = {\n      Rate: function Rate() {\n        return NoCoverageResult;\n      },\n    };\n    var NoCoveragePaymentResponsible = { type: "no_coverage" };\n    var MerchantPaymentResponsible = { type: "merchant" };\n    function CustomerPaymentResponsible() {\n      var toggleStatus =\n        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n      var state = "unchecked";\n      if (toggleStatus) {\n        state = "checked";\n      }\n      return { type: "customer", toggle_state: state };\n    }\n    var PercentageRateRule = /*#__PURE__*/ (function (_RateRule3) {\n      _inherits(PercentageRateRule, _RateRule3);\n      var _super5 = _createSuper(PercentageRateRule);\n      function PercentageRateRule(_ref7) {\n        var _this5;\n        var percentage = _ref7.percentage,\n          paymentResponsible = _ref7.paymentResponsible;\n        _classCallCheck(this, PercentageRateRule);\n        _this5 = _super5.call(this);\n        _this5.percentage = percentage;\n        _this5.paymentResponsible = paymentResponsible;\n        return _this5;\n      }\n      _createClass(PercentageRateRule, [\n        {\n          key: "Rate",\n          value: function Rate(ctx, input) {\n            if (!RateRule.ValidateIfInputCanBeRated(ctx, input)) {\n              return NewRateResult();\n            }\n            var responsible = this.paymentResponsible;\n            var premium = input.CartInfo.CoveredAmount.Amount.Multiply(\n              this.percentage,\n              {\n                resultOptions: defaultCurrencyOptions,\n                truncEnabled: percentageOptions.truncEnabled,\n              }\n            );\n            if (premium.Value.IsPositive === false) {\n              premium = new Decimal();\n              responsible = NoCoveragePaymentResponsible;\n            }\n            return NewRateResult({\n              premiumAmount: new Currency({\n                value: premium,\n                type: input.CartInfo.CoveredAmount.Type,\n              }),\n              paymentResponsible: responsible,\n            });\n          },\n        },\n      ]);\n      return PercentageRateRule;\n    })(RateRule);\n    /*\n    const coveredExample1 = new Currency({currency: \'USD\', amount: 23.45});\n    const coveredExample2 = new Currency({amount: 23.45});\n    const exchangeRateExample1 = new ExchangeRate({from: \'CAD\', rate: 5.67});\n    */ function quote(\n      covered,\n      exchangeRate\n    ) {\n      assertCurrencyIsValid(covered);\n      var finalExchangeRate = assertExchangeRateIsValid(\n        !isNull(exchangeRate) || backendExchangeRate\n      );\n      return backendRateRule.Rate(\n        {},\n        new Input({\n          cartInfo: new CartInfo({ coveredAmount: covered }),\n          coverageAgreement: assertCoverageAgreementIsValid(\n            backendCoverageAgreement\n          ),\n          exchangeRateProvider: new LocalExchangeRateProvider(finalExchangeRate),\n        })\n      );\n    }\n    /* NewRateResult must return what expected by front-end */ function NewRateResult() {\n      var _ref8 =\n          arguments.length > 0 && arguments[0] !== undefined\n            ? arguments[0]\n            : {\n                premiumAmount: new Currency(),\n                paymentResponsible: NoCoveragePaymentResponsible,\n              },\n        _ref8$premiumAmount = _ref8.premiumAmount,\n        premiumAmount =\n          _ref8$premiumAmount === void 0 ? new Currency() : _ref8$premiumAmount,\n        _ref8$paymentResponsi = _ref8.paymentResponsible,\n        paymentResponsible =\n          _ref8$paymentResponsi === void 0\n            ? NoCoveragePaymentResponsible\n            : _ref8$paymentResponsi;\n      return {\n        premium: {\n          currency: premiumAmount.Type,\n          amount: premiumAmount.Amount.ToNumber(),\n        },\n        payment_responsible: paymentResponsible,\n      };\n    }\n    var NoCoverageResult = NewRateResult();\n    const backendCoverageAgreement = Object.freeze({\n      UpperLimit: new Decimal(5000.0, { precision: 2, truncEnabled: true }),\n      LowerLimit: new Decimal(0.0, { precision: 2, truncEnabled: true }),\n      IsProtectEnabled: true,\n    });\n    var backendExchangeRate = new ExchangeRate();\n    const backendRateRule = new ConditionalRateRule({\n      condition: new AndCondition([\n        new Condition((ctx, input) => {\n          return input.CartInfo.CoveredAmount.Amount.GreaterThan(\n            new Decimal(0.0, { precision: 2, truncEnabled: true })\n          );\n        }),\n        new Condition((ctx, input) => {\n          return input.CartInfo.CoveredAmount.Amount.LessThanOrEquals(\n            new Decimal(100.0, { precision: 2, truncEnabled: true })\n          );\n        }),\n      ]),\n      rateRule: new FixedAmountRateRule({\n        premiumAmount: new Currency({\n            type: \'USD\',\n            value: new Decimal(0.98, {\n                precision: 2,\n                truncEnabled: false\n            })\n        }),\n        paymentResponsible: CustomerPaymentResponsible(false)\n      }),\n      fallbackRateRule: new ConditionalRateRule({\n          condition: new AndCondition([new Condition((ctx, input) => {\n              return input.CartInfo.CoveredAmountInUSD(ctx, input.ExchangeRateProvider).Amount.GreaterThan(new Decimal(100.00, {\n                  precision: 2,\n                  truncEnabled: true\n              }))\n          }), new Condition((ctx, input) => {\n              return input.CartInfo.CoveredAmountInUSD(ctx, input.ExchangeRateProvider).Amount.LessThanOrEquals(new Decimal(5000.00, {\n                  precision: 2,\n                  truncEnabled: true\n              }))\n          })]),\n          rateRule: new PercentageRateRule({\n              percentage: new Decimal(0.0150, {\n                  precision: 4,\n                  truncEnabled: false\n              }),\n              paymentResponsible: CustomerPaymentResponsible(false)\n          }),\n          fallbackRateRule: new PercentageRateRule({\n              percentage: new Decimal(0.0150, {\n                  precision: 4,\n                  truncEnabled: false\n              }),\n              paymentResponsible: CustomerPaymentResponsible(false)\n          })\n      }),\n    });\n    \n    window.__Route = { quote, Currency, backendExchangeRate } })();');
    },
    bRtl: function (e, n, t) {
      "use strict";
      function r(e, n) {
        !i.isUndefined(e) &&
          i.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = n);
      }
      var o,
        i = t("ovh1"),
        a = t("71kK"),
        u = { "Content-Type": "application/x-www-form-urlencoded" },
        s = {
          adapter:
            (("undefined" != typeof XMLHttpRequest ||
              ("undefined" != typeof process &&
                "[object process]" ===
                  Object.prototype.toString.call(process))) &&
              (o = t("zf4f")),
            o),
          transformRequest: [
            function (e, n) {
              return (
                a(n, "Accept"),
                a(n, "Content-Type"),
                i.isFormData(e) ||
                i.isArrayBuffer(e) ||
                i.isBuffer(e) ||
                i.isStream(e) ||
                i.isFile(e) ||
                i.isBlob(e)
                  ? e
                  : i.isArrayBufferView(e)
                  ? e.buffer
                  : i.isURLSearchParams(e)
                  ? (r(n, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString())
                  : i.isObject(e)
                  ? (r(n, "application/json;charset=utf-8"), JSON.stringify(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              if ("string" == typeof e)
                try {
                  e = JSON.parse(e);
                } catch (e) {}
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
        };
      (s.headers = { common: { Accept: "application/json, text/plain, */*" } }),
        i.forEach(["delete", "get", "head"], function (e) {
          s.headers[e] = {};
        }),
        i.forEach(["post", "put", "patch"], function (e) {
          s.headers[e] = i.merge(u);
        }),
        (e.exports = s);
    },
    cON5: function (e, n, t) {
      "use strict";
      var r = t("ovh1");
      e.exports = r.isStandardBrowserEnv()
        ? (function () {
            function e(e) {
              var n = e;
              return (
                t && (o.setAttribute("href", n), (n = o.href)),
                o.setAttribute("href", n),
                {
                  href: o.href,
                  protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                  host: o.host,
                  search: o.search ? o.search.replace(/^\?/, "") : "",
                  hash: o.hash ? o.hash.replace(/^#/, "") : "",
                  hostname: o.hostname,
                  port: o.port,
                  pathname:
                    "/" === o.pathname.charAt(0)
                      ? o.pathname
                      : "/" + o.pathname,
                }
              );
            }
            var n,
              t = /(msie|trident)/i.test(navigator.userAgent),
              o = document.createElement("a");
            return (
              (n = e(window.location.href)),
              function (t) {
                var o = r.isString(t) ? e(t) : t;
                return o.protocol === n.protocol && o.host === n.host;
              }
            );
          })()
        : function () {
            return !0;
          };
    },
    "ckl+": function (e, n, t) {
      "use strict";
      var r = function (e, n, t, r) {
          return new (t || (t = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? o(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(a, u);
            }
            s((r = r.apply(e, n || [])).next());
          });
        },
        o = function (e, n) {
          function t(t) {
            return function (a) {
              return (function (t) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; u; )
                  try {
                    if (
                      ((r = 1),
                      o &&
                        (i =
                          2 & t[0]
                            ? o.return
                            : t[0]
                            ? o.throw || ((i = o.return) && i.call(o), 0)
                            : o.next) &&
                        !(i = i.call(o, t[1])).done)
                    )
                      return i;
                    switch (((o = 0), i && (t = [2 & t[0], i.value]), t[0])) {
                      case 0:
                      case 1:
                        i = t;
                        break;
                      case 4:
                        return u.label++, { value: t[1], done: !1 };
                      case 5:
                        u.label++, (o = t[1]), (t = [0]);
                        continue;
                      case 7:
                        (t = u.ops.pop()), u.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = u.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== t[0] && 2 !== t[0]))
                        ) {
                          u = 0;
                          continue;
                        }
                        if (
                          3 === t[0] &&
                          (!i || (t[1] > i[0] && t[1] < i[3]))
                        ) {
                          u.label = t[1];
                          break;
                        }
                        if (6 === t[0] && u.label < i[1]) {
                          (u.label = i[1]), (i = t);
                          break;
                        }
                        if (i && u.label < i[2]) {
                          (u.label = i[2]), u.ops.push(t);
                          break;
                        }
                        i[2] && u.ops.pop(), u.trys.pop();
                        continue;
                    }
                    t = n.call(e, u);
                  } catch (e) {
                    (t = [6, e]), (o = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & t[0]) throw t[1];
                return { value: t[0] ? t[1] : void 0, done: !0 };
              })([t, a]);
            };
          }
          var r,
            o,
            i,
            a,
            u = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: t(0), throw: t(1), return: t(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
        };
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.MerchantRepository = void 0);
      var i = t("ssro"),
        a = t("uUrk"),
        u = t("/eOC"),
        s = t("aa5x");
      n.MerchantRepository = function () {
        var e = this;
        (this.getURL = function (e) {
          return e == i.Environment.Production
            ? "https://api.route.com"
            : "https://api-stage.route.com";
        }),
          (this.getCloudFrontQuoteURL = function (e) {
            return e == i.Environment.Production
              ? "https://protect-quote-q.route.com"
              : "https://protect-quote-q-stage.route.com";
          }),
          (this.getQuote = function (n, t, i, a, s, c) {
            return r(e, void 0, void 0, function () {
              var e, r, l, p;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return c
                      ? (
                          null ===
                            (p =
                              null === window || void 0 === window
                                ? void 0
                                : window.__Route) || void 0 === p
                            ? void 0
                            : p.quote
                        )
                        ? [3, 2]
                        : [4, this.setUpQuoteFunction(c, s, a)]
                      : [2, this.getQuoteLegacy(n, t, i, a, s)];
                  case 1:
                    o.sent(), (o.label = 2);
                  case 2:
                    return (
                      (e = u.roundNumber(Number(i), 2)),
                      (r = new window.__Route.Currency({ type: a, value: e })),
                      [
                        2,
                        {
                          premium: {
                            currency: (l = window.__Route.quote(r)).premium
                              .currency,
                            amount: l.premium.amount,
                          },
                          paymentResponsible: {
                            type: l.payment_responsible.type,
                            toggleState: l.payment_responsible.toggle_state,
                          },
                        },
                      ]
                    );
                }
              });
            });
          }),
          (this.createQuote = function (n, t, i, s, c, l) {
            return r(e, void 0, void 0, function () {
              var e, r, p, f;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    (e = this.getURL(l)),
                      (r = {
                        merchant_id: n,
                        cart: {
                          cart_ref: t || "",
                          covered: {
                            currency: c,
                            amount: u.roundNumber(Number(s), 2).toString(),
                          },
                          cart_items: i.map(function (e) {
                            return (
                              e.unit_price &&
                                (e.unit_price = u
                                  .roundNumber(Number(e.unit_price), 2)
                                  .toString()),
                              e
                            );
                          }),
                        },
                      }),
                      (o.label = 1);
                  case 1:
                    return (
                      o.trys.push([1, 3, , 4]),
                      [4, a.postRequest(e + "/v2/quotes", r)]
                    );
                  case 2:
                    return (
                      (p = o.sent().data),
                      [
                        2,
                        Promise.resolve({
                          id: p.id,
                          premium: p.premium,
                          payment_responsible: p.payment_responsible,
                        }),
                      ]
                    );
                  case 3:
                    return (
                      (f = o.sent()),
                      console.log("Error creating the Quote", f),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (this.getQuoteFunction = function (n, t, i) {
            return r(e, void 0, void 0, function () {
              var e;
              return o(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      r.trys.push([0, 2, , 3]),
                      (e = this.getCloudFrontQuoteURL(t)),
                      [
                        4,
                        a.getRequest(
                          e +
                            "/v2/quotes/function?merchant_id=" +
                            n +
                            "&currency=" +
                            i +
                            "&namespace=__Route"
                        ),
                      ]
                    );
                  case 1:
                    return [2, r.sent().data];
                  case 2:
                    return (
                      r.sent(),
                      console.log("Error getting quote for merchant " + n),
                      [2, s.quoteFunctionFallbackJS]
                    );
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (this.getQuoteLegacy = function (n, t, i, u, s) {
            return r(e, void 0, void 0, function () {
              var e, t;
              return o(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (e = this.getURL(s)),
                      [
                        4,
                        a.getRequest(
                          e +
                            "/v1/quote?subtotal=" +
                            i +
                            "&store_domain=" +
                            n +
                            "&currency=" +
                            u
                        ),
                      ]
                    );
                  case 1:
                    return (
                      (t = r.sent().data),
                      [
                        2,
                        Promise.resolve({
                          amountCoveredUSD: t.amountCoveredUSD,
                          coverageLowerLimit: t.coverageLowerLimit,
                          coverageUpperLimit: t.coverageUpperLimit,
                          currency: t.currency,
                          insurancePrice: t.insurance_price,
                          subTotalUSD: t.subtotal_usd,
                        }),
                      ]
                    );
                }
              });
            });
          }),
          (this.setUpQuoteFunction = function (n, t, i) {
            return r(e, void 0, void 0, function () {
              var e, r;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return [4, this.getQuoteFunction(n, t, i)];
                  case 1:
                    return (
                      (e = o.sent()),
                      ((r = document.createElement("script")).type =
                        "text/javascript"),
                      (r.textContent = e),
                      document.body.appendChild(r),
                      [2]
                    );
                }
              });
            });
          });
      };
    },
    czhI: function (e, n, t) {
      "use strict";
      e.exports = t("TDIH");
    },
    "dB+e": function (e, n, t) {
      "use strict";
      var r = function (e, n, t, r) {
          return new (t || (t = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? o(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(a, u);
            }
            s((r = r.apply(e, n || [])).next());
          });
        },
        o = function (e, n) {
          function t(t) {
            return function (a) {
              return (function (t) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; u; )
                  try {
                    if (
                      ((r = 1),
                      o &&
                        (i =
                          2 & t[0]
                            ? o.return
                            : t[0]
                            ? o.throw || ((i = o.return) && i.call(o), 0)
                            : o.next) &&
                        !(i = i.call(o, t[1])).done)
                    )
                      return i;
                    switch (((o = 0), i && (t = [2 & t[0], i.value]), t[0])) {
                      case 0:
                      case 1:
                        i = t;
                        break;
                      case 4:
                        return u.label++, { value: t[1], done: !1 };
                      case 5:
                        u.label++, (o = t[1]), (t = [0]);
                        continue;
                      case 7:
                        (t = u.ops.pop()), u.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = u.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== t[0] && 2 !== t[0]))
                        ) {
                          u = 0;
                          continue;
                        }
                        if (
                          3 === t[0] &&
                          (!i || (t[1] > i[0] && t[1] < i[3]))
                        ) {
                          u.label = t[1];
                          break;
                        }
                        if (6 === t[0] && u.label < i[1]) {
                          (u.label = i[1]), (i = t);
                          break;
                        }
                        if (i && u.label < i[2]) {
                          (u.label = i[2]), u.ops.push(t);
                          break;
                        }
                        i[2] && u.ops.pop(), u.trys.pop();
                        continue;
                    }
                    t = n.call(e, u);
                  } catch (e) {
                    (t = [6, e]), (o = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & t[0]) throw t[1];
                return { value: t[0] ? t[1] : void 0, done: !0 };
              })([t, a]);
            };
          }
          var r,
            o,
            i,
            a,
            u = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: t(0), throw: t(1), return: t(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
        };
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.AnalyticsConnector = void 0);
      var i = t("C4jd"),
        a = t("jbuc"),
        u = (function () {
          function e(e) {
            (this.events = []),
              (this.processingQueue = !1),
              (this.startTimer = 3500),
              (this.cookies = {
                sessionId: "_route_pa_sid",
                sessionStart: "_route_pa_session_start",
                cartCreated: "_route_pa_cart_created",
              }),
              (this.analyticsRepository = new i.AnalyticsRepository({
                environment: e.environment,
              }));
          }
          return (
            (e.prototype.sessionStart = function () {
              if (!a.getCookie(this.cookies.sessionId)) {
                var e = a.generateUUID(),
                  n = new Date().getTime();
                return (
                  a.setCookie(this.cookies.sessionId, e),
                  a.setCookie(this.cookies.sessionStart, n.toString()),
                  this.analyticsRepository.sessionStart(e, n)
                );
              }
            }),
            (e.prototype.sessionEnd = function (e, n) {
              var t = this;
              void 0 === n && (n = {});
              var r = this.getSessionId(),
                o = this.getSessionStartTime();
              return this.analyticsRepository
                .sessionEnd(r, e, o, n)
                .then(function () {
                  t.clearSession();
                });
            }),
            (e.prototype.clearSession = function () {
              a.deleteCookie(this.cookies.sessionId),
                a.deleteCookie(this.cookies.sessionStart),
                a.deleteCookie(this.cookies.cartCreated);
            }),
            (e.prototype.processQueue = function () {
              return r(this, void 0, void 0, function () {
                var e,
                  n = this;
                return o(this, function () {
                  return this.processingQueue
                    ? [2, !1]
                    : ((e = setInterval(function () {
                        return r(n, void 0, void 0, function () {
                          var n = this;
                          return o(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return this.events.length > 0
                                  ? [
                                      4,
                                      this.analyticsRepository
                                        .sendBulkEvents(
                                          this.events,
                                          this.getSessionId()
                                        )
                                        .then(function () {
                                          (n.events = []), clearInterval(e);
                                        })
                                        .catch(function () {
                                          n.processQueue();
                                        }),
                                    ]
                                  : [3, 2];
                              case 1:
                                t.sent(), (t.label = 2);
                              case 2:
                                return (this.processingQueue = !1), [2];
                            }
                          });
                        });
                      }, this.startTimer)),
                      (this.processingQueue = !0),
                      [2]);
                });
              });
            }),
            (e.prototype.trackEvent = function (e) {
              return this.analyticsRepository.sendEvent(e, this.getSessionId());
            }),
            (e.prototype.trackBulkEvent = function (e) {
              e && (this.events.push(e), this.processQueue());
            }),
            (e.prototype.getSessionId = function () {
              return a.getCookie(this.cookies.sessionId);
            }),
            (e.prototype.getSessionStartTime = function () {
              return a.getCookie(this.cookies.sessionStart);
            }),
            (e.prototype.hasSessionCreated = function () {
              var e = this.getSessionId();
              return null != e;
            }),
            (e.prototype.hasCartCreated = function () {
              var e = a.getCookie(this.cookies.cartCreated);
              return null != e;
            }),
            (e.prototype.getEvents = function () {
              return this.events;
            }),
            e
          );
        })();
      n.AnalyticsConnector = u;
    },
    e5jZ: function (e) {
      "use strict";
      e.exports = function (e) {
        return !(!e || !e.__CANCEL__);
      };
    },
    "fwl+": function (e, n, t) {
      "use strict";
      function r(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      var o = t("ovh1");
      e.exports = function (e, n, t) {
        if (!n) return e;
        var i;
        if (t) i = t(n);
        else if (o.isURLSearchParams(n)) i = n.toString();
        else {
          var a = [];
          o.forEach(n, function (e, n) {
            null != e &&
              (o.isArray(e) ? (n += "[]") : (e = [e]),
              o.forEach(e, function (e) {
                o.isDate(e)
                  ? (e = e.toISOString())
                  : o.isObject(e) && (e = JSON.stringify(e)),
                  a.push(r(n) + "=" + r(e));
              }));
          }),
            (i = a.join("&"));
        }
        if (i) {
          var u = e.indexOf("#");
          -1 !== u && (e = e.slice(0, u)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
        }
        return e;
      };
    },
    fxiE: function (e, n, t) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = t("hosL"),
        o = t("QRet"),
        i = t("xPuB"),
        a = t("+Gyt");
      n.default = function (e) {
        var n = e.textColor,
          t = e.backgroundColor,
          u = e.thresholdAmount,
          s = e.currency,
          c = e.sticky,
          l = e.hideOnScroll,
          p = e.fontSize,
          f = e.fontFamily,
          d = e.offering,
          h = e.position,
          v = e.closable,
          m = e.amount,
          y = o.useRef(),
          g = function () {
            a.Protection.trackBannerEvent(
              { amount: m, currency: s, thresholdAmount: u, offering: d },
              i.EventType.RenderBanner
            );
          },
          _ = function () {
            a.Protection.trackBannerEvent(
              { amount: m, currency: s, thresholdAmount: u, offering: d },
              i.EventType.BannerClose
            );
          };
        return (
          o.useEffect(function () {
            var e, n, t, r;
            null === (e = null == y ? void 0 : y.current) ||
              void 0 === e ||
              e.removeEventListener("route:banner:close", _, !1),
              null === (n = null == y ? void 0 : y.current) ||
                void 0 === n ||
                n.addEventListener("route:banner:close", _, !1),
              null === (t = null == y ? void 0 : y.current) ||
                void 0 === t ||
                t.removeEventListener("route:banner:rendered", g, !1),
              null === (r = null == y ? void 0 : y.current) ||
                void 0 === r ||
                r.addEventListener("route:banner:rendered", g, !1);
          }),
          r.h("route-protect-banner", {
            ref: y,
            textcolor: n,
            backgroundcolor: t,
            thresholdAmount: u,
            sticky: String(c),
            hideonscroll: String(l),
            fontsize: p,
            fontFamily: f,
            currency: s,
            offering: d,
            position: h,
            closable: String(v),
            amount: m,
          })
        );
      };
    },
    guUT: function (e, n, t) {
      "use strict";
      function r(e) {
        e.cancelToken && e.cancelToken.throwIfRequested();
      }
      var o = t("ovh1"),
        i = t("4OlW"),
        a = t("e5jZ"),
        u = t("bRtl");
      e.exports = function (e) {
        return (
          r(e),
          (e.headers = e.headers || {}),
          (e.data = i(e.data, e.headers, e.transformRequest)),
          (e.headers = o.merge(
            e.headers.common || {},
            e.headers[e.method] || {},
            e.headers
          )),
          o.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            function (n) {
              delete e.headers[n];
            }
          ),
          (e.adapter || u.adapter)(e).then(
            function (n) {
              return (
                r(e), (n.data = i(n.data, n.headers, e.transformResponse)), n
              );
            },
            function (n) {
              return (
                a(n) ||
                  (r(e),
                  n &&
                    n.response &&
                    (n.response.data = i(
                      n.response.data,
                      n.response.headers,
                      e.transformResponse
                    ))),
                Promise.reject(n)
              );
            }
          )
        );
      };
    },
    h1Um: function (e, n, t) {
      "use strict";
      var r = t("Rzld"),
        o = t("hUM7");
      e.exports = function (e, n) {
        return e && !r(n) ? o(e, n) : n;
      };
    },
    hUM7: function (e) {
      "use strict";
      e.exports = function (e, n) {
        return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e;
      };
    },
    hosL: function (e, n) {
      "use strict";
      function t(e, n) {
        for (var t in n) e[t] = n[t];
        return e;
      }
      function r(e) {
        var n = e.parentNode;
        n && n.removeChild(e);
      }
      function o(e, n, t) {
        var r,
          o,
          a,
          u = arguments,
          s = {};
        for (a in n)
          "key" == a ? (r = n[a]) : "ref" == a ? (o = n[a]) : (s[a] = n[a]);
        if (arguments.length > 3)
          for (t = [t], a = 3; a < arguments.length; a++) t.push(u[a]);
        if (
          (null != t && (s.children = t),
          "function" == typeof e && null != e.defaultProps)
        )
          for (a in e.defaultProps)
            void 0 === s[a] && (s[a] = e.defaultProps[a]);
        return i(e, s, r, o, null);
      }
      function i(e, n, t, r, o) {
        var i = {
          type: e,
          props: n,
          key: t,
          ref: r,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          constructor: void 0,
          __v: o,
        };
        return null == o && (i.__v = i), null != x.vnode && x.vnode(i), i;
      }
      function a(e) {
        return e.children;
      }
      function u(e, n) {
        (this.props = e), (this.context = n);
      }
      function s(e, n) {
        if (null == n) return e.__ ? s(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var t; n < e.__k.length; n++)
          if (null != (t = e.__k[n]) && null != t.__e) return t.__e;
        return "function" == typeof e.type ? s(e) : null;
      }
      function c(e) {
        var n, t;
        if (null != (e = e.__) && null != e.__c) {
          for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
            if (null != (t = e.__k[n]) && null != t.__e) {
              e.__e = e.__c.base = t.__e;
              break;
            }
          return c(e);
        }
      }
      function l(e) {
        ((!e.__d && (e.__d = !0) && O.push(e) && !p.__r++) ||
          T !== x.debounceRendering) &&
          ((T = x.debounceRendering) || k)(p);
      }
      function p() {
        for (var e; (p.__r = O.length); )
          (e = O.sort(function (e, n) {
            return e.__v.__b - n.__v.__b;
          })),
            (O = []),
            e.some(function (e) {
              var n, r, o, i, a, u, l;
              e.__d &&
                ((u = (a = (n = e).__v).__e),
                (l = n.__P) &&
                  ((r = []),
                  ((o = t({}, a)).__v = o),
                  (i = g(
                    l,
                    a,
                    o,
                    n.__n,
                    void 0 !== l.ownerSVGElement,
                    null,
                    r,
                    null == u ? s(a) : u
                  )),
                  _(r, a),
                  i != u && c(a)));
            });
      }
      function f(e, n, t, o, u, c, l, p, f, h) {
        var v,
          m,
          y,
          _,
          b,
          C,
          E,
          x = (o && o.__k) || N,
          P = x.length;
        for (
          f == I && (f = null != l ? l[0] : P ? s(o, 0) : null),
            t.__k = [],
            v = 0;
          v < n.length;
          v++
        )
          if (
            null !=
            (_ = t.__k[v] =
              null == (_ = n[v]) || "boolean" == typeof _
                ? null
                : "string" == typeof _ || "number" == typeof _
                ? i(null, _, null, null, _)
                : Array.isArray(_)
                ? i(a, { children: _ }, null, null, null)
                : null != _.__e || null != _.__c
                ? i(_.type, _.props, _.key, null, _.__v)
                : _)
          ) {
            if (
              ((_.__ = t),
              (_.__b = t.__b + 1),
              null === (y = x[v]) || (y && _.key == y.key && _.type === y.type))
            )
              x[v] = void 0;
            else
              for (m = 0; m < P; m++) {
                if ((y = x[m]) && _.key == y.key && _.type === y.type) {
                  x[m] = void 0;
                  break;
                }
                y = null;
              }
            (b = g(e, _, (y = y || I), u, c, l, p, f, h)),
              (m = _.ref) &&
                y.ref != m &&
                (E || (E = []),
                y.ref && E.push(y.ref, null, _),
                E.push(m, _.__c || b, _)),
              null != b
                ? (null == C && (C = b),
                  (f = d(e, _, y, x, l, b, f)),
                  h || "option" != t.type
                    ? "function" == typeof t.type && (t.__d = f)
                    : (e.value = ""))
                : f && y.__e == f && f.parentNode != e && (f = s(y));
          }
        if (((t.__e = C), null != l && "function" != typeof t.type))
          for (v = l.length; v--; ) null != l[v] && r(l[v]);
        for (v = P; v--; ) null != x[v] && w(x[v], x[v]);
        if (E) for (v = 0; v < E.length; v++) R(E[v], E[++v], E[++v]);
      }
      function d(e, n, t, r, o, i, a) {
        var u, s, c;
        if (void 0 !== n.__d) (u = n.__d), (n.__d = void 0);
        else if (o == t || i != a || null == i.parentNode)
          e: if (null == a || a.parentNode !== e) e.appendChild(i), (u = null);
          else {
            for (s = a, c = 0; (s = s.nextSibling) && c < r.length; c += 2)
              if (s == i) break e;
            e.insertBefore(i, a), (u = a);
          }
        return void 0 !== u ? u : i.nextSibling;
      }
      function h(e, n, t) {
        "-" === n[0]
          ? e.setProperty(n, t)
          : (e[n] =
              null == t
                ? ""
                : "number" != typeof t || j.test(n)
                ? t
                : t + "px");
      }
      function v(e, n, t, r, o) {
        var i, a;
        if ((o && "className" == n && (n = "class"), "style" === n))
          if ("string" == typeof t) e.style = t;
          else {
            if (("string" == typeof r && (e.style = r = ""), r))
              for (n in r) (t && n in t) || h(e.style, n, "");
            if (t) for (n in t) (r && t[n] === r[n]) || h(e.style, n, t[n]);
          }
        else
          "o" === n[0] && "n" === n[1]
            ? ((i = n !== (n = n.replace(/Capture$/, ""))),
              (a = n.toLowerCase()) in e && (n = a),
              (n = n.slice(2)),
              e.l || (e.l = {}),
              (e.l[n] = t),
              t
                ? r || e.addEventListener(n, m, i)
                : e.removeEventListener(n, m, i))
            : "list" !== n &&
              "tagName" !== n &&
              "form" !== n &&
              "type" !== n &&
              "size" !== n &&
              "download" !== n &&
              "href" !== n &&
              !o &&
              n in e
            ? (e[n] = null == t ? "" : t)
            : "function" != typeof t &&
              "dangerouslySetInnerHTML" !== n &&
              (n !== (n = n.replace(/xlink:?/, ""))
                ? null == t || !1 === t
                  ? e.removeAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      n.toLowerCase()
                    )
                  : e.setAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      n.toLowerCase(),
                      t
                    )
                : null == t || (!1 === t && !/^ar/.test(n))
                ? e.removeAttribute(n)
                : e.setAttribute(n, t));
      }
      function m(e) {
        this.l[e.type](x.event ? x.event(e) : e);
      }
      function y(e, n, t) {
        var r, o;
        for (r = 0; r < e.__k.length; r++)
          (o = e.__k[r]) &&
            ((o.__ = e),
            o.__e &&
              ("function" == typeof o.type && o.__k.length > 1 && y(o, n, t),
              (n = d(t, o, o, e.__k, null, o.__e, n)),
              "function" == typeof e.type && (e.__d = n)));
      }
      function g(e, n, r, o, i, s, c, l, p) {
        var d,
          h,
          v,
          m,
          g,
          _,
          R,
          w,
          E,
          P,
          O,
          k = n.type;
        if (void 0 !== n.constructor) return null;
        (d = x.__b) && d(n);
        try {
          e: if ("function" == typeof k) {
            if (
              ((w = n.props),
              (E = (d = k.contextType) && o[d.__c]),
              (P = d ? (E ? E.props.value : d.__) : o),
              r.__c
                ? (R = (h = n.__c = r.__c).__ = h.__E)
                : ("prototype" in k && k.prototype.render
                    ? (n.__c = h = new k(w, P))
                    : ((n.__c = h = new u(w, P)),
                      (h.constructor = k),
                      (h.render = C)),
                  E && E.sub(h),
                  (h.props = w),
                  h.state || (h.state = {}),
                  (h.context = P),
                  (h.__n = o),
                  (v = h.__d = !0),
                  (h.__h = [])),
              null == h.__s && (h.__s = h.state),
              null != k.getDerivedStateFromProps &&
                (h.__s == h.state && (h.__s = t({}, h.__s)),
                t(h.__s, k.getDerivedStateFromProps(w, h.__s))),
              (m = h.props),
              (g = h.state),
              v)
            )
              null == k.getDerivedStateFromProps &&
                null != h.componentWillMount &&
                h.componentWillMount(),
                null != h.componentDidMount && h.__h.push(h.componentDidMount);
            else {
              if (
                (null == k.getDerivedStateFromProps &&
                  w !== m &&
                  null != h.componentWillReceiveProps &&
                  h.componentWillReceiveProps(w, P),
                (!h.__e &&
                  null != h.shouldComponentUpdate &&
                  !1 === h.shouldComponentUpdate(w, h.__s, P)) ||
                  n.__v === r.__v)
              ) {
                (h.props = w),
                  (h.state = h.__s),
                  n.__v !== r.__v && (h.__d = !1),
                  (h.__v = n),
                  (n.__e = r.__e),
                  (n.__k = r.__k),
                  h.__h.length && c.push(h),
                  y(n, l, e);
                break e;
              }
              null != h.componentWillUpdate &&
                h.componentWillUpdate(w, h.__s, P),
                null != h.componentDidUpdate &&
                  h.__h.push(function () {
                    h.componentDidUpdate(m, g, _);
                  });
            }
            (h.context = P),
              (h.props = w),
              (h.state = h.__s),
              (d = x.__r) && d(n),
              (h.__d = !1),
              (h.__v = n),
              (h.__P = e),
              (d = h.render(h.props, h.state, h.context)),
              (h.state = h.__s),
              null != h.getChildContext &&
                (o = t(t({}, o), h.getChildContext())),
              v ||
                null == h.getSnapshotBeforeUpdate ||
                (_ = h.getSnapshotBeforeUpdate(m, g)),
              (O =
                null != d && d.type == a && null == d.key
                  ? d.props.children
                  : d),
              f(e, Array.isArray(O) ? O : [O], n, r, o, i, s, c, l, p),
              (h.base = n.__e),
              h.__h.length && c.push(h),
              R && (h.__E = h.__ = null),
              (h.__e = !1);
          } else
            null == s && n.__v === r.__v
              ? ((n.__k = r.__k), (n.__e = r.__e))
              : (n.__e = b(r.__e, n, r, o, i, s, c, p));
          (d = x.diffed) && d(n);
        } catch (e) {
          (n.__v = null), x.__e(e, n, r);
        }
        return n.__e;
      }
      function _(e, n) {
        x.__c && x.__c(n, e),
          e.some(function (n) {
            try {
              (e = n.__h),
                (n.__h = []),
                e.some(function (e) {
                  e.call(n);
                });
            } catch (e) {
              x.__e(e, n.__v);
            }
          });
      }
      function b(e, n, t, r, o, i, a, u) {
        var s,
          c,
          l,
          p,
          d,
          h = t.props,
          m = n.props;
        if (((o = "svg" === n.type || o), null != i))
          for (s = 0; s < i.length; s++)
            if (
              null != (c = i[s]) &&
              ((null === n.type ? 3 === c.nodeType : c.localName === n.type) ||
                e == c)
            ) {
              (e = c), (i[s] = null);
              break;
            }
        if (null == e) {
          if (null === n.type) return document.createTextNode(m);
          (e = o
            ? document.createElementNS("http://www.w3.org/2000/svg", n.type)
            : document.createElement(n.type, m.is && { is: m.is })),
            (i = null),
            (u = !1);
        }
        if (null === n.type) h !== m && e.data !== m && (e.data = m);
        else {
          if (
            (null != i && (i = N.slice.call(e.childNodes)),
            (l = (h = t.props || I).dangerouslySetInnerHTML),
            (p = m.dangerouslySetInnerHTML),
            !u)
          ) {
            if (null != i)
              for (h = {}, d = 0; d < e.attributes.length; d++)
                h[e.attributes[d].name] = e.attributes[d].value;
            (p || l) &&
              ((p && l && p.__html == l.__html) ||
                (e.innerHTML = (p && p.__html) || ""));
          }
          (function (e, n, t, r, o) {
            var i;
            for (i in t)
              "children" === i ||
                "key" === i ||
                i in n ||
                v(e, i, null, t[i], r);
            for (i in n)
              (o && "function" != typeof n[i]) ||
                "children" === i ||
                "key" === i ||
                "value" === i ||
                "checked" === i ||
                t[i] === n[i] ||
                v(e, i, n[i], t[i], r);
          })(e, m, h, o, u),
            p
              ? (n.__k = [])
              : ((s = n.props.children),
                f(
                  e,
                  Array.isArray(s) ? s : [s],
                  n,
                  t,
                  r,
                  "foreignObject" !== n.type && o,
                  i,
                  a,
                  I,
                  u
                )),
            u ||
              ("value" in m &&
                void 0 !== (s = m.value) &&
                s !== e.value &&
                v(e, "value", s, h.value, !1),
              "checked" in m &&
                void 0 !== (s = m.checked) &&
                s !== e.checked &&
                v(e, "checked", s, h.checked, !1));
        }
        return e;
      }
      function R(e, n, t) {
        try {
          "function" == typeof e ? e(n) : (e.current = n);
        } catch (e) {
          x.__e(e, t);
        }
      }
      function w(e, n, t) {
        var o, i, a;
        if (
          (x.unmount && x.unmount(e),
          (o = e.ref) && ((o.current && o.current !== e.__e) || R(o, null, n)),
          t || "function" == typeof e.type || (t = null != (i = e.__e)),
          (e.__e = e.__d = void 0),
          null != (o = e.__c))
        ) {
          if (o.componentWillUnmount)
            try {
              o.componentWillUnmount();
            } catch (e) {
              x.__e(e, n);
            }
          o.base = o.__P = null;
        }
        if ((o = e.__k)) for (a = 0; a < o.length; a++) o[a] && w(o[a], n, t);
        null != i && r(i);
      }
      function C(e, n, t) {
        return this.constructor(e, t);
      }
      function E(e, n, t) {
        var r, i, u;
        x.__ && x.__(e, n),
          (i = (r = t === A) ? null : (t && t.__k) || n.__k),
          (e = o(a, null, [e])),
          (u = []),
          g(
            n,
            ((r ? n : t || n).__k = e),
            i || I,
            I,
            void 0 !== n.ownerSVGElement,
            t && !r
              ? [t]
              : i
              ? null
              : n.childNodes.length
              ? N.slice.call(n.childNodes)
              : null,
            u,
            t || I,
            r
          ),
          _(u, e);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.options =
          n.__u =
          n.toChildArray =
          n.createContext =
          n.cloneElement =
          n.Component =
          n.isValidElement =
          n.createRef =
          n.Fragment =
          n.h =
          n.createElement =
          n.hydrate =
          n.render =
            void 0);
      var x,
        P,
        O,
        k,
        T,
        A,
        S,
        I = {},
        N = [],
        j = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      (n.options = x),
        (n.isValidElement = P),
        (n.createElement = o),
        (n.h = o),
        (n.createRef = function () {
          return { current: null };
        }),
        (n.Fragment = a),
        (n.Component = u),
        (n.toChildArray = function e(n, t) {
          return (
            (t = t || []),
            null == n ||
              "boolean" == typeof n ||
              (Array.isArray(n)
                ? n.some(function (n) {
                    e(n, t);
                  })
                : t.push(n)),
            t
          );
        }),
        (n.__u = w),
        (n.render = E),
        (n.hydrate = function (e, n) {
          E(e, n, A);
        }),
        (n.cloneElement = function (e, n, r) {
          var o,
            a,
            u,
            s = arguments,
            c = t({}, e.props);
          for (u in n)
            "key" == u ? (o = n[u]) : "ref" == u ? (a = n[u]) : (c[u] = n[u]);
          if (arguments.length > 3)
            for (r = [r], u = 3; u < arguments.length; u++) r.push(s[u]);
          return (
            null != r && (c.children = r),
            i(e.type, c, o || e.key, a || e.ref, null)
          );
        }),
        (n.createContext = function (e, n) {
          var t = {
            __c: (n = "__cC" + S++),
            __: e,
            Consumer: function (e, n) {
              return e.children(n);
            },
            Provider: function (e, t, r) {
              return (
                this.getChildContext ||
                  ((t = []),
                  ((r = {})[n] = this),
                  (this.getChildContext = function () {
                    return r;
                  }),
                  (this.shouldComponentUpdate = function (e) {
                    this.props.value !== e.value && t.some(l);
                  }),
                  (this.sub = function (e) {
                    t.push(e);
                    var n = e.componentWillUnmount;
                    e.componentWillUnmount = function () {
                      t.splice(t.indexOf(e), 1), n && n.call(e);
                    };
                  })),
                e.children
              );
            },
          };
          return (t.Provider.__ = t.Consumer.contextType = t);
        }),
        (n.options = x =
          {
            __e: function (e, n) {
              for (var t, r; (n = n.__); )
                if ((t = n.__c) && !t.__)
                  try {
                    if (
                      (t.constructor &&
                        null != t.constructor.getDerivedStateFromError &&
                        ((r = !0),
                        t.setState(t.constructor.getDerivedStateFromError(e))),
                      null != t.componentDidCatch &&
                        ((r = !0), t.componentDidCatch(e)),
                      r)
                    )
                      return l((t.__E = t));
                  } catch (n) {
                    e = n;
                  }
              throw e;
            },
          }),
        (n.isValidElement = P =
          function (e) {
            return null != e && void 0 === e.constructor;
          }),
        (u.prototype.setState = function (e, n) {
          var r;
          (r =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = t({}, this.state))),
            "function" == typeof e && (e = e(t({}, r), this.props)),
            e && t(r, e),
            null != e && this.__v && (n && this.__h.push(n), l(this));
        }),
        (u.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), l(this));
        }),
        (u.prototype.render = a),
        (O = []),
        (k =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (p.__r = 0),
        (A = I),
        (S = 0);
    },
    "hrw/": function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Alignment = n.Mode = void 0),
        (function (e) {
          (e.DarkMode = "dark"),
            (e.LightMode = "light"),
            (e.PurpleMode = "purple");
        })(n.Mode || (n.Mode = {})),
        (function (e) {
          (e.Center = "center"), (e.Left = "left"), (e.Right = "right");
        })(n.Alignment || (n.Alignment = {}));
    },
    i0F7: function (e, n, t) {
      "use strict";
      function r() {
        this.handlers = [];
      }
      var o = t("ovh1");
      (r.prototype.use = function (e, n) {
        return (
          this.handlers.push({ fulfilled: e, rejected: n }),
          this.handlers.length - 1
        );
      }),
        (r.prototype.eject = function (e) {
          this.handlers[e] && (this.handlers[e] = null);
        }),
        (r.prototype.forEach = function (e) {
          o.forEach(this.handlers, function (n) {
            null !== n && e(n);
          });
        }),
        (e.exports = r);
    },
    jR5A: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.extractDomain = void 0),
        (n.extractDomain = function (e) {
          return e.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0];
        });
    },
    jbuc: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.deleteCookie = n.getCookie = n.setCookie = n.generateUUID = void 0),
        (n.generateUUID = function () {
          var e = new Date().getTime(),
            n =
              (performance && performance.now && 1e3 * performance.now()) || 0;
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (t) {
              var r = 16 * Math.random();
              return (
                e > 0
                  ? ((r = (e + r) % 16 | 0), (e = Math.floor(e / 16)))
                  : ((r = (n + r) % 16 | 0), (n = Math.floor(n / 16))),
                ("x" === t ? r : (3 & r) | 8).toString(16)
              );
            }
          );
        }),
        (n.setCookie = function (e, n, t, r) {
          void 0 === t && (t = 7), void 0 === r && (r = "/");
          var o = new Date(Date.now() + 864e5 * t).toUTCString();
          document.cookie =
            e + "=" + encodeURIComponent(n) + "; expires=" + o + "; path=" + r;
        }),
        (n.getCookie = function (e) {
          var n = ("; " + document.cookie).split("; " + e + "=");
          if (2 === n.length) return n.pop().split(";").shift();
        }),
        (n.deleteCookie = function (e, t) {
          void 0 === t && (t = "/"), n.setCookie(e, "", -1, t);
        });
    },
    jzmo: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.blocklist = void 0),
        (n.blocklist = [
          "made-trade.myshopify.com",
          "www.bigstarlights.com",
          "www.bigstarlights.ca",
          "www.bbwheelsonline.com",
          "roosterteeth.myshopify.com",
          "store.roosterteeth.com",
          "littlewords.myshopify.com",
        ]);
    },
    m7yq: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.greenMerchantblocklist = n.legacylist = void 0),
        (n.legacylist = new Array()),
        (n.greenMerchantblocklist = [
          "merch_VzLkcO6Xx1gmPp7UrcRV",
          "merch_Iab6RdSWuWlVQuoHBfIq",
        ]);
    },
    mdyV: function (e, n, t) {
      "use strict";
      var r = Object.create
          ? function (e, n, t, r) {
              void 0 === r && (r = t),
                Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: function () {
                    return n[t];
                  },
                });
            }
          : function (e, n, t, r) {
              void 0 === r && (r = t), (e[r] = n[t]);
            },
        o = Object.create
          ? function (e, n) {
              Object.defineProperty(e, "default", { enumerable: !0, value: n });
            }
          : function (e, n) {
              e.default = n;
            },
        i = function (e) {
          if (e && e.__esModule) return e;
          var n = {};
          if (null != e)
            for (var t in e)
              "default" !== t && Object.hasOwnProperty.call(e, t) && r(n, e, t);
          return o(n, e), n;
        };
      Object.defineProperty(n, "__esModule", { value: !0 });
      var a = i(t("hosL")),
        u = a.h,
        s = a.render,
        c = function (e) {
          return e && e.default ? e.default : e;
        };
      if ("function" == typeof c(t("qVkA"))) {
        var l =
          document.getElementById("preact_root") ||
          document.body.firstElementChild;
        0,
          (function () {
            var e = c(t("qVkA")),
              n = {},
              r = document.querySelector('[type="__PREACT_CLI_DATA__"]');
            r && (n = JSON.parse(decodeURI(r.innerHTML)).preRenderData || n);
            var o;
            n.url && (o = n.url);
            l = s(u(e, { CLI_DATA: { preRenderData: n } }), document.body, l);
          })();
      }
    },
    ovh1: function (e, n, t) {
      "use strict";
      function r(e) {
        return "[object Array]" === l.call(e);
      }
      function o(e) {
        return void 0 === e;
      }
      function i(e) {
        return null !== e && "object" == typeof e;
      }
      function a(e) {
        if ("[object Object]" !== l.call(e)) return !1;
        var n = Object.getPrototypeOf(e);
        return null === n || n === Object.prototype;
      }
      function u(e) {
        return "[object Function]" === l.call(e);
      }
      function s(e, n) {
        if (null != e)
          if (("object" != typeof e && (e = [e]), r(e)))
            for (var t = 0, o = e.length; t < o; t++) n.call(null, e[t], t, e);
          else
            for (var i in e)
              Object.prototype.hasOwnProperty.call(e, i) &&
                n.call(null, e[i], i, e);
      }
      var c = t("5QbJ"),
        l = Object.prototype.toString;
      e.exports = {
        isArray: r,
        isArrayBuffer: function (e) {
          return "[object ArrayBuffer]" === l.call(e);
        },
        isBuffer: function (e) {
          return (
            null !== e &&
            !o(e) &&
            null !== e.constructor &&
            !o(e.constructor) &&
            "function" == typeof e.constructor.isBuffer &&
            e.constructor.isBuffer(e)
          );
        },
        isFormData: function (e) {
          return "undefined" != typeof FormData && e instanceof FormData;
        },
        isArrayBufferView: function (e) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && e.buffer instanceof ArrayBuffer;
        },
        isString: function (e) {
          return "string" == typeof e;
        },
        isNumber: function (e) {
          return "number" == typeof e;
        },
        isObject: i,
        isPlainObject: a,
        isUndefined: o,
        isDate: function (e) {
          return "[object Date]" === l.call(e);
        },
        isFile: function (e) {
          return "[object File]" === l.call(e);
        },
        isBlob: function (e) {
          return "[object Blob]" === l.call(e);
        },
        isFunction: u,
        isStream: function (e) {
          return i(e) && u(e.pipe);
        },
        isURLSearchParams: function (e) {
          return (
            "undefined" != typeof URLSearchParams &&
            e instanceof URLSearchParams
          );
        },
        isStandardBrowserEnv: function () {
          return (
            ("undefined" == typeof navigator ||
              ("ReactNative" !== navigator.product &&
                "NativeScript" !== navigator.product &&
                "NS" !== navigator.product)) &&
            "undefined" != typeof window &&
            "undefined" != typeof document
          );
        },
        forEach: s,
        merge: function e() {
          function n(n, o) {
            t[o] =
              a(t[o]) && a(n)
                ? e(t[o], n)
                : a(n)
                ? e({}, n)
                : r(n)
                ? n.slice()
                : n;
          }
          for (var t = {}, o = 0, i = arguments.length; o < i; o++)
            s(arguments[o], n);
          return t;
        },
        extend: function (e, n, t) {
          return (
            s(n, function (n, r) {
              e[r] = t && "function" == typeof n ? c(n, t) : n;
            }),
            e
          );
        },
        trim: function (e) {
          return e.replace(/^\s*/, "").replace(/\s*$/, "");
        },
        stripBOM: function (e) {
          return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
        },
      };
    },
    pCvA: function (e) {
      "use strict";
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    qVkA: function (e, n, t) {
      "use strict";
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }), t("IccH");
      var o = t("+Gyt"),
        i = t("W9DM"),
        a = t("ssro"),
        u = t("G3mm"),
        s = t("hrw/");
      r(window, {
        Route: {
          Protection: o.Protection,
          Coverage: i.Coverage,
          Environment: a.Environment,
          Options: u.Options,
          Theme: { Mode: s.Mode, Alignment: s.Alignment },
        },
      });
    },
    sBzF: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.UnrenderEventName =
          n.ModalOpenEventName =
          n.StatusChangeEventName =
          n.CreateQuoteEventName =
          n.GetQuoteEventName =
          n.RenderEventName =
          n.LoadEventName =
            void 0),
        (n.LoadEventName = "load"),
        (n.RenderEventName = "rendered"),
        (n.GetQuoteEventName = "get_quote"),
        (n.CreateQuoteEventName = "create_quote"),
        (n.StatusChangeEventName = "status_change"),
        (n.ModalOpenEventName = "modal_open"),
        (n.UnrenderEventName = "unrender");
    },
    ssro: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Environment = void 0),
        (function (e) {
          (e[(e.Dev = 0)] = "Dev"),
            (e[(e.Stage = 1)] = "Stage"),
            (e[(e.Sandbox = 2)] = "Sandbox"),
            (e[(e.Production = 3)] = "Production"),
            (e[(e.Test = 4)] = "Test");
        })(n.Environment || (n.Environment = {}));
    },
    tImM: function (e) {
      "use strict";
      function n(e) {
        this.message = e;
      }
      (n.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "");
      }),
        (n.prototype.__CANCEL__ = !0),
        (e.exports = n);
    },
    "uT+l": function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Status = void 0),
        (function (e) {
          (e[(e.Inactive = 0)] = "Inactive"), (e[(e.Active = 1)] = "Active");
        })(n.Status || (n.Status = {}));
    },
    uUrk: function (e, n, t) {
      "use strict";
      var r = function (e, n, t, r) {
          return new (t || (t = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? o(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(a, u);
            }
            s((r = r.apply(e, n || [])).next());
          });
        },
        o = function (e, n) {
          function t(t) {
            return function (a) {
              return (function (t) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; u; )
                  try {
                    if (
                      ((r = 1),
                      o &&
                        (i =
                          2 & t[0]
                            ? o.return
                            : t[0]
                            ? o.throw || ((i = o.return) && i.call(o), 0)
                            : o.next) &&
                        !(i = i.call(o, t[1])).done)
                    )
                      return i;
                    switch (((o = 0), i && (t = [2 & t[0], i.value]), t[0])) {
                      case 0:
                      case 1:
                        i = t;
                        break;
                      case 4:
                        return u.label++, { value: t[1], done: !1 };
                      case 5:
                        u.label++, (o = t[1]), (t = [0]);
                        continue;
                      case 7:
                        (t = u.ops.pop()), u.trys.pop();
                        continue;
                      default:
                        if (
                          !((i = u.trys),
                          (i = i.length > 0 && i[i.length - 1]) ||
                            (6 !== t[0] && 2 !== t[0]))
                        ) {
                          u = 0;
                          continue;
                        }
                        if (
                          3 === t[0] &&
                          (!i || (t[1] > i[0] && t[1] < i[3]))
                        ) {
                          u.label = t[1];
                          break;
                        }
                        if (6 === t[0] && u.label < i[1]) {
                          (u.label = i[1]), (i = t);
                          break;
                        }
                        if (i && u.label < i[2]) {
                          (u.label = i[2]), u.ops.push(t);
                          break;
                        }
                        i[2] && u.ops.pop(), u.trys.pop();
                        continue;
                    }
                    t = n.call(e, u);
                  } catch (e) {
                    (t = [6, e]), (o = 0);
                  } finally {
                    r = i = 0;
                  }
                if (5 & t[0]) throw t[1];
                return { value: t[0] ? t[1] : void 0, done: !0 };
              })([t, a]);
            };
          }
          var r,
            o,
            i,
            a,
            u = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: t(0), throw: t(1), return: t(2) }),
            "function" == typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
        },
        i = function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.putRequest =
          n.postRequest =
          n.deleteRequest =
          n.getRequest =
            void 0);
      var a = i(t("czhI"));
      (n.getRequest = function (e, n) {
        return r(void 0, void 0, void 0, function () {
          return o(this, function () {
            return [2, a.default.get(e, n)];
          });
        });
      }),
        (n.deleteRequest = function (e, n) {
          return r(void 0, void 0, void 0, function () {
            return o(this, function () {
              return [2, a.default.delete(e, n)];
            });
          });
        }),
        (n.postRequest = function (e, n, t) {
          return r(void 0, void 0, void 0, function () {
            return o(this, function () {
              return [2, a.default.post(e, n, t)];
            });
          });
        }),
        (n.putRequest = function (e, n, t) {
          return r(void 0, void 0, void 0, function () {
            return o(this, function () {
              return [2, a.default.put(e, n, t)];
            });
          });
        });
    },
    uahg: function (e, n, t) {
      "use strict";
      function r(e) {
        (this.defaults = e),
          (this.interceptors = { request: new a(), response: new a() });
      }
      var o = t("ovh1"),
        i = t("fwl+"),
        a = t("i0F7"),
        u = t("guUT"),
        s = t("Zrjs");
      (r.prototype.request = function (e) {
        "string" == typeof e
          ? ((e = arguments[1] || {}).url = arguments[0])
          : (e = e || {}),
          ((e = s(this.defaults, e)).method = e.method
            ? e.method.toLowerCase()
            : this.defaults.method
            ? this.defaults.method.toLowerCase()
            : "get");
        var n = [u, void 0],
          t = Promise.resolve(e);
        for (
          this.interceptors.request.forEach(function (e) {
            n.unshift(e.fulfilled, e.rejected);
          }),
            this.interceptors.response.forEach(function (e) {
              n.push(e.fulfilled, e.rejected);
            });
          n.length;

        )
          t = t.then(n.shift(), n.shift());
        return t;
      }),
        (r.prototype.getUri = function (e) {
          return (
            (e = s(this.defaults, e)),
            i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
          );
        }),
        o.forEach(["delete", "get", "head", "options"], function (e) {
          r.prototype[e] = function (n, t) {
            return this.request(
              s(t || {}, { method: e, url: n, data: (t || {}).data })
            );
          };
        }),
        o.forEach(["post", "put", "patch"], function (e) {
          r.prototype[e] = function (n, t, r) {
            return this.request(s(r || {}, { method: e, url: n, data: t }));
          };
        }),
        (e.exports = r);
    },
    vMO2: function (e, n, t) {
      "use strict";
      var r = t("ovh1");
      e.exports = r.isStandardBrowserEnv()
        ? {
            write: function (e, n, t, o, i, a) {
              var u = [];
              u.push(e + "=" + encodeURIComponent(n)),
                r.isNumber(t) && u.push("expires=" + new Date(t).toGMTString()),
                r.isString(o) && u.push("path=" + o),
                r.isString(i) && u.push("domain=" + i),
                !0 === a && u.push("secure"),
                (document.cookie = u.join("; "));
            },
            read: function (e) {
              var n = document.cookie.match(
                new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
              );
              return n ? decodeURIComponent(n[3]) : null;
            },
            remove: function (e) {
              this.write(e, "", Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
    },
    wthT: function (e, n, t) {
      "use strict";
      (function (e) {
        var r = function (e) {
          return e && e.__esModule ? e : { default: e };
        };
        Object.defineProperty(n, "__esModule", { value: !0 });
        var o = r(t("5+HP")),
          i = r(t("Z3s7")),
          a = r(t("AIuu")),
          u = (function () {
            if ("undefined" != typeof self) return self;
            if ("undefined" != typeof window) return window;
            if (void 0 !== e) return e;
            throw new Error("unable to locate global object");
          })();
        "function" != typeof u.Promise
          ? (u.Promise = o.default)
          : u.Promise.prototype.finally
          ? u.Promise.allSettled || (u.Promise.allSettled = a.default)
          : (u.Promise.prototype.finally = i.default);
      }).call(this, t("pCvA"));
    },
    xPuB: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.CustomEventType = n.EventType = void 0),
        (function (e) {
          (e.RenderWidget = "protect_widget_rendered"),
            (e.RenderModal = "protect_modal_rendered"),
            (e.RenderBanner = "protect_banner_rendered"),
            (e.BannerClose = "protect_banner_close"),
            (e.Load = "protect_core_loaded"),
            (e.PageView = "page_view"),
            (e.ModalActivate = "protect_modal_activate"),
            (e.ModalClick = "protect_modal_click"),
            (e.GetQuote = "get_premium"),
            (e.CalculateQuote = "calculate_premium"),
            (e.CartCreated = "cart_created"),
            (e.CheckoutComplete = "checkout_complete"),
            (e.StatusChange = "protect_status_change"),
            (e.NoMerchantIDFound = "no_merchant_id_found");
        })(n.EventType || (n.EventType = {})),
        (function (e) {
          (e[(e.Navigation = 1)] = "Navigation"),
            (e[(e.Location = 2)] = "Location"),
            (e[(e.Search = 3)] = "Search"),
            (e[(e.Transaction = 4)] = "Transaction"),
            (e[(e.UserContent = 5)] = "UserContent"),
            (e[(e.UserPreference = 6)] = "UserPreference"),
            (e[(e.Social = 7)] = "Social"),
            (e[(e.Other = 8)] = "Other");
        })(n.CustomEventType || (n.CustomEventType = {}));
    },
    xSFS: function (e, n, t) {
      "use strict";
      var r = t("ovh1"),
        o = [
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ];
      e.exports = function (e) {
        var n,
          t,
          i,
          a = {};
        return e
          ? (r.forEach(e.split("\n"), function (e) {
              if (
                ((i = e.indexOf(":")),
                (n = r.trim(e.substr(0, i)).toLowerCase()),
                (t = r.trim(e.substr(i + 1))),
                n)
              ) {
                if (a[n] && o.indexOf(n) >= 0) return;
                a[n] =
                  "set-cookie" === n
                    ? (a[n] ? a[n] : []).concat([t])
                    : a[n]
                    ? a[n] + ", " + t
                    : t;
              }
            }),
            a)
          : a;
      };
    },
    y4F4: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.timeout = void 0),
        (n.timeout = function (e) {
          return new Promise(function (n) {
            return setTimeout(function () {
              return n([]);
            }, e);
          });
        });
    },
    yQkV: function (e, n) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.routeBannerURLStaging =
          n.routeBannerURL =
          n.routeLightningWidgetURLStaging =
          n.routeLightningWidgetURL =
          n.routeWidgetLegacyURL =
          n.routeWidgetLegacyURLStaging =
            void 0),
        (n.routeWidgetLegacyURLStaging =
          "https://d1utpxf9eex2z7.cloudfront.net/protect.widget.js"),
        (n.routeWidgetLegacyURL =
          "https://d2orz5u5xt8hkm.cloudfront.net/protect.widget.js"),
        (n.routeLightningWidgetURL =
          "https://protect-lightning-bolt-widget.route.com/protect.widget.js"),
        (n.routeLightningWidgetURLStaging =
          "https://stage-protect-lightning-bolt-widget.route.com/protect.widget.js"),
        (n.routeBannerURL =
          "https://protect-banner.route.com/protect.banner.js"),
        (n.routeBannerURLStaging =
          "https://stage-protect-banner.route.com/protect.banner.js");
    },
    zf4f: function (e, n, t) {
      "use strict";
      var r = t("ovh1"),
        o = t("aECo"),
        i = t("vMO2"),
        a = t("fwl+"),
        u = t("h1Um"),
        s = t("xSFS"),
        c = t("cON5"),
        l = t("2KG9");
      e.exports = function (e) {
        return new Promise(function (n, t) {
          var p = e.data,
            f = e.headers;
          r.isFormData(p) && delete f["Content-Type"];
          var d = new XMLHttpRequest();
          if (e.auth) {
            var h = e.auth.username || "",
              v = e.auth.password
                ? unescape(encodeURIComponent(e.auth.password))
                : "";
            f.Authorization = "Basic " + btoa(h + ":" + v);
          }
          var m = u(e.baseURL, e.url);
          if (
            (d.open(
              e.method.toUpperCase(),
              a(m, e.params, e.paramsSerializer),
              !0
            ),
            (d.timeout = e.timeout),
            (d.onreadystatechange = function () {
              if (
                d &&
                4 === d.readyState &&
                (0 !== d.status ||
                  (d.responseURL && 0 === d.responseURL.indexOf("file:")))
              ) {
                var r =
                  "getAllResponseHeaders" in d
                    ? s(d.getAllResponseHeaders())
                    : null;
                o(n, t, {
                  data:
                    e.responseType && "text" !== e.responseType
                      ? d.response
                      : d.responseText,
                  status: d.status,
                  statusText: d.statusText,
                  headers: r,
                  config: e,
                  request: d,
                }),
                  (d = null);
              }
            }),
            (d.onabort = function () {
              d && (t(l("Request aborted", e, "ECONNABORTED", d)), (d = null));
            }),
            (d.onerror = function () {
              t(l("Network Error", e, null, d)), (d = null);
            }),
            (d.ontimeout = function () {
              var n = "timeout of " + e.timeout + "ms exceeded";
              e.timeoutErrorMessage && (n = e.timeoutErrorMessage),
                t(l(n, e, "ECONNABORTED", d)),
                (d = null);
            }),
            r.isStandardBrowserEnv())
          ) {
            var y =
              (e.withCredentials || c(m)) && e.xsrfCookieName
                ? i.read(e.xsrfCookieName)
                : void 0;
            y && (f[e.xsrfHeaderName] = y);
          }
          if (
            ("setRequestHeader" in d &&
              r.forEach(f, function (e, n) {
                void 0 === p && "content-type" === n.toLowerCase()
                  ? delete f[n]
                  : d.setRequestHeader(n, e);
              }),
            r.isUndefined(e.withCredentials) ||
              (d.withCredentials = !!e.withCredentials),
            e.responseType)
          )
            try {
              d.responseType = e.responseType;
            } catch (n) {
              if ("json" !== e.responseType) throw n;
            }
          "function" == typeof e.onDownloadProgress &&
            d.addEventListener("progress", e.onDownloadProgress),
            "function" == typeof e.onUploadProgress &&
              d.upload &&
              d.upload.addEventListener("progress", e.onUploadProgress),
            e.cancelToken &&
              e.cancelToken.promise.then(function (e) {
                d && (d.abort(), t(e), (d = null));
              }),
            p || (p = null),
            d.send(p);
        });
      };
    },
  });
});
