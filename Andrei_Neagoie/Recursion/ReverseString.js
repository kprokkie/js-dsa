const iReverseString = (str) => {
  let reverse = "";
  for (let char of str) {
      reverse = char + reverse;
  }
  return reverse;
}

console.log(iReverseString("yoyo master"));

const rReverseString = (str) => {
  if (!str.length) {
      return "";
  }

  return rReverseString(str.slice(1)) + str[0];
}

console.log(rReverseString("yoyo master"));

const rReverseStringL = (str, len) => {
  if (!len) {
      return "";
  }
  return str[len - 1] + rReverseStringL(str, --len);
}

let str = "yoyo master";
console.log(rReverseStringL(str, str.length));

