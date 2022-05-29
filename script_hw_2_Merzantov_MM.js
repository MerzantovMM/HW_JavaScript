const string = "12345aF@"

const minSize = 5;
const maxSize = 64;


/*
 1. Скрипт должен на вход принимать строку.
 2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
 3. Минимум 5 символов в строке
 4. Максимум 64 символа в строке
 5. В строке должны быть буквы
 6. Должна быть хотя бы одна буква в верхнем регистре
 7. Должна быть хотя бы одна цифра
 8. Должна быть хотя бы одна @
 9. Строка не должна быть пустой
 */


function validationStr(str){

    const checkEmpty = validationStrcheckEmpty(str);
    const checkMinSize = validationStrcheckMinsize(str);
    const checkMaxsize = validationStrcheckMazSize(str);
    const checkLetter = validationStrcheckLetter(str);
    const checkUpperLetter = validationStrUpperLetter(str);
    const checkNumber = validationStrcheckNumber(str);
    const checkSymbol = validationStrcheckSymbol(str);

    if(!checkEmpty){
        console.log("Строка пуста");
        return false;
    }

    if(!checkMinSize){
        console.log(`Строка содержит менее ${minSize} символов`);
        return false;
    }

    if(!checkMaxsize){
        console.log(`Строка содержит более ${maxSize} символов`);
        return false;
    }

    if(!checkLetter){
        console.log("Строка не содержит букв");
        return false;

    }

    if(!checkUpperLetter){
        console.log("Строка не содержит букв  в вехнем регистре");
        return false;

    }

    if(!checkNumber){
        console.log("Строка не содержит цифр ");
        return false;
    }

    if(!checkSymbol){
        console.log(`Строка не содержит спецсимвола @`)
        return false;
    }


    return true && "Все условия выполнены все окей !!!!";

}

function validationStrcheckEmpty(str){
    return str && str.length > 0;
} 

function validationStrcheckMinsize(str){
    return str.length >= minSize;
}

function validationStrcheckMazSize(str){
    return str.length <= maxSize;
}

function validationStrcheckLetter(str){
    const regExp = /[а-я]|[a-z]/i;
    return str.match(regExp) !== null ;
}

function validationStrUpperLetter(str){
    const regExp = /[А-Я]|[A-Z]/;
    return str.match(regExp) !== null ;
}

function validationStrcheckNumber(str){
    const regExp = /[0-9]/
    return str.match(regExp) !== null;

}

function validationStrcheckSymbol(str){
    return str.indexOf('@') !== -1;

}



const Valid = validationStr(string);

console.log(Valid)

