import {
    Card,
    Button,
} from "../materialTailwind/MaterialComponents";
import FormInput from "./FormInput";



const AdmissionForm = () => {
    return (
        <Card color="transparent" shadow={false}>
            <form className="mt-8 lg:-mt-2 mb-2 w-80 lg:w-[80%] max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                    {/* Name Start */}
                    <FormInput
                        lebel={"Full Name"}
                        placeholder={"Enter your name"}
                        inputType={"text"}
                        isSelectInput={false}
                    />
                    {/* Name End */}

                    {/* Phone Start */}
                    <FormInput
                        lebel={"Phone"}
                        placeholder={"Enter your phone number"}
                        inputType={"number"}
                        isSelectInput={false}
                    />
                    {/* Phone End */}

                    {/* Email Start */}
                    <FormInput
                        lebel={"Email Id"}
                        placeholder={"Enter email"}
                        inputType={"email"}
                        isSelectInput={false}
                    />
                    {/* Email End */}

                    {/* City Start */}
                    <FormInput
                        lebel={"Your City"}
                        placeholder={"Enter your city"}
                        inputType={"text"}
                        isSelectInput={false}
                    />
                    {/* City End */}

                    {/* Education Start */}
                    <FormInput
                        lebel={"Education"}
                        placeholder={"Enter your education"}
                        inputType={"text"}
                        isSelectInput={false}
                    />
                    {/* Education End */}

                    {/* Select course start  */}
                    <FormInput
                        lebel={"Course"}
                        selectData={["react", "javascript", "typeScript"]}
                        isSelectInput={true}
                    />
                    {/* Select course end  */}

                </div>

                <Button className="mt-6 text-[white] bg-[#ef612f] rounded-sm" fullWidth>
                    APPLY NOW
                </Button>
            </form>
        </Card>
    )
}

export default AdmissionForm