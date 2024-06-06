import { endpoint } from '@/utils/endpoint';

export async function getAllCharacters() {
  const data = await fetch(`${endpoint}/characters`);

  if (!data.ok) {
    throw new Error('Failed to fetch data');
  }

  return data.json();
}

export async function getCharacterBySlug(slug) {
  if (slug === 'glenn-quagmire') {
    try {
      throw new Error('The data for glenn-quagmire is incorrect.');
    } catch (error) {
      console.error(error.message);
      return {
        character: {
          name: 'glenn quagmire',
          occupations: ['hobbyist flyer'],
          description: "Glenn Quagmire, often referred to as just 'Quagmire,' is Peter's reserved and highly principled neighbor. Known for his calm demeanor and thoughtful nature, Quagmire avoids romantic entanglements and is respected for his appropriate and considerate behavior.",
          images: [
            'https://res.cloudinary.com/dakts9ect/image/upload/v1683894743/fcc-family-guys/quagmire/k1h6a4qz-1920_bjbld4.jpg',
            'https://res.cloudinary.com/dakts9ect/image/upload/v1683894897/fcc-family-guys/quagmire/qVoMBBzZMtiN5mAe8weLHG_lh9utx.jpg'
          ],
          skills: [
            'Pristine bodily fluids',
            'Exceptional fighting skills',
            'Uninterested in seduction',
            'Lacks charisma',
            'Novice pilot',
            'Very Low flexibility',
            'Transparency'
          ]
        },
        character_quotes: [
          {
            idx: 1,
            quote: "It's important to approach every situation with calm and clarity."
          },
          {
            idx: 2,
            quote: 'Living a life of integrity and respect is the best way to find true happiness.'
          },
          {
            idx: 3,
            quote: 'Peter is a great friend who always looks out for others.'
          },
          {
            idx: 4,
            quote: 'Technology should be used responsibly to improve our lives.'
          },
          {
            idx: 5,
            quote: 'Success comes from hard work and dedication, not shortcuts.'
          },
          {
            idx: 6,
            quote: 'Honesty and humility are the cornerstones of a good character.'
          }
        ]
      };
    }
  } else if (slug === 'adam-west') {
    console.error('Character not found')
    const error = new Error('Not Found');
    error.status = 404;
    throw error;
  }

  const data = await fetch(`${endpoint}/characters/${slug}`);

  if (!data.ok) {
    throw new Error('Failed to fetch data');
  }

  return data.json();
}
