import React from 'react';
import { useParams } from 'react-router-dom';

const CompanyDetails = () => {
    const { companySlug } = useParams();

    // Dynamically load the company component
    const CompanyComponent = React.lazy(() => import(`../entreprises/${companySlug}/${companySlug}.jsx`));

    return (
        <div className="p-6">
            <React.Suspense fallback={<div>Loading...</div>}>
                <CompanyComponent />
            </React.Suspense>
        </div>
    );
};

export default CompanyDetails;
