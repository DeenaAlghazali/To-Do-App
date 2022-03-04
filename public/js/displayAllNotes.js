const notes = document.querySelector('.notes');

fetch('/allData')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach(element => {
      const div = document.createElement('div');
      const name = document.createElement('p');
      const title = document.createElement('p');
      name.textContent = element.name;
      title.textContent = element.title;
      div.appendChild(name);
      div.appendChild(title);
      notes.appendChild(div);
    });
  })
  .catch((error) => console.log(error));
