import React,{useState} from "react";
import { QrReader } from "react-qr-reader";
import AES from "crypto-js/aes";
function QrCodeOutput() {
  const [data, setData] = useState("No result");
  return (
    <div>
      <>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              const text = result?.text?.split("\n")
              const plaintext =AES.decrypt(text[1], 'secret key 123');
              setData(text[0]+'\n'+plaintext);
            }
            if (!!error) {
              console.info(error);
            }
          }}
          style={{ width: "100%" }}
        />
        <p>{data}</p>
      </>
    </div>
  );
}

export default QrCodeOutput;
