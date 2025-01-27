import { Worker } from "@react-pdf-viewer/core";
import type { ReactNode } from "react";
import { Layout as RALayout, CheckForApplicationUpdate } from "react-admin";

export const Layout = ({ children }: { children: ReactNode }) => (
  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
    <RALayout>
      {children}
      <CheckForApplicationUpdate />
    </RALayout>
  </Worker>
);
