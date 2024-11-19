'use server'
import InventoryItem from '../models/InventoryItem';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import connect from './db';

//! Add Item
export const addItem = async (FormData) => {
    //!convert form data into objact
    const data = Object.fromEntries(FormData);
    console.log("data",data);
    try {
        //connect to db
        await connect();
        //DB operations 
        const newItem = new InventoryItem(data);
        await newItem.save();
        console.log("Item",newItem);
    } catch (error) {
        console.error("Failed to add item:", error); 
        

    }
};
//POST
//GET ALL

