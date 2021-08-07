import React from 'react';
import { Header } from '../components/header';
import { VideosList } from './videos-list';

const SearchPage = () => {
    return (
        <>
            <Header />
            <VideosList />
        </>
    );
};

export { SearchPage };
