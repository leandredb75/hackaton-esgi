import React, { Component } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiUrl } from "../api";
export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post(apiUrl + "auth/signup", data).then(() => {
      alert(data);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        defaultValue=""
        type="text"
        placeholder="Enter your firstname"
        {...register("firstname", {
          required: true,
          minLength: 2,
        })}
        required
      />
      {errors.firstname && <span>firstname is required</span>}

      <input
        defaultValue=""
        type="test"
        placeholder="Enter your lastname"
        {...register("lastname", {
          required: true,
          minLength: 2,
        })}
        required
      />
      {errors.lastname && <span>lastname is required</span>}

      <input
        defaultValue=""
        type="email"
        placeholder="Enter your email"
        {...register("email", { required: true, minLength: 8 })}
        required
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
        required
      />

      <select {...register("roles")}>
        <option value="user">User</option>
        <option value="editor">Editor</option>
        <option value="admin">Admin</option>
      </select>

      {errors.roles && <span>password is required</span>}

      <input type="submit" />
    </form>
  );
}
