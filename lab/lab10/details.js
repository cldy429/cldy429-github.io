const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get('id');

console.log('Received itemId:', itemId);

fetch('rss.xml')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'text/xml');

    const items = xmlDoc.querySelectorAll('item');

    // title-р нь шүүх
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
      // Олдоогүй тохиолдолд
      const errorElement = document.createElement('p');
      errorElement.textContent = `News item with ID "${itemId}" not found.`;
      document.body.appendChild(errorElement);

      console.error('Item not found:', itemId);
    }
  })