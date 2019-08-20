console.log(Number("-40") + Infinity / 0);
class Input {
    
    static get _digit(){
        return this.digit;
    }
    static set _digit(val){
        this._digit += val;
    }

}
class ArithmeticOperations{
    static add(a,b){
        return a + b;
    }
    static subtract(a,b){
        return a-b;
    }
    static multiply(a,b){
        return a*b;
    }
    static divide(a,b){
        return a/b;
    }
    static equals(){
        return "ans";
    }
}
class ConvertString{
    static values(){
        let val = Input.digit, arr =[], str="";
        if(val.length != 0){
            for(let i=0; i<val.length; i++){
                // if(i== 0 && val[0] ==)
                if(val[i] =="-" && (val[i-1] == "/" || val[i-1] =="*") && val.length >= 3){
                    // arr.pop();
                    if(val[i+1] == undefined){
                        str=val[i];
                        arr.push(str);
                        str ="";
                    }else if (!("+-/*".includes(val[i+1]))){
                        // arr.pop();
                        str = val[i];
                        str += val[i+1];
                        arr.push(str);
                        str="";
                        i=i+2;
                    }
                    
                }
                else if("+/-*".includes(val[i]) && str !=""){
                    arr.push(str);
                    arr.push(val[i]);
                    str ="";
                }
                else{
                    if(str==""){
                        if("+/-*".includes(val[i])){
                            arr.push(val[i]);
                        }
                        else{
                            str += val[i];
                        }
                    }
                    else{
                        str += val[i];
                    }
                }
                
            }
            if(str !=""){
                arr.push(str);
            }
            return arr;   
        }
        return "empty";
        
    }
    static evaluate(){
        var arr;
        if(this.values != "empty") {
            arr = this.values();
        }
        let sum =0, val1=0, val2=0;
        if(arr.length >=3 ){
            
            for(let i=0; i<arr.length; i+2){
                
                if(i==0 && arr[i] =="-"){
                    val1 =-Math.abs(Number(arr[1]));
                    sum = val1;
                    i++;
                    
                }else{
                    if(i==0){
                        sum = Number(arr[0]);
                    }
                    else{
                        val1 = Number(arr[i])
                        if(!isNaN(val1)){
                            if(arr[i-1]=="+"){
                                val2 = ArithmeticOperations.add(sum,val1);                          
                                sum += val2;
                            }
                            else if(arr[i-1]=="-"){
                                val2 = ArithmeticOperations.subtract(sum,val1);                           
                                sum += val2;
                            }
                            else if(arr[i-1]=="*"){
                                val2 = ArithmeticOperations.multiply(sum,val1);                            
                                sum += val2;
                            }
                            else{
                                val2 = ArithmeticOperations.divide(sum,val1);                            
                                sum += val2;
                            }
                        }
                    }
                }
            }
            return sum;            
        }   
    }
}
document.querySelector('#position3').addEventListener('click', e => {
    let mul=document.querySelector("#mul"),
        div=document.querySelector("#div"),
        min=document.querySelector("#min"),
        plu=document.querySelector("#plu"),
        equ=document.querySelector("#equ"),
        can=document.querySelector("#can");
    let sym="";
    if(e.target.tagName == "DIV"){
        
        if(e.target.contains(mul) || e.target.contains(div) || e.target.contains(min) || e.target.contains(plu)|| e.target.contains(equ) || e.target.contains(can)){
            // sym= e.target.id;
        }
        else{
            sym= e.target.id;
        }
    } else{
        sym = e.target.parentElement.id;
        
    }
    let symVal ="";
    switch(sym){
        case "one":
            symVal ="1";
            break;
        case "two":
            symVal ="2";
            break;
        case "three":
            symVal ="3";
            break;
        case "four":
            symVal ="4";
            break;
        case "five":
            symVal ="5";
            break;
        case "six":
            symVal ="6";
            break;
        case "seven":
            symVal ="7";
            break; 
        case "eight":
            symVal ="8";
            break;
        case "nine":
            symVal ="9";
            break;
        case "zero":
            symVal ="0";
            break; 
        case "plus":
            symVal ="+";
            break; 
        case "minus":
            symVal ="-";
            break;
        case "multiply":
            symVal ="*";
            break;
        case "divide":
            symVal="/";
            break;
        case "point":
            symVal =".";
            break;
        case "equals":
            symVal ="=";
            break; 
        case "cancel":
        case "clear":
            symVal =sym;
            break;   
    }
    // console.log(symVal);
    if(Input.digit == undefined){
        Input.digit = "";
    }
    
    if(symVal == "clear"){
        Input.digit = "";
    } else if(symVal == "cancel"){
        let val = Input.digit;
        Input.digit = val.slice(0, -1);
        console.log(Input.digit);
        console.log(ConvertString.values());
        // console.table(ConvertString.evaluate());

    } else{
        let sym = "+/*";
        if(Input.digit == ""){
            if(symVal == "."){
                Input.digit = "0."
                console.log(Input.digit);
                console.log(ConvertString.values());
                console.log(ConvertString.evaluate());

            }
            else if(symVal == "="){
                Input.digit = "0";
                console.log(Input.digit);
                console.log(ConvertString.values());
                console.log(ConvertString.evaluate());

            }
            else if(!sym.includes(symVal)){
                Input.digit = symVal;
                console.log(Input.digit);
                console.log(ConvertString.values());
                console.log(ConvertString.evaluate());

            }else if(sym.includes(symVal)){
                Input.digit ="0";
                Input.digit += symVal;
                console.log(Input.digit);
                console.log(ConvertString.values());
                console.log(ConvertString.evaluate());

            }

        } else {
            let str = Input.digit,
                characters = sym +"-",
                lastChar = str[str.length-1];

            if(characters.includes(symVal)){
                if ((lastChar == "*" || lastChar == "/") && symVal =="-"){
                    Input.digit += symVal;
                    console.log(Input.digit);
                    console.log(ConvertString.values());
                    console.log(ConvertString.evaluate());

                }                    
                else if (lastChar == "+" || lastChar == "-"|| lastChar == "*" || lastChar == "/"){
                    if((symVal =="+" || symVal =="/"|| symVal =="*") && lastChar =="-" && (str[str.length-2] =="/" || str[str.length-2] =="*")){
                        str = str.slice(0,-2);
                        str += symVal;
                        Input.digit = str;
                        console.log(Input.digit);
                        console.log(ConvertString.values());
                        console.log(ConvertString.evaluate());

                    }else{
                        if(str =="-" && (symVal== "+" || symVal== "/" || symVal== "*")){
                            Input.digit = "0";
                            Input.digit += symVal;
                            console.log(Input.digit);
                            console.log(ConvertString.values());
                            console.log(ConvertString.evaluate());

                        } else {
                            Input.digit = str.replace(/.$/,symVal);
                            console.log(Input.digit);
                            console.log(ConvertString.values());
                            console.log(ConvertString.evaluate());

                        }
                    }
                    
                } 
                else {
                    if(lastChar =="."){
                        Input.digit += "0";
                        Input.digit += symVal;
                        console.log(Input.digit);
                        console.log(ConvertString.values());
                        console.log(ConvertString.evaluate());

                    }
                    
                    else {
                        Input.digit += symVal;
                        console.log(Input.digit);
                        console.log(ConvertString.values());
                        console.log(ConvertString.evaluate());

                    }
                    
                }

            }
            else if (symVal == "."){
                let subs =""
                for(let i = str.length-1; i>=0; i--){
                    subs += str[i];
                    if(str[i] == "." || characters.includes(str[i])){
                        break;
                    }
                }
                if(subs.length = 1 && characters.includes(subs)){
                    Input.digit += "0.";
                    console.log(Input.digit);
                    console.log(ConvertString.values());
                    console.log(ConvertString.evaluate());
                    
                }
                else if(!subs.includes('.')){
                    Input.digit += symVal;
                    console.log(Input.digit);
                    console.log(ConvertString.values());
                    console.log(ConvertString.evaluate());

                }
            }
            else if(symVal == "="){
                console.log(Input.digit);
                console.log(ConvertString.values());
                console.log(ConvertString.evaluate());

            }
            else{
                if(str=="0"){
                    Input.digit = symVal;
                    console.log(Input.digit);
                    console.log(ConvertString.values());
                    console.log(ConvertString.evaluate());

                }
                else if(lastChar =="0" && (symVal != "." || !(characters.includes(symVal)) ) && (characters.includes(str[str.length-2]))){
                    Input.digit = str.replace(/.$/,symVal);
                    console.log(Input.digit);
                    console.log(ConvertString.values());
                    console.log(ConvertString.evaluate());

                }else{
                    Input.digit += symVal;
                    console.log(Input.digit);
                    console.log(ConvertString.values());
                    console.log(ConvertString.evaluate());


                }
            }
        }
        
    }
    e.preventDefault();
});