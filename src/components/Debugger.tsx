const OPS = [
  "launch  path, args, cwd, env",
  "attach  pid",
  "break  address or symbol",
  "continue  until stop",
  "step  into, over, out",
  "registers  named, plus pc and sp",
  "read, write  memory",
  "stack, backtrace, threads",
  "detach, kill",
];

export default function Debugger() {
  return (
    <section className="section" id="debugger">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">
            <b>0x06</b> / Debugger
            <span className="chip-status">
              <i />
              Linux
            </span>
            <span className="pmeta">macOS · Windows in progress</span>
          </p>
          <h2>Confirm it against a running process.</h2>
          <p className="sub">
            Static analysis produces hypotheses. The debugger settles them. It is available to
            you and to the agent through the same set of operations, currently on Linux with
            macOS and Windows underway.
          </p>
        </div>

        <div className="two-col">
          <div data-reveal>
            <div className="readout">
              <div className="readout-bar">
                <span>Operations</span>
                <span className="spacer" />
                <span>debug</span>
              </div>
              <pre className="readout-body">
                <code>
                  {OPS.map((op, i) => (
                    <span key={op}>
                      {i > 0 ? "\n" : ""}
                      <span className="c">{op.split("  ")[0]}</span>
                      {"  "}
                      {op.split("  ")[1] ?? ""}
                    </span>
                  ))}
                </code>
              </pre>
            </div>
          </div>

          <div data-reveal>
            <ul className="ticks">
              <li>
                <strong>Breakpoints</strong>
                <br />
                Software and hardware, set by address or by symbol name.
              </li>
              <li>
                <strong>Full inspection</strong>
                <br />
                Registers, memory, stack, threads and a symbolised backtrace.
              </li>
              <li>
                <strong>Position independent targets</strong>
                <br />
                Runtime addresses are mapped back to static ones, so findings line up with the listing.
              </li>
              <li>
                <strong>Honest about permissions</strong>
                <br />
                When the platform forbids attaching, it says so and tells you what to change.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
