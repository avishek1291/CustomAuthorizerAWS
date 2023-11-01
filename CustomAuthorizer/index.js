exports.handler = (event, context,callback) => {
    console.log(event);
    const allow = {
       context: {
        acls: JSON.stringify(['payload data', 'role2', 'role3'])
      },
        "principalId": "user",
        "policyDocument": {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Action": "execute-api:Invoke",
                    "Effect": "Allow",
                    "Resource": event.methodArn
                }
            ]
        }
    };
    console.log("policy generated", {data: JSON.stringify(allow)});
    callback(null, allow)
  
}