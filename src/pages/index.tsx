import { useEffect, useState } from "react";
import { parse_markdown } from "../../pkg/markdown_editor";

const Index = () => {
  const [inputMarkdown, setInputMarkdown] = useState("");
  const [previewHtml, setPreviewHtml] = useState("");

  useEffect(() => {
    const html = parse_markdown(inputMarkdown);
    setPreviewHtml(html);
  }, [inputMarkdown]);
  return (
    <div style={{ display: "flex" }}>
      <textarea
        name=""
        onChange={(e) => setInputMarkdown(e.target.value)}
        value={inputMarkdown}
      ></textarea>
      <div dangerouslySetInnerHTML={{ __html: previewHtml }}></div>
    </div>
  );
};

export default Index;
