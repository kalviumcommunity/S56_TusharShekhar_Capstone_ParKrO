import React, { useState } from 'react';
import QRCode from 'qrcode'; // Import the QRCode library to generate QR codes
import genqrcode from '../assets/genqrcode.png';
import mansitting from '../assets/mansitting.png';
import img from '../assets/img.png';

const QRcode = () => {
    const [fullname, setFullname] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [mobile, setMobile] = useState('');
    const [vehicleNo, setVehicleNo] = useState('');
    const [location, setLocation] = useState('');
    const [qrCodeImage, setQrCodeImage] = useState('');

    // Generate QR code using only full name and vehicle number
    const generateQRCode = async () => {
        if (!fullname || !vehicleNo) {
            alert("Please provide both Full Name and Vehicle Number to generate a QR code.");
            return;
        }
        
        const dataToEncode = `Full Name: ${fullname}, Vehicle Number: ${vehicleNo}`;
        
        try {
            // Generate the QR code as a Data URL using the provided data
            const qrDataUrl = await QRCode.toDataURL(dataToEncode);
            setQrCodeImage(qrDataUrl);
        } catch (error) {
            console.error('Failed to generate QR code', error);
            alert("An error occurred while generating the QR code.");
        }
    };

    // Function to copy the QR code to the clipboard
    const handleCopyToClipboard = async () => {
        try {
            const blob = await fetch(qrCodeImage).then((r) => r.blob());
            const item = new ClipboardItem({ "image/png": blob });
            await navigator.clipboard.write([item]);
            alert("QR code copied to clipboard!");
        } catch (error) {
            alert("Error copying QR code to clipboard");
        }
    };

    return (
        <div>
            <div className="generatebox">
                <div className="Generate">Generate Your Own QR Code</div>
                <div>
                    <img src={genqrcode} alt="Generate QR Code" className="genqrcode" />
                </div>
                <div>
                    <img src={mansitting} alt="Man Sitting" className="mansitting" />
                </div>
                <div className="genbox">
                    <input
                        type="text"
                        placeholder="Your Full Name"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Vehicle Type"
                        value={vehicle}
                        onChange={(e) => setVehicle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Your Mobile Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Vehicle Number"
                        value={vehicleNo}
                        onChange={(e) => setVehicleNo(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <button className="generatebtn" onClick={generateQRCode}>
                        Generate
                    </button>
                </div>
            </div>
            
            {/* Display the generated QR code */}
            {qrCodeImage && (
                <div>
                    <h3>Your QR Code:</h3>
                    <img src={qrCodeImage} alt="Generated QR Code" className="generatedQRCode" />
                    <button onClick={handleCopyToClipboard}>Copy to Clipboard</button>
                </div>
            )}
            
            <img src={img} alt="Footer Image" className="genimg" />
        </div>
    );
};

export default QRcode;
