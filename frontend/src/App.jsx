import { useState } from 'react'
import Menu from './components/Menu'
import Chat from './pages/Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex'>
      <Menu />
      <Chat />
    </div>
  )
}

export default App
