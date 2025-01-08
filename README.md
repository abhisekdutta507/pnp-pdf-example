### How to render a large PDF file on a webpage.

Chrome browser might not be able to handle large PDF file on it's own. Mozilla's pdfjs brings a solution to that issue.

#### Prepare the HTML template

Please see the [index.html](./index.html) file for more details.

#### Add your domain in the HOSTED_VIEWER_ORIGINS

Visit [app.js](./src//app.js) file. And find `HOSTED_VIEWER_ORIGINS`.

```js
const HOSTED_VIEWER_ORIGINS = [
  "null",
  "http://localhost:4173",
  "http://localhost:5173",
  "http://mozilla.github.io",
  "https://mozilla.github.io",
];
```

#### Control what you want to display

Please see the [index.js](./src/index.js) file for more details.

```js
import { PDFViewerApplication } from "./app";

function getViewerConfiguration() {
  return {
    // ...
  };
};

function webViewerLoad() {
  const config = getViewerConfiguration();

  // ...

  /**
   * @description prepare the app options with defaultUrl
   */
  // Local URL
  AppOptions.set("defaultUrl", "http://localhost:5173/documents/example.pdf");
  // or https URL
  AppOptions.set("defaultUrl", "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf");
  // or Base64 string
  AppOptions.set("defaultUrl", "data:application/pdf;base64,");

  PDFViewerApplication.run(config);
}
```

#### Run the application

```sh
npm run dev
```

#### Launch the application

Visit [http://localhost:5173](http://localhost:5173) to see the result.

#### Generate a build

Before generating the build file we must change the [workerSrc]() in [app_options.js](./src//app_options.js).

##### Default `workerSrc`:

```js
const workerSrc = {
  /** @type {string} */
  value:
    // eslint-disable-next-line no-nested-ternary
    typeof PDFJSDev === "undefined"
      ? "../build/pdf.worker.mjs"
      : PDFJSDev.test("MOZCENTRAL")
        ? "resource://pdf.js/build/pdf.worker.mjs"
        : "../build/pdf.worker.mjs",
  kind: OptionKind.WORKER,
}
```

##### Build specific `workerSrc`:

```js
const workerSrc = {
  /** @type {string} */
  value:
    // eslint-disable-next-line no-nested-ternary
    typeof PDFJSDev === "undefined"
      ? "../assets/pdf.worker.mjs"
      : PDFJSDev.test("MOZCENTRAL")
        ? "resource://pdf.js/build/pdf.worker.mjs"
        : "../build/pdf.worker.mjs",
  kind: OptionKind.WORKER,
}
```

##### Run the build command

```sh
npm run build
```

#### Preview the build

```sh
npm run preview
```

Visit [http://localhost:4173](http://localhost:4173) to see the result.

### Do's

Make sure the dist contains the exact folder structure.

- assets
  - images
  - cursor-editorTextHighlight-*.svg
  - index-*.js
  - index-*.css
  - pdf.worker.js
- documents
  - example.pdf
- index.html
- pdf.png

The [index-*.js]() will point to [pdf.worker-*.js](). Make sure we rename the file to [pdf.worker.js](./dist/assets/pdf.worker.js).

Also, [index-*.js]() should be renamed as [pdf.js](./dist/assets/pdf.js). And [index-*.css]() to [styles.css](./dist/assets/styles.css).

### Execute the runner

```js
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
```

#### Publish the build files

```sh
npm publish --access=public
```

### Credits

1. [pdfjs](https://mozilla.github.io/pdf.js/examples/)

### Support

Tested in Chrome 131, Firefox 133, Safari 18, DuckDuckGo 1.118.0.
