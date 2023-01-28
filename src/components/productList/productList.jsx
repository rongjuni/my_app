import "./productList.css"
import Product from '../product/product';

const ProductList = () => { 
  return (
      <div className='pl'>
          <div className='pl-texts'>
              <h1 className='pl-title'>Creat & inspire. It's Lama</h1>
              <p className='pl-desc'>
                  Lama is a creative portfolio that your work has been waiting for. Beautiful homes, stunning portfolio style & a whole lot more inside.
              </p>
          </div>
          <div className='pl-list'>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
          </div>
    </div>
  )
}


export default ProductList;