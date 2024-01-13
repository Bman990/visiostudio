
import './App.css'
import { Home } from './assets/Components/Home'
import { FieldEscape } from './assets/Components/FieldEscape'
import {Routes, Route} from 'react-router-dom'
import { AiSwirl } from './assets/Components/AiSwirl'
import { VibeZone } from './assets/Components/VibeZone'
import { TheProcess } from './assets/Components/TheProcess'
import { AlgaeSphere } from './assets/Components/AlgaeSphere'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="fieldescape" element={<FieldEscape />} />
        <Route path="aiswirl" element={<AiSwirl />} />
        <Route path="vibezone" element={<VibeZone />} />
        <Route path="theprocess" element={<TheProcess />} />
        <Route path="algaesphere" element={<AlgaeSphere />} />
      </Routes>
  )
}

export default App

