import React, { createContext, useState, useContext, useEffect } from "react";
import enTranslations from "../locales/en.json";
import ptTranslations from "../locales/pt.json";

const LanguageContext = createContext();

const translations = {
  en: enTranslations,
  pt: ptTranslations,
};

const localStorageKey = "language";

const getValueByNestedKey = (object, keys) => {
  return keys.split(".").reduce((acc, key) => acc[key], object);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Loading state

  const setLanguage = (lang) => {
    localStorage.setItem(localStorageKey, lang);
    setLanguageState(lang);
  };

  const t = (key) => getValueByNestedKey(translations[language], key);

  useEffect(() => {
    const storedLanguage = localStorage.getItem(localStorageKey);
    if (storedLanguage !== language) {
      setLanguage(storedLanguage || "en");
    }
    // Once language is set, loading is done
    setIsLoading(false);
  }, [language]);

  // Return loading state while language is not set
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
