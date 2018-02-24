module.exports = function check(str, bracketsConfig) {
    let arrBracket = str.split('');
    let checkFlag = false;
    let count = 0;

    for( let k = 0; k < arrBracket.length; k++ ) {
        if( count < 0 ) return false;
        for (let i = 0; i < bracketsConfig.length; ) {
            if( arrBracket[k] === bracketsConfig[i][0] ){
                count ++;
                break;
            } else if( arrBracket[k] === bracketsConfig[i][1] ){
                count --;
                break;
            } else i++;
        }
    }

    return count === 0;
}
