"use client";
import axios from "axios";
import { Formik } from "formik";
import { useParams } from "next/navigation";
import React, { use, useEffect, useState } from "react";

const UpdateUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    const res = await axios.get("http://localhost:5000/user/getbyid/" + id);
    console.log(res.data);
    setUserData(res.data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  if (userData === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1 className="text-center my-6 font-bold text-2xl"> Update User</h1>
      <Formik initialValues={userData} onSubmit={handleFormSubmit}>
        {(updateForm) => (
          <form onSubmit={updateForm.handleSubmit}>
            <div className="grid gap-y-4">
              {/* Form Group */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    onChange={updateForm.handleChange}
                    value={updateForm.values.name}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    required=""
                    aria-describedby="email-error"
                  />
                  <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg
                      className="size-5 text-red-500"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                </div>

                {updateForm.errors.name && updateForm.touched.name && (
                  <p className="text-xs text-red-600 mt-2" id="email-error">
                    {updateForm.errors.name}
                  </p>
                )}
              </div>
              {/* End Form Group */}
              {/* Form Group */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Email address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    onChange={updateForm.handleChange}
                    value={updateForm.values.email}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    required=""
                    aria-describedby="email-error"
                  />
                  <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg
                      className="size-5 text-red-500"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                </div>
                {updateForm.errors.email && updateForm.touched.email && (
                  <p className="text-xs text-red-600 mt-2" id="email-error">
                    {updateForm.errors.email}
                  </p>
                )}
              </div>
              {/* End Form Group */}
              {/* Form Group */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="password"
                    onChange={updateForm.handleChange}
                    value={updateForm.values.password}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    required=""
                    aria-describedby="password-error"
                  />
                  <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg
                      className="size-5 text-red-500"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                </div>
                {updateForm.errors.password && updateForm.touched.password && (
                  <p className="text-xs text-red-600 mt-2" id="email-error">
                    {updateForm.errors.password}
                  </p>
                )}
              </div>
              {/* End Form Group */}
              {/* Form Group */}
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="confirmPassword"
                    onChange={updateForm.handleChange}
                    value={updateForm.values.confirmPassword}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    required=""
                    aria-describedby="confirm-password-error"
                  />
                  <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                    <svg
                      className="size-5 text-red-500"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                </div>
                {updateForm.errors.confirmPassword &&
                  updateForm.touched.confirmPassword && (
                    <p className="text-xs text-red-600 mt-2" id="email-error">
                      {updateForm.errors.confirmPassword}
                    </p>
                  )}
              </div>
              {/* End Form Group */}
              {/* Checkbox */}
              <div className="flex items-center">
                <div className="flex">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <div className="ms-3">
                  <label
                    htmlFor="remember-me"
                    className="text-sm dark:text-white"
                  >
                    I accept the{" "}
                    <a
                      className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              {/* End Checkbox */}
              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Sign up
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateUser;
