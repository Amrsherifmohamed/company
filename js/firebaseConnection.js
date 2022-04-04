const firebaseConfig = {
    apiKey: "AIzaSyAMK1Ne1z8weTShTjE_BuMkQY1jIC48KBQ",
    authDomain: "contact-bb04e.firebaseapp.com",
    projectId: "contact-bb04e",
    storageBucket: "contact-bb04e.appspot.com",
    messagingSenderId: "72740375844",
    appId: "1:72740375844:web:de668767367e61779537b1"
  };

  firebase.initializeApp(firebaseConfig);
  var messagesRef = firebase.database().ref('/formData/contact-bb04e-default-rtdb');
  
  var form= document.getElementById('btn-send')
  form.addEventListener('click',submitForm);
  function submitForm(e){
    e.preventDefault();
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');
    saveMessage(name, email,subject,message);
    reset_field();
  }
  
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  function saveMessage(name, email,subject,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email:email,
        subject:subject,
        message:message
    }).then((res)=>{
      swal(
        'Good job!',
        'Your massage is sended',
        'success'
      )
    }).catch((error)=>{
      swal(
        'The Internet?',
        'That thing is still around?',
        'question'
      )
    })
  
  }
  function reset_field() {
     document.querySelector('#name').value = '';
     document.querySelector('#email').value = '';
     document.querySelector('#subject').value = '';
     document.querySelector('#message').value = '';
  }

  