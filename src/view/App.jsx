/**
 * Created by ddxx on 2017/5/11.
 */

import React from 'react';
import ReactDom from 'react-dom';
import { LayoutDemo } from './LayoutDemo.jsx';

class App extends React.Component {

    constructor() {
        super();


    }



    render() {

        return (
            <div>
               <LayoutDemo/>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'));