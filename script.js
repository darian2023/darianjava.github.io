function main(){

    var counter;

    var end;

    var amount;

    amount = prompt("hoeveel nummers wil je?")

    var numbers = Array(amount);

    var tempend;

    tempend = "nee";

    let totalcounter;

    totalcounter = true;

    while (tempend == "nee") {

     let var_input;
    
     var_input = window.prompt('welk nummer wil je zoeken');
    
     end = false;
    
     for (counter = 0; counter <= 49; counter++) {
    
      if (totalcounter == false) {
    
      } else {
    
       numbers[counter] = Math.floor(Math.random() * 100);
    
      }
    
      if (var_input == numbers[counter]) {
    
       end = true;
    
       window.alert("het nummer " + var_input + " is in de lijst op plaats " + counter);
    
      }
    
     }
    
     if (end == true) {
    
     } else {
    
      window.alert("het nummer zit niet in de lijst");
    
     }
    
     totalcounter = false;
    
     tempend = window.prompt('wil je stoppen');
    
    }
    window.alert("bedankt voor het gebruiken");
    }

function second() {
    var size;
        
    size = window.prompt('hoeveel getallen wilt u?');
    var numbers = Array(size);
    var counter;
    var first;
    var help;
        
    for (counter = 0; counter <= size - 1; counter++) {
            numbers[counter] = Math.floor(Math.random() * 100);
    }
    counter = 0;
    var stop;
        
    stop = 0;
    while (stop < size - 1) {
        stop = 0;
        for (counter = 0; counter <= size - 1; counter++) {
            if (counter == size - 1) {
            } else {
                if (numbers[counter] > numbers[counter + 1]) {
                    help = numbers[counter + 1];
                    numbers[counter + 1] = numbers[counter];
                    numbers[counter] = help;
                } else {
                    stop = stop + 1;
                }
            }
        }
    }
    counter = 0;
    for (counter = 0; counter <= size - 1; counter++) {
        window.alert(numbers[counter]);
    }
}
    