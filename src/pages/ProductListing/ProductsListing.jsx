import { useContext, useEffect,useReducer } from "react";

import {InventoryContext} from '../../index'

import { Sidebar } from "../../components/Sidebar/Sidebar"

import { filterReducer } from "../../reducer/filterReducer";

import './style.css'

export function ProductListing(){

	const {getInventory,inventory,departments,getDepartments}=useContext(InventoryContext);



	const [state,dispatch]=useReducer(filterReducer,inventory);


	const filterDepartment=(e)=>{
		dispatch({type:'filter_department',payload:e.target.value});
	}

	const sortItems=(e)=>{
		dispatch({type:'sort_items',payload:e.target.value});
	}

	useEffect(()=>{
		getInventory();
		getDepartments();

	},[])

	
	return(
		<section className="product_listing">
			<Sidebar/>
			<header>
				<h1>Products</h1>
				<select name="departments" onChange={filterDepartment} >
					<option value="all">All Departments</option>
					{
						departments.map(item=>(
							<option value={item}>{item}</option>
						))
						
					}
				</select>

				{/* checkbox */}
				<input id="low_stock" onChange={()=>{
					dispatch({type:'filter_low_stock'})
				}} type="checkbox"/>
				<label htmlFor="low_stock">Low Stock Item</label>
				{/* name */}
				<select id="" onChange={sortItems}>
					<option value="price">Price</option>
					<option value='stock'>Stock</option>
					<option value="name">Name</option>
				</select>
				<button>New</button>
			</header>

			<table className="products_table">
				<tr>
					<th>Image</th>
					<th>Name</th>
					<th>Description</th>
					<th>Price</th>
					<th>Stock</th>
					<th>Supplier</th>
				</tr>
				
					{
						state.map(item=>{
							const {id,imageUrl,name,description,price,stock,supplier}=item;
							return(
								<tr>
									<td>{imageUrl}</td>
									<td>{name}</td>
									<td>{description}</td>
									<td>{price}</td>
									<td>{stock}</td>
									<td>{supplier}</td>
								</tr>
							)
						})
					}
				
			</table>
		</section>	
	)
}