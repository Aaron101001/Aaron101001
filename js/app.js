let url=window.location.href;
let swLoc = "unatask/service-worker.js";
if(navigator.serviceWorker){
    navigator.serviceWorker.register('/service-worker.js')
        .then(reg=>{
            // setTimeout(()=>{
            //     reg.sync.register('post-new-user');
            //     console.log("Se envió la información al servidor");
            // },3000);
        });
}