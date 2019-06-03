export default function userEvent(userID, skip, limit) {
  var url = '';
  fetch(url, {
    method: 'post',
    headers: new Headers({
      'Content-type': 'application/json'
    }),
    body: JSON.stringify({id: userID, skip: skip, limit: limit})
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.status != 200) {
      }
      console.log(response);
    })
    .catch((e) => console.log(e));
}
