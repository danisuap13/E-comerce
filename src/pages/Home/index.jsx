import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail";

function Home() {
  const [items, setItems] = useState(null);
	const URL = 'https://fakestoreapi.com/products';
  useEffect(() => {
		fetch(URL)
		.then(response => response.json())
		.then(data => (setItems(data)))
  }, [])

	return (
		<Layout >
      <h1 className="text-lg mb-4 mt-2 p-2 border border-dashed border-black rounded-lg w-80 text-center">Home</h1>
			<div className="grid gap-5 grid-cols-4 w-full max-w-screen-lg">
				{
					items?.map(item => (
						<Card key={item.id} data = {item}/>
						))
				}
			</div>
			<ProductDetail />
		</Layout>
	);
};

export default Home;
