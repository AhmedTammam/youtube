import styled from '@emotion/styled';

import * as Colors from '../../styles/colors';
import type { VideoProps } from '../../types/entities/video';

export const StyledCardWrapper = styled.div({
    display: 'flex',
    marginBottom: 12,
    '@media (max-width: 768px)': {
        padding: 10
    }
});
const StyledVideoThubmnail = styled.img({
    width: 200,
    height: 150,
    marginRight: 12,
    '@media (max-width: 768px)': {
        width: 100,
        height: 75
    }
});

export const StyledCardTitle = styled.p({
    color: Colors.primary,
    margin: 0,
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%'
});

export const StyledSubtitle = styled.span({
    color: Colors.darkGrey,
    fontSize: 12
});

export const StyledDescription = styled.p({
    color: Colors.darkGrey,
    fontSize: 12
});

const VideoCard = ({ video }: { video: VideoProps }) => {
    const {
        snippet: { title, channelTitle, description, publishedAt, thumbnails }
    } = video;

    return (
        <StyledCardWrapper>
            <StyledVideoThubmnail src={thumbnails.medium.url} alt="video-image" />
            <div>
                <StyledCardTitle>{title}</StyledCardTitle>
                <StyledSubtitle>
                    {channelTitle} &#183; {publishedAt}
                </StyledSubtitle>
                <StyledDescription> {description}</StyledDescription>
            </div>
        </StyledCardWrapper>
    );
};

export { VideoCard };
