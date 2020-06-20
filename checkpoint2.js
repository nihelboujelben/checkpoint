let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
    function getAge(pet) {
    return new Date().getFullYear() - pet.bornOn;
   }

  //------------------------------------------------------------ //
  
  let petsWithAge = [];
 /* for (var i = 0; i < pets.length; i++) {
    var pet = pets[i];
    pet.age = getAge(pet);
  
    petsWithAge.push(pet);
  }*/
  const fi = pets.forEach(element => {
      element.getAge(pet);
      
  });
  console.log(petsWithAge);
  
  let dogs = [];
  /*for (var i = 0; i < pets.length; i++) {
    var pet = pets[i];
    if (pet.type === "dog") {
      dogs.push(pet);
    }
  }*/
  const dogs =pets.filter(pet => {pet.type=="dog"});
  
   console.log(dogs.m1);
  
  let jasper;
  /*for (var i = 0; i < pets.length; i++) {
    var pet = pets[i];
    if (pet.name === "Jasper") {
      jasper = pet;
    }
  }*/
 const f1= pets.find(pet => name.jasper);
  console.log(`${f1} is  ${jasper.age}  years old `);