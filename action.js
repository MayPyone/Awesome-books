if (localStorage.getItem('book') == null) {
  localStorage.setItem('book', JSON.stringify([]));
}

const totalBooks = JSON.parse(localStorage.getItem('book'));
const container = document.querySelector('.extra');
const main = document.createElement('div');
main.className = 'main';

function add() {
  if (document.querySelector('.title').value !== '' && document.querySelector('.author').value !== '') {
    const book = {
      title: document.querySelector('.title').value,
      author: document.querySelector('.author').value,
    };
    totalBooks.push(book);
    localStorage.setItem('book', JSON.stringify(totalBooks));
  }
}

function showBook() {
  if (totalBooks.length > 0) {
    for (let i = 0; i < totalBooks.length; i += 1) {
      main.innerHTML += `<ul><li>
      ${totalBooks[i].title}<br>
      ${totalBooks[i].author}<br>
     <button onclick="remove(${i})" class='remove'>Remove</button><br></li></ul>
    `;
      container.append(main);
    }
  }
}
function remove(index) {
  totalBooks.splice(index, 1);
  localStorage.setItem('book', JSON.stringify(totalBooks));
  main.innerHTML = '';
  showBook();
}

showBook();
document.getElementById('addbtn').addEventListener('click', add);