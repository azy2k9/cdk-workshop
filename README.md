# Todos

- [ ] Define a new dynamodb table
- [ ] Define a new api gateway
- [ ] Connect the api gateway to the dynamodb table
- [ ] Add a new route to the api gateway `[POST] /feed`
- [ ] Add a new route to the api gateway `[GET] /feed`
- [ ] Add a new route to the api gateway `[POST] /nappy`
- [ ] Add a new route to the api gateway `[GET] /nappy`
- [ ] Add a new route to the api gateway `[POST] /medicine`
- [ ] Add a new route to the api gateway `[GET] /medicine`

# Welcome to your CDK TypeScript project

You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`CdkWorkshopStack`)
which contains an Amazon SQS queue that is subscribed to an Amazon SNS topic.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
