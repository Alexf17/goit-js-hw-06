const form = document.querySelector(".login-form");
// const input = form.querySelector("input");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заполните все поля!");
  }

  const data = { email: email.value, password: password.value };
  console.log(data);
  event.currentTarget.reset();
}