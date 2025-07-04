import "./Items.css";

export const Items = (props) => {
  return (
    <div>
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};
