export default class ApplicationContext {
  get host() {
    return this.mock
      ? "http://192.168.31.164:8081/"
      : "http://192.168.31.164:8081/";
  }

  get mock() {
    return true;
  }
}
