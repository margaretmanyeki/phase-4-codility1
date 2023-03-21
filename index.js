function camelCase(str){
    let words = str.split('');
    let camelCased='';
    words.forEach(function(word){
        camelCased +=word.charAt(0).toUppercase()+ word.slice(1);
    });
   return camelCased;
}