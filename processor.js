let generateConfig = document.querySelector('.generateConfig');

generateConfig.addEventListener('click', readQR)


function readQR (){
  let url = 'https://developers.decidir.com/api/integrations/largeaccounts/intentions?' ;
  let headersA = new Headers();  
  headersA.append("apikey", "21Vfcf1ywAIA4tFXEhOh3bsojGWujfvZ");
  
  let params = new URLSearchParams({
    branch: "Terminal%20Prueba",
    checkout: '38010897',
    cuit: '20-16689006-4',
  });
  url = "https://developers.decidir.com/api/integrations/largeaccounts/intentions?branch=Terminal%20Prueba&checkout=38010897&cuit=20-16689006-4";
  console.log({url});
  logJSONData(url);

}

async function logJSONData(url) {
  const response = await fetch(url , {
    method: "GET",
    credentials: 'include',
    mode: "cors",
		headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
      'apikey': '21Vfcf1ywAIA4tFXEhOh3bsojGWujfvZ',
      'Host': 'developers.decidir.com',
      'Origin':'developers.decidir.com',
      'Cookie' : 'TS013d7616=012e46d8ee6b6eb80bb529584c0dab1e369bb23840f70d368fd8c520cc753c11a09eea1a6fb1de45a22170cb216f2e901e43530c66; TS017a11a6=012e46d8ee327a922c53dc0e133290f37628ef1726bb01169b16a1aa6d29c5c2c8d03b8dd5e4bb6b7c5d17895694b14b34d60020ad'
		},
	})
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));
}

