import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'

import { listProductsDetails } from '../actions/productActions'



const ProductScreens = () => {
    let { id } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProductsDetails(id))
    }, [dispatch])

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
                                <ListGroup.Item>
                                    <div className="d-grid gap-2">
                                        <Button className="btn-block" type="button" disabled={product.countInStock < 1}>Add to cart</Button>
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
