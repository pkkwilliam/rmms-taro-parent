import Taro from '@tarojs/taro'

export default class ServiceExecutor {

  async execute(service) {
    const {url, method} = service;
    return Taro.request({
      url,method
    }).then(rawResponse => {
      console.log(rawResponse)
      return rawResponse.data.json()
    }).then(
      response => {
        console.log(response)
      }
    )
  }

}