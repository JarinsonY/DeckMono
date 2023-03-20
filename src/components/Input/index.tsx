import { ExclamationCircleIcon } from "@heroicons/react/20/solid"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { FieldError } from "react-hook-form/dist/types/errors"
import { InputContainer } from "./styled"

type Props = {
    label: string
    type: string
    id: string
    placeholder?: string
    hasError: boolean | FieldError | undefined
    errors: any
    register: any
}

function Input({
    label,
    type,
    id,
    placeholder,
    hasError,
    errors,
    register
}: Props) {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <InputContainer
                    type={showPassword ? "text" : type}
                    id={id}
                    placeholder={placeholder}
                    aria-invalid="true"
                    aria-describedby={`${id}-error`}
                    hasError={hasError}
                    {...register(id)}
                />

                {type === "password" &&
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        <button
                            type="button"
                            className="text-gray-500 focus:outline-none focus:text-gray-700"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeSlashIcon className="h-5 w-5" aria-hidden="true" /> : <EyeIcon className="h-5 w-5" aria-hidden="true" />}
                        </button>
                    </div>
                }
                {hasError && <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>}
            </div>
            {hasError &&
                <p className="mt-2 text-sm text-red-600" id={`${id}-error`}>
                    {errors.message}
                </p>
            }
        </div>
    )
}

export default Input