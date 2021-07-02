import Taro from "@tarojs/taro";
import BedrockExceptionCode from "../common/bedrockExceptionCode.json";

const TOKEN_HEADER = "Authorization";

export default class ServiceExecutor {
  constructor(host, getUserToken, setUserToken) {
    this.host = host;
    this.getUserToken = getUserToken;
    this.setUserToken = setUserToken;
  }

  execute(service) {
    const { body, url, method } = service;
    return Taro.request({
      data: JSON.stringify(body),
      header: this.generateRequestHeader(this.getUserToken),
      url: this.host + url,
      method,
    })
      .then((rawResponse) => {
        return new Promise((resolve, reject) =>
          this.processServerResponse(
            rawResponse,
            resolve,
            reject,
            this.getUserToken,
            this.setUserToken
          )
        );
      })
      .catch((exception) => {
        Taro.showToast({
          title: "伺服器出錯",
          icon: "none",
        });
      });
  }

  generateRequestHeader(getUserToken) {
    return {
      Authorization: `Bearer ${getUserToken()}`,
    };
  }

  getHeaderToken(rawResponse, getUserToken, setUserToken) {
    const { header } = rawResponse;
    const token = header[TOKEN_HEADER];
    if (token) {
      setUserToken(token);
    }
  }

  processServerResponse(
    rawResponse,
    resolve,
    reject,
    getUserToken,
    setUserToken
  ) {
    const { statusCode } = rawResponse;
    this.getHeaderToken(rawResponse, getUserToken, setUserToken);
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
