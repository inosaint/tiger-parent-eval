import './AIDemoNightsSticker.css';

export default function AIDemoNightsSticker() {
  return (
    <div className="aidn-scene">
      <div className="aidn-computer-unit">
        {/* Front face */}
        <div className="aidn-face aidn-front">
          <div className="aidn-screen-inset">
            <div className="aidn-crt">
              <div className="aidn-crt-glow">
                <div className="aidn-graffiti-container">
                  <div className="aidn-graffiti-text">AI DEMO NIGHTS</div>
                  <div className="aidn-subtitle-text">for designers</div>
                </div>
              </div>
            </div>
          </div>

          <div className="aidn-floppy-slot" />

          <div className="aidn-grill">
            <div className="aidn-vent" /><div className="aidn-vent" />
            <div className="aidn-vent" /><div className="aidn-vent" />
            <div className="aidn-vent" /><div className="aidn-vent" />
            <div className="aidn-vent" /><div className="aidn-vent" />
          </div>

          {/* Stickers on the computer */}
          <div className="aidn-sticker aidn-sticker-starburst" />
          <div className="aidn-sticker aidn-sticker-bengaluru">Bengaluru</div>
        </div>

        {/* Other faces */}
        <div className="aidn-face aidn-back" />
        <div className="aidn-face aidn-left" />
        <div className="aidn-face aidn-right" />
        <div className="aidn-face aidn-top" />
        <div className="aidn-face aidn-bottom" />

        {/* Keyboard */}
        <div className="aidn-keyboard-assembly">
          <div className="aidn-kb-base">
            <div className="aidn-keys-grid">
              {/* Row 1 */}
              <div className="aidn-key" /><div className="aidn-key" /><div className="aidn-key" /><div className="aidn-key" />
              <div className="aidn-key" /><div className="aidn-key" /><div className="aidn-key" /><div className="aidn-key" />
              <div className="aidn-key" /><div className="aidn-key" /><div className="aidn-key" /><div className="aidn-key" />
              {/* Row 2 */}
              <div className="aidn-key aidn-wide" /><div className="aidn-key" /><div className="aidn-key" /><div className="aidn-key" />
              <div className="aidn-key" /><div className="aidn-key" /><div className="aidn-key" /><div className="aidn-key" />
              <div className="aidn-key" /><div className="aidn-key aidn-wide" />
              {/* Row 3 */}
              <div className="aidn-key" /><div className="aidn-key" /><div className="aidn-key aidn-space" /><div className="aidn-key" /><div className="aidn-key" /><div className="aidn-key" />
            </div>
          </div>
          <div className="aidn-kb-front" />
          <div className="aidn-kb-back" />
          <div className="aidn-kb-left" />
          <div className="aidn-kb-right" />
          <div className="aidn-kb-shadow" />
        </div>
      </div>
    </div>
  );
}
