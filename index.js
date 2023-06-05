let fullname = document.getElementById("fullname");
let phoneNumber = document.getElementById("phoneNumber");
let gender = document.getElementById("gender");
let email = document.getElementById("email");
let userImage = document.getElementById("userImage");
let address = document.getElementById("address");
let getNextUser = document.getElementById("getNextUser");
let age = document.getElementById("age");

const getUserInfo = async () => {
  const userData = await fetch("https://randomuser.me/api", {});
  const data = await userData.json();

  age.textContent = data.results[0].dob.age;
  const gottenName = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;
  fullname.textContent = gottenName;
  phoneNumber.textContent = data.results[0].cell;

  gender.textContent = data.results[0].gender;
  email.textContent = data.results[0].email;

  userImage.src = data.results[0].picture.large;
  const gottenLocation = `${data.results[0].location.city} ${data.results[0].location.state} ${data.results[0].location.country}`;
  address.textContent = gottenLocation;
};
getUserInfo();

getNextUser.onclick = () => {
  getUserInfo();
};