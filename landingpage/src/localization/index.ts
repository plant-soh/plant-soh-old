// import the localization file using en.json, de.json and pt-BR.json
import Cookies from 'js-cookie';
import LocalizedStrings from 'react-localization';
import de from './de.json';
import en from './en.json';
import ptBR from './pt-BR.json';

const Localization = new LocalizedStrings({ en, de, ptBR });
Localization.setLanguage(Cookies.get('language') || 'en');
export default Localization;
