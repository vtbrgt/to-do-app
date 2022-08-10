import Sortable from '../node_modules/sortablejs/modular/sortable.core.esm.js';

const ul = document.querySelector('#sortable-list');

const sortable = new Sortable(ul, {
  animation: 150,
});
