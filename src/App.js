import logo from './logo.svg';
import './App.css';
import QrCode from './QrCode';
import QrCodeOutput from './QrCodeOutput';

function App() {

  return (
    <div className="App">
      <div style={{height:"500px",width:"500px",margin:"10rem 0 0 10rem"}}>
        <QrCode />
        <QrCodeOutput />
      </div>
    </div>
  );
}

export default App;
