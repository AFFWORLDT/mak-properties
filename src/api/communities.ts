import { api, handleApiError } from "@/src/lib/axios"
import axios from "axios";

export const getAllCommunities = async (page: number = 1, size: number = 12, sortBy: string = 'total_count', sortOrder: string = 'desc') => {
   try {
     const res = await api.get(`/locations/communities?sort_by=${sortBy}&sort_order=${sortOrder}&page=${page}&size=${size}`)
     return res.data
   } catch (error) {
    throw handleApiError(error)
   }
}

export const getCommunityArticles = async (communityName: string) => {
  try {
    const encodedName = encodeURIComponent(communityName);
    const response = await axios.get(
      `https://makproperties-api.propfusion.io/locations/communities/${encodedName}/articles`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching community articles:', error);
    throw error;
  }
};