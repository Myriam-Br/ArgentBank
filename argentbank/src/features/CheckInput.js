  // Email validation
  export  function validateEmail(value, regex) {
    if(value && regex) {
      return value
    }else{
      return 'undefined'
    }
  }

export function error(value, input) {
  if(value === 'undefined') {
    switch(input){
      case 'email' : 
      return 'error email'
      case 'password' : 
      return 'wrong password'
      default:
        console.log('else');
  }
  } 
}

/*
export function validateSyntax(value, regex,input, defaultValue){
  if(value && regex) {
    return value
  }else{
    return defaultValue
  }

}*/
