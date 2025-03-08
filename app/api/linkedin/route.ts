import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get('postId');

  if (!postId) {
    return NextResponse.json({ error: 'Post ID is required' }, { status: 400 });
  }

  try {
    // Utiliser l'API Microlink pour obtenir les métadonnées
    const response = await fetch(`https://api.microlink.io?url=https://www.linkedin.com/feed/update/${postId}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; PITKER/1.0; +http://pitker.fr)',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch LinkedIn post');
    }

    const data = await response.json();
    
    // Nettoyer les données
    const cleanText = (text: string) => {
      return text
        .replace(/&amp;/g, '&')
        .replace(/&#39;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');
    };

    return NextResponse.json({
      title: data.data.title ? cleanText(data.data.title) : '',
      description: data.data.description ? cleanText(data.data.description) : '',
      image: data.data.image?.url || '',
    });
  } catch (error) {
    console.error('LinkedIn API error:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch LinkedIn data',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 