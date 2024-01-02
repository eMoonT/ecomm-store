"use client";

import { useEffect, useState } from "react";
import { Toaster } from 'react-hot-toast'

const ToastProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return <div><Toaster /></div>;
};

export default ToastProvider;
