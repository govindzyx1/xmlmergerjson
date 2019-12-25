 var body = request.content.asJSON;
print(body.Add.a);
print(body.Add.b);
body.Add.c = body.Add.a + body.Add.b;
context.setVariable("ctotal",JSON.stringify(body.Add.c));

print(body.Add.c);
context.setVariable(JSON.stringify(body.Add.d));
body.Add.d = body.Add.c + body.Add.a;
print(body.Add.d);
context.setVariable("dtotal",JSON.stringify(body.Add.d));

context.setVariable(JSON.stringify(body.Add.e));
body.Add.e = body.Add.c - body.Add.a;
print(body.Add.e);
context.setVariable("etotal",JSON.stringify(body.Add.e));


context.setVariable(JSON.stringify(body.Add.f));
body.Add.f = body.Add.c + body.Add.b;
print(body.Add.f);
context.setVariable("ftotal",JSON.stringify(body.Add.f));

context.setVariable(JSON.stringify(body.Add.g));
body.Add.g = body.Add.c - body.Add.b;
print(body.Add.g); 
context.setVariable("gtotal",JSON.stringify(body.Add.g));



