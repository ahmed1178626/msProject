import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function State() {
  const productValidationScema = yup.object({
    email: yup.string().required("Email is requrid"),
    password: yup.number().positive().min(6).max(11).required(),
    phoneNumber: yup.number().positive().min(700).max(10000).integer().required(),
  });

  const {register, handleSubmit, formState: { errors } } = useForm({ 
    resolver: yupResolver(productValidationScema)
    })

  const submitVals = (data)=>{
    console.log(data);
  }

  return (
    <>
      <form className="m-3" onSubmit={(handleSubmit(submitVals))}>
        <p style={{ color: "red", fontSize: "10px", margin: 0 }}>{errors.email?.message && errors.email?.message}</p>
        <input type="text"  {...register("email")}/>

        <p style={{ color: "red", fontSize: "10px", margin: 0 }}>{errors.password?.message && errors.password?.message}</p>
        <input type="password" {...register("password")}/>

        <p style={{ color: "red", fontSize: "10px", margin: 0 }}>{errors.phoneNumber?.message && errors.phoneNumber?.message}</p>
        <input type="tel" {...register("phoneNumber")} />

        <button className="btn btn-primary">Save info</button>
        {/* <div className="input-dtl"></div> */}
      </form>

      
    </>
  )}