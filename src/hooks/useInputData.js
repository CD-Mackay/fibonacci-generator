const useInputData = () => {

  function generateFibonacci(num1, num2) {
    let arr = [num1, num2];

    for (let i = 0; i < 10; i++) {
      let newNum = Number(arr[arr.length - 1]) + Number(arr[arr.length - 2]);
      arr.push(newNum);
    } return arr;
  } 




  return { generateFibonacci }
}

export default useInputData;


