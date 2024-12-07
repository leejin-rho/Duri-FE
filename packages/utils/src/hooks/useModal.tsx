import { useEffect, useRef, useState } from 'react';

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpenModal]);

  const toggleModal = () => {
    setIsOpenModal((prevIsOpen) => {
      if (!prevIsOpen) document.body.style.overflowY = 'hidden';
      else document.body.style.overflowY = 'auto';
      return !prevIsOpen;
    });
  };

  const openModal = () => {
    document.body.style.overflowY = 'hidden';
    setIsOpenModal(true);
  };

  const closeModal = () => {
    document.body.style.overflowY = 'auto';
    setIsOpenModal(false);
  };

  const handleOutsideClick = (e: Event) => {
    const current = modalRef.current;
    if (isOpenModal && current && !current.contains(e.target as Node)) {
      document.body.style.overflowY = 'auto';
      setIsOpenModal(false);
    }
  };

  return { isOpenModal, modalRef, toggleModal, closeModal, openModal };
};
