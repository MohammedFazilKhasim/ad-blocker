(async () => {
  try {
    const res = await fetch("https://MohammedFazilKhasim.github.io/ad-blocker/rules/combined_rules.json");
    const rules = await res.json();

    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: rules.map(r => r.id),
      addRules: rules
    });

    console.log("✅ Updated rules from remote source");
  } catch (e) {
    console.error("❌ Failed to update rules:", e);
  }
})();