import React from "react";

export interface Transport {
    nameDriver: string
    phoneNumber: string
    categoryTS: string
    coordinates: string
  }

export interface IAppContext {
    pages: string[]
    category: string[],
    transports: Transport[]
}

const defaultContext = {
    pages: [],
    category: [],
    transports: []
  }

export const AppContext = React.createContext<IAppContext>(defaultContext);