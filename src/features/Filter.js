import { createSlice } from "@reduxjs/toolkit";
export const searchSlice = createSlice({
    name: "fruits",
    initialState: ["Banana", "Apple", "Orange", "Avocado", "strawberry"],
    reducers: {
        Filter: (state, action) => {
            return state = state.filter((fruit) => fruit == action.payload.fruit)
        }

    }
})
export const { Filter } = searchSlice.actions
export default searchSlice.reducer;
