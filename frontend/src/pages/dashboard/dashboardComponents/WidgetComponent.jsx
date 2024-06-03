import WidgetItem from "./WidgetItem"

const WidgetComponent = ({widgetData}) => {
  return (
     <>
        {widgetData.map((link, index) => (
        <WidgetItem
          key={index}
          {...link}
        />
      ))}
     </>
  )
}

export default WidgetComponent