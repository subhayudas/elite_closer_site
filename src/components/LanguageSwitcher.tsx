import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", label: "English", flag: "EN" },
    { code: "fr", label: "Français", flag: "FR" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem("language", langCode);
    document.documentElement.lang = langCode;
    // Update page title if needed
    const currentPath = window.location.pathname;
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="group flex h-8 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 text-xs font-medium text-white transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/15 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] focus-visible:ring-0 focus-visible:ring-offset-0"
          aria-label="Change language"
        >
          <Globe className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-180" />
          <span className="hidden sm:inline">{currentLanguage.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px] rounded-xl border border-white/10 bg-black/90 p-1.5 backdrop-blur-xl">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`cursor-pointer rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-white/10 hover:text-white ${
              i18n.language === lang.code ? "bg-[#C51631]/20 text-[#C51631]" : "text-white/80"
            }`}
          >
            <span className="mr-2 text-xs opacity-70">{lang.flag}</span>
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
