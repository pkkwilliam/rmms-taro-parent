import React, { Component } from "react";

export const RmmsContext = React.createContext();

export default class RmmsAppState extends Component {
  state = {
    category: {
      categories: [],
      dirty: true,
    },
    company: {
      dirty: true,
      id: 0,
    },
  };

  AppStateWrapper = ({ children }) => {
    const { category, company } = this.state;
    return (
      <RmmsContext.Provider
        value={{
          category: {
            ...category,
            setCategories: this.setCategories,
          },
          company: {
            ...company,
            setCompany: this.setCompany,
          },
        }}
      >
        {children}
      </RmmsContext.Provider>
    );
  };

  setCategories = (categories) => {
    this.setState((state) => ({
      category: {
        categories,
        dirty: false,
      },
    }));
  };

  setCompany = (company) => {
    this.setState((state) => ({
      company: {
        ...company,
        dirty: false,
      },
    }));
  };
}
