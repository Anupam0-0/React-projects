import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

function ReactHookForm() {
  //use w/ zod but ok for this learning project
    const [credentials, setCredentials] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm();

  function onSubmitFrom(formData) {
    console.log(formData);
    setCredentials(formData)
    reset();
  }

  return (
    <div className="min-h-screen flex flex-col py-20 items-center border-[3px] border-red-400 bg-orange-100 ">
      <div className="h-[23rem] w-[28rem] flex flex-col gap-5 py-10 px-8 rounded-xl shadow-2xl bg-slate-800 text-slate-200 hover:text-slate-50 border-2 border-red-400 hover:scale-110 duration-500 ease-in-out">
        <h1 className="text-4xl">React Hook Form</h1>

        <form
          className="mt-5 flex flex-col gap-5"
          action=""
          onSubmit={handleSubmit(onSubmitFrom)}
        >
          <div className="flex justify-between ">
            <label htmlFor="email">Email</label>
            <input
              className="rounded text-black"
              {...register("email", { required: true })}
              name="email"
              type="email"
            />
          </div>

          {errors.email && (
            <span className="text-red-500 -my-3"> This field is required</span>
          )}

          <div className="flex justify-between">
            <label htmlFor="password">Password</label>
            <input
              className="rounded text-black"
              {...register("password", { required: true, minLength: 8 })}
              type="password"
              name="password"
            />
          </div>

          {errors.password && (
            <span className="text-red-500 -my-3">
              {" "}
              This field is required and must be at least 8 characters
            </span>
          )}
          

          <button
            type="submit"
            className="bg-blue-500 mx-20 mt-9  py-1 rounded-lg shadow hover:scale-105 active:scale-95 duration-200"
          >
            Submit
          </button>
        </form>
      </div>

          <div className="mt-12 md:mx-10">
            <h1 className="text-xl">Your data credentials were: {credentials.email} - {credentials.password}</h1>
            {/* <h1>Your Email was : {formData.email}</h1>
            <h1>Your Password was : {formData.password}</h1> */}
          </div>

    </div>
  );
}

export default ReactHookForm;
