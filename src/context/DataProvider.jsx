import { createContext, useState } from "react";
import React from 'react'
export const DataContext = createContext();



const DataProvider = ({children}) => {
    const [html,sethtml]=useState('')
    const [css,setcss]=useState('')
    const [js,setjs]=useState('')
  return (
    <DataContext.Provider
    value={{
        html,
        sethtml,
        css,
        setcss,
        js,
        setjs
    }}
    >
    {children}
    </DataContext.Provider>
  )
}

export default DataProvider