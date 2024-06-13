const subsequencesString = (s, res, which) => {

    // console.log(s, res);
    if (!s) {
        console.log(res, which);
        return;
    }

    // exclude
    subsequencesString(s.slice(1), res, "exc");

    // include
    subsequencesString(s.slice(1), res + s[0], "inc")


}

subsequencesString("ABC", "", "start");