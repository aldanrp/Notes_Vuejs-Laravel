module.exports= {
    publicPath: process.env.NODE_ENV === 'production' ? 'dist/' : './',
    outputDir: '../dist',
    indexPath: '../index.html',

    //untuk menghilangkan error pada connection get time out 
    /* devserver: {
        public: "localhost:8080",
        host: "localhost",
        port: 8080+
    }*/
}