export interface ProfileEditableData {
    name: string
    phone: string
}

export interface ProfileData extends ProfileEditableData {
    email: string
}

export interface CreateProfilePostData {
    name: string
    email: string
    phone: string
    password: string
    message?: string | null
}
