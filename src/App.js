/*
8888888b.                             888      888888  .d8888b.
888   Y88b                            888        "88b d88P  Y88b
888    888                            888         888 Y88b.
888   d88P  .d88b.   8888b.   .d8888b 888888      888  "Y888b.
8888888P"  d8P  Y8b     "88b d88P"    888         888     "Y88b.
888 T88b   88888888 .d888888 888      888         888       "888
888  T88b  Y8b.     888  888 Y88b.    Y88b.       88P Y88b  d88P
888   T88b  "Y8888  "Y888888  "Y8888P  "Y888      888  "Y8888P"
                                                .d88P
                                              .d88P"
                                             888P"
*/
import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
class App extends Component {
  render() {
    return (
      <div>
           <Layout>
               <BurgerBuilder />
           </Layout>
      </div>
    );
  }
}

export default App;
