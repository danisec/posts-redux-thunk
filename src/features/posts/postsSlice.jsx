import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API = 'https://jsonplaceholder.typicode.com/posts'

const initialState = {
  entities: [],
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
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.entities.push(...action.payload)
    })
  },
})

export default postsSlice.reducer
