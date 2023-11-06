import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "../../../components/materialTailwind/MaterialComponents";

const ContactUs = () => {
  return (
      <Card color="transparent" shadow={false} className="flex flex-col items-center justify-center my-20">
        <Typography variant="h4" color="blue-gray">
          Contact US
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to contact.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }} crossOrigin={undefined} />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }} crossOrigin={undefined} />
            <Textarea label="Message" />
          </div>
          
          <Button className="mt-6" fullWidth>
            Send Message
          </Button>
        </form>
      </Card>
  )
}

export default ContactUs