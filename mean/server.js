fs=require('fs')
http=require("http")
query=require("querystring")
url=require("url")
module=require("./module");
processdata=function(req,resp)
{
	d=url.parse(req.url);
	console.log(d);
	switch(d.pathname)
	{
		case "/":
		resp.writeHead(200,{'Content-Type':'text/html'})
		fs.readFile("htmlcode.html",function(error,data)
		           {
			          if(data)
			          {
				            resp.end(data);
			          }
			          else
			          {
			             	console.log("error occured");
			          }
		            });
					break;
	    case "/calculate":
		resp.writeHead(200,{'Content-Type':'text/html'})
		data=query.parse(d.query)
		
		   switch(data.cal)
		   {
			case 'Addition':
			resp.end("Addition is"+module.Addition(data.num1,data.num2));
			break;
			
			case 'Substraction':
			resp.end("Substraction is"+module.Substraction(data.num1,data.num2));
			break;
			
			case 'Multiplication':
			resp.end("Multiplication is"+module.Multiplication(data.num1, data.num2));
			break;
			
			case 'Division':
			resp.end("Division is"+module.Division(data.num1,data.num2));
			break;
			
		   }
		default:
		   resp.writeHead(200,{'Content-Type':'text/html'})
		   resp.end("erroe!!!!!!!!!!page not found");
	}
}
http.createServer(processdata).listen(3200);
console.log("server is started");