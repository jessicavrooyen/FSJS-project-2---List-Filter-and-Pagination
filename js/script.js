/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// store the student list items & amount of items to show in global variables
const studentList = document.getElementsByClassName('student-item');
const itemsPerPage = 10;

// hide all elements in the list, except the 10 to be shown
function showPage(list, page) {
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endIndex = page * itemsPerPage;

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = 'block';
    } else {
      list[i].style.display = 'none';
    }
  }
}

// create and append the pagination links; determine how many pages are needed for the list
function appendPageLinks(list) {
  const totalPages = Math.ceil(list.length / itemsPerPage);
  const page = document.querySelector('.page');
  const div = document.createElement('div');
  div.className = 'pagination';
  page.appendChild(div);
  const ul = document.createElement('ul');
  div.appendChild(ul);

  // create a loop equal to total number of pages & display each at the bottom of the page
  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.textContent = i;
    li.appendChild(a);
    ul.appendChild(li);
    //set the first li > a item to active
    if (i === 1) {
      a.className = 'active';
    }

    a.addEventListener('click', e => {
      const anchor = document.querySelectorAll('a');
      //loop through a tags & remove active class
      for (let i = 0; i < anchor.length; i++) {
        anchor[i].classList.remove('active');
        e.target.className = 'active';
        showPage(studentList, e.target.textContent);
      }
    });
  }
}

//dynamically create and append search bar
const pageDiv = document.querySelector('.page-header');
const searchDiv = document.createElement('div');
searchDiv.className = 'student-search';
const input = document.createElement('input');
input.placeholder = 'Search for students...';
const button = document.createElement('button');
button.textContent = 'Search';

pageDiv.appendChild(searchDiv);
searchDiv.appendChild(input);
searchDiv.appendChild(button);

function searchStudents(searchInput) {
  //select the student names
  const studentNames = document.querySelectorAll('h3');
  const searchValue = document.querySelector('input').value;
  const searchResults = [];

  //add no results message if no names are found
  const noResults = document.querySelectorAll('p');
  console.log(noResults);
  if (noResults !== 'null') {
    for (let i = 0; i < noResults.length; i++) {
      noResults[i].remove();
    }
  }
  // check if pagination already exists, if so, remove it (not removing this class adds duplicate paginations)
  const isPaginationActive = document.querySelector('.pagination');
  if (isPaginationActive) {
    isPaginationActive.remove();
  }
  //loop through student list
  for (let i = 0; i < studentNames.length; i++) {
    const query = searchInput.toLowerCase();
    //if results were found, add them to the results array & display the student list names
    if (studentNames[i].textContent.toLowerCase().includes(query) &&
      searchInput.length !== 0) {
      studentNames[i].style.display = 'block';
      searchResults.push(studentList[i]);
    } else if (searchInput.length === 0) {
      showPage(studentList, 1);
    } else {
      studentList[i].style.display = 'none';
    }
  }
  // if no names were found to match the input value, show the no results message
  if (searchInput.length === 0) {
    appendPageLinks(studentList);
  } else if (searchResults.length === 0) {
    const page = document.querySelector('.page');
    const noNames = document.createElement('p');
    noNames.textContent = 'No results were found.';
    noNames.style.color = 'red';
    page.appendChild(noNames);
  } else {
    appendPageLinks(searchResults);
    showPage(searchResults, 1);
  }
}

button.addEventListener('click', () => {
  searchStudents(input.value);
});
input.addEventListener('keyup', () => {
  searchStudents(input.value);
});

showPage(studentList, 1);
appendPageLinks(studentList);
