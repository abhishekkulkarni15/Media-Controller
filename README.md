# MediaController
This tutorial let you use media control on Windows PC using a Micro:bit and Node.Js. You can use the “A” button on Microbit to select previous track and “B” to select the next track while playing music on Spotify desktop app or windows music players.

Things you will need!

1. Windows PC with Node.js installed.
2. Micro:bit and a usb cable to connect Micro:bit to PC.

The way it works is you send a serial signal to the PC and by reading the serial signal using Node.js program. We use the node-media-controller to control back or next using the serial signal sent from the Micro:bit.

Go to microbit [website](https://makecode.microbit.org/#) and make the blocks as specified in the below image.

![alt text](https://github.com/abhishekkulkarni15/MediaController/blob/master/MEDIA_CONTROL_MICROBIT.JPG)

Download the code to the PC and copy it into your microbit.

Now, connect the micro bit again to PC and go to device manager. Under Ports, you will get an option for the microbit as a USB serial device. Note the COM number specified in the option. Eg. COM15

Download this Node code and change the portName to the one from the above point in the program. In my system, it was COM15. Run the code and if required, install the dependencies for this.

Now, we are almost done with the process. Open Spotify and play a track. After you click on “A” or “B” button, you can change the tracks as next or previous.

You can use [‘play’, ‘pause’, ‘next’, ‘previous’, ‘skip’] for your own customized buttons!
