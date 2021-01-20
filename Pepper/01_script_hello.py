#!/usr/bin/env python
# -*- coding: utf-8 -*-

import qi


robot_ip = "134.214.51.44"

def main():
    """
    I should put some doc here
    """
    robot_session = qi.Session()
    robot_session.connect(robot_ip)

    tts = robot_session.service("ALTextToSpeech")
    tts.say("Hello")


if __name__ == "__main__":
    main()
