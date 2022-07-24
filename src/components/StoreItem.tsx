import { Card, Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from '../utilities/formatCurrency'

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgURL: string
}


export function StoreItem ({ id , name, price, imgURL } : StoreItemProps ) {
    //using contex
    const { getItemAmount, increaseItemAmount, decreaseItemAmount, deleteCartItems } = useShoppingCart(); 

    const amount = getItemAmount(id); 
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={imgURL} height="200px" style={{objectFit: "contain"}} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-5"> {name} </span>
                <span className="ms-2 text-muted"> {formatCurrency(price)} </span>
                </Card.Title>
                <div className="mt-auto"> 
                    {amount === 0 ? 
                       (<Button 
                            variant="success" 
                            className="w-100"
                            onClick={() => {increaseItemAmount(id)}}
                        > 
                            Add to Cart +
                        </Button>) : 
                        (
                            <div 
                                className="d-flex align-items-center justify-content-center flex-column" 
                                style={{gap: "0.5rem"}}
                                >
                                    <div className="d-flex flex-colum-center">
                                        <Button 
                                            variant="success"
                                            onClick={() => {decreaseItemAmount(id)}}
                                        >
                                            - 
                                        </Button>
                                        <div className="m-1">
                                            <span className="fs-3"> {amount} </span>
                                            in cart
                                        </div>
                                        <Button 
                                            variant="success"
                                            onClick={() => {increaseItemAmount(id)}}
                                        > 
                                            + 
                                        </Button>
                                    </div>
                                    <Button 
                                        variant="danger" 
                                        size="sm"
                                        onClick={() => {deleteCartItems(id)}}
                                    > 
                                        Remove 
                                    </Button>
                            </div>
                        ) 
                    }   
                </div>
            </Card.Body>
        </Card>
    )
} 