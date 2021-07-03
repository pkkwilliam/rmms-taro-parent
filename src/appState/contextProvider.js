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
      },
      mainMenuButtonRow: { buy: {}, rent: {} },
      style: { primary: "", secondary: "" },
    },
    deviceInfo: {
      dirty: true,
    },
    favorite: {
      dirty: true,
      favorites: [],
    },
    item: { dirty: true, items: [] },
    shortTermMemory: {
      currentCategoryId: 0,
      currentSegmentTypeIndex: 0,
    },
    userProfile: {
      dirty: true,
      userProfile: {},
    },
  };

  AppStateWrapper = ({ children }) => {
    const {
      category,
      company,
      companyCustomise,
      deviceInfo,
      favorite,
      item,
      shortTermMemory,
      userProfile,
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
          deviceInfo: {
            ...deviceInfo,
            setDeviceInfo: this.setDeviceInfo,
          },
          favorite: {
            ...favorite,
            setFavorites: this.setFavorites,
          },
          item: {
            ...item,
            setItems: this.setItems,
          },
          shortTermMemory: {
            ...shortTermMemory,
            setShortTermMemory: this.setShortTermMemory,
          },
          userProfile: {
            ...userProfile,
            setUserProfile: this.setUserProfile,
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

  setDeviceInfo = (deviceInfo) => {
    this.setState({
      deviceInfo: {
        deviceInfo,
        dirty: false,
      },
    });
  };

  setFavorites = (favorites) => {
    this.setState({
      favorite: {
        dirty: false,
        favorites,
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

  setUserProfile = (userProfile) => {
    this.setState({
      userProfile: {
        dirty: false,
        userProfile,
      },
    });
  };
}
