import config from './modules/config.js';

import token from './modules/auth.js'

/**
 * Main list view script
 * 
 * If the user is authenticated, get the task list,
 * else, jump to the login view.
 * 
 * @package Taskbook
 */


if( token === null ) {
    window.location - `${window.location.orgin}/login.html`;

}else{

        console.log('token:', token );
}
