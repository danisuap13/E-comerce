import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../components/Layout";
import OrderCard from "../../components/OrderCard";

function MyOrder() {
		const context = useContext(ShoppingCartContext);
		console.log(context.order?.slice(-1)[0].products)

    return (
			<Layout >
				MyOrder
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