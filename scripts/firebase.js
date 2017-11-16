function saveToFirebase(name) {
    var nameObject = {
        name: name
    };

    firebase.database().ref('name-entries').push().set(nameObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}
