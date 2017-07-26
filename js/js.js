
    function añadir() {
            // var list=document.getElementById('mas-listas').value;
            // document.getElementById('mostrar').innerHTML=list;
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
        // //alert (dato_1);
        // html += s; 
        for (var html =0; html<arrayDatos.length;html++){
        var s = "<div>" + 
            "<h3>" +  "List: " + dato_1.title + "</h3>" +"<h3>"+ "Number: " + dato_1.id + "</h3>"
        "</div>";
        var printAll= s //document.getElementById('add');
        printAll.onclick =function () {
         printHTML(mergeHTML());
        }
        document.getElementById('mostrar').innerHTML=s;
        }

    }
    }