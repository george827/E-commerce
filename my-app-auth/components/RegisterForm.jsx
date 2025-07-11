"use client";
import Link from "next/link";
import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
       const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      })
       
      if(res.ok) {
        setName("");
        setEmail("");
        setPassword("");
        setError("");
      
      }

    }catch (err){
        console.error("Error during registration:", err);
        setError("Failed to register user", err.message || "An unexpected error occurred");

    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2 rounded-md">
            Register
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2 font-bold">
              {error}
            </div>
          )}
          <Link href="/" className="mt-3 text-sm ">
            Already have an Account?{" "}
            <span className="hover:underline text-blue-500">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
