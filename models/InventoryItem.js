
// InventoryItem.js
import mongoose from 'mongoose';

const inventoryItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  description: { type: String,required: false },
},
{
    timestamps:true,
}

);

const InventoryItem = mongoose.models.InventoryItem || 
mongoose.model('InventoryItem', inventoryItemSchema);

export default InventoryItem;
