const adSelectors = [
    ".ad-banner",
    ".advertisement",
    "[data-ad]",
    "[id*='ad']",
    "[class*='ad']",
    "iframe[src*='ads']"
];
adSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
        el.style.display = "none";
        el.remove();
    });
});
