
        var arrayDatos=[
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    },
    ]
    var html = "";
    for (var i =0; i<arrayDatos.length;i++){

        var dato_1 = arrayDatos[i];
     
        var s =  "<li>" +  "List: " + dato_1.title + "</li>" +"<li>"+ "Number: " + dato_1.id + "</li>"
        ;
        
     
        html += s; 
        document.getElementById('mostrar').innerHTML=html;
        
    }
    var newlista=[];
    function añadir() {
        var nota=document.getElementById('mas-listas').value
    var add = document.createElement("li");
    var contenido = document.createTextNode(nota); 
     add.appendChild(contenido);
    document.getElementById("mostrar").appendChild(add);
     

    }  
    

     
     


    