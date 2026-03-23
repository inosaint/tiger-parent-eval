import { useState, useRef, useCallback } from 'react';
import html2canvas from 'html2canvas';
import TerminalSticker from './components/TerminalSticker';
import './App.css';

function App() {
  const [htmlContent, setHtmlContent] = useState(null);
  const stickerRef = useRef(null);
  const iframeRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleExport = useCallback(async () => {
    const el = stickerRef.current;
    if (!el) return;

    const canvas = await html2canvas(el, {
      scale: 4,
      backgroundColor: null,
      useCORS: true,
      logging: false,
    });

    const link = document.createElement('a');
    link.download = 'sticker.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }, []);

  const handleUpload = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setHtmlContent(ev.target.result);
    };
    reader.readAsText(file);
  }, []);

  const handleExportUploaded = useCallback(async () => {
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
    link.download = 'sticker-export.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }, []);

  return (
    <div className="app">
      {/* Toolbar */}
      <div className="toolbar">
        <button className="btn btn--export" onClick={handleExport}>
          Export Sticker as PNG (4x)
        </button>
        <div className="toolbar-divider" />
        <button className="btn btn--upload" onClick={() => fileInputRef.current?.click()}>
          Upload HTML Sticker
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".html,.htm"
          onChange={handleUpload}
          hidden
        />
        {htmlContent && (
          <button className="btn btn--export" onClick={handleExportUploaded}>
            Export Uploaded as PNG
          </button>
        )}
      </div>

      {/* Built-in sticker */}
      <div className="stage">
        <div ref={stickerRef} className="sticker-capture">
          <TerminalSticker />
        </div>
      </div>

      {/* Uploaded HTML preview */}
      {htmlContent && (
        <div className="stage uploaded-stage">
          <h2 className="stage-label">Uploaded Sticker</h2>
          <iframe
            ref={iframeRef}
            srcDoc={htmlContent}
            title="Uploaded sticker preview"
            className="upload-preview"
          />
        </div>
      )}
    </div>
  );
}

export default App;
