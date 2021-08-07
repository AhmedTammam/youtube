import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { ChannelCard } from '../components/channel-card';
import { Spinner } from '../components/spinner';
import { Toast } from '../components/toast/toast';
import { VideoCard } from '../components/video-card';

import { RootState } from '../store';
import { hasError, selectAllVideos, selectLoadingStatus } from '../store/reducers';
import { VideoProps } from '../types/entities/video';

const StyledWrapper = styled.div({
    width: 1000,
    margin: '10px auto',
    '@media (max-width: 768px)': {
        width: '100%'
    }
});

const VideosList = () => {
    const videos = useSelector((state: RootState) => selectAllVideos(state));
    const isLoading = useSelector((state: RootState) => selectLoadingStatus(state));
    const Error = useSelector((state: RootState) => hasError(state));

    return (
        <StyledWrapper>
            {!!videos.length &&
                videos.map((video: VideoProps) => {
                    return video.id.videoId ? (
                        <VideoCard key={video?.id?.videoId} video={video} />
                    ) : (
                        <ChannelCard key={video?.id?.channelId} channel={video} />
                    );
                })}
            {isLoading && <Spinner />}
            {Error && <Toast />}
        </StyledWrapper>
    );
};

export { VideosList };
