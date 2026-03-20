"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

// 1. Rename to PascalCase
function SignUpPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      setError("Please fill all the information");
      return;
    }

    setLoading(true);
    setError(null);

    const userData = {
      firstName: name,
      email: email,
      password: password,
    };

    try {
      // Note: dummyjson.com/users/add doesn't actually create a real user in their DB, 
      // it just simulates the response. This is fine for testing!
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Successfully created", data);
        alert("Account Created Successfully!");
        setName("");
        setEmail("");
        setPassword("");
      } else {
        setError("Failed to create account");
      }
    } catch (err) {
      setError("Network failure. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-[1170px] mx-auto flex lg:flex-row flex-col items-center justify-between gap-10 px-4">
        
        {/* Left Image Section - Assuming this is a big illustration */}
        <div className="hidden lg:block w-full lg:w-[700px]">
          <Image 
            src="/images/Side Image.svg" // Replace with your actual large sign-up image
            alt="Sign Up Illustration" 
            width={705} 
            height={781} 
            className="object-contain"
            priority // Helps load this big image faster
          />
        </div>

        {/* Form Section */}
        <div className="w-full max-w-[371px] space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="font-inter font-medium text-[36px] tracking-wider mb-2">
              Create an account
            </h1>
            <p className="font-poppins text-base">Enter your details below</p>
          </div>

          <div className="space-y-6">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border-0 border-b border-gray-400 focus:border-black focus:outline-none transition-colors"
            />

            {/* Email Input */}
            <input
              type="email"
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border-0 border-b border-gray-400 focus:border-black focus:outline-none transition-colors"
            />

            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border-0 border-b border-gray-400 focus:border-black focus:outline-none transition-colors"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              onClick={handleSignUp}
              disabled={loading}
              className="w-full h-14 bg-[#DB4444] text-white font-medium rounded-sm hover:bg-[#c33a3a] transition-colors disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>

            {/* Google Sign Up */}
            <button className="w-full h-14 border border-gray-400 rounded-sm flex items-center justify-center gap-4 hover:bg-gray-50 transition-colors">
              <Image src="/images/Icon-Google.svg" alt="Google" width={24} height={24} />
              <span className="text-black font-medium">Sign up with Google</span>
            </button>

            {/* Login Redirect */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <p className="text-gray-600">Already have an account?</p>
              <Link href="/login" className="font-medium border-b border-gray-500 hover:text-red-500 transition-colors">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;