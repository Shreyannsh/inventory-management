import { useEffect } from "react";
import "./homePage.css";
import { useDispatch } from "react-redux";

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "IS_ACTIVE", payload: "" });
  }, []);

  return (
    <div className="homePage">
      <div>
        <h1>Welcome to Inventory Management</h1>
        <p className="para1">
          Inventory managment provides you features to have control over your
          inventory items, item sales and there stock data.
        </p>
      </div>
      <div className="lowerSection">
        <div className="eachSection">
          <h3>Inventory</h3>
          <p>
            - A complete list of all available items in inventory will be listed
            here.
          </p>
          <p>- A new item can be added with category,price and quantity.</p>
          <p>- Item can be removed and edited if required </p>
        </div>
        <div className="eachSection">
          <h3>Sales</h3>
          <p>- A complete list of all sold items will be listed here.</p>
          <p>- A new sale can be added.</p>
          <p>- Filter option is available date wise </p>
        </div>
        <div className="eachSection">
          <h3>Reports</h3>
          <p>- Option to select two type of reports is available.</p>
          <p>- Inventory data and sales data</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
