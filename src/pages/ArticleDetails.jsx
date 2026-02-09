import React from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import NotFound from './NotFound';

const ArticleDetails = () => {
    const { articleSlug } = useParams();

    // Dynamically load the article component with error handling
    const ArticleComponent = React.lazy(() => 
        import(`../articles/${articleSlug}/${articleSlug}.jsx`)
            .catch(() => {
                // Return a default component if import fails
                return { default: NotFound };
            })
    );

    return (
        <div className="p-6">
            <React.Suspense fallback={<div className="flex justify-center items-center py-20"><LoadingSpinner /></div>}>
                <ArticleComponent />
            </React.Suspense>
        </div>
    );
};

export default ArticleDetails;
