/**firebase */
import Firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBxpMt6xn0By6VIFOWtBN0tk0pXDeZ6ZSM",
    authDomain: "app-news-bb81b.firebaseapp.com",
    databaseURL: "https://app-news-bb81b.firebaseio.com",
    projectId: "app-news-bb81b",
    storageBucket: "app-news-bb81b.appspot.com",
    messagingSenderId: "33599919117"
  };
  export const fire = Firebase.initializeApp(config);
  let db = fire.database();
  export const newsRef = db.ref('news');