import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  // const navigate = useNavigate("/welcome");
  //if needed to redirect use the code below
  // const navigate = useNavigate("/welcome", { replace: true });
  //if need to got to previous page,we can use numbers
  // const navigate = useNavigate(-1); //backward navigation , -2 :> double bacward navigation
  // const navigate = useNavigate(1); //forward navigation
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
