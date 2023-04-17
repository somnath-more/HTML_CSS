async function getData(uId) {
    let promise = new Promise((resolve, reject) => {
       
            console.log("Fetched the data!");
            
            var x="skc@gmail.com";
            resolve(x)
       
    });
    return await promise;
   
}

async function main1()  {
    console.log("start");
    
    var email = await getData("skc");
    console.log("Email id of the user id is: " + email);
    console.log("end");
}
main1()
