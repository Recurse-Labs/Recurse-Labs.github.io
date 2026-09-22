const RECALL = [
  { ad: "0x401030", name: "decrypt_config", src: "prior analysis · 3 samples" },
  { ad: "0x401045", name: "run_key_store", src: "prior analysis · 2 samples" },
  { ad: "0x40105c", name: "beacon_init", src: "prior analysis · 3 samples" },
  { ad: "0x40100c", name: "resolve_api", src: "prior analysis · 5 samples" },
  { ad: "0x401018", name: '"pipe://GL4471"', src: "indicator · 3 samples" },
];

const POINTS: Array<[string, string]> = [
  [
    "Scoped to the case, not the file",
    "Findings attach to the investigation. A rename made in March is still there in November, on a sample nobody has opened before.",
  ],
  [
    "Seeded into the next session",
    "When a sample from a known family opens, the prior names and endpoints are already in front of the analyst and the agent.",
  ],
  [
    "Searchable across the team",
    "Every rename, note and indicator is queryable, so knowledge survives the analyst who found it leaving the project.",
  ],
  [
    "Nothing leaves the estate",
    "Memory is local to the deployment. There is no hosted index of what your team has been looking at.",
  ],
];

/**
 * The differentiator, stated plainly: analysis that compounds instead of
 * starting from zero on every sample.
 */
export default function Memory() {
  return (
    <section className="section" id="memory">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">
            <b>0x04</b> / Memory
            <span className="chip-status">
              <i />
              Project scoped
            </span>
            <span className="pmeta">survives restarts</span>
          </p>
          <h2>The work compounds.</h2>
          <p className="sub">
            Analysis tools hand you a database per binary, per analyst. Nothing carries over, so
            the fortieth sample of a family starts from zero like the first. Recurse keeps one
            model of what the team knows, and puts it back in front of you.
          </p>
        </div>

        <div className="two-col">
          <div data-reveal>
            <span className="cell-label">What the workspace recalls</span>
            <div className="readout">
              <div className="readout-bar">
                <span>Recall</span>
                <span className="spacer" />
                <span>family=loader</span>
              </div>
              <div className="readout-body">
                {RECALL.map((r) => (
                  <div className="mem-row" key={r.ad}>
                    <span className="mem-ad">{r.ad}</span>
                    <span className="mem-name">{r.name}</span>
                    <span className="mem-src">{r.src}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="muted" style={{ marginTop: 16 }}>
              Recalled automatically when the sample opened, before anyone typed a question.
            </p>
          </div>

          <div data-reveal>
            <ul className="ticks">
              {POINTS.map(([title, body]) => (
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
