const useInputData = () => {

  function generateFibonacci(num1, num2) {
    let arr = [num1, num2];

    for (let i = 0; i < 10; i++) {
      let newNum = arr[arr.length] + arr[arr.length - 1];
      arr.push(newNum);
    } return arr;
  } 




  return { generateFibonacci }
}

export default useInputData;


