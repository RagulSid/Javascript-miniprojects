const langs = [
  {title: "js", description:"js program",id:"card0"},
  {title: "python", description:"python code",id:"card1"},
  {title: "java", description:"java objects",id:"card2"},
  {title: "android", description:"android program",id:"card3"},
  {title: "jquery", description:"jquery objects",id:"card4"},
  {title: "ruby", description:"ruby code",id:"card5"}
]

var dynamic = document.querySelector('.container');

for (var i = 0; i < langs.length; i++) {
  var fetch = document.querySelector('.container').innerHTML;  
  dynamic.innerHTML = `<div id="card${i}" class="boxes" onclick="cardinfo(this.id)">
      <div class="box-content">
        <h2>${langs[i].title}</h2>
        <p>
          ${langs[i].description}
        </p>
        <a class="showmore" href="#">Read More</a>
      </div>
    </div>` + fetch ; 
    var bgimg = document.getElementById(`card${i}`);
    bgimg.style.backgroundImage = `url('img/${langs[i].title}.jpg')`;
} 

function cardinfo(id){
    const cardid = id;
    // console.log(cardid);
    const fullname = langs.filter((x) => cardid === x.id).map((x) => x.title + " , " + x.description);
    console.log(fullname);
}
