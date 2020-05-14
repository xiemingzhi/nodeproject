function reverse(x) {
    if (x >= 2147483647) {
        return 0
    }
    if (x <= -2147483648) {
        return 0
    }
    if (x == 0) {
        return 0
    }
    strinput = '' + x 
    revstr = ''
    if (strinput[0] == '-') {
        revstr = '-'
        strinput = strinput.substring(1, strinput.length)
    } else {
        revstr = ''
    }
    strinput = strinput.replace(/[0]*$/, '')
    for (i = strinput.length-1; i >= 0; i--) {
        revstr = revstr + strinput[i]
    }
    if (Number.parseInt(revstr) >= 2147483647) {
        return 0
    }
    if (Number.parseInt(revstr) <= -2147483648) {
        return 0
    }
    return Number.parseInt(revstr)
}

input = 123
input = 2147483647
input = -2147483648
input = -100
input = -1001
console.log(reverse(input))