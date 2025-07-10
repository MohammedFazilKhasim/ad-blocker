(function () {
  window.addEventListener("beforeunload", e => {
    if (document.activeElement && document.activeElement.tagName === "A") {
      const href = document.activeElement.href;
      if (href && /malware|phish|redirect/.test(href)) {
        e.preventDefault();
        e.returnValue = "Redirect blocked by Ad-bloc.";
        return "Redirect blocked by Ad-bloc.";
      }
    }
  });
})();