  $("#contact_Form").submit(function(e){
        e.preventDefault();

        var Name = $('#Con_Name').val();  
        var EmailId = $('#Con_Email').val();  
        var Message = $('#Con_Message').val(); 
        	/*Edit here*/
        	if(Name == "" || EmailId == "" || Message == ""){
        		$('#contactDisplay').html("<span class='w3-red w3-serif w3-large' style='padding:10px;'>Please fill in all the details to continue</span>");
        	}
        else{
 $.ajax({
        type: 'POST',
        url: 'php/contact.php',
        data: { name1: Name, email1: EmailId, message1: Message},
        success: function(response) {
            $('#contactDisplay').html(response);
        }
    });
		 setTimeout(function(){
		    document.getElementById("contact_Form").reset();
		}, 1500);
				}
					});