"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import LoadingComponent from "@/components/loading";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.setAttribute("lang", locale);
  }, [locale]);

  const [load, setLoad] = useState(true);
  const [loadTime, setLoadTime] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    window.addEventListener("load", () => {
      const endTime = performance.now();
      setLoadTime(endTime - startTime);
    });
  }, []);

  setTimeout(
    () => {
      setLoad(false);
    },
    loadTime > 1000 ? 0 : 1000 - loadTime
  );

  return load ? (
    // <div className="flex items-center justify-center h-screen">
    //   <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900 dark:border-gray-100" />
    // </div>
    <LoadingComponent />
  ) : (
    <>{children}</>
  );
};

export default MainLayout;
