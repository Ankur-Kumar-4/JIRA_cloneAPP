const create_button = document.getElementsByTagName("button");

const input_card = document.getElementsByTagName("input");


const dropCard = document.getElementsByClassName("card");



// delete the card by delete button event click.
function del_card(del_button){
   const del_card = del_button.parentNode;
  del_card.parentNode.remove();
}

// display input by changing the class name when create issue is clicked.
function create_input(event){
   event.target.nextSibling.className="form-control mt-4 appear"
}

// add eventlistener to all the create issue buttons.
for (let i=0;i<create_button.length;i++){
    create_button[i].addEventListener("click",create_input)
}

// create issue card when enter key is pressed.
function create_card(event){
    if(event.keyCode==13){
      let taskName = event.target.value;
      
      const card = document.createElement("div");
      card.className="card_holder"
      card.innerHTML=`<div ondragstart="dragstart(this)" class="drag_item" draggable="true">
      <p>${taskName}</p>
      <button class="btn btn-sm ms-5 btn_delete" onclick="del_card(this)">Delete</button></div>
      `;
      const card_container = event.target.nextElementSibling;
      card_container.appendChild(card);

      const input_hide = event.target;
      input_hide.className="hidden"
      input_hide.value="";


    }
 }

// add eventlistener to all the input.
for (let i=0;i<input_card.length;i++){
    input_card[i].addEventListener("keyup",create_card)
}


//adding drag and drop property



// apply event listener to all the cards

for (let i=0;i<dropCard.length;i++){
    dropCard[i].addEventListener("dragover",dragover_drop)
}


for (let i=0;i<dropCard.length;i++){
    dropCard[i].addEventListener("drop",drop)
}

// dragover is just to enable drop event and have to prevent default behaviour to use drop event. 
function dragover(event){
    event.preventDefault();
}
function dragover_drop(event){
    event.preventDefault();
}

// dragstart gives the reference of the selected item.
function dragstart(event){
    const source = event.parentElement;
    console.log(source);
    // event.dataTransfer.setData("element", source);
    
    
}

// drop -> we take the reference from dragstart and put in the drop parent reference and remove the dragstart reference from there.
function drop(event){
   const source = event.dataTransfer.getData("element");
   console.log(source);
}