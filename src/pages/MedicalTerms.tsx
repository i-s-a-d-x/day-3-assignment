import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';

const medicalTerms = [
  { id: 1, term: 'Hypertension', description: 'High blood pressure' },
  { id: 2, term: 'Diabetes', description: 'Too much sugar in the blood' },
  { id: 3, term: 'Asthma', description: 'Airways narrow and swell' },
  { id: 4, term: 'Arthritis', description: 'Inflammation of joints' },
  { id: 5, term: 'Cardiomyopathy', description: 'Disease of the heart muscle' },
  { id: 6, term: 'Epilepsy', description: 'Abnormal brain activity' },
  { id: 7, term: 'Gastritis', description: 'Inflammation of the stomach lining' },
  { id: 8, term: 'Hepatitis', description: 'Inflammation of the liver' },
  { id: 9, term: 'Influenza', description: 'Viral infection of the respiratory system' },
  { id: 10, term: 'Migraine', description: 'Headache with nausea and sensitivity' }
];

const MedicalTerms: React.FC = () => {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    setTerms(medicalTerms.slice(0, 10));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Medical Terms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {terms.map(term => (
            <IonItem key={term.id}>
              <IonLabel>
                <h2>{term.term}</h2>
                <p>{term.description}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default MedicalTerms;
