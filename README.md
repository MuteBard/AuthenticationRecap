# Authentication

## Server Setup - Authentication

### Tech used
![Teck Stack](https://cdn.discordapp.com/attachments/562738302046830592/565935016845246484/Screen_Shot_2019-04-11_at_12.22.59_PM.png)

---

### Saving a password
![Salt](https://cdn.discordapp.com/attachments/562738302046830592/566081252130816012/Screen_Shot_2019-04-11_at_10.04.19_PM.png)

---

### Documentation on JWT
[JWT Website](https://jwt.io/)

### How the token is used to authenticate
![Auth](https://cdn.discordapp.com/attachments/562738302046830592/566084594898698250/Screen_Shot_2019-04-11_at_10.16.08_PM.png)

---

### Using 3 Strategies
2 for JWTStrategy for Signing up and interacting with requests, 1 for localStrategy for Signing in
![Strats](https://cdn.discordapp.com/attachments/562738302046830592/566296636402303003/Screen_Shot_2019-04-12_at_12.17.53_PM.png)

---

## Client Setup - Authentication

# CORS

![C](https://cdn.discordapp.com/attachments/562738302046830592/566775797189181452/Screen_Shot_2019-04-13_at_7.59.43_PM.png)

### The Story

the browser is going to look to see if there is a different subdomain a different domain or a different port. If any of those things are different then this cors stuff starts to kick in. So in our case we are at Port 3000 and we're trying to make request over to Port 3090.

And so our browser kicks in and the browser specifically says something about this seems really off something is not right here.

So the browser makes an initial request referred to as the **preflight request** right here it asks our API: "Hey you know what we are over on port 3000. Is it OK if we make this request?" 

By default our express server is by default configured to disallow cors requests.

So in response to our express API essentially says back in return: "You know, I'm so sorry but you're on a different port. I don't know what you're doing over on that Web site but definitely you can't make that request over from that different domain or that different port or back end replies and says Sorry can't do it. Can't allow it."

And so the browser in response says: "Im sorry javascript code. But the origin 3000 that you're out looking at right now is not allowed access to that API running on port 3090.

### Recap

Again the browser checks to see if the domain the subdomain or the port are different when it makes
requests over to this other API running on a different subdomain domain or port. If any of those things are different then this core stuff kicks into play. That's step number one 

 Number two is to understand that this is specifically a browser implemented security precaution. So it's solely the fact that we are trying to execute some javascript code inside of our browser that this cors stuff kicks in and it is specifically the browser that is making this limitation or making this restriction.

That's why you probably see on line if you go look at a lot of stack overflow posts you will see a lot of people saying like how do I circumvent this. You'll see people saying how do I get around this how do I make the browser just allow this request.

And the answer is you can't. The entire idea behind these causes restrictions are to keep developers from you and I from trying to make nasty requests over to some back end API that we don't control.

So it is specifically your browser that is doing the security check. The reason that's so important is that it also explains why you and I were able to make requests from postman when we were putting together our server.


![C](https://cdn.discordapp.com/attachments/562738302046830592/566783766887137300/Screen_Shot_2019-04-13_at_8.36.07_PM.png)
