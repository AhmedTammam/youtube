import styled from '@emotion/styled';
import React from 'react';
import * as Colors from '../../styles/colors';

const StyledVideoThubmnail = styled.img({
    width: 200,
    height: 150,
    marginRight: 12
});

const VideoCard = () => {
    return (
        <div style={{ display: 'flex', marginBottom: 12 }}>
            <StyledVideoThubmnail
                src="https://img.youm7.com/ArticleImgs/2020/6/23/33269-SpongeBob-SquarePants.jpg"
                alt="video-image"
            />
            <div>
                <p style={{ color: Colors.primary, margin: 0, fontSize: 16, fontWeight: 'bold', width: 300 }}>
                    Music to put you in a better mood- Chill lofi ~ Relax/Study/Sleep
                </p>
                <span style={{ color: Colors.darkGrey, fontSize: 12 }}>user &#183; views &#183; 1 year ago</span>
                <p style={{ color: Colors.darkGrey, fontSize: 12 }}> Details</p>
            </div>
        </div>
    );
};

export { VideoCard };
