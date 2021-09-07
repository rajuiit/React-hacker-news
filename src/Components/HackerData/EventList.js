
import React from "react";
import Card from "./Card";

export default function EventsList(props) {
  const eventsList = props.data.map(event => (
    <Card
      id={event.id}
      title={event.title}
      time={event.time}
      description={event.description}
    />
  ));

  return <div>{eventsList}</div>;
}






 //Develop by Md. Omar Faruk Tutul