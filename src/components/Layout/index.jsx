const Layout = ({ children }) => {
	return (
		<div className='flex flex-col mt-20 items-center pb-3'>
			{children}
		</div>
	);
};

export default Layout;