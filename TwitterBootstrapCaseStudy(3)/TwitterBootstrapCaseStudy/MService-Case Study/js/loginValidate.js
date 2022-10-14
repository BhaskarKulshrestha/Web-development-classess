function getUserValue()
			{
	          
	        	 document.getElementById('msg').innerHTML = '';
			    var email =$('#inputEmail1').val();
			    var pwd =$('#inputPassword1').val(); 
			    		     
			        var emailSaved = localStorage.getItem('Email');
			        var pwdSaved = localStorage.getItem('Password');
			      
			        
			        if(email.length==0 || pwd.length==0){ 
	                       document.getElementById('msg2').innerHTML = 'Both Email and Password are mandatory!';
	                   }else{
							if(email==emailSaved && pwd==pwdSaved){
								
								location.assign('dashboard.html');
							}else{
								
								document.getElementById('msg2').innerHTML = 'Oops! Wrong credentials! Please try again.';
							}
					}
	        	 
			        
			    }
				function resetMsg(){ 
				 document.getElementById('msg2').innerHTML = '';
				}
				
