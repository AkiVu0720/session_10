 let result = document.querySelector(".calculator__display");
 let input = ""
function number(value){
  result.innerHTML = input+=value
}
function resultAll(){
  if(!input.length==0){
    const resultALl = eval(input);
    result.innerHTML = resultALl
  }else{
    result.innerHTML = "0"
  }

}
function clearData(){
  result.innerHTML = "0";
  input = "";
}