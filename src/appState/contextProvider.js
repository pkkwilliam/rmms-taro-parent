import React, { Component } from "react";

export const RmmsContext = React.createContext();

export default class RmmsAppState extends Component {
  state = {
    company: {
      dirty: true,
      id: 0,
    },
  };

  AppStateWrapper = ({ children }) => {
    const { company } = this.state;
    return (
      <RmmsContext.Provider
        value={{
          company: {
            ...company,
          },
        }}
      >
        {children}
      </RmmsContext.Provider>
    );
  };
}
