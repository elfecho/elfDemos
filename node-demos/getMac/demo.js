var os = require('os'); 
    var getNetworkDataForThisIP = function(ipOfTheInterfaceWanted) { 
     var networkInterfaces = os.networkInterfaces(); 
     console.log('networkInterfaces', networkInterfaces);
    }
    //  var selectedInterfaceData; 
    //  Object.keys(networkInterfaces).forEach((NetworkID, index, obj) => { 
    //   networkInterfaces[NetworkID].forEach((data) => { 
    //    if (data.family == "IPv4" && ipOfTheInterfaceWanted== data.address) { 
    //     //I created new Object because the NetworkID is not provided in the 'data' object 
    //     selectedInterfaceData = { 
    //      network: NetworkID, 
    //      address: data.address, 
    //      netmask: data.netmask, 
    //      family: data.family, 
    //      mac: data.mac, 
    //     }; 
    //    } 
    //   }); 
    //  }); 
    //  return selectedInterfaceData; 
    // } 

    var data = getNetworkDataForThisIP("192.168.5.1") 
    // console.log(data.network); 
    // console.log(data.address); 
    // console.log(data.netmask); 
    // console.log(data.family); 
    // console.log(data.mac)