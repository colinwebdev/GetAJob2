import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import listingService from './listingService'

const initialState = {
    listings: [],
    listingsCount: 0,
    listing: {},
    dashboard: '',
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

function getMessage(error) {
    let message =
        (error.response &&
            error.response.data &&
            error.response.data.message) ||
        error.message ||
        error.toString()

    return message
}

export const getDashboard = createAsyncThunk(
    'listing/dash',
    async (_, thunkAPI) => {
        try {
            return await listingService.getDashboard()
        } catch (error) {
            return thunkAPI.rejectWithValue(getMessage(error))
        }
    }
)

export const listingSlice = createSlice({
    name: 'listing',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDashboard.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getDashboard.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getDashboard.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.dashboard = action.payload
            })
    },
})

export let { reset } = listingSlice.actions
export default listingSlice.reducer
