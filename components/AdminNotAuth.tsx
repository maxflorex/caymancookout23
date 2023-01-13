import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const AdminNotAuth = (props: Props) => {
    return (
        <div className='texture min-h-screen relative xl:px-0 px-4 text-mx-400'>

            <header className='container mx-auto'>
                <nav className='flex items-center justify-center py-4 border-b-[1px] border-mx-400 border-opacity-30'>
                    <Link href='/' className='font-semibold text-center'>Deep Blue Images</Link>
                </nav>
            </header>

            <main className='container mx-auto'>
                <section className='flex flex-col justify-center items-center py-12 border-b border-white border-opacity-10'>
                    <Image alt='Stop icon' src='/stop-icon.svg' width={80} height={80} className='pb-4' />
                    <h1 className='font-semibold text-2xl text-center'>You&apos;re not authorized to view this page</h1>
                    <div className="flex gap-2 items-baseline">
                        <Link href='/' className='pt-6 hover:underline underline-offset-8 transition-all duration-200'>Home</Link>
                        <span> / </span>
                        <Link href='/admin' className='pt-6 hover:underline underline-offset-8 transition-all duration-200'>Sign In</Link>
                    </div>
                </section>
            </main>

            <footer className='absolute bottom-0 w-full text-center py-4 text-xs'>Deep Blue Images  |  © 2023</footer>
        </div>
    )
}

export default AdminNotAuth