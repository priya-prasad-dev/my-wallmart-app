import { Route, Routes } from "react-router-dom";
import MiniDrawer from "./components/drawer/drawer-header.component"
import HeaderApp from "./components/header/header-app.component"
import SellerApprove from "./components/supplier/approve-walllmart.component";
import SupplierCreate from "./components/supplier/create_product.component";
import View from "./components/view/view-prod-sale.component";
import WallmartRequest from "./components/wallmart/create-request-page.component";
import Display from "./components/wallmart/get-allProduct.component";
import WallmartPurchase from "./components/wallmart/purchase-bywallmart.component";

function App() {

  return (
    <>
      {/* <HeaderApp/> */}
      <MiniDrawer/>
      <Routes>
        <Route path="/res" element={<SupplierCreate/>} />
        <Route path="/walreq" element={<WallmartRequest />} />
        <Route path="/sellapp" element={<SellerApprove/>} />
        <Route path="/purwal" element={<WallmartPurchase />} />
        <Route path="/get" element={< Display/>} />
        <Route path="/view" element={<View />} />
        {/* <Route path="/turi" element={<TokenUri />} /> */}
        {/* <Route path="/isapp" element={<MarketPlace />} /> */}
        {/* <Route path="/app" element={<Purchase />} /> */}
        {/* <Route path="/approval" element={<Approval />} />  */}
      </Routes>
    </>
  )
}

export default App


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App