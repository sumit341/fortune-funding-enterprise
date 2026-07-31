import api from "./axios";

export interface Resource {
  id: string;
  title: string;
  category: string;
  fileUrl: string;
}

export const getResourcesApi = () =>
  api.get<Resource[]>("/resources");