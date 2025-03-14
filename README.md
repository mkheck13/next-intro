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
        