function showTheMenu() {
  if (window.screen.width >= 768) {
    return;
  }
  document.getElementById('overlay').style.display = 'flex';
}

function hideTheMenu() {
  document.getElementById('overlay').style.display = 'none';
}

const navElement = document.getElementById('navigation');
navElement.addEventListener('click', showTheMenu);

const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', hideTheMenu);

const menuLinks = document.getElementsByClassName('menu-link');
for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', hideTheMenu);
}

const teamsDetails = [{
    team_name: 'Rahmani Imad',
    team_job: 'Software and Game developper',
    team_description: '3 years of experience in the Tech industry and game development',
    team_image: './images/imad.png',
  },
  {
    team_name: 'Saidi Ikram',
    team_job: 'Software engineer',
    team_description: '2 years of experience in the Tech industry and web development',
    team_image: './images/ikram.png',
  },
  {
    team_name: 'Mansouri Brahim',
    team_job: '3D artist and UX designer ',
    team_description: '2 years of experience in the Tech industry and web development',
    team_image: './images/brahim.png',
  },

  {
    team_name: 'Terbeche Mostefa',
    team_job: 'Web Developper and 2D artist',
    team_description: '2 years of experience in the Tech industry and web development',
    team_image: './images/mustapha.png',
  },
];

const teams = document.getElementById('teams');

const teamsTitle = document.createElement('h2');
teamsTitle.id = 'teams-title';
teamsTitle.textContent = 'Our team';
teams.appendChild(teamsTitle);

const mainHr = document.createElement('hr');
mainHr.classList.add('main-hr');
teams.appendChild(mainHr);

const theteams = document.createElement('div');
theteams.classList.add('the-teams');

for (let i = 0; i < teamsDetails.length; i += 1) {
  const team = document.createElement('div');
  team.classList.add('team');
  if (i > 1) {
    team.classList.add('team-hidded');
  }

  const teamImage = document.createElement('img');
  teamImage.classList.add('team-image');
  teamImage.src = teamsDetails[i].team_image;
  teamImage.alt = 'bla bla';
  team.appendChild(teamImage);

  const teamInformation = document.createElement('div');
  teamInformation.classList.add('team-information');

  const teamName = document.createElement('h3');
  teamName.classList.add('team-name');
  teamName.textContent = teamsDetails[i].team_name;
  teamInformation.appendChild(teamName);

  const teamJob = document.createElement('p');
  teamJob.classList.add('team-job');
  teamJob.textContent = teamsDetails[i].team_job;
  teamInformation.appendChild(teamJob);

  const teamDescription = document.createElement('h3');
  teamDescription.classList.add('team-description');
  teamDescription.textContent = teamsDetails[i].team_description;
  teamInformation.appendChild(teamDescription);

  team.appendChild(teamInformation);
  theteams.appendChild(team);
}

const moreDiv = document.createElement('div');
moreDiv.classList.add('more');
moreDiv.classList.add('hide-me-on-desktop');

const moreSpan = document.createElement('span');
moreSpan.textContent = 'MORE';
moreDiv.appendChild(moreSpan);

const arrowSpan = document.createElement('span');

const arrowIcon = document.createElement('i');
arrowIcon.classList.add('fas');
arrowIcon.classList.add('fa-solid');
arrowIcon.classList.add('fa-chevron-down');
arrowSpan.appendChild(arrowIcon);

moreDiv.appendChild(arrowSpan);

theteams.appendChild(moreDiv);

teams.appendChild(theteams);

const teamsHidded = document.getElementsByClassName('team-hidded');

function teamsToggle() {
  if (moreSpan.textContent === 'MORE') {
    Array.from(teamsHidded).forEach((teamHidded) => {
      teamHidded.style.display = 'flex';
    });
    moreSpan.textContent = 'LESS';
    arrowIcon.classList.remove('fa-chevron-down');
    arrowIcon.classList.add('fa-chevron-up');
  } else if (moreSpan.textContent === 'LESS') {
    Array.from(teamsHidded).forEach((teamHidded) => {
      teamHidded.style.display = 'none';
    });
    moreSpan.textContent = 'MORE';
    arrowIcon.classList.remove('fa-chevron-up');
    arrowIcon.classList.add('fa-chevron-down');
  }

  window.scrollTo(0, document.body.scrollHeight);
}

moreDiv.addEventListener('click', teamsToggle);





let rating = JSON.parse(localStorage.getItem('rating')) || [];



const star1 = document.getElementById("star1");
const star2 = document.getElementById("star2");
const star3 = document.getElementById("star3");
const star4 = document.getElementById("star4");
const star5 = document.getElementById("star5");
const finalRating = document.getElementById("final-rating");
const reviewsNumber = document.getElementById("reviews-number");


function addRating(newRate) {
  rating.push({
    newRate,
  });
  localStorage.setItem('rating', JSON.stringify(rating));
  return {
    newRate,

  };
}

function myFunction() {
  finalRating.innerHTML = totalRating / rating.length;
}
reviewsNumber.innerHTML = rating.length;
finalRating.innerHTML = totalRating / rating.length;


var totalRating = 0;
star1.addEventListener('click', (event) => {
  event.preventDefault();
  const newTask = addRating(1);
  reviewsNumber.innerHTML = rating.length;
  totalRating = 0;

  for (var i = 0; i < rating.length; i++) {
    totalRating += rating[i].newRate;
  }
  console.log(totalRating);
  finalRating.innerHTML = (totalRating / rating.length).toFixed(2);;

});

star2.addEventListener('click', (event) => {
  event.preventDefault();
  const newTask = addRating(2);
  reviewsNumber.innerHTML = rating.length;
  totalRating = 0;
  for (var i = 0; i < rating.length; i++) {
    totalRating += rating[i].newRate;
  }
  finalRating.innerHTML = (totalRating / rating.length).toFixed(2);;


});
star3.addEventListener('click', (event) => {
  event.preventDefault();
  const newTask = addRating(3);
  reviewsNumber.innerHTML = rating.length;
  totalRating = 0;
  for (var i = 0; i < rating.length; i++) {
    totalRating += rating[i].newRate;
  }
  finalRating.innerHTML = (totalRating / rating.length).toFixed(2);;


});
star4.addEventListener('click', (event) => {
  event.preventDefault();
  const newTask = addRating(4);
  reviewsNumber.innerHTML = rating.length;
  totalRating = 0;
  for (var i = 0; i < rating.length; i++) {
    totalRating += rating[i].newRate;
  }

  finalRating.innerHTML = (totalRating / rating.length).toFixed(2);;

});
star5.addEventListener('click', (event) => {
  event.preventDefault();
  const newTask = addRating(5);
  reviewsNumber.innerHTML = rating.length;
  totalRating = 0;
  for (var i = 0; i < rating.length; i++) {
    totalRating += rating[i].newRate;
  }
  finalRating.innerHTML = (totalRating / rating.length).toFixed(2);;

});
