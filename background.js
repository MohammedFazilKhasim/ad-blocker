if (typeof browser === "undefined") {
  var browser = chrome;
}

let ruleId = 1;

const transparentPixelUrl = "image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

const blockedDomains = [
  "doubleclick.net",
  "googlesyndication.com",
  "adservice.google.com",
  "analytics.google.com",
  "pagead2.googlesyndication.com",
  "taboola.com",
  "outbrain.com",
  "adbrite.com",
  "yieldmanager.com",
  "zedo.com",
  "popads.net",
  "propellerads.com"
];

const dynamicRules = blockedDomains.flatMap(domain => [
  {
    id: ruleId++,
    priority: 1,
    action: {
      type: "redirect",
      redirect: {
        url: transparentPixelUrl
      }
    },
    condition: {
      urlFilter: `||${domain}^$third-party`,
      resourceTypes: ["script", "image", "sub_frame"]
    }
  }
]);

browser.declarativeNetRequest.updateDynamicRules({
  addRules: dynamicRules,
  removeRuleIds: [...Array(ruleId).keys()]
});