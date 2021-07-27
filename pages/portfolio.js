import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import FadeIn from 'react-fade-in';
import Collabs from './/collabs';
import Clients from './/clients';
import React, { Component } from "react";

import {Button, Collapse} from 'react-bootstrap'



class Duh extends Component {
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

  
    handleClickWork(){
      var prevState = this.state;
      if(this.state.work){
        this.setState({
          work: false,
          clients: prevState.clients,
          collabs: prevState.collabs
        });
      }else{
        this.setState({
          work: true,
          clients: prevState.clients,
          collabs: prevState.collabs
        });
      }
    }

    handleClickClients() {
      var prevState = this.state;
      if(this.state.clients){
        this.setState({
          work: prevState.work,
          clients: false,
          collabs: prevState.collabs
        });
      }else{
        this.setState({
          work: prevState.work,
          clients: true,
          collabs: prevState.collabs
        });
      }
      
    }

    handleClickCollabs() {
      var prevState = this.state;
      if(this.state.collabs){
        this.setState({
          work: prevState.work,
          clients: prevState.clients,
          collabs: false
        });
      }else{
        this.setState({
          work: prevState.work,
          clients: prevState.clients,
          collabs: true
        });
      }
      
      }
  
    render() {
      return (
        <div className={styles.container}>
          <Head>
          <title>Float.Land</title>
          <meta name="description" content="FLOAT.LAND Portfolio" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />      
        </Head>
        <div className={styles.above}>
        <h1 className={styles.title}>
        <Link href="/">
              FLOAT.LAND 
              </Link>
              <i>
               .Portfolio
              </i>
        </h1>
      </div>
            <div>
            <h1 className={styles.title} onClick={this.handleClickWork}>
                Work
                {this.state.work ? <Clients /> : null}
            </h1>
            </div>
            <div>
            <h1 className={styles.title} onClick={this.handleClickClients}>
                Clients
                {this.state.clients ? <Clients /> : null}
            </h1>
            </div>
            <div>
            <h1 className={styles.title} onClick={this.handleClickCollabs}>
                Collabs
                {this.state.collabs ? <Collabs /> : null}
            </h1>
            </div>
        </div>
        
      );
    }
    
};
export default Duh;

  
  