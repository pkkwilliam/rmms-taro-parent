import Taro from "@tarojs/taro";
import BedrockExceptionCode from "../common/bedrockExceptionCode.json";

export default class ServiceExecutor {
  constructor(host) {
    this.host = host;
  }

  execute(service) {
    const { body, url, method } = service;
    return Taro.request({
      data: JSON.stringify(body),
      url: this.host + url,
      method,
    })
      .then((rawResponse) => {
        return new Promise((resolve, reject) =>
          this.processServerResponse(rawResponse, resolve, reject)
        );
      })
      .catch((exception) => {
        Taro.showToast({
          title: "伺服器出錯",
          icon: "none",
        });
      });
  }

  processServerResponse(rawResponse, resolve, reject) {
    const { statusCode } = rawResponse;
    if (statusCode >= 200 && statusCode < 300) {
      return resolve(this.process2xxResponse(rawResponse));
    } else if (statusCode >= 400 && statusCode < 500) {
      Taro.showToast({
        title: BedrockExceptionCode[rawResponse.data.errorCode],
        icon: "none",
      });
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
