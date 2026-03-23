import './TouchGrassSticker.css';

export default function TouchGrassSticker() {
  return (
    <div className="tg-sticker-wrapper">
      <div className="tg-emergency-housing">
        {/* Screws */}
        <div className="tg-screw tg-tl" />
        <div className="tg-screw tg-tr" />
        <div className="tg-screw tg-bl" />
        <div className="tg-screw tg-br" />

        {/* Header */}
        <div className="tg-header-meta">
          <div className="tg-label-group">
            <span className="tg-label-title">Emergency Relief</span>
            <span className="tg-label-sub">Sys. 08 - Override</span>
          </div>
          <div className="tg-split-flap-container">
            <span className="tg-flap-label">HRS ONLINE</span>
            <div className="tg-flap-digit">9</div>
            <div className="tg-flap-digit">9</div>
            <div className="tg-flap-digit">9</div>
          </div>
        </div>

        {/* Window assembly */}
        <div className="tg-window-assembly">
          <div className="tg-interior-grass">
            <svg className="tg-grass-svg" viewBox="0 0 200 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="tg-bladeLight" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#14532d" />
                  <stop offset="100%" stopColor="#4ade80" />
                </linearGradient>
                <linearGradient id="tg-bladeMid" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#064e3b" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
                <linearGradient id="tg-bladeDark" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#022c22" />
                  <stop offset="100%" stopColor="#16a34a" />
                </linearGradient>
                <g id="tg-grass-cluster">
                  <path d="M10,100 Q15,50 20,20 Q12,60 10,100" fill="url(#tg-bladeMid)" />
                  <path d="M10,100 Q5,60 0,30 Q8,70 10,100" fill="url(#tg-bladeDark)" />
                  <path d="M10,100 Q12,40 25,10 Q14,50 10,100" fill="url(#tg-bladeLight)" />
                  <path d="M10,100 Q8,45 -5,25 Q5,65 10,100" fill="url(#tg-bladeMid)" />
                  <path d="M10,100 Q10,30 15,5 Q10,40 10,100" fill="url(#tg-bladeLight)" />
                </g>
              </defs>
              <rect width="200" height="100" fill="#064e3b" opacity="0.5" />
              {/* Back row */}
              <use href="#tg-grass-cluster" x="10" y="5" transform="scale(0.8)" />
              <use href="#tg-grass-cluster" x="40" y="2" transform="scale(0.85)" />
              <use href="#tg-grass-cluster" x="70" y="8" transform="scale(0.7)" />
              <use href="#tg-grass-cluster" x="100" y="4" transform="scale(0.9)" />
              <use href="#tg-grass-cluster" x="130" y="0" transform="scale(0.8)" />
              <use href="#tg-grass-cluster" x="160" y="6" transform="scale(0.85)" />
              <use href="#tg-grass-cluster" x="190" y="2" transform="scale(0.75)" />
              {/* Mid row */}
              <use href="#tg-grass-cluster" x="-5" y="15" transform="scale(1)" />
              <use href="#tg-grass-cluster" x="25" y="10" transform="scale(1.1)" />
              <use href="#tg-grass-cluster" x="55" y="18" transform="scale(0.95)" />
              <use href="#tg-grass-cluster" x="85" y="12" transform="scale(1.05)" />
              <use href="#tg-grass-cluster" x="115" y="16" transform="scale(0.9)" />
              <use href="#tg-grass-cluster" x="145" y="10" transform="scale(1.1)" />
              <use href="#tg-grass-cluster" x="175" y="14" transform="scale(1)" />
              {/* Front row */}
              <use href="#tg-grass-cluster" x="5" y="25" transform="scale(1.2)" />
              <use href="#tg-grass-cluster" x="45" y="22" transform="scale(1.3)" />
              <use href="#tg-grass-cluster" x="80" y="28" transform="scale(1.15)" />
              <use href="#tg-grass-cluster" x="120" y="20" transform="scale(1.25)" />
              <use href="#tg-grass-cluster" x="160" y="26" transform="scale(1.2)" />
              <use href="#tg-grass-cluster" x="195" y="22" transform="scale(1.3)" />
            </svg>
          </div>

          <div className="tg-glass-pane">
            <div className="tg-glass-glare" />
            <div className="tg-target-circle" />
            <svg className="tg-crack-overlay" viewBox="0 0 280 180" preserveAspectRatio="xMidYMid slice">
              <path className="tg-crack-line" d="M140,90 L80,20 M140,90 L220,30 M140,90 L260,110 M140,90 L180,170 M140,90 L50,140 M140,90 L10,80" />
              <path className="tg-crack-splinter" d="M110,55 L150,40 M180,60 L200,80 M190,120 L220,150 M110,125 L90,160 M75,105 L40,110 M60,60 L20,30" />
              <path className="tg-crack-splinter" d="M140,90 L120,70 L90,60 M140,90 L160,110 L150,140 M140,90 L170,80 L210,70" />
            </svg>
            <div className="tg-glass-text">
              <h1>TOUCH<br />GRASS</h1>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="tg-footer-instructions">
          <p>IN CASE OF CHRONIC BURN-OUT</p>
          <p className="tg-footer-sub">STRIKE CENTER TO DECOMPRESS</p>
        </div>

        <div className="tg-hazard-strip" />
      </div>
    </div>
  );
}
