"use client"
import userAuthStore from "@/shared/api/userAuthStore"
import Sidebar from "@/widgets/profile/sidebar/Sidebar"
import { useEffect } from "react"

const page = () => {
      const {getProfile} = userAuthStore()
      useEffect(() => {
            getProfile()
      }, [])
      return (
            <div>
                  <Sidebar />
            </div>
      )
}

export default page
