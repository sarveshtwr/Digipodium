import React from "react";
import Button from "@/components/Button";

const SignupTest = () => {
  return (
    <div className="flex justify-center h-screen items-center bg-[url(/bg.jpg)] bg-cover">
      <div className="w-1/5 p-3 rounded-md shadow-xl  bg-white m-auto">
        <h1 className="text-center text-xl font-bold mt-6">Brand Name</h1>
        <h3 className="text-center text-md m-2">Register</h3>

        <label className="text-gray-700">Name</label>
        <input
          className="border-2 w-full py-1 px-2 mb-2 rounded-md"
          type="text"
        />

        <label className="text-gray-700">Email</label>
        <input
          className="border-2 w-full py-1 px-2 mb-2 rounded-md"
          type="email"
        />

        <label className="text-gray-700">Password</label>
        <input
          className="border-2 w-full py-1 px-2 mb-2 rounded-md"
          type="password"
        />
        <label className="text-gray-700">Confirm Password</label>
        <input
          className="border-2 w-full py-1 px-2 mb-3 rounded-md"
          type="password"
        />
        <div className="mb-2">
          <input type="checkbox" className="w-5 h-3 " />
          <label className="font-bold mb-1 text-[11px]">
            I accept the
            <a href="#" className="text-red-500">
              Terms of Uses
            </a>{" "}
            &{" "}
            <a href="#" className="text-red-500">
              Privacy Policy
            </a>
          </label>
        </div>
        <Button>Register</Button>
      </div>
    </div>
  );
};

export default SignupTest;
