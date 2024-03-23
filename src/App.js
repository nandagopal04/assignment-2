import React from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import './App.css';

export const UserContext = React.createContext();

const App = () => {
  return (
    <div>
      <style>{`body { background-color: 	#FFA07A; }`}</style>
      <center><h1>Burger festival</h1></center>
      <div className="container">
        <center>
          <div style={{ height: "75vh", backgroundImage: 'url("https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', color: "white", fontWeight: "bolder" }}>
            <br />
            <h3 style={{ fontWeight: 'bolder', color: 'white' }}>Welcome to our Burger Festival</h3>
            <br />
            <br />
            <br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div style={{ backgroundColor: "black", width: "50%" }}>
              <p>The best burgers are simple, juicy, and messy.<br />And We Serve You The  Best Of Them!</p>
              <h6></h6>
            </div>
          </div>
          <UserContext.Provider>
            <ComponentA />
            <br />
            <ComponentB />
          </UserContext.Provider>
          <br />
        </center>
      </div>
    </div>
  );
};

export default App;
