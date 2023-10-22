import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import Form from './components/Form';

import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que voce vai fazer?</h2>
          <Form btnText='Criar tarefa'/>
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <List />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
