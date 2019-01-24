import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

var config = {
	apiKey: "AIzaSyAL_IpT1A4-ur97Wg5KHoOBU3Ta8jIDWfE",
	authDomain: "m-city-55d4b.firebaseapp.com",
	databaseURL: "https://m-city-55d4b.firebaseio.com",
	projectId: "m-city-55d4b",
	storageBucket: "m-city-55d4b.appspot.com",
	messagingSenderId: "156824618953"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
	firebase,
	firebaseMatches,
	firebasePromotions,
	firebaseTeams,
	firebaseDB,
	firebasePlayers,
}