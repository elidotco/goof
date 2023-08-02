/* eslint-disable @next/next/no-img-element */
import { async } from "@firebase/util";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import {
  FaAppStore,
  FaFacebook,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { db } from "../firebase";
import ReviewForm from "./ReviewForm";

const Footer = () => {
  const [oo, setOo] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const formcheck = (name, email, message) => {
    const test =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email && test.test(email)) {
      if (name && message) {
        return true;
      } else false;
    }
  };

  const sub = async () => {
    getDoc(collection(db, "cities")).then((data) => console.log(data.data));
    const querySnapshot = await getDocs(collection(db, "reviews"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  };

  const handlesub = async () => {
    if (formcheck(name, email, message)) {
      addDoc(collection(db, "reviews"), {
        name,
        email,
        message,
      });
      console.log(name, email, message);
      setIsOpen(false);
      setEmail("");
      setName("");
      setMessage("");
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const menu = [
    {
      name: "Home",
      path: "/#home",
    },
    {
      name: "About Us",
      path: "/#about",
    },
    {
      name: "How it works",
      path: "/#how-it-works",
    },
    {
      name: "Contact Us",
      path: "/#contact",
    },
  ];
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed  inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0  overflow-y-auto">
            <div className="flex h-screen items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform  rounded-2xl bg-white px-6 h-full text-left align-middle shadow-xl transition-all">
                  {" "}
                  <ReviewForm close={closeModal} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className="relative bottom-0">
        <div className="footer items-center justify-center flex flex-col py-10"></div>
        <div className="bg-black flex items-center flex-col px-10 gap-5 py-10 text-white md:justify-between md:flex-row">
          <div className="md:w-2/5 w-full">
            <div className="px-5 flex items-center text-white uppercase font-bold text-2xl">
              Go<span className="text-green-400">fo</span>od
            </div>
            <div className="py-5">
              GoFood is the brain child of Lac global limited as a means to help
              Deliver health food Fast visit{" "}
              <a
                href="https://www.lacgloballimited.com"
                className="text-blue-400 cursor-pointer"
              >
                {" "}
                Lacgloal{" "}
              </a>
              for more info
            </div>
            <div className="flex flex-row gap-x-4">
              <a
                href="https://web.facebook.com/gowasteapp"
                className="p-2 rounded-full bg-blue-700"
              >
                <FaFacebookF size={25} color="white" />
              </a>
              <a
                href="https://www.instagram.com/gowaste_app/"
                className="p-2 rounded-full bg-white"
              >
                <FaInstagram size={25} color="pink" />
              </a>
              <a
                href="https://twitter.com/Gowaste_App"
                className="p-2 rounded-full bg-blue-300"
              >
                <FaTwitter size={25} color="light blue" />
              </a>
            </div>
          </div>
          <div className="w-3/5 flex md:flex-row flex-col gap-10 justify-between items-center">
            <div className="flex flex-col gap-2">
              {menu.map((item, index) => (
                <a href={item.path} key={index}>
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <a href="#"></a>
              <a href="#">Partner with us</a>
              <a
                href="https://www.lacgloballimited.com/projects/gofoodterms"
                target="_blank"
                rel="noreferrer"
              >
                Terms and Conditions
              </a>
              <a
                href="https://www.lacgloballimited.com/projects/foodprivacy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
            </div>
            <div>
              <p>info@lacgloballimited.com</p>
              <p>number</p>
              <span className="cursor-pointer" onClick={openModal}>
                Write a review
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
