import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOn: false,
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setSideBarOn: (state) => {
            state.isSidebarOn = true;
        },
        setSideBarOff: (state) => {
            state.isSidebarOn = false;
        }
    }
})

export const { setSideBarOff, setSideBarOn } = sidebarSlice.actions;
export const getSideBarStatus = (state) => state.sidebar.isSidebarOn;
export default sidebarSlice.reducer;
