function rps(){

    let c=0;
    let u=0;
    while(true){
        if(u == 5 || c == 5 )
        break;
        else{
            let arr = ["r","p","s"];
            let randChoice = Math.floor(Math.random()*arr.length);
            let computerChoice = arr[randChoice];
            let userChoice = prompt("Select your warrior(r/p/s)");
            let lowerUserChoice = userChoice.toLowerCase();
        //console.log(lowerUserChoice);
            if(lowerUserChoice == "r" && computerChoice == "p"){
                c++;
                alert(`Computer wins \nScores\nComputer:${c}\nUser:${u}`);
            }
            else if(lowerUserChoice == "p" && computerChoice == "s"){
                c++;
                alert(`Computer wins \nScores\nComputer:${c}\nUser:${u}`);
            }
            else if(lowerUserChoice == "s" && computerChoice == "r"){
                c++;
                alert(`Computer wins \nScores\nComputer:${c}\nUser:${u}`);
            }
            else if(lowerUserChoice == "r" && computerChoice == "s"){
                u++;
                alert(`User wins \nScores\nComputer:${c}\nUser:${u}`);
            }
            else if(lowerUserChoice == "p" && computerChoice == "r"){
                u++;
                alert(`User wins \nScores\nComputer:${c}\nUser:${u}`);
            }
            else if(lowerUserChoice == "s" && computerChoice == "p"){
                u++;
                alert(`User wins \nScores\nComputer:${c}\nUser:${u}`);
            }
            else
                alert(`Draw both selected ${userChoice}`);
        }
        
    }
    alert(`${u<c?"Sorry Computer Wins ":"Congratulations You Won "}The Match!!!!!!!\nFinal Score:\n Computer: ${c}\n User: ${u}`);
}

rps();

//console.log(lowerUserChoice);
//alert(arr[computerChoice]);



