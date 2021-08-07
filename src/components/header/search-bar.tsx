import { SyntheticEvent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import qs from 'qs';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { fetchVideos } from '../../store/reducers';
import SearchIcon from './search-icon.png';

const StyledWrapper = styled.form({
    display: 'flex',
    position: 'relative',
    width: '100%'
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
    const [query, setQuery] = useState<string>('');
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        const params = qs.parse(location.search, { ignoreQueryPrefix: true });
        const searchQuery = params?.query || '';
        console.log(searchQuery);
        // @ts-ignore
        setQuery(searchQuery);
    }, [location.search]);

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        dispatch(fetchVideos(query));
        history.push(`/search?query=${query}`);
    };

    return (
        <StyledWrapper onSubmit={handleSubmit}>
            <StyledInput
                type="text"
                name="searchBar"
                placeholder="Search"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <StyledSearchBtn type="submit">
                <StyledSearchIcon src={SearchIcon} />
            </StyledSearchBtn>
        </StyledWrapper>
    );
};

export default SearchBar;
