/*eslint-disable*/
//'use strict';
// console.log(this); //window
var firstName = 'samim';
function sayHi(lastName, age, profession) {
  console.log(lastName, age, profession);
  console.log(this.firstName + lastName); //window
  // console.log(this.firstName);
}

// sayHi(); //plain function call alway indicate window
// sayHi.call({ firstName: 'samim' }, 'Hasan');
sayHi.apply({ firstName: 'samim' }, ['Hasan', 26, 'Web developer']);
// sayHi.call(profile, 'Hasan');

const profile = {
  firstName: 'samim',
  lastName: 'Hasan',
  profession: 'Web developer',
  bio: function() {
    //console.log(this);
    const bioProfession = () => {
      console.log(`${this.firstName} ${this.lastName} - ${this.profession}`);
    };
    bioProfession()
    //bioProfession.call('gdjzdgkds'); //Task window
    console.log(`${this.firstName} ${this.lastName}`);
  }
};

//profile.bio(); //Referce dependent -Obj
const bio = profile.bio.bind(profile);
bio(); //window

// function Person() {
//   this.firstName = 'samim';
//   this.lastName = 'Fazlu';
//   console.log(this);
// }

// const samim = new Person(); //Depends on new Keyword
