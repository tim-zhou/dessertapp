export const getMenuData = () => {
  return Promise.resolve({
    desserts: [
      {
        name: 'Strawberry Cheesecake',
        description: 'Creamy cheesecake topped with fresh strawberries.',
        image: 'https://images.unsplash.com/photo-1600891965050-6a8a9622fa1e?auto=format&fit=crop&w=400&q=80',
      },
      {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten chocolate center.',
        image: 'https://images.unsplash.com/photo-1608219671445-d53c984d3cd9?auto=format&fit=crop&w=400&q=80',
      },
    ],
    drinks: [
      {
        name: 'Iced Matcha Latte',
        description: 'Chilled matcha latte with almond milk.',
        image: 'https://images.unsplash.com/photo-1598515213691-ecf3a6b6c3db?auto=format&fit=crop&w=400&q=80',
      },
      {
        name: 'Strawberry Milkshake',
        description: 'Blended strawberries with vanilla ice cream.',
        image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=400&q=80',
      },
    ],
  });
};
