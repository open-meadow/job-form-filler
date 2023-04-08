const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  console.log("this is the name: ", name);
  console.log("this is the id: ", email);

  localStorage.setItem('name', name);
  localStorage.setItem('email', email);

  const lsName = localStorage.getItem('name', name);
  const lsEmail = localStorage.getItem('email', email);

  console.log(lsName, " is ur name and ", lsEmail, " is ur email ");
})