function canmelCase(str){
    const words = str.split('');
    return words.map(word => word0.toUppercase() + word.substring(1)).join("")
}