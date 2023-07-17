import { createSlice } from "@reduxjs/toolkit";

interface SliceState {
  userId: string | number;
}

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    userId: 0,
  } as SliceState,
  reducers: {
  }
});
