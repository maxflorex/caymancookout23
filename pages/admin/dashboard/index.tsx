import { signOut } from 'firebase/auth';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { MouseEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminNotAuth from '../../../components/AdminNotAuth';
import AlbumList from '../../../components/AlbumList';
import EditProfile from '../../../components/EditProfile';
import { NewAlbum } from '../../../components/NewAlbum';
import StatsList from '../../../components/StatsList';
import { signInAdmin, signOutAdmin } from '../../../redux/adminSlice';
import { auth } from '../../api/firebase/config';

const Dashboard = () => {
    const [isAuth, setIsAuth] = useState(false)
    const [active, setActive] = useState('')
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

    return (
        <>
            <Head>
                <title>Dashboard | Deep Blue Images</title>
                <meta name="description" content="Admin page for Deep Blue Images" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="noindex" />
            </Head>


            <main className='texture'>
                <section className='flex gap-4 items-start min-h-screen'>

                    {/* SIDEBAR */}
                    <div className="flex h-full w-40 bg-mx-100 my-4 ml-4 p-4 rounded-md drop-shadow-sm">
                        <ul className="flex flex-col items-start h-full gap-2 font-semibold w-full">
                            {/* <li className='border-b border-mx-200 mx-auto w-full'>
                                <Image alt='Deep Blue Images Logo' src='/images/dbi-icon.png' width={32} height={32} className='self-center mx-auto pb-4' priority />
                            </li> */}
                            <li
                                className={`nav-icons ${active === 'new' && 'bg-mx-300'}`}
                                onClick={() => setActive('new')}><i className="ri-folder-add-fill"></i>New</li>
                            <li
                                className={`nav-icons ${active === 'albums' && 'bg-mx-300'}`}
                                onClick={() => setActive('albums')}><i className="ri-folders-fill"></i>Albums</li>
                            <li
                                className={`nav-icons ${active === 'stats' && 'bg-mx-300'}`}
                                onClick={() => setActive('stats')}><i className="ri-line-chart-line"></i>Stats</li>
                            <li
                                className={`nav-icons ${active === 'profile' && 'bg-mx-300'}`}
                                onClick={() => setActive('profile')}><i className="ri-file-user-fill"></i>Profile</li>
                        </ul>
                    </div>

                    {/* MAIN */}
                    <div className="flex-1 mr-4">
                        <div className="flex gap-2 items-center w-full bg-mx-300 my-4 p-4 rounded-md">
                            <Image alt='Deep Blue Images Logo' src='/images/dbi-icon.png' width={32} height={32} className='self-center' priority />
                            <h1 className='text-4xl font-bold'>Dashboard</h1>
                        </div>
                        <AnimatePresence>
                            {active === 'new' && <NewAlbum />}
                            {active === 'albums' && <AlbumList />}
                            {active === 'stats' && <StatsList />}
                            {active === 'profile' && <EditProfile />}
                        </AnimatePresence>
                    </div>
                </section>

                <button className="btn-logout" onClick={logout}>
                    Signout
                </button>
            </main>

        </>
    )
}

export default Dashboard
