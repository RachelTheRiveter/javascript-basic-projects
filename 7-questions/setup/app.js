//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function(q){
  // console.log(q);
  const btn = q.querySelector('.question-btn');
  // console.log(btn);

  btn.addEventListener('click', function() {

    // if click does not match the expanded article, close the other article
    questions.forEach(function(i){
      if(i !== q){
        i.classList.remove('show-text');
      }
    });

    q.classList.toggle('show-text');
  });
});



// traversing the dom

// const btns = document.querySelectorAll('.question-btn');
//
// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//       const question = e.currentTarget.parentElement.parentElement;
//       question.classList.toggle('show-text');
//   });
// });
