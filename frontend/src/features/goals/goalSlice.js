import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import goalService from './goalService';

const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Create a new goal
export const createGoal = createAsyncThunk('goals/create', async (goalData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await goalService.createGoal(goalData, token)
    } catch (error) {
        const message = (error.respnse && error.response.data && error.response.data.message) || error.message || error.toString()
        thunkAPI.rejectWithValue({ message })
    }
})

// Get user goals
export const getGoals = createAsyncThunk('goals/getAll', async (_, thunkApi) => {
    try {
        const token = thunkApi.getState().auth.user.token
        return await goalService.getGoals(token)
    } catch (error) {
        const message = (error.respnse && error.response.data && error.response.data.message) || error.message || error.toString()
        thunkApi.rejectWithValue({ message })
    }
})

// Delete goal
export const deleteGoal = createAsyncThunk('goals/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await goalService.deleteGoal(id, token)
    } catch (error) {
        const message = (error.respnse && error.response.data && error.response.data.message) || error.message || error.toString()
        thunkAPI.rejectWithValue({ message })
    }
})

export const goalSlice = createSlice({
    name: 'goals',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createGoal.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createGoal.fulfilled, (state, action) => {
                state.goals.push(action.payload)
                state.isSuccess = true
                state.isLoading = false
            })
            .addCase(createGoal.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(getGoals.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getGoals.fulfilled, (state, action) => {
                state.goals = action.payload
                state.isSuccess = true
                state.isLoading = false
            })
            .addCase(getGoals.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(deleteGoal.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteGoal.fulfilled, (state, action) => {
                state.goals = state.goals.filter(goal => goal._id !== action.payload.id)
                state.isSuccess = true
                state.isLoading = false
            })
            .addCase(deleteGoal.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
    }
})

export const { reset } = goalSlice.actions
export default goalSlice.reducer