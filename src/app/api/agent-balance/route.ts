import { NextRequest, NextResponse } from 'next/server';
import { _ENTITES } from '~/constants/entity.const';
import { _GLOBAL } from '~/constants/global.const';

export async function GET(req: NextRequest) {
  try {
    const path: string = `${_GLOBAL.BASE_URL_GOLDEN}${_ENTITES.AGENT_BALANCE}`;
    const authorizationHeader = req.headers.get('Authorization') || '';

    if (!authorizationHeader) {
      return NextResponse.json(
        { message: 'Authorization header is missing' },
        { status: 401 }  // Unauthorized
      );
    }

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authorizationHeader
      },
    };
    const response = await fetch(path, options);
   
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
 

    return NextResponse.json(
      { message: 'Error fetching data', details: error.message },
      { status: 500 }
    );
  }
}
