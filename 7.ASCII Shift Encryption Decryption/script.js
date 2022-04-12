function asciiEncrypt(plaintext) {
    return plaintext.split('').map((letter, index) => String.fromCharCode(letter.charCodeAt(0)+index)).join('');
};
    
function asciiDecrypt(ciphertext) {
    return ciphertext.split('').map((letter, index) => String.fromCharCode(letter.charCodeAt(0)-index)).join('');
};