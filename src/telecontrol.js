const rclnodejs = require('rclnodejs');
const fs = require('fs');
const http = require('http');

var express = require('express')
var app = express()

app.use(express.static('../html'));




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


        var server = app.listen(8000, function () {

            var host = server.address().address;
            var port = server.address().port;

            console.log('Express app listening at http://%s:%s', host, port)

        })


}

(async function main() {
    example();
    webpage();
}()).catch(() => {
    process.exitCode = 1;
});
