import React from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import NotFound from './NotFound';

const CompanyDetails = () => {
    const { companySlug } = useParams();

    // Dynamically load the company component with error handling
    const CompanyComponent = React.lazy(() => 
        import(`../entreprises/${companySlug}/${companySlug}.jsx`)
            .catch(() => {
                // Return a default component if import fails
                return { default: NotFound };
            })
    );

    return (
        <div className="p-6">
            <React.Suspense fallback={<div className="flex justify-center items-center py-20"><LoadingSpinner /></div>}>
                <CompanyComponent />
            </React.Suspense>
        </div>
    );
};

export default CompanyDetails;
