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

  // Helper for saveSequence. Prevents duplicate sequences
  function sequenceExists(obj) {
    for (const element in state) {
      let object = state[element]
      delete object.id;
      if (_.isEqual(obj, object)) {
        console.log('sequence exists');
        return true;
      }
    }; 
    console.log('sequence does not exist');
    return false;
  }


  function saveSequence(num1, num2, num3) {
    const sequence = {
      num_one: num1,
      num_two: num2,
      num_three: num3
    };

    if (!sequenceExists(sequence)) {
    return axios({
      method: 'post',
      url: '/sequences',
      data:  sequence 
    })
    .catch(err => console.log(err));
  } else {
    console.log('save failed');
  }
  };

  function deleteSequence(id) {

    return axios({
      method: 'delete',
      url: `/sequences/${id}`
    })
  }

  return {
    saveSequence,
    deleteSequence,
    state
  }
}

export default useStoredData;