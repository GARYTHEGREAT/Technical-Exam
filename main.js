let developerArray = [];

let elDeveloperList = document.getElementById('developer-list');
let elDeveloperForm = document.getElementById('new-developer');



let Developer = function(name, school, language){
    this.name = name;
    this.school = school;
    this.language = language;
    

}
if(localStorage.storageDeveloperArray){
    let getDeveloperArray = localStorage.getItem('storageDeveloperArray');
    developerArray = JSON.stringify(getDeveloperArray);
}else{
    let Ishmel = new Developer ('Ishmel', 'GW Coding Boot Camp', 'HTML, CSS');
    let Mandana = new Developer ('Mandana', 'Code Partners', 'Javascript');
    let Gary = new Developer ('Gary', 'Code Fellows', 'Javascript, JQuery');
    
    developerArray.push(Ishmel, Mandana, Gary);

 }
console.log (developerArray)
 

for(let i = 0; i < developerArray.length; i++){
    let elDeveloper = document.createElement('li');
    elDeveloperList.appendChild(elDeveloper);
    elDeveloper.innerHTML = developerArray[i].name;
    // elDeveloperSchool.innerHTML = developerArray[i].school;
    // elDeveloperLanguage.innerHTML = developerArray[i].language;
    let elDeveloperSchool = document.createElement('li');
    elDeveloperList.appendChild(elDeveloperSchool);
    elDeveloperSchool.innerHTML = developerArray[i].school;
    let elDeveloperlanguage = document.createElement('li');
    elDeveloperList.appendChild(elDeveloperlanguage);
    elDeveloperlanguage.innerHTML = developerArray[i].language;

  
  
}
let elNewDeveloper = elDeveloperForm.newDeveloper;
let elNewSchool = elDeveloperForm.newSchool;
let elNewLanguage = elDeveloperForm.newLanguage;


 

function submitHandler(event) {
     event.preventDefault();
     console.log ('bananas')
     let developerName = elNewDeveloper.value;
     let developerLanguage = elNewLanguage.value;
     let developerSchool = elNewSchool.value;
     console.log (developerName , developerSchool, developerLanguage)

     let newDeveloper = new Developer(developerName, developerSchool, developerLanguage);

     let elDeveloper = document.createElement('li');
     elDeveloperList.appendChild(elDeveloper);
     elDeveloper.innerHTML = developerName;

     let elDeveloperSchool = document.createElement('li');
     elDeveloper.appendChild(elDeveloperSchool);
     elDeveloperSchool.innerHTML = developerSchool;


     let elDeveloperLang = document.createElement('li');
     elDeveloperSchool.appendChild (elDeveloperLang)
     elDeveloperLang.innerHTML = developerLanguage;

     

       let saveDeveloper = localStorage.setItem('storageDeveloperArray', JSON.stringify(developerArray));
    
}
       
elDeveloperForm.addEventListener('submit', submitHandler);