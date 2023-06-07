function add() {
  const item = document.createElement("div");
  item.classList.add("Item");
  item.innerHTML = `
    <div class="Item">
    <div class="Item_name">
      <input type="text" class="textName" placeholder="Name" id="name"  />
    </div>
    <div class="Item_price">
      <input type="text" class="textPrice" placeholder="Gia" id="gia" />
    </div>
    <div class="Function">
      <button class="buttonUpdate" id="update">Sửa</button>
      <button class="buttonDelete" id="delete">Xóa</button>
      <button class="buttonSave" id="save">Lưu</button>
    </div>
  </div>
    `;

  const list = document.getElementById("Containt");
  list.appendChild(item);

  update();
}

function save() {
  var name = document.getElementById("name").value;
  var gia = document.getElementById("gia").value;

  var data = JSON.stringify{
    name: name,
    price: gia,
    note: khong
  };
  fetch(`localhost:8765/service`, {
    method: postMessage,
    body: data,
    headers: {
        'Content-Type': 'application/json'
    }
  })
}

function update() {
  var buttons = document.querySelectorAll(".buttonUpdate");

  buttons.forEach(function(button) {
    button.onclick = function(){
        
    }
  }) 
}
