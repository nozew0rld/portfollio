import "./index.css";
import React from "react";
import Header from "./components/header";
import Body from "./components/body";
import { useState } from "react";
function App() {
  const [changeTheme, setChangeTheme] = useState(true);
  return (
    <div
      className={`${
        changeTheme ? "bg-amber-40" : "bg-indigo-990"
      } w-screen w-full`}
    >
      <div>
        <Header changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
        <Body changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
      </div>
    </div>
  );
}

export default App;
