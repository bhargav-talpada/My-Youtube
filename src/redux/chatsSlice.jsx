import { createSlice } from "@reduxjs/toolkit";

const chatsSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        },
    },
});

export const { addMessage } = chatsSlice.actions;

export default chatsSlice.reducer;