var firstName=["Tim","Noris","Uliah","Quin","Pen","Izidor","Kerry","Onore","Parel","Zero"];

var lastName =["Sallow","Fernsby","Miracle","Villin ","Dankworth","MacQuoid","Loughty","OnRelishore","Yel","Aldaine"];

function getName(){
  var randomName = firstName[Math.floor(Math.random() * firstName.length)]+' '+lastName[Math.floor(Math.random() * lastName.length)];
  document.getElementById("name").innerHTML = randomName;
}
