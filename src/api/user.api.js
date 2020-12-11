import { createAPI } from 'create-api'

const logRequests = !!process.env.DEBUG_API

const api = createAPI({
  version: '/v0',
  config: {
    apiKey: "AIzaSyDWe2E_fOPoQNoxOTS-mSI15ZJThIwdNrY",
    authDomain: "vue-ssr-express-starter-kit.firebaseapp.com",
    databaseURL: "https://vue-ssr-express-starter-kit-default-rtdb.firebaseio.com",
    projectId: "vue-ssr-express-starter-kit",
    storageBucket: "vue-ssr-express-starter-kit.appspot.com",
    messagingSenderId: "366076839312",
    appId: "1:366076839312:web:f5497725f3f2dd11069f15",
    measurementId: "G-LQ22TG4SBV"
  }
})

export function create (prams) {
  api.push(prams);
}
