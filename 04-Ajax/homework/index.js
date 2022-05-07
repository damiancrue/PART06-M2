var dire = 'http://localhost:5000/amigos';

$('#boton').click(function(){
    $.get(`${dire}`,function(friends){
        console.log(friends);
        friends.array.forEach(element => {
            let li = document.createElement('li');
            li.id=element.id;
            li.innerHTML = element.name;
            let list = document.getElementsById('lista');
            list.appendChild(li);
        });
    })
});