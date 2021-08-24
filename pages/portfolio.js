import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Collabs from './/collabs';
import Clients from './/clients';
import Work from './/work';
import Link from 'next/link'

import React, { Component } from "react";
import Expand from 'react-expand-animated';




class Portfolio extends Component {
  constructor() {
    super();

    this.state = {
      work: false,
      clients: false,
      collabs: false
    };

    this.handleClickWork = this.handleClickWork.bind(this);
    this.handleClickClients = this.handleClickClients.bind(this);
    this.handleClickCollabs = this.handleClickCollabs.bind(this);

  }


  handleClickWork() {
    var prevState = this.state;
    if (this.state.work) {
      this.setState({
        work: false,
        clients: prevState.clients,
        collabs: prevState.collabs
      });
    } else {
      this.setState({
        work: true,
        clients: prevState.clients,
        collabs: prevState.collabs
      });
    }
  }

  handleClickClients() {
    var prevState = this.state;
    if (this.state.clients) {
      this.setState({
        work: prevState.work,
        clients: false,
        collabs: prevState.collabs
      });
    } else {
      this.setState({
        work: prevState.work,
        clients: true,
        collabs: prevState.collabs
      });
    }

  }

  handleClickCollabs() {
    var prevState = this.state;
    if (this.state.collabs) {
      this.setState({
        work: prevState.work,
        clients: prevState.clients,
        collabs: false
      });
    } else {
      this.setState({
        work: prevState.work,
        clients: prevState.clients,
        collabs: true
      });
    }

  }


  render() {
    return (
      <div >
        <Head>
          <title>Float.Land</title>
          <meta name="description" content="FLOAT.LAND Portfolio" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
        </Head>

        <div>
          <div className={styles.section}>
            <p onClick={this.handleClickWork}>
              WORK
          </p>
          </div>
          <Expand open={this.state.work} duration={800}>
            <Work />
          </Expand>

          {/* {this.state.work ? <Work /> : null} */}
        </div>
        <div className={styles.section} >
          <p onClick={this.handleClickClients}>
            CLIENTS
          </p>

        </div>
        <Expand open={this.state.clients} duration={800}>
          <Clients />
        </Expand>
        <div className={styles.section} >
          <p onClick={this.handleClickCollabs}>
            COLLABS
          </p>

        </div>
        <Expand open={this.state.collabs} duration={800}>
          <Collabs />
        </Expand>

      </div>


    );
  }

};
export default Portfolio;


