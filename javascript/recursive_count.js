function recursiveCount(num = 0) {
  if (num<10) {
    console.log(num);
    recursiveCount(num+1);
  }
  return;
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

/**
 * 1. paraphrase
 * 
 * Convert given code into recursive method/function.
 * 
 * 2. tests
 * 
 * Simply must spit out 0-9.
 * 
 * 3. pseudocode
 * 
 * function param = num. simply call the function with incremented num.
 * function has terminating condition.
 * 
 * 4. code (above)
 * 5. refactor (above)
 * 6. optimize
 * 
 */
