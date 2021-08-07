import { useState } from 'react';
import styled from '@emotion/styled';

import ErrorIcon from './sad-icon.svg';

const StyledToast = styled.div({
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: 65,
    right: 20,
    padding: '10px 20px',
    background: '#fff',
    borderRadius: 5,
    border: '1px solid red',
    zIndex: 1000
});

const StyledToastIcon = styled.img({
    width: 40,
    marginRight: 12
});

const StyledToastMessage = styled.p({
    marginRight: 12
});

const StyledCloseBtn = styled.button({
    border: 'none',
    width: 30,
    height: 30,
    borderRadius: '50%',
    cursor: 'pointer',
    '&:hover': {
        background: 'grey'
    }
});

const Toast = ({ message }: { message?: string }) => {
    const [showToast, setShowToast] = useState(true);
    if (!showToast) return null;
    return (
        <StyledToast>
            <StyledToastIcon src={ErrorIcon} alt="error-icon" />
            <StyledToastMessage>{message || 'SomeThing wrong happened'}</StyledToastMessage>
            <StyledCloseBtn onClick={() => setShowToast(false)}>&#10005;</StyledCloseBtn>
        </StyledToast>
    );
};

export { Toast };
