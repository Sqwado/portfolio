import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetails = () => {
    const { articleSlug } = useParams();

    // Dynamically load the company component
    const ArticleComponent = React.lazy(() => import(`../articles/${articleSlug}/${articleSlug}.jsx`));

    return (
        <div className="p-6">
            <React.Suspense fallback={<div>Loading...</div>}>
                <ArticleComponent />
            </React.Suspense>
        </div>
    );
};

export default ArticleDetails;
