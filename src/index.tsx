import React from "react";
import { createRoot } from "react-dom/client";
import { ShowGreet } from "./show-greet";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <ShowGreet bundlingPackage="webpack" username="Sarah" />
  </div>
);
