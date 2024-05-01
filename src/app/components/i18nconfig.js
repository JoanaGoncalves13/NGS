import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
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
        footerAddressBarcelos: "Largo da Porta Nova 39 - 1º, 4750-329 Barcelos",
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
        navbar: {
          whoWeAre: "Quem somos",
          whatWeDo: "O que fazemos",
          publications: "Publicações",
          events: "Eventos",
          contacts: "Contactos",
        },
        home: {
          title: "A Sociedade",
          description1:
            "Somos uma sociedade de advogados em que a juventude se entrelaça com a maturidade. Podemos, assim, aliar a energia com que abraçamos os assuntos que nos são confiados, à sensatez e ponderação com que os tratamos.",
          description2:
            "Distinguimo-nos por, em cada momento, sabermos dar ao cliente aquilo que ele precisa. Pode, por isso, dizer-se que praticamos uma advocacia feita à medida do cliente.",
          description3:
            "Abordamos os assuntos que nos são confiados, com dedicação e empenho, com o profundo conhecimento da matéria que temos sobre as várias áreas do Direito.",
          description4:
            "Aceitamos patrocinar assuntos da mais variada natureza, em todas as áreas do Direito. Procuramos dar satisfação integral aos interesses que nos são confiados, com elevados padrões éticos, de qualidade e eficiência. Esperamos poder ser-lhe útil.",
          contactUs: "Contacte-nos",
          headquartersTitle: "Sede (Lisboa)",
          headquartersAddress:
            "Estrada de Benfica, 447 - 1º Dtº, 1500-080 Lisboa",
          northBranchTitle: "Delegação Norte",
          northBranchAddress: "Largo da Porta Nova 39 - 1º, 4750-329 Barcelos",
          telephone: "Tel.",
          fax: "Fax",
          mobile: "Tlm.",
          email: "E-mail",
          footerRights:
            "© 2024 NGS - Leão e Associados. Todos os direitos reservados. | Powered by STEP",
        },
        contactForm: {
          title: "Contacte-nos",
          namePlaceholder: "Nome",
          phonePlaceholder: "Telefone",
          emailPlaceholder: "Email",
          messagePlaceholder: "Descreva-nos o seu problema",
          interestAreas: "Áreas de interesse",
          civilLaw: "Direito Civil",
          criminalLaw: "Direito Criminal",
          taxLaw: "Direito Fiscal",
          commercialLaw: "Direito Comercial",
          submit: "Submeter",
          thanksMessage: "Obrigado pelo seu contacto",
          errorMessage: "Erro ao enviar email",
        },
        what: {
          practiceAreas: "Áreas de prática",
          serviceDescription:
            "A NGS presta serviços de patrocínio, assessoria e consultoria jurídica nas diversas áreas do Direito, integrando, como clientes, tanto pessoas singulares como coletivas, bem como outras entidades de natureza pública.",
          businessLaw:
            "Na área das empresas e sociedades comerciais, tratamos de constituições, alterações do contrato de sociedade, transmissões de ações e de quotas, exclusões e exonerações de sócios, dissoluções, insolvências e reclamações de créditos, reestruturações, recuperações e revitalizações (PER’s) de empresas e, mais recentemente, elaboração de projetos de investimentos e apresentação de candidaturas a fundos no âmbito do Quadro de Apoios Portugal 2020.",
          humanRights:
            "No que se refere aos chamados Direitos Humanos, poderemos, entre outras, acompanhar questões sobre livre circulação e residência dos cidadãos da União Europeia em Portugal, sobre Liberdade Religiosa, sobre aquisição e perda da Nacionalidade Portuguesa, sobre a Proteção de Dados Pessoais e sobre direito de Asilo.",
          laborLitigation:
            "Na área do contencioso e pré-contencioso do trabalho, acompanhamos e instruímos processos disciplinares e patrocinamos ações de impugnação de despedimentos.",
          generalLitigation:
            "Na área do contencioso em geral, patrocinamos os clientes em ações da mais variada índole, seja qual for a natureza do interesse, privado ou público, que se discuta.",
          contracts:
            "Na área dos contratos, seja qual for a sua índole ou natureza, elaboramos minutas e criamos condições para a sua assinatura, seja qual for o seu objeto e a posição que o nosso cliente tenha neles.",
          feesTitle: "Honorários",
          feesDescription:
            "Nas nossas Notas de Honorários, procuramos refletir o equilíbrio entre a importância dos serviços que prestamos, a complexidade dos assuntos que tratamos e a criatividade posta na sua resolução. Por conta dos honorários, que serão apurados a final, poderão ser solicitadas quantias, a título de provisão ou adiantamentos.",
          notarialServices:
            "No que se refere a serviços notariais, estes são prestados ao abrigo do disposto no art.º 38º do DL n.º 76-A/2006, de 29 de Março, e, bem assim, do disposto no art.º 27º do DL n.º 26/2004, de 4 de Fevereiro, sendo faturados nos termos da Tabela do Regulamento Emolumentar dos Registos e Notariado (DL n.º 322-A/2001, de 14 de Dezembro).",
        },
        blogPosts: {
          title: "Publicações",
          viewMore: "Ver mais",
          newsletterTitle: "Inscreva-se no nosso Boletim Informativo",
        },
        newsletter: {
          subscribeTitle: "Subscreva a nossa Newsletter",
          subscribeText:
            "E fique a par das nossas publicações acerca das suas áreas de interesse.",
          namePlaceholder: "Nome",
          phonePlaceholder: "Telefone",
          emailPlaceholder: "Email",
          interestAreasTitle: "Áreas de interesse",
          civilLaw: "Direito Civil",
          criminalLaw: "Direito Criminal",
          taxLaw: "Direito Fiscal",
          commercialLaw: "Direito Comercial",
          submit: "Submeter",
          subscriptionSuccess: "Subscrição efetuada com sucesso!",
        },
        eventsTitle: "Eventos",
        back:"Voltar"
      },
    },
    en: {
      translation: {
        welcomeCountries1: "Portugal",
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
        navbar: {
          whoWeAre: "Who we are",
          whatWeDo: "What we do",
          publications: "Publications",
          events: "Events",
          contacts: "Contacts",
        },
        home: {
          title: "The Society",
          description1:
            "We are a law firm where youth intertwines with maturity. We can thus combine the energy with which we embrace the matters entrusted to us, with the prudence and thoughtfulness with which we handle them.",
          description2:
            "We distinguish ourselves by knowing how to give the client exactly what he needs at any given moment. Therefore, it can be said that we practice law tailored to the client.",
          description3:
            "We address the matters entrusted to us with dedication and commitment, with a deep understanding of the subject matter across various fields of Law.",
          description4:
            "We accept to sponsor matters of the most varied nature, in all areas of Law. We seek to fully satisfy the interests entrusted to us, with high ethical standards, quality, and efficiency. We hope to be of service to you.",
          contactUs: "Contact Us",
          headquartersTitle: "Headquarters (Lisbon)",
          headquartersAddress:
            "Estrada de Benfica, 447 - 1º Dtº, 1500-080 Lisbon",
          northBranchTitle: "North Branch",
          northBranchAddress: "Largo da Porta Nova 39 - 1º, 4750-329 Barcelos",
          telephone: "Tel.",
          fax: "Fax",
          mobile: "Mobile",
          email: "E-mail",
          footerRights:
            "© 2024 NGS - Leão e Associados. All rights reserved. | Powered by STEP",
        },
        contactForm: {
          title: "Contact Us",
          namePlaceholder: "Name",
          phonePlaceholder: "Phone",
          emailPlaceholder: "Email",
          messagePlaceholder: "Describe your issue",
          interestAreas: "Areas of Interest",
          civilLaw: "Civil Law",
          criminalLaw: "Criminal Law",
          taxLaw: "Tax Law",
          commercialLaw: "Commercial Law",
          submit: "Submit",
          thanksMessage: "Thank you for your contact",
          errorMessage: "Error sending email",
        },
        what: {
          practiceAreas: "Practice Areas",
          serviceDescription:
            "NGS provides sponsorship, advice, and legal consulting in various areas of law, integrating individual and collective clients, as well as other public entities.",
          businessLaw:
            "In the area of business and corporate law, we handle incorporations, changes to company contracts, transfers of shares and quotas, exclusions and exemptions of partners, dissolutions, insolvencies and debt claims, restructurings, recoveries, and revitalizations (PER’s) of companies and, more recently, the drafting of investment projects and the submission of applications for funds under the Portugal 2020 framework.",
          humanRights:
            "In the field of Human Rights, we can, among others, handle issues on the free movement and residence of European Union citizens in Portugal, Religious Freedom, acquisition and loss of Portuguese Nationality, Personal Data Protection, and Asylum Law.",
          laborLitigation:
            "In labor litigation and pre-litigation, we accompany and instruct disciplinary processes and sponsor actions to challenge dismissals.",
          generalLitigation:
            "In general litigation, we sponsor clients in actions of the most varied nature, regardless of the private or public nature of the interests discussed.",
          contracts:
            "In the area of contracts, regardless of their type or nature, we prepare drafts and create conditions for their signing, regardless of the object and the position our client has in them.",
          feesTitle: "Fees",
          feesDescription:
            "In our Fee Notes, we seek to reflect the balance between the importance of the services we provide, the complexity of the matters we deal with, and the creativity placed in their resolution. As part of the fees, which will be finalized later, amounts may be requested in advance as provision or advances.",
          notarialServices:
            "Regarding notarial services, these are provided under the provisions of Art. 38 of DL No. 76-A/2006, of 29 March, and Art. 27 of DL No. 26/2004, of 4 February, and are billed according to the Table of the Notarial and Registration Fees Regulation (DL No. 322-A/2001, of 14 December).",
        },
        blogPosts: {
          title: "Publications",
          viewMore: "View more",
          newsletterTitle: "Subscribe to our Newsletter",
        },
        newsletter: {
          subscribeTitle: "Subscribe to our Newsletter",
          subscribeText:
            "Stay updated with our latest publications in your areas of interest.",
          namePlaceholder: "Name",
          phonePlaceholder: "Phone",
          emailPlaceholder: "Email",
          interestAreasTitle: "Areas of Interest",
          civilLaw: "Civil Law",
          criminalLaw: "Criminal Law",
          taxLaw: "Tax Law",
          commercialLaw: "Commercial Law",
          submit: "Submit",
          subscriptionSuccess: "Subscription successful!",
        },
        eventsTitle: "Events",
        back:"Back"
      },
    },
    es: {
      translation: {},
    },
  },
  lng: "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
