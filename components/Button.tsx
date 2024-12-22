"use client"

import { useEffect } from "react"

export default function Button({ children, bgColor }: {children: React.ReactNode, bgColor: string}) {

    // const handleButtonColor = (modules: any) => {
    //     return modules.buttonColor
    //   }

    // useEffect(() => {
    //     handleButtonColor(modules)
    // }, [modules.buttonColor])

    return (
        <button className={`bg-${bgColor} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>
            {children}
        </button>
    )
}