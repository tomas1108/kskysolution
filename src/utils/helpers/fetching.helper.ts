import { _GLOBAL } from '~/constants/global.const';

type TOptions = {
  headers?: any;
  next?: any;
  [key: string]: any;
};

const fetchAPI = async (path: string, options: TOptions = {}): Promise<any> => {
  if (path === '') return;
  try {
    const { headers, ...rest } = options;
    const mergedOptions = {
      next: { revalidate: 300 },
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    };
    const requestUrl: string = `${_GLOBAL.BASE_URL_GOLDEN}${path}`;
    const response: Response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
};

export default fetchAPI;
