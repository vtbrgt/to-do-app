import Sortable from 'https://to-do-app-vtbrgt.vercel.app/node_modules/sortablejs/modular/sortable.core.esm.js';

const ul = document.querySelector('#sortable-list');

const sortable = new Sortable(ul, {
  animation: 150,
});
