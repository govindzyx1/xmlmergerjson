 var a = context.targetRequest.body.asXML.Add.a;
var b = context.targetRequest.body.asXML.Add.b;

c = +a + +b;
d = +c + +a;
e = +c - +a;
f = +c + +b;
g = +c - +b
context.setVariable("ctotal",c);
context.setVariable("dtotal",d);
context.setVariable("etotal",e);
context.setVariable("ftotal",f);
context.setVariable("gtotal",g);
