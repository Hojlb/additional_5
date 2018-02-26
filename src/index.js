module.exports = function check(str, bracketsConfig) {
    let arrBracket = str.split('');
    let compArr = [];
    let brLength = bracketsConfig.length;

    for( let k = 0; k < brLength; k++ ) {
        compArr = bracketsConfig [k];

        for (let i = 0; i < arrBracket.length; i++) {
            if (arrBracket[i] === compArr[0]) {
                if (arrBracket[i+1] === compArr[1]) {
                    arrBracket.splice(i, 2);
                    i = -1;
                    k = -1;
                }
            }
        }
    }

    if( arrBracket.length > 0 ) return false;
    if( arrBracket.length === 0 ) return true;

};
