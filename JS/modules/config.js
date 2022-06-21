/**
 * Configuration for OAuth2 and REST API requests.
 * 
 * NOT FOR PRODUCTION. PURELY FOR DEMONSTRATION PURPOSES!
 */

const rootURL = 'https://headless.local/';

const config = {
    rootURL: rootURL,
    taskRoute: `${rootURL}/wp-json/wp/v2/tasks/`,
    authURI: `${rootURL}/oauth/authorize`,
    clientID: 'xFlYdgaJQhIP2EyBN0OraCQdQuiGMpir2rdsN6hw',
    responseType: 'token',
    tokenName: 'taskAppToken'
}

export default config ;