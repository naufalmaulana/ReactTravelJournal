import React from "react"
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import data from "./data"
import './App.css';

export default function App() {
  const contents = data.map(item => {
      return (
          <Content
              key={item.id}
              {...item}
              
          />
      )
  })        
  
  return (
      <div>
          <Navbar />
          {/* <Content /> */}
          <section className="p-5">
              {contents}
          </section>
      </div>
  )
}

