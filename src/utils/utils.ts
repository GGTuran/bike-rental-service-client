import axios from 'axios';
import { TBike } from "@/types/bike.interface";

export const fetchBikeById = async (id: string): Promise<TBike> => {
    const response = await axios.get<TBike>(`https://bike-rental-service-server.vercel.app/api/bikes/${id}`);
    return response.data;
  };