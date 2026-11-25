const LINES = [
  { n: 1, t: [["kw", "class"], ["txt", " "], ["cls", "DocumentRetriever"], ["txt", " {"]] },
  { n: 2, t: [["txt", "  "], ["kw", "private"], ["txt", " "], ["type", "ChromaStore"], ["txt", " vectorStore;"]] },
  { n: 3, t: [["txt", "  "], ["kw", "private"], ["txt", " "], ["type", "FaissIndex"], ["txt", " faissIndex;"]] },
  { n: 4, t: [] },
  { n: 5, t: [["txt", "  "], ["type", "List"], ["txt", "<"], ["type", "Chunk"], ["txt", "> "], ["fn", "search"], ["txt", "("], ["type", "String"], ["txt", " query) {"]] },
  { n: 6, t: [["txt", "    "], ["kw", "var"], ["txt", " embedding = "], ["var", "embedder"], ["txt", "."], ["fn", "encode"], ["txt", "(query);"]] },
  { n: 7, t: [["txt", "    "], ["kw", "return"], ["txt", " "], ["var", "faissIndex"], ["txt", "."], ["fn", "topK"], ["txt", "(embedding, "], ["num", "5"], ["txt", ");"]] },
  { n: 8, t: [["txt", "  }"]] },
  { n: 9, t: [["txt", "}"]] },
];

const TOKEN_COLOR = {
  kw: "var(--violet)",
  cls: "var(--amber)",
  type: "var(--accent)",
  fn: "#7dd3fc",
  var: "var(--ink)",
  num: "var(--amber)",
  txt: "var(--ink-dim)",
};

export default function CodeMockup() {
  return (
    <div className="code-mock">
      <div className="code-mock__bar">
        <span className="code-mock__dot" style={{ background: "#ff5f56" }} />
        <span className="code-mock__dot" style={{ background: "#ffbd2e" }} />
        <span className="code-mock__dot" style={{ background: "#27c93f" }} />
        <span className="code-mock__file mono">DocumentRetriever.java</span>
      </div>
      <pre className="code-mock__body mono">
        {LINES.map((line) => (
          <div className="code-mock__line" key={line.n}>
            <span className="code-mock__num">{line.n}</span>
            <span className="code-mock__code">
              {line.t.map((tok, i) => (
                <span key={i} style={{ color: TOKEN_COLOR[tok[0]] }}>
                  {tok[1]}
                </span>
              ))}
              {line.t.length === 0 ? " " : null}
            </span>
          </div>
        ))}
      </pre>
    </div>
  );
}
