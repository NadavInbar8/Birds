import axios from 'axios';
import { storageService } from './async-storage.service';
const BIRDS_URL = 'https://zapari.any.do/birds/20';

async function birdsQuery() {
  const { data } = await axios.get(BIRDS_URL);
  const birdsArr = data.items;
  return birdsArr;
}

export const weatherService = {
  birdsQuery,
};

/*
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { storageService } from './async-storage.service';

export const useBirdsQuery = (query, pageNum) => {
  const [loading, setLoading] = useState(true);
  const [birds, setBirds] = useState([]);
  const BIRDS_URL = 'https://zapari.any.do/birds/20';

  useEffect(() => {
    setLoading(true);
    axios
      .get(BIRDS_URL)
      .then((res) => {
        setBirds((prevBirds) => {
          return [...prevBirds, res.data.items];
        });
        console.log(birds);
      })
      .catch((e) => {
        console.log('error: ', e);
      });
  }, [pageNum]);
  return null;
};

// const birdsQuery = async () => {
//   setLoading(true);
//   const { data } = await axios.get(BIRDS_URL);
//   console.log(data);
//   const birdsArr = data.items;
//   console.log(birdsArr);
//   return birdsArr;
// };

*/
