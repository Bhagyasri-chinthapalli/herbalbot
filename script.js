

output("p","bot","Welcome to herbal bot! I will provide you medicinal uses of herbal plants and trees <br> Say Hello for our further conversation.....");

var user_input=document.getElementById("input")


user_input.addEventListener("click",function loadDoc() {
  var xhttp = new XMLHttpRequest();
  try{
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
    var data= JSON.parse(this.responseText);
    var msg=document.getElementById("inp").value;
    
    document.getElementById("inp").value="";
    
    output("p","user",msg);
    
    if(msg=="Hello" || msg=="hello" || msg=="hlo" || msg=="Hlo")
    {
      output("p","bot",get_timeofday_greeting()+","+Greeting()+"<br>"+data["menu"]);
    }

    else if(msg.length==1)
    {
      if(data[msg]){
         output("p","bot",data[msg]);
         if(msg=="4"){
          output("p","bot","Say hello to restart the bot");
        }
      }

      else{
          output("p","bot","Plz enter only a number [1-3]");
      }
    }

    else if(msg.includes("healthy")){
      Plants(msg.split(" ")[1]);
    }

    else if(msg.includes("protecting"))
    {
      Trees(msg.split(" ")[1].trim())
    }

    else if(msg.includes("back")){
      output("p","bot",data["menu"]);
    }

    else{
      output("p","bot","Sorry I didnt get you would you please repeate again");
    }

  }

 };

  xhttp.open("GET", "file.json", true);
  xhttp.send();
  }

  catch(e){
    output("p","bot","Sorry I didnt get you would you please repeate again");
  }

}

);


function output(tag,className,text){

  var reply= document.getElementById("main")

  

 reply.innerHTML+=`<${tag} class=${className}>${text}</${tag}>`
}


function Greeting(){ 

  res=[" Nice to see you. I can provide the following choices for you", 

  " Its a pleasure to chat with you. Here are the options I can provide you"];  
  
  return res[Math.floor((Math.random() * res.length) + 1)-1];
  
}

function get_timeofday_greeting(){

    var date = new Date();
    var current_time = date.getHours();
    let timeofday_greeting ="Good Morning"
    if(current_time>21)
        timeofday_greeting ="Good Night"
    else if(current_time>16)
        timeofday_greeting ="Good Evening"
    else if(current_time>=12)
        timeofday_greeting ="Good AfterNoon"
    
    return timeofday_greeting ;

}

function Plants(Healthy)
{
   output("p","bot","This is Tulasi");
    output("p","image","<img style='margin-top:10px; margin-left:140px; width:400px; height:300px;' src='https://cdn1.storehippo.com/s/5abb4689c80d7cc3f2ad6fa7/ms.products/5acb1a63b9f8db16e2e56839/images/5b4445d2a09be47b29e4fc24/5b4445ac1108a14310009e2e/webp/5b4445ac1108a14310009e2e-480x480.jpg'>");
    output("p","bot","These are the Medicinal uses of Tulasi");
   output("p","image","<img style='margin-top:10px; margin-left:140px; width:400px; height:300px;' src='https://qph.fs.quoracdn.net/main-qimg-37ff57b66f1d77c2e7697e835b7b8aae'>");
    output("p","bot","This is Hibiscus");
    output("p","image","<img style='margin-top:10px; margin-left:140px; width:400px; height:300px;' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLjSgbUjf8nG06lTWZdsXCShHkVQ8lpdRqwg&usqp=CAU'>");
    output("p","bot","These are the Medicinal uses of Hibiscus");
    output("p","image","<img style='margin-top:10px; margin-left:140px; width:400px; height:300px;' src=' https://images.medindia.net/patientinfo/450_237/health-benefits-of-hibiscus.jpg'>");
    
    
    output("p","bot","If you want to know the details of Trees"+"<br>"+"enter back");
}



function Trees(Protective)
{
      output("p","bot","This is neem tree");
      output("p","image","<img style='margin-top:10px; margin-left:140px; width:400px; height:300px;' src='https://i.ndtvimg.com/i/2015-10/neem-leaves-uses-625_625x350_41444631794.jpg'>");
      output("p","bot","This are medicinal uses of neem tree");
      output("p","image","<img style='margin-top:10px; margin-left:140px; width:400px; height:300px;' src='https://cdn.thetruthaboutcancer.com/wp-content/uploads/20190125172539/Neem-Tree-copy.jpg'>");
      output("p","bot","This is Amla tree");
      output("p","image","<img style='margin-top:10px; margin-left:140px; width:400px; height:300px;' src='https://static.toiimg.com/photo/66330190.cms'>");
      output("p","bot","These are the medicinal uses of amla tree")
      output("p","image","<img style='margin-top:10px; margin-left:140px; width:400px; height:300px;' src='https://4.bp.blogspot.com/-1_6rD0yvBKg/V2RcFATA8UI/AAAAAAAAEwA/E0fVEaNrNag_NvCUhUbQmH041vRVSqiIQCLcB/s1600/Indian-Gooseberry-Benefits-amla-benefits.jpg'>");
      output("p","bot","If you want to know the details of plants"+"<br>"+ "enter back");
}

