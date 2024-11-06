import { NextRequest, NextResponse } from 'next/server';
import { _ENTITES } from '~/constants/entity.const';
import { _GLOBAL } from '~/constants/global.const';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const path: string = `${_GLOBAL.BASE_URL_GOLDEN}${_ENTITES.GAME_LIST}`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: req.headers.get('Authorization') || ''
      },
      body: JSON.stringify(body)
    };
    const response = await fetch(path, options);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {

    return NextResponse.json(
      { message: 'Error fetching data' },
      { status: 500 }
    );
  }
}
