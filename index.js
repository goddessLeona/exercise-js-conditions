function question(){
    let name = prompt("What is your name ?")
    console.log("Happy to see you " + name)
    }

function question2() {
    let word = prompt ("Write in one words")
    let word2 = prompt ("write in second word")
    console.log(word + word2)
    const alfa = [word, word2]
    console.log(alfa)
    alfa.sort();
    console.log(alfa)

}

function question3(){
    let age =prompt ("What is your age?")
    console.log(age)

    if (age > 18){
        console.log("you are over 18 and are an adult")
    }else{
        console.log("you are still under 18 and a minor")
    }
}

function question4(){
    let animal = prompt ("Guess what animal I am thinking off")
    console.log(animal)

    if (animal === "cat"){
        console.log("woow you guests right, I was thinking about a cat!")
    }else{
        console.log("I was not thinking about a "+ animal + ".The animal I was thinking off say mjuaaa")
    }
}

function question5(){
    let color = prompt ("write in your favorite color")

    if (color === "yellow"){
        console.log(color + " is a very nice color.")
    }else if(color==="red"){
        console.log(color + " that is an amazing color.")
    }else if(color==="red"){
        console.log(color + " woow, that is so cool.")
    }else if(color==="green"){
        console.log(color + " that is a forest color")
    }else{
        console.log(color + (" that color I never heard off."))
    }
}

function question6(){
    const test = prompt ("Write in your test result 0-100 points")

    if (test > 49){
        console.log("you have passed the class")
        document.getElementById("great").innerHTML ="You passed the Class!";
    }else{
        console.log("you sadly did not pass the class")
        document.getElementById("great").innerHTML="FAILD CLASS"
    }

}

function question7(){
   const weather = prompt ("How is the waether ? Sunny, Rainy, Windy")

   if(weather==="Sunny"){
    console.log("Great wather for a picknick")
   }else if(weather==="sunny"){
    console.log("Great weater for a picknick!")
   }else if(weather==="Rainy"){
    console.log("Better stay inside and drink hot chokolate and play games")
   }else if(weather==="rainy"){
    console.log("Better stay inside and drink hot chokolate and play games")
   }else if(weather==="Windy"){
    console.log("Time to learn how to wind surf!")
   }else if(weather==="windy"){
    console.log("Time to learn how to wind surf!")
   }else{
    console.log("error try again")
   }
}

function lg(){
    let checkBox = document.getElementById("myCheck");
    let text = document.getElementById("text");

    if(checkBox.checked === true){
        console.log("Nice, I also speak englich")
        document.getElementById("text").innerHTML="English, me too."
    }
}

function lg2(){
    let checkBox2 = document.getElementById("myCheck2");
    let text = document.getElementById("text");

    if(checkBox2.checked === true){
        console.log("My German is not very good")
        document.getElementById("text").innerHTML="My German is not very good."
    }
}

function lg3(){
    let checkBox3 = document.getElementById("myCheck3");
    let text = document.getElementById("text");

    if(checkBox3.checked === true){
        console.log("Swedish, me too")
        document.getElementById("text").innerHTML="Swedish, me too."
    }
}

function question9(){
    const nr5 = prompt ("Write in any nr.")
    console.log(nr5)
    console.log(nr5 % 5)

    if (nr5%5 === 0){
        console.log("This nr is a mudol of 5")
    }else{
        console.log ("this nr is not a mudule of 5")
    }
}

function question10(){
    let yes = "You want to go out tonight?";

    if (confirm(yes)=== true){
        yes = "cool, looking farward to meet";
        console.log("Cool, looking farward to meet")  
    }else{
        yes = "ohh ok, maybe another day";
        console.log("ooh ok, maybe anoter time")
    }
    document.getElementById("out").innerHTML = yes;
}

function question11(){
    let letornr = prompt("Write in a nr or letter")
    console.log(letornr)

}

function question12(arr){
    let wr1 = prompt ("write one word")
    let wr2 = prompt ("write one word")
    let wr3 = prompt ("write one word")

    const wrlist = [wr1, wr2, wr3];
    console.log("First the array of the 3 words: " + wrlist)

    wrlist.sort((a,b) => b.length - a.length);
    console.log("Now in right order, longest word first " + wrlist)
    console.log("This is the longest word: " + wrlist[0])
    document.getElementById("longest").innerHTML = wrlist[0];
}

function question14(){
    const ages = prompt ("Put in your age")
    console.log(ages)

    if (ages < 13){
        console.log("child")
        document.getElementById("older").innerHTML = "Child";
    }else if(ages >= 12 & ages<= 18){
        console.log("Teen")
        document.getElementById("older").innerHTML = "Teen";
    }else if(ages >= 17 & ages<= 65){
        console.log("Adult")
        document.getElementById("older").innerHTML = "Adult";
    }else if(ages >65){
        console.log("Senior")
        document.getElementById("older").innerHTML = "Senior";
    }else{
        console.log("error")
    }
}

function question15(){
    const twoo = confirm ("If you are a human push ok")
    const twooo = confirm ("If you eat bananas push ok")

    if(twoo === true){
        console.log("Cool, so you are a human")
    }else if(twoo != true){
        console.log("ohh shit, you are an ailien ?")
    }

    if (twooo === true){
       console.log("Bananas are great")
    }else if(twooo != true){
        console.log("ohhh that is sad")
    }
}