import './App.css'
import { Route, Routes } from 'react-router-dom'
// import Header from './COMPONENTS/HEADER/Header'
// import Footer from './COMPONENTS/FOOTER/Footer'
import Home from './COMPONENTS/MAIN/Home'
Home



function App() {

  return (
    <>
    {/* <Header/>  */}
     <Routes>
        <Route path={'/'} element={<Home/>}/>
      </Routes>
     {/* <Footer/> */}
    </>
  )
}

export default App
