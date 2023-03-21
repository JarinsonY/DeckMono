import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import { useRouter } from 'next/router'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const AvatarButton = () => {

    const router = useRouter();
    const { user, logout } = useAuth();

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md py-2 px-6 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-all">
                    <UserCircleIcon className="h-10 w-10 text-gray-400" aria-hidden="true" />
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <div className="px-4 py-3">
                            <p className="text-sm">Signed in as</p>
                            <p className="truncate text-sm font-medium text-gray-900">{user?.email}</p>
                        </div>

                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href="/profile"
                                    className={classNames(
                                        router.pathname === "/profile" ? 'bg-gray-300 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Profile
                                </Link>
                            )}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    className={classNames(
                                        active ? 'bg-gray-100 text-red-900' : 'text-red-700',
                                        'block w-full px-4 py-2 text-left text-sm'
                                    )}
                                    onClick={() => logout()}
                                >
                                    Sign out
                                </button>
                            )}
                        </Menu.Item>

                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default AvatarButton;