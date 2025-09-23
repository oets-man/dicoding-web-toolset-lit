import './components/title-app';
import './components/to-dos';
import './components/login-element';
import './components/auth-element';
import './components/welcome-element';

// to-dos element
const todosContainer = document.querySelector('#todo-container');
const todos = [
  {
    title: 'Belajar CSS Preprocessor dengan Sass',
    completed: true,
  },
  {
    title: 'Belajar CSS Framework dengan Bootstrap',
    completed: true,
  },
  {
    title: 'Belajar Lit Dasar',
    completed: false,
  },
  {
    title: 'Belajar HTTP Client dengan Axios',
    completed: false,
  },
  {
    title: 'Belajar Lit Lanjutan',
    completed: false,
  },
  {
    title: 'Belajar Firebase untuk Aplikasi Web',
    completed: false,
  },
];
todosContainer.setAttribute('todos', JSON.stringify(todos));

// welcome element
const myElement = document.querySelector('welcome-element');
const changeNameBtn = document.querySelector('button#change-name');
const changeAgeBtn = document.querySelector('button#change-age');
changeNameBtn.addEventListener('click', () => {
  console.log('===== Ubah Nama =====');
  myElement.name = 'Dicoding Indonesia';
});
changeAgeBtn.addEventListener('click', () => {
  console.log('===== Ubah Umur =====');
  myElement.age = 8;
});
