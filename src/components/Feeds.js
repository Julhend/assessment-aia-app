import React from "react";
import "./Box.css";
import axios from 'axios';
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import Pagination from './Pagination'

const Feeds = () => {
  const [image, setImage] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  useEffect(() => {
    getData()
  }, [image]

  )
  const getData = async () => {
    await axios.get(`https://assesment-aia-api.herokuapp.com/feeds?page=${page}`)
      .then(res => {
        setImage(res.data.photos.photo)
        setPage(res.data.photos.page)
        setTotalPage(res.data.photos.pages)
      })
  }

  const pages = [];
  for (var i = 0; i < totalPage; i++) {
    pages.push(<Pagination page={i + 1} />)
  }

  const addPage = () => {
    const nextPage = page + 1
    setPage(nextPage)
    getData()

  }


  const renderCard = (card, index) => {
    const srcPath = 'https://farm' + card.farm + '.staticflickr.com/' + card.server + '/' + card.id + '_' + card.secret + '.jpg';

    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src={srcPath} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  };

  return <div>
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      {pages.map(_ => _)}
    </div>
    <button onClick={() => addPage()}>+</button>{page}<button>-</button>

    <div className="grid">
      {image.map(renderCard)}
    </div>
  </div>;
};

export default Feeds;
