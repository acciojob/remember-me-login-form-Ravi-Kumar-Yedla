  document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('checkbox').checked;

        if (rememberMe) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}`);

        if (localStorage.getItem('username') && localStorage.getItem('password')) {
            const existingButton = document.createElement('button');
            existingButton.textContent = 'Login as existing user';
            existingButton.id = 'existing';
            existingButton.addEventListener('click', function() {
                alert(`Logged in as ${localStorage.getItem('username')}`);
            });
            document.body.appendChild(existingButton);
        }
    });



















//your JS code here. If required.
// document.getElementById('login-form').addEventListener('submit',(event)){
// 	event.preventDefault();
// 	const username = document.getElementById('username').value;
// 	const password = document.getElementById('password').value;
// 	const rememberme = document.getElementById('checkbox').checked;
//  if(rememberme){
// 	 localStorage.setItem('username',username);
// 	 localStorage.setItem('password',password);
//  }else{
// 	 localStorage.removeItem('username');
// 	 localStorage.removeItem('password');
//  }
// 	alert('Logged in as ${username}')

//      if(localStorage.getItem('username') && localStorage.getItem('password')){
// 		 const newbtn = document.createElement('button');
// 		 newbtn.id='existing';
// 		 newbtn.textContent= 'Login as existing user';
// 		 newbtn.addEventListener('click',function()=>{
// 			 alert(`Logged in as ${localStorage.getItem('username')`});
// 		 })
// 		 document.body.appendChild('newbtn');
// 	 }







	
	
// }