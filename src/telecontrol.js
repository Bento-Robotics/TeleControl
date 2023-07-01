const rclnodejs = require('rclnodejs');
const {join} = require("path");

// Create a node that publishes a msg to the topic 'foo' every 1 second.
// View the topic from the ros2 commandline as shown below:
//    ros2 topic echo foo std_msgs/msg/String
async function example() {
    await rclnodejs.init();
    const node = rclnodejs.createNode('MyNode');

    // Create main working components here, e.g., publisher, subscriber, service, client, action
    // For example, a publisher sending a msg every 1 sec
    const publisher = node.createPublisher('std_msgs/msg/String', 'sauce');
    let cnt = 0;
    const msg = rclnodejs.createMessageObject('std_msgs/msg/String');
    node.createTimer(1000, () => {
        msg.data = `msg: ${
            cnt += 1
        }`;
        publisher.publish(msg);
    });

    node.spin();

    console.log('Use this command to view the node\'s published messages: ros2 topic echo foo std_msgs/msg/String');
}

async function webpage() {
    // WIP html serving code
    // const express = require('express')
    // const serveStatic = require('serve-static');
    //
    //
    // const app = express()
    //
    // app.use(serveStatic('../html', { index: ['index.html'] }))
    // app.listen(8080, () => console.log('Server running on 8080...'))


    // Demo serving code
    const http = require('http')


    const port = process.env.PORT || 7000

    const server = http.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end('<h1>Hello, World!</h1>')
    })

    server.listen(port, () => {
        console.log(`Server running at port ${port}`)
    })
}

(async function main() {
    example();
    webpage();
}()).catch(() => {
    process.exitCode = 1;
});
