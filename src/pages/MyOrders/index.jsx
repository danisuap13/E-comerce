import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { ShoppingCartContext } from "../../Context";
import OrdersCard from "../../components/OrdersCard"

function MyOrders() {
	const context = useContext(ShoppingCartContext)

	return (
			<Layout >
				<h1 className="mb-4">My Orders</h1>
				{
					context.order.map((order, index)=>(
						<Link key={index} to={`/my-orders/${index}`}>
							<OrdersCard
								totalPrice = {order.totalPrice}
								totalProducts = {order.totalProducts}
							/>
						</Link>
					))
				}
			</Layout>
    );
  };
  
export default MyOrders;