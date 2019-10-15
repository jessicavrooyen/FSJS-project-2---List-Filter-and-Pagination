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


showPage(studentList, 1);
appendPageLinks(studentList);