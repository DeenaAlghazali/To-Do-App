const users = document.querySelector('.users');

fetch('/getUsers')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach(element => {
      const div = document.createElement('div');
      const id = document.createElement('p');
      const user = document.createElement('p');
      id.textContent = element.id;
      user.textContent = element.name;
      div.appendChild(id);
      div.appendChild(user);
      users.appendChild(div);
    });
  })
  .catch((error) => console.log(error));
