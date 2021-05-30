import React, { useContext, useRef, useState } from "react";
import BlogSidebar from "../../components/blog/BlogSidebar";
import data from "../../data/blog-content/blog-content.json";
// import farm from "../../data/blog-content/blog-content-api.json";
import { ProgressBar } from "react-bootstrap";
import parserHtml from "html-react-parser";
import { Link } from "react-router-dom";
import { FaRss, FaPinterestP, FaVimeoV, FaGoogle } from "react-icons/fa";
import FarmContext from "../../contexts/FarmContext";

const BlogPostContent = () => {

  const inputPart = useRef();
  const [price, setPrice] = useState(0)
  const { farms } = useContext(FarmContext);
  const farm = farms[0];
  const [partLock, setPartLock] = useState(0);
  const [totalPart, setTotalPart] = useState(farm.investmentCost/farm.partPrice);
  const [partUsed, setPartUsed] = useState(3);

  const handleClick = (number) => {
    if((parseFloat(inputPart.current.value) + number) < 0){
      setPartLock(0);
    }else {
      const p = parseFloat(inputPart.current.value);
      ((parseFloat(inputPart.current.value) + number) <= (totalPart - partUsed)) ? setPartLock(p   + number) : setPartLock(p);
      setPrice((p + number)*farm.partPrice);
    }
  }
  const handleChange = ({currentTarget}) => {
    const val = (currentTarget.value == undefined) ?  0 : currentTarget.value;
    
    console.log(currentTarget.value);
    const p = (parseFloat(currentTarget.value) <= (totalPart - partUsed)) ? parseFloat(currentTarget.value) : 0;
    setPartLock(p);
    setPrice(p*farm.partPrice);
  }

  return (
    <div className="dg__blog__area bg--white section-padding--xl">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card">
              <div className="card-header">{farm.name}</div>
              <div className="card-body">
                <h5 className="card-title">{farm.name}</h5>
                <div className="row">
                  <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                    {" "}
                    <img src={data.img} alt="blog images" width="400" />
                  </div>
                  <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                    <h2 className="mb-0">Participer au financement</h2>
                    <p className="mb-0">Prix de la part : {farm.partPrice + " €"}</p>
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
                            Coût total 
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
                          €
                        </span>
                      </div>
                      <div className="mb-2">  
                      <span className="text-success"> Part vendu : {partUsed} </span>
                      <span className="text-dark">- Part restant : {totalPart - partUsed - partLock} </span>
                        <ProgressBar>
                          <ProgressBar
                            striped
                            variant="success"
                            now={(partUsed*100/totalPart)}
                            key={1}
                          />
                          <ProgressBar variant="secondary" now={partLock*100/totalPart} key={2} />
                        </ProgressBar>
                        {partLock > 0 && <span className="fs-6 text-dark mb-0">La barre grise représente les parts que vous êtes en train de réserver</span> }
                      </div>
                      <button className="btn btn-dark"> Investir </button>
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
                      Type d'énergie
                    </th>
                    <td>{farm.energy}</td>
                  </tr>
                  <tr>
                    <th className="px-4" scope="row">
                      Début des travaux
                    </th>
                    <td>{farm.beginAt}</td>
                  </tr>
                  <tr>
                    <th className="px-4" scope="row">
                      {" "}
                      Coût investissement total
                    </th>
                    <td>{farm.investmentCost + " €"}</td>
                  </tr>
                  <tr>
                    <th className="px-4" scope="row">
                      {" "}
                      Nombre d'ordinteurs utilisés
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
                      Bénéfice %{" "}
                    </th>
                    <td className="text-success">{"+" + farm.profitPercent + " %"}</td>
                  </tr>
                  <tr>
                    <th className="px-4" scope="row">
                      {" "}
                      Prix de la part{" "}
                    </th>
                    <td>{farm.partPrice + " €"}</td>
                  </tr>
                </tbody>
              </table>
              <div className="dg__blog__details right--sidebar">
                <blockquote>
                  Le Mimit'Coin c'est génial. A moi la richesse !
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
