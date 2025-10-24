import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface User {
  id: number
  name: string
  email: string
}

interface UsersState {
  data: User[]
  loading: boolean
  error: string | null
}

const initialState: UsersState = {
  data: [],
  loading: false,
  error: null,
}

// async thunk untuk ambil data
export const fetchUsers = createAsyncThunk<User[]>(
  'users/fetchUsers',
  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return await res.json()
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false
        state.error = 'Failed to fetch users'
      })
  },
})

export default usersSlice.reducer
