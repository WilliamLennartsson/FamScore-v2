//import firebase from 'firebase'
var firebase = require('firebase');

const mainTree = "FamScoreDB";
const config = {    
    apiKey: "AIzaSyDEfFl1psi4pnQ01rUY1MENhkDHfFP4Ito",
    authDomain: "famscore-48432.firebaseapp.com",     
    databaseURL: "https://famscore-48432.firebaseio.com/",     
    projectId: "famscore-48432",     
    storageBucket: "famscore-48432.appspot.com",     
    messagingSenderId: "1021351151580"   
};   

firebase.initializeApp(config);

var database = firebase.database();

const family = {
    ID: '',
    familyName: "Familjen udda",
    members: {
        kalle: { points: 100},
        pelle: { points: 200}
    },
    email: "gowaddt1231@live.se",
    missions: {
        städa: {
            description: 'städa allt för fan',
            points: 215
        },
        diska: {
            description: 'diska allt då. ex bestick',
            points: 130
        }
    }
}

/**
 const family2 = {
     familyName: "FamVäktarna",
     members: [
         {name: "kägan", points: 999},
         {name: "chrilley", points: 5000}
     ]
 }
 */

/* 
const newMember = {
    name: "willy",
    points: 500
}
const newMember2 = {
    name: "kägan",
    points: 999
}
*/

//createFamily(family, "123123");
logIn("gowaddt@live.se", "123123");

// Functions

// Create and loging
function createFamily(family, password){
    firebase.auth().createUserWithEmailAndPassword(family.email, password)
    .catch(function(error){
        console.log('hej: ');
        if (error){
            console.log('Error when creating login' + error);
            return;
        } 
    })
    .then(function(data){
        if (data){
            console.log(data);
            var key = database.ref(mainTree).push(family).key;
            console.log('created');
            database.ref(mainTree + '/' + key + '/ID').push(key);
            //console.log(key);
            
            logIn(family.email, password);
        } else {
            console.log('Cannot Push family')
        }
    })
}

// Login
function logIn(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
        if (error){
            console.log(error);
            return;
        }
    })
    .then(function(data){
        if (data){
            console.log("logged in");
            //console.log('data', data);
            

            //Test functions
            //updateScore('-LMlprvUNCR4n9MmIUiC' , 'kalle', 100)
            //addMember('-LMlprvUNCR4n9MmIUiC', {nisse: {points: 999}});
            //addMission('-LMlprvUNCR4n9MmIUiC', {vaska: {description: 'vaska allaaaaaaa', points: 10220}});
            //removeMission('-LMlprvUNCR4n9MmIUiC', 'vaska');

            //console.log('BROOOOR', database.ref().child('email').equalTo(email).repo.repoInfo_);
            //console.log(database.ref(mainTree).orderByChild('email').equalTo(email));
            console.log(database.ref(mainTree).orderByChild('email').equalTo(email));
            var testRef = database.ref(mainTree).orderByChild('email').equalTo(email).once('value', function(snapshot){
                //console.log("Banan" , snapshot['index_']);
            })
            console.log(firebase.auth().currentUser);
            return true;
        } else {
            console.log('Cannot sign in');
            return false;
        }
    })
}


function nyMetod(snapshot){
    var ref = snapshot.ref;
    return ref.key;
}



// getFamily
function getFamily(){
    database.ref(mainTree).orderByChild('familyName').equalTo('chrilley').on('value', function(snapshot){
        console.log(snapshot.val);
        snapshot.forEach(function(data){
            console.log(data.key);
        });
    })   
}

// Increment member points by parameter points
function updateScore (familyID, member, points){
    const searchPath = mainTree + '/' + familyID + '/members/' + member + '/points' 
    database.ref(searchPath).transaction(function(score){
        return score + points;
    })
}

//  Adds member
function addMember(familyID, newMember){
    const searchPath = mainTree + '/' + familyID + '/members';
    database.ref(searchPath).update(newMember);
}

// Adds mission. Takes mission object. { missionName: {description: '', points: 100} }
// 
function addMission(familyID, mission){
    const searchPath = mainTree + '/' + familyID + '/missions/';
    database.ref(searchPath).update(mission);
}

//removes mission. Parameter ID, Name
function removeMission(familyID, missionName){
    const searchPath = mainTree + '/' + familyID + '/missions/' + missionName;
    database.ref(searchPath).remove();
}

