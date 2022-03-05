const user = document.querySelector('.select');

fetch('/getUsers')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach(element => {
      const option = document.createElement('option');
      option.value = element.id;
      option.textContent = element.name;
      user.appendChild(option);
    });
  })
  .catch((error) => {
    console.log(error);
  });
