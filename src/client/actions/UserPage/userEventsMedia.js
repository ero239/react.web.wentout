export default function userEvent(userID, skip, limit) {
  var url = '';
  fetch(url, {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: 'foo=bar&lorem=ipsum'
  })
    .then((response) => {
      if (response.status != 200) {
      }
      console.log(JSON.parse(response));
    })
    .catch((e) => console.log(e));
}
