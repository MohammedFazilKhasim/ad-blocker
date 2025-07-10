(function () {
  function trySkipAd() {
    const video = document.querySelector(".html5-main-video");
    const skipBtn = document.querySelector(".ytp-ad-skip-button");

    if (skipBtn && skipBtn.offsetParent !== null) {
      console.log("Ad-bloc: Skipping ad");
      skipBtn.click();
    } else if (video && isFinite(video.duration) && video.currentTime < video.duration) {
      const adOverlay = document.querySelector(".ytp-ad-module");
      if (adOverlay) {
        console.log("Ad-bloc: Muting and fast-forwarding ad");
        video.muted = true;
        video.currentTime = video.duration;
      }
    }
  }

  const observer = new MutationObserver(() => trySkipAd());
  observer.observe(document.body, { childList: true, subtree: true });
  setInterval(trySkipAd, 1500);
})();
