import React from 'react';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>{'Corner Cafe | Error'}</title>
            </Helmet>
            <img className="w-full h-[750px]" src="https://i.ibb.co/j62qj5f/image.png" alt="" />
        </div>
    );
};

export default ErrorPage;