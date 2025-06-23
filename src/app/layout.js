"use client";

import "./globals.css";
import { FilterProvider } from "@/context/FilterContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FilterProvider>
          {children}
        </FilterProvider>
      </body>
    </html>
  );
}
