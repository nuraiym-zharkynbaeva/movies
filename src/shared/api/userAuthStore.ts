import axios from "axios";
import { create } from "zustand";
import { url } from "./vars";

interface IUser{
      name: string, 
      phone: string, 
      email: string
}
interface IUserStore{
      user: IUser | null,
      login: (opt: {email: string, password: string}) => void,
      update: (opt: {email: string, phone: string}) => void,
      register: (opt: {name: string, email: string, password: string, phone: string}) => void,
      getProfile: () => void
}

const userAuthStore = create<IUserStore>()((set) => ({
      user: null,
      login: async(opt) => {
            try {
                  const res = await axios.post(`${url}/auth/login`, opt)
                  console.log(res);
                  set({user: res.data.data.user})
                  localStorage.setItem("token", res.data.token)
            } catch (error) {
                  console.log(error);
            }
      },
      update: async(opt) => {
            try {
                  const res = await axios.patch(`${url}/auth/update`, opt, {
                        headers: {
                              Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                  })
                  console.log(res);
                  set({user: res.data.data.user})
            } catch (error) {
                  console.log(error);
            }
      },
      register: async(opt) => {
            try {
                  const res = await axios.post(`${url}/auth/register`, opt)
                  console.log(res);
                  set({user: res.data.data.user})
                  localStorage.setItem("token", res.data.token)
            } catch (error) {
                  console.log(error);
            }
      },
      getProfile: async() => {
            try {
                  const res = await axios.get(`${url}/auth/profile`, {
                        headers: {
                              Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                  })
                  console.log(res);
                  set({user: res.data})
            } catch (error) {
                  console.log(error);
            }
      }
}))

export default userAuthStore