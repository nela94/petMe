import { Client } from "@petfinder/petfinder-js";

const initialState = {
  dogs = []
  cats = []
}

const client = new Client({apiKey: "RqPmGmPGHQWIiCVG5gzphrFaw1QomsafGhyq22Q5yOz19zejel", secret: "sShiuXCl1mlIFd4p4Fq5TCwkCzf6ACDDidNipna4"});

client.animal.search()
    .then(function (response) {
      response.data.animals.map(animal => {
        if(animal.type === "Dog"){
          return console.log("this is a dog", animal)
        }
        else if (animal.type === "Cat"){
          return console.log("this is a cat", animal)
        }
      })
    })
    .catch(function (error) {
        // Handle the error
    });
