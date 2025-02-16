import React from "react";
import Button from "@/components/Button";

const LoginTest = () => {
  return (
    <div className="flex justify-center h-screen items-center bg-[url(/bg.jpg)] bg-cover">
      <div className="w-1/5 p-3 rounded-md shadow-xl  bg-white m-auto">
        <h1 className="text-center text-xl font-bold mt-6">Brand Name</h1>
        <h3 className="text-center text-md m-2">Login Form</h3>

        <label className="text-gray-700">Username</label>
        <input
          className="border-2 w-full py-1 px-2 mb-2 rounded-md"
          type="email"
        />

        <label className="text-gray-700">Password</label>
        <input
          className="border-2 w-full py-1 px-2 mb-2 rounded-md"
          type="password"
        />
        <a href="#" className="block text-red-500 font-bold mb-1  text-sm">
          Forgot Password?
        </a>
        <Button>Login</Button>
        <a
          href="#"
          className="block text-red-500 font-bold text-center text-sm mt-3 mb-2"
        >
          Create a New Account
        </a>
      </div>
    </div>
  );
};

export default LoginTest;
