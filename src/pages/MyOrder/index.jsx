import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Layout from "../../components/Layout";
import OrderCard from "../../components/OrderCard";
import { Link } from "react-router-dom";

function MyOrder() {
		const context = useContext(ShoppingCartContext);

    return (
			<Layout >
				<div className="flex items-center justify-center relative w-80">
					<Link to='/my-orders' className="absolute left-0">
						<ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
					</Link>
					<h1>My Order</h1>
				</div>

				<div className="flex flex-col w-80 pt-5">
				{
					context.order?.slice(-1)[0].products.map(product => (
						<OrderCard 
							key = {product.id}
							id= {product.id}
							title = {product.title}
							image = {product.image}
							price = {product.price}
							value = {product.value}
							description = {product.description}
							isOrderCard = {true}
						/>
					))
				}
			</div>
			</Layout>
    );
  };
  
  export default MyOrder;