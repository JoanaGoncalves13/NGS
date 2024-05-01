// LanguageContext.js

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
  const [language, setLanguageState] = useState(() => {
    const storedLanguage = localStorage.getItem(localStorageKey);
    return storedLanguage || "en"; // Default to English if no language is stored
  });

  const setLanguage = (lang) => {
    localStorage.setItem(localStorageKey, lang);
    setLanguageState(lang);
  };

  const t = (key) => getValueByNestedKey(translations[language], key);

  // Ensure localStorage is in sync with the language state
  useEffect(() => {
    const storedLanguage = localStorage.getItem(localStorageKey);
    if (storedLanguage !== language) {
      setLanguage(storedLanguage || "en");
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
