import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "welcomeCountries1": "Portugal",
        welcomeCountries2: "Spain",
        welcomeCountries3: "Switzerland",
        welcomeCountries4: "Brazil",
        getToKnowUsTitle: "Get to Know Us",
        getToKnowUsDescription: "We are your reliable partner.",
        getToKnowUsButton: "Learn more",
        whatWeDoTitle: "What We Do",
        whatWeDoDescription: "Discover how we can help you.",
        whatWeDoButton: "Learn more",
        stayUpdatedTitle: "Stay Updated",
        stayUpdatedDescription: "Check our blog for updates.",
        stayUpdatedButton: "Blog",
        eventsTitle: "Events",
        eventsDescription: "Participate in our events.",
        eventsButton: "Learn more",
        footerHeadquartersTitle: "Headquarters (Lisbon)",
        footerNorthBranchTitle: "North Branch",
        footerAddressLisbon:
          "Estrada de Benfica, 447 - 1º Dtº, 1500-080 Lisbon",
        footerAddressBarcelos: "Largo da Porta Nova 39 - 1º, 4750-329 Barcelos",
        footerContactTelephone: "Tel.",
        footerContactFax: "Fax",
        footerContactMobile: "Mobile",
        footerContactEmail: "Email",
        footerContactNumberLisbonPhone: "+351 21 778 85 76",
        footerContactNumberLisbonFax: "+351 21 778 12 05",
        footerContactNumberLisbonMobile: "+351 96 405 14 54 (24 hours)",
        footerContactNumberLisbonEmail: "geral.lisboa@ngsadvogados.com",
        footerContactNumberBarcelosPhone: "+351 25 314 96 16",
        footerContactNumberBarcelosFax: "+351 25 314 96 18",
        footerContactNumberBarcelosEmail: "geral.barcelos@ngsadvogados.com",
        footerRights:
          "© 2024 NGS - Leão e Associados. All rights reserved. | Powered by STEP",
      },
      pt: {
        translation: {
          welcomeCountries1: "Portugal",
          welcomeCountries2: "Espanha",
          welcomeCountries3: "Suíça",
          welcomeCountries4: "Brasil",
          getToKnowUsTitle: "Conheça-nos",
          getToKnowUsDescription: "Somos o seu parceiro confiável.",
          getToKnowUsButton: "Ver mais",
          whatWeDoTitle: "O que fazemos",
          whatWeDoDescription: "Descubra como o podemos ajudar.",
          whatWeDoButton: "Ver mais",
          stayUpdatedTitle: "Mantenha-se a par",
          stayUpdatedDescription: "Consulte o nosso blog para atualizações.",
          stayUpdatedButton: "Blog",
          eventsTitle: "Eventos",
          eventsDescription: "Participe nos nossos eventos.",
          eventsButton: "Ver mais",
          footerHeadquartersTitle: "Sede (Lisboa)",
          footerNorthBranchTitle: "Delegação Norte",
          footerAddressLisbon:
            "Estrada de Benfica, 447 - 1º Dtº, 1500-080 Lisboa",
          footerAddressBarcelos:
            "Largo da Porta Nova 39 - 1º, 4750-329 Barcelos",
          footerContactTelephone: "Tel.",
          footerContactFax: "Fax",
          footerContactMobile: "Tlm.",
          footerContactEmail: "E-mail",
          footerContactNumberLisbonPhone: "+351 21 778 85 76",
          footerContactNumberLisbonFax: "+351 21 778 12 05",
          footerContactNumberLisbonMobile: "+351 96 405 14 54 (24 horas)",
          footerContactNumberLisbonEmail: "geral.lisboa@ngsadvogados.com",
          footerContactNumberBarcelosPhone: "+351 25 314 96 16",
          footerContactNumberBarcelosFax: "+351 25 314 96 18",
          footerContactNumberBarcelosEmail: "geral.barcelos@ngsadvogados.com",
          footerRights:
            "© 2024 NGS - Leão e Associados. Todos os direitos reservados. | Powered by STEP",
        },
      },
    },
    lng: "pt",
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
  },
});

export default i18n;
