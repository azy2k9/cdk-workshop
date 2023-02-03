"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
exports.handler = async function (event) {
    // if (process.env.DYNAMODB === '' || !process.env.DYNAMODB) {
    //   return {
    //     statusCode: 500,
    //     headers: { 'Content-Type': 'application/json' },
    //     body: {
    //       error: 'Cannot find DynamoDB table name'
    //     }
    //   };
    // }
    const query = {
        TableName: 'CdkWorkshopStack-FeedTable1849209D-Q8TT6OF2RBH7'
    };
    try {
        const documentClient = new aws_sdk_1.DynamoDB.DocumentClient();
        const results = await documentClient.scan(query).promise();
        console.log(results);
        return results;
    }
    catch (error) {
        console.log('hit an error');
        console.log('hit an error');
        console.log('hit an error');
        console.log(error);
        console.log('hit an error');
        console.log('hit an error');
        console.log('hit an error');
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: {
                error: 'Error finding table results'
            }
        };
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYXJzbGFhbi9Eb2N1bWVudHMvcGVyc29uYWwvY2RrLXdvcmtzaG9wLyIsInNvdXJjZXMiOlsibGFtYmRhL2hlbGxvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQW1DO0FBRW5DLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxXQUFXLEtBQVU7SUFDMUMsOERBQThEO0lBQzlELGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdURBQXVEO0lBQ3ZELGNBQWM7SUFDZCxpREFBaUQ7SUFDakQsUUFBUTtJQUNSLE9BQU87SUFDUCxJQUFJO0lBRUosTUFBTSxLQUFLLEdBQUc7UUFDWixTQUFTLEVBQUUsaURBQWlEO0tBQzdELENBQUM7SUFFRixJQUFJO1FBQ0YsTUFBTSxjQUFjLEdBQUcsSUFBSSxrQkFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JELE1BQU0sT0FBTyxHQUFHLE1BQU0sY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sT0FBTyxDQUFDO0tBQ2hCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLE9BQU87WUFDTCxVQUFVLEVBQUUsR0FBRztZQUNmLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtZQUMvQyxJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLDZCQUE2QjthQUNyQztTQUNGLENBQUM7S0FDSDtBQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtb0RCIH0gZnJvbSAnYXdzLXNkayc7XG5cbmV4cG9ydHMuaGFuZGxlciA9IGFzeW5jIGZ1bmN0aW9uIChldmVudDogYW55KSB7XG4gIC8vIGlmIChwcm9jZXNzLmVudi5EWU5BTU9EQiA9PT0gJycgfHwgIXByb2Nlc3MuZW52LkRZTkFNT0RCKSB7XG4gIC8vICAgcmV0dXJuIHtcbiAgLy8gICAgIHN0YXR1c0NvZGU6IDUwMCxcbiAgLy8gICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAvLyAgICAgYm9keToge1xuICAvLyAgICAgICBlcnJvcjogJ0Nhbm5vdCBmaW5kIER5bmFtb0RCIHRhYmxlIG5hbWUnXG4gIC8vICAgICB9XG4gIC8vICAgfTtcbiAgLy8gfVxuXG4gIGNvbnN0IHF1ZXJ5ID0ge1xuICAgIFRhYmxlTmFtZTogJ0Nka1dvcmtzaG9wU3RhY2stRmVlZFRhYmxlMTg0OTIwOUQtUThUVDZPRjJSQkg3J1xuICB9O1xuXG4gIHRyeSB7XG4gICAgY29uc3QgZG9jdW1lbnRDbGllbnQgPSBuZXcgRHluYW1vREIuRG9jdW1lbnRDbGllbnQoKTtcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZG9jdW1lbnRDbGllbnQuc2NhbihxdWVyeSkucHJvbWlzZSgpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdoaXQgYW4gZXJyb3InKTtcbiAgICBjb25zb2xlLmxvZygnaGl0IGFuIGVycm9yJyk7XG4gICAgY29uc29sZS5sb2coJ2hpdCBhbiBlcnJvcicpO1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICBjb25zb2xlLmxvZygnaGl0IGFuIGVycm9yJyk7XG4gICAgY29uc29sZS5sb2coJ2hpdCBhbiBlcnJvcicpO1xuICAgIGNvbnNvbGUubG9nKCdoaXQgYW4gZXJyb3InKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzQ29kZTogNTAwLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiB7XG4gICAgICAgIGVycm9yOiAnRXJyb3IgZmluZGluZyB0YWJsZSByZXN1bHRzJ1xuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG4iXX0=