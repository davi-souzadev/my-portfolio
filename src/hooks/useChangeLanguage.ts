import { useTranslation } from "react-i18next"

export function useChangeLanguage() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation()

  function handleChangeLanguage(userLanguage: string) {
    changeLanguage(userLanguage)
    localStorage.setItem("lng", userLanguage)
  }

  return {
    language,
    changeLanguage,
    t,
    handleChangeLanguage,
  }
}
