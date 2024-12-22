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
        <button className={`bg-${bgColor} hover:bg-${bgColor}-200 text-white font-bold py-2 px-4 cursor-pointer mt-10 uppercase text-sm font-semibold text-white hover:text-zinc-600`}>
            {children}
        </button>
    )
}