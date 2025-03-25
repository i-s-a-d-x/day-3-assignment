import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Posts from './Posts';
import './Home.css';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <IonButton onClick={() => setCount(count + 1)}>Increment</IonButton>
      <IonButton onClick={() => setCount(count - 1)}>Decrement</IonButton>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <div style={{ padding: '16px' }}>
          <Counter />
          <Posts />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;