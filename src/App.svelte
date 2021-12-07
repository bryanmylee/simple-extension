<script lang="ts">
  import { onMount } from "svelte";
  import browser from "webextension-polyfill";

  onMount(async () => {
    const [activeTab] = await browser.tabs.query({
      active: true,
      currentWindow: true,
    });
    const response = await browser.tabs.sendMessage(activeTab.id, {
      greeting: "hello",
    });
    console.log("main.js received response:", response);
  });
</script>

<main>
  <strong>Hello, world!</strong>
</main>
