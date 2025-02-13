import React from 'react';
import AdminLogin from "../../components/AdminLogin"
import logo from "../../../public/astral-logo.png";
import Image from 'next/image';
export default function page() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-14 w-14 items-center justify-center rounded-md ">
            <Image src={logo} alt="" />
          </div>
          Astral Interior
        </a>
        <AdminLogin />
      </div>
    </div>
  )
}
