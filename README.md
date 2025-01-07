### How to render a large PDF file on a webpage.

Chrome browser might not be able to handle large PDF file on it's own. Mozilla's pdfjs brings a solution to that issue.

#### Prepare the HTML template

Please see the [index.html](./index.html) file for more details.

#### Add your domain in the HOSTED_VIEWER_ORIGINS

Visit [app.js](./src//app.js) file. And find `HOSTED_VIEWER_ORIGINS`.

```js
const HOSTED_VIEWER_ORIGINS = [
  "null",
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

#### Publish the build files

```sh
npm publish --access=public
```
