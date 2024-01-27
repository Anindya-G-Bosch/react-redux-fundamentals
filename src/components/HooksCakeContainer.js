import React from "react";
import { buyCake } from "../redux";
import { useDispatch, useSelector } from "react-redux";

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>HooksCakeContainer Component - Number of cakes: {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
