fetch('rss.xml')
  .then(response => response.text())
  .then(data => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, 'text/xml');

      const items = xmlDoc.querySelectorAll('item');
      const newsList = document.getElementById('news-list');

      items.forEach(item => {
      const title = item.querySelector('title').textContent;
      const link = `details.html?id=${encodeURIComponent(title)}`;

      const listItem = document.createElement('li');
      const linkElement = document.createElement('a');
      linkElement.href = link;
     linkElement.textContent = title;
      listItem.appendChild(linkElement);
      newsList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });