import React from 'react';
import { useTranslation } from 'react-i18next';

const Article1 = () => {
    const { t } = useTranslation();
    return (
        <div className="p-4">
            <h1 className="text-2xl">{t('title')}</h1>
            <p>{t('content')}</p>
        </div>
    );
};

export default Article1;