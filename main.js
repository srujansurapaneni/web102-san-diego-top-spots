$(document).ready(function() {
// write your code here
$.getJSON("./data.json", function(dataMulti) {
    dataMulti.forEach(function(dataSingle){
            $('#mytable').append('<tr><td>'+dataSingle.name+'</td><td>'+dataSingle.description+'</td><td><a>'+dataSingle.location+'</a><td></tr>')
        }
        )
    });
});


