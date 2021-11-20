import React , {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'


const ProductScreens = () => {
    let { id } = useParams();
    
    const [product, setProduct] = useState({ })

    useEffect(()=>{
        const fetchProduct = async () => {
            const {data} = await axios.get('/api/products/'+id)
            setProduct(data);
        }
        console.log("product :", product)
        fetchProduct();
    },[])



    return (
        <>
            <Link className="btn btn-light btn-md my-3" to="/" > Go Back </Link>
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
                                <Button className="btn-block" type="button" disabled={product.countInStock < 1 }>Add to cart</Button>
                            </div>    
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}



export default ProductScreens
