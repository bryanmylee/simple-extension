const fs = require("fs");
const pkg = require("./package.json");

const manifest = {
  manifest_version: 2,

  name: pkg.name,
  description: pkg.description,
  version: pkg.version,

  icons: {
    48: "images/icon-48.png",
    96: "images/icon-96.png",
    128: "images/icon-128.png",
    256: "images/icon-256.png",
    512: "images/icon-512.png",
  },

  background: {
    scripts: ["build/background.js"],
    persistent: false,
  },

  content_scripts: [
    {
      js: ["build/content.js"],
      matches: ["*://*/*"],
    },
  ],

  browser_action: {
    default_popup: "index.html",
    default_icon: {
      16: "images/toolbar-icon-16.png",
      19: "images/toolbar-icon-19.png",
      32: "images/toolbar-icon-32.png",
      38: "images/toolbar-icon-38.png",
    },
  },

  permissions: ["activeTab", "tabs"],
};

fs.writeFile(
  __dirname + "/public/manifest.json",
  JSON.stringify(manifest, null, "\t"),
  () => {}
);
