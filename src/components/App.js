import React, { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Editor from "./Editor";
import Footer from "./Footer";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare
} from "@fortawesome/free-brands-svg-icons";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
     `);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          icon={faHtml5}
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          icon={faCss3Alt}
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          icon={faJsSquare}
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
