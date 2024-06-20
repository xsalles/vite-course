import React from "react"
import Post from "./components/post"

function App() {
  return (
    <div>
    <Post 
    author="Pedro"
    content = "Eu sou muito legal"
    />

    <Post 
    author="Camilly"
    content="Eu amo o Pedro"
    />
    </div>
  )
}

export default App
