const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle");

//js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
          modeToggle.classList.toggle("active");
          body.classList.toggle("dark"); 
      });
   //js code to keep user selected mode even page refresh or file reopen
    modeToggle.addEventListener("click" , () =>{
    modeToggle.classList.toggle("active");
    });

   
// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
        
    });

// js code to toggle sidebar
sidebaropen.addEventListener("click", () =>{
nav.classList.add("active");
});

body.addEventListener("click", e =>{
    let clickedElm = e.target;
    if(!clickedElm.classList.contains("sidebaropen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }

});
