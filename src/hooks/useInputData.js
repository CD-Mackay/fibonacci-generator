const useInputData = () => {

  function generateFibonacci(num1, num2, num3) {
    let arr = [Number(num1), Number(num2)];

    for (let i = 0; i < Number(num3); i++) {
      let newNum = Number(arr[arr.length - 1]) + Number(arr[arr.length - 2]);
      arr.push(newNum);
    } return arr;
  } 




  return { generateFibonacci }
}

export default useInputData;


