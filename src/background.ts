import browser from "webextension-polyfill";

export const background = async () => {
  browser.runtime.onInstalled.addListener((details) => {
    console.log("background.ts installed due to:", details.reason);
  });
};

background();
