import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRGenerator = () => {
  const [input, setInput] = useState("");
  const qrRef = useRef();

  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "qrcode.png";
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Real-Time QR Code Generator
      </h1>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-80 mb-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div ref={qrRef} className="p-4 bg-white rounded-lg shadow-lg">
        {input ? (
          <QRCodeCanvas
            value={input}
            size={200}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
          />
        ) : (
          <p className="text-gray-500">Enter text to generate a QR code</p>
        )}
      </div>
      {input && (
        <button
          onClick={downloadQRCode}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Download QR Code
        </button>
      )}
    </div>
  );
};

export default QRGenerator;
