"use client"; 

import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";


interface Product {
  id: number;
  title: string;
}

function Search() {
  const [query, setQuery] = useState<string>("");
  const [result, setResult] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    // If query is too short, clear results and stop
    if (!query || query.length < 2) {
      setResult([]);
      return;
    }

    const searchProduct = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );

        if (!response.ok) {
          throw new Error("Product not available");
        }

        const data = await response.json();
        setResult(data.products || []);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    // 2. Debounce logic: Wait 500ms after the user stops typing
    const timeoutId = setTimeout(() => {
      searchProduct();
    }, 500);

    // 3. CLEANUP: This cancels the search if the user types another letter before 500ms
    return () => clearTimeout(timeoutId);

  }, [query]); // 4. Add query here so the effect runs whenever typing happens

  return (
    <div className="relative flex flex-col items-center w-full p-5">
      <div className="relative w-full max-w-200 h-12">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What are you looking for?"
          className="w-full h-full pl-4 pr-10 border rounded-md outline-none text-base focus:ring-2 focus:ring-gray-300"
        />
        <IoSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg pointer-events-none" />
       
        {/* Results Dropdown */}
        {result.length > 0 && (
          <ul className="absolute top-full mt-1 w-full bg-white border border-gray-200 shadow-lg rounded-md z-50">
            {result.map((product) => (
              <li key={product.id} className="p-3 text-sm hover:bg-gray-100 cursor-pointer">
                {product.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      {loading && <div className="mt-2 text-xs text-gray-500">Searching...</div>}
      {error && <div className="mt-2 text-red-500 text-xs">{error}</div>}
    

    </div>
  );
}

export default Search;