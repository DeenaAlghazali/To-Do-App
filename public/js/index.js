// const form = document.querySelector('form');
const userName = document.querySelector('#userName');
const note = document.querySelector('#note');
const btn = document.querySelector('#btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/createNote', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ userName: userName.value, title: note.value }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.body);
    }).catch((error) => {
      console.log('error');
    });
});

// fetch('/createNote')
// // .then((res) => res.json())
// .then((data) => {
//   console.log(data);
// })
// .catch((error) => console.log(error));
