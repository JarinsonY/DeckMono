import { useAuth } from '@/context/AuthContext'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Navbar from '../Navbar'
import { ContainerLayout, Main } from './styled'

type Props = {
    children: React.ReactNode
}

const AppLayout = ({ children }: Props) => {
    return (
        <>
            <Head>
                <title>DexMono | JP</title>
                <meta name="description" content="Technical test for Monoma" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="../../assets/images/JP.png" type="image/x-icon" />
            </Head>
            <ContainerLayout>
                <Navbar />
                <Main>
                    {children}
                </Main>
            </ContainerLayout>
        </>
    )
}

export default AppLayout