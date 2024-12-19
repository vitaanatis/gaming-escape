self.__uv$config = {
        prefix: '/static/uv/service/',
        bare: 'https://bare.benrogo.net/',
        encodeUrl: Ultraviolet.codec.xor.encode,
        decodeUrl: Ultraviolet.codec.xor.decode,
        handler: '/static/uv/handler.js',
        bundle: '/static/uv/bundle.js',
        config: '/static/uv/config.js',
        sw: '/static/uv/fr.sw.js',
};
