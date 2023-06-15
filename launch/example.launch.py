
import os

from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node
from ament_index_python.packages import get_package_share_directory


def generate_launch_description():

    use_sim_time = LaunchConfiguration('use_sim_time', default='false')

    share_directory = get_package_share_directory('btc')

	# revise path to your nodejs start file
    start_js_file = os.path.join(
        share_directory,
        'dist',
        'index.js')

    telecontrol_node = Node(
        name='telecontrol',
        executable='node',
        output='screen',
        parameters=[{'use_sim_time': use_sim_time}],
        arguments=[
            start_js_file
        ],
        cwd=share_directory)

    ld = LaunchDescription()
    ld.add_action(telecontrol_node)

    return ld
