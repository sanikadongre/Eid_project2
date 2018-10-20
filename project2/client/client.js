// log function
log = function(data){
  $("div#terminal").prepend("</br>" +data);
  console.log(data);
};

$(document).ready(function () {
  $("div#message_details").hide()
  var ws;
  var temp = 0;
  var check_farh = 0;
  var humid;
  var avg_humid;
  var maxhumid;
  var minhumid;
  var avg_temp;
  var maxtemp; 
  var mintemp;
  var celsiusunit; 
  var error;
  var faranunit;
  ws = new WebSocket("ws://10.0.0.241:8888/ws")

//Error handling for websockets
  ws.onerror = function(error){
    alert("Cannot connect to server. Make sure server is online")
  }
 ws.onclose = function(evt) {
      alert("Retry Refreshing the Webpage!");
    }
//handling Messages from tornado server
  ws.onmessage = function(evt) {
  // log("Message Received: " + evt.data)
  //alert("message received: " + evt.data)
    var array_str = evt.data.split(" ")
    if(array_str[0] == "graph_temperature"){
      window.open(array_str[1]);
    }
     if(array_str[1] == "graph_humidity"){
       window.open(array_str[1]);
     } 
     if(array_str[0] == "present_temp"){
       if(check_farh){
         var temp = parseFloat(array_str[1])
         temp = ((temp * 1.8) + 32)
         $("#output_present_temo").val(temp.toFixed(2)+ "\u00b0F Timestamp: " + array_str[2]);
       }
       else{
        $("#output_present_temo").val(array_str[1] + "\u00b0F Timestamp: " + array_str[2]);
       }   
     }
    if(array_str[0] == "present_humidity"){
        $("#output_present_humidity").val(array_str[1] + "%    Time Stamp: " + array_str[2]);
      }
      if(array_str[0] == "avg_temp"){
        if(check_farh){
          var temp = parseFloat(array_str[1])
          temp = ((temp * 9.0)/5.0)+32
          $("#output_avg_temp").val(temp.toFixed(2)+ "\u00b0F  Time Stamp: " + array_str[2]);
        }
        else{
        $("#output_avg_temp").val(array_str[1] + "\u00b0C   Time Stamp: " + array_str[2]);
        }
      }
      if(array_str[0] == "avg_humid"){
        $("#output_avg_hum").val(array_str[1] + "%    Time Stamp: " + array_str[2]);
      }

      if(array_str[0] == "Max_temp"){
        if(check_farh){
          var temp = parseFloat(array_str[1])
          temp = ((temp * 9.0)/5.0)+32
          $("#output_max_temp").val(temp.toFixed(2)+ "\u00b0F   Time Stamp: " + array_str[2]);
        }
        else{
        $("#output_max_temp").val(array_str[1] + "\u00b0C   Time Stamp: " + array_str[2]);
        }
      }
      if(array_str[0] == "Max_humid"){
        $("#output_max_hum").val(array_str[1] + "%   Time Stamp: " + array_str[2]);
      }
      if(array_str[0] == "Min_temp"){
        if(check_farh){
          var temp = parseFloat(array_str[1])
          temp = ((temp * 9.0)/5.0)+32
          $("#output_min_temp").val(temp.toFixed(2)+ "\u00b0F   Time Stamp: " + array_str[2]);
        }
        else{
        $("#output_min_temp").val(array_str[1] + "\u00b0C   Time Stamp: " + array_str[2]);
        }
      }
      if(array_str[0] == "Min_humid"){
        $("#output_min_hum").val(array_str[1] + "%   Time Stamp: " + array_str[2]);
      }
  };
    };
