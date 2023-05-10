import React, { useState, useCallback } from "react";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../photos";
import { getGallery, getLinks, getSteps } from "../servicees";

const About = ({ gallery, text }) => {
  console.log(photos);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div id="about">
      <div className="flex flex-col-reverse md:flex-row my-10 lg:px-10 px-5 h-full">
        <div className="images w-full md:w-3/6 h-inherit  ">
          <Gallery photos={gallery} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={gallery.map((x) => ({
                    ...x,

                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
        <div className="images w-full md:w-3/6 h-full   px-5 md:px-10 py-5">
          <div>
            <span
              className="text-4xl font-bold
            "
            >
              About Us
            </span>
            <div className="w-12 h-1 bg-orange-500" />
          </div>
          {/* Passage Section */}
          <div className="md:p-5">
            <p>
              {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate dicta sed dignissimos, cum est corrupti, mollitia
              voluptatibus at et numquam iusto! Necessitatibus, architecto
              neque. Nihil praesentium est aperiam ipsam provident. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Officia nam tempora,
              ut ratione maxime, laborum corrupti dignissimos eaque consectetur
              accusantium, voluptatibus assumenda necessitatibus est officiis
              nihil aperiam sint adipisci facilis. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Tempora ex amet, aliquid deserunt
              aspernatur quis eveniet dolor quam hic autem explicabo voluptatum
              labore necessitatibus fugiat! Repellendus dolorum nobis laborum
              obcaecati. */}
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
