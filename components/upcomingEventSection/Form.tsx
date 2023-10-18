import React, { FC } from 'react'
import {
    Input,
    Button,
} from '../materialTailwind/MaterialComponents'

interface formTypes {
    value?: string;
}

const Form: FC<formTypes> = ({value}) => {
    return (
        <form className="mt-8 mb-2 w-full max-w-screen-lg">
            <div className="mb-1 flex flex-col gap-6">

                {/* User Name  */}
                <Input
                    size="lg"
                    placeholder="User Name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    crossOrigin={undefined}
                />

                {/* Email  */}
                {
                    (value === "register") &&
                    <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        crossOrigin={undefined}
                    />
                }

                {/* Password  */}
                <Input
                    type="password"
                    size="lg"
                    placeholder="Password"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    crossOrigin={undefined}
                />
                {/* Confirm Password  */}
                {
                    (value === "register") &&
                    <Input
                        type="password"
                        size="lg"
                        placeholder="Confirm Password"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        crossOrigin={undefined}
                    />
                }
            </div>

            {
                (value === "register") ?
                    <Button className="mt-6 bg-[#f36b3b] rounded-sm" fullWidth>
                        Register
                    </Button>
                    :
                    <Button className="mt-6 bg-[#f36b3b] rounded-sm" fullWidth>
                        Login
                    </Button>
            }
        </form>
    )
}

export default Form