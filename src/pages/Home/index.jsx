import { useContext } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
	const context = useContext(ShoppingCartContext);

	const renderView = () => {
		if(context.searchByTitle?.length > 0 || context.searchByCategory) {
			if(context.filteredItems?.length > 0) {
				return (
					context.filteredItems?.map(item => (
						<Card key={item.id} data = {item}/>
						))
				)
			}
			else {
				<div>We don't have anything! :(</div>
			}
		}else {
				return (context.items?.map(item => (
					<Card key={item.id} data = {item}/>
					)))
		}
	}

	return (
		<Layout >
      <h1 className="text-lg mb-4 mt-2 p-2 border-black">HOME</h1>
	  	<input 
				type="text" 
				placeholder="Search a Product" 
				className="rounded-lg border border-black p-4 w-80 mb-4 focus:outline-none" 
				onChange={(event) => context.setSearchByTitle(event.target.value)}
				/>
			<div className="grid gap-5 grid-cols-4 w-full max-w-screen-lg">
				{renderView()}
			</div>
			<ProductDetail />
		</Layout>
	);
};

export default Home;
