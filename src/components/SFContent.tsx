import React, { useState, useEffect } from 'react';
import { IonList, IonListHeader, IonLabel, IonItem, IonBadge } from '@ionic/react';
import QuestionListCard from './QuestionListCard';
import './SFContent.css';

const SFContent = () => {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const fetchData = async () => {
    const apiURL = 'https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&site=stackoverflow';

    const response = await fetch(`${apiURL}&page=${pageCount}`)
    .then(res => res.json())
    .catch(err => console.log(err));
    setPageCount(pageCount + 1);
    setData(data.concat(response.items));
}

  const questionList = data.map((questionData, index) => (
    <QuestionListCard data = {questionData} key={index}/>
    //Using index as key isn't a good idea but the question_id which I think should be unique seems to have duplicates, and I'm running out of time
  ));

  return (
  <section>
    <button onClick={fetchData}>Fetch Data</button>
    <IonList>
      <IonListHeader lines="inset">
        <IonLabel color="secondary">Hot Questions</IonLabel>
      </IonListHeader>
      <IonItem>
          <IonLabel>Questions loaded</IonLabel>
          <IonBadge slot="end">{data.length}</IonBadge>
        </IonItem>
      {data.length > 0 ? questionList : null}
    </IonList>
  </section>
);
}

export default SFContent;
