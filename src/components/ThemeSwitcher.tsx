import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="flex items-center justify-between font-semibold gap-[0.3rem] cursor-pointer
        transition-all duration-300 ease-in-out text-black dark:text-white"
      >
        {isDark ? <BsSun /> : <BsMoon />}
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
    </>
  );
};

export default ThemeSwitcher;
