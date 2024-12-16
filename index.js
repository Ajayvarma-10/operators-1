
// VOTE ELIGIBILITY

var a=prompt("enter age here")
if(a>=18){
    console.log(a ,"is Eligible for voting");
    
}else{
    console.log(a ,"is not Eligible for voting");
    
}

// output: age = 21 => "is eligible for voting"



// MARRIAGE ELIGIBILITY FOR MELE AND FEMALE 


var gender=prompt("enter gender here");
var age=prompt("enter age here");
if(gender=='male'){
    if(age>=21){
        console.log("eligible for marriage")
    }
    else{
        console.log("not eligible for marriage")
   }
}
if(gender=='female'){
    if(age>=18){
        console.log("eligible for marriage")
        
    }
    else{
        console.log(" not eligible for marriage")
        
    }
}


// output:> gender: male  age:22  => "Eligible for marriage"


// DRIVING LICENCE ELIGIBILITY

var a=prompt("enter age here")
if(a>=18){
    console.log(a ,"is Eligible for Driving");
    
}else{
    console.log(a ,"is not Eligible for Driving");
    
}

// output:>  age= 16 ==> "17 is not Eligible for Driving"



// Exam Eligibility

var a=prompt("enter Attendence Percentage here")
if(a<0||a>=100){
    console.log(a ,"Attendance percentage must be between 0 and 100");
    
}
else{
if(a>=75){
        console.log(a,"is Eligible for Exam");  
    }
    else{
    console.log(a ,"is not Eligible for Exam");
    
}
}

// output:>  Attendence: 90 ==> "Eligible for Exam"


