/**
 * Retrieves a character and their associated quotes based on the provided slug.
 *
 * @param {Object} req - The request object.
 * @param {Object} params - The route parameters.
 * @param {string} params.slug - The slug of the character.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing the character and their quotes, or an error response.
 */

import characters from '@/data/characters.json'
import quotes from '@/data/quotes.json'
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  try {
    const character = characters.data.find(item => item.slug === params.slug);

    if (!character) {
      return new NextResponse('not found', { status: 404 });
    }

    if (character.slug === 'peter-griffin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const character_quotes = quotes.data.filter(
      item => item.character_id === character.id,
    );

    if (params.slug === 'herbert') {
      await delay(10000);
    }

    return NextResponse.json({
      character,
      character_quotes: character_quotes.length > 0 ? character_quotes : null,
    });
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

