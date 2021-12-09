# Simple extension

A simple cross-browser extension with Svelte as the popup controller.

## Building

### Chrome

Go to `chrome://extensions/`, and load `./public/` as an unpacked extension.

### Firefox

Go to `about:debugging#/runtime/this-firefox`, and load `./public/manifest.json` as a temporary add-on.

### Safari

Launch Safari, and enable `Develop > Allow Unsigned Extensions`.

Build the project, then run `npm run gen:safari`.

Open the generated `./safari/` project in Xcode and build the application. Then, run the application and enable the extension in Safari preferences.
