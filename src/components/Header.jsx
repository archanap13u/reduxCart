import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { search } from '../redux/Slices/productSlice';
function Header() {

const [key,setkey]=useState("")
const dispatch=useDispatch()
const searchWithKey=()=>{
  dispatch(search(key))
}
  const {wishlist}=useSelector((state)=>state.wishReducer)
  const {cart}=useSelector((state)=>state. CartReducer)
  return (
   
   <>
   <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-bag-shopping fa-xl" style={{color: "#74C0FC",}} />
            {' '}
            Redux-Cart
          </Navbar.Brand>
          <div className='d-flex'>
            <div className='d-flex'>
              <input type='text'placeholder='search'onChange={(e)=>setkey(e.target.value)} className='form-control me-2'>
              </input>
              <button className='btn btn-success me-2' onClick={searchWithKey}>Search</button>
            </div>
            <Link to={'/wish'} className='btn btn-outline-dark me-4'>
            <i className="fa-solid fa-heart" size="xl" style={{color: "#f00a0a",}} />
            {''}
            wishlist
            <span className='badge bg-dark ms-1'>
              {wishlist?.length}
            </span>
            </Link>
            <Link to={'/cart'} className='btn btn-outline-dark'>
            <i className="fa-solid fa-cart-shopping" />
            {''}
            Cart
            <span className='badge bg-dark ms-1'>{cart?.length}</span>
            </Link>
          </div>
        </Container>
      </Navbar>
   </>
  )
}
export default Header
