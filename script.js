const chatMsgContainer = document.querySelector(".chat-message-container");
const chatArea = document.querySelector(".chat-area");
const back = document.querySelector(".back");
const kakashiInput = document.querySelector("#Kakashi-input");
const rigthMsgContainer = document.querySelector(".right-message-container");
const ksbtn = document.querySelector("#ks-btn");
const narutobtn = document.querySelector("#naruto-btn");
const messageContainer = document.querySelector(".messages-container");
const button  = document.querySelectorAll("button");
const narutoInput = document.querySelector("#naruto-input");
console.log()
chatMsgContainer.addEventListener("click",()=>{
         chatArea.style.display = "block";
})

back.addEventListener("click",()=>{
    chatArea.style.display = "none";
});


button.forEach(btn=>{
     btn.addEventListener("click",()=>{
       if(btn.id === "naruto-btn"){
         const blueBg = document.createElement("div");
         blueBg.classList.add("blue-bg");
         blueBg.innerHTML = narutoInput.value;
         const whiteBg = document.createElement("div");
         whiteBg.classList.add("white-bg");
         whiteBg.innerHTML = narutoInput.value;
         messageContainer.append(blueBg);
         rigthMsgContainer.append(whiteBg)

       }
       if(btn.id === "ks-btn"){
        const blueBg = document.createElement("div");
        blueBg.classList.add("blue-bg");
        blueBg.innerHTML = kakashiInput.value;
        const whiteBg = document.createElement("div");
        whiteBg.classList.add("white-bg");
        whiteBg.innerHTML = kakashiInput.value;
        rigthMsgContainer.append(blueBg);
        messageContainer.append(whiteBg)

       }
     })
})
