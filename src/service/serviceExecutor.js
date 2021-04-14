import Taro from "@tarojs/taro";

export default class ServiceExecutor {
  constructor(host) {
    this.host = host;
  }

  execute(service) {
    const { url, method } = service;
    return Taro.request({
      url: this.host + url,
      method,
    })
      .then((rawResponse) => {
        return this.processServerResponse(rawResponse);
      })
      .catch((exception) => {
        console.log(exception);
      });
  }

  processServerResponse(rawResponse) {
    const { statusCode } = rawResponse;
    if (statusCode >= 200 && statusCode < 300) {
      return this.process2xxResponse(rawResponse);
    } else if (statusCode >= 400 && statusCode < 500) {
    } else if (statusCode >= 500) {
    } else {
    }
  }

  process2xxResponse(rawResponse) {
    const { statusCode } = rawResponse;
    if (statusCode === 200) {
      return rawResponse.data;
    }
  }

  process3xxResponse(rawResponse) {}

  process4xxResponse(rawResponse) {}

  process5xxResponse(rawResponse) {}
}
