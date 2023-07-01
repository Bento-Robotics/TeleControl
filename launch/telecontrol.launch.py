import os

from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node
from ament_index_python.packages import get_package_share_directory


def generate_launch_description():
    use_sim_time = LaunchConfiguration('use_sim_time', default='false')

    share_directory = get_package_share_directory('telecontrol')

    # revise path to your nodejs start file
    telecontrol_js = os.path.join(
        share_directory,
        'dist',
        'telecontrol.js')

    telecontrol_node = Node(
        name='telecontrol',
        executable='node',
        output='screen',
        parameters=[{'use_sim_time': use_sim_time}],
        arguments=[
            telecontrol_js
        ],
        cwd=share_directory)

    ld = LaunchDescription()
    ld.add_action(telecontrol_node)

    return ld
