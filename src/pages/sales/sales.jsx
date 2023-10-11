import { useState } from "react";
import AddSales from "../../modals/addSale/addSale";

export default function SalesPage() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>SALES</h1>
      <button onClick={() => setShow(true)}>Add Item</button>
      <AddSales onClose={() => setShow(false)} show={show} />
    </div>
  );
}
