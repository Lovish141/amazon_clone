import React, { useEffect,lazy,Suspense } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

// import Home from './pages/Home/Home'
// import Login from './pages/Login/Login'
// import Register from './pages/Register/Register'
import {useDispatch} from 'react-redux'
import {getAuth} from 'firebase/auth'
import { firebaseApp } from './utils/firebase'
import { setUser } from './redux/actions'
// import SingleProduct from './pages/SingleProduct/SingleProduct'
// import Checkout from './pages/Checkout/Checkout'
// import Payment from './pages/Payment/Payment'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
// import Order from './pages/Order/Order'
// import Loading from './components/Loading/Loading'

const Home=lazy(()=>import('./pages/Home/Home'))
const Login=lazy(()=>import('./pages/Login/Login'))
const Register=lazy(()=>import('./pages/Register/Register'))
const Checkout=lazy(()=>import('./pages/Checkout/Checkout'))
const Payment=lazy(()=>import('./pages/Payment/Payment'))
const Order=lazy(()=>import('./pages/Order/Order'))
const SingleProduct=lazy(()=>import('./pages/SingleProduct/SingleProduct'))
const Loading=lazy(()=>import('./components/Loading/Loading'))

const promise=loadStripe(
  'pk_test_51L5lfySGps3yUG78lJBTikJhz9wzAIEMkghVf1G74D6sE8BwSUlnYLGeDNotVDW7Mh7kvTOhZaqvop174yLwVnRp00HmJUgHE9'
);

function App() {
  const dispatch=useDispatch();
   const auth=getAuth(firebaseApp)
  useEffect(()=>{
auth.onAuthStateChanged((authUser)=>{
  if(authUser){
    dispatch(setUser(authUser))
  }else{
    dispatch(setUser(null))
  }
})
  },[dispatch])

  return (
    <Router>
      <div className='app'>
        <Suspense fallback={<Loading/>}>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/products/:id' element={<SingleProduct/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/payment' element={
          <Elements stripe={promise}>
            <Payment/>
          </Elements>} />
          <Route path='/orders' element={<Order/>} />
       </Routes>
       </Suspense>
      </div>
    </Router>
  );
}

export default App;
