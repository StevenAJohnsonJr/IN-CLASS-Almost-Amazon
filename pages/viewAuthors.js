import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();
  const domString1 = `
    <div class="text-white ms-5 details">
      <h5>${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" style="font-size:25px;color:white"</span>' : ''}</h5>
      Author Email: <a href="mailto:${obj.email}">${obj.email}</a>
      <p>${obj.description || ''}</p>
      <div class="mt-5">
        <i id="update-author--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        <i id="delete-author-btn--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        <hr>
      </div>
      <p class="text-white">Books</p>
    </div>`;
  renderToDOM('#view', domString1);

  // const viewAuthorBooks = (obj.bookArray.forEach((book) => {
  let domString2 = '';
  obj.bookArray.forEach((book) => {
    domString2 += `
      <div class="card">
        <img class="card-img-top" src=${book.image} alt=${book.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${book.title}</h5>
            <p class="card-text bold">${book.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${book.price}` : `$${book.price}`}</p>
              <hr>
            <i class="btn btn-success fas fa-eye" id="view-book-btn--${book.firebaseKey}"></i>
            <i id="edit-book-btn--${book.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-book-btn--${book.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
    // setTimeout(function () {
    renderToDOM('#store', domString2);
    // }, 100);
  });
};
export default viewAuthor;
