module.exports =  {
    // devIndicators: {
    //     autoPrerender: false,
    //   },
    // basePath:'/tchat',
    // async redirects() {
    //     return [
    //       {
    //         source: '/tchat',
    //         destination: '/maintenance',
    //         permanent: true,
    //       },
    //     ]
    //   },
    serverRuntimeConfig:{ // constantes qui ne seront accessibles que sur le rendu serveur
        maconstante : "Test ma constante"
    },
    publicRuntimeConfig:{ //constantes qui seront accessibles sur le rendu CLIENT ET SERVEUR
        maconstante2 : "KOUKOU C MWA" 
    }
      
}




// module.exports = {
//     basePath: '/tchat'
// }


