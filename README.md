### Notes


### Use Commands
    + npx create-next-app@latest  => To Create our next app

    + npm run dev  => To run our next app

    + npx shadcn@latest init  => set up our project for shadcn

    + npx shadcn@latest add  => To install shad components


### Rendering
    + Server Side Rendering (SSR) => When your code is rendered on the server and the server sends back a rendering static webpage.
        - SSR cannot render anything that requires user interaction or the browser, such as buttons with onCLicks, inputs with onChanges or hooks

        - By default all components are server side components

    + Client Side Rendering (CSR) => When your code is sent and rendered on the client's system.
        - To mark a component as a client component put 'use client' at the top.

        - Children of Client components will always render on the client . Since Client components are not rendering until they reach the Client , when you import and hardcode a child component, they are not rendering until the client as well.
        

### Routing
    + Next.js will create routes to our page.tsx files based on our file structure

    1. Redirect - next/navigation (Server)
        + Happens before the page is sent to the browser, so the user never sees the original

    2. useRouter Push (client)
        + Allows dynamic navigation based on user actions

    3. Link (Client)
        + Preloads pages in the background, making transitions faster

### Context
    + Context acts as a wrapper that stores data and makes it accessible to any component within it's scope

    + Context is a wrapper we can use to pass data to client components within it's scope

    + You can use context if you have data that a lot of components need access to or if you want to avoid prop drilling, which is when you have data that you have to pass down more than a few different components before it reaches where it's actually needed.