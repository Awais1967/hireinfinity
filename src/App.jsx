import React from "react"
import { Footer } from "./layout/Footer";
import { Nav } from "./layout/Nav";
import { CaseStudies } from "./pages/CaseStudies";
import { Contact } from "./pages/Contact";
import { Engineers } from "./pages/Engineers";
import { Home } from "./pages/Home";
import { usePath } from "./hooks/usePath";

export default function App() {
  const path = usePath();
  const route = path.split("?")[0];

  let page = <Home />;
  if (route === "/engineers") page = <Engineers />;
  if (route === "/contact") page = <Contact />;
  if (route === "/case-studies") page = <CaseStudies />;

  return (
    <div className="flex min-h-screen flex-col bg-[#fafbfc] selection:bg-blue-600/30 selection:text-blue-200">
      <Nav path={route} />
      <main className="flex-grow">{page}</main>
      <Footer />
    </div>
  );
}
