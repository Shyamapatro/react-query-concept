import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useApi = (url = "", key = "") => {
  const { data, isLoading, isError, refetch } = useQuery([key], () => {
    return axios.get(url).then((res) => res.data);
  });

  return [data, isLoading, isError, refetch];
};
