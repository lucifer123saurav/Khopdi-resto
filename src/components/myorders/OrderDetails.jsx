import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderDetails } from '../../redux/actions/order';
import { useParams } from 'react-router-dom';
import { Loader } from '../layouts/Loader';

export const OrderDetails = () => {

    const params = useParams();
    const { order, loading } = useSelector((state) => state.orders);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrderDetails(params.id));
    }, [dispatch, params.id]);


    return (
        <section className='orderDetails'>
            {
                loading === false ? order && <main>
                    <h1>Order Details </h1>
                    <div>
                        <h1>Shiping</h1>
                        <p>
                            <b>Address</b>
                            {`${order.shippingInfo.hNo} ${order.shippingInfo.city} ${order.shippingInfo.state} ${order.shippingInfo.country} ${order.shippingInfo.pincd}`}
                        </p>
                    </div>
                    <div>
                        <h1>Contact</h1>
                        <p>
                            <b>Name</b>
                            {`${order.user.name}`}
                        </p>
                        <p>
                            <b>Phone</b>
                            {`${order.shippingInfo.phoneNo}`}
                        </p>
                    </div>
                    <div>
                        <h1>Status</h1>
                        <p>
                            <b>Order Status</b>
                            {`${order.orderStatus}`}
                        </p>
                        <p>
                            <b>Placed at</b>
                            {"23-02-2005"}
                        </p>
                        <p>
                            <b>Expected delivery</b>
                            {"23-02-2005"}
                        </p>
                    </div>
                    <div>
                        <h1>Payment</h1>
                        <p>
                            <b>Payment Method</b>
                            {`${order.paymentMethod}`}
                        </p>
                        {
                            order.paymentMethod === "online" ? <p>
                                <b>Payment Reference</b>
                                #dshkdfghkdfh435fg
                            </p> : <p></p>
                        }

                        {
                            order.paymentMethod === "online" ? <p>
                                <b>Paid at</b>
                                {"23-02-2005"}
                            </p> : <p></p>
                        }
                    </div>
                    <div>
                        <h1>Amount</h1>
                        <p>
                            <b>Item Total</b>
                            Rs  {`${order.itemsPrice}`}
                        </p>
                        <p>
                            <b>Shiping Charges</b>
                            Rs   {`${order.shipingPrice}`}
                        </p>
                        <p>
                            <b>Tax</b>
                            Rs   {`${order.taxPrice}`}
                        </p>
                        <p>
                            <b>Total</b>
                            Rs   {`${order.totalAmount}`}
                        </p>
                    </div>
                    <article>
                        <h1>Ordered Items</h1>
                        {
                            order.orderItems.cheeseBurger.quantity === 0 ? <></> :
                                <div>
                                    <h4>Cheese Burger</h4>
                                    <div>
                                        <span>{`${order.orderItems.cheeseBurger.quantity}`}</span> x <span>{`${order.orderItems.cheeseBurger.price}`}</span>
                                    </div>
                                </div>
                        }
                        {
                            order.orderItems.regularBurger.quantity === 0 ? <></> :
                                <div>
                                    <h4>Regular Burger</h4>
                                    <div>
                                        <span>{`${order.orderItems.regularBurger.quantity}`}</span> x <span>{`${order.orderItems.regularBurger.price}`}</span>
                                    </div>
                                </div>
                        }
                        {
                            order.orderItems.specialPizza.quantity === 0 ? <></> :
                                <div>
                                    <h4>Special Pizza</h4>
                                    <div>
                                        <span>{`${order.orderItems.specialPizza.quantity}`}</span> x <span>{`${order.orderItems.specialPizza.price}`}</span>
                                    </div>
                                </div>

                        }
                        {
                            order.orderItems.regularPizza.quantity === 0 ? <></> :
                                <div>
                                    <h4>Regular Pizza</h4>
                                    <div>
                                        <span>{`${order.orderItems.regularPizza.quantity}`}</span> x <span>{`${order.orderItems.regularPizza.price}`}</span>
                                    </div>
                                </div>
                        }
                        <div>
                            <h4
                                style={{
                                    fontWeight: 800,
                                }
                                }
                            >Sub Total</h4>
                            <div style={{ fontWeight: 800 }}
                            > RS {`${order.itemsPrice}`}</div>
                        </div>
                    </article>
                </main> : <Loader />
            }
        </section>
    )
}
