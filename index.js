//By : Somba, Feldryansa
let people = ["Greg", "Mary", "Devon", "James"];

// nomor 1
for (let i = 0; i < people.length; i++){
    console.log(people[i]);
}

// nomor 2
people.forEach(function (data) {
    console.log(data);
  });

// nomor 3
people.shift();


// nomor 4
people.pop();


// nomor 5
people.unshift("Matt");

// nomor 6
people.push("Feldry");
    console.log(people);

// nomor 7
for (let i=0; i<people.length; i++){
    console.log(people[i]);
    if (people[i] === "Mary"){
      break;
    }
  } 

// nomor 8
let namaPeople = people.slice(2);
        console.log(namaPeople);

// nomor 9
let people2 =  ["Greg", "Mary", "Devon", "James"];
people2.splice (2, 1, "Elizabeth", "Artie");
console.log(people2);

// nomor 10
let withBob = people.concat("Bob");
  console.log(withBob);


// Object Exercise
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// nomor 1
programming.languages.push("Go");
    console.log(programming);

// nomor 2
programming['difficulty'] = 7;
    console.log(programming);

// nomor 3
delete programming.jokes;
    console.log(programming);

// nomor 4
programming.isFun = true;
    console.log(programming);

// nomor 5
programming.languages.map(function (data,index){
    console.log(data,index);
});