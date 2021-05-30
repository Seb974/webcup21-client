import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";
import parserHtml from "html-react-parser";

const PopUp = ({data}) => {
  
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(data);
    return (<>
        <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <p className="text-center m-0 ">Ferme de minage : <strong>{data.name}</strong> ! </p> 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Profitez des parts que vous vends la société afin de pouvoir en degager des bénéfices et plein d'autre avantage ! 
          </p>
          <p className="mb-0">Gain potentiel : <span className="text-success"> + {data.profitPercent * 100} % </span> </p>
          <p className="mb-0">Type d'énergie : <strong>{data.energy} </strong></p>
        </Modal.Body>
        <Modal.Footer>
          <NavLink to={"/blog-post/" + data.id}>
          <button className="btn btn-dark">J'investis</button>
          </NavLink>
            

        </Modal.Footer>
      </Modal>
    </>  );
}   
 
export default PopUp;