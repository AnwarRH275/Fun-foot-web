import { Link } from "react-router-dom";
import React ,{useState,Fragment} from "react";
import {
  Alert,
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


export function SignUp() {
  
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [color, setColor] = useState('red');
  const [msg,setMsg] = useState('');


  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const submitForm = (data) =>{
    console.log(data);
    console.log(watch('username'));
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
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label={errors.email ? 'Username is required':'Username'}  color={errors.username ? 'red':'blue'} {...register('username',{required:true,maxLength:100})} size="lg" />
  
            <Input type="email" label={errors.email ? 'Email is required':'Email'}  color={errors.email ? 'red':'blue'} {...register('email',{required:true,maxLength:100})}  size="lg" />
            <Input type="password" color={errors.password ? 'red':'blue'} label={errors.password ? 'Password is required':'Password'}{...register('password',{required:true,maxLength:100})} size="lg" />

            <Input type="password" color={errors.confirmPassword ? 'red':'blue'} label={errors.confirmPassword ? 'Confirm password is required':'Confirm password'}  {...register('confirmPassword',{required:true,maxLength:100})} size="lg" />

            <div className="-ml-2.5">
              <Checkbox label="I agree the Terms and Conditions" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleSubmit(submitForm)}  fullWidth>
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/auth/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
