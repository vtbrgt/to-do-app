import Sortable from 'sortablejs';

const ul = document.querySelector('#sortable-list');

const sortable = new Sortable(ul, {
  animation: 150,
});
