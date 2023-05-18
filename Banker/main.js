function createTable(name) {
  var row = document.getElementById("process");
  var column = document.getElementById("resource");
  
  if (row.value.length == 0 || column.value.length == 0) {
    alert("Vui lòng nhập giá trị số cho số tiến trình và số tài nguyên");
		return false;
  } else if (isNaN(row.value) || isNaN(column.value)) {
		alert("Vui lòng nhập giá trị số cho số tiến trình và số tài nguyên");
		return false;
  } else {
		var container = document.getElementById("container");
	
		var countRow = parseInt(row.value);
		var countColumn = parseInt(column.value);
		
		var tagTable = document.createElement("table");
		//tagTable.border = 1;
		var caption = document.createElement("caption");
		caption.innerHTML = name;
		tagTable.appendChild(caption);
		for (var i = 0; i <= countRow; i++) {
      var tagRow = document.createElement("tr");
      tagTable.appendChild(tagRow);
	  		
      for(var j = 0; j <= countColumn; j++) {
        var tagColumn = document.createElement("td");
				if(i==0) 
					{
						if(j==0)
							{
								var textNode = document.createTextNode("");
								tagColumn.appendChild(textNode);
								tagRow.appendChild(tagColumn);

							}
							else {
								var textNode = document.createTextNode("R" + j);
								tagColumn.appendChild(textNode);
								tagRow.appendChild(tagColumn);
							}
					}
				else {
						if(j==0){
							var textNode = document.createTextNode("P" +i);
							tagColumn.appendChild(textNode);
							tagRow.appendChild(tagColumn);
						}
						else{
							var input = document.createElement("input");
							input.maxLength = 2;
							input.size = 2;
							if(name == "Allocation") input.id = "a" + i + j;
							if(name == "Max") input.id = "m" + i + j;
							if(name == "Need") input.id = "n" + i + j;
							if(name == "Work") input.id = "w" + i + j;
							tagColumn.appendChild(input);
							tagRow.appendChild(tagColumn);
						}
					}
			}
		}
						
	
		container.appendChild(tagTable);
	
		return true;
  }
}
function createAvailable() {
	var row = document.getElementById("process");
  	var column = document.getElementById("resource");
  

		var container = document.getElementById("container");
	
		
		var countColumn = parseInt(column.value);
		
		var tagTable = document.createElement("table");
		//tagTable.border = 1;
		var caption = document.createElement("caption");
		caption.innerHTML = "Available";
		tagTable.appendChild(caption);
		for (var i = 0; i < 2 ; i++) {
      var tagRow = document.createElement("tr");
      tagTable.appendChild(tagRow);
	  		
      for(var j = 1; j <= countColumn; j++) {
        var tagColumn = document.createElement("td");
				if(i==0) 
					{
						
						var textNode = document.createTextNode("R" + j);
						
						tagColumn.appendChild(textNode);
						tagRow.appendChild(tagColumn);
							
					}
				else {	
						var input = document.createElement("input");
						input.maxLength = 2;
						input.size = 2;
						input.id = 'av'+ i + j;
						tagColumn.appendChild(input);
						tagRow.appendChild(tagColumn);
						
					}
			}
		}
						
	
		container.appendChild(tagTable);
	
		return true;
  
}
var check_table_create = false;
function createAll() {
	if(check_table_create == false)
	{
		var row = document.getElementById("process");
  		var column = document.getElementById("resource");
  
		if (row.value.length == 0 || column.value.length == 0) {
			alert("Vui lòng nhập giá trị số cho số tiến trình và số tài nguyên");
				return false;
		} else if (isNaN(row.value) || isNaN(column.value)) {
			alert("Vui lòng nhập giá trị số cho số tiến trình và số tài nguyên");
			return false;
		} else {
			createTable('Allocation');
			createTable('Max');
			createTable('Need');
			createAvailable();
			createTable('Work');
			
			
			var countRow = parseInt(row.value);
			var seq = document.getElementById("seq");
			for(var i = 1; i <= countRow; i++){
				var input = document.createElement("input");
				input.maxLength = 2;
				input.size = 2;
				input.id = "p" + i;
				seq.appendChild(input);
				//seq.appendChild("&nbsp&nbsp&nbsp");
			}
			check_table_create = true;
		}
	}
}
function validation(){
	var a = document.getElementById('resourceA').value;
	var b = document.getElementById('resourceB').value;
	var c = document.getElementById('resourceC').value;
	if( a=='' || a<0 || b=='' || b<0 || c=='' || c<0){
	  alert("Resource instance value can't be negative or blank");
	}
	for(var i=1; i<=5; i++){
	  for(var j=1; j<=3; j++){
		if(document.getElementById('a'+i+j).value<0 || document.getElementById('a'+i+j).value==''){
		  alert("Allocation matrix elements can't be negative or blank");
		}
		if(document.getElementById('m'+i+j).value<0 || document.getElementById('m'+i+j).value==''){
		  alert("Max matrix elements can't be negative or blank");
		}
	  }
	  document.getElementById('calc'+i).value = '';
	}
	document.getElementById('calc0').value = '';
  }
  
  
  function reset(){
	window.location.reload();
  }
  
  
  
  function find_avai(){

	var x = 0;
	var y = 0;
	var z = 0;
	document.getElementById('calc1').innerHTML = '&nbsp Calculating the Available Matrix....'+'<br/>'+'Available[n] = Total no. of instances - (Allocation[0][n] + Allocation[1][n] + Allocation[2][n] + Allocation[3][n] + Allocation[4][n])'+'<br/>';
	document.getElementById('calc1').innerHTML += 'Available[0] = '+a+' - ';
	document.getElementById('calc2').innerHTML = 'Available[1] = '+b+' - ';
	document.getElementById('calc3').innerHTML = 'Available[2] = '+c+' - ';
	for(var i=1; i<=5; i++){
		var x = x + parseInt(document.getElementById('a'+i+'1').value);
		document.getElementById('calc1').innerHTML += parseInt(document.getElementById('a'+i+'1').value); if(i<5){document.getElementById('calc1').innerHTML += '+';}else{document.getElementById('calc1').innerHTML += ' = '}
		var y = y + parseInt(document.getElementById('a'+i+'2').value);
		document.getElementById('calc2').innerHTML += parseInt(document.getElementById('a'+i+'1').value); if(i<5){document.getElementById('calc2').innerHTML += '+';}else{document.getElementById('calc2').innerHTML += ' = '}
		var z = z + parseInt(document.getElementById('a'+i+'3').value);
		document.getElementById('calc3').innerHTML += parseInt(document.getElementById('a'+i+'1').value); if(i<5){document.getElementById('calc3').innerHTML += '+';}else{document.getElementById('calc3').innerHTML += ' = '}
	}
	document.getElementById('av11').value = a-x;
	document.getElementById('calc1').innerHTML += a-x;
	document.getElementById('av12').value = b-y;
	document.getElementById('calc2').innerHTML += b-y;
	document.getElementById('av13').value = c-z;
	document.getElementById('calc3').innerHTML += c-z;
	document.getElementById('calc4').innerHTML = '';
	document.getElementById('calc5').innerHTML = '';
	document.getElementById('calc0').innerHTML = '';
	validation();
  }
  
  function find_need(){

	var row = document.getElementById("process");
  	var column = document.getElementById("resource");
	var countRow = parseInt(row.value);
	var countColumn = parseInt(column.value);
	for(var i=1; i<=countRow; i++){
	  for(var j=1; j<=countColumn; j++){
		document.getElementById('n'+i+j).value = parseInt(document.getElementById('m'+i+j).value) - parseInt(document.getElementById('a'+i+j).value);
	  }
	}
  }
  
  
function find_sequence(){
	var dp = 0;
	var checker = 0;
	var q = 1;
	var k=1;
	var row = document.getElementById("process");
  	var column = document.getElementById("resource");
	var countRow = parseInt(row.value);
	var countColumn = parseInt(column.value);	
	document.getElementById('calc0').innerHTML = '<br/>';
	var alloc = [];
	for(var i = 1; i <= countRow; i++){
		alloc[i] = [];
		for(var j = 1; j <= countColumn; j++) alloc[i].push(parseInt(document.getElementById('a'+i+j)));
	}

	var x = [];
	for(var i=1; i<=countColumn; i++){
	  x.push(parseInt(document.getElementById('av1'+i).value));
	}
	
	for(var n = 1; n <= countRow; n++){
		var string_x = "";
		for(var i=0; i<countColumn; i++){
			if(i != countColumn -1) string_x += x[i] + ', '; else string_x += x[i];
		}
		document.getElementById('calc'+n).innerHTML = 'Bước'+n+':&nbsp&nbsp'+'Tài nguyên sẵn có = '+ string_x;
		for(var i=k; i<=countRow; i++){
			var ex = [];
			for(var j=1; j<=countColumn; j++){
				ex.push(parseInt(document.getElementById('a'+i+j).value));
			}
			var result_ex = ex.some(function(index){
				return index != 0;
			});
			if(result_ex){
				var check_x = true;
				for(var j=1; j<=countColumn; j++){
					if(x[j-1] < parseInt(document.getElementById('n'+i+j).value) ) check_x = false;
				}
					
				if(check_x == true){
				document.getElementById('p'+q).value = 'P'+i;

				var string_n = "";
				for(var o=1; o<=countColumn; o++){
					if(o != countColumn ) string_n += document.getElementById('n'+i+ o).value + ', '; else string_n += document.getElementById('n'+i+ o).value;
				}
				var string_a = "";
				for(var o=1; o<=countColumn; o++){
					if(o != countColumn ) string_a += document.getElementById('a'+i+ o).value + ', '; else string_a += document.getElementById('a'+i+ o).value;
				}
				var string_work = "";
				for(var j=1; j<=countColumn; j++){
					document.getElementById('w'+i+j).value = x[j-1] + parseInt(document.getElementById('a'+i+j).value);
					if(j != countColumn ) string_work += x[j-1] + parseInt(document.getElementById('a'+i+j).value) + ', '; else string_work += x[j-1] + parseInt(document.getElementById('a'+i+j).value);
					x[j-1] = x[j-1] + parseInt(document.getElementById('a'+i+j).value);
					}
				
				document.getElementById('calc'+n).innerHTML += '&nbsp&nbsp Với Need['+(i)+'] = ( '+string_n+' ) < Available = ( '+ string_x
          		+' ) => Nhận tiến trình P'+i+'. Tài nguyên sẵn có hiện tại ( '+string_x+' ) + ( '+string_a+' ) = ('+string_work+' )';
				
				
				
			
				for(var l=1; l<=countColumn; l++){
					document.getElementById('a'+i+l).value = '0';
					}
				
				
				k=i+1;
				if (k == countRow + 1){
					k=1;
				}
				q = q + 1;
				checker = checker + 1;
				break;
				}
				else{
				dp = i;
				}
			}
		}
		
  	}
	if(checker == 0){
		alert("Deadlock!!");
		//reset();
	}
	for(var i = 1; i <= countRow; i++)
		for(var j = 1; j <= countColumn; j++) document.getElementById('a'+i+j).value = alloc[i-1][j-1];
}