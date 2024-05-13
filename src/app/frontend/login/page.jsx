"use client";
import { useForm } from "react-hook-form";
import { signIn   } from "next-auth/react";
import { useRouter } from "next/navigation";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    console.log(res);
    if (res.error) {
      alert(res.error);
    } else {
      console.log("ENVIANDO A DASHBOARD");
      router.push("/dashboard");
    }
  });

  return (
    <div className="flex  text-white justify-center items-center my-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="flex w-full font-bold ">Pagina de Login</h1>
        <label className="flex w-full ">Email</label>
        <input
          className="flex w-full text-black"
          type="text"
          {...register("email", { required: true })}
        />
        <label className="flex w-full ">Password</label>
        <input
          className="flex w-full text-black"
          type="password"
          {...register("password", { required: true })}
        />
        <button
          type="submit"
          className="text-white w-full bg-green-700 rounded-md my-3 p-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
