export default {
    MAX_ATTACHMENT_SIZE : 5000000,
    S3: {
        REGION: "us-west-2",
        BUCKET: "nadtakan-app-uploads"
    },
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://k1d26nqa1b.execute-api.us-west-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_YsE1h5czY",
        APP_CLIENT_ID: "26tbg8r1lae68gp3afhnsfiapu",
        IDENTITY_POOL_ID: "us-west-2:4c5c4050-eb6e-4148-8e38-b55b18a4e919"
    }
};

