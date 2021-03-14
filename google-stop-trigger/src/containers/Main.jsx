import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";

export default function Main() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);
  console.log(loader);
  return <div>{loader ? <div className='loader'/> : <Hero />}</div>;
}
