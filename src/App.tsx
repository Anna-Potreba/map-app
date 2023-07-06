


import './App.css'
import { useSelector } from 'react-redux'
import { MapChart } from './components/MapChart';
import { SideBar } from './components/SideBar';
import { Warning } from './components/Warning';

function App() {
  const markers = useSelector((state) => state.markers.markers)
  return (
    <>
      {!markers.length && <Warning text="На карте нет отмеченных адресов" />}
      <MapChart />
      <SideBar />
    </>
  )
}

export default App
