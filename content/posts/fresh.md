---
title: My opinion about Fresh
description: Fresh is a new framework made on Deno. On this article I will give you my opinion about this framework.
date: "2022-09-13T16:04:44.000Z"
image: fresh.webp
---

Before starting this article I would like to point out that my experience with [fresh](https://fresh.deno.dev/) was made in September 2022 and that this framework changes often. The best way to have an opinion is to test this framework by yourself.

## What is fresh?

Fresh is a new framework using Deno, Preact, and Islands. The principle of Islands is simple: they are components with a state that needs to be changed. This allows to send only HTML and CSS and to send to the user only the javascript he really needs to make interractions or change states.

If you want to see what this framework looks like then you can check the code of this blog on my [github](https://github.com/constantgillet).

## What are its benefits?

To start with fresh uses all the advantages of Deno, which is clearly an underused runtime. The typescript management and the dependency management make it a really nice tool to use. It's really nice that the Typescript code has no compile time.

-   Speed:

I have to say that fresh impressed me with its speed. For example the blog you are reading was made with fresh. There is not much content but the pages are rendered very quickly.

![Benchmark](/images/articles/benchmark-fresh.webp)

-   A simple tool to use:

If you use NextJS often then you will understand right away how fresh works. As on NextJS the routes are rendered by the components in a "routes" folder, the components in the "islands" folder are the components where the javascript is sent to the client and in the "components" folder they are components without states.

There are also like NextJS functions to load content and send it as props to the page component.

-   Good dependencies:

Thanks to deno and its dependency management then you can start a project in a few seconds. Using Preact is also a good choice because many developers know how to use React and this library is a lighter and even more powerful copy of React.

## What are its disadvantages?

Fresh has some drawbacks. Currently there are some bugs and some small features are missing or have no documentation. Nevertheless I find this normal because this framwork is very new.

Also a problem is that there are less libraries on Deno or the libraries are less easy to find. Nevertheless it's a nice ecosystem and I think it will be improved in the future.

-   More complex state management?

As there are only the Islands states that are sent to the client, I find that the management of the state of the application is much more complicated than with other React framework. I don't know if it's possible to use a general state like with Redux or a Context. Also the fact that we use javascript page directly in the pages of the "routes" folder is very strange when we are used to use States in the pages.

-   A tool that loses its usefulness if there is a lot of Javascript

I also think that this tool is less useful for applications that have a lot of states, javascript interractions.

In my opinion this tool is recommended for ecommerce uses, blogging, landing pages, or any other site that is not with a very complex state and where SEO optimization and speed is priority.

## Conclusion

Fresh is a simple, fast framework with a lot of potential. I recommend you to try it and to follow the news about this framework. However I don't think it is currently usable for very large applications.
