import axios from 'axios';

const API_BASE_URL = 'https://makproperties-api.propfusion.io';
const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjAzNSwicm9sZV9pZHMiOlsxMDBdLCJ0eXBlIjoiYWdlbnQiLCJleHAiOjE5MTQ3MDYyODB9.HomftCQdlLSR1LLuageO1uo_iJTYw59pktyFQ_cuK0I';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${BEARER_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export interface Agent {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  role: string;
  role_id: number;
  role_name: string;
  team?: number;
  team_name: string;
  gender: string;
  nationality: string;
  emirates_id?: string;
  passport_no?: string;
  kyc_verification: boolean;
  created_at: string;
  updated_at: string;
  state: string;
  dob?: string;
  remarks?: string;
  languages?: string[];
  brn_number?: string;
  experience_years?: number;
  specialities?: string[];
  property_default_view?: string;
  leads_default_view?: string;
  whatsapp_notification: boolean;
  joining_date?: string;
  job_type?: string;
  qr_code?: string;
  documents?: any;
}

export interface AgentsResponse {
  data: Agent[];
  success: boolean;
  message?: string;
}

// Fetch all agents
export const getAllAgents = async (): Promise<Agent[]> => {
  try {
    const response = await apiClient.get('/agent/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching agents:', error);
    throw new Error('Failed to fetch agents');
  }
};

// Fetch agent by ID
export const getAgentById = async (id: number): Promise<Agent> => {
  try {
    const response = await apiClient.get(`/agent/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching agent:', error);
    throw new Error('Failed to fetch agent');
  }
};

// Fetch featured agents (top performers)
export const getFeaturedAgents = async (): Promise<Agent[]> => {
  try {
    const response = await apiClient.get('/agent/featured');
    return response.data;
  } catch (error) {
    console.error('Error fetching featured agents:', error);
    // Fallback to all agents if featured endpoint doesn't exist
    return getAllAgents();
  }
};
