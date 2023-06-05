import React, { useEffect, useState } from "react";
import "./dark.css";

const Dark = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("dark-theme") || "false"
  );
  const themeToggler = () => {
    setIsDark(isDark === "true" ? "false" : "true");
  };

  useEffect(() => {
    if (isDark === "true") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("dark-theme", "true");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("dark-theme", "false");
    }
  }, [isDark]);

  return (
    <>
      <div className="dark">
        <input type="checkbox" id="switch" onClick={themeToggler} />
        <div class="line"></div>
      </div>
      <div className="mobile-theme" onClick={themeToggler}>
        {isDark === "true" ? (
          <i class="uil uil-sun" style={{ transition: "0.5s" }}></i>
        ) : (
          <i class="uil uil-moon" style={{ transition: "0.5s" }}></i>
        )}
      </div>
    </>
  );
};

export default Dark;
