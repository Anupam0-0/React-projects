import React, { useState } from "react";
import QRCode from "react-qr-code";

function QrCode() {
    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");

    // Handle the input change and generate QR Code on button click
    function handleGenerate() {
        setQrCode(input);
    }

    return (
        <div className="h-screen w-full py-8 flex flex-col justify-start items-center gap-6 text-slate-100 bg-gradient-to-br from-slate-900 to-slate-700">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-white">
                    QR Code Generator
                </h1>
                <p className="mt-6 text-sm mx-5 lg:text-lg">
                    Generate QR code for your website, product, or anything you
                    want.
                </p>
            </div>

            {/* Input Field and Generate Button */}
            <div className="border-2 border-slate-800 bg-white rounded-md w-96 flex items-center">
                <input
                    type="text"
                    name="qr-code"
                    placeholder="Enter URL..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="p-2 w-full bg-transparent text-slate-900 rounded-l-md"
                />
                <button
                    className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-r-sm active:bg-slate-800"
                    disabled={!input.trim()}
                    onClick={handleGenerate}
                >
                    Generate
                </button>
            </div>

            {/* QR Code Display */}
            {qrCode && (
                <div className="mt-5 w-80 h-80 p-0.5 rounded-lg bg-gradient-to-tl from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                    <div className="w-full h-full flex justify-center items-center">
                        <QRCode
                            id="qr-code-value"
                            value={qrCode}
                            bgColor={"#ffffff"}
                            fgColor={"#000000"}
                            className="w-full h-full rounded-lg" // You can adjust the size here
                        />
                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default QrCode;
