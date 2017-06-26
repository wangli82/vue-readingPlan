//local.js就是为了存储数据到本地中
export const setStorage = function (data) {
  localStorage.setItem('lists',JSON.stringify(data));
};
//获取数据
export const getStorage = function () {
  return JSON.parse(localStorage.getItem('lists'));
};

