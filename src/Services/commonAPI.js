import axios from "axios";

const commonApi = async (httpMethod, url, reqBody) => {
    const requestConfig = {
        method: httpMethod,
        url,
        data: reqBody
    }
    return await axios(requestConfig).then((res) => {
        return res
    }).catch(err => {
        return err.message
    })
}

export default commonApi