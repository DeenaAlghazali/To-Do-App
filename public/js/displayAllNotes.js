const notes = document.querySelector('.notes');

const deleteNote = (id) => fetch(`/delete-note/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
});

fetch('/allData')
  .then((res) => res.json())
  .then((data) => {
    console.log('data ', data);
    data.forEach(element => {
      console.log(element.id);
      const div = document.createElement('div');
      const name = document.createElement('p');
      const title = document.createElement('p');
      const button = document.createElement('button');
      name.textContent = element.name;
      title.textContent = element.title;
      button.textContent = 'Delete';
      button.onclick = () => {
        deleteNote(element.id)
          .then(() => {
            window.location = '/';
          })
          .catch((error) => console.log(error));
      };
      div.appendChild(name);
      div.appendChild(title);
      div.appendChild(button);
      notes.appendChild(div);
    });
  })
  .catch((error) => console.log(error));
