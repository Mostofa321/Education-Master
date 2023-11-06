import Image from "next/image";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "../materialTailwind/MaterialComponents";
import { FaFacebookF, FaTwitter, FaGooglePlusG, } from "react-icons/fa"

const ProfileCard = () => {
    return (
        <div>
            <Card className="lg:w-[253px] p-0 lg:-translate-y-[140px] rounded-none">
                <CardHeader floated={false} className="lg:h-64 m-[1px] rounded-none">
                    <Image src="/student.jpg" width={245} height={245} className="mx-auto border-4 w-full h-full" alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Emily Jessica
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                        Student Id: ST17241
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Tooltip content="Like">
                        <Typography
                            as="a"
                            href="#facebook"
                            variant="lead"
                            color="blue"
                            className="text-[#039be5]"
                            textGradient
                        >
                            <FaFacebookF />
                        </Typography>
                    </Tooltip>
                    <Tooltip content="Follow">
                        <Typography
                            as="a"
                            href="#twitter"
                            variant="lead"
                            color="light-blue"
                            className="text-[#039be5]"
                            textGradient
                        >
                            <FaTwitter />
                        </Typography>
                    </Tooltip>
                    <Tooltip content="Follow">
                        <Typography
                            as="a"
                            href="#instagram"
                            variant="lead"
                            color="purple"
                            className="text-[#039be5]"
                            textGradient
                        >
                            <FaGooglePlusG />
                        </Typography>
                    </Tooltip>
                </CardFooter>
            </Card>
        </div>
    );
}

export default ProfileCard;