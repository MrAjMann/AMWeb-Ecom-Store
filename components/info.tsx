"use client";

import { Product } from "@/types";
import Currency from "./ui/currency";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
	data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
	return (
		<div>
			<h1 className='text-3xl font-bold text-gray-900'>{data.name}</h1>
			<div className='mt-3 flex items-end justify-between'>
				<p className='text-2xl text-gray-900'>
					<Currency value={data?.price} />
				</p>
			</div>
			<hr className='my-4' />
			<div className='flex flex-col gap-y-6'>
				<div className='flex items-center gap-x-4'>
					<h3 className='font-semibold text-black'>Size</h3>
					<div>{data?.size?.value}</div>
				</div>
				<div className='flex items-center gap-x-4'>
					<h3 className='font-semibold text-black'>Color</h3>
					<div
						className='rounded-full w-6 h-6 border border-gray-700'
						style={{ backgroundColor: `${data?.color?.value}` }}
					/>
				</div>
			</div>
			<div className='mt-10 flex- item-center gap-x-3'>
				<Button className='flex items-center gapy-x-2'>
					Add to cart
					<ShoppingCart size={20} className='ml-2 ' />
				</Button>
			</div>
		</div>
	);
};

export default Info;
