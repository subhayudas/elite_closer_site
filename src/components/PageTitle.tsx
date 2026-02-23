import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BRAND = "Wildcard Growth";

const PageTitle = () => {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const routeTitles: Record<string, string> = {
      "/": t("pageTitle.home"),
      "/elite-levels": t("pageTitle.training"),
      "/elite-experience": t("pageTitle.eliteExperience"),
      "/events": t("pageTitle.wildcardEvents"),
      "/day-in-the-life": t("pageTitle.dayInTheLife"),
      "/trips": t("pageTitle.trips"),
    };
    const pageTitle = routeTitles[pathname] ?? t("pageTitle.pageNotFound");
    document.title = `${pageTitle} | ${BRAND}`;
    document.documentElement.lang = i18n.language;
  }, [pathname, t, i18n.language]);

  return null;
};

export default PageTitle;
