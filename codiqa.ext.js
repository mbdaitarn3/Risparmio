// Put your custom code here
// DATABASE
//alert("inizio");

var db = openDatabase ("spesar", "1.0", "spesar", 65535);

function error (transaction, err) 
{
  alert ("DB error : " + err.message);
  return false;
}

function closeMeNow() {
    navigator.app.exitApp();
}


function vaiPagina( a ) {
 // alert(a);
  sessionStorage.id=a;
  document.location.href = "./modifica.html";
}

// documenti
$(document).ready(function(){   

//alert('Ciaoo 100');

//alert("documenti");
		$("#ricerca").click(function () {   
		   // alert('Ciaoo 2');
			//$.mobile.changePage("/ricerca.html");
			$("#ricerca").buttonMarkup({theme: 'b'});
			document.location.href = "./ricerca4.html";
		});
		
			$("#back").click(function () {   
		   // alert('Ciaoo 2');
			//$.mobile.changePage("/ricerca.html");
			$("#ricerca").buttonMarkup({theme: 'b'});
			document.location.href = "./ricerca4.html";
		});
		
		
				$("#help").click(function () {   
		  //  window.alert('Ciaoo 2');
			//$.mobile.changePage("/ricerca.html");
			document.location.href = "./help.html";
		});
		
					$("#inserisci").click(function () {   
		   // window.alert('Ciaoo 2');
			//$.mobile.changePage("/ricerca.html");
			$("#inserisci").buttonMarkup({theme: 'b'});
			document.location.href = "./inserisci.html";
		});
		
		
							$("#home").click(function () {   
		  //  window.alert('Ciaoo 2');
			//$.mobile.changePage("/ricerca.html");
			$("#home").buttonMarkup({theme: 'b'});
			document.location.href = "./index.html";
		});
		
						$("#exit").click(function () {   
		    window.alert('Ciaoo 2');
			//$.mobile.changePage("/ricerca.html");
			closeMeNow();
		});
		
	$("#insertDB").click(function () {   
		 //   window.alert('Ciaoo 2');
			
			
		 //createDatabase();
		  var larticolo = $("#articolo").val ();
		  var lluogo =  $("#luogo").val ();
		   var lprezzo =  $("#prezzo").val ();
		  var ldata =  $("#data").val ();
		// alert ("Debug insert");   
		// alert (lprezzo); 

         // console.log(db);	

		 var ctrlarticolo=$.trim(larticolo) ;
   if (ctrlarticolo.length == 0)  {
              alert("Devi inserire un articolo");		  
		  
   } else {
		  
		  db.transaction (function (transaction) 
		  {
		  //   alert ("Debug 200");  
			 
			transaction.executeSql('CREATE TABLE IF NOT EXISTS spesa (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,articolo varchar(10), luogo varchar(100),data date, prezzo real  )');
			
			var sql = "INSERT INTO spesa (articolo, luogo, prezzo, data) VALUES (?, ?, ?, ?)";
			transaction.executeSql (sql, [larticolo, lluogo, lprezzo, ldata], function ()
			{ 
			  alert ("Articolo inserito");
			  $("#articolo").val ('');
			  $("#prezzo").val ('');
			}, error);
			
		
		  });
			
	}		
			
			//$.mobile.changePage("/ricerca.html");
			//document.location.href = "./index.html";
		});
		



	$("#modificaDB").click(function () {   
		 //   window.alert('Ciaoo 2');
			
		$("#modificaDB").buttonMarkup({theme: 'b'});		
		 //createDatabase();
		  var larticolo = $("#articolom").val ();
		  var lluogo =  $("#luogom").val ();
		   var lprezzo =  $("#prezzom").val ();
		  var ldata =  $("#datam").val ();
		  
		   var lid=sessionStorage.getItem("id");
		// alert ("Debug insert");   
		// alert (lprezzo); 

         // console.log(db);	

         	 var ctrlarticolo=$.trim(larticolo) ;
   if (ctrlarticolo.length == 0)  {
              alert("Devi inserire un articolo");		  
		  
   } else {
		    

		  
		  db.transaction (function (transaction) 
		  {
		  //   alert ("Debug 200");  
			 
			var sql = "update spesa set articolo = ? , luogo = ? , prezzo = ?, data= ? where id=" + lid;
			//alert(sql);
			
			transaction.executeSql (sql, [larticolo, lluogo, lprezzo, ldata], function ()
			{ 
			  alert ("Articolo modificato");
			}, error);
			
		
		  });
   }			
		
		});











		$("#eliminaDB").click(function () {   
		 //   window.alert('Ciaoo 2');
			
		$("#eliminaDB").buttonMarkup({theme: 'b'});	
		 //createDatabase();
	  
		  var lid=sessionStorage.getItem("id");
		// alert ("Debug insert");   
		// alert (lprezzo); 

         // console.log(db);	

           

		  
		  db.transaction (function (transaction) 
		  {
		  //   alert ("Debug 200");  
			 
			var sql = "delete from spesa where id=" + lid;
		//	alert(sql);
	
			
			transaction.executeSql (sql, undefined, function ()
			{ 
			  alert ("Articolo cancellato");
			  $("#articolom").val ('');
								$("#prezzom").val ('');
								$("#luogom").val ('');
								$("#datam").val ('');  
								
			  	document.location.href = "./ricerca4.html";
			  
			}, error);
			
			
		
		  });
			
			
			
			//$.mobile.changePage("/ricerca.html");
			//document.location.href = "./index.html";
		});
		
		
		
		
		$("#findarticolo").on( "change", function(event) {
		  //document.writeln($("#findarticolo").val());
		  // window.alert$('Ciao' . ("#findarticolo").textinput());
	  //    console.log(ui);	   
		   //alert(event);
         });
		 
	//	 $("#findarticolo").click(function(e){
		//             window.alert($("#findarticolo").val());  
          //           console.log(e.target);
            //  });
		 
		 
		//  $('#frmricerca').on('click', '.ui-input-clear', function (e) {
          //      window.alert('click! Clear');
            // })
		
		  //$('#frmricerca').on('click', '.ui-input-submit', function (e) {
            //    window.alert('click! Search');
				//window.alert($("#findarticolo").val());  
              //})
		
});



