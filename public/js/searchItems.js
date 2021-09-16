
function checkthisfunction() {
    const select = document.getElementById('category');
    let option = select.options[select.selectedIndex];
    let categoryId = option.value;
    console.log("Hello");

    searchByCategory(categoryId);
   
}

const searchByCategory = async (categoryId) => {
    const response = await fetch(`/items/${categoryId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      let data = await response.json();
      let replaceDiv = document.getElementById('displayDiv');
      replaceDiv.innerHTML="";
      console.log(data);
      console.log(data.length);
      console.log();

      data.forEach(a => {
        console.log("New hello");
      });

      let htmlText=``;
      data.forEach(b=>{
       htmlText = htmlText+
        `<div class="col s12 m4">
            <div class="card">
            <div class="card-image">
            <img src="/images/strawberry.jpg">
            <span class="card-title">${b.title}</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red" href="/item/${b.id}"><i class="material-icons">zoom_in</i></a>
          </div>
            <div class="card-content">
            <p class="truncate">${b.description}</p>
          </div>
        </div>
      </div>`
        
      console.log(b.title);
      console.log(b.description);

      });

      console.log("=========================");
      console.log(htmlText);
      replaceDiv.innerHTML=htmlText;


      
      // // let data = response.clone().json();
      // let data = await response.json();
      // // data.then(function (data) {
      //   let a = document.getElementById('displayDiv');
      //   a.innerHTML="";
      //   let b ="";
      //   for (const obj in data) {
      //     b=b+obj.title;
          
      //  };
        
      //   a.innerHTML=`<div>${b}</div>`;


      //   console.log(data);
      // // });

      // // console.log("Response ok");






    } else {
      console.log("Error");
    }
  };

