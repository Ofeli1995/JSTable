Element.prototype.appendAfter = function(element){
element.parentNode.insertBefore(this, element.nextSibling);
}


function _createModalFooter(buttons =[]){
if(buttons.length === 0){
    return document.createElement('div');
}const wrap = document.createElement('div')
wrap.classList.add('modal-footer')
buttons.forEach(btn=>{
    const $btn= document.createElement('button')
          $btn.textContent = btn.text;
          $btn.classList.add('btn')
          $btn.classList.add(`btn-${btn.type || 'secondary'}`)
          $btn.onclick = btn.handler 
          wrap.append($btn);
    


})
return wrap;
}
function _createModal(options){
    
    const modal = document.createElement('div')
    modal.classList.add('omodal')
    modal.insertAdjacentHTML('afterbegin' ,` 
    <div class='modal-overlay1 ' data-close="true">
        <div class='modal-window '>
            <div class='modal-header'>
                <span class='modal-title'>${options.title || 'Window'}</span>
                ${options.closable ? `<span class='modal-close' data-close="true">&times;</span>` : ''}
            </div>
            <div class='modal-body' data-content>
                ${options.content || ''}
            </div>
            

        </div>

    </div>`)
    const footer =_createModalFooter(options.footerButtons);
    footer.appendAfter(modal.querySelector('[data-content]'));
    document.body.appendChild(modal);
    return modal;
}




$.modal = function(options){
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false
    destroyed = false

    const modal={
        open(){
            if(destroyed){
                return console.log('Modal is destroyed')
            }
            !closing && $modal.classList.add('open')
        },
        close(){
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(()=>{
                $modal.classList.remove('hide')
                closing = false
            },ANIMATION_SPEED)
        },
        saveInfo(){

        }
    }
    const listener = event =>{
        console.log('clicked', event.target.dataset)
        if(event.target.dataset.close){

        }
    }

 
    $modal.addEventListener('click',listener )
    return Object.assign(modal, {
        destroy(){
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
            destroyed = true
        },
        setContent(html){
            $modal.querySelector('[data-content]').innerHTML=html;
        }
    })
}

function addRow(){
   const tbody= document.querySelector('tbody')
    const tr = document.createElement('tr')
    var td1= document.createElement('td');
    var td2= document.createElement('td');
    var td3= document.createElement('td');
    var td4= document.createElement('td');
    var td5 = document.createElement('td')
    var btn1 =  document.createElement('button');
    var btn2 = document.createElement('button');
    td1.innerHTML = (document.getElementById('nameId')).value;
    td2.innerHTML = document.getElementById('usernameId').value;
    td3.innerHTML = document.getElementById('emailId').value;
    td4.innerHTML = document.getElementById('telId').value;
    btn1.innerText = "Edit";
    btn2.innerText = 'Delete';
   
   
    
    
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    td5.appendChild(btn1);
    td5.appendChild(btn2);
    tr.appendChild(td5);
    tbody.appendChild(tr);
    //console.log(tr);
    btn2.addEventListener('click', deleteRow)
    function deleteRow (){
          tr.querySelectorAll('td').forEach((n)=>n.remove()); 
    }
}
function deleteInputValue(){
  let in1 = document.getElementById('nameId');
  let in2 = document.getElementById('usernameId');
  let in3 = document.getElementById('emailId');
  let in4 = document.getElementById('telId');
  in1.value="";
  in2.value='';
  in3.value="";
  in4.value='';
}

// function addInputValues(){
//     let node = document.getElementById('blabla');
//   const tr = document.querySelector('tr');

//     //console.log((document.getElementById('nameId')).value)
//     let in1 = document.getElementById('nameId');
//     let in2 = document.getElementById('usernameId');
//     let in3 = document.getElementById('emailId');
//     let in4 = document.getElementById('telId');
//     const inputs = [in1, in2, in3,in4];
//     let tbody = document.querySelector('tbody');
//     document.querySelectorAll('tr').forEach((n)=>{

//         in1.value = n.value;
//         in2.value = n.username;
//         in3.value = n.email;
//         in4.value = n.textContent;
//         console.log(n);
//         //console.log(n , in1.value)
//     })
//     //console.log(inputs);
//     // in1.value = (document.getElementById('nameId')).value;
//     // in2.value = document.getElementById('usernameId').value;
//     // in3.value = document.getElementById('emailId').value;
//     // in4.value = document.getElementById('telId').value;
// }


// //tr.querySelectorAll('td').forEach((n)=>n.remove());