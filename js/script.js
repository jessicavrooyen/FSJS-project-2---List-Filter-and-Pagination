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

showPage(studentList, 1);


/***

Add pagination links
Create a function that creates and appends functioning pagination links.
This function should accept a single list parameter to represent the actual list of students that you’ll pass in as an argument later when you call this function.

Inside the function:
Create and append the DOM elements for the pagination links.

Use lines 119-137 in the examples/example-meets.html file as your template.

Pay close attention to how elements are nested, any necessary class names or other element attributes, and where your additions should be appended.

You should end up with:
A container DIV element with a class name of “pagination”, and appended to the div element with the class name of page.

A nested UL element containing one LI element for every ten students in the list.

Pro Tip: You can divide list.length by the max number of items per page to figure out how many pages are needed, and you can use a loop that iterates that many times to create the correct number of LI elements.

Each LI element should contain an A element with an href attribute of #, and text set to the page number each link will show. First link is 1. Second link is 2. And so on.
Pro Tip: The loop index can be helpful in setting the text of the pagination links.
Add the active class name to the first pagination link initially.

Add a “click” event listener to each A element. A loop can be helpful here.
When a pagination link is clicked:

The active class name should be removed from all pagination links. A loop can be helpful for this step.

The active class name should be added to the link that was just clicked. The target property of the event object should be useful here.

The function to show a page should be called, passing in as arguments, the global variable for the list items, and the page number that should be shown. The text content of the A element that was just clicked can be helpful here.

Note: Your program needs to work for any number of list items, so your solution needs to be dynamic. You can test that your solution works for any size list by opening the examples/44students.html and examples/64 students.html files, and linking your JS file.
Project Warm Ups: DOM manipulation and updating an indication that a button is active can be tricky at first. For some helpful practice, check out the project Warm Up Fun DOM Manipulation and Where's the Action.

Call your functions
Call the show page function, passing in as arguments, the global variable for the list items, and the number 1 for the first page, which should be shown initially.

Call the append page links function, passing in as an argument, the global variable for the list items.
 * 
 ***/

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

// Remember to delete the comments that came with this file, and replace them with your own code comments.
