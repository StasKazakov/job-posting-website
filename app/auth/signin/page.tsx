"use client";

import { login } from "@/lib/auth";
import { FaGithub } from "react-icons/fa";

export default function SignInPage() {
  
  return (
    <div className="text-black flex flex-col items-center justify-between h-[calc(100vh-140px)] overflow-hidden px-4">

      <div className="flex flex-col items-center justify-center flex-grow">
        <h2 className="mb-2 text-4xl text-center">Welcome to the JobBoard</h2>
        <p className="mb-16 text-3xl text-center">
          Sign in to post jobs or apply for opportunities
        </p>

        <button
          onClick={login}
          className="flex py-2 px-8 border-2 border-gray-700 justify-center items-center hover:bg-gray-700 hover:text-white rounded-md transition-colors duration-500"
        >
          <FaGithub className="text-2xl" />
          <span className="pl-2 font-bold">Continue with Github</span>
        </button>
      </div>

      <div className="flex flex-col text-gray-500 text-center">
        <span>By signing in you agree to our</span>
        <a href="" className="hover:text-blue-500 hover:underline">
          Terms of Service
        </a>
      </div>

    </div>
  );
}
