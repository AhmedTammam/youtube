import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface VideosState {
    collection: [];
    isLoading: boolean;
    error: string;
}

export const initialState: VideosState = {
    collection: [],
    isLoading: false,
    error: ''
};

export const fetchVideos = createAsyncThunk('videos/fetchVideos', async (query: string) => {
    return await axios
        .get(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=25&q=${query}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        )
        .then(res => {
            return res.data.items;
        });
});

export const videosSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchVideos.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(fetchVideos.fulfilled, (state, { payload }) => {
            state.collection = payload;
            state.isLoading = false;
            state.error = !payload.length ? "We don't have any result related to your search" : '';
        });
        builder.addCase(fetchVideos.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message || 'something wrong happen';
        });
    }
});

export const selectAllVideos = (state: RootState) => state.videos.collection;
export const selectLoadingStatus = (state: RootState) => state.videos.isLoading;
export const hasError = (state: RootState) => state.videos.error;

export default videosSlice.reducer;
