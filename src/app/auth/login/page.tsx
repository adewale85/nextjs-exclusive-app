"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface User {
  id: number;
  username: string;
  email: string;
  token: string;
}

function Page() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mounted, setMounted] = useState(false);

  // 1. Solution: Set mounted to true once the component is in the browser
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter your email and password");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Note: DummyJSON usually requires 'username' (e.g., 'emilys')
          username: email, 
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Invalid login details");
      }

      const data: User = await response.json();
      setUser(data);
      
      // 2. Solution: Only access localStorage inside the client-side handler
      localStorage.setItem("token", data.token);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // 3. Solution: Prevent the UI from rendering until the client is ready
  if (!mounted) {
    return null; // Or a loading spinner
  }

  return (
    <div className="w-full max-w-[1305px] mx-auto lg:h-[781px] h-auto lg:px-0 px-4 py-5 lg:py-2 flex flex-col lg:flex-row items-center justify-center lg:gap-30 gap-12">
      {/* Side Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image 
          src="/images/Side Image.svg" 
          alt="Slide" 
          width={705} 
          height={781} 
          className="object-contain"
          priority // Ensures this large image loads quickly
        />
      </div>

      {/* Login Form */}
      <div className="space-y-8 lg:w-1/2">
        <div className="space-y-5">
          <h1 className="lg:text-[36px] text-[24px] font-medium leading-tight">
            Log in to Exclusive
          </h1>
          <p className="font-poppins lg:text-[16px] text-sm">
            Enter your details below
          </p>
        </div>

        <div className="space-y-8">
          <input
            type="text"
            placeholder="Email or Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="lg:w-[370px] w-full p-2 border-b border-gray-300 outline-none focus:border-black transition-colors"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="lg:w-[370px] w-full p-2 border-b border-gray-300 outline-none focus:border-black transition-colors"
          />

          <div className="flex lg:flex-row flex-col gap-6 lg:gap-12 items-center">
            <button
              onClick={handleLogin}
              disabled={loading}
              className="lg:w-[143px] w-full h-14 bg-[#Db4444] text-white rounded-sm font-medium hover:bg-[#c33a3a] transition-all disabled:opacity-50"
            >
              {loading ? "Logging..." : "Login"}
            </button>

            <button className="lg:w-[143px] w-full text-[#Db4444] text-[16px] hover:underline transition-all">
              Forget Password?
            </button>
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {user && (
            <div className="mt-4 p-3 bg-green-50 rounded-sm border border-green-200">
              <p className="text-green-600">Welcome back, {user.username}!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;