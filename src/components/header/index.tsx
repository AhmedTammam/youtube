import styled from '@emotion/styled';

import SearchBar from './search-bar';
import YoutubeLogo from './youtube-logo.png';
import * as Colors from '../../styles/colors';

const StyledWrapper = styled.div({
    position: 'sticky',
    top: 0,
    borderBottom: `1px solid ${Colors.darkGrey}`,
    background: Colors.white,
    paddingTop: 10,
    '@media (max-width: 768px)': {
        position: 'relative'
    }
});

const StyledHeader = styled.div({
    display: 'flex',
    alignItems: 'center',
    width: 1000,
    margin: '10px auto',
    '@media (max-width: 768px)': {
        width: '100%',
        margin: 10
    }
});

const StyledLogo = styled.img({
    width: 'auto',
    height: 30,
    marginRight: 40,
    '@media (max-width: 768px)': {
        marginRight: 20
    }
});
const Header = () => {
    return (
        <StyledWrapper>
            <StyledHeader>
                <StyledLogo src={YoutubeLogo} alt="log" />
                <SearchBar />
            </StyledHeader>
        </StyledWrapper>
    );
};

export { Header };
