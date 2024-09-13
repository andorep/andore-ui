import { useEffect, useState } from "react";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

const useWindowSize = () => {
  let width = 1281;
  let height = 0;
  if (isBrowser()) {
    width = window.innerWidth;
    height = window.innerHeight;
  }
  const [windowSize, setWindowSize] = useState({
    width,
    height,
  });

  useEffect(() => {
    let handleResize = () => {};
    if (isBrowser()) {
      handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (isBrowser()) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
