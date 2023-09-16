import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import PanelSimple from '../components/Objetos3d/panelSinmple';
import './Home.css';
import {Escena} from '../components/Objetos3d/Escena';

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
          <Escena/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
