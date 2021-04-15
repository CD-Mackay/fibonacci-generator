import { useEffect, useState} from 'react';
import _ from 'lodash';
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
      setState(data.data);
    })
    .catch(err => console.log(err));
  }, []);

  function saveSequence(num1, num2, num3) {
    const sequence = {
      num_one: num1,
      num_two: num2,
      num_three: num3
    };

    state.forEach(element => {
      if (_.isEqual(sequence, element)) {
        console.log('sequence exists');
      }
    })

    return axios({
      method: 'post',
      url: '/sequences',
      data:  sequence 
    })
    .catch(err => console.log(err));
  };

  return {
    saveSequence,
    state
  }
}

export default useStoredData;