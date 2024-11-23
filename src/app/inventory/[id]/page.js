
import React from "react";
import { getItemById } from "../../../../utlis/actions";
import Link from 'next/link';
import { updateItem } from "../../../../utlis/actions";


const UpdateInventory = async ({params}) => {
  const { id } = await params;
  const inventory = await getItemById(id);
  console.log(params);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">
          Update Inventory Item
        </h1>
        <p className="text-gray-600 mb-6">
          Fill out the form below to add a new item to your inventory.
        </p>
        <form 
        action={updateItem}
        className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              name="id"
              hidden
              defaultValue={inventory?._id.toString()}
            />
            <input
              type="text"
              id="name"
              defaultValue={inventory?.name}
              name="name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter item name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              defaultValue={inventory?.quantity}
              name="quantity"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter quantity"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description:
            </label>
            <textarea
              id="description"
              defaultValue={inventory?.description}
              name="description"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter a description"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Update Inventory Item
          </button>
          <br></br>
          <br></br>
          <Link href="/">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              View Items
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UpdateInventory;
