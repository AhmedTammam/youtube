import styled from '@emotion/styled';
import SearchIcon from './search-icon.png';

const StyledWrapper = styled.div({
    display: 'flex',
    position: 'relative',
    width: '80%'
});

const StyledInput = styled.input({
    width: '100%',
    padding: 5,
    fontSize: 16,
    border: '2px solid #ccc',
    borderRadius: 2
});

const StyledSearchBtn = styled.button({
    borderRadius: 'none',
    position: 'absolute',
    right: 0,
    height: 31,
    width: 70
});
const StyledSearchIcon = styled.img({
    height: 15
});
const SearchBar = () => {
    return (
        <StyledWrapper>
            <StyledInput type="text" placeholder="Search" />
            <StyledSearchBtn>
                <StyledSearchIcon src={SearchIcon} />
            </StyledSearchBtn>
        </StyledWrapper>
    );
};

export default SearchBar;
