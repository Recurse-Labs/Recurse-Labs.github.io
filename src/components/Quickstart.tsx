import CopyButton from "./CopyButton";

const CLONE = "git clone https://github.com/Recurse-Labs/recurse && cd recurse && just dev";

export default function Quickstart() {
  return (
    <section className="section" id="deploy">
      <div className="wrap">
        <div className="section-head">
          <p className="kicker">
            <b>0x08</b> / Deploy
            <span className="chip-status">
              <i />
              Self hosted
            </span>
            <span className="pmeta">air-gap capable</span>
          </p>
          <h2>Running in three commands.</h2>
          <p className="sub">
            Recurse builds from source today. The analysis engine is included, so there is no
            companion tool to install before it will work.
          </p>
        </div>

        <div className="steps">
          <div className="step" data-reveal>
            <span className="step-num">Step 01</span>
            <h3>Clone the repository</h3>
            <div className="readout">
              <pre className="readout-body">
                <code>
                  <span className="c">$</span> git clone https://github.com/Recurse-Labs/recurse
                  {"\n"}
                  <span className="c">$</span> cd recurse
                </code>
              </pre>
            </div>
            <div className="step-actions">
              <CopyButton text={CLONE} />
            </div>
          </div>

          <div className="step" data-reveal>
            <span className="step-num">Step 02</span>
            <h3>Build and launch</h3>
            <div className="readout">
              <pre className="readout-body">
                <code>
                  <span className="c">$</span> just dev{"\n"}
                  <span className="c">#</span> opens the desktop workspace{"\n"}
                  {"\n"}
                  <span className="c">$</span> just build{"\n"}
                  <span className="c">#</span> writes a release bundle
                </code>
              </pre>
            </div>
          </div>

          <div className="step" data-reveal>
            <span className="step-num">Step 03</span>
            <h3>Point the agent at a model</h3>
            <div className="readout">
              <pre className="readout-body">
                <code>
                  <span className="c">#</span> hosted endpoint{"\n"}
                  <span className="c">$</span> export RECURSE_LLM_API_KEY=...{"\n"}
                  {"\n"}
                  <span className="c">#</span> or one you run yourself{"\n"}
                  <span className="c">$</span> export RECURSE_LLM_ENDPOINT=http://localhost:11434/v1
                  {"\n"}
                  <span className="c">$</span> export RECURSE_LLM_MODEL=llama3.1:8b
                </code>
              </pre>
            </div>
          </div>
        </div>

        <p className="muted" style={{ marginTop: 24 }}>
          Any OpenAI-compatible endpoint works, and the same settings can be entered in the
          application itself. Building on Linux also needs the standard desktop dependencies,
          listed in the repository.
        </p>
      </div>
    </section>
  );
}
