import type { ReactNode } from "react";

const ITEMS: Array<[string, ReactNode]> = [
  [
    "A shared model, not a transcript",
    "Functions, cross-references, strings and the control-flow graph are state that the interface and the agent both read. Nothing is re-derived from text each turn.",
  ],
  [
    "Verification over generation",
    "A rename made by the agent appears in the listing, the graph and the call sites immediately. You accept or reject it in one gesture.",
  ],
  [
    "Built for large targets",
    "Real malware runs to ten thousand functions. Incremental indexing and retained findings hold up where re-pasting a decompilation does not.",
  ],
  [
    "Scriptable by design",
    "The engine is addressable, so runs can be repeated, forked, reset and compared rather than living in a single unrepeatable session.",
  ],
  [
    "Nothing leaves your machine",
    "Analysis is local. Routing is your choice, from a hosted endpoint to a model you host yourself, with no implicit upload of the sample.",
  ],
];

export default function Why() {
  return (
    <section className="section" id="principles">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">
            <b>0x07</b> / Principles
            <span className="chip-status">
              <i />
              Local first
            </span>
            <span className="pmeta">No sample exfiltration</span>
          </p>
          <h2>Why not an extension for something else.</h2>
          <p className="sub">
            Attaching a chatbot to a disassembler works for small puzzles and breaks on real
            software. These are the properties that make the difference.
          </p>
        </div>

        <div className="rows">
          {ITEMS.map(([title, body], i) => (
            <div className="row" key={title} data-reveal>
              <span className="row-idx">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
