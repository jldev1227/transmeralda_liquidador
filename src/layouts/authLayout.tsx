import { Outlet } from "react-router-dom"

export default function AuthLayout() {
  return (
    <>
        <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
            <div className="md:w-1/32 lg:w-3/5 xl:w-2/5">
              <Outlet/>
            </div>
        </main>
    </>
  )
}