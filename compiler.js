function add(n1,n2){
    return n1+n2;
}

function sub(n1,n2){
    return n1-n2;
}

function mul(n1,n2){
    return n1*n2;
}

function div(n1,n2){
    return n1/n2;
}

function mod(n1,n2){
    console.log("This operation has not been implemented yet");  
}



function checkNaNNullUd(num){
    if (Number.isNaN(num) || (num===null) || (num===undefined)) {
        return true;
    }
    else{
        return false;
    }
}

var string = "! fn > 3 3 *** [ = 3 *** 3 . ] ";

function def(string) {
    var arr= string.split(" ");
    var oparr=["*","**","***","****","*****"];
    var fparameters=[];
    var nf;
    
    var x=0;
    for (x in arr){
        if (arr[x] == '!'){            
            nf=arr[x+1];
            x=parseInt(x)+3;
            while (arr[x]!="[" ){
                fparameters.push(arr[x]);
                x+=1;
            } 
            x+=1;
            break;            
        }        
    }
    if (checkNaNNullUd(parseInt(fparameters[0])) || checkNaNNullUd(parseInt(fparameters[1]))){
        console.log("Give two valid numbers");
        return;
    }
    
    if ((arr[x]=="=") && (oparr.includes(arr[x+2]))){
        if (arr[x+2]==="*"){
            return add(parseInt(fparameters[0]),parseInt(fparameters[1]));
        }
        else if (arr[x+2]==="**"){
            return sub(parseInt(fparameters[0]),parseInt(fparameters[1]));
        }
        else if (arr[x+2]==="***"){
            return mul(parseInt(fparameters[0]),parseInt(fparameters[1]));
        }
        else if (arr[x+2]==="****"){
            return div(parseInt(fparameters[0]),parseInt(fparameters[1]));
        }
        else if (arr[x+2]==="*****"){
            return mod(parseInt(fparameters[0]),parseInt(fparameters[1]));
        }
    }    
    else{
        console.log("Please enter a valid operation. Valid operations are add | sub | mul | div");
        return;
    }
        
        
    
}
result=def(string);
console.log(result);
