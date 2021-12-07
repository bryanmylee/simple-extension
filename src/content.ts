import browser from "webextension-polyfill";

export const content = async () => {
  browser.runtime.onMessage.addListener((request, sender) => {
    console.log("content.js received request:", request, sender);
  });

  try {
    const response = await browser.runtime.sendMessage({ greeting: "hello" });
    console.log("content.js received response:", response);
  } catch (error) {
    console.error(error);
  }
};

content();
