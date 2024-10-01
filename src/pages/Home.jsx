import React ,{useEffect}from 'react'
import { Link } from 'react-router-dom'
import { fetchProductsThunk } from '../redux/Slices/productSlice'
import { useDispatch,useSelector } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner';
import { addToWishlist } from '../redux/Slices/wishslice';
import { addCart } from '../redux/Slices/cartslice';
import { nextPage,prevPage } from '../redux/Slices/productSlice';

function Home() {
    
  const dispatch=useDispatch()

  const{product,loading,error,productPerPage,currentPage}=useSelector((state)=>state.ProductReducer)
  const totalPage=product.length/productPerPage//=3here product is an array and tht contain 30 product so the length is 30 ..here  30 add with 10.because we already set productpage as 10 
  const lastProductIndex=productPerPage*currentPage//10,20,30/;ast priodct index 10 koduthath slice opertion l index crrct aytt vrn ann..'slice'
    const firstProductIndex=lastProductIndex-productPerPage
    const visibleProducts=product.slice(firstProductIndex,lastProductIndex)

  useEffect(()=>{
      dispatch(fetchProductsThunk())
  },[])
  
  const next=()=>{
    if(currentPage<totalPage)
    {
        dispatch(nextPage())
    }
    
  }

  const prev=()=>{
    if(currentPage>1){
        dispatch(prevPage())
    }
  }

  console.log(product)
  return (
    <>
    <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                        loading?
                        <h2>
                        <Spinner animation="border" role="status">
                      </Spinner>
                      Loading...
                      </h2>
                        :
                        <>
                        {
                            error?
                            <h2 className='text-danger'>{error}</h2>
                            
                            :
                            <>
                            {
                                visibleProducts?.map(item=>(
                                    <div className="col mb-5">
                        <div className="card h-100">
                            <Link to={`/view/${item?.id}`}>
                            <img className="card-img-top" src={item.thumbnail} alt="..." />
                            </Link>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{item.title}</h5>
                                   ${item.price}
                                </div>
                            </div>
                            <div className='card-footer d-flex justify-content-between'>
                                <button className='btn'>
                                <i className="fa-solid fa-heart-circle-plus fa-xl"style={{color: "#f70808",}} onClick={()=>dispatch(addToWishlist(item))} />

                                </button>
                                <button className='btn'onClick={()=>dispatch(addCart(item))}>
                                <i className="fa-solid fa-cart-plus fa-xl" style={{color: "#63E6BE",}}  />
                                    </button>
                            </div>
                        </div>
                    </div>
                                    
                                ))
                            }
                            </>
                        }
                        </>
                    }
                  
                    </div>
                </div>
            
        </section>
        <div className='text-center'>
            <button className='btn'onClick={prev} >
            <i className="fa-solid fa-angles-left" />
            </button>
            {''}
            {currentPage}/{totalPage}
            {''}
            <button className='btn' onClick={next}>
            <i className="fa-solid fa-angles-right" />
            </button>
        </div>
    </>
  )
}

export default Home