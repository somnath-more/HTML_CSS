//Write given string is palindome or not

//"aba"
function palindrome(str){
   //
   const len=str.length
   
   for(let i=0;i<len/2;i++){
        if(str[i] !==str[len-1-i]){
            console.log('it is not prime number');
            
        }


   }
   console.log('it is paindrome');
}
console.log(palindrome('aba'));