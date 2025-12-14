export interface Celebrity {
  id: string;
  name: string;
  imageUrl: string;
  caption: string;
  interaction: string;
}

export const celebrities: Celebrity[] = [
  {
    id: 'celeb-1',
    name: 'Taylor Swift',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=face',
    caption: 'Used Spot to organize 15 years of concert memories',
    interaction: 'Saved over 50,000 photos from tour life',
  },
  {
    id: 'celeb-2',
    name: 'Dwayne "The Rock" Johnson',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
    caption: 'Keeps family moments private while sharing fitness journey',
    interaction: 'Backed up every workout video and family milestone',
  },
  {
    id: 'celeb-3',
    name: 'Oprah Winfrey',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    caption: 'Uses Spot for book club research and personal memories',
    interaction: 'Organized decades of interview footage',
  },
  {
    id: 'celeb-4',
    name: 'Ryan Reynolds',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    caption: 'Shares behind-the-scenes content while protecting family privacy',
    interaction: 'Selective sharing for 4 kids worth of memories',
  },
  {
    id: 'celeb-5',
    name: 'Serena Williams',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=face',
    caption: 'Captures tennis legacy and motherhood journey',
    interaction: 'Archives match footage and family moments',
  },
  {
    id: 'celeb-6',
    name: 'Keanu Reeves',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    caption: 'Values privacy while staying connected to close friends',
    interaction: 'Secure storage for personal and professional content',
  },
];