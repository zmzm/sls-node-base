async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from sls application' }),
  };
}

export const handler = hello;


