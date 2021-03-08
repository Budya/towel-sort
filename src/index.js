
module.exports = function towelSort(matrix) {
  let result;
  if (matrix === undefined || matrix.length === 0) {
      return [];
  } else {
      for (let i = 0; i < matrix.length; i++) {
          if (i === 0) {
              result = matrix[i];
          } else if (i % 2 !== 0) {
              let reverse = matrix[i].reverse();
              result = result.concat(reverse);
          } else {
              result = result.concat(matrix[i]);
          }
      }
      return result;
  }

}
