import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="flex items-center justify-center  "
        onClick={() =>
          setTheme(
            theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
          )
        }
      >
        {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
          <p className="bg-gray-800 hover:bg-gray-800/50 p-2 rounded">Light</p>
        ) : (
          <p className="bg-gray-300 hover:bg-gray-300/50 p-2 rounded">Dark</p>
        )}
      </button>
    </>
  );
};

export default ThemeToggle;
