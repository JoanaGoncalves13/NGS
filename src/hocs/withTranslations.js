// withTranslations.js

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import enTranslations from "../locales/en.json";
import ptTranslations from "../locales/pt.json";

const withTranslations = (WrappedComponent) => {
  const translations = {
    en: enTranslations,
    pt: ptTranslations,
  };

  return (props) => {
    const { language } = useLanguage();

    return (
      <WrappedComponent {...props} t={(key) => translations[language][key]} />
    );
  };
};

export default withTranslations;
