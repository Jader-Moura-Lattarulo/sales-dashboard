import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateProfilePostData } from '@/types';

const initialState: Omit<CreateProfilePostData, 'name' | 'phone' | 'password'> = {
    email: '',
    message: null,
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileData: (
            state,
            action: PayloadAction<Omit<CreateProfilePostData, 'name' | 'phone' | 'password'>>
        ) => {
            state.email = action.payload.email
        },
        setMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload
        }
    }
})

export const { setProfileData, setMessage } = profileSlice.actions
export default profileSlice.reducer
