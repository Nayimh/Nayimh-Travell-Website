import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import './ShowMyOrder.css'


const MyOreder = () => {

    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
      fetch(`https://damp-plains-34194.herokuapp.com/orders/${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }, [user.email]);

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure, you wanna delete this?");
        if (confirm) {
          const url = `https://damp-plains-34194.herokuapp.com/orders/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount) {
                const remaining = orders.filter((order) => order._id !== id);
                setOrders(remaining);
              }
            });
        }
      };

    return (
        <div className="container myOrder min-height pt-5 mt-5">
        <h2>My Orders</h2>
        <div className="row row-cols-1 row-cols-md-2 g-2 py-5">
          {orders.map((order) => (
            <CardGroup key={order._id}>
              <Card className="shadow-lg">
                <Card.Img variant="top" height="300px" src={order?.img} />
                <Card.Body className="p-3">
                  <Card.Title>
                    <span className="text-danger">Name: </span> {order?.name}
                  </Card.Title>
                  <Card.Title>
                    <span className="text-danger">Price: </span> ${order?.price}
                  </Card.Title>
                          <Card.Text>{order?.desc}</Card.Text>
                          <button
                  className="btn-danger border-0 fs-5 py-1 rounded-1 px-5"
                  onClick={() => handleDelete(order._id)}
                >
                  Delete
                </button>
                </Card.Body>
              </Card>
            </CardGroup>
          ))}
        </div>
      </div>
    );
};

export default MyOreder;