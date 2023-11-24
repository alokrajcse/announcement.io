const dataContainer = document.getElementById('data-container');
const loadingAnimation = document.getElementById('loading-animation');

let announcementData = [];

loadingAnimation.style.display = 'block';


fetch('https://script.google.com/macros/s/AKfycbwxEbCAzFppw0CZW6UPkMb-z_7Tj_bJPm6NHGDcFerA-ilDYLtABM4S9gqbfVon3QV0/exec')
  .then(response => response.json())
  .then(data => {
    announcementData = data;
    renderAnnouncements(); // Call the function to render announcements
    loadingAnimation.style.display = 'none';
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    loadingAnimation.style.display = 'none';
  });

function renderAnnouncements() {
  dataContainer.innerHTML = ''; // Clear previous data

  if (announcementData.length === 0) {
    // If there are no announcements, display a message
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'No announcements found.';
    dataContainer.appendChild(noResultsMessage);
  } else {
    // Loop through the announcementData and create HTML elements for each announcement
    announcementData.forEach(item => {
      const announcementCard = document.createElement('div');
      announcementCard.className = 'announcement-card';
      announcementCard.innerHTML = `
        <h3>${item.title}</h3>
<br>
        <span>${item.announcement}</span>
      `;
      dataContainer.appendChild(announcementCard);
    });
  }
}
