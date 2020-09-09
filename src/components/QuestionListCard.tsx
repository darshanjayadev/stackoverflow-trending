import React, {useState} from 'react'
import { IonItem, IonLabel, IonAvatar, IonModal, IonButton, IonContent, IonBadge, IonIcon} from '@ionic/react';
import './QuestionListCard.css'

const QuestionListCard = (props : any) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonItem button>
      <IonAvatar>
        <img src={props.data.owner.profile_image} alt='profile'></img>
      </IonAvatar>
      
      <IonModal isOpen={showModal} cssClass='my-custom-class'>
        <IonContent>
          <IonItem>
            <IonAvatar>
            <img src={props.data.owner.profile_image} alt='profile'></img>
            </IonAvatar>
            <IonLabel className="ion-text-wrap">{props.data['title']}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Total answers</IonLabel>
            <IonBadge slot="end">{props.data.answer_count}</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>View Count</IonLabel>
            <IonBadge slot="end">{props.data.view_count}</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Score</IonLabel>
            <IonBadge slot="end">{props.data.score}</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>
              <a href={props.data.link} target="_blank" rel="noopener noreferrer">Open Question on Stack Overflow</a>
            </IonLabel>
            <IonIcon name="logo-stackoverflow"></IonIcon>
          </IonItem>
        </IonContent>
        <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
      </IonModal>
        <IonLabel className="ion-text-wrap" onClick={() => setShowModal(true)}>{props.data['title']}</IonLabel>
    </IonItem>
  );
}

export default QuestionListCard;
