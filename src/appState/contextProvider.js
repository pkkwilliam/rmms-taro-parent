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
    companyCustomise: {
      dirty: true,
      landingPage: {
        banners: [],
        bottomList: [],
        carousel: [],
        mainMenuButtons: [],
      },
      style: { primary: "", secondary: "" },
    },
    item: { dirty: true, items: [] },
    shortTermMemory: {
      currentCategoryId: 0,
      currentSegmentTypeIndex: 0,
    },
  };

  AppStateWrapper = ({ children }) => {
    const {
      category,
      company,
      companyCustomise,
      item,
      shortTermMemory,
    } = this.state;
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
          companyCustomise: {
            ...companyCustomise,
            setCompanyCustomise: this.setCompanyCustomise,
          },
          item: {
            ...item,
            setItems: this.setItems,
          },
          shortTermMemory: {
            ...shortTermMemory,
            setShortTermMemory: this.setShortTermMemory,
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
        ...state.category,
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

  setCompanyCustomise = (companyCustomise) => {
    this.setState((state) => ({
      companyCustomise: {
        ...companyCustomise,
        dirty: false,
      },
    }));
  };

  setItems = (items) => {
    this.setState({
      item: {
        dirty: false,
        items,
      },
    });
  };

  setItems = (items) => {
    this.setState({
      item: {
        dirty: false,
        items,
      },
    });
  };

  setShortTermMemory = (shortTermMemory) => {
    this.setState({
      shortTermMemory,
    });
  };
}
