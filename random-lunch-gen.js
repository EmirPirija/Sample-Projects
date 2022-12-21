function whosPaying(names) {

    var names = ["Emir", "Amer", "Azra", "Enes"];

    var numberOfPeople = names.length;
    
    var randomPay = names[Math.floor(Math.random() * numberOfPeople)];
    
    return randomPay + " is going to buy lunch today!";
      
}

whosPaying(names);