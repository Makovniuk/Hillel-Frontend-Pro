const MY_API_KEY = 'AIzaSyD8KbfjgsBFYwZkEKFsUNeLCWybWSk3tVw';
const URL_API = 'https://www.googleapis.com/books/v1/volumes?q=';


const wrapperDiv = document.querySelector('.wrapper');
const booksList = document.querySelector('.book-list');
const modalCardBook = document.createElement('div');
const paginationEl = document.querySelector('.pagination');

let rows = 40;
let currentPage = 1;

const controller = (action) => fetch(action).then(response => response.json());

function renderBooksList(startIndex = 0, typeSearch = '') {
  booksList.innerHTML = '';

  controller(`${URL_API}${searchInput.value}${typeSearch}&startIndex=${startIndex}&maxResults=${rows}&key=${MY_API_KEY}`)
  .then(data =>  { 
    data.items.forEach((element, index, array) => { 
      const bookCard = document.createElement('div');
      const bookTitle = document.createElement('h3');
      const bookAuthor = document.createElement('h5');
      const bookImage = document.createElement('img');

      bookCard.classList.add('.book-card');
      bookTitle.classList.add('.book-title');
      bookAuthor.classList.add('.book-author');
      bookImage.classList.add('.book-image');
      
      bookTitle.innerText = element.volumeInfo.title.substr(0, 50);
      if(data.items[index].volumeInfo.authors) {
        bookAuthor.innerText = data.items[index].volumeInfo.authors.join(', ');
      };
      bookImage.setAttribute('src', `${element.volumeInfo?.imageLinks?.thumbnail}`);
      bookCard.setAttribute('id', index);

      wrapperDiv.append(booksList);
      bookCard.append(bookImage, bookTitle, bookAuthor);
      booksList.append(bookCard);

      bookCard.addEventListener('click', () => {
        const bookIndex = bookCard.getAttribute('id');
        renderModalBlockWithInfoBook(bookIndex, array);
      });
        
    })
    const colectionCard = document.getElementsByClassName('.book-card');
    return colectionCard
  })
 .then(colection => {renderPaginationList(rows, colection, typeSearch)})
 .catch(() => {alert('SORRY! BOOKS NOT FOUND')})
};

function renderModalBlockWithInfoBook(index, data) {
  modalCardBook.innerHTML = '';

  const bookTitle = document.createElement('h2');
  const bookAuthor = document.createElement('h4');
  const bookImage = document.createElement('img');
  const divBlockInfo = document.createElement('div');
  const categoriesBooks = document.createElement('div');
  const bookPublisher = document.createElement('div');
  const numberOfPages = document.createElement('div');
  const publishedDate = document.createElement('div');
  const textSnippet = document.createElement('p');
  const closeModalBtn = document.createElement('span');

  modalCardBook.classList.add('modal-card-book');
  categoriesBooks.classList.add('modal-card-category-book');
  divBlockInfo.classList.add('div-block-info');
  bookTitle.classList.add('book-title-modal');
  bookAuthor.classList.add('book-author-modal');
  bookImage.classList.add('book-image');
  bookPublisher.classList.add('book-publisher-modal');
  numberOfPages.classList.add('book-number-pages-modal');
  publishedDate.classList.add('book-publisher-date-modal');
  textSnippet.classList.add('book-textSnippet-date-modal');
  closeModalBtn.classList.add('book-modal-close-btn');

  bookTitle.innerText = data[index].volumeInfo.title;
  if(data[index].volumeInfo.authors) {
    bookAuthor.innerText = `Author: ${data[index].volumeInfo.authors.join(', ')}`
  };
  bookImage.setAttribute('src', `${data[index].volumeInfo?.imageLinks?.thumbnail}`);
  bookPublisher.innerText = `Publisher: ${data[index].volumeInfo.publisher}`;
  numberOfPages.innerText = `Pages: ${data[index].volumeInfo.pageCount}`;
  publishedDate.innerText = `Date of published: ${data[index].volumeInfo.publishedDate}`;
  textSnippet.innerHTML= `<b>Text snippet:</b> ${data[index].searchInfo?.textSnippet}`;
  if(data[index].volumeInfo?.categories) {
    categoriesBooks.innerText = `${data[index].volumeInfo?.categories}`
  };
  closeModalBtn.innerText = '❌';

  divBlockInfo.append(bookPublisher, numberOfPages, publishedDate);
  modalCardBook.append(categoriesBooks, bookImage, divBlockInfo, bookTitle, bookAuthor, textSnippet, closeModalBtn, );
  wrapperDiv.append(modalCardBook);
  
  modalCardBook.style.display = 'block';
  booksList.style.opacity = '0.3';

  closeModalBtn.addEventListener('click', () => {
    booksList.style.opacity = '1';
    modalCardBook.style.display = 'none';
    modalCardBook.innerHTML = '';
  });

}

const searchBtn = document.querySelector('#search');
const searchInput = document.querySelector('#search-input');

searchBtn.addEventListener('click', (e) => {
  booksList.innerHTML = '';
  paginationEl.innerHTML = '';
  currentPage = 1;
  
  const typeSearchRadio = document.querySelector('input[name=type-search]:checked')?.value;
  if(searchInput.value !== '') {
    typeSearchRadio
    ? renderBooksList(0, typeSearchRadio)
    : renderBooksList(0)
  } else {alert('Enter a search term!')};
})

function renderPaginationList(rowPerPage,colectionCards, typeSearch = '', startIndex = 0) {
  if(colectionCards.length !== 0) {  
    controller(`${URL_API}${searchInput.value}${typeSearch}&startIndex=${startIndex}&maxResults=${rows}&key=${MY_API_KEY}`)
    .then(data => {
      const totalBooks = data.totalItems;
      const numberPages = Math.ceil((totalBooks / rowPerPage));
      const ulEl = document.createElement("ul");
      ulEl.classList.add('pagination__list');

      for (let i = 0; i < numberPages; i++) {
        const liEl = renderPaginationBtn((i + 1), typeSearch);
        ulEl.append(liEl);
      }
      
      paginationEl.append(ulEl);
    })
    .catch((err) => {alert(err)})
  };
}

function renderPaginationBtn(page, typeSearch) { 
  const liEl = document.createElement("li");
  liEl.classList.add('pagination__item');
  liEl.innerText = page;

  if(currentPage === page) {
    liEl.classList.add('pagination__item--active');
  };
  
  liEl.addEventListener('click', () => {
    paginationEl.innerHTML = '';
    currentPage = page ;
    renderBooksList(((currentPage - 1)  * rows), typeSearch);
  });
  return liEl;
}
