import { ActiveProductProvider } from "@/context/ActiveProductContext";
import { CategoryProvider } from "@/context/CategoryContext";
import { FilterContextProvider } from "@/context/FilterContext";
import ReactQueryProvider from "@/utils/providers/ReactQueryProvider";
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Fresh Goodies 🥦",
  description: "Go Eat Some Fresh Goodies 🥦",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <ActiveProductProvider>
          <CategoryProvider>
            <FilterContextProvider>
              <body className="font-sf-pro-display">{children}</body>
            </FilterContextProvider>
          </CategoryProvider>
        </ActiveProductProvider>
      </ReactQueryProvider>
    </html>
  );
}
