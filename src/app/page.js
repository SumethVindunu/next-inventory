
import { getAllItems } from "../../utlis/actions";
import Link from 'next/link';
export default async function Home() {
  const items = await getAllItems();

  return (
      <>
          <h1 className="text-3xl font-semibold mb-4">Product Inventory</h1>
          <Link href="/inventory">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mb-4">
              Add New Item
            </button>
          </Link>          
          <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden">
              <thead>
                  <tr className="bg-gray-100">
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Product Name</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Quantity</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Description</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {items.map((item) => (
                      <tr key={item.id} className="border-t hover:bg-gray-50">
                          <td className="py-3 px-4 text-sm text-gray-700">{item.name}</td>
                          <td className="py-3 px-4 text-sm text-gray-700">{item.quantity}</td>
                          <td className="py-3 px-4 text-sm text-gray-700">{item.description}</td>
                          <td className="py-3 px-4 text-sm space-x-2">
                              <button className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600">Edit</button>
                              <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600">Delete</button>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </>
  );
}
