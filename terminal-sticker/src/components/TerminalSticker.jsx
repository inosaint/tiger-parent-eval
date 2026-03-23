import './TerminalSticker.css';

export default function TerminalSticker() {
  return (
    <div className="sticker-wrapper">
      <div className="window">
        <div className="window-inner">
          {/* Title bar */}
          <div className="title-bar">
            <div className="traffic-light traffic-light--red" />
            <div className="traffic-light traffic-light--yellow" />
            <div className="traffic-light traffic-light--green" />
            <div className="title-text">mindset — -zsh — 80x24</div>
          </div>

          {/* CRT screen */}
          <div className="crt-screen-container">
            <div className="scanlines" />
            <div className="vignette" />
            <div className="glare" />

            <div className="screen-content">
              <span className="line line--blue line-1">
                <span className="line-icon">🌐</span> Searching for inspiration: all styles
              </span>
              <br />
              <span className="line line--blue line-2">
                <span className="line-icon">⚡</span> Exploring 6 designs
              </span>
              <span className="line line-3">Unbothered for 2m 45s.</span>
              <span className="line line-4">Moisturized for 2m 0s.</span>
              <span className="line line-5">In my lane for 1m 34s.</span>
              <span className="line line-6">Focused for 4m 12s.</span>
              <span className="line line-7">Flourishing...</span>
              <br />
              <span className="line line-8">
                <span className="sys-prompt">~</span>
                <span className="cursor" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
