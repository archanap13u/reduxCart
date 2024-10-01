import React from 'react'
import { useSelector } from 'react-redux'
import { removeCart } from '../redux/Slices/cartslice'
import { useDispatch } from 'react-redux'
import { increase } from '../redux/Slices/cartslice'
import { decrease } from '../redux/Slices/cartslice'
import { checkout } from '../redux/Slices/cartslice'
import { useNavigate } from 'react-router-dom'

function Cart() {
    const {cart}=useSelector((state)=>state.CartReducer)
    const dispatch=useDispatch()
   const  nav=useNavigate()
    const handleCheckout=()=>{
        dispatch(checkout())
        nav('/')
        alert("cart checked out")
    }
  return (
   <>
   <div className='row p-1'>
        <div className='col-8'>
            <h3>cart summary</h3>
            {
                cart?.length>0 ?
                <table className='table table-bordered shadow'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>TITLE</td>
                        <td>IMAGE</td>
                        <td>QUANTITY</td>
                        <td>PRICE</td>


                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(item=>(
                            <tr>
                            <td>{item?.id}</td>
                            <td>{item?.title}</td>
                            <td><img src={item?.thumbnail} alt="" width={'50%'}/></td>
                            <td>
                            <button className='btn' onClick={()=>dispatch(increase(item?.id))}>+</button>
                            <input type="text"  className="form-control w-25"  value={item?.quantity} readOnly/>
                            <button className='btn' onClick={()=>dispatch(decrease(item?.id))}>-</button>
                            </td>
                            <td>{item?.price}</td>
                            <td>
                                <button className='btn' onClick={()=>dispatch(removeCart(item?.id))} style={{color: "#da101b",}}>
                                <i className="fa-solid fa-trash"  />
                                </button>
                            </td>
    
    
                        </tr>

                        ))
                    }
                  
                </tbody>
            </table>
            :
            <h3 className='text-center text-danger'>No items yet!!!</h3>

            }
          

        </div>
        <div className='col-4'>
            
              <div className="border shadow bg-light mt-5 p-4">
                <h4 className='text-success'>total products:{cart?.length}</h4>
                <h4 className='text-success'>total Amount: {cart?.reduce((prev,item)=>prev+(item.price*item.quantity),0)}
                </h4>
               
                </div>  
            
                <div className='d-grid mt-4'>
                  <button className="btn btn-info" onClick={handleCheckout}>check out</button>
                </div>
        </div>

    </div>
   </>
  )
}

export default Cart