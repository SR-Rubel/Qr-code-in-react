import React from "react";
import QRCode from "react-qr-code";
import AES from "crypto-js/aes";

export default function QrCode() {
  let value = "Hey! this worked \n";
  const ciphertext = AES.encrypt("this my id 123", "secret key 12356").toString();
  value = value+ciphertext;
  console.log(value + ciphertext);
  return (
    <div>
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={value}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
}
