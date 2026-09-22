const ROWS: Array<[string, string, string, string]> = [
  ["functions, disasm, graph", "Yes", "Yes", "Identical result types, so the interface never changes."],
  ["xrefs, strings, imports, info", "Yes", "Yes", "Cross-references include data references, not only branches."],
  ["decompile", "No", "Yes", "Offered only when the selected engine can serve it."],
  ["console", "No", "Yes", "Direct access to the underlying engine."],
];

export default function Engine() {
  return (
    <section className="section" id="engines">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">
            <b>0x05</b> / Engines
            <span className="chip-status">
              <i />
              Swappable
            </span>
            <span className="pmeta">Apache-2.0</span>
          </p>
          <h2>Two backends, one interface.</h2>
          <p className="sub">
            Analysis runs behind a single contract. The agent and the interface both consume
            it, so changing engines changes capability without changing how you work.
          </p>
        </div>

        <div className="two-col">
          <div data-reveal>
            <span className="cell-label">Default</span>
            <h3 style={{ fontSize: 20, margin: "0 0 14px" }}>Built-in engine</h3>
            <p className="muted" style={{ marginTop: 0 }}>
              Parses executables and disassembles in process. Symbols, imports, strings,
              control flow and cross-references, with switch tables shown as case edges in the
              graph. Nothing to install and no companion process to babysit.
            </p>
            <div className="chips">
              <span>ELF</span>
              <span>PE</span>
              <span>Mach-O</span>
              <span>11 architectures</span>
            </div>
          </div>

          <div data-reveal>
            <span className="cell-label">Optional</span>
            <h3 style={{ fontSize: 20, margin: "0 0 14px" }}>radare2</h3>
            <p className="muted" style={{ marginTop: 0 }}>
              Install it and select it to drive the whole workspace through radare2 instead,
              adding decompilation and a raw console. It runs as a separate program and is
              never bundled or linked.
            </p>
            <div className="chips">
              <span>decompile</span>
              <span>console</span>
              <span>bring your own build</span>
            </div>
          </div>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Operation</th>
                <th>Built-in</th>
                <th>radare2</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([op, builtIn, r2, note]) => (
                <tr key={op}>
                  <td>
                    <code>{op}</code>
                  </td>
                  <td>{builtIn}</td>
                  <td>{r2}</td>
                  <td>{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
