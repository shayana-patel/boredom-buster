import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

export function getWelcome () {
  return request
    .get(`${serverURL}/welcome`)
    .then(response => response.body)
}

export function getActivity () {
  return request
    .get('https://www.boredapi.com/api/activity')
    .then(res => res.body)
}