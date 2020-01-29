$(()=>{
    $("#getBtn").click(()=>{
       $.ajax({
           url:"myNode",
           type:"GET"
       }).then((res,status,request)=>{
           console.log(res);
           //const bubuHeader = request.getResponseHeader("bubuHeader");
           //console.log(`bubu header said: ${bubuHeader}`);
       });
   });
    
    
    $("#postBtn").click(()=>{
       $.ajax({
           url:"myNode",
           type:"POST",
           data:"data=some data"
       }).then((res)=>{
           console.log(res);
       });
   });
    
    
    
       $("#putBtn").click(()=>{
       $.ajax({
           url:"myNode",
           type:"PUT",
           data:"data=some data"
       }).then((res)=>{
           console.log(res);
       });
   });
    
    
       $("#deleteBtn").click(()=>{
       $.ajax({
           url:"myNode",
           type:"DELETE"
       }).then((res)=>{
           console.log(res);
       });
   });
})