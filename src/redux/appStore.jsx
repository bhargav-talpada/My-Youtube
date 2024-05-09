import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice"
import chatsSlice from "./chatsSlice";

const appStore = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        chat: chatsSlice,
    }
});

export default appStore;