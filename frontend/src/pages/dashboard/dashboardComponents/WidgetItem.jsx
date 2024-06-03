const WidgetItem = ({ heading, bookings,color,Icon}) => {

  return (
    <article className="widget-item">
      <div className="widget-info">
        <p>{heading}</p>
        <h4>{bookings}</h4>
      </div>
      <div id="widget-icon" style={{background:color}}>
       <Icon />
      </div>
    </article>
  );
};

export default WidgetItem;
