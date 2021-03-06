import React, { useContext, useRef, useState } from "react";
import BlogSidebar from "../../components/blog/BlogSidebar";
import data from "../../data/blog-content/blog-content.json";
// import farm from "../../data/blog-content/blog-content-api.json";
import { ProgressBar } from "react-bootstrap";
import parserHtml from "html-react-parser";
import { Link } from "react-router-dom";
import { FaRss, FaPinterestP, FaVimeoV, FaGoogle } from "react-icons/fa";
import FarmContext from "../../contexts/FarmContext";
import { isDefined } from "../../helpers/utils";
import api from "../../config/api";
import PaymentForm from "../../components/payment/PaymentForm";

const BlogPostContent = () => {
  const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
  const [dispo, setDispo] = useState(false);
  const inputPart = useRef();
  const [price, setPrice] = useState(0)
  const { farms } = useContext(FarmContext);
  const farm = farms.find(farm => farm.id === parseInt(id));
  const [partLock, setPartLock] = useState(0);
  const [partUsed, setPartUsed] = useState(Math.floor(Math.random()*10000) + 1000);

  
  const handleClick = (number) => {
    if((parseFloat(inputPart.current.value) + number) < 0){
      setPartLock(0);
      setDispo(false);
    }else {
      const p = parseFloat(inputPart.current.value);
      
      ((parseFloat(inputPart.current.value) + number) <= ((farm.investmentCost / farm.partPrice) - partUsed)) ? setPartLock(p   + number) : setPartLock(p);
      setPrice((p + number)*farm.partPrice);
      setDispo(true);
    }
  }
  const handleChange = ({currentTarget}) => {
    const val = (currentTarget.value == undefined) ?  0 : currentTarget.value;
    const p = (parseFloat(currentTarget.value) <= ((farm.investmentCost / farm.partPrice) - partUsed)) ? parseFloat(currentTarget.value) : 0;
    setPartLock(p);
    setPrice(p*farm.partPrice);
    setDispo(p != 0 ? true : false);
  }
  return !isDefined(farm) ? <></> : (
    <div className="dg__blog__area bg--white section-padding--xl">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card">
              <div className="card-header">{ farm.name }</div>
              <div className="card-body">
                <h5 className="card-title">{ farm.name }</h5>
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                    {" "}
                    <img  src={isDefined(farm.picture) ? api.API_DOMAIN + "/uploads/pictures/" + farm.picture.filePath : data.img} alt="blog images" width="400" />
                  </div>
                  <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                    <h2 className="mb-0">Participer au financement</h2>
                    <p className="mb-0">Prix de la part : { farm.partPrice + " ???" }</p>
                    <form action="">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            Nombre de part
                          </span>
                          <span
                            className="input-group-text btn btn-dark rounded-0"
                            id="basic-addon1"
                            onClick={() => handleClick(-1)}
                          >
                            -
                          </span>
                        </div>
                        <input
                          ref={inputPart}
                          type="text"
                          className="form-control text-center"
                          value={partLock}
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          onChange={handleChange}
                        />
                        <span
                          className="input-group-text btn btn-dark rounded-0"
                          id="basic-addon1"
                          onClick={() => handleClick(1)}
                        >
                          +
                        </span>
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            Co??t total 
                          </span>
                          <span
                            className="input-group-text"
                          > 
                            {price}
                          </span>
                        </div>
                        <span
                          className="input-group-text"

                        >
                          ???
                        </span>
                      </div>
                      <div className="mb-2">  
                      <span className="text-dark"> Part d??j?? vendu : {partUsed} /  {farm.investmentCost / farm.partPrice} </span>
                        <ProgressBar>
                          <ProgressBar
                            striped
                            variant="success"
                            now={(partUsed*100/(farm.investmentCost / farm.partPrice))}
                            key={1}
                          />
                          <ProgressBar variant="secondary" now={partLock*100/(farm.investmentCost / farm.partPrice)} key={2} />
                        </ProgressBar>
                        {partLock > 0 && <span className="fs-6 text-dark mb-0">La barre grise repr??sente les parts que vous ??tes en train de r??server</span> }
                      </div>
                      <PaymentForm name="Investir" amount={price} available={dispo} />
                    </form>
                  </div>
                </div>

                <p className="card-text">{parserHtml(farm.description)}</p>
              </div>
              <table className="table table-striped px-3">
                <thead>
                  <tr>
                    <th className="px-4" scope="col" colSpan="4">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="px-4" scope="row">
                      Type d'??nergie
                    </th>
                    <td>{ farm.energy }</td>
                  </tr>
                  <tr>
                    <th className="px-4" scope="row">
                      D??but des travaux
                    </th>
                    <td>{ farm.beginAt }</td>
                  </tr>
                  <tr>
                    <th className="px-4" scope="row">
                      {" "}
                      Co??t investissement total
                    </th>
                    <td>{farm.investmentCost + " ???"}</td>
                  </tr>
                  <tr>
                    <th className="px-4" scope="row">
                      {" "}
                      Nombre d'ordinteurs utilis??s
                    </th>
                    <td>{farm.computer}</td>
                  </tr>
                  <tr>
                    <th className="px-4" scope="row">
                      {" "}
                      Type de puissance{" "}
                    </th>
                    <td>{farm.power} </td> 
                  </tr>
                  <tr>
                    <th className="px-4" scope="row">
                      {" "}
                      Profit journalier
                    </th>
                    <td>{farm.dailyProfit}</td>
                  </tr>
                  <tr>
                    <th className="px-4" scope="row">
                      {" "}
                      B??n??fice %{" "}
                    </th>
                    <td className="text-success">{"+" + farm.profitPercent*100 + " %"}</td>
                  </tr>
                  <tr>
                    <th className="px-4" scope="row">
                      {" "}
                      Prix de la part{" "}
                    </th>
                    <td>{farm.partPrice + " ???"}</td>
                  </tr>
                </tbody>
              </table>
              <div className="dg__blog__details right--sidebar">
                <blockquote>
                  Le Mimit'Coin c'est g??nial. A moi la richesse !
                  <span>B. Narbe</span>
                </blockquote>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40"> */}
          {/* sidebar */}
          {/* <BlogSidebar />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogPostContent;
