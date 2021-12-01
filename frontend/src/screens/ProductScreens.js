import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'

import { listProductsDetails } from '../actions/productActions'



const ProductScreens = () => {

    const [qty, setQty] = useState(0)

    let { id } = useParams();
    let navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProductsDetails(id))
    }, [dispatch, id])

    const addToCartHandler = () => {
        navigate(`/cart/${id}?qty=${qty}`)
    }

    const productDetails =  useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    return (
        <>
            <Link className="btn btn-light btn-md my-3" to="/" > Go Back </Link>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <Row>
                    <Col md={6} >
                        <Image src={product.image} alt={product.name} fluid></Image>
                    </Col>
                    <Col md={3} >
                        <ListGroup variant={'flush'}>
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews} reviews `} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price: ${product.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description: {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant={'flush'}>
                                <ListGroup.Item>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </ListGroup.Item>

                                    { product.countInStock > 0 && (
                                        <ListGroup.Item>
                                            <Row>
                                                <Col xs={4}>Qty</Col>
                                                <Col >
                                                    <Form.Select  as='select' value={qty} onChange={(e) => {
                                                        setQty(e.target.value)
                                                    }}>
                                                       { [...Array(product.countInStock).keys()].map((x) => (
                                                            <option key={x + 1} value={x+1}>
                                                                {x + 1}
                                                            </option>
                                                        ))} 
                                                    </Form.Select>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )}

                                <ListGroup.Item>
                                    <div className="d-grid gap-2">
                                        <Button 
                                        onClick={addToCartHandler}
                                        className="btn-block" 
                                        type="button" 
                                        disabled={product.countInStock === 0}>Add to cart
                                        </Button>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}

        </>
    )
}



export default ProductScreens
