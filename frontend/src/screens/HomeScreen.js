import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row , Col} from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList)
    const { loading, error, products} = productList

    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])



    return (
        <>
             <h1>Latest Products</h1>
             {loading ? <h1>Loading ...</h1> : error ? <h3>{Error}</h3> : <Row>
                 {products.map((product) => (
                     <Col key={product._id} xs={12} lg={4} xl={3}>
                     <Product product={product}/>
                     </Col>
    ))}
             </Row>}
             
        </>
    )
}

export default HomeScreen
