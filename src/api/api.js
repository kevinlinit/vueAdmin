import axios from 'axios';

//let base = '';
let base = 'http://localhost';
//let base = 'http://14.17.121.143:8445';

//export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };
export const requestLogin = params => { return axios.post(`${base}/vrbicycle/newLogin!login.action?cms=cms`, params).then(res => res.data); };

//export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };
export const getUserList = params => { return axios.get(`${base}/vrbicycle/newLogin!realTimeMonitor.action?cms=cms`, { params: params }); };

//export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const getBlueNums = params => { return axios.get(`${base}/vrbicycle/newLogin!countBlueNums.action?cms=cms`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };
