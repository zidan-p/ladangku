

export function formatMoney(num) {
    var p = num.toFixed(2).split(".");
    return p[0].split("").reverse().reduce(function(acc, num, i, orig) {
        return num + (num != "-" && i && !(i % 3) ? "." : "") + acc;
    }, "") ;
}