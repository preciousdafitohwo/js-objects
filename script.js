console.log("objects!");
const person = {
    name: "Bob",
    age: 30,
    favouriteColour: "red",
  };
  
  console.log(person);
  console.table(person);
  console.log(person.favouriteColour);
  
  person.favouriteFood = "pizza";
  
console.log(person.favouriteFood);

const car = {
    make: "volkswagen",
    model:"scirocco",
    colour:"white",
};
console.log(car);

//Create a string detailing the car's make, model, and colour for a website advert and log it to the console.

console.log("Get the deal of the day with this brilliant" , car.make, car.model,  "in", car.colour,  "for only £20");


const book = {
    title:"Code101",
    author:"Tiffany Calver",
    numberOfPages:121
}

console.log(book);