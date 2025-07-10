(async () => {
  try {
    const res = await fetch(process.env.REMOTE_RULES_URL);
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