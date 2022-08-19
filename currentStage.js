var selectedRow = null;
var btn = document.querySelector(".button")
btn.addEventListener("click", sampledata);


function sampledata(){
  var ax = read_Input_Value();
  if (selectedRow == null){
    create_Tr_Td(ax);
    remove_input_value()
  }
  else{   
    updatefunc(ax); 
    remove_input_value(); 
    selectedRow = null;
  }

}

function read_Input_Value(){
  var redsample={} 
  redsample["fNo"] = document.querySelector(".fridgeNo").value;
  redsample["con"] = document.querySelector(".condition").value;
  redsample["exDate"] = document.querySelector(".expiryDate").value;
  redsample["quan"] = document.querySelector(".quantity").value;
  return redsample
}
function create_Tr_Td(x){
  var empTable = document.querySelector(".list");
  var emp_tr = empTable.insertRow(empTable.length);
  var emp_td1 = emp_tr.insertCell(0);
  var emp_td2 = emp_tr.insertCell(1);
  var emp_td3 = emp_tr.insertCell(2);
  var emp_td4 = emp_tr.insertCell(3);
  var emp_td5 = emp_tr.insertCell(4);
  var emp_td6 = emp_tr.insertCell(5);
  var totalRowCount = document.querySelector(".list tr").length;
  emp_td1.innerHTML = empTable.rows.length-1;
  //Note:- .rows.length = return no of row 

    emp_td2.innerHTML = x.fNo;   
    emp_td3.innerHTML = x.con;
    emp_td4.innerHTML = x.exDate;
    emp_td5.innerHTML = x.quan;
  
  emp_td6.innerHTML = '<a class="edt" onClick="onEdit(this)">Edit</a>  / <a class="dlt" onClick="onDelete(this)">Delete</a>';
}

function remove_input_value(){
  document.querySelector(".fridgeNo").value= " ";
  document.querySelector(".condition").value= " ";
  document.querySelector(".expiryDate").value= " ";
  document.querySelector(".quantity").value= " ";  
}

function onEdit(y){
  console.log(y);

  //var selecteventbtn = document.querySelector("a.edt");
    selectedRow = y.parentElement.parentElement;
    //document.querySelector(".empid").value = selectedRow.cells[0].innerHTML;
    document.querySelector(".fridgeNo").value = selectedRow.cells[1].innerHTML;
    document.querySelector(".condition").value = selectedRow.cells[2].innerHTML;
     document.querySelector(".expiryDate").value = selectedRow.cells[3].innerHTML;
    document.querySelector(".quantity").value = selectedRow.cells[4].innerHTML;
}

function updatefunc(redsample){
  selectedRow.cells[1].innerHTML = redsample.fNo;
  selectedRow.cells[2].innerHTML = redsample.con;
  selectedRow.cells[3].innerHTML = redsample.exDate;
  selectedRow.cells[4].innerHTML = redsample.quan;
  
}


function onDelete() {
    if (confirm('Are you sure to delete this record ?')) {
        var selectdelete = document.querySelector("a.dlt");
        selectdelete = selectdelete.parentElement.parentElement.remove(0);
    }
}
