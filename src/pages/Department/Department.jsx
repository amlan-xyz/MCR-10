
import { useEffect,useContext, useState, useReducer } from 'react'

import {InventoryContext} from '../../index'

import './style.css'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { filterReducer } from '../../reducer/filterReducer';

export function Department(){

	const {getInventory,inventory,departments,getDepartments}=useContext(InventoryContext);

	useEffect(()=>{
		getInventory();
		getDepartments();
	},[])

	return(
		<section className="department">
			<header>Department Page</header>
			<Sidebar/>
			<ul className="deparment_list">
				{
					departments.map(item=>(
						<li onClick={()=>{
							
						}}>{item}</li>	
					))
				}
			</ul>
		</section>	
	)
}