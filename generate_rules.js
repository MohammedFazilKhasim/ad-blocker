const fs = require("fs");
const https = require("https");

const sources = [
  { name: "easylist", url: "https://easylist.to/easylist/easylist.txt" },
  { name: "easyprivacy", url: "https://easylist.to/easylist/easyprivacy.txt" },
  { name: "fanboy", url: "https://secure.fanboy.co.nz/fanboy-annoyance.txt" }
];

const convertLineToRule = (line, id) => {
  if (!line || line.startsWith("!") || line.startsWith("[") || line.includes("##")) return null;
  return {
    id,
    priority: 1,
    action: { type: "block" },
    condition: { urlFilter: line.trim() }
  };
};

(async () => {
  let rules = [];
  let id = 1;

  for (const source of sources) {
    const data = await new Promise((resolve, reject) => {
      https.get(source.url, res => {
        let raw = "";
        res.on("data", chunk => raw += chunk);
        res.on("end", () => resolve(raw));
      }).on("error", reject);
    });

    const lines = data.split("\n");
    for (const line of lines) {
      const rule = convertLineToRule(line, id);
      if (rule) rules.push(rule);
      id++;
    }
  }

  if (!fs.existsSync("rules")) fs.mkdirSync("rules");
  fs.writeFileSync("rules/combined_rules.json", JSON.stringify(rules, null, 2));
  console.log("✅ Rules generated: rules/combined_rules.json");
})();
