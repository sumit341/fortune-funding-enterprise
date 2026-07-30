import { getJournalApi } from "../api/journal.api";

export const journalService = {
  async getJournal() {
    const response =
      await getJournalApi();

    return response.data;
  },
};