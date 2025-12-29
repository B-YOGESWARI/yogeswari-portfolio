export default function ThemeToggle() {
  const toggleTheme = () => {
    document.body.classList.toggle("light");
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      🌙 / ☀️
    </button>
  );
}