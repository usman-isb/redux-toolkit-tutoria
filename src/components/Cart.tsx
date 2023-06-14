import { FunctionComponent } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

interface CartProps {

}

const Cart: FunctionComponent<CartProps> = () => {
    const dispatch = useDispatch()
    const products: any[] = useSelector((state: any) => state.cart)


    const removeToCart = (id: number) => {
        dispatch(remove(id))
    }

    const card = products.map((product: any) => (
        <div className="col-md-12" style={{ marginBottom: '10px' }}>
            <Card key={product.id} className="h-100">
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
                    <Button variant="danger" onClick={() => removeToCart(product.id)}>Remove item</Button>
                </Card.Footer>
            </Card>
        </div>
    ))

    return (<>
        <div className="row">
            {card}
        </div>
    </>);
}

export default Cart;