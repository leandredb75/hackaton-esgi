import React, { Component } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        defaultValue=""
        type="email"
        placeholder="Enter your email"
        {...register("email", { required: true, minLength: 8 })}
      />
      {errors.email && <span>email is required</span>}

      <input
        type="password"
        placeholder="Enter your password"
        {...register("password", {
          required: true,
          maxLength: 255,
          minLength: 8,
        })}
      />
      {errors.password && <span>password is required</span>}

      <input type="submit" />
    </form>
  );
}
