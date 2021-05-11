import React from "react";
import './App.css';
import Sidebar from "./components/Sidebar";
import Mainscreen from './components/Mainscreen'


function App() {
  return (
    <div className="app">
          <Sidebar />
          <Mainscreen />
    </div>
  );
}

export default App;
