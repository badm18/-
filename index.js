window.onload=function(){


    function palindrome(str) {
        
      let tt=str;
      str=tt.replace(/[\W_]/g,'');
      tt=str.split('').reverse().join('');
        
        tt=tt.toLowerCase();
       str= str.toLowerCase();

    return str==tt





      }
      
      
      
      console.log(palindrome("A man, a plan, a canal. Panama"));
      



}