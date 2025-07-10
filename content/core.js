(function () {
  const selectors = [
    // General ads
    "[data-ad]",
    ".adsbygoogle",
    ".ad-container",
    "div[id^='google_ads_iframe']",
    "div[id*='_ad_container']",

    // YouTube homepage ads
    "ytd-display-ad-renderer",
    "ytd-promoted-video-renderer",
    "ytd-rich-item-renderer[is-ad]",
    "ytd-ad-slot-renderer",
    "#masthead-ad"
  ];

  function hideAds() {
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        el.style.setProperty("display", "none", "important");
        el.style.setProperty("visibility", "hidden", "important");
        el.style.setProperty("pointer-events", "none", "important");
      });
    });
  }

  new MutationObserver(hideAds).observe(document.body, { childList: true, subtree: true });
  hideAds();
})();
