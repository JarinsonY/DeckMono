import Head from 'next/head'
import { useRouter } from 'next/router';

export default function Home() {
    // useRouter
    const router = useRouter();

    return (
        <>
            <Head>
                <title>DexMono | JP</title>
                <meta name="description" content="Technical test for Monoma" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="w-screen h-screen flex flex-col items-center justify-center h-100 flex-1 px-20 text-center bg-slate-800">
                <p className='text-white'>
                    Get started DEXMONO
                </p>
                <code
                    className="mt-7 py-3 px-10 font-mono font-black text-green-500 hover:text-green-300 bg-gray-900 hover:bg-gray-600 rounded-md cursor-pointer"
                    onClick={() => router.push('/login')}
                >
                    Go to login
                </code>
            </main>
        </>
    )
}
