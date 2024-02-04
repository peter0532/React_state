import { useState } from 'react';
import './App.css'
import ProfileCard from './component/ProfileCard'
import Welcome from './component/Welcome'

const App = () => {
  const [theme, setTheme] = useState({bgcolor: "white", color: "black"});

  // change theme
  const changeTheme = () => {
    if (theme.bgcolor === "white") {
      setTheme({bgcolor: "black", color: "white"});
    } else {
      setTheme({bgcolor: "white", color: "black"});
    }
  };

  const style = {
    backgroundColor: theme.bgcolor,
    color: theme.color,
    height: "100vh",
    padding: "10px",
    margin: "10px",
    textAlign: "center",
    fontFamily: "Arial",
    fontSize: "calc(10px + 2vmin)",
  };

  const [show, setShow] = useState(false);

  // handle show button click
  const handleShow = () => {
    setShow(!show);
  }

  console.log("output", show);

  return (
    <div style={style}>
      {show ? <Welcome /> : <ProfileCard />}

      <button onClick={handleShow}>Click here</button>
      <h1>Hello</h1>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default App