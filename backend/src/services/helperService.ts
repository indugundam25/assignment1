import Helper from '../models/Helper';

export const searchHelpers = async (searchTerm: string) => {
  return await Helper.find({ name: new RegExp(searchTerm, 'i') });
};