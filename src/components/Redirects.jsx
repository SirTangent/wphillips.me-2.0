import React, {Fragment, useEffect} from 'react';
import {Route} from "react-router-dom";

const Redirects = (props) => {

    const redirects = [];

    return (
        <Fragment>
            {
                redirects.map(({from, to}, id) => (
                    <Route path={from}>
                        <Redirect url={to}/>
                    </Route>
                ))
            }
        </Fragment>
    )
}

const Redirect = (props) => {
    const {url} = props;

    useEffect(() => {
        window.location.href = url;
    })

    return (
        <div className="px-12 py-4">
            <h2>Redirecting to external resource...</h2>
        </div>
    )
}

export default Redirects;
