import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

// TikTok Icon SVG Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Footer = () => {
  const { t } = useTranslation();
  const mainLinks = [
    { to: "/", label: t("footer.home") },
    { to: "/#stories", label: t("footer.successStories") },
    { to: "/#curriculum", label: t("footer.training") },
    { to: "/#booking", label: t("footer.bookACall") },
    { to: "/events", label: t("footer.wildcardEvents") },
    { to: "/day-in-the-life", label: t("footer.dayInTheLife") },
  ];

  const eliteLinks = [
    { to: "/elite-levels", label: t("footer.eliteLevels") },
    { to: "/elite-experience", label: t("footer.eliteExperience") },
    { to: "/trips", label: t("footer.trips") },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:max-w-[90rem] lg:max-w-[100rem] lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-white">
              <img src="/header1.png" alt="Wildcard Growth" className="h-10 w-10 md:h-12 md:w-12" />
              <span>{t("footer.brand")}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {t("footer.description")}
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="https://www.instagram.com/wildcard.growth/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                aria-label={t("footer.followUsOnInstagram")}
              >
                <Instagram className="h-5 w-5" />
                <span>@wildcard.growth</span>
              </a>
              <a
                href="https://www.instagram.com/samlafrance1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                aria-label={t("footer.followSamLaFranceOnInstagram")}
              >
                <Instagram className="h-5 w-5" />
                <span>@samlafrance1</span>
              </a>
              <a
                href="https://www.tiktok.com/@wild.card.growth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                aria-label={t("footer.followUsOnTikTok")}
              >
                <TikTokIcon className="h-5 w-5" />
                <span>@wild.card.growth</span>
              </a>
            </div>
          </div>

          {/* Main Links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              {t("footer.navigate")}
            </h3>
            <ul className="mt-4 space-y-3">
              {mainLinks.map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ELITE Links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              {t("footer.elite")}
            </h3>
            <ul className="mt-4 space-y-3">
              {eliteLinks.map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t("footer.brand")}. {t("footer.allRightsReserved")}
          </p>
          <div className="flex gap-6">
            <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-white">
              {t("footer.privacy")}
            </Link>
            <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-white">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
