// Placeholder image generation utilities

export const getPlaceholderImage = (width: number, height: number, text?: string) => {
  return `https://via.placeholder.com/${width}x${height}/0066CC/FFFFFF?text=${encodeURIComponent(text || 'Ecolo')}`;
};

export const getUnsplashImage = (query: string, width: number = 1920, height: number = 1080) => {
  // Using specific Unsplash image IDs for consistency
  const imageMap: { [key: string]: string } = {
    'industrial': 'https://images.unsplash.com/photo-1581094480632-3db68e036e0a',
    'wastewater': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64',
    'landfill': 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b',
    'laboratory': 'https://images.unsplash.com/photo-1582719471384-894fbb16e074',
    'facility': 'https://images.unsplash.com/photo-1565043666747-69f6646db940',
    'misting': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64',
    'cannabis': 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389',
    'hotel': 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    'restaurant': 'https://images.unsplash.com/photo-1552566626-52f8b828add9',
    'office': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
    'team': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
    'world': 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1'
  };
  
  const imageUrl = imageMap[query] || imageMap['industrial'];
  return `${imageUrl}?w=${width}&h=${height}&fit=crop&auto=format`;
};