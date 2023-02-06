import "./index.css";
import React from "react";
import Header from "./components/header";
import Body from "./components/body";
import Home from "./components/home";
import { useState } from "react";
function App() {
  const [changeTheme, setChangeTheme] = useState(true);
  return (
    <div className=" flex flex-col w-full">
      <Header changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
      <div
        className={`${
          changeTheme ? "bg-amber-40" : "bg-indigo-990"
        } w-full flex justify-center `}
      >
        <div className="">
          <Body changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
          <Home changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
        </div>
      </div>
    </div>
  );
}

export default App;
