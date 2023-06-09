import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { capitalizeStr } from '@/utils/funtions'
import DataRow from '../shared/DataRow'

type DetailsPokemon = {
    name: string,
    image: string,
    type: string,
    weight: number,
    height: number,
    moves: string[],
    abilities: string[],
    types: string[],
    stats: string[]
}

const Modal = ({ open, setOpen, details }: { open: boolean, setOpen: (open: boolean) => void, details: DetailsPokemon }) => {

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-100 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:p-6">
                                <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                                    <button
                                        type="button"
                                        className="rounded-md bg-gray-100 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                <div className="mt-10 justify-center overflow-hidden bg-gray-100 sm:rounded-lg">
                                    <div className="flex flex-row w-full px-4 py-5 sm:px-6">
                                        <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 rounded-full bg-gray-400 text-white sm:h-24 sm:w-24">
                                            <Image src={details.image} alt={capitalizeStr(details.name)} width={150} height={150} />
                                        </div>
                                        <div className="flex flex-col w-full h-full items-center self-center">
                                            <h3 className="text-lg font-medium leading-6 text-gray-900">{capitalizeStr(details.name)}</h3>
                                            <p className="mt-1 max-w-2xl text-sm text-gray-500">Details of {capitalizeStr(details.name)}</p>
                                        </div>
                                    </div>
                                    <div className=" px-4 py-5 sm:p-0">
                                        <dl className="sm:divide-y sm:divide-gray-200">
                                            <DataRow label="Type" description={details.type} />
                                            <DataRow label="Weight" description={`${details.weight.toString()} kg`} />
                                            <DataRow label="Height" description={`${details.height.toString()} m`} />
                                            <DataRow label="Moves" description={details.moves.map((move: any) => move.move.name).join(', ')} />
                                            <DataRow label="Abilities" description={details.abilities.map((ability: any) => ability.ability.name).join(', ')} />
                                            <DataRow label="Types" description={details.types.map((type: any) => type.type.name).join(', ')} />
                                            <DataRow label="Stats" description={details.stats.map((stat: any) => stat.stat.name).join(', ')} />
                                        </dl>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Modal;