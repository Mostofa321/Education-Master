import { FC } from 'react'
import { Input, Option, Select, Typography } from '../materialTailwind/MaterialComponents'

const inputStyle = (`
    w-3/5
    border 
    border-[#cecece] 
    rounded-sm 
    bg-white 
    text-gray-900 
    ring-4 
    ring-transparent 
    placeholder:text-gray-500 
    focus:!border-[#66afe9] 
    focus:!border-t-[#66afe9]
    focus:!shadow-md 
`)

interface inputTypes {
    lebel: string;
    placeholder?: string;
    inputType?: string;
    isSelectInput: boolean;
    selectData?: string[]
}

const FormInput: FC<inputTypes> = ({ lebel, placeholder, inputType, isSelectInput, selectData }) => {
    return (
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center">
            <Typography variant="h6" color="blue-gray" className="mb-3 lg:mb-0  w-2/5 text-[white] lg:text-[black]">
                {lebel}:
            </Typography>
            {
                isSelectInput ||
                < Input
                    size="lg"
                    placeholder={placeholder}
                    type={inputType}
                    className={inputStyle}
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    crossOrigin={undefined}
                />
            }

            {
                isSelectInput &&
                <Select
                    color="blue"
                    label="-- Select course --"
                    className=' bg-[white]'
                >
                    {
                        selectData?.map((option, index) => (

                            <Option key={index}>{option}</Option>
                        ))
                    }
                </Select>
            }
        </div>
    )
}

export default FormInput