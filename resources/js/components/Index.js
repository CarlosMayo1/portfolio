import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/hoc/Layout/Layout';
import Cards from './container/Cards/Cards';

export default class Index extends Component {
   
    render() {
        return (
           <div>
               <Layout>
                   <div className="container">
                       <Cards/>
                    </div>
               </Layout>
           </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
