import { api, handleApiError } from "@/src/lib/axios"

export const getAllProperties = async (querry?:string) => {
   try {
     const queryString = querry ? `?${querry}` : '';
     const res = await api.get(`/properties/projects${queryString}`)
     return res.data
   } catch (error) {
    console.error('API Error in getAllProperties:', error);
    throw handleApiError(error)
   }
}
export const getPropertyById = async (id:string) => {
   try {
     const res = await api.get(`/properties/projects?project_id=${id}` )
     return res.data
   } catch (error) {
    throw handleApiError(error)
   }
}