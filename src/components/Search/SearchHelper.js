import axios from "axios";

const key = "AIzaSyCi11wbtInTYCmMKowVG8jb5qCTxtN8E4g";
const engineId = "000532077995990981312:j1kjweoe2ig";
const url = "https://www.googleapis.com/customsearch/v1/siterestrict";

export default async function(term, index, num) {
  return axios.request({
    method: "GET",
    url,
    params: {
      q: term,
      start: index,
      cx: engineId,
      num,
      key,
    },
  });
}
