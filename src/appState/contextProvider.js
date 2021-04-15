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
    item: { items: [] },
  };

  AppStateWrapper = ({ children }) => {
    const { category, company, item } = this.state;
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
          item: {
            ...item,
            setItems: this.setItems,
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

  setItems = (categoryId, item) => {
    let stateItems = this.state.item.items;
    stateItems[categoryId] = item;
    this.setState((state) => ({
      item: {
        ...state.item,
        items: stateItems,
      },
    }));
  };
}
