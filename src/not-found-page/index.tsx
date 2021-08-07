import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/header';

import NotFoundImg from './not-found.jpg';
import * as Colors from '../styles/colors';
import styled from '@emotion/styled';

const StyledWrapper = styled.div({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh'
});

const StyledImg = styled.img({
    height: 200
});

const StyledMessage = styled.p({
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.darkGrey
});

const StyledLink = styled(Link)({
    color: Colors.darkBlue
});

const NotFoundPage = () => {
    return (
        <div>
            <Header />
            <StyledWrapper>
                <StyledImg src={NotFoundImg} alt="NotFoundImg" />
                <StyledMessage>Sorry! Page Not Found</StyledMessage>
                <StyledLink to="/search">Go To Search Page</StyledLink>
            </StyledWrapper>
        </div>
    );
};

export { NotFoundPage };
