import React from "react";
import "./Box.css";
import { Card } from "react-bootstrap";

const Feeds = () => {
  const cardInfo = [
    {
      image: "https://i.pinimg.com/originals/86/67/d3/8667d39a220e896476d35e57b66a926d.jpg",
      title: "Eren Yaegeh",
      text: "THE GOAT",
    },
    {
      image: "https://i.pinimg.com/originals/9c/fd/82/9cfd82435cd64fad07e74cdeeb434a55.png",
      title: "Mikasa Ackerman",
      text: "THE TRUE GOAT",
    },
    {
      image: "https://i.pinimg.com/236x/26/92/f6/2692f64ac5f78dbddad9a305320c2ba2.jpg",
      title: "Levi Ackerman",
      text: "THE TRUE GOAT",
    },
    {
      image: "https://i.pinimg.com/236x/82/d8/a1/82d8a11971397d7e28c605fd745aec30.jpg",
      text: "THE TRUE GOAT",
    },
    {
      image: "https://i.pinimg.com/originals/9c/fd/82/9cfd82435cd64fad07e74cdeeb434a55.png",
      title: "Mikasa Ackerman",
      text: "THE TRUE GOAT",
    },
    {
      image: "https://i.pinimg.com/originals/9c/fd/82/9cfd82435cd64fad07e74cdeeb434a55.png",
      title: "Mikasa Ackerman",
      text: "THE TRUE GOAT",
    },

  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default Feeds;
