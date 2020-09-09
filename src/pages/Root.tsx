import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SFContent from '../components/SFContent';
import './Root.css';

const Root: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>StudyMonk FullStack Assignment</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">StudyMonk FullStack Assignment</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SFContent />
      </IonContent>
    </IonPage>
  );
};

export default Root;
