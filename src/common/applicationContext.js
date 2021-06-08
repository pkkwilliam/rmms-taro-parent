export default class ApplicationContext {
  get host() {
    return this.mock
      ? "http://localhost:2081"
      : "https://api.rmms.goowhere.com";
  }

  get mock() {
    return true;
  }
}
