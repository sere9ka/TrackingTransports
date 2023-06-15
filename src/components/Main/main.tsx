import React, { useContext, useState } from "react";
import { AppContext, Transport } from "../../context/AppContext";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const Main = () => {

    const app = useContext(AppContext)
    
    return (
        <div className="main">
            <Tabs>
                <TabList>
                    {
                        app.pages.map((page: string) => {
                            return (
                                <Tab>{page}</Tab>
                            )
                        })
                    }
                </TabList>
                <TabPanel>
                    <h2>Список всех транспортных средств
                    </h2>
                    {
                        app.transports.map((transport: Transport) => {
                            return (
                                <p>{transport.nameDriver}</p>
                            )
                        })
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}