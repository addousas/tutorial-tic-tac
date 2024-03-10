import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
const another_root = createRoot(document.getElementById("another_root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// another_root.render(
//     <StrictMode>
//       <App />
//     </StrictMode>
//   );