// Add your code here

  
  // method: "POST" is missing from the object below
 

  const submitData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  
  fetch("http://localhost:3000/users", configurationObject)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
    }); 