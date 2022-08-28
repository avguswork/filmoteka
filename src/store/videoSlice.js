import {createSlice}  from '@reduxjs/toolkit';

const initialState = { videos: [], }

export const videoSlice = createSlice ({
    name: 'videos',
    initialState,
    reducers: {
        addVideo: (state, action) => {
            

            state.videos.push({
                name: action.payload.name
            })
        },
    },
});

export const {addVideo} = videoSlice.actions;
export default videoSlice.reducer;