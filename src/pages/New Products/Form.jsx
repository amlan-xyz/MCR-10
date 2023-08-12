import { useContext, useEffect, useState } from 'react'
import './style.css'

import {InventoryContext} from '../../index'
import { useNavigate } from 'react-router-dom';

import {v4 as uuid} from 'uuid'

export function Form(){
	const [formData,setFormData]=useState({});
	const {getDepartments,departments,setInventory}=useContext(InventoryContext);

	const navigate=useNavigate();

	const handleSubmit=(e)=>{
		e.preventDefault();
		const newProduct={id:uuid(),...formData}
		setInventory(prevData=>[...prevData,newProduct])
		navigate('/products');
	}

	useEffect(()=>{
		getDepartments();
	},[])

	return(
		<section className="new_product">
			<header>Add new Product</header>
			<form onSubmit={handleSubmit}>
				<label htmlFor="department">Department</label>
				<select name="" id="department">
					{
						departments.map(item=>(
							<option value={item}>{item}</option>	
						))
					}
				</select>
				<label htmlFor="name">Name</label>
				<input type="text" onChange={(e)=>setFormData(form=>({...form,name:e.target.value}))}  id="name" />
				<label htmlFor="Description">Description:</label>
				<input type="text" onChange={(e)=>setFormData(form=>({...form,description:e.target.value}))}  id="description" />
				<label htmlFor="price"   >Price</label>
				<input onChange={(e)=>setFormData(form=>({...form,price:e.target.value}))} type="number" id="price" />
				<label htmlFor="stock">Stock</label>
				<input onChange={(e)=>setFormData(form=>({...form,stock:e.target.value}))} type="number" id="stock" />
				<label htmlFor="sku">SKU</label>
				<input onChange={(e)=>setFormData(form=>({...form,sku:e.target.value}))} type="text" id="sku" />
				<label htmlFor="supplier">Supplier</label>
				<input type="text" onChange={(e)=>setFormData(form=>({...form,supplier:e.target.value}))} id='supplier' />
				<label htmlFor="delivered">Delivered</label>
				<input onChange={(e)=>setFormData(form=>({...form,delivered:e.target.value}))} type="number"  id="delivered"  />
				<label htmlFor="image">Image Url</label>
				<input onChange={(e)=>setFormData(form=>({...form,imageUrl:e.target.value}))} type="text" id="image" />
				<button type='submit'>Add Product</button>
			</form>
		</section>
	)
}