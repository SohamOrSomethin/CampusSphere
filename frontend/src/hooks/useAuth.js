import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axios";

export default function useAuth() {
  const {
    data,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const response = await axiosInstance.get("/auth/me");
      return response.data;
    },
    retry: false,
  });

  return {
    user: data?.user ?? null,
    isLoading,
    isError,
    isAuthenticated: !!data?.user,
    refetchUser: refetch,
  };
}
