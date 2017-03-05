var express=require('express');
var app = express();
var date;
var json;

var decodeddate=(decodeURI(process.argv[2]).trim());

app.use('/',function(req, res) {
    
 var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

 if(isNaN(decodeddate)==false){
   date=new Date(decodeddate*1000);
}
else{
     date=new Date(decodeddate);
}
 
var valid = date.getTime() > 0;

if(valid==false){
json={"unix": null,
"natural": null};
}
else{
    if(isNaN(decodeddate)==true){
         json={"unix": date.getTime()/1000,
         "natural": monthNames[date.getMonth()]+' '+date.getDate()+', '+date.getFullYear()};
        
    }
    else{
         json={"unix": decodeddate,
         "natural": monthNames[date.getMonth()]+' '+date.getDate()+', '+date.getFullYear()};
         
    }
}

res.send(JSON.stringify(json));

    });
    
    app.listen(8080,function(){
        console.log('Example app listening on port 8080');
    });