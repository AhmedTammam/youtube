export interface VideoProps {
    id: {
        videoId: string;
        channelId: string;
    };
    snippet: {
        title: string;
        channelTitle: string;
        description: string;
        publishedAt: string;
        thumbnails: {
            medium: { url: string };
        };
    };
}
