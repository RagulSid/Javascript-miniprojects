var titlearray =["js","python","java","android","jquery","ruby"];
var descriptionarray =["js program","python code","java objects","android program","jquery objects","ruby code"];

var dynamic = document.querySelector('.container');  
for (var i = 0; i < titlearray.length; i++) {
  var fetch = document.querySelector('.container').innerHTML;  
  dynamic.innerHTML = `<div id="card${i}" class="boxes">
      <div class="box-content">
        <h2>${titlearray[i]}</h2>
        <p>
          ${descriptionarray[i]}
        </p>
        <a class="showmore" href="#">Read More</a>
      </div>
    </div>` + fetch ; 
    var bgimg = document.getElementById(`card${i}`);
    bgimg.style.backgroundImage = `url('img/${titlearray[i]}.jpg')`;
} 


const buttonPressed = e => {
  console.log(e.target.);
}