<p align="center">
<a href="https://dialoguewise.com" target="_blank"><img src="https://github.com/kentmz/dialoguewise-demo/blob/master/screenshots/logo.PNG?raw=true"></a>
</p>  
<br/>
<p align="center">
Programmable content delivered to you app via cloud API
</p>  
<br/>

## About this library?

This JS library allows you to access the Dialogue Wise API in your Angular apps.

## What is Dialogue Wise?

Dialogue Wise is a CaaS platform where you can program your content and then the content will be delivered to your application based on the parameters provided.

Some of the advantages of using Dialogue Wise are:

* Your content can be programmed. This will allow you to generate content based on the context provided.
* Editing your content is a breeze and seamless. Also, since your content is delivered via API, you don't need to store your content or redeploy your apps.
* You can have pilot versions of your content. This allows you to test new contents on your test environments and promote them to production when you are ready.

Let's look at an example that can give you a better understanding of Dialogue Wise. Let's say you have the following content on your website or mobile app:

```
This is a car.
```

Now let's say you would like to make the word `car` dynamic so that you could display `car` or `bike` based on a certain logic. With Dialogue Wise, you could do:

```
This is a #Vehicle
```

`#Vehicle` now becomes programmable and you could do something like this:

```
#Vehicle
{
	if(@wheel==2)
	{
		return "bike.";
	}
	else
	{
		return "car.";
	}
}

```

Your app could now call the Dialogue Wise API and pass the parameter `@wheel` and it would return you `This is a bike.` or `This is a car.` depending on the value of @wheel.



## Integrating the API into your apps

You could call the Dialogue Wise Api just like any other api. Please have a look at the [documentation](https://docs.dialoguewise.com/api/) for more details.

For front end applications like Angular, you could use the below `NPM` package to call the Api.

```
npm i dialogue-wise
```

The dependency package `jsSHA` also needs to be installed.

```
npm i jssha
```

Please refer to [app.component.ts](https://github.com/kentmz/dialoguewise-demo-angular/blob/master/src/app/app.component.ts) in the git repo which demonstrates usage of this Nuget and the example mentioned above.

<br/>
**Thank you!**






