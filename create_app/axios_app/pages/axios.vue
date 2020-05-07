<template>
  <section class="container">
    <h1>{{title}}</h1>
    <p>{{message}}</p>
  </section>
</template>


<script>
import firebase from "firebase";


export default {
  data: function(){
    return {
      title:'Auth',
      message: 'this is message.',
    };
  },
  created:function(){
  var firebaseConfig = {
    apiKey: "AIzaSyAT0WjKM2honrVX9ZHEa8FLBJ40CjilQM8",
    authDomain: "plasma-primacy-270115.firebaseapp.com",
    databaseURL: "https://plasma-primacy-270115.firebaseio.com",
    projectId: "plasma-primacy-270115",
    storageBucket: "plasma-primacy-270115.appspot.com",
    messagingSenderId: "33685517125",
    appId: "1:33685517125:web:e7949242aeac2ce656c42c",
    measurementId: "G-BKZ3JKJZ1D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


    var provider = new firebase.auth.GoogleAuthProvider();
    var self = this;
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        self.message = result.user.displayName + ', ' 
          + result.user.email;
      });
  },
};
</script>




<style>
ul {
    margin:0px 10px;
    background-color: blue;
}
li {
  padding: 10px;
  font-size: 16pt;
}
input {
    font-size:14pt;
}
button {
    font-size:14pt;
}
tr th {
    width:150px;
    background-color: darkblue;
    color:tomato;
    font-size:16pt;
}
tr td {
    padding:5px 10px;
    background-color:tomato;
    font-size:14pt;
}
.container {
  padding: 5px 10px;
}
h1 {
  font-size: 60pt;
  color: #345980;
}
p {
  padding-top:5px;
  font-size: 20pt;
}
div {
    font-size:14pt;
}
pre {
  padding: 10px;
  font-size: 18pt;
  background-color: #efefef;
  white-space: pre-wrap ;
}
hr {
  margin:10px 0px;
}
</style>
