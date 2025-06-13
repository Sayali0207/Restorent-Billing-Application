let ajaxImpl=(str)=>{

    let xhttp=new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            let tableBody=document.getElementById("tblbody");
            let responseData = this.responseText;
            let jsonObject = JSON.parse(responseData);
            jsonObject.forEach((item,index) => {
                let row=document.createElement("tr");

                let col=document.createElement("td");
                col.innerHTML="" +(index+1);
                row.appendChild(col);

                col=document.createElement("td");
                col.innerHTML=item.cat_name;
                row.appendChild(col);

                col=document.createElement("td");
                col.innerHTML="<a href='/deletecat?id="+item.cat_id+"' class='btn btn-danger'>Delete</a>";
                row.appendChild(col);

                col=document.createElement("td");
                col.innerHTML="<a href=''>Update</a>";
                row.appendChild(col);

                tableBody.appendChild(row);
                
            });
                
            
           
        }
};
xhttp.open("GET", "/search?sd="+str,true);
xhttp.send();
}