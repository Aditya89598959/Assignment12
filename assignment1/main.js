// var btn = document.getElementById("btn");
var con = 0;
var div = document.getElementById("cardDiv");
function getpost() {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => {
      return res.json();
    })
    .then((post) => {
      let getlocalstorage = localStorage.getItem('aditya');
      if (getlocalstorage === null) {
        let arr1 = [post];
        localStorage.setItem("aditya", JSON.stringify(arr1))
        render();
      } else {
        let arr1 = JSON.parse(getlocalstorage)
        getpost(arr1)
      }
      function getpost(arr1) {
        var div = document.getElementById('aditya');
        render(post, document.querySelector('aditya'));
        console.log(arr1)
      }
    })
    .catch((error) => {
      console.log(error);
    })
} getpost()
var render = function () {
  var div = JSON.parse(localStorage.getItem('aditya'))[0];
  var container = document.getElementById("cardDiv");
  for (let index = 0; index < 10; index++) {
    container.innerHTML +=
      `<div class='card col-3 m-1 mx-auto'>
            <img class='card-img-top' src=${div[index].thumbnailUrl}>
            <div class='card-body'>
            <h5 class='card-title'>${div[index].id}</h5>
            <p class='card-text'>${div[index].title}</p>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" onclick="getEditData(${div[index].id})"  data-bs-toggle="modal" data-bs-target="#exampleModal">
              EDIT
            </button>           
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModal">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body " id="input">
                <form>
                <div>
                <input type="title" id="input">
                  </div>                 
                  </form>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger text-sm-start "data-bs-dismiss="">EXIT</button>
                    <button type="button"  class="btn btn-success" data-bs-target="#exampleModal">SAVE</button>                     
                    </div>
                </div>
              </div>
            </div>
            </div>
            </div>`
  }
}
// alert('hi')
var getEditData = (id) => {
  let divEl = document.getElementById("input")
  const inputEl = document.createElement("input")
  inputEl.value = id
  divEl.append(inputEl)
  console.log(inputEl)
  // function onEdit(inputEl) {
  //   selectedRow = inputEl.parentElement.parentElement;
  //   document.getElementById("input").value = selectedRow  
  // function save(inputEl) {
  //   // e.preventDefault();
  //   form.classList.remove('aditya');
  //   var l = input.length;
  //   while (l--) {
  //     input[l].readOnly = true;
  //   };
  //   previous = [];
    //send your info here 
  }
  // function edit(inputEl) {
  //   e.preventDefault();
  //   form.classList.add('aditya');
  //   var l = input.length;
  //   while (l--) {
  //     previous[l] = input[l].value;
  //     input[l].readOnly = false;
  //   }
  // }
  // function cancel(e) {
  //   form.classList.remove('aditya');
  //   e.preventDefault();
  //   var l = input.length;
  //   while (l--) {
  //     input[l].value = previous[l];
  //     input[l].readOnly = true;
  //   }
  // }

// }
















// }


