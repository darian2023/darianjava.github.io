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
    window.alert(numbers);

}
    
function third() {
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
    var upordown;
    
    upordown = window.prompt('wil je een stijgende of dalende lijst?');
    var searmch;
    var found;
    
    found = false;
    if (upordown == "stijgende") {
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
    } else {
        while (stop < size - 1) {
            stop = 0;
            for (counter = 0; counter <= size - 1; counter++) {
                if (counter == size - 1) {
                } else {
                    if (numbers[counter] < numbers[counter + 1]) {
                        help = numbers[counter + 1];
                        numbers[counter + 1] = numbers[counter];
                        numbers[counter] = help;
                    } else {
                        stop = stop + 1;
                    }
                }
            }
        }
    }
    searmch = window.prompt('welk getal wilt u weten');
    counter = 0;
    var start;
    var mid;
    var end;
    
    start = 0;
    end = size - 1;
    mid = start + end;
    mid = mid / 2;
    var guess;
    var counter2;
    
    if (upordown == "stijgende") {
        while (found == false) {
            counter2 = counter;
            guess = (end - start) / 2 + start;
            counter = guess;
            if (numbers[counter] == searmch) {
                window.alert("uw nummer: " + searmch + " is op de plek: " + (counter + 1));
                found = true;
            } else {
                if (numbers[counter] > searmch) {
                    end = guess;
                } else {
                    start = guess;
                }
            }
            if (counter == counter2) {
                found = true;
                window.alert("uw nummer zit niet in de lijst");
            }
        }
    } else {
        while (found == false) {
            counter2 = counter;
            guess = (end - start) / 2 + start;
            counter = guess;
            if (numbers[counter] == searmch) {
                window.alert("uw nummer: " + searmch + " is op de plek: " + (counter + 1));
                found = true;
            } else {
                if (numbers[counter] > searmch) {
                    start = guess;
                } else {
                    end = guess;
                }
            }
            if (counter == counter2) {
                found = true;
                window.alert("uw nummer zit niet in de lijst");
            }
        }
    }
}
