console.log('HELLO');

const test = () => {
	console.log('this is a test');
};
const message=document.getElementById('message')

function validatemail(){
const emailInpit=document.getElementsByTagName('input')[0].value
	emailInpit?null:message.innerHTML="email cant be empty"
}
const emailInpit=document.getElementsByTagName('input')[0]
function checkmail() {
	var re = /\S+@\S+\.\S+/;
	console.log("email finction is being called");
  
	if (re.test(emailInpit.value)) {
	 console.log('passed')
	 
	 emailInpit.style.borderColor='green';
	 message.innerHTML="email is valid"

	} else {
	emailInpit.style.borderColor='red'
		 console.log('failed');
		 message.innerHTML="email is not valid"
	}
  }