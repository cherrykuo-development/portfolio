import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';

import messages from './messages';

const Provider = ({ children, locale }) => {
    return (
        <IntlProvider locale={locale} textComponent={Fragment} messages={messages[locale]}>
            {children}
        </IntlProvider>
    );
};

export default Provider;
