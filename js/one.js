(function(andRedEyelikeBupaCTA, undefined) {
    var $ = window.jQuery;
    var SL = {};
    SL.andRedEyelikeBupaCTA = {
        init: function() { 
            this.pgCssDesktop();
            this.CTA();
        },
        //init
 
        pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = " .arancio {font-size:1.08em; padding:17px; font-weight:500; float:left; color:#fff; background:#fe5000; border:3px solid #fe5000; border-radius:3px; text-decoration:none; text-align:center;width:120px; -moz-transition:color .2s ease-in; -o-transition:color .2s ease-in; -webkit-transition:color .2s ease-in;} .arancio:hover, .arancio:active {color:#fff; background:#b20400; border:3px solid #b20400; text-decoration:none; text-align:center; width:120px;} @media screen and (max-width:420px) { .arancio {padding:10px 14px; margin-top:22px !important; font-size:16px !important;}} @media screen and (max-width:772px) {.arancio {font-size:18px; padding:8px 14px; margin-top:22px !important;}} ";

            var head = document.getElementsByTagName('head')[0];
            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }

            addcss(mainCss);

        }, //pgCssDesktop


        CTA: function() {
            console.info('%c CTA \u221a', 'background:blue;color:white;');
            var orange = document.
            querySelector('div.nav-main.mod-mobile-nav > div > div > span > a');
            orange.className = "arancio qte_btnInsideNudge";

            //cta-mob
            var ormob = document.querySelector('.qte_btnInsideSearch_holder .btn-white-box.bg-white.qte_btnInsideNudge ');
            ormob.className = "arancio qte_btnInsideNudge";
        
        }//CTA


    };
    //SL.andRedEyelikeBupaCTA
   (function pfjQ() {
        if (document.getElementById('overlay-container') !== null) {
            try {
                SL.andRedEyelikeBupaCTA.init();
            } 
            catch (err) {
                  console.log('TRY ERROR: '+ err);
            }
        }//if 
        else { 
            setTimeout(pfjQ, 25); 
        }//else
           
    })();//pfjQ

}.call(window.andRedEyelikeBupaCTA || {}));