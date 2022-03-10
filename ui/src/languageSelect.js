import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelect = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div onChange={changeLanguage}>
      <input type="radio" value="en" name="language" defaultChecked /> English
      <input type="radio" value="ch" name="language" /> Traditional Chinese
      <input type="radio" value="fr" name="language" /> Francais
      <input type="radio" value="de" name="language" /> Allemand
      <div>{t("please_enter_name")}</div>
    </div>
  );
};

export default LanguageSelect;
