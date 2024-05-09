import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "Chat",
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages = action.payload;
        },
    },
});

export const {addMessage} = chatSlice.actions;

export default chatSlice.reducer;