import AppLayout from '@/components/AppLayout'
import Button from '@/components/shared/Button/index'
import DataRow from '@/components/shared/DataRow'
import { useAuth } from '@/context/AuthContext'
import { UserCircleIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

type Props = {}

const ProfilePage = (props: Props) => {

    const { user, logout } = useAuth()

    const router = useRouter()

    // Verificar si el usuario está autenticado
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
        }
    }, [router]);

    return (
        <AppLayout>
            <div className='h-full w-full flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold text-white'>Profile</h1>
                <UserCircleIcon className="h-56 w-56 text-gray-400" aria-hidden="true" />

                <div className=" px-4 py-5 sm:p-0 bg-slate-200">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <DataRow label="Name" description={user?.name || ""} />
                        <DataRow label="Username" description={user?.username || ""} />
                        <DataRow label="Email" description={user?.email || ""} />
                        <DataRow label="Phone" description={user?.phone || ""} />
                        <DataRow label="Age" description={user?.age || ""} />
                    </dl>
                </div>

                <Button
                    label="Logout"
                    type="submit"
                    onClick={logout}
                />
            </div>

        </AppLayout>
    )
}

export default ProfilePage