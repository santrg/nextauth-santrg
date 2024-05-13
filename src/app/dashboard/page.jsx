"use client"
import { signOut } from "next-auth/react"


function DashboardPage() {
  return (
    <div className="flex grid grid-cols-1  mx-4 my-10 text-white font-extrabold justify-center items-center">
      <p className="flex text-white font-extrabold justify-center items-center my-9">Wellcome to Dashboard </p>
      <div className="flex grid-cols-1  text-white font-extrabold justify-center items-center my-9">
        <button onClick={() => signOut()} className="flex bg-purple-500 rounded-md p-3 ">Signout</button>
      </div>
    </div>
  )

}
export default DashboardPage
