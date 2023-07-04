"use client";
import axios from "axios";
import { signIn, getProviders } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [providers, setProviders] = useState<any>({});
  useEffect(() => {
    getProviders().then((prov) => {
      setProviders(prov);
    });
  }, []);
  const [error, setError] = useState<null | string>(null);

  // Credentials
  const onSubmit = async ({ email, password }: FormData) => {
    const user = { email, password };

    try {
      const validUser = await axios.post(
        `${process.env.NEXT_PUBLIC_PREFIX_API_URL}/api/login`,
        { ...user }
      );

      if (validUser.status === 200) {
        await signIn("credentials", {
          ...user,
          redirect: true,
          callbackUrl: "/",
        });
      } else {
        throw new Error();
      }
    } catch (error: any) {
      const errorMessage = error.response.data.message;
      setError(() => errorMessage);

      setTimeout(() => {
        setError(() => "");
      }, 10000);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <form
        className="w-96 bg-white p-8 flex flex-col rounded-sm"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h1 className="pb-8 text-center text-xl">Login with:</h1>
        {/* Providers */}
        <div className="pb-8">
          {Object.values(providers).map((provider: any) => {
            if (provider.id === "credentials")
              return <div key="credentials"></div>;

            return (
              <button
                key={provider.id}
                onClick={() =>
                  signIn(provider.id, { callbackUrl: "/", redirect: true })
                }
                className="w-full bg-black p-3 text-white"
              >
                {provider.name}
              </button>
            );
          })}
        </div>
        <p className="text-center">Or</p>
        <div className="mb-4">
          <label className="block text-black" htmlFor="email">
            Email
          </label>
          <input
            className="border border-gray-400 rounded-md px-2 py-1 w-full font-sans"
            type="text"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 font-sans">Required</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-black" htmlFor="password">
            Password
          </label>
          <input
            className="border border-gray-400 rounded-md px-2 py-1 w-full font-sans"
            type="password"
            id="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500 font-sans">Required</span>
          )}
        </div>
        <button
          className="bg-black text-white px-4 py-2 rounded-md"
          type="submit"
        >
          Login
        </button>
        <Link
          className="text-black mt-4 text-center underline"
          href="/auth/register"
        >
          Don&apos;t have an account?
        </Link>
        {/* Error message */}
        {error && (
          <div className="p-3 bg-red-500 flex items-center justify-center mt-5">
            <p className="text-center text-white font-sans">{error}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
