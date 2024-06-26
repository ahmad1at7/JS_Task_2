const searchFunction=()=>{
    let filter=document.getElementById('search').value.toUpperCase();

    let myTable =document.getElementById('myTable');

    let tr = myTable.getElementsByTagName('tr');

    for(var i=0; i<tr.length; i++){
        let td= tr[i].getElementsByTagName('td')[3];

        if(td){
           let textvalue =td.textContent || td.innerHTML;

           if(textvalue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display="";
           }else{
                tr[i].style.display="none";   
           }
        }
    }
}

//Sort Table

function sortTableByColumn(table, column, asc =true){

        const dirModifier= asc ? 1:-1;
            const tBody=table.tBodies[0];
            const rows =Array.from(tBody.querySelectorAll("tr"));

            const sortedRows=rows.sort((a , b) =>{
                const aColText =a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
                const bColText =b.querySelector(`td:nth-child(${column + 1})`).textContent.trim(); 

                return aColText>bColText ? (1 * dirModifier):(-1 * dirModifier);
         
            });
            //REmove all existing tr from table
            while(tBody.firstChild){
                tBody.removeChild(tBody.firstChild); 
            }

            tBody.append(...sortedRows);

            //r
            table.querySelectorAll('th').forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
            table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-asc",asc);
            table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-desc",!asc);
}

document.querySelectorAll(".table-sortable th").forEach(headerCell =>{
        headerCell.addEventListener("click" , ()=>{
            const tableElement = headerCell.parentElement.parentElement.parentElement;
            const headerIndex=Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
            const currentIsAscending= headerCell.classList.contains("th-sort-asc");

            sortTableByColumn(tableElement, headerIndex, !currentIsAscending); 

        })
})

