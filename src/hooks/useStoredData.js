import { useEffect, useState} from 'react';
import axios from 'axios';


axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const useStoredData = () => {

  const [state, setState] = useState();
  useEffect(() => {
    axios({
      method: 'get',
      url: '/sequences',
    })
    .then(data => {
      console.log(data);
      setState(data);
      console.log(state);
    })
    .catch(err => console.log(err));
  }, []);

  function saveSequence(num1, num2, num3) {
    const sequence = {
      num_one: num1,
      num_two: num2,
      num_three: num3
    };

    console.log(sequence);

    return axios({
      method: 'post',
      url: '/sequences',
      data: JSON.stringify({ sequence }),
    })
    .catch(err => console.log(err));
  };

  return {
    saveSequence,
    state
  }
}

export default useStoredData;