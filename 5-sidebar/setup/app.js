const toggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function() {
  sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function(){
  sidebar.classList.toggle('show-sidebar');
});
