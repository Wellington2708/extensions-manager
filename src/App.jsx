import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Card from './components/Card/index';
import datas from './datas/data.json'

function App() {

  return (
    <>
      <Header />
      <section className='container_menu'>
        <h2>Extensions List</h2>
        <ul className='btn_list'>
          <li><button>All</button></li>
          <li><button>Active</button></li>
          <li><button>Inactive</button></li>
        </ul>
      </section>
      <main className='card_container'>
        {datas.map((item) => (
          <Card key={item.name} card={item}/>

        ))}
      </main>


    </>
  )
}

export default App
