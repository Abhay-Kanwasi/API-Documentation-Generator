import { ApiResponse, Documentation } from '../types/api';

const API_BASE_URL = 'http://localhost:8000';

export const apiService = {
  async checkStatus(): Promise<ApiResponse<string>> {
    const response = await fetch(`${API_BASE_URL}/`);
    return response.json();
  },

  async analyzeCode(code: string): Promise<ApiResponse<Documentation>> {
    const response = await fetch(`${API_BASE_URL}/api/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });
    return response.json();
  },

  async getDocs(): Promise<ApiResponse<Documentation[]>> {
    const response = await fetch(`${API_BASE_URL}/api/docs`);
    return response.json();
  },
};