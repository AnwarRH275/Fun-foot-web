import React,{useState} from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import Notification from "@/components/Notification";
import { useForm } from "react-hook-form";


export function SignIn() {
  
  const [show, setShow] = useState(false);
  const [color, setColor] = useState('red');
  const [msg,setMsg] = useState('');

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  const submitForm = (data) =>{
    console.log(data);
   
  }

  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <div className="relative mr-20">
          <Notification show = {show} color = {color} setShow = {setShow} msg={msg}/>
        </div>
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
            <form >
              <CardBody className="flex flex-col gap-4">
                  
                  <Input type="text" label="Username" {...register('username',{required:true,maxLength:100})} size="lg" />
                  <Input type="password" label="Password" {...register('password',{required:true,maxLength:100})}  size="lg" />
                  <div className="-ml-2.5">
                    <Checkbox label="Remember Me" />
                  </div>
                </CardBody>
              <CardFooter className="pt-0">
                  <Button variant="gradient" onClick={handleSubmit(submitForm)} fullWidth>
                    Sign In
                  </Button>
                  <Typography variant="small" className="mt-6 flex justify-center">
                    Don't have an account?
                    <Link to="/auth/sign-up">
                      <Typography
                        as="span"
                        variant="small"
                        color="blue"
                        className="ml-1 font-bold"
                      >
                        Sign up
                      </Typography>
                    </Link>
                  </Typography>
              </CardFooter>
              
            </form>
              
        </Card>
      </div>
    </>
  );
}

export default SignIn;
