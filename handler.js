
export const hello = async (event, context) => {
    const queryParameters = event.queryStringParameters;
    return {
        "statusCode": 200,
        "body": JSON.stringify({message: "xd", queryParameters})
    }
}