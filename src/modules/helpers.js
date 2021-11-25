const sendFeedback = async (...data) => {
  const path = 'https://en22hlwqnbzi7pj.m.pipedream.net'
  const getData = await fetch(path,{
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(response => response.json())
    .catch((e) => console.log(e));

  return getData;
}

export {sendFeedback}
