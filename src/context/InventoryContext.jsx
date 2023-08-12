import { createContext, useState,useEffect, useReducer } from "react";

import {inventoryData} from '../data/inventory'
import {filterReducer } from "../reducer/filterReducer";

export const InventoryContext=createContext();

export function InventoryContextProvider({children}){

	const [inventory,setInventory]=useState([]);
	const [departments,setDepartments]=useState([]);
	const [product,setProduct]=useState({});
	const [state,dispatch]=useReducer(filterReducer,inventoryData);

	const getInventory=()=>{
		setInventory(inventoryData);
	}

	const getDepartments=()=>{
		setDepartments(inventoryData.reduce((acc,curr)=>{
			if(!acc.includes(curr.department)){
				acc.push(curr.department);
			}
			return acc;
		},[]))
	}


	
	const getProduct=(product_id)=>{
		setProduct(inventory.find(({id})=>id===Number(product_id)));
	}


	const value={getProduct,product,inventory,getInventory,departments,getDepartments,state,dispatch,setInventory};

	useEffect(()=>{
		getInventory();
		
	},[]);

	return(
		<InventoryContext.Provider value={value}>{children}</InventoryContext.Provider>	
	)
}