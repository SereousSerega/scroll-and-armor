import { useSelector } from 'react-redux';
import languages from '../data/core/lang/languages.json'

export default function loadText(obj, nameKey, type) {
    const userPref = useSelector((state) => state.userPref.pref);
    return languages[obj][nameKey][userPref.language][type] || `Text not found for ${nameKey}`;
}