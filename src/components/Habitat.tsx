/**
 * The room the work already happens in, and where the agent stands in it.
 *
 * The middle column describes the consequence of the agent living outside the
 * analysis, not where a given tool keeps its buttons. Claims about someone's
 * actual setup are the easiest thing for this audience to falsify.
 */
const SURFACES: Array<[string, string, string]> = [
  [
    "The listing",
    "The agent is somewhere else, so it only sees what you paste into it",
    "The same surface as the agent, so it answers with addresses you are already reading",
  ],
  [
    "Names and symbols",
    "Kept per database, so nothing carries to the next sample",
    "Land in the listing, the graph and the agent's context at once",
  ],
  [
    "The debugger",
    "Its own view of the code, so a backtrace and the listing can disagree",
    "Shares the listing's symbols, so a backtrace is a click from the code",
  ],
  [
    "A large target",
    "Analysis has to finish before the work can start",
    "Incremental discovery, so it opens without the pause",
  ],
  [
    "Findings",
    "A notes file, or one analyst's head",
    "Attached to the case, and searchable across the team",
  ],
  [
    "Scripting",
    "Possible, but the agent cannot drive the engine",
    "The engine is addressable in place",
  ],
];

export default function Habitat() {
  return (
    <section className="section" id="workspace">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">
            <b>0x01</b> / Workspace
            <span className="chip-status">
              <i />
              One surface
            </span>
            <span className="pmeta">Nothing installed beside it</span>
          </p>
          <h2>Nothing to alt-tab to.</h2>
          <p className="sub">
            A researcher lives in the listing: the names, the graph, the strings, the debugger.
            Recurse keeps that room intact and puts the agent inside it, so it reads what you
            read and answers with addresses you can check rather than addresses you have to take
            on faith. Large targets open without an indexing pause, because discovery is
            incremental and blocks decode when you look at them.
          </p>
        </div>

        <table className="room-table">
          <thead>
            <tr>
              <th scope="col">Surface</th>
              <th scope="col">Today</th>
              <th scope="col">In Recurse</th>
            </tr>
          </thead>
          <tbody>
            {SURFACES.map(([key, today, here]) => (
              <tr key={key} data-reveal>
                <th scope="row">{key}</th>
                <td>{today}</td>
                <td>{here}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="muted" style={{ marginTop: 22 }}>
          The built-in engine is a single process. No companion tool to install, no server to
          keep alive, and no plugin to update before the work can start.
        </p>
      </div>
    </section>
  );
}
