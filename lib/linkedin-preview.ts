import { cache } from 'react';

interface LinkedInPreview {
  title: string;
  image: string;
  url: string;
}

export const getLinkedInPreview = cache(async (url: string): Promise<LinkedInPreview> => {
  try {
    // Extraire l'ID du post depuis l'URL
    const postId = url.match(/urn:li:activity:(\d+)/)?.[1];
    if (!postId) {
      throw new Error('Invalid LinkedIn post URL');
    }

    const response = await fetch(`/api/linkedin?postId=${postId}`);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.details || data.error || 'Failed to fetch LinkedIn data');
    }

    return {
      title: data.title || '',
      image: data.image || '',
      url: url
    };
  } catch {
    // Erreur silencieuse - on retourne des valeurs vides
    // L'erreur est déjà gérée par le composant appelant
    return {
      title: '',
      image: '',
      url
    };
  }
}); 