import styled from '@emotion/styled';

import { StyledCardTitle, StyledCardWrapper, StyledDescription, StyledSubtitle } from '../video-card';
import type { VideoProps } from '../../types/entities/video';

const StyledVideoThubmnail = styled.img({
    width: 100,
    height: 100,
    borderRadius: '50%',
    marginRight: 12
});

const ChannelCard = ({ channel }: { channel: VideoProps }) => {
    const {
        snippet: { title, channelTitle, description, publishedAt, thumbnails }
    } = channel;

    return (
        <StyledCardWrapper>
            <StyledVideoThubmnail src={thumbnails.medium.url} alt="channel-thumbnail" />
            <div style={{ width: '100%' }}>
                <StyledCardTitle>{title}</StyledCardTitle>
                <StyledSubtitle>
                    {channelTitle} &#183; {publishedAt}
                </StyledSubtitle>
                <StyledDescription> {description}</StyledDescription>
            </div>
        </StyledCardWrapper>
    );
};

export { ChannelCard };
