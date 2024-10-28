const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

const row = document.getElementById("team-row");
let htmlContent = "";

teamMembers.forEach((member) => {
  htmlContent += `
    <div class="col-4">
      <div class="card mb-3 text-white bg-dark">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${member.img}" class="img-fluid rounded-start" alt="${member.name}" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${member.name}</h5>
              <p class="card-text">${member.role}</p>
              <a href="#"><p class="card-text">${member.email}</p></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
});

row.innerHTML = htmlContent;
