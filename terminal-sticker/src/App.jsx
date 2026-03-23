import { useState, useRef, useCallback } from 'react';
import html2canvas from 'html2canvas';
import TerminalSticker from './components/TerminalSticker';
import TormentNexusSticker from './components/TormentNexusSticker';
import './App.css';

const BUILT_IN_STICKERS = [
  { id: 'terminal-mindset', name: 'Terminal Mindset', type: 'component' },
  { id: 'torment-nexus', name: 'Torment Nexus', type: 'component' },
];

function App() {
  const [stickers, setStickers] = useState(BUILT_IN_STICKERS);
  const [selectedId, setSelectedId] = useState('terminal-mindset');
  const stickerRef = useRef(null);
  const iframeRef = useRef(null);
  const fileInputRef = useRef(null);

  const selected = stickers.find((s) => s.id === selectedId);

  const handleExport = useCallback(async () => {
    if (selected?.type === 'html') {
      const iframe = iframeRef.current;
      if (!iframe) return;
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const body = iframeDoc.body;
      const canvas = await html2canvas(body, {
        scale: 4,
        backgroundColor: null,
        useCORS: true,
        logging: false,
        windowWidth: body.scrollWidth,
        windowHeight: body.scrollHeight,
      });
      const link = document.createElement('a');
      link.download = `${selected.name.replace(/\s+/g, '-').toLowerCase()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } else {
      const el = stickerRef.current;
      if (!el) return;
      const canvas = await html2canvas(el, {
        scale: 4,
        backgroundColor: null,
        useCORS: true,
        logging: false,
      });
      const link = document.createElement('a');
      link.download = `${selected?.name.replace(/\s+/g, '-').toLowerCase() || 'sticker'}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  }, [selected]);

  const handleUpload = useCallback(
    (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const name = file.name.replace(/\.(html?|htm)$/i, '');
        const id = `upload-${Date.now()}`;
        const newSticker = { id, name, type: 'html', html: ev.target.result };
        setStickers((prev) => [...prev, newSticker]);
        setSelectedId(id);
      };
      reader.readAsText(file);
      e.target.value = '';
    },
    []
  );

  const handleDelete = useCallback(
    (id) => {
      setStickers((prev) => prev.filter((s) => s.id !== id));
      if (selectedId === id) setSelectedId('terminal-mindset');
    },
    [selectedId]
  );

  return (
    <div className="app">
      {/* Left sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <span className="sidebar-title">Stickers</span>
          <button
            className="btn btn--small"
            onClick={() => fileInputRef.current?.click()}
          >
            + Upload
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".html,.htm"
            onChange={handleUpload}
            hidden
          />
        </div>

        <div className="sticker-list">
          {stickers.map((s) => (
            <div
              key={s.id}
              className={`sticker-item ${selectedId === s.id ? 'sticker-item--active' : ''}`}
              onClick={() => setSelectedId(s.id)}
            >
              <span className="sticker-item-icon">
                {s.type === 'component' ? '>' : '</>'}
              </span>
              <span className="sticker-item-name">{s.name}</span>
              {s.type === 'html' && (
                <button
                  className="sticker-item-delete"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(s.id);
                  }}
                >
                  x
                </button>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Main content */}
      <main className="main">
        <div className="main-toolbar">
          <span className="main-title">{selected?.name}</span>
          <button className="btn btn--export" onClick={handleExport}>
            Export PNG (4x)
          </button>
        </div>

        <div className="stage">
          {selected?.type === 'component' && (
            <div ref={stickerRef} className="sticker-capture">
              {selected.id === 'terminal-mindset' && <TerminalSticker />}
              {selected.id === 'torment-nexus' && <TormentNexusSticker />}
            </div>
          )}
          {selected?.type === 'html' && (
            <iframe
              ref={iframeRef}
              srcDoc={selected.html}
              title={selected.name}
              className="upload-preview"
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
