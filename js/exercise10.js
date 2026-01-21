// Create a business name genrator
// Adjective : Crazy, Amazing, Fire 
// Name : Engine, Food ,Garment
// Another Word : Bros, Limited, Hub

// Create a business name generator

// The Generator function randomly selects one of three provided words
function Generator(x, y, z) {
    // Generate a random number: 0, 1, or 2
    let num = Math.floor(Math.random() * 3);
    // Return the word based on the random number
    if (num == 0)
        return x;      // Return the first word
    else if (num == 1)
        return y;      // Return the second word
    else
        return z;      // Return the third word
}

// Generate and print a random business name by combining words from three categories
console.log(
    "Generated Name is " +
    Generator("Crazy", "Amazing", "Fire") + " " +      // Adjective
    Generator("Engine", "Food", "Garment") + " " +     // Name
    Generator("Bros", "Limited", "Hub")         
       );       //