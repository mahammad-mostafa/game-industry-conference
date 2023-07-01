const headerMenu = document.querySelector('.header nav');
const headerButton = document.querySelector('.header-menu');
const speakersList = document.querySelector('.speakers-list');
const speakersButton = document.querySelector('.speakers button');
const speakers = [
  {
    image: 'assets/images/speakers/wesley.jpg',
    name: 'Wesley Adams',
    company: 'Unity Technologies',
    description: 'Wes has worked in games for 12 years, trying to find ways to make it easier for people to translate their creative visions into reality.',
  },
  {
    image: 'assets/images/speakers/zev.jpg',
    name: 'Zev Solomon',
    company: 'Sony Interactive Entertainment',
    description: 'Zev has been supporting developers launching their games and integrating PlayStation Network services from PS3 to PS5.',
  },
  {
    image: 'assets/images/speakers/ian.jpg',
    name: 'Ian Andes',
    company: 'NVIDIA',
    description: 'Ian Andes is a seasoned professional with over 25 years of experience in the Media and Entertainment industry.',
  },
  {
    image: 'assets/images/speakers/francisco.jpg',
    name: 'Francisco Cabrita',
    company: 'Epic Games',
    description: 'Francisco Cabrita is a seasoned design director with over 25 years’ experience in game development and design.',
  },
  {
    image: 'assets/images/speakers/marcus.jpg',
    name: 'Marcus Montgomery',
    company: 'Xbox Games Studios Publishing',
    description: 'Marcus Montgomery initially began his professional journey into video game development as a game tester at Sega of America.',
  },
  {
    image: 'assets/images/speakers/john.jpg',
    name: 'John Hartwig',
    company: 'AMD',
    description: 'John Hartwig is a Senior Member of the Technical Staff and is the CPU Team Lead in AMD\'s Game Engineering organization.',
  },
];
function fillSpeakers() {
  if (speakersList !== null) {
    const fragment = new DocumentFragment();
    speakers.forEach((speaker) => {
      const article = document.createElement('article');
      let articelHtml = '<span></span>';
      articelHtml += `<img src="${speaker.image}" alt="${speaker.name}" />`;
      articelHtml += '<div>';
      articelHtml += `<h3 class="dark-color">${speaker.name}</h3>`;
      articelHtml += `<i class="accent-color">${speaker.company}</i>`;
      articelHtml += '<hr />';
      articelHtml += `<p>${speaker.description}</p>`;
      articelHtml += '</div>';
      article.innerHTML = articelHtml;
      fragment.appendChild(article);
    });
    speakersList.appendChild(fragment);
  }
}
function toggleMenu() {
  if (window.screen.width < 768) {
    document.body.classList.toggle('scrolling');
    headerMenu.classList.toggle('visibility');
  }
}
function toggleList() {
  if (speakersList.classList.contains('speakers-list-all')) {
    speakersButton.firstElementChild.textContent = 'MORE';
  } else {
    speakersButton.firstElementChild.textContent = 'LESS';
  }
  speakersList.classList.toggle('speakers-list-all');
  speakersButton.lastChild.classList.toggle('speakers-icon-flip');
}
headerMenu.addEventListener('click', toggleMenu);
headerButton.addEventListener('click', toggleMenu);
speakersButton.addEventListener('click', toggleList);
fillSpeakers();