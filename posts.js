const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('userid');
console.log(myParam);

async function fetchData(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${myParam}`);
    const data = await response.json();
    data.forEach((user) => {
        console.log(user)
      createCards(user);
    });
}

const cardList = document.querySelector(".cardList");

function createCards(user) {
  cardList.innerHTML += `
  <div class="row d-flex">
      <div class="card col-lg-4">
          <div class="userInfo"> 
              <h5>USER ID: ${user.userId}</h5>

              <h5>ID: ${user.id}</h5>
              <h5>TİTLE: ${user.title}</h5>
              <h5>BODY: ${user.body}</h5>
          </div>  
 
      </div>
      </div>
    `;
}

fetchData();