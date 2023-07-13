class Inputdata{
  constructor(in_title,in_author){
    this.in_title=in_title;
    this.in_author=in_author;
  }
}
class Output{   
create () {
 if (localStorage.getItem('books') == null) {
   localStorage.setItem('books', JSON.stringify([]));
         }
      return JSON.parse(localStorage.getItem('books'));
    }

add() {
    let totalbooks= this.create();
    const data= new Inputdata(document.querySelector('.title').value,document.querySelector('.author').value);
    if (document.querySelector('.title').value !== '' &&   document.querySelector('.author').value !== '') {
    const book = {
     title: data.in_title,
     author: data.in_author,
      };
   totalbooks.push(book);
   localStorage.setItem('books', JSON.stringify(totalbooks));
  }
}

   show() {
   let totalBooks=this.create();
    const container = document.querySelector('.extra');
    const main = document.createElement('section');
    main.className = 'main';
    if (totalBooks.length > 0) {
          for (let i = 0; i < totalBooks.length; i += 1) {
            main.innerHTML += `<section class='outer'><section class='inner'><p>
           " ${totalBooks[i].title} " by
            ${totalBooks[i].author}</p>
         <p><button class='removeitem'>Remove</button></p></section></section>
          `;
            container.appendChild(main);
          }
        }
  }
remove(e) {
    let totalBooks=this.create();
    totalBooks.splice(e,1);
    localStorage.setItem('books', JSON.stringify(totalBooks));
    document.querySelector('.inner').innerHTML='';
}

}


const mybooks= new Output();
mybooks.show();
document.getElementById('addbtn').addEventListener('click',(e)=>{
e.preventDefault();
mybooks.add();
document.querySelector('.title').value='';
document.querySelector('.author').value='';
document.querySelector('.extra').innerHTML='';
mybooks.show();
});


document.querySelector('.extra').addEventListener('click',(e)=>{
  if(e.target.tagName==='BUTTON'){
    const button = e.target;
    if (button.className === 'removeitem'){
  document.querySelector('.extra').innerHTML='';
  mybooks.show();
  mybooks.remove(e);
    }
  }
});

const show=document.getElementById('add');
const add = document.querySelector('.outer-extra');
const contact=document.getElementById('contact');
const myadd=document.getElementById('myadd');
const container = document.getElementById('add');
const mylist=document.getElementById('mylist');
const mycontact=document.getElementById('mycontact');
mylist.addEventListener('click',()=>{
  show.style.display='none';
  contact.style.display= 'none';
  add.style.display='block';
});

myadd.addEventListener('click', ()=>{
  add.style.display='none';
  contact.style.display= 'none';
show.style.display='block';
});

mycontact.addEventListener('click', ()=>{
contact.style.display='block';
add.style.display='none';
show.style.display='none';
});
