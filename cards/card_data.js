const langs = [
  {title: "js", description:"js program"},
  {title: "python", description:"python code"},
  {title: "java", description:"java objects"},
  {title: "android", description:"android program"},
  {title: "jquery", description:"jquery objects"},
  {title: "ruby", description:"ruby code"}
]

var dynamic = document.querySelector('.container');

for (var i = 0; i < langs.length; i++) {
  var fetch = document.querySelector('.container').innerHTML;  
  dynamic.innerHTML = `<div id="card${i}" class="boxes">
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
    const fullnames = langs.map(x => x.title + x.description);
    console.log(fullnames);
}

// const fullnames = users.filter((x) => x.title == "js").map((x) => x.description);
