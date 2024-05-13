import React , { useRef } from "react";
import { useForm, SubmitHandler, useFormState } from "react-hook-form"
type Inputs = {
  email: string
  password: string,
  role:string
}

export enum Roles {
  'admin'='admin'
  'user'='user'
}
export default function Signup(){
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
      } = useForm<Inputs>({
        defaultValues: {
          email: '',
          password: '',
        }
      });
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    
    return(
        <>
<form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
  <h1>Sighup Page</h1>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" {...register("email",{ required: "email is required", pattern: /^\S+@\S+$/i })}    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"   />
    {errors.email && <span className="text-red-600">Please entered valid email </span>}
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="Password" {...register("password",{ required: "password is required",minLength:6, maxLength: 15  })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
    {errors.password && <span className="text-red-600">Password is required </span>}
    {errors.password && errors.password.type === "maxLength" && (
        <span className="text-red-600">Max length exceeded</span>
      )}
       {errors.password && errors.password.type === "minLength" && (
        <span className="text-red-600">length of password is to small</span>
      )}
  </div>
  <div className="mb-5">
    <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your role</label>
   <select {...register("role",{ required: "role is required" })}>
    {Object.keys(Roles).map((role,index)=>{
      return(
        <option key = {index}>{role}</option>
      )
    })}
   </select>
  </div>
  <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
        </>
    )
}