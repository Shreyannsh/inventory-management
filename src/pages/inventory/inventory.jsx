import { useState } from "react";
import AddItem from "../../modals/addItem/addItem";

export default function InventoryPage() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>INVENTORY</h1>
      <button onClick={() => setShow(true)}>Add Item</button>
      <AddItem onClose={() => setShow(false)} show={show} />
    </div>
  );
}
