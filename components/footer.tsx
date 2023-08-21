const Footer = () => {
	const today = new Date();
	return (
		<footer className='bg-white border-1'>
			<div className='mx-auto py-10'>
				<p className='text-center text-xs text-black'>
					&copy; {today.getFullYear()} AMWEB Ecommerce Store Template, All
					rights Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
