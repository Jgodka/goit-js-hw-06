const formLog = document.querySelector(".login-form");
console.log(formLog);

formLog.addEventListener("submit", hendlerFormLog);

function hendlerFormLog(evt) {
  evt.preventDefault();

  console.log(evt.currentTarget.elements);

  const { email, password } = evt.currentTarget.elements;
  if (!email.value || !password.value) {
    return alert`Всі поля повинні бути заповнені`;
  }

  const data = {
    email: email.value,
    password: password.value,
  };
  console.log("data", data);
  console.log(Object.keys(evt.currentTarget.elements));
  evt.currentTarget.reset();
}
