import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import ptTranslation from "../locale/ptBr.json"
import enTranslation from "../locale/en.json"

i18n.use(initReactI18next).init({
  resources: {
    ptBr: {
      ...ptTranslation,
    },
    en: {
      ...enTranslation,
    },
  },
  lng: localStorage.getItem("lng") || "ptBr",
})
