import React, { useContext } from 'react';

import { languageOptions } from '../util/languages';

import { LanguageContext } from '../context/language';

export default function LanguageSelector() {
  const languageContext = useContext(LanguageContext);

  const handleLanguageChange = event => {
    const selectedLanguage = languageOptions.find(item => item.id === event.target.value);
    languageContext.setLanguage(selectedLanguage);
  };

  return (
    <select onChange={handleLanguageChange} value={languageContext.language.id}>
      {languageOptions.map(item => (
        <option key={item.id} value={item.id}>
          {item.text}
        </option>
      ))}
    </select>
  );
}
