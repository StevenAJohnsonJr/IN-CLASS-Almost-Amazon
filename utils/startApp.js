import { getBooks } from '../api/bookData';
import { showAuthors } from '../pages/authors';
import { getAuthors } from '../api/authorData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { showBooks } from '../pages/books';

const startApp = (user) => {
  domBuilder(user); // ADD USER SO THAT YOU CAN UPDATE CALLS
  domEvents(user); // ADD USER SO THAT YOU CAN UPDATE CALLS
  formEvents(user); // ADD USER SO THAT YOU CAN UPDATE CALLS
  navBar();
  logoutButton();
  navigationEvents(user);
  showBooks();

  // TODO: Put all books on the DOM on App load
  getBooks(user.uid).then((books) => showBooks(books));
  getAuthors(user.uid).then((authors) => showAuthors(authors));
};

export default startApp;
