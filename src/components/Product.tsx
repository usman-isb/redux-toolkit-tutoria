import React, { useEffect, useState } from "react";
import { FunctionComponent } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

interface ProductProps {

}

interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

const Product: FunctionComponent<ProductProps> = () => {
    const dispatch = useDispatch()

    const products = useSelector((state: any) => state.products)
    // const [products, getProducts] = useState<IProduct[]>([])

    useEffect(() => {
       dispatch(getProducts() as any) 
        //fetch("https://fakestoreapi.com/products").then(data => data.json()).then(result => getProducts(result))
    }, [])

    const addToCart = (product: IProduct) => {
        dispatch(add(product))
    }


    const card = products.map((product: IProduct) => (
        <div className="col-md-3" style={{ marginBottom: '10px' }}>
            <Card key={product.id} style={{ width: '18rem' }} className="h-100">
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        PKR: {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{ background: 'white' }}>
                    <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))


    return (
        <>
            <h1>Procutct Dashboard</h1>
            <div className="row">
                {card}
            </div>
        </>
    );
}

export default Product;