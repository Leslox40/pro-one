"use client";

import { useState } from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CustomModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '70%',
      maxWidth: '800px',
      background: 'rgba(0, 0, 0, 0.8)',
      border: 'none',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
      color: '#fff',
      zIndex: '10000000000000000000000',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: 9999999999999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <button onClick={closeModal}>Close Modal</button>
        <Carousel showArrows={true}>
          <div>
            <img src="/images/about/1.png" alt="Image 1" />
            <p className="legend">Image 1</p>
          </div>
          <div>
            <img src="/images/about/1.png" alt="Image 2" />
            <p className="legend">Image 2</p>
          </div>
          <div>
            <img src="/images/about/1.png" alt="Image 3" />
            <p className="legend">Image 3</p>
          </div>
        </Carousel>
      </Modal>
    </div>
  );
};

export default CustomModal;
