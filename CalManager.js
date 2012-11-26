// ClientId, Api key and scope goes up here
// Use a button to handle authentication the first time.
function handleClientLoad() {
	        gapi.client.setApiKey(apiKey);
	        window.setTimeout(checkAuth,1);
	      }

	      function checkAuth() {
		        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
		      }


		      function handleAuthResult(authResult) {
			        var authorizeButton = document.getElementById('authorize-button');
			        if (authResult && !authResult.error) {
				          authorizeButton.style.visibility = 'hidden';
				          makeApiCall();
				        } else {
					          authorizeButton.style.visibility = '';
					          authorizeButton.onclick = handleAuthClick;
					        }
					      }

					      function handleAuthClick(event) {
						        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
						        return false;
						      }

						      // Load the API and make an API call.  Display the results on the screen.
						      function makeApiCall() {
							var restRequest = gapi.client.request({
									'path': 'calendar/v3/users/me/calendarList'
									});
							restRequest.execute(function(resp) {
									console.log(resp.items);
									});


							      }
