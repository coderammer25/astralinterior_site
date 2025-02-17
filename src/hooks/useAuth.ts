import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";

export function useAuth() {
  return useContext(AuthContext)
}