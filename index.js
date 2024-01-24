const submit = document
  .querySelector(".submit-btn")
  .addEventListener("click", (e) => {
    const confirm = document.getElementsByClassName("confirm")[0].value;
    const pass = document.getElementsByClassName("pwd")[0].value;
    const hiddenPwd = document.getElementsByClassName("hiddenPwd")[0];

    if (pass) {
      if (pass === confirm) hiddenPwd.style.display = "none";
      else {
        e.preventDefault();
        return (hiddenPwd.style.display = "block");
      }
    }
  });
