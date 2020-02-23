//5) Write a code that takes a number and returns a list of its digits.
//So for 2342 it should return [2,3,4,2].A243b -> [2,4,3].

const changeStrToNum = function(arr) {
  return arr
    .map(elem => {
      if (parseInt(elem)) {
        return parseInt(elem);
      }
    })
    .filter(item => item);
};

const converter = function(param) {
  if (typeof param === "number") {
    const arrOfStrings = param.toString().split("");
    console.log(changeStrToNum(arrOfStrings));
  } else {
    console.log(changeStrToNum(param.split("")));
  }
};

converter("xx23ogui427");
converter(4121241);
