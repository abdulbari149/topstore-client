import { PayloadAction } from './../../../node_modules/@reduxjs/toolkit/src/createAction';
import { createSlice } from "@reduxjs/toolkit"

interface SliceState {
    overLayMobileMenu: boolean;
    overLayCart: boolean;
}

const headerSlice = createSlice({
    name: "header",
    initialState: {
        overLayMobileMenu: false,
        overLayCart: false
    } as SliceState,
    reducers: {
        showOverLay(state:SliceState, { payload }: PayloadAction<{ item: keyof SliceState }>){
            state[payload.item] = true
        },
        closeOverLay(state:SliceState, { payload }: PayloadAction<{ item: keyof SliceState }>){
            state[payload.item] = false
        }

    }
})

export const { closeOverLay, showOverLay } = headerSlice.actions
export const headerReducer =  headerSlice.reducer