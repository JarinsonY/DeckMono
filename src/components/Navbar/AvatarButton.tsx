import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image, { StaticImageData } from 'next/image'
import { useAuth } from '@/context/AuthContext'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const AvatarButton = ({ avatarImg }: { avatarImg: string | StaticImageData }) => {

    const { user, logout } = useAuth();

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-100 hover:bg-gray-50">
                    <Image src={avatarImg} alt="Avatar" width={40} height={40} />
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