import React, { useEffect, useState } from 'react'
import ProductService from '../service/ProductsServise'
import {Product} from '../models/Product.ts'
import ProductItem from './product-item/ProductItem'

const ProductBlock = ()=>{
    const [producs, setProducts] = useState([])

    async function fetchProducts(){
        try{
            const response = await ProductService.fetchProducts()
            const arrProducts = []
            response.data.map( item => 
                arrProducts.push(new Product(item.nameProduct, item.flavor, item.bundlDescription, item.weight, item.info, item.quantity, item._id))
                )
            setProducts(arrProducts)
            
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    return(
        <div className='product-block'>
            {producs
            ?  producs.map(item =>
              <ProductItem
                key={item.id}
                item={item}
               /> 
            )
            
            : <h1>Loading...</h1>
            }
        </div>
    )
}
export default ProductBlock