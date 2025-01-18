data = [ {functionType : 1 , userID : 'admin' , attendanceStatus : true },
    {functionType : 1 , userID : 'admin2', attendanceStatus : false },
    {functionType : 1 , userID : 'admin2', attendanceStatus : false } ]

for (const item of data){
    if (item.functionType == 1){
        const { userID , attendanceStatus } = item;
        console.log(userID,attendanceStatus);
    }
}