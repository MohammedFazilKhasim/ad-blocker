(async () => {
  const rulesets = ["ad_rules", "malware_rules", "redirect_rules"];
  try {
    await chrome.declarativeNetRequest.updateEnabledRulesets({
      disableRulesetIds: rulesets,
      enableRulesetIds: rulesets
    });
    console.log("Ad-bloc: Rulesets applied successfully.");
  } catch (e) {
    console.error("Ad-bloc: Failed to apply rulesets.", e);
  }
})();