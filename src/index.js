module.exports = function check(str, bracketsConfig) {
  const open = bracketsConfig.reduce((acc, el) => [...acc, el[0]] ,[]);
  const close = bracketsConfig.reduce((acc, el) => [...acc, el[1]] ,[]);
  const stack = [];

  for (const char of str) {
      const op = open.indexOf(char);
      const cl = close.indexOf(char);
      if (op !== -1) {
        if (op === cl) {
          if (stack.length > 0 && stack[stack.length - 1] === cl) {
            stack.pop();
          } else {
            stack.push(op);
          }
        } else {
          stack.push(op);
        }
      } else { 
        if (stack.length > 0) {
          if (cl !== stack.pop()) {
            return false;
          }
        } else {
          return false;
        }
      }
  }
return stack.length === 0;
}
