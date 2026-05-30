import { useEffect, useRef, useState } from "react";
import { MdPalette } from "react-icons/md";
import "./styles/ThemeSwitcher.css";

type Theme = {
  id: string;
  label: string;
  swatch: string;
};

const themes: Theme[] = [
  { id: "violet", label: "Violet", swatch: "#c2a4ff" },
  { id: "cyan", label: "Cyan", swatch: "#8be9ff" },
  { id: "emerald", label: "Emerald", swatch: "#8affc1" },
  { id: "amber", label: "Amber", swatch: "#ffd28a" },
  { id: "rose", label: "Rose", swatch: "#ff9ec2" },
];

const STORAGE_KEY = "portfolio-theme";
const DEFAULT_THEME = "violet";

const applyTheme = (id: string) => {
  document.documentElement.setAttribute("data-theme", id);
};

const ThemeSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(DEFAULT_THEME);
  const ref = useRef<HTMLDivElement>(null);

  // Apply the saved theme on first mount.
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
    setActive(saved);
    applyTheme(saved);
  }, []);

  // Close the palette when clicking outside it.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const selectTheme = (id: string) => {
    setActive(id);
    applyTheme(id);
    localStorage.setItem(STORAGE_KEY, id);
    setOpen(false);
  };

  return (
    <div className="theme-switcher" ref={ref}>
      <button
        className="theme-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label="Change color theme"
        aria-expanded={open}
        data-cursor="disable"
      >
        <MdPalette />
      </button>
      <div className={`theme-menu ${open ? "theme-menu-open" : ""}`}>
        {themes.map((theme) => (
          <button
            key={theme.id}
            className={`theme-dot ${active === theme.id ? "theme-dot-active" : ""}`}
            style={{ backgroundColor: theme.swatch }}
            onClick={() => selectTheme(theme.id)}
            aria-label={theme.label}
            title={theme.label}
            data-cursor="disable"
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
