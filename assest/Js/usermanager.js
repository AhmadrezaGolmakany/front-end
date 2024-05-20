document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {});


  const adduserbtn = document.getElementById("add_user_btn");
  adduserbtn.addEventListener(
    "click", () => {
      document.querySelector(".add_user_modal").classList.add("show");
      document.querySelector(".add_user_modal_back").classList.remove("dis-none");

    })
  document.querySelector(".add_user_modal_back").addEventListener("click", () => {
    document.querySelector(".add_user_modal").classList.remove("show");
    document.querySelector(".add_user_modal_back").classList.add("dis-none");
  });



  
  // function getuserbyip () {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
  // }
   

  // let html = "";
  // for (var users in getuserbyip()) {


  //   html = html + `<tr>
  //                         <td>${users.id}</td>
  //                         <td>${users.name}</td>
  //                         <td>${users.username}</td>
  //                         <td>${users.email}</td>
  //                         <td>${users.address.city}</td>
  //                         <td>
  //                             <i
  //                                 class="material-icons red-text m-l-5 m-r-5  ">delete_forever</i>
  //                             <i
  //                                 class="material-icons orange-text darken-3 m-l-5 m-r-5 ">edite</i>
  //                         </td>
  //                   </tr>`

  // }

  // document.getElementsByClassName("dekstop_table_body").innerHtml = html;




  




});