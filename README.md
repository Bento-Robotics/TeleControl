# TeleControl - an all-in-one frontend for robot control

**TeleControl** is a ROS2 and Node.js powered web interface with joystick and keyboard support.
It is designed to be hosted on a ROS2 robot, and serves a webpage, with control features, for browser clients.


## Structure

```
┏━━━━━━━━┓── Serve webpage ─⟶╔════════╗
┃ Server ┃                   ║ Client ║
┗━━━━━━━━┛←────── API ──────→╚════════╝
  ↑   ⎸
 rclnodejs
  ⎸   ↓ 
 ┏━━━━━━┓
 ┃ ROS2 ┃
 ┗━━━━━━┛
```

Using this design means the client doesn't need to have ROS installed, so theoretically any device with a browser can be
used.
