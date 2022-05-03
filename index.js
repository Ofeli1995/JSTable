fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>{
   response.json().then(
       data=>{
                console.log(data);
                if(data.length >0){

                    data.map((u)=>{

                        let tr = document.createElement("tr");
                        let tbody = document.querySelector('tbody');
                        const tdOfName =document.createElement("td");
                        tdOfName.innerText = u.name;
                        const tdOfUserName = document.createElement("td");
                        const tdOfEmail = document.createElement("td");
                        const tdOfPhone = document.createElement("td");
                        tdOfUserName.innerText = u.username;
                        tdOfEmail.innerText = u.email;
                        tdOfPhone.innerText= u.phone;
                        tr.appendChild(tdOfName);
                        tr.appendChild(tdOfUserName);
                        tr.appendChild(tdOfEmail);
                        tr.appendChild(tdOfPhone);
                        const tdOfButtons = document.createElement("td");
                        const editButton = document.createElement('button')
                        const deleteButton = document.createElement('button')
                        tr.appendChild(tdOfButtons);
                        tdOfButtons.appendChild(editButton);
                        tdOfButtons.appendChild(deleteButton);
                        editButton.innerText= "Edit";
                        deleteButton.innerText='Delete';
                        deleteButton.classList.add('delete-btn');
                        document.querySelector('tbody').appendChild(tr);
                        //console.log(tbody)
                        
                        deleteButton.addEventListener('click', deleteRow);
                        editButton.addEventListener('click', editRow);
                       
                        deleteInputValue();
                        function editRow(){
                            //debugger;
                            console.log('edit')
                            modal.open()
                            function deleteRow1 (){
                                tr.querySelectorAll('td').forEach((n)=>n.remove());
                                
                            }
                            deleteRow1 ()
                            
                        }
                        function deleteRow (){
                            tr.querySelectorAll('td').forEach((n)=>n.remove());
                            
                        }
                        editButton.setAttribute("id", 'edit-button')

                    })
                   
                }
            }
        )
    }
)



const modal = $.modal({
    title: 'Add A New User',
    closable: true,
    content: `
    <form>
    <div id='blabla'><div class="inputs-style" id="inputs">
    <input
        id="nameId"
        type="text"
        value=''
        placeholder="Enter the name...">
    </div><br>
    <div class="inputs-style">
        <input
        
        id = "usernameId"
        type="text"
        value=''
        placeholder="Enter the username...">
    </div><br>
    <div class="inputs-style">
        <input
       
        id="emailId"
        type="email"
        value=''
        placeholder="Enter the Email...">
    </div><br>
    <div class="inputs-style">
        <input
        
        id="telId"
        type="tel"
        value=''
        placeholder="Enter the Phone Number...">
    </div><br>
</div></form>`,
footerButtons : [
    {text: "Save", type:'primary' ,handler(){
        console.log("primary BTN clicked")
        addRow();
        modal.close();
        deleteInputValue()
        
    }},
    {text: "Cancel", type:'danger',handler(){
        console.log("danger BTN clicked")
        modal.close();
    }}
]

})
document.addEventListener('click',event =>{
    event.preventDefault();
    const btnType = event.target.id
    
    
    console.log(btnType)
   
    if(btnType === 'edit-button'){
        
        //addInputValues()
        modal.open();
        deleteRow();
    }
    if(btnType === 'add-row'){
        console.log('add');
        
        modal.open();
        
    }
   
})
