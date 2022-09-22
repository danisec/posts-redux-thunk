import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import notif from 'react-hot-toast'
import axios from 'axios'

const API = 'https://jsonplaceholder.typicode.com/posts'

const initialState = {
  post: [],
  loading: false,
}

export const fetchPosts = createAsyncThunk('posts/fetchPost', async () => {
  const response = await axios.get(API)
  return response.data
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.post = payload
        state.loading = false
        notif.success('Get Data Success!')
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false
        notif.error('Get Data Failed!')
      })
  },
})

export default postsSlice.reducer
