/*
███╗   ███╗ █████╗ ██████╗ ████████╗██╗   ██╗███████╗ ██████╗██████╗ ██╗██████╗ ████████╗
████╗ ████║██╔══██╗██╔══██╗╚══██╔══╝╚██╗ ██╔╝██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝
██╔████╔██║███████║██████╔╝   ██║    ╚████╔╝ ███████╗██║     ██████╔╝██║██████╔╝   ██║   
██║╚██╔╝██║██╔══██║██╔══██╗   ██║     ╚██╔╝  ╚════██║██║     ██╔══██╗██║██╔═══╝    ██║   
██║ ╚═╝ ██║██║  ██║██║  ██║   ██║      ██║   ███████║╚██████╗██║  ██║██║██║        ██║   
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   
*/
(function(){
    function strToArr(str){
        var Arr = [];
        str.split("").forEach(function(element){
            Arr.push(element);
        });
        Arr.push(" ");
        return Arr;
    }
    /*function ArrTois_var(arr){
        var Arr = [];
        str.forEach(function(element){
            Arr.push(0);
        });
        return Arr;
    }*/
    function MartyScript(language){
        this.window = [];
        this.Scriptwindow = [];
        this.var = [
            {type: "var", name: "window", to: function(){return this.window;}}
        ];
        this.function = [
            {type: "function", name: "console", to: {log: function(log){console.log(log);return null;}}}
        ];
        this.typedef = [
            {type: "typedef", name: "var", to: function(txt, txt1){return {type:"var", name: txt, to: txt1};}},
            // for ex
            {type: "typedef", name: "test", to: function(txt, txt1){return {type:"var", name: txt, to: txt1}}}
        ];
        this.bracketFunction = [
            {type: "bracketFunction", name: "if", name2: "else", to: function(is, bracket, notBracket){if(is){bracket();}else{notBracket();}return null;}},
        ];
        this.language = language;
        this.load_ms = "";
        /*`
        %c███╗   ███╗ █████╗ ██████╗ ████████╗██╗   ██╗███████╗ ██████╗██████╗ ██╗██████╗ ████████╗
        %c████╗ ████║██╔══██╗██╔══██╗╚══██╔══╝╚██╗ ██╔╝██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝
        %c██╔████╔██║███████║██████╔╝   ██║    ╚████╔╝ ███████╗██║     ██████╔╝██║██████╔╝   ██║   
        %c██║╚██╔╝██║██╔══██║██╔══██╗   ██║     ╚██╔╝  ╚════██║██║     ██╔══██╗██║██╔═══╝    ██║   
        %c██║ ╚═╝ ██║██║  ██║██║  ██║   ██║      ██║   ███████║╚██████╗██║  ██║██║██║        ██║   
        %c╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   
        `*/
        console.log(`%c_  _ ____ ____ ___ _   _ ____ ____ ____ _ ___  ___ 
%c|\\/| |__| |__/  |   \\_/  [__  |    |__/ | |__]  |  
%c|  | |  | |  \\  |    |   ___] |___ |  \\ | |     |  `, "color:#22577A", "color:#38A3A5", "color:#57CC99");
    }

    MartyScript.prototype.error = function(error, language = this.language){
        var ScriptError = "";
        if(error[language] != undefined){
            console.error("MartyScript-error: "+error[language]);
            ScriptError = error[language];
        } else if(error.en != undefined){
            console.error("MartyScript-error: "+error.en);
            ScriptError = error.en;
        } else {
            console.error("MartyScript-error: "+error.ko);
            ScriptError = error.ko;
        }
        return ScriptError;
    };
    MartyScript.prototype.load = function(load){// = undefined, url = undefined){
        var error = this.error;
        var language = this.language;
        /*if(url != undefined){
            httpRequest = new XMLHttpRequest();
            httpRequest.onreadystatechange = () => {
                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    if (httpRequest.status === 200) {
                        var result = httpRequest.response;
                        this.load_ms = this.load_ms + "\n" + result;
                    } else {
                        return error({en: "Request Error! url: "+url+", code: "+httpRequest.status, ko: "요청 오류! url: "+url+", code: "+httpRequest.status}, language);
                    }
                }
            };
            httpRequest.open('GET', url);
            httpRequest.send();
        } else */if(load != undefined){
            this.load_ms = this.load_ms + "\n" + load;
        }/* else {
            document.querySelectorAll('script[language="MartyScript"]').forEach(function(element){
                httpRequest = new XMLHttpRequest();
                httpRequest.onreadystatechange = () => {
                    if (httpRequest.readyState === XMLHttpRequest.DONE) {
                        if (httpRequest.status === 200) {
                            var result = httpRequest.response;
                            this.load_ms = this.load_ms + "\n" + result;
                        } else {
                            return error({en: "Request Error! url: "+url+", code: "+httpRequest.status, ko: "요청 오류! url: "+url+", code: "+httpRequest.status}, language);
                        }
                    }
                };
                console.log(element.getAttribute("src"));
                httpRequest.open('GET', element.getAttribute("src"));
                httpRequest.send();
            });
        }*/
    };
    MartyScript.prototype.compilation = function(txt){
        txt = txt + "\n" + this.load_ms;
        this.Scriptwindow.push(...this.var);
        this.Scriptwindow.push(...this.function);
        this.Scriptwindow.push(...this.typedef);

        var Script = [];
        Script.push(...this.Scriptwindow);

        var Scriptvar = [];
        Scriptvar.push(...this.var);
        var Scriptfunction = [];
        Scriptfunction.push(...this.function);
        var Scripttypedef = [];
        Scripttypedef.push(...this.typedef);

        var compilationTXTs = [];
        var compilationTXT = txt;

        var error = this.error;
        var language = this.language;

        var txts = txt.split("");
        var istypedefs = [];
        this.typedef.forEach(function(element){
            istypedefs.push({txt: element.name, arr: [0, 0, 0], to: element.to});//strToArr(element.name), to: element.to});
        });
        var isvars = [];
        this.var.forEach(function(element){
            isvars.push({txt: element.name, arr: [0, 0, 0], to: element.to});//strToArr(element.name), to: element.to});
        });

        var i = 0;
        var txts_i = 0;
        txts.forEach(function(element){
            compilationTXTs[txts_i] = {type: "null", name: "null", txt: txts[i]};
            compilationTXT = compilationTXT + element;
            istypedefs.forEach(function(istypedef){
                if(istypedef.arr[0] == 1 && (element == ";" || element == "\n")){
                    if(istypedef.arr[1].includes("=")){
                        var split = istypedef.arr[1].split("=");
                        if(split[0].includes("-")){
                            error({en: "Variable names cannot contain '-'. Would you like to use '_' instead?", 
                            ko: "변수명은 '-'가 들어갈 수 없습니다. 대신 '_'를 사용하시겠습니까?"}, language);
                            return "error";
                        }
                        var replace = split[0].substr(1).replace(/ /g, '-');
                        var substr = "";
                        /*if(replace.substr(replace.length - 1) == "-"){
                            substr = replace.substr(2, replace.length - 3);
                        } else {
                            substr = replace.substr(2, replace.length - 2);
                        }*/
                        substr = replace.replace(/-/g, '');
                        var varpush = istypedef.to(substr, split[1]);
                    } else {
                        if(istypedef.arr[1].includes("-")){
                            error({en: "Variable names cannot contain '-'. Would you like to use '_' instead?", 
                            ko: "변수명은 '-'가 들어갈 수 없습니다. 대신 '_'를 사용하시겠습니까?", language});
                            return "error";
                        }
                        var replace = istypedef.arr[1].replace(/ /g, '');
                        var varpush = istypedef.to(replace, null);
                    }
                    console.log(varpush);
                    Scriptvar.push(varpush);
                    compilationTXTs[txts_i] = {type: varpush.type, name: varpush.name, txt: varpush.to};
                    istypedef.arr[0] = 0;
                    istypedef.arr[1] = "";
                    compilationTXT = compilationTXT.substr(0, compilationTXT.length - (i - istypedef.arr[2]));
                }
                if(istypedef.arr[0] == 1){
                    istypedef.arr[1] = istypedef.arr[1] + element;
                    compilationTXTs[txts_i] = undefined;
                    txts_i--;
                }
                var isok = 1;
                var j = 0;
                strToArr(istypedef.txt).forEach(function(el){
                    var k = istypedef.txt.length - (j + 1);
                    if(txts[i-k] != el){
                        isok = 0;
                    }
                    j++;
                });
                if(isok){
                    istypedef.arr[0] = 1;
                    istypedef.arr[1] = "";
                    istypedef.txt.split("").forEach(function(el){
                        compilationTXTs[txts_i] = undefined;
                        txts_i--;
                    });
                    istypedef.arr[2] = i;
                }
            });/*
            isvars.forEach(function(isvar){
                if(isvar.arr[0] == 1 && (element == ";" || element == "\n")){
                    console.log(isvar.arr[1]);
                    //Script.push(varpush);
                }
                var isok = 1;
                var j = 0;
                isvar.txt.split("").forEach(function(el){
                    var k = isvar.txt.length - (j + 1);
                    if(txts[i-k] != el){
                        isok = 0;
                    }
                    j++;
                    //console.log(el);
                });
                if(isok){
                    isvar.arr[0] = 1;
                    isvar.arr[1] = "";
                    isvar.txt.split("").forEach(function(el){
                        compilationTXTs[txts_i] = undefined;
                        txts_i--;
                    });
                    console.log(element);
                }
                if(isvar.arr[0] == 1){
                    isvar.arr[1] = isvar.arr[1] + element;
                    compilationTXTs[txts_i] = undefined;
                    txts_i--;
                    console.log(element);
                    compilationTXT = compilationTXT.substr(0, compilationTXT.length - (isvar.txt.length));
                }
            });*/
            i++;
            txts_i++;
        });
        console.log(compilationTXTs);
        console.log(compilationTXT);
        this.Scriptwindow = Script;
        this.var = Scriptvar;
        this.function = Scriptfunction;
        this.typedef = Scripttypedef;
    };

    window["MartyScript"] = MartyScript;
})();
