import React from "react";
import { buyCake, buyIceCream } from "../redux";
import { connect } from "react-redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>ItemContainer Component: {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Item</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return {
    numOfCakes: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const itemDispatch = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyCake: itemDispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
