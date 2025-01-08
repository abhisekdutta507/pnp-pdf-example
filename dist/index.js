import { run } from "./assets/pdf.js";

const fileURL = "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf";

const mounted = () => {
  run(fileURL);
};

document.blockUnblockOnload?.(true);

if (
  document.readyState === "interactive" ||
  document.readyState === "complete"
) {
  mounted();
} else {
  document.addEventListener("DOMContentLoaded", mounted, true);
}
