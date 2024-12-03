import { Link } from 'react-router-dom'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { setPref } from '../../data/slices/userPref_Slice';
import { useState } from 'react';

function Header() {
    const userPref = useSelector((state) => state.userPref.pref);
    const dispatch = useDispatch()
    const [isSettings, setIsSettings] = useState(false)

    function showSettings() {
        if (isSettings) {
            return (
                <div className='settingsContainer'>
                    <h4>language</h4>
                    <ul className='chooseLang'>
                        <li onClick={() => chooseLang('ua')}>UA</li>
                        <li onClick={() => chooseLang('en')}>EN</li>
                    </ul>
                </div>
            )
        }
    }

    function chooseLang(lang) {
        dispatch(setPref(lang));
    }

    return (
        <>
            <div className='head header'>
                <Link to={'/'}><img src="/images/logo_HD_transparent.webp" alt="logo" className='logo_head' /></Link>
                <h1>Scroll & Armor</h1>
                <div className='emptyPlace'></div>
                <div className='placeForButs'>
                    <span className='settingsBut' onClick={() => setIsSettings(!isSettings)}>Settings</span>

                </div>

                {showSettings()}

            </div>
        </>
    )
}

export default Header