let data = [
  {
    firstName: 'Ashton',
    lastName: 'Kutcher',
    age:40
  },
  {
    firstName: 'Bradley',
    lastName: 'Pitt',
    age:54
  },
  {
    firstName: 'Hannah',
    lastName: 'Dakota',
    age:24
  }
]

let lastName = prompt('Enter your last name:');
lastName = lastName.toLowerCase()
let numb;
if (lastName === '') {
    alert('Please, enter your last name!');
    numb = 2
}
for (var i=0; i < data.length; i++){
if (data[i].firstName.toLowerCase() === lastName){
    numb = 1; 
  break;
} else {}
}
if (numb === 1) {
    alert('user name: '+ data[i].firstName + ' '+ data[i].lastName + '\ruser age: '+data[i].age)
} else if (numb === 2) {
} else alert('No results found for tou request')
