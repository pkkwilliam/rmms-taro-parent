export default class ApplicationContext {
  get host() {
    return process.env.SERVICE_URL;
  }

  get mock() {
    return false;
  }
}
