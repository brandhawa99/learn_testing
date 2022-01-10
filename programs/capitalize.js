function capitalize(str){
    let string = str; 
    if(string == ""){
        return 
    }

    else {
       let first = string.substr(0,1);
       first = first.toUpperCase();
       string = string.substr(1);
       return first+string;
    }

}

module.exports = capitalize;