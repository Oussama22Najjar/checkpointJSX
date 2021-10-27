import logo from "./logo.svg";
import "./App.css";
import MyImage from './MyImage.png';


function App() {
  return (
    <div>
      return (
      <div>
        <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
          <h1 className="title red">Oussama Najjar</h1>
          <br />
          <img src={MyImage} />
          <br />
          <img src="image2.jpg" />
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
      ); 
    </div>
  );
}

export default App;
