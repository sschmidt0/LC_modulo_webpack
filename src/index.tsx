import React from "react";
import { createRoot } from "react-dom/client";
import { ShowGreet } from "./show-greet";
import { Button } from "@common/components";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <ShowGreet bundlingPackage="webpack" username="Sarah" />
    <Button onClick={() => console.log('Clicked')} text="Click me now!" />
  </div>
);
