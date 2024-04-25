import { useRouteError } from "react-router-dom"
import React from 'react'

export const Error = () => {
    const err = useRouteError()
    console.log(err)
  return (
    <div>
        <h1>{err.status} : {err.statusText}</h1>
        <h2>URL to sahi se daal!!</h2>
    </div>
  )
}
