import React from "react";
import "./styles/DarkMode.css";

function DarkMode({darkMode, setDarkMode}) {
return (
<div className={darkMode ? "dark-mode" : "light-mode"}>
<div className="container">
<span className="sun-moon-icon" role="img" aria-label="sun-moon">☀︎ ☽</span>
<div className="switch-checkbox">
<label className="switch">
<input type="checkbox" onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
<span className="slider round"></span>
</label>
</div>
</div>
</div>
);
}
export default DarkMode