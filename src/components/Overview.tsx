const TILES: Array<[string, string]> = [
  ["Static analysis", "Functions, cross-references, strings, imports and control flow recovered from ELF, PE and Mach-O targets."],
  ["Grounded agent", "The agent reads and writes the same objects you see on screen. Addresses are references, not prose it can invent."],
  ["Renames that persist", "A name propagates through the listing, the graph and the agent's context, and survives restarts."],
  ["Integrated debugger", "Launch, attach, break, step and read memory without leaving the workspace or the conversation."],
  ["Scales to real targets", "Function indexing is incremental. A ten-thousand-function binary opens without a coffee break."],
  ["Choose an engine", "A built-in engine by default, or radare2 when you want decompilation and a console."],
  ["Local by default", "Samples and credentials stay on your machine. Point the agent at a hosted endpoint or one you run yourself."],
  ["Open source", "Apache-2.0 and auditable end to end. Read the code before you run it against anything that matters."],
];

const SPECS: Array<[string, string]> = [
  ["Platforms", "Linux"],
  ["", "macOS and Windows in progress"],
  ["Formats", "ELF, PE, Mach-O"],
  ["Architectures", "x86, x86-64, ARM, AArch64, MIPS, PowerPC, RISC-V, SPARC, SystemZ, M68K, BPF"],
  ["Licence", "Apache-2.0"],
  ["Interface", "Desktop workspace with chat agent"],
];

export default function Overview() {
  return (
    <section className="section" id="capabilities">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">
            <b>0x02</b> / Capabilities
            <span className="chip-status">
              <i />
              Complete
            </span>
            <span className="pmeta">ELF · PE · Mach-O</span>
          </p>
          <h2>Everything the work needs, in one place.</h2>
          <p className="sub">
            Reverse engineering tools were built for a human at a keyboard. Recurse keeps that
            workspace and puts a reasoning agent inside it, sharing the same analysis rather
            than guessing from pasted text.
          </p>
        </div>

        <div className="hairgrid cols-4">
          {TILES.map(([title, body]) => (
            <div className="tile" key={title} data-reveal>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>

        <div className="table-wrap">
          <table>
            <tbody>
              {SPECS.map(([label, value]) => (
                <tr key={label + value}>
                  <th scope="row" style={{ width: 190 }}>
                    {label || "\u00a0"}
                  </th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
