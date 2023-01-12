import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { auth } from '../pages/api/firebase/config'

type Props = {
    email: string,
    password: string,
}

const useLogin = async ({ email, password }: Props) => {

    try {
        const user = await signInWithEmailAndPassword(
            auth,
            email,
            password
        )
    } catch (error: any) {
        console.log(error.message);
        alert('Wrong credentials')
    }

}

export default useLogin