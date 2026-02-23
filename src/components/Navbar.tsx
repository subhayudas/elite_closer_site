import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const isFrench = i18n.language === "fr";
  const navLinkFont = isFrench
    ? "text-[11px] sm:text-xs lg:text-[13px]"
    : "text-[13px] sm:text-sm lg:text-[15px]";
  const navLinkFontMobile = isFrench ? "text-sm" : "text-base";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isElitePage = location.pathname === "/elite-levels" || location.pathname === "/elite-experience" || location.pathname === "/events" || location.pathname === "/day-in-the-life" || location.pathname === "/trips";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll(); // Check initial state
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (isElitePage) {
      // If on Elite Experience page, navigate to home first, then scroll
      navigate(`/#${id}`, { replace: false });
      // Wait for navigation and page render, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          // If element not found immediately, try again after a longer delay
          setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
          }, 300);
        }
      }, 50);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const handleLogoClick = () => {
    if (isElitePage) {
      navigate("/");
    } else {
      scrollTo("hero");
    }
  };

  const navLinks = [
    { id: "stories", label: t("navbar.successStories") },
    { id: "booking", label: t("navbar.bookACall") },
  ];

  const routeLinks = [
    { path: "/events", label: t("navbar.wildcardEvents") },
    { path: "/day-in-the-life", label: t("navbar.dayInTheLife") },
    { path: "/elite-experience", label: t("navbar.eliteExperience") },
    { path: "/elite-levels", label: t("navbar.eliteLevels") },
    { path: "/trips", label: t("navbar.trips") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/70 py-2.5 shadow-lg shadow-black/20 backdrop-blur-md md:py-3 lg:py-3"
          : "border-b border-white/5 bg-black/30 py-3 backdrop-blur-sm md:py-4 lg:py-5"
      }`}
    >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 md:max-w-[90rem] lg:max-w-[100rem] lg:px-8">
        {/* Logo with pulse/glow on hover */}
        <button
          onClick={handleLogoClick}
          className="logo-glow flex items-center gap-2 font-display text-xl font-bold leading-none tracking-tight text-white transition-all duration-300 md:text-2xl"
        >
          <img
            src="/header1.png"
            alt="Wildcard Logo"
            className="logo-icon h-10 w-10 transition-[filter] duration-300 md:h-12 md:w-12"
          />
        </button>

        {/* Desktop nav links - compact font & spacing for EN/FR */}
        <div className="hidden items-center gap-4 md:flex md:gap-5 lg:gap-6">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`nav-link-underline whitespace-nowrap leading-tight text-white transition-all duration-300 hover:text-white/95 ${navLinkFont}`}
            >
              {label}
            </button>
          ))}
          {routeLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`nav-link-underline whitespace-nowrap leading-tight text-white transition-all duration-300 hover:text-white/95 ${navLinkFont}`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA - scale + shimmer on hover */}
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <Button
            onClick={() => scrollTo("booking")}
            size="lg"
            className="cta-shimmer whitespace-nowrap px-4 py-2 text-[13px] font-semibold leading-tight !bg-[#C51631] text-white transition-all duration-300 hover:scale-105 hover:!bg-[#C51631] hover:shadow-[0_0_25px_rgba(197,22,49,0.5)] sm:px-5 sm:text-sm lg:px-6 lg:py-2.5 lg:text-[15px]"
          >
            {t("navbar.applyForTraining")}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="leading-none text-foreground transition-colors hover:text-white md:hidden"
          aria-label={mobileOpen ? t("navbar.closeMenu") : t("navbar.openMenu")}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu - with glassmorphism when scrolled */}
      {mobileOpen && (
        <div
          className={`border-t px-4 pb-4 pt-2 md:hidden transition-all duration-300 ${
            scrolled
              ? "border-white/10 bg-black/70 backdrop-blur-md"
              : "border-border bg-background"
          }`}
        >
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`block w-full py-3 text-left text-white transition-colors hover:text-white/95 ${navLinkFontMobile}`}
            >
              {label}
            </button>
          ))}
          {routeLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMobileOpen(false)}
              className={`block w-full py-3 text-left text-white transition-colors hover:text-white/95 ${navLinkFontMobile}`}
            >
              {label}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-2">
            <LanguageSwitcher />
            <Button
              onClick={() => scrollTo("booking")}
              size="lg"
              className="cta-shimmer flex-1 py-3 text-base font-semibold transition-all duration-300 hover:scale-[1.02] !bg-[#C51631] text-white hover:!bg-[#C51631]"
            >
              {t("navbar.applyForTraining")}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
