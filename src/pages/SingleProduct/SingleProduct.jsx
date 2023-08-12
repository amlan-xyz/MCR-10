import { useContext, useEffect } from "react"

import {InventoryContext} from '../../index'
import { useParams } from "react-router-dom"
import { Sidebar } from "../../components/Sidebar/Sidebar";

import './style.css'

export function SingleProduct(){
	
	const {getProduct,product} =useContext(InventoryContext)

	const {id}=useParams();

	useEffect(()=>{
		getProduct(id);
	},[]);

	return(
		<section className=" layout">
			<Sidebar/>
			<div className="single_product">
			<h1 className="single_header">{product.name}</h1>
				<div className="single_product_body">
					<img src={product.imageUrl} alt="" />
					<div className="single_product_content">
						<p>Price:{item.price}</p>
					</div>
				</div>
			</div>
			
		</section>
	)
}