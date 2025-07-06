if (typeof browser === "undefined") {
  var browser = chrome;
}
let ruleId = 1;
const blockedDomains = [
  "doubleclick.net",
  "googlesyndication.com",
  "adservice.google.com",
  "analytics.google.com",
  "pagead2.googlesyndication.com"
];
const dynamicRules = blockedDomains.flatMap(domain => [
  {
    id: ruleId++,
    priority: 1,
    action: { type: "block" },
    condition: {
      urlFilter: `||${domain}`,
      resourceTypes: ["script", "image", "stylesheet", "font", "sub_frame"]
    }
  }
]);
browser.declarativeNetRequest.updateDynamicRules({
  addRules: dynamicRules,
  removeRuleIds: [...Array(ruleId).keys()]
});
