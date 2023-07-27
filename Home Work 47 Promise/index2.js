// Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
// Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост, то вивести на сторінку блок з постом і зробити кнопку для отримання комкоментарів до посту.
// Зробити завдання використовуючи проміси, перехопити помилки.

const inputNumberId = document.querySelector('#number-id');
const buttonPost = document.querySelector('.button-post');
const forma = document.querySelector('#forma');


function getNumberIdFromInput() {
  let numberIdFromInput = inputNumberId.value;
  if((numberIdFromInput <= 100) && (numberIdFromInput >= 1)) {
    return numberIdFromInput;
  }; 
};

forma.addEventListener('submit', (e) => {
  e.preventDefault();
  renderPost() 
});

function renderPost() {
  fetch(`https://jsonplaceholder.typicode.com/posts/${getNumberIdFromInput()}`)
  .then(response => response.json())
  .then(data => {
    const postBlock = document.querySelector('.wrapper-post');
    const post = document.createElement('p');
    const postNumber = document.createElement('div');
    const commentConteiner = document.createElement('div');
    const commentBtn = document.createElement('button');

    commentBtn.classList.add('postcoment-conteiner');
    postNumber.classList.add('post-number');
    post.classList.add('post');
    postNumber.classList.add('post-number');

    postNumber.innerText = `Post #${data.id}`;
    post.innerText = data.body;
    commentBtn.innerText = 'Comments';
    commentConteiner.append(commentBtn);

    post.prepend(postNumber);
    post.append(commentConteiner);
    postBlock.append(post);

    commentBtn.addEventListener('click', () => {
    renderComents(data.id, postBlock)
    });
  }) 
  .catch(err => alert(err));
};

function renderComents(id, div) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const comentsBlock = document.createElement('div');
      const Email = document.createElement('div');
      const commentText = document.createElement('div');

      comentsBlock.classList.add('ccoments-block');
      Email.classList.add('ccoments-email');
      commentText.classList.add('ccoments-text');

      Email.innerHTML = `<b>Email:</b> <br> ${item.email}`; 
      commentText.innerText = item.body;

      comentsBlock.append(Email);
      comentsBlock.append(commentText);

      div.append(comentsBlock);
    });
  })
  .catch(err => {alert(err)});
};
