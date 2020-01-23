const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');
function pushElementHtml(parentElement,elementName, tagName, idName, className, icon, itemName){
elementName = document.createElement(tagName);
elementName.setAttribute('id', idName);
elementName.setAttribute('class', className);
elementName.innerHTML = `<div class="itemWrap"><span><i id="folderIcon" 
class="material-icons">${icon}</i></span>${itemName}</div>`;
parentElement.appendChild(elementName)
}
pushElementHtml(rootNode,'films', 'div', 'films', 'folder', 'folder', structure[0].title);
let films = document.getElementById('films');
pushElementHtml(films,'ironMan', 'div', 'ironMan', 'film folderChild filmsChild','insert_drive_file', 
structure[0].children[0].title);
let ironMan = document.getElementById('ironMan');
pushElementHtml(films,'fantasy', 'div', 'fantasy', 'folder filmsChild folderChild', 'folder', 
structure[0].children[1].title);
let fantasy = document.getElementById('fantasy');
pushElementHtml(fantasy,'lordOfRings', 'div', 'lordOfRings', 'film folderChild', 'insert_drive_file', 
structure[0].children[1].children[0].title);
let lordOfRings = document.getElementById('lordOfRings');
pushElementHtml(fantasy,'newFolder', 'div', 'newFolder', 'folder folderChild', 'folder', structure[0].
children[1].children[1].title);
let newFolder = document.getElementById('newFolder');
pushElementHtml(newFolder,'emptyFolder', 'div', 'emptyFolder', 'emptyFolder folderChild', '', 'Folder is empty');
let emptyFolder = document.getElementById('emptyFolder');
pushElementHtml(rootNode,'documents', 'div', 'documents', 'folder', 'folder', structure[1].title);
let documents = document.getElementById('documents');
pushElementHtml(documents,'epamHW', 'div', 'epamHW', 'folder folderChild', 'folder', structure[1].
children[0].title);
let epamHW = document.getElementById('epamHW');
pushElementHtml(epamHW,'emptyEpamHWFolder', 'div', 'emptyEpamHWFolder', 'emptyFolder folderChild',
'', 'Folder is empty');
let folder = Array.from(document.querySelectorAll('.folder'));
let folderChild = Array.from(document.querySelectorAll('.folderChild'));
folder.forEach(element => {
  element.addEventListener('click', function(event){
	event.stopPropagation();
          if(this.querySelector('.material-icons').innerHTML==='folder'){
        this.querySelector('.material-icons').innerHTML='folder_open'
    }else{
      this.querySelector('.material-icons').innerHTML='folder'
    }
    let children = Array.from(this.children);
  
  for (let i = 1; i<children.length; i++){
    if(children[i].style.display === 'block'){
      children[i].style.display = 'none';
    }else{
      children[i].style.display = 'block';
  }
 }
  for (let i = 0; i< folderChild.length; i++){
    folderChild[i].addEventListener('click', function(event){
     event.stopPropagation();
 });
}
  });
  });
  
 





