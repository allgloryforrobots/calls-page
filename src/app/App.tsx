import React from 'react'
import './styles/global.css'
import cls from './styles/App.module.scss';
import './styles/reset.css';
import { CallsPage } from '../pages/СallsPage';
import { Header } from '../widgets/Header';


function App() {
  return (
    <div className={cls.App}>
        <div className={cls.layout}>
            <Header />
            <CallsPage />
        </div>
    </div>
  );
}

export default App;
