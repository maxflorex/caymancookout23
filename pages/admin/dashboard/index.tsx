import { onAuthStateChanged, signOut } from 'firebase/auth';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { MouseEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { prototype } from 'stream';
import AdminNotAuth from '../../../components/AdminNotAuth';
import { signInAdmin, signOutAdmin } from '../../../redux/adminSlice';
import { auth } from '../../api/firebase/config';

const Dashboard = () => {
    const [isAuth, setIsAuth] = useState(false)
    const router = useRouter()
    const dispatch = useDispatch()
    const admin: any = useSelector((state: any) => state.administrator.value.user)


    // LOGOUT
    const logout = async (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()

        await signOut(auth).then(() => {
            dispatch(signOutAdmin())
            console.log('Signed out. See you soon!');
        }).then(() => {
            router.push('/admin')
        })
    }

    useEffect(() => {
        if (admin?.email) {
            setIsAuth(true)
        }
    }, [admin])


// AUTH LISTENER
    useEffect(() => {
        auth.onAuthStateChanged(async (user: any) => {
            if (user) {
                dispatch(signInAdmin({ user }))
            } else {
                dispatch(signOutAdmin())
            }
        });
    }, [dispatch]);


// SHOW IF NOT SIGNED IN
    if (!isAuth) {
        return <AdminNotAuth />
    }

    console.table('admin', admin);
    

    return (
        <>
            <Head>
                <title>Dashboard | Deep Blue Images</title>
                <meta name="description" content="Admin page for Deep Blue Images" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="noindex" />
            </Head>
            <main className='texture min-h-screen'>
                <section className='p-4'>
                    <h1 className='text-4xl font-bold'>Dashboard</h1>
                </section>

                <button className="absolute top-0 right-0 p-4 bg-mx-100 m-4 rounded-md hover:bg-mx-300" onClick={logout}>
                    Signout
                </button>
            </main>
        </>
    )
}

export default Dashboard
