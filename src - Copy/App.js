import './App.css';
import { useTranslation } from 'react-i18next';
import Language from './language/Language';



function App() {


  const { t } = useTranslation();


  return (
    <div className="App">
      <Language />
      <h1>{t("greeting")}</h1>
    </div>
  );
}


export default App;
