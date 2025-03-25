import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';

const Posts: React.FC = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Any?amount=10&blacklistFlags=sexist,explicit')
      .then(response => response.json())
      .then(data => setJokes(data.jokes))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Jokes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {jokes.map((joke, index) => (
            <IonItem key={index}>
              <IonLabel>
                <h2>{joke.setup || joke.joke}</h2>
                {joke.delivery && <p>{joke.delivery}</p>}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Posts;
