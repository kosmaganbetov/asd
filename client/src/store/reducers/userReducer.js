import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axiosTravella";

const initialState = {
  global: null,
  user: null,
  currentUser: null,
};

export const loginUser = createAsyncThunk(
  "users/login",
  async (payload, thunkApi) => {
    try {
      const res = await axios.post("/users/sessions", payload.userData);
      payload.navigate("/");
      return res.data;
    } catch (e) {
      if (e.response && e.response.data) {
        thunkApi.dispatch(usersSlice.actions.catchLoginError(e.response.data));
      } else {
        thunkApi.dispatch(usersSlice.actions.globalError(e));
      }
    }
  }
);
export const getUser = createAsyncThunk("users/getUser", async (id) => {
  return await axios.get("/users/" + id).then((res) => res.data);
});

export const registerUser = createAsyncThunk(
  "users/register",
  async (payload, thunkApi) => {
    try {
      const res = await axios.post("/users", payload.userData);
      payload.navigate("/");
      thunkApi.dispatch(usersSlice.actions.loginafterRegister(res.data));
      return res.data;
    } catch (e) {
      if (e.response && e.response.data) {
        thunkApi.dispatch(
          usersSlice.actions.catchRegisterError(e.response.data)
        );
      } else {
        thunkApi.dispatch(usersSlice.actions.globalError(e));
      }
    }
  }
);

export const logoutUser = createAsyncThunk(
  "logout/users",
  async (payload, thunkAPI) => {
    await axios.delete("users/sessions");
    thunkAPI.dispatch(usersSlice.actions.logoutUser());
    console.log(usersSlice.actions);
    payload.navigate("/");
  }
);
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginafterRegister: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        console.log(action);
        state.currentAuthor = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action);
        state.user = action.payload.user;
      });
  },
});

export default usersSlice.reducer;
