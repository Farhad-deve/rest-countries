import Logo from "../components/Logo";
import ThemeSwitcher from "../components/ThemeSwitcher";

const Header = () => {
  return (
    <>
      <header
      className="sticky top-0 left-0 z-10 py-[clamp(1.5rem,1.5vw,2rem)]
      bg-white dark:bg-[#2b3945] shadow-[0_2px_5px_2px_#00000020] transition-all">
        <div className="flex items-center justify-between custom-container">
          <Logo />
          <ThemeSwitcher />
        </div>
      </header>
    </>
  );
};

export default Header;
