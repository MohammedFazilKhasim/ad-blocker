(function antiAntiAdblock() {
  // Fake some global variables that detect ad blockers
  window.__defineGetter__('abpDetected', () => false);
  window.__defineGetter__('hasAdBlock', () => false);

  // Prevent YouTube from seeing that we're hiding elements
  const origDescriptor = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight');
  Object.defineProperty(HTMLDivElement.prototype, 'offsetHeight', {
    configurable: false,
    get: function() {
      if (this.className && this.className.includes('ad')) {
        return origDescriptor.get.apply(this);
      }
      return 1;
    }
  });

})();

const adSelectors = [
  ".ad",
  ".ads",
  ".advertisement",
  ".banner-ad",
  ".ad-banner",
  ".ads-container",
  "[data-ad]",
  "[data-ads]",
  "iframe[src*='ads']",
  "iframe[src*='doubleclick']",
  "iframe[src*='googlesyndication']"
];

adSelectors.forEach(selector => {
  document.querySelectorAll(selector).forEach(el => {
    el.style.display = "none";
  });
});