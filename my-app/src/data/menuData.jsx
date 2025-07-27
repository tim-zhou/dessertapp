export const getMenuData = async () => {
  try {
    const response = await fetch('/api/menu');
    if (!response.ok) throw new Error('Failed to fetch');
    return await response.json();
  } catch (error) {
    console.error(error);
    return { desserts: [], drinks: [] };
  }
};
