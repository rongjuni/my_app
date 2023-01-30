import "./productList.css"
import Product from '../product/product';
import { products } from "../../data";

const ProductList = () => { 
  return (
      <div className='pl'>
          <div className='pl-texts'>
              <h1 className='pl-title'>Create as Idea comes up.</h1>
              <p className='pl-desc'>
                  Check out my fun projects below! If you have any feedback, please scroll down to the bottom and share your idea with me.
              </p>
          </div>
          <div className='pl-list'>
              {
                  products.map((item) => ( 
                      <Product key={item.id} img={item.img} link={item.link} />
                  ) )
             }
          
          </div>
    </div>
  )
}


export default ProductList;