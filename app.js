// Get all elements with the class "Container" and save it in a variable
const accordion = document.getElementsByClassName('container');

// Loop through the list. For each container element, add an event listener to it. When it gets clicked - toggle the class "active" on that element.
for (i = 0; i < accordion.length; i++) {
   accordion[i].addEventListener('click', function () {
      this.classList.toggle('active')
   })
}