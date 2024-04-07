import React, {useState} from 'react';
import {Link, Outlet} from "react-router-dom";
// @ts-ignore
import {adminRoutes} from '@packages/shared/src/routes/admin'
 
// import AppLayout from '@packages/shared/src/components/Layout'

export const App = () => {

    return (
        <div data-testid={'App.DataTestId'}>
            {/*<h1>PAGE</h1>*/}
            {/*
            */}
            <Link to={adminRoutes.about}>ABOUT</Link>
            {/*<br/>*/}
            {/*<Link to={shopRoutes.main}>SHOP</Link>*/}
            {/*<AppLayout />*/}
            <Outlet/>
        </div>
    );
};

//npm run start -w admin 
//npm run start -workspaces