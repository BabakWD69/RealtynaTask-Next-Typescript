import React from "react";
import "./globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <section
          className="d-flex justify-content-center align-items-stretch"
          // style={{ height: "100vh" }}
        >
          <div className="px-5" style={{ width: "1440px" }}>
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}
