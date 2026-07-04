const form = document.querySelector("form");
const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#email");
const users = document.querySelector(".users");
const inp3 = document.querySelector("#url");

let usersData = [
  {
    id: 1,
    name: "Sophie Müller",
    email: "sophie.mueller@gmail.com",
    image: "https://i.pravatar.cc/150?img=1",
    dateOfBirth: "1995-03-14",
  },
  {
    id: 2,
    name: "James Carter",
    email: "james.carter@outlook.com",
    image: "https://i.pravatar.cc/150?img=3",
    dateOfBirth: "1990-07-22",
  },
  {
    id: 3,
    name: "Aisha Khan",
    email: "aisha.khan@yahoo.com",
    image: "https://i.pravatar.cc/150?img=5",
    dateOfBirth: "1998-11-05",
  },
  {
    id: 4,
    name: "Carlos Rivera",
    email: "carlos.rivera@gmail.com",
    image: "https://i.pravatar.cc/150?img=7",
    dateOfBirth: "1993-01-30",
  },
  {
    id: 5,
    name: "Lena Fischer",
    email: "lena.fischer@web.de",
    image: "https://i.pravatar.cc/150?img=9",
    dateOfBirth: "2000-06-18",
  },
];

const ui = () => {
  users.innerHTML = "";
  usersData.forEach((elem) => {
    users.innerHTML += `<div class="user-card">
        <div class="img_box">
          <img
            src="${elem.image}"
            alt="image here"
          />
        </div>
        <div class="text">
            <h3>Name - ${elem.name}</h3>
            <p>Email - ${elem.email}</p>
        </div>
      </div>`;
  });
};
ui();

form.addEventListener("submit", (events) => {
  events.preventDefault();
  let name = inp1.value;
  let email = inp2.value;
  let image = inp3.value;
  if (name.trim() === "" || email.trim() === "" || image.trim() === "") return;

  usersData.push({
    name,
    email,
    image,
  });
  ui();

//   console.log(usersData);
//   console.log("form created successfully");

  form.reset();
});
