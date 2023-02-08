import "./index.css";
import React from "react";
import Header from "./components/header";
import Animation from "./components/Animation";

import { useState } from "react";
import Work from "./components/Work";
import Bio from "./components/Bio";
import Like from "./components/Like";
import Web from "./components/Web";
import Footer from "./components/Footer";

function App() {
  const [changeTheme, setChangeTheme] = useState(true);
  return (
    <div
      className={`${
        changeTheme ? "bg-amber-40" : "bg-indigo-990"
      } w-full flex  justify-around `}
    >
      <Header changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
      <div className="flex flex-col w-[90%] sm:[80%] md:w-[570px]">
        <Animation />
        <Work changeTheme={changeTheme} />
        <Bio changeTheme={changeTheme} />
        <Like changeTheme={changeTheme} />
        <Web changeTheme={changeTheme} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
