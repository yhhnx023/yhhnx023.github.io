function ajaxPost ( url , data , fnSucceed , fnFail , fnLoading ) {
  var appKey = 'SrGjT6vE';
  var appSecret = 'TfMcpYumH8oSK3k9HCObbZVv6MXOyKWF';
  var nonce = hex_md5('SrGjT6vE' + JSON.stringify(data) + data.envents[0].timestamp + appSecret.slice(-16));
  console.log(appSecret.slice(-16));
  console.log('SrGjT6vE' + JSON.stringify(data) + data.envents[0].timestamp + appSecret.slice(-16));
  var ajax = new XMLHttpRequest();
  ajax.open('post', url , true );
  ajax.setRequestHeader( 'Content-Type','text/plain;charset=UTF-8');
  ajax.setRequestHeader( 'APP_KEY' , appKey);
  ajax.setRequestHeader( 'TIMESTAMP' , data.envents[0].timestamp);
  ajax.setRequestHeader( 'NONCE' , nonce);
  ajax.send(JSON.stringify(data));
  ajax.onreadystatechange = function () {
      if( ajax.readyState == 4 ) {
          if( ajax.status == 200 ) {
              fnSucceed( ajax.responseText );
          }
          else {
              fnFail( 'HTTP请求错误！错误码：'+ajax.status );
          }
      }
      else {
          fnLoading();
      }
  }
}
function pageLoadBuriedPoint(pageTitle) {
  var date = new Date().getTime();
  // var url = 'https://navigator.linglongtech.com/navigator/collect_api/client_log.do'
  var url = 'http://test2.linglongtech.com/controler/apitools/index'
  var data = {
    base: {
      // app_id: 'SrGjT6vE',
      app_id: '阿凡提-ios手机',
      app_name: '你说我猜AI识女神',
      device_type: 1,
      // app_version: '',
      // mac: 'xx:xx:xx:xx',
      // client_ip: '',
      // client_province: '',
      // client_city: '',
      // user_id: '灵隆用户ID',
      // device_id: '',
      // imsi: '',
      // wap_proxy: 'wifi',
      // carrier: '中国移动',
      // lang: 'zh',
      // os_type: 'Android',
      // os_brand: 'HUAWEI',
      // os_manufact: 'HUAWEI',
      // os_resolution: '1280 x 720',
      // os_version: '2.3.7'
    },
    envents: [
      {
        event_id: 'LDP_EVENT_000097',
        event_name: 'LDP_EVENT_H5_PAGE_VISIT',
        timestamp: date,
        op_result:'',
        op_result_desc: '',
        biz: '你说我猜AI识女神',
        sub_biz: pageTitle,
      },
    ]
  }
  ajaxPost(url, data, function(res) {
    console.log(res);
  }, function(error) {
    console.log(error);
  });
}
// 答题页点击上报
function resultSbmitBuriedPoint(result) {
  console.log(result);
  var date = new Date().getTime();
  var url = 'https://navigator.linglongtech.com/navigator/collect_api/client_log.do'
  var data = {
    base: {
      app_id: 'SrGjT6vE',
      app_name: '你说我猜AI识女神-结果页',
      device_type: 1,
      // app_version: '2.4.13',
      // mac: 'xx:xx:xx:xx',
      // client_ip: '192.168.52.213',
      // client_province: '河北',
      // client_city: '保定',
      // user_id: '灵隆用户ID',
      // device_id: '359836046245902',
      // imsi: '460005983612363',
      // wap_proxy: 'wifi',
      // carrier: '中国移动',
      // lang: 'zh',
      // os_type: 'Android',
      // os_brand: 'HUAWEI',
      // os_manufact: 'HUAWEI',
      // os_resolution: '1280 x 720',
      // os_version: '2.3.7'
    },
    envents: [
      {
        event_id: 'LDP_EVENT_000098',
        event_name: 'LDP_EVENT_H5_QUESTION_VISIT',
        timestamp: date,
        op_result:'',
        op_result_desc: '',
        biz:'你说我猜AI识女神-答题页',
        sub_biz:'你每天的生活状态是?',
        biz_key: result[0],
      },
      {
        event_id: 'LDP_EVENT_000098',
        event_name: 'LDP_EVENT_H5_QUESTION_VISIT',
        timestamp: date,
        op_result:'',
        op_result_desc: '',
        biz:'你说我猜AI识女神-答题页',
        sub_biz:'你出门会化妆吗?',
        biz_key: result[1],
      },
      {
        event_id: 'LDP_EVENT_000098',
        event_name: 'LDP_EVENT_H5_QUESTION_VISIT',
        timestamp: date,
        op_result:'',
        op_result_desc: '',
        biz:'你说我猜AI识女神-答题页',
        sub_biz:'你现在的感情状态是?',
        biz_key: result[2],
      },
    ]
  }
  ajaxPost(url, data, function(res) {
    console.log(res);
  }, function(error) {
    console.log(error);
  });
}
// 结果页点击上报
function btnClickBuriedPoint(btnName) {
  console.log(btnName);
  var date = new Date().getTime();
  var url = 'https://navigator.linglongtech.com/navigator/collect_api/client_log.do'
  var data = {
    base: {
      app_id: 'SrGjT6vE',
      app_name: '你说我猜AI识女神-结果页',
      device_type: 1,
      // app_version: '2.4.13',
      // mac: 'xx:xx:xx:xx',
      // client_ip: '192.168.52.213',
      // client_province: '河北',
      // client_city: '保定',
      // user_id: '灵隆用户ID',
      // device_id: '359836046245902',
      // imsi: '460005983612363',
      // wap_proxy: 'wifi',
      // carrier: '中国移动',
      // lang: 'zh',
      // os_type: 'Android',
      // os_brand: 'HUAWEI',
      // os_manufact: 'HUAWEI',
      // os_resolution: '1280 x 720',
      // os_version: '2.3.7'
    },
    envents: [
      {
        event_id: 'LDP_EVENT_000099',
        event_name: 'LDP_EVENT_H5_RESULT_VISIT',
        timestamp: date,
        op_result:'',
        op_result_desc: '',
        biz:'你说我猜AI识女神',
        sub_biz:'你说我猜AI识女神-结果页',
        biz_key: btnName,
      },
    ]
  }
  ajaxPost(url, data, function(res) {
    console.log(res);
  }, function(error) {
    console.log(error);
  });
}