xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET', 'https://xxxxx', true);
xmlhttp.setRequestHeader("X-BceeIT-Token", 'token');

var data;
var alb_modle;
var ctx;
var picture;

function refreshAlbSelect(){
    account = document.getElementById('awsAccount').value;

    // clear all options in ALB select
    albSelect = document.getElementById('alb');
    albSelect.length = 0;

    data.forEach(function(x){
        if (x.awsAccount == account) {

            x.albs.forEach(function(y){
                ops = document.createElement('option')
                ops.text = y.albName


                ops.value = y.albName
                albSelect.add(ops)

            })

        }
    });

    get_alb_modle()
}

function get_ctx(){
    var canvas = document.getElementById('canvas')
    return canvas.getContext('2d')
}


console.log('hello');
data = {
    "scheme": "internet-facing",
    "listeners": [
        {
            "port": 443,
            "targetGroups": [
                {
                    "name": "bgw-notify",
                    "hostHeader": "None",
                    "pathPattern": "/bgw-notify/*",
                    "port": 8112,
                    "instances": [
                        "i-0cdf5cb8823e80f0e",
                        "i-03647b8192592fa4f"
                    ],
                    "healthCheck": "/bgw-notify/v1/"
                },
                {
                    "name": "bgw-mocker",
                    "hostHeader": "None",
                    "pathPattern": "/bgw-mocker/*",
                    "port": 8113,
                    "instances": [
                        "i-03647b8192592fa4f",
                        "i-0cdf5cb8823e80f0e"
                    ],
                    "healthCheck": "/bgw-mocker/v1/"
                },
                {
                    "name": "bgw-lakala",
                    "hostHeader": "None",
                    "pathPattern": "/bgw-lakala/*",
                    "port": 8114,
                    "instances": [
                        "i-03647b8192592fa4f",
                        "i-0cdf5cb8823e80f0e"
                    ],
                    "healthCheck": "/bgw-lakala/v1/"
                },
                {
                    "name": "msg-broker",
                    "hostHeader": "None",
                    "pathPattern": "/msg-broker/*",
                    "port": 8103,
                    "instances": [
                        "i-03647b8192592fa4f",
                        "i-0cdf5cb8823e80f0e"
                    ],
                    "healthCheck": "/msg-broker/v1/"
                },
                {
                    "name": "sms-worker",
                    "hostHeader": "None",
                    "pathPattern": "/sms-worker/*",
                    "port": 8104,
                    "instances": [
                        "i-03647b8192592fa4f",
                        "i-0cdf5cb8823e80f0e"
                    ],
                    "healthCheck": "/sms-worker/v1/"
                },
                {
                    "name": "push-worker",
                    "hostHeader": "None",
                    "pathPattern": "/push-worker/*",
                    "port": 8105,
                    "instances": [
                        "i-03647b8192592fa4f",
                        "i-0cdf5cb8823e80f0e"
                    ],
                    "healthCheck": "/push-worker/v1/"
                },
                {
                    "name": "pallas",
                    "hostHeader": "None",
                    "pathPattern": "/pallas/*",
                    "port": 8102,
                    "instances": [
                        "i-03647b8192592fa4f",
                        "i-0cdf5cb8823e80f0e"
                    ],
                    "healthCheck": "/pallas/v1/"
                },
                {
                    "name": "token",
                    "hostHeader": "None",
                    "pathPattern": "/token/*",
                    "port": 8101,
                    "instances": [
                        "i-0cdf5cb8823e80f0e",
                        "i-03647b8192592fa4f"
                    ],
                    "healthCheck": "/token/v1/"
                },
                {
                    "name": "vesta",
                    "hostHeader": "None",
                    "pathPattern": "/vesta/*",
                    "port": 8111,
                    "instances": [
                        "i-0cdf5cb8823e80f0e",
                        "i-03647b8192592fa4f"
                    ],
                    "healthCheck": "/vesta/v1/"
                },
                {
                    "name": "token",
                    "hostHeader": "None",
                    "pathPattern": "None",
                    "port": 8101,
                    "instances": [
                        "i-0cdf5cb8823e80f0e",
                        "i-03647b8192592fa4f"
                    ],
                    "healthCheck": "/token/v1/"
                }
            ]
        },
        {
            "port": 80,
            "targetGroups": [
                {
                    "name": "token",
                    "hostHeader": "None",
                    "pathPattern": "/token/*",
                    "port": 8101,
                    "instances": [
                        "i-0cdf5cb8823e80f0e",
                        "i-03647b8192592fa4f"
                    ],
                    "healthCheck": "/token/v1/"
                },
                {
                    "name": "pallas",
                    "hostHeader": "None",
                    "pathPattern": "/pallas/*",
                    "port": 8102,
                    "instances": [
                        "i-03647b8192592fa4f",
                        "i-0cdf5cb8823e80f0e"
                    ],
                    "healthCheck": "/pallas/v1/"
                },
                {
                    "name": "msg-broker",
                    "hostHeader": "None",
                    "pathPattern": "/msg-broker/*",
                    "port": 8103,
                    "instances": [
                        "i-03647b8192592fa4f",
                        "i-0cdf5cb8823e80f0e"
                    ],
                    "healthCheck": "/msg-broker/v1/"
                },
                {
                    "name": "sms-worker",
                    "hostHeader": "None",
                    "pathPattern": "/sms-worker/*",
                    "port": 8104,
                    "instances": [
                        "i-03647b8192592fa4f",
                        "i-0cdf5cb8823e80f0e"
                    ],
                    "healthCheck": "/sms-worker/v1/"
                },
                {
                    "name": "push-worker",
                    "hostHeader": "None",
                    "pathPattern": "/push-worker/*",
                    "port": 8105,
                    "instances": [
                        "i-03647b8192592fa4f",
                        "i-0cdf5cb8823e80f0e"
                    ],
                    "healthCheck": "/push-worker/v1/"
                },
                {
                    "name": "vesta",
                    "hostHeader": "None",
                    "pathPattern": "/vesta/*",
                    "port": 8111,
                    "instances": [
                        "i-0cdf5cb8823e80f0e",
                        "i-03647b8192592fa4f"
                    ],
                    "healthCheck": "/vesta/v1/"
                },
                {
                    "name": "bgw-notify",
                    "hostHeader": "None",
                    "pathPattern": "/bgw-notify/*",
                    "port": 8112,
                    "instances": [
                        "i-0cdf5cb8823e80f0e",
                        "i-03647b8192592fa4f"
                    ],
                    "healthCheck": "/bgw-notify/v1/"
                },
                {
                    "name": "bgw-mocker",
                    "hostHeader": "None",
                    "pathPattern": "/bgw-mocker/*",
                    "port": 8113,
                    "instances": [
                        "i-03647b8192592fa4f",
                        "i-0cdf5cb8823e80f0e"
                    ],
                    "healthCheck": "/bgw-mocker/v1/"
                },
                {
                    "name": "bgw-lakala",
                    "hostHeader": "None",
                    "pathPattern": "/bgw-lakala/*",
                    "port": 8114,
                    "instances": [
                        "i-03647b8192592fa4f",
                        "i-0cdf5cb8823e80f0e"
                    ],
                    "healthCheck": "/bgw-lakala/v1/"
                },
                {
                    "name": "token",
                    "hostHeader": "None",
                    "pathPattern": "None",
                    "port": 8101,
                    "instances": [
                        "i-0cdf5cb8823e80f0e",
                        "i-03647b8192592fa4f"
                    ],
                    "healthCheck": "/token/v1/"
                }
            ]
        }
    ],
    "albName": "oort"
};
// data = {
//     "scheme": "internet-facing",
//     "listeners": [
//         {
//             "port": 443,
//             "targetGroups": [
//                 {
//                     "name": "sst-ccee-cc",
//                     "hostHeader": "sst.ccee.cc",
//                     "pathPattern": "None",
//                     "port": 8085,
//                     "instances": [
//                         "i-0845c1a623643ec79",
//                         "i-08deff8186d593068"
//                     ],
//                     "healthCheck": "/"
//                 },
//                 {
//                     "name": "jydt-ccee-cc",
//                     "hostHeader": "jydt.ccee.cc",
//                     "pathPattern": "None",
//                     "port": 8084,
//                     "instances": [
//                         "i-0845c1a623643ec79",
//                         "i-08deff8186d593068"
//                     ],
//                     "healthCheck": "/"
//                 },
//                 {
//                     "name": "www-ccee-cc",
//                     "hostHeader": "None",
//                     "pathPattern": "None",
//                     "port": 8082,
//                     "instances": [
//                         "i-0845c1a623643ec79",
//                         "i-08deff8186d593068"
//                     ],
//                     "healthCheck": "/"
//                 }
//             ]
//         },
//         {
//             "port": 80,
//             "targetGroups": [
//                 {
//                     "name": "ccee-cc-direct-to-https",
//                     "hostHeader": "None",
//                     "pathPattern": "None",
//                     "port": 8081,
//                     "instances": [
//                         "i-08deff8186d593068",
//                         "i-0845c1a623643ec79"
//                     ],
//                     "healthCheck": "/"
//                 }
//             ]
//         }
//     ],
//     "albName": "www-ccee-cc"
// };

function Relationship(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;

    this.lineMetric = function () {
        if (this.p1.y<this.p2.y){
            return [this.p1.get_dm(), this.p2.get_um()]

        }else{
            return [this.p2.get_dm(), this.p1.get_um()]
        }
    }
}

function RS() {
    this.elem = [];

    this.isExists = function (p) {
        var flag = false;

        for (var i in this.elem){
            if (this.elem[i].p1.id === p.p1.id && this.elem[i].p2.id === p.p2.id ||
                this.elem[i].p1.id === p.p2.id && this.elem[i].p2.id === p.p1.id){

                flag = true;
                break;
            }
        }

        return flag;
    };

    this.add = function (p) {
        if (!this.isExists(p))
            this.elem.push(p);
    };

    this.draw = function (ctx) {
        for (var i in this.elem){
            var thisElem = this.elem[i];
            var thisElemMetric = thisElem.lineMetric()
            //console.log(thisElem.lineMetric());

            ctx.beginPath();
            ctx.moveTo(thisElemMetric[0].x, thisElemMetric[0].y);
            ctx.lineTo(thisElemMetric[1].x, thisElemMetric[1].y);
            ctx.stroke();
        }
    }
}


function RelationshipFactory(){
    this.elem = [];

    this.isExists = function (t,i) {
        var flag = false;
        for (var i in this.elem){
            if (this.elem[i][0]===t && this.elem[i][1]===i){
                flag = true;
                break;
            }
        }
        return flag;
    };

    this.add = function (t, i) {
        // console.log(t, i);
        if (!this.isExists(t,i)){
            this.elem.push([t,i]);
        }
    };

    var result = [];
    this.getRelationship = function (ts, is) {
        for (var i in this.elem){

            var obj_t, obj_p;

            for (var j in ts.elem) {
                if (ts.elem[j].id === this.elem[i][0]) {
                    obj_t = ts.elem[j];
                    break;
                }
            }

            for (var k in is.elem){
                if (is.elem[k].id === this.elem[i][1]){
                    //console.log('---------');
                    //console.log(this.elem[i]);
                    //console.log(obj_t);
                    obj_p = is.elem[k].getPort(obj_t.port);
                    //console.log(obj_p);
                    //console.log('^^^^^^^^^^^^^^^^^^^')
                    break;
                }
            }

            result.push(new Relationship(obj_t, obj_p));
        }

        return result;
    }
}

function BE(){
    this.x = 0;
    this.y = 0;
    this.w = 150;
    this.h = 70;
    this.px = 10;  // internal padding for x
    this.py = 10;  // internal padding for y

    this.id = null;
    this.text = '';

    this.get_um = function () {
        return {x: this.x+this.w/2, y: this.y}
    };

    this.get_dm = function () {
        return {x:this.x+this.w/2, y:this.y + this.h}
    };

    this.get_lm = function () {
        return {x:this.x, y:this.y+this.h/2}
    };

    this.get_rm =function () {
        return {x:this.x + this.w, y:this.y+this.h/2}
    };

    this.get_c = function () {
        return {x:this.x+this.w/2, y: this.y+this.h/2}
    };

    this.updatexy = function (x,y) {
        this.x = x;
        this.y = y;


    };

    this.draw = function (ctx) {
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.stroke();
        ctx.fillText(this.text?this.text:this.id, this.x+this.px, this.y+this.py);
        // console.log(this.x, this.y, this.w, this.h)

    }
}

function ALB(albName, scheme){
    BE.call(this);

    this.h = 50;
    this.w = 200;
    this.albName = albName;
    this.scheme = scheme;
    this.id = albName
}

function Listener(port){
    BE.call(this);

    this.h = 50;
    this.w = 100;

    this.port = port;
    this.id = port;
}

function TargetGroup(data){
    BE.call(this);

    this.h = 100;
    this.w = 80;

    this.name = data.name;
    this.id = this.name;
    this.hostHeader = data.hostHeader;
    this.pathPattern = data.pathPattern;
    this.port = data.port;
    this.healthCheck = data.healthCheck;

    this.draw = function (ctx) {
        var string = this.id + '\n' + this.hostHeader + '\n' + this.pathPattern + '\n' + this.port
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.stroke();
        ctx.fillText(this.id, this.x+this.px, this.y+this.py);
        ctx.fillText(this.hostHeader, this.x+this.px, this.y+this.py+15);
        ctx.fillText(this.pathPattern, this.x+this.px, this.y+this.py+30);
        ctx.fillText(this.port, this.x+this.px, this.y+this.py+45);

        //console.log(this.x, this.y, this.w, this.h)

    }

}


function Port(port){
    BE.call(this);

    this.h = 30;
    this.w = 50;
    this.text = port;
    this.id = port;
    this.port = port;
    this.toInstance = '';
}

function Instance(data){
    BE.call(this);

    this.h = 100;
    this.w = 200;
    this.id = data.instanceId;

}

function InstancePort(data) {
    // data = {instanceId:'i-xxx',port:xxxx,otherKey:otherValue}
    // otherKey and otherValue used for extension

    this.id = data.instanceId;

    this.instance = new Instance(data);
    this.ports = [];
    this.ports.push(new Port(data.port));

    this.isExistsPort = function (port) {
        var flag = false;

        for (var i in this.ports){
            if (this.ports[i].id === port){
                flag = true;
                break;
            }
        }
        return flag;
    };

    this.addPort = function (port) {
        if (! this.isExistsPort(port)){
            this.ports.push(new Port(port))
        }
    };

    this.getPort = function (port) {
        for (var i in this.ports){
            if (this.ports[i].port === port){
                return this.ports[i];
            }
        }
        console.log('Bad:  ', port, this);
        return null;
    };


    this.vi = 100; //vertical interval space, used to define space between port objects and instances object
    this.hi = 10; //horizontal interval space, used to define space between port objects


    // 获取端口的最大宽度
    this.portWidth = function () {
        var m = 0;
        for (var i in this.ports){
            var thisWidth = this.ports[i].w;
            m = m<thisWidth?thisWidth:m;
        }
        return m;
    };

    // 修正本对象的宽度
    this.updateW = function () {
        var num = this.ports.length;
        var pw = (this.portWidth()+this.hi)*num - this.hi;
        var iw = this.instance.w;

        this.w =  pw>iw?pw:iw;
    };

    // 获取端口的最大高度
    this.elemMaxPortHeight = function () {
        var m = 0;
        for(var i in this.ports){
            var thisElemHeight = this.ports[i].h;
            m = m<thisElemHeight?thisElemHeight:m;
        }
        return m
    };

    // 计算本对象的所有端口对象的坐标
    this.updatePortsXY = function (x, y, is) {
        for (var i in this.ports){
            this.ports[i].updatexy(x+(this.portWidth()+is)*i,y)
        }

    };

    // 计算本对象及所属的所有的对象的坐标
    this.updatexy = function (x, y) {

        // 定义本对象的坐标
        this.x = x;
        this.y = y;

        // 定义端口对象的坐标
        this.updatePortsXY(this.x, this.y, this.hi);

        // 定义EC2实例的坐标
        this.instance.updatexy(this.x, this.y+this.elemMaxPortHeight()+this.vi);

    };


    this.draw = function (ctx) {

        var R = new RS();

        // EC实例对象绘图
        this.instance.draw(ctx);

        for (var i in this.ports){
            // 端口绘图
            this.ports[i].draw(ctx);

            R.add(new Relationship(this.instance, this.ports[i]))
        }

        // 绘制EC2 和 端口的关系线
        R.draw(ctx)
    }
}

function Drawer() {
    this.x = 0;
    this.y = 0;
    this.l = 20;    //left padding
    this.r = 20;    //right padding
    this.u = 20;    //upper padding
    this.d = 30;    //down padding
    this.i = 80;    //interval space

    this.elem = []; //store element like Alb, Listener, TargetGroup, ...

    // 检查是否某个obj已经存在，（根据obj的id）判断
    this.isExists = function (id) {
        var flag = false;
        for (var i in this.elem){
            if (this.elem[i].id === id){
                flag = true;
                break;

            }
        }
        return flag;
    };


    // 添加一个对象，添加前获取对象的id,检查是否已经存在一个相同ID值的对象，如果有则不添加
    // 如果成功添加返回true, 否则返回false
    this.add = function (obj) {
        if (!this.isExists(obj.id)){
            this.elem.push(obj);
            return true;
        }else{
            return false;
        }
    };

    // get the maxWidth of the elem
    this.bw = function () {
        var m = 0;
        for (var i in this.elem){
            var thisWidth = this.elem[i].w;
            m = m<thisWidth?thisWidth:m;
        }
        return m;
    };


    // get max height in the elem array
    this.elemMaxHeight = function () {
        var m = 0;
        for(var i in this.elem){
            var thisElemHeight = this.elem[i].h;
            m = m<thisElemHeight?thisElemHeight:m;
        }
        return m
    };

    // get the bottom y
    this.by = function () {
        return this.y+this.u+this.elemMaxHeight()+this.d;
    };

    this.getElemById = function (id) {
        for (var i in this.elem) {
            if (this.elem[i].id === id){
                return this.elem[i]
            }
        };
        return null;
    };


    // 计算每一个子元素的x,y坐标； 坐标x是 初始位置x + （元素宽度+元素间隔）* 左边元素个数; 坐标y不变
    this.elemUpdateXY = function (x,y,is) {
        for (var i in this.elem){
            this.elem[i].updatexy(x+(this.bw()+is)*i,y)
        }
    };

    this.updatexy = function (x,y) {
        this.x = x;
        this.y = y;
        this.elemUpdateXY(this.x + this.l, this.y+this.u, this.i)

    };

    this.draw = function (ctx) {
        for (var i in this.elem){
            this.elem[i].draw(ctx)
        }

    };

    this.setInternalSpace = function (d) {
        this.i = d;

    };

    this.setUpPadding = function (d) {
        this.u = d;

    }
}


function IPS() {
    Drawer.call(this);



    // 根据id获取一个Instance对象，如果没有找到就返回null
    this.getInstance = function (id) {
        for (var i in this.elem){
            if (this.elem[i].id === id){
                return this.elem[i]
            }
        }
        return null;
    };




    this.add = function (data) {
        var obj = this.getInstance(data.instanceId);

        if (obj){
            // 已经有了这样的一个EC2实例，只需要添加端口即可
            // console.log('已经有了这样的一个EC2实例，只需要添加端口即可');
            // console.log(data);
            // console.log(obj);
            obj.addPort(data.port);
            obj.updateW();
            // console.log('OK---------------');
            return obj.getPort(data.port);
        }else{
            // 添加EC2实例和端口
            var obj = new InstancePort(data);
            this.elem.push(obj);
            return obj.getPort(data.port);
        }


    }
}






function B(){
    this.as = new Drawer();
    this.ls = new Drawer();
    this.ts = new Drawer();
    this.is = new IPS();

    this.rs = new RS();

    this.RSF = new RelationshipFactory();


    this.ts.setInternalSpace(30);
    this.ts.setUpPadding(80);
    this.is.setUpPadding(50)

    this.init = function (data) {

        //register alb set object
        var obj_alb = new ALB(data.albName, data.scheme);
        this.as.add(obj_alb);

        for(var listenerIndex in data.listeners){
            var thisListener = data.listeners[listenerIndex];

            // register listener set object
            var obj_listener = new Listener(thisListener.port);
            this.ls.add(obj_listener);
            this.rs.add(new Relationship(obj_alb, obj_listener));

            //console.log(thisListener)

            for(var tgIndex in thisListener.targetGroups){
                var thisTG = thisListener.targetGroups[tgIndex];
                //console.log(tgIndex)

                // register targetGroup set object
                var obj_targetGroup = new TargetGroup(thisTG);
                var isAdded = this.ts.add(obj_targetGroup);
                if (isAdded){
                    this.rs.add(new Relationship(obj_listener, obj_targetGroup));
                }else{

                    // 获取已经保存了的targetgroup,并和此listener建立联系
                    this.rs.add(new Relationship(obj_listener, this.ts.getElemById(thisTG.name)));
                }




                for (var i in thisTG.instances){
                    var thisInstance = thisTG.instances[i];

                    // 存储EC2PORT对象
                    var instancePortData = {instanceId:thisInstance,port:thisTG.port};
                    var obj_portInInstance = this.is.add(instancePortData);

                    this.RSF.add(thisTG.name, thisInstance);

                    // if (obj_portInInstance){
                    //     this.rs.add(new Relationship(obj_targetGroup, obj_portInInstance));
                    // }else{
                    //     this.RSF.add(thisTG.name, thisInstance);
                    //     console.log('Returned null when expected a obj_portInInstance');
                    // }


                    // 创建一个数据对象，传递给IPS, IPS判断是否要添加Instance,还是要添加port
                    // IPS返回一个关系体， 这个关系体是TargetGroup 与 端口的关系，用来后期绘图
                }



            }
        }

        var r = this.RSF.getRelationship(this.ts,this.is);
        for (var j in r){
            //console.log(r[j]);
            this.rs.elem.push(r[j])
        }

        // // 初始化Instance实例对象
        // this.is.populateInstances();
        //
        // // 初始化端口对象
        // var ports = this.is.getPorts();
        // for (var i in ports){
        //     this.ps.elem.push(new Port(ports[i]))
        // }



    };



    // 计算坐标
    this.layout = function (x,y) {
        this.as.x = x;
        this.as.y = y;

        this.as.updatexy(x,y);
        this.ls.updatexy(x,this.as.by()+this.ls.u);
        this.ts.updatexy(x,this.ls.by()+this.ts.u);
        this.is.updatexy(x,this.ts.by()+this.is.u);

    };


    // 绘图
    this.draw = function (ctx) {
        this.as.draw(ctx);
        this.ls.draw(ctx);
        this.ts.draw(ctx);
        this.is.draw(ctx);

        this.rs.draw(ctx);
    }
}




function Picture(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.picture = new B();

    this.clear = function () {
        this.picture = null;
        this.picture = new B();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };



    this.init = function (data) {
        this.picture.init(data);

    };

    this.layout = function (x, y) {
        this.picture.layout(x, y);
    };

    this.draw = function () {
        this.picture.draw(this.ctx);
    }

}



function get_alb_modle(){
    account = document.getElementById('awsAccount').value
    alb = document.getElementById('alb').value
    console.log(account + ' ' + alb)

    data.forEach(function(x){

        if (x.awsAccount == account) {
            console.log(x.awsAlias+' '+x.awsAccount+' '+account)
            x.albs.forEach(function(y){

                if (y.albName == alb) {
                    console.log(y)
                    alb_modle = y
                    return y
                }
            })

        }
    });


    picture.clear();
    picture.init(alb_modle);
    picture.layout(10,10);
    picture.draw();


    //picture.draw(ctx)


}

xmlhttp.onreadystatechange = function(){
    if ((xmlhttp.readyState===4) && (xmlhttp.status === 200)) {

        picture = new Picture('canvas');


        data = JSON.parse(xmlhttp.responseText);
        awsAccountSelect = document.getElementById('awsAccount');

        data.forEach(function(x){
            ops = document.createElement('option')
            ops.text = x.awsAlias + ' ' + x.awsAccount
            ops.value = x.awsAccount
            awsAccountSelect.add(ops)
        });


        awsAccountSelect.onchange = refreshAlbSelect;
        awsAccountSelect.addEventListener('onchange', refreshAlbSelect());

        document.getElementById('alb').onchange = get_alb_modle;
        document.getElementById('alb').onselect = get_alb_modle;


        get_alb_modle();





    }
};

xmlhttp.send();


