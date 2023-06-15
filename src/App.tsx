import React, { useState } from 'react'
import { Header } from './components/Header/header';
import { Main } from './components/Main/main';
import { AppContext, Transport } from './context/AppContext';



export const App = () => {

  const [transports, setTransports] = useState([])

  const res = fetch('./list.json')
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(error => console.error(error))  

  const app = {
    pages: ["Список ТС", "Экран ТС", "Настройки"],
    category: ["Грузовой", "Пассажирский", "Спецтранспорт"],
    transports: []
  }
  
  return (
    <>
      <Header />
      <AppContext.Provider value={app}>
        <Main />
      </AppContext.Provider>
    </>
  );
}
