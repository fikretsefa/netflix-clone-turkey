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
      {/* <div className="div">
        <img className="red" src="https://api.fnkr.net/testimg/500x500/FF0000/FFF/?text=red" />
        <img className="blue" src="https://api.fnkr.net/testimg/500x500/0000ff/FFF/?text=blue" />
      </div> */}
      {/* <div style={{background:'red',width:300,height:300}}   onClick={() => {}}></div> */}
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
