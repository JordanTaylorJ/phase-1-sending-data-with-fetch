// Add your code here

const configurationObject = {
    method : 'POST',
    headers : {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    },
    body : JSON.stringify({
        name : "Steve",
        email : "steve@steve.com",
    })
};

function submitData(name, email){
    return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response){
        return response.json();
    })
    .then(document.append())
    //.catch(DOmmm.append(message))
}

