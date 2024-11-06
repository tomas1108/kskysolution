'use server';

import { _ENTITES } from '~/constants/entity.const';
import { _GLOBAL } from '~/constants/global.const';
import { TResponse } from '~/types/api.type';
import fetchAPI from '~/utils/helpers/fetching.helper';

const getTokenNew = async () => {
  const path: string = `${_GLOBAL.BASE_URL_GOLDEN}${_ENTITES.CREATE_TOKEN}`;
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      clientId: _GLOBAL.CLIENT_ID,
      clientSecret: _GLOBAL.CLIENT_SECRET
    })
  };
  try {
    const response = await fetch(path, options);
    if (!response.ok) {
      throw new Error('Failed to fetch new token');
    }
    const data = await response.json();
    const token = data.token;
   
    return token;
  } catch (error) {
   
    throw new Error('Error fetching new token');
  }
};

const getVendorList = async () => {
  const token = await getTokenNew();
  if (!token) return;

  const path: string = _ENTITES.VENDOR_LIST;
  const options = {
    headers: { Authorization: `Bearer ${token}` }
  };
  const response: TResponse = await fetchAPI(path, options);
  return response;
};

export { getVendorList, getTokenNew };
