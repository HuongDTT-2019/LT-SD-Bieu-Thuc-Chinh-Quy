// Bài 1: Kiểm tra chuỗi đưa vào có đúng dạng dd/mm/yyyy dd-mm-yyyy
function validateDayMonthYear(str) {
    regexp=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (regexp.test(str)){
        return true;
    }
    return false;
}
console.log(validateDayMonthYear("01/09/2000"));
console.log(validateDayMonthYear("01-09-2000"));
// Bài 2: Đếm số từ trong một chuỗi
function wordCount(str) {
    return str.split(" ").length;
}
console.log(wordCount("hom nay la thu hai"));
// Bài 3: Đếm số nguyên âm/phụ âm trong một chuỗi
function vowelCount(str) {
    let vowel = str.match(/[aeiou]/gi);
    return vowel === null ? 0 : vowel.length;
}
console.log(vowelCount(""));
function consonantCount(str) {
    let consonant = str.match(/[^aeiou\s]/gi);
    return consonant === null ? 0 : consonant.length;
}
console.log(consonantCount("phu am"));
// Bài 4: Kiểm tra mã số bảo mật hợp lệ
//lowercase,uppercase,number,Minimum,8 characters,one special character
function checkPassword(str) {
    regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (regexp.test(str)){
        return true;
    }
    return false;
}
console.log(checkPassword("Abc12345"));
console.log(checkPassword("Abc123"));
console.log(checkPassword("Abc@12345"));