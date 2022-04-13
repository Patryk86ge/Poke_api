import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";

const ModalPokemon = ({ pokemon }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Viev
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h2>{pokemon.name}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={"section__allPokeBox container"}>
                  <div
                    key={pokemon.id}
                    className={"section__pokeBox section__ModalPokeBox"}>
                    <div className="section__pokeBoxImg">
                      <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}/>
                    </div>
                    <div className="section__specification">
                      <p>height: {pokemon.height}</p>
                      <p>weight: {pokemon.weight}</p>
                      <p>order: {pokemon.order}</p>
                    </div>
                  </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            variant="primary"
          >
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalPokemon;

