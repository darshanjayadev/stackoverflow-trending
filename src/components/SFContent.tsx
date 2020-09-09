import React, { useState } from 'react';
import './SFContent.css';

const SFContent = () => {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const fetchData = async () => {
    const apiURL = 'https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&site=stackoverflow';

    const response = await fetch(`${apiURL}&page=${pageCount}`).then(res => res.json());
    setPageCount(pageCount + 1);
    setData(data.concat(response.items));
    // console.log(data);
}

  return (
  <section>
    <button onClick={fetchData}>Fetch Data</button>
    <div>Total questions loaded = {data.length}</div>
  </section>
);
}

export default SFContent;
