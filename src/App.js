import logo from './logo.svg';

import React, { useState } from 'react';
import { I18nProvider, LOCALES } from './i18n';
import translate from './i18n/translate';

function App() {
    const [locale, setLocale] = useState(LOCALES.EN);
    return (
        <I18nProvider locale={locale}>
            <div className='App'>
                {translate('edit', { path: <h1>11223344</h1> })}
                <button onClick={() => setLocale(LOCALES.EN)}>EN</button>
                <button onClick={() => setLocale(LOCALES.TW)}>TW</button>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                        Learn React
                    </a>
                </header>
            </div>
        </I18nProvider>
    );
}

export default App;
