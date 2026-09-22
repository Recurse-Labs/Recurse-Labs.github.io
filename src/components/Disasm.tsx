import type { ReactNode } from "react";

const M = ({ c }: { c: ReactNode }) => <span className="a-mnem">{c}</span>;
const T = ({ c }: { c: ReactNode }) => <span className="threat-tok">{c}</span>;
const C = ({ c }: { c: ReactNode }) => <span className="a-com">{c}</span>;

type Line = { addr: string; code: ReactNode };

/** The loader from the incident record, annotated the way the workspace shows it. */
const LINES: Line[] = [
  { addr: "0x401000", code: <span className="a-label">{"<sub_401000>:"}</span> },
  { addr: "+0x00", code: <M c="endbr64" /> },
  { addr: "+0x04", code: <><M c="push" /> rbp</> },
  { addr: "+0x05", code: <><M c="mov" /> rbp, rsp</> },
  { addr: "+0x08", code: <><M c="sub" /> rsp, 0x40</> },
  { addr: "+0x0c", code: <><M c="call" /> resolve_api</> },
  { addr: "+0x11", code: <><M c="lea" /> rcx, [rip+0x2f1]</> },
  { addr: "+0x18", code: <T c={'"pipe://GL4471"'} /> },
  { addr: "+0x1f", code: <><M c="call" /> imp.CreateMutexA</> },
  { addr: "+0x25", code: <><M c="mov" /> eax, 0x9e3779b9 <C c="; xtea delta" /></> },
  { addr: "+0x2a", code: <><M c="xor" /> edx, edx</> },
  { addr: "+0x2c", code: <><M c="lea" /> rsi, [rbp-0x40] <C c="; config blob" /></> },
  { addr: "+0x30", code: <><M c="call" /> decrypt_config</> },
  { addr: "+0x36", code: <><M c="test" /> eax, eax</> },
  { addr: "+0x38", code: <><M c="je" /> 0x4010a0 <C c="; bail" /></> },
  { addr: "+0x3e", code: <><M c="lea" /> rcx, [rip+0x2d4]</> },
  { addr: "+0x45", code: <T c={'"Software/Run"'} /> },
  { addr: "+0x4c", code: <><M c="call" /> imp.RegSetValueExA</> },
  { addr: "+0x52", code: <><M c="call" /> imp.Sleep</> },
  { addr: "+0x58", code: <><M c="lea" /> rdi, [rbp-0x20]</> },
  { addr: "+0x5c", code: <><M c="call" /> beacon_init</> },
  { addr: "+0x62", code: <><M c="mov" /> rcx, rax</> },
  { addr: "+0x65", code: <><M c="call" /> imp.CreateProcessA</> },
  { addr: "+0x6b", code: <><M c="xor" /> eax, eax</> },
  { addr: "+0x6d", code: <M c="ret" /> },
];

const NOTES: Array<[string, string]> = [
  [
    "Call targets resolved",
    "Direct calls and jumps resolve to function names, so control flow reads without chasing addresses.",
  ],
  [
    "References resolved inline",
    "RIP-relative loads show the string or global they point at on the same line.",
  ],
  [
    "Indicators marked as such",
    "Strings that matter to an investigation are flagged in the listing, so they can be lifted straight into a rule.",
  ],
  [
    "Symbols readable",
    "Demangled C++ and Rust names are shortened to something a human can scan.",
  ],
];

export default function Disasm() {
  return (
    <section className="section" id="analysis">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">
            <b>0x03</b> / Analysis
            <span className="chip-status threat">
              <i />
              Threat context
            </span>
            <span className="pmeta">11 architectures</span>
          </p>
          <h2>Annotated disassembly, not a wall of hex.</h2>
          <p className="sub">
            The listing is the primary surface, and it is the same representation the agent
            reasons over. Indicators are marked where they appear, so nothing has to be lifted
            out by hand.
          </p>
        </div>

        <div className="two-col">
          <div data-reveal>
            <div className="readout">
              <div className="readout-bar">
                <span>sub_401000</span>
                <span className="spacer" />
                <span className="threat-tok">2 indicators</span>
                <span>25 instructions</span>
              </div>
              <pre className="readout-body">
                <code>
                  {LINES.map((l, i) => (
                    <span className="asm-line" key={i}>
                      <span className="a-addr">{l.addr}</span>
                      <span>{l.code}</span>
                    </span>
                  ))}
                </code>
              </pre>
            </div>
          </div>

          <div data-reveal>
            <ul className="ticks">
              {NOTES.map(([title, body]) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <br />
                  {body}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
