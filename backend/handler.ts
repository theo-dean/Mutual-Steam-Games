export function testFunc (event: any, context: any, callback: any) {
    const timestamp = new Date().toDateString();
    console.log("I am here...")
    console.log(`Time: ${timestamp}`);
    return {
        status: 200,
        body: JSON.stringify(timestamp)
    }
}