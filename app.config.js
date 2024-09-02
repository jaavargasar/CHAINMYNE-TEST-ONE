export default {
    expo: {
        extra: {
            COIN_GECKO_API_KEY:
                process.env.COIN_GECKO_API_KEY || 'CG-fQqzYtts61KrX8rXyKpZZ8cv',
            COIN_GECKO_API:
                process.env.COIN_GECKO_API ||
                'https://api.coingecko.com/api/v3',
        },
    },
};

// When the code is upload to Github or a Git repository, we shouldn't have the keys store in this file. Actually the good programming pattern
// Is to store them inside the .env file ( Which I did), and then just copy those keys from there and paste it here. For simplicity I keep this
// Keys inside this file. So you can not find errors when running the application, but usually they should be empty strings
