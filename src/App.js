import React, {useState, useEffect} from 'react'
import './App.css';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
import Alert from './Alert';
import requests from "./requests";

function App() {


  const [visible,setVisible] = useState(true);
  return (
    
    <div className="app">
      <Nav />
      <Banner />
      <Row 
      title="NETFLIX Yapımları" 
      fetchUrl={requests.fetchNetflixOrginals}
      isLargeRow
      isNetflix     
      />      
      <Row title="Türkiye'de Bugünün Top Listesi" fetchUrl={requests.fetchTopRated} isTopRow/>
      <Row title="Gündemdekiler" fetchUrl={requests.fetchTrending}/>      
      <Row title="Animasyon" fetchUrl={requests.fetchAnimationMovies}/>
      <Row title="Aksiyon" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Komedi" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Korku" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Belgeseller" fetchUrl={requests.fetchDocumentaries}/>
      <Alert visible={visible} setVisible={() => setVisible(false)}/>
      
    </div>
  );
}

export default App;
