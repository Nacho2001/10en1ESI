import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import {EscenaFondo} from '../components/3D/EscenaFondo';
import {EscenaFrente} from '../components/3D/EscenaFrente';
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
        <div id="screen">
          <EscenaFondo/>
          <EscenaFrente/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
