"use client"

import { use, useEffect } from "react";

export default async function getButtonColor() {
    
    const handleButtonColor = (modules: any) => {
        if (modules.buttonColor === "orange") {
          return "#f87e33";
        } else {
          return "#222222";
        }
      }  
    useEffect(() => {
    }, [])

    return handleButtonColor(module)

}