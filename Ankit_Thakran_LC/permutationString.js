const permutationString = (s, start) => {

    if (!s[start]) {
        console.log(s);
        return "";
    }

    for (let i = start; i < s.length; i++) {
        let str = s.split("");
        // swap
        let temp = str[start]
        str[start] =str[i];
        str[i] = temp;
        str = str.join("")

        // console.log(str);

        permutationString(str, start + 1)
    }
}

permutationString("ABC", 0)

