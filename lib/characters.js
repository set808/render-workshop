import { endpoint } from '@/utils/endpoint';

export async function getAllCharacters() {
  const data = await fetch(`${endpoint}/characters`);

  if (!data.ok) {
    throw new Error('Failed to fetch data');
  }

  return data.json();
}

export async function getCharacterBySlug(slug) {

  const data = await fetch(`${endpoint}/characters/${slug}`);

  if (slug == 'adam-west') {
    throw new Error('API Request Failed. Adam West is not a character.');
  }

  if (!data.ok) {
    throw new Error('Failed to fetch data');
  }

  return data.json();
}
