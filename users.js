async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  data.forEach((user) => {
    createCards(user);
  });
}

const cardList = document.querySelector(".cardList");

function createCards(user) {
  cardList.innerHTML += ` 
      <div class="card col-lg-4">
          <div class="userInfo">
              <h3>${user.name}</h3>
              <h5>ID: ${user.id}</h5>
          </div>
          <button class="btn addressBtn gx-5 px-5" onclick="showBtn(${user.id}, 'address')"><i class="fas fa-location-dot"></i></button>
          <button class="btn companyBtn" onclick="showBtn(${user.id}, 'company')"><i class="fas fa-building"></i></button>
          <button class="btn contactBtn" onclick="showBtn(${user.id}, 'contact')"><i class="fas fa-user"></i></button>
          <a class="text-danger" href="posts.html?userid=${user.id}">Show Posts</a>
          <div class="content row">
              <div class="address display">
                 Street: ${user.address.street}<br>    
                 Suite: ${user.address.suite}<br>    
                 City: ${user.address.city}<br>    
                 Zipcode: ${user.address.zipcode}<br> 
              </div> 
              <div class="company display">
                 Name: ${user.company.name}<br>    
                 CatchPhrase: ${user.company.catchPhrase}<br>    
                 Bs: ${user.company.bs}<br>     
              </div>  
              <div class="contact display">
                 E-mail: ${user.email}<br>    
                 Phone: ${user.phone}<br>    
                 Website: ${user.website}<br>     
              </div>  
          </div>
      </div> 
    `;
}

fetchUsers();

function showBtn(id, type) {
  const types = ["address", "company", "contact"];

  if (types.includes(type)) {
    const elements = document.querySelectorAll(`.${type}`);
    const buttons = document.querySelectorAll(`.${type}Btn`);
    if (elements.length > 0 && elements[id - 1]) {
      if (elements[id - 1].classList.contains("display")) {
        elements[id - 1].classList.remove("display");
        buttons[id - 1].classList.add("focusEffect");
      } else {
        elements[id - 1].classList.add("display");
        buttons[id - 1].classList.remove("focusEffect");
      }
    }
  }
}
