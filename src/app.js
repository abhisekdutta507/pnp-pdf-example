/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** @typedef {import("./interfaces.js").IL10n} IL10n */
// eslint-disable-next-line max-len
/** @typedef {import("../src/display/api.js").PDFDocumentProxy} PDFDocumentProxy */
// eslint-disable-next-line max-len
/** @typedef {import("../src/display/api.js").PDFDocumentLoadingTask} PDFDocumentLoadingTask */

import {
  animationStarted,
  apiPageLayoutToViewerModes,
  apiPageModeToSidebarView,
  AutoPrintRegExp,
  CursorTool,
  DEFAULT_SCALE_VALUE,
  getActiveOrFocusedElement,
  isValidRotation,
  isValidScrollMode,
  isValidSpreadMode,
  normalizeWheelEventDirection,
  parseQueryString,
  ProgressBar,
  RenderingStates,
  ScrollMode,
  SidebarView,
  SpreadMode,
  TextLayerMode,
} from "./ui_utils";
import {
  AnnotationEditorType,
  build,
  FeatureTest,
  getDocument,
  getFilenameFromUrl,
  getPdfFilenameFromUrl,
  GlobalWorkerOptions,
  InvalidPDFException,
  isDataScheme,
  isPdfFile,
  MissingPDFException,
  PDFWorker,
  shadow,
  stopEvent,
  TouchManager,
  UnexpectedResponseException,
  version,
} from "./pdfjs-dist/build/pdf.mjs";
import { AppOptions, OptionKind } from "./app_options";
import { EventBus, FirefoxEventBus } from "./event_utils";
import { ExternalServices, initCom, MLManager } from "./genericcom";
import {
  ImageAltTextSettings,
  NewAltTextManager,
} from "./stubs-geckoview";
import { LinkTarget, PDFLinkService } from './pdfjs-dist/web/pdf_viewer.mjs';
import { AltTextManager } from "./stubs-geckoview";
import { AnnotationEditorParams } from "./stubs-geckoview";
import { CaretBrowsingMode } from "./caret_browsing";
import { DownloadManager } from "./pdfjs-dist/web/pdf_viewer.mjs";
import { EditorUndoBar } from "./editor_undo_bar";
import { OverlayManager } from "./overlay_manager";
import { PasswordPrompt } from "./password_prompt";
import { PDFAttachmentViewer } from "./stubs-geckoview";
import { PDFCursorTools } from "./stubs-geckoview";
import { PDFDocumentProperties } from "./stubs-geckoview";
import { PDFFindBar } from "./stubs-geckoview";
import { PDFFindController } from "./pdf_find_controller";
import { PDFHistory } from "./pdf_history";
import { PDFLayerViewer } from "./stubs-geckoview";
import { PDFOutlineViewer } from "./stubs-geckoview";
import { PDFPresentationMode } from "./stubs-geckoview";
import { PDFPrintServiceFactory } from "./pdf_print_service";

// NEWER IMPORTS
// import { PDFRenderingQueue } from "./pdf_rendering_queue.js";
// import { PDFScriptingManager } from "./pdf_scripting_manager.js";
// import { PDFSidebar } from "web-pdf_sidebar";
// import { PDFThumbnailViewer } from "web-pdf_thumbnail_viewer";
// import { PDFViewer } from "./pdf_viewer.js";
// import { Preferences } from "web-preferences";
// import { SecondaryToolbar } from "web-secondary_toolbar";
// import { Toolbar } from "web-toolbar";
// import { ViewHistory } from "./view_history.js";

