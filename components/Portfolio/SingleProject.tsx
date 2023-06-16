"use client";

import { useState } from 'react';
import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
 

const SingleProject = ({ project }: { project: Project }) => {

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

  const { title, image, paragraph, tags } = project;
  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link href="/services" className="relative block h-[220px] w-full" onClick={openModal}>
          <span className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <h3>
            <Link
              href="/services"
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
              onClick={openModal}
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
        </div>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <button onClick={closeModal}>X</button>
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
    </>
  );
};

export default SingleProject;
