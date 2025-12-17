interface Identity {
  name    : string;
  age     : number;
  city    : string;
  hobbies : string;
}

const identity: Identity = {
  name    : 'Someone',
  age     : 30,
  city    : 'Mars',
  hobbies : 'Reading'
};

function printIdentity(identity: Identity) {

  identity.name     = 'Another Name';
  identity.age      = 40;
  identity.hobbies  = 'Coding';

  console.log(identity);

}

printIdentity(identity);
