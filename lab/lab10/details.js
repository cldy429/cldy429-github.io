const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get('id');

console.log('Received itemId:', itemId);

fetch('rss.xml')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'text/xml');

    const items = xmlDoc.querySelectorAll('item');

    // Find the item with the matching title
    const item = Array.from(items).find(item => {
      const title = item.querySelector('title').textContent;
      console.log('Comparing titles:', title, itemId);
      return title === itemId;
    });

    if (item) {
      const title = item.querySelector('title').textContent;
      const description = item.querySelector('description').textContent;

      const titleElement = document.getElementById('news-title');
      const descriptionElement = document.getElementById('news-description');

      titleElement.textContent = title;
      descriptionElement.innerHTML = description;

      console.log('Item found:', title, description);
    } else {
      // Handle the case when the item is not found
      const errorElement = document.createElement('p');
      errorElement.textContent = `News item with ID "${itemId}" not found.`;
      document.body.appendChild(errorElement);

      console.error('Item not found:', itemId);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    // Handle general errors here, like network errors or parsing issues
    const errorElement = document.createElement('p');
    errorElement.textContent = 'An error occurred while fetching the news item.';
    document.body.appendChild(errorElement);
  });