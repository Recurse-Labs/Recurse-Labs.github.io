import { useCallback, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playBtnRef = useRef<HTMLButtonElement>(null);

  /** Load the capture only when the visitor asks for it. */
  const play = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;
    if (playBtnRef.current) playBtnRef.current.hidden = true;
    video.setAttribute("controls", "");
    try {
      await video.play();
    } catch {
      /* native controls take over */
    }
  }, []);

  return (
    <section className="hero">
      <div className="wrap">
        <p className="eyebrow">
          Recurse <b>Labs</b> / Flagship product
        </p>

        <h1>A working model of any binary.</h1>

        <p className="lede">
          Recurse is a desktop environment for reverse engineering. Static analysis, a live
          debugger and an agent that reason over one shared model of the target, so what you
          read is what it read.
        </p>

        <div className="actions">
          <a className="btn primary lg" href="#deploy">
            Download Recurse
          </a>
          <button className="btn lg" onClick={() => void play()}>
            Watch the demo
          </button>
          <span className="actions-note">Free and open source</span>
        </div>

      </div>

      <div className="wrap-wide">
        <figure className="frame">
          <div className="frame-bar">
            <span className="rec" />
            <span>Session capture</span>
            <span className="spacer" />
            <span>1920 × 1080</span>
          </div>
          <div className="frame-body">
            <video
              ref={videoRef}
              poster="/demo-poster.jpg"
              preload="none"
              playsInline
              controlsList="nodownload"
              disablePictureInPicture
              onPause={(e) => {
                if (e.currentTarget.currentTime === 0 && playBtnRef.current) {
                  playBtnRef.current.hidden = false;
                }
              }}
            >
              <source src="/demo.mp4" type="video/mp4" />
            </video>
            <button
              ref={playBtnRef}
              className="frame-play"
              aria-label="Play the demo capture"
              onClick={() => void play()}
            >
              <span className="glyph" aria-hidden="true" />
              <span className="meta">
                <b>Play capture</b>
                <small>Streams on demand</small>
              </span>
            </button>
          </div>
          <figcaption className="frame-foot">
            <span>Function list · Disassembly · Control-flow graph · Agent</span>
            <a href="/demo.mp4" download>
              Download file
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
