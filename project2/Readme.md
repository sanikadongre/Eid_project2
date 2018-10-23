Team Members: Shubham Jaiswal and Sanika Dongre

Description:
The project is based on establishing communication between a client and the server. On the server side, raspberry pi is connected to a DHT22 (Temperature and Humidity sensor) and are displayed on QT based GUI on resetting (using QT Timer) every five seconds. The different values displayed are: The current (or latest reading) temperature value, the average of these values, the highest and lowest of the temperature and humidity values with the respective time stamps. The data is stored in a “.csv format” file. The server-side implementation is done using Tornado which is being used for establishing a connection with client html file using the IP address and the appropriate port number.  On the client side, a jQuery/HTML webpage (using jQuery library CSS for interaction) is being created and using web socket communications the sensor data can be sent to the client html file.

The accomplished required elements are( ALL DONE):

1)	The data is obtained from the server every five seconds and the last, highest, lowest and average readings for both temperature and the humidity are being displayed.
 
2)	A button (radio) allows selecting the unit type as F or C

3)	The temperature and humidity data readings along with respective timestamps are being stored in a “.csv” format file.

4)	Using Tornado, server is being implemented for communicating with a client file.

5)	The remote client is being created using HTML/javascript/jQuery webpage for allowing remote connection between the client and the server

6)	The error condition is handled and can be tested by initially testing a false condition. For example: starting client-server communication before starting the server

    The extra credits accomplished are:
    
1)	Displaying graphs for temperature and humidity values

     Files to be run:
     
1)	Run the server.py file which then starts a socket and check the html link for testing the client 
2)	client.html for the client side 
