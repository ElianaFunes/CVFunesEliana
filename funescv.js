function showdiv(id) {
    debugger;
    var div = document.getElementById(id);
    var button=document.getElementById("show"+id);
    if (div.style.display === "none") {
      div.style.display = "block";
      button.classList.remove("greenbutton");
      button.classList.add("redbutton");
    } else {
      div.style.display = "none";
      button.classList.remove("redbutton");
      button.classList.add("greenbutton");
    }
  }