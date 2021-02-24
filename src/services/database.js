import DueFlowIpService from "./dueflowip.service";
import DueFlowIp from "../models/dueflowip.model";

export async function saveLastConnection(ip) {
    console.log("Saving last connection data...");
    let myIp = new DueFlowIp();
    myIp.ip = ip;
    DueFlowIpService.clear();
    DueFlowIpService.addData(myIp);
  }
  
  
async function findInAllNetwork(isConnected, splited, classIp) {
    //Get last connection
    const response = await DueFlowIpService.findAll();
    let lastConnectionFromArray = dueMachine.lastConnection;
    response._array.forEach(function (item) {
      console.log("Last connection ip ", item["ip"]);
      lastConnectionFromArray = item["ip"];
    });
    return (newMachine = {
      ...dueMachine,
      wifiReady: isConnected,
      isFound,
      lastConnection: lastConnectionFromArray,
      ip: {
        ...dueMachine.ip,
        splited,
        classIp,
      },
    });
  }