exports.handler = async (event) =>
  const val=100
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda and Github!"),
    body: `The MAX value is : ${max}`	  
  }
  return response
}
