import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import {EscenaFondo} from '../components/3D/Escena/EscenaFondo';
import {EscenaFrente} from '../components/3D/Escena/EscenaFrente';
import { EscenaCompleta } from '../components/3D/Escena/EscenaCompleta';
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
        <div id="screen" style={{"alignItems":"center"}}>
          <EscenaCompleta/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
