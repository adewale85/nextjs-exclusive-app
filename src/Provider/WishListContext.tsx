"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface WishlistItem {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
}

interface WishlistContextType {
  wishList: WishlistItem[];
  addToWishList: (product: WishlistItem) => void;
  removeFromWishList: (id: number) => void;
}

const WishListContext = createContext<WishlistContextType | null>(null);

export const WishListProvider = ({ children }: { children: React.ReactNode }) => {
  // 1. Initialize with an empty array (Safe for Server-Side Rendering)
  const [wishList, setWishList] = useState<WishlistItem[]>([]);
  
  // 2. Track if the component has mounted to prevent hydration errors
  const [isLoaded, setIsLoaded] = useState(false);

  // 3. Load from localStorage ONLY once the component is in the browser
  useEffect(() => {
    const savedWishList = localStorage.getItem("WishList");
    if (savedWishList) {
      try {
        setWishList(JSON.parse(savedWishList));
      } catch (error) {
        console.error("Failed to parse wishlist:", error);
      }
    }
    setIsLoaded(true); // Now we are safe to start saving changes
  }, []);

  // 4. Save to localStorage whenever wishList changes, but ONLY after initial load
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("WishList", JSON.stringify(wishList));
    }
  }, [wishList, isLoaded]);

  const addToWishList = (product: WishlistItem) => {
    setWishList((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev; 

      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
        },
      ];
    });
  };

  const removeFromWishList = (id: number) => {
    setWishList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WishListContext.Provider value={{ wishList, addToWishList, removeFromWishList }}>
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => {
  const context = useContext(WishListContext);
  if (!context) throw new Error("useWishList must be used within WishListProvider");
  return context;
};