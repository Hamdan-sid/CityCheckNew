function check(){
    let citiesName = ["Karachi" , "Lahore", "Islamabad", "Pindi", "Hydrabad", "Peshawar"] ;

    let userInput = document.getElementById("userCity").value ;

    let matchName = "no" ;

    for( i=0 ; i < citiesName.length ; i++){
        if(userInput.toUpperCase()== citiesName[i].toUpperCase()){
            matchName = "yes"
            break;
        }
    }
        if(matchName=="yes"){
            document.getElementById("printCity").innerHTML = "City Matched" ; 

        }

        else{
            document.getElementById("printCity").innerHTML = "City Not Matched" ; 
            
        }
   
}