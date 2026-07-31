import { getResourcesApi } from "../api/resources.api";

export const resourcesService = {
  async getResources() {
    const response = await getResourcesApi();
    return response.data;
  },
};