import StarButton from "./StarButton";

const EMAIL = "ayush25khanna@gmail.com";
const X_URL = "https://x.com/aayush250306";
const LI_URL = "https://www.linkedin.com/in/aayush-khanna-633384290";
const ORG = "https://github.com/Recurse-Labs";
const REPO = `${ORG}/recurse`;

export function StarBand() {
  return (
    <section className="star-band">
      <div className="wrap">
        <p className="kicker">
          <b>0x09</b> / Source
          <span className="chip-status">
            <i />
            Open
          </span>
          <span className="pmeta">Apache-2.0</span>
        </p>
        <h2>Free, open source, and better with company.</h2>
        <p>
          Recurse is developed in the open. If it saves you an afternoon in a listing you
          would rather not be reading, a star helps other people find it and tells us what to
          build next.
        </p>
        <div className="actions">
          <StarButton size="lg" />
          <a className="btn lg" href={REPO} target="_blank" rel="noreferrer">
            Read the source
          </a>
        </div>
      </div>
    </section>
  );
}

export function Cta() {
  return (
    <section className="cta">
      <div className="wrap">
        <h2>Open a binary. Ask what it does. Verify the answer.</h2>
        <p>
          Recurse is the flagship product of Recurse Labs, released under Apache-2.0.
        </p>
        <div className="actions">
          <a className="btn primary lg" href="#deploy">
            Download Recurse
          </a>
          <a className="btn lg" href="/demo.mp4" download>
            Download the capture
          </a>
        </div>
        <p className="contact-line">
          Questions, feedback or commercial work:{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">
              <span className="brand-mark">RECURSE</span>
              <span className="brand-sub">Labs</span>
            </div>
            <p className="foot-note">
              Research-driven security tooling. Recurse is the flagship product.
            </p>
          </div>

          <div className="foot-col">
            <h4>Sequence</h4>
            <a href="#workspace">Workspace</a>
            <a href="#analysis">Analysis</a>
            <a href="#memory">Memory</a>
            <a href="#engines">Engines</a>
            <a href="#debugger">Debugger</a>
            <a href="#deploy">Deploy</a>
          </div>

          <div className="foot-col">
            <h4>Contact</h4>
            <a href={REPO} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={X_URL} target="_blank" rel="noreferrer">
              X
            </a>
            <a href={LI_URL} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${EMAIL}`}>Email</a>
          </div>
        </div>

        <div className="foot-base">
          <span>Recurse Labs</span>
          <span>v0.1.0</span>
          <span>Apache-2.0</span>
          <span className="foot-live">
            <span aria-hidden="true">●</span> Operational
          </span>
        </div>
      </div>
    </footer>
  );
}
