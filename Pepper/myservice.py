#!/usr/bin/env python
# -*- encoding: UTF-8 -*-


import qi
import argparse
import sys
import time
import signal

def LanceDialog(session):
# Getting the service ALDialog
    try:
        ALDialog = session.service("ALDialog")
        ALDialog.resetAll()
        ALDialog.setLanguage("French")

    	# Loading the topics directly as text strings
        topic_name = ALDialog.loadTopic("MonCode\Hello\Hello_frf.top")
        # Activating the loaded topics
        ALDialog.activateTopic(topic_name)


    	# Starting the dialog engine - we need to type an arbitrary string as the identifier
    	# We subscribe only ONCE, regardless of the number of topics we have activated
        ALDialog.subscribe('Hello')

    except Exception, e:
        print "Error was: ", e

    try:
        raw_input("\n Press Enter when finished:")
    finally:
        # stopping the dialog engine
        ALDialog.unsubscribe('Hello')

        # Deactivating the topic
        ALDialog.deactivateTopic(topic_name)

        # now that the dialog engine is stopped and there are no more activated topics,
        # we can unload our topic and free the associated memory
        ALDialog.unloadTopic(topic_name)

class MyService:

    def echo(self, message):
        return message

    def do_something(self):
        pass

if __name__ == "__main__":
    
    # Strating the service
    app = qi.Application()
    app.start()
    session = app.session
    LanceDialog(session)
    myService = MyService()
    session.registerService("MyService", myService)
    app.run()
    parser = argparse.ArgumentParser()
    parser.add_argument("--ip", type=str, default="134.214.51.43",
                        help="Robot IP address. On robot or Local Naoqi: use '134.214.51.43'.")
    #parser.add_argument("--port", type=int, default=9559,
                        #help="Naoqi port number")

    args = parser.parse_args()

    try:
        session.connect("tcp://" + args.ip + ":" + str(args.port))
    except RuntimeError:
        print ("Can't connect to Naoqi at ip \"" + args.ip + "\" on port " + str(args.port) +".\n"
               "Please check your script arguments. Run with -h option for help.")
        sys.exit(1)
    LanceDialog(session)
