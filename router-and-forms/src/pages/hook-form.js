import { useForm } from "react-hook-form";

import React from "react";

export default function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // mode: "all"
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        // fazer o pedido para a API
        console.log(data);
      })}
    >
      <label htmlFor="firstName">First Name:</label>
      <input
        {...register("firstName", { required: "This is required" })}
        id="firstName"
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <label htmlFor="lastName">Last Name:</label>
      <input
        {...register("lastName", {
          required: "This is required",
          maxLength: { value: 4, message: "You exceeded the max length" },
        })}
      />
      {errors.lastName && <p>{errors.lastName.message}</p>}

      <label htmlFor="age">Age</label>
      <input
        type="number"
        {...register("age", { valueAsNumber: true })}
        id="age"
      />

      <label htmlFor="developer">Are you a developer?</label>
      <input {...register("developer")} value="yes" type="checkbox" />

      <label htmlFor="developer">Email</label>
      <input
        type="text"
        {...register("email", {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Wrong format. e.g youmail@gmail.com",
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor="developer">Password</label>
      <input
        type="password"
        {...register("password", {
          required: true,
          minLength: 5,
        })}
      />
      {errors.password && <p>You need at least 5 characters</p>}

      <input type="submit" />
    </form>
  );
}
