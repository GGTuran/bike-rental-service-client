import axios from 'axios';
import { TBike } from "@/types/bike.interface";

export const fetchBikeById = async (id: string): Promise<TBike> => {
    const response = await axios.get<TBike>(`http://localhost:5000/api/bikes/${id}`);
    return response.data;
  };