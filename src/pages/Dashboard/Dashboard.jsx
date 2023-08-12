import { useContext,useEffect,useState } from 'react'

import {InventoryContext} from '../../index'

import {Sidebar} from '../../components/Sidebar/Sidebar'

import './style.css'

export function Dashboard(){

	const {inventory,setInventory}=useContext(InventoryContext);

	
	return (
		<section className="dashboard layout">
			<Sidebar/>
			<div className="dashboard_body">
				<p className='dashboard_card'>
					<span className='card_data green'>
					{inventory.reduce((acc,curr)=>acc+curr.stock,0)}
					</span>
					<span>Total Stock</span>
				</p>
				<p className='dashboard_card'>
				<span className='card_data yellow'>
					{inventory.reduce((acc,curr)=>acc+curr.delivered,0)}
				</span>
				<span>Total Delivered</span>
				</p>
				<p className='dashboard_card'>
				<span className='card_data red'>
					{inventory.reduce((acc,curr)=>curr.stock<=10?acc+1:acc,0)}
				</span>
				<span>Low Stock Items </span>
				</p>
			</div>
		</section>	
	)
}