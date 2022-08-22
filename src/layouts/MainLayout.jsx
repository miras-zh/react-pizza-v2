import React from "react";
import Header from "../components/Header";

const MainLayout = ({children}) => {

    return(
        <>
            <div className="wrapper">
                <Header />
                <div className="content">
                    {children}
                </div>
            </div>
        </>
    )
}

export default  MainLayout;