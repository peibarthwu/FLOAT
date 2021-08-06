// import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import FadeIn from 'react-fade-in';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '60%',
        background: '#000000',
        color: '#777777',
        opacity: '1',
    },
};

const data = {
    proj1: {
        description: 'this is a description for project one',
        images: 'none',
    },
    proj2: {
        description: 'this is a description for project two',
        images: 'none',
    },
    proj3: {
        description: 'this is a description for project one',
        images: 'none',
    }
}

export default function Card() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    var [modalID, setID] = React.useState(null);


    function openModal() {
        setIsOpen(true);
    }

    function setID(id) {
        modalID = id;
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className={styles.main} id="content">
            <FadeIn delay={200} transitionDuration={600}>
                <div className={`${styles.paralax} ${styles.project}`}
                    style={{ backgroundImage: `url("/assets/work/vr_screensavers.jpg")` }}
                    id="floatmuseum"
                >
                    <div className={styles.overlay} >
                        <h2 onClick={openModal} onClick={setID('proj1')}>
                            FLOAT Museum @ SFMOMA
                        </h2>
                    </div>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                        ariaHideApp={false}
                    >
                        <FadeIn delay={200} transitionDuration={600}>
                            <button onClick={closeModal}>close</button>
                            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>FLOAT Museum @ SFMOMA</h2>
                            <div>
                                First seen at SFMOMA, the FLOAT Museum radically transforms the museum experience.
            </div>
                        </FadeIn>
                    </Modal>
                </div>
            </FadeIn>
        </div>
    );
}