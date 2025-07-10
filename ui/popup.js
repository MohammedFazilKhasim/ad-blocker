document.addEventListener("DOMContentLoaded", async () => {
  const status = document.getElementById("status");
  try {
    const res = await fetch("https://MohammedFazilKhasim.github.io/ad-blocker/rules/combined_rules.json");
    const rules = await res.json();
    status.textContent = `✅ ${rules.length} rules active.`;
  } catch (e) {
    status.textContent = "❌ Failed to fetch rules.";
  }
});