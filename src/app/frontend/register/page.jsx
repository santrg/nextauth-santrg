"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export function UserRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    if (data.password != data.confirmPassword) {
      alert("LA CONFIRMACIÓN NO COINCIDE CON EL PASSWORD");
    } else {
      try {
        const res = await fetch(`../api/register`, {
          method: "POST",
          body: JSON.stringify({
            username: data.username,
            email: data.email,
            password: data.password,
          }),
          headers: { "Content-Type": "application/json" },
        });
        router.push("/");
      } catch (error) {
        console.log(error.message);
      }
    }
  })

  return (
    <div className="flex justify-center items-center my-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="flex font-bold my-2 text-white">Registro de usuario</h1>
        <label htmlFor="username" className="text-white flex">
          Username
        </label>
        <input
          type="text"
          className=""
          {...register("username", {
            required: { value: true, message: "Username is required" },
          })}
        />
        <label htmlFor="email" className="text-white flex">
          Email
        </label>
        <input
          type="email"
          className=""
          {...register("email", {
            required: { value: true, message: "Email is required" },
          })}
          aria-invalid={errors.username ? "true" : "false"}
        />
        <label htmlFor="password" className="text-white flex">
          Password
        </label>
        <input
          type="password"
          className=""
          {...register("password", {
            required: { value: true, message: "Password is required" },
          })}
        />
        <label htmlFor="confirmPassword" className="text-white flex">
          Confirm Password
        </label>
        <input
          type="password"
          className="flex"
          {...register("confirmPassword", {
            required: { value: true, message: "Confirm Password is required" },
          })}
        />
        <button
          type="submit"
          className="text-white bg-blue-500 p-2 rounded-md flex w-full my-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserRegister;
