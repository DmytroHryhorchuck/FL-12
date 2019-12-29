function makeNumber(){
  let num = arguments[0].toString().replace(/\D+/g,"");
  return num
  }

function countNumbers(str) {
    let object = {};
    makeNumber(str).split('').forEach(function (a) {
      if (object[a] !== undefined) {
          ++object[a];
      } else {
        object[a] = 1;
      }
  });
  return object;
}

countNumbers('erer384jj4444666888jfd123');

