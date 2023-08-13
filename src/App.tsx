import { useRef, useState } from "react";
import QrScanner from "qr-scanner";
import "./App.css";

function App() {
  const qrRef = useRef(null);

  const [qrScanner, setQrScanner] = useState<QrScanner | null>(null);
  const [showCamera, setShowCamera] = useState<boolean>(false);

  const startScan = async () => {
    const qrCameraElm: HTMLVideoElement | null = qrRef.current;
    if (qrCameraElm) {
      const qrScanner = new QrScanner(
        qrCameraElm,
        (result: QrScanner.ScanResult) => {
          console.log(result.data);
        },
        {}
      );
      setQrScanner(qrScanner);
      const playPromise = qrScanner.start();
      if (playPromise) {
        playPromise
          .then(() => {
            setShowCamera(true);
          })
          .catch();
      }
    }
  };

  return (
    <div className="scan-qr-code">
      <div className="camera-area">
        <div className="wrap-background">
          <div className="border-cameara top-left-horizontal horizontal" />
          <div className="border-cameara top-right-horizontal horizontal" />
          <div className="border-cameara bottom-left-horizontal horizontal" />
          <div className="border-cameara bottom-right-horizontal horizontal" />

          <div className="border-cameara top-left-vertical vertical" />
          <div className="border-cameara top-right-vertical vertical" />
          <div className="border-cameara bottom-left-vertical vertical" />
          <div className="border-cameara bottom-right-vertical vertical" />
        </div>
        <video
          className={showCamera ? "qr-camera show-camera" : "qr-camera"}
          ref={qrRef}
        ></video>
      </div>
      <button
        onClick={() => {
          startScan().catch(console.error);
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          qrScanner && qrScanner.stop();
        }}
      >
        Stop
      </button>
    </div>
  );
}

export default App;
