export function fetchCount(amount = 1) {
  return new Promise(async (resolve) => {
    try {
      const response = await fetch('https://localhost:8080'); // Removed space between 'localhost' and ':'.
      const data = await response.json();
      resolve({ data });
    } catch (error) {
      console.error('Fetch error:', error);
      resolve({ data: 0 }); // Handle error scenario, returning default data.
    }
  });
}
