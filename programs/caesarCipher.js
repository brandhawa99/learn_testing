


const caesarChiper = (() =>{

    const encrypt = (str) =>{
        let encrypted = ""; 

        for(let i =0 ; i<str.length; i++){
            encrypted += change(str.charAt(i));
        }
        return encrypted


    }; 

    const change  = (char) =>{
        let code = char.charCodeAt(0); 
        if(code >= 65 && code<=90 || code >=97 && code <= 122){
            return String.fromCharCode(code + 1 %26); 
        }
        else{
            return String.fromCharCode(code); 
        }
    }
    return{
        encrypt
    } 
        



})();

module.exports = caesarChiper;


// String.fromCharCode('');
// str.charCodeAt(int)

//ASCII values of things to update
//65 - 90  = A - Z
//97 - 122 = a - z 
// e(x) = (x+k) % 26