
# ❗ DISCLAIMER: it's not actually done yet, more coming in following weeks ;P

<br>

# TeleControl - an all-in-one frontend for robot control

[![node](https://img.shields.io/node/v/rclnodejs.svg)](https://nodejs.org/en/download/releases/)

**TeleControl** is a ROS2 and Node.js powered web interface with joystick and keyboard support.  
It is designed to be hosted on a ROS2 robot, and serves a webpage, with control features, for browser clients.

## Structure

```
  Robot            ┆       Client device(s)
                   ┆
┏━━━━━━━━┓── Serve webpage ─>╔════════╗
┃ Server ┃         ┆         ║ Client ║
┗━━━━━━━━┛<────── API ──────>╚════════╝
  ↑   ⎸            ┆
 rclnodejs         ┆
  ⎸   ↓            ┆
 ┏━━━━━━┓          ┆
 ┃ ROS2 ┃          ┆
 ┗━━━━━━┛          ┆
```

Using this structure means the client doesn't need to have ROS installed, so theoretically any device with a browser can
be used.

<br>

## Installation

### TL;DR

> :warning: Make sure an adequate NPM version is installed first  
> Also install git if you haven't already

```bash
   git clone https://github.com/Bento-Robotics/telecontrol telecontrol_ws
   cd telecontrol_ws
   source /opt/ros/$ROS_DISTRO/setup.bash
   npm install
   colcon build
   source $PWD/install/setup.bash # source once, so it works without re-logging in
   echo "source ${PWD}/install/setup.bash" >>~/.bashrc
```

---

### Building

> :warning: Make sure an adequate NPM version is installed first

1. Clone this repo  
   `git clone https://github.com/Bento-Robotics/telecontrol telecontrol_ws`  
   
2. Enter the folder  
   `cd telecontrol_ws`  
   
3. Source your ros2 enviroment  
   `source /opt/ros/$ROS_DISTRO/setup.bash`  
   
4. Install dependencies  
   `npm install`  
   
5. Build  
   `colcon build`  

---

### Running

- Source the workspace  
  `source $PWD/install/setup.bash`  
  
    - automatically do this on every login  
      `echo "source ${PWD}/install/setup.bash" >>~/.bashrc`  
      
- Run it!  
  `ros2 launch telecontrol <launchfile>`  
