import { endpoint } from '@/utils/endpoint'

export async function getAllCharacters() {
  const data = await fetch(`${endpoint}/characters`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

export async function getCharacterBySlug(slug) {
  if (slug === 'glenn-quagmire') {
    return {
      character: {
        name: 'Incorrect Character',
        occupations: ['Wrong Occupation 1', 'Wrong Occupation 2'],
        description: 'This is not the correct character description.',
        images: ['/path/to/incorrect/image1.jpg', '/path/to/incorrect/image2.jpg'],
        skills: ['Incorrect Skill 1', 'Incorrect Skill 2']
      },
      character_quotes: [
        { idx: 1, quote: 'This is an incorrect quote.' },
        { idx: 2, quote: 'This quote is also incorrect.' }
      ]
    }
  }
  const data = await fetch(`${endpoint}/characters/${slug}`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}
