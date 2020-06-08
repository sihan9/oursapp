var Snow=(function () {
    function Snow(parent,left,speed) {
        if(speed){
            this.speed=speed;
        }
        if(left){
            this.left=left;
        }else{
            this.left=Math.floor(Math.random()*parent.clientWidth)
        }
        this.createSnow(parent);
    }
    Snow.prototype={
        snowImg:null,
        speed:2,
        angle:0,
        alpha:1,
        left:0,
        angleSpeed:2,
        scale:1,
        alphaSpeed:0.003,
        createSnow:function (parent) {
            if(!this.snowImg){
                this.snowImg=new Image();
                this.snowImg.src="./src/img/snow.png";
                this.snowImg.style.position="absolute";
                Object.assign(this.snowImg.style,{
                    position:"absolute",
                    left:this.left+"px",
                    top:"-30px"
                })
            }
            parent.appendChild(this.snowImg);
            return this.snowImg;
        },
        update:function () {
            if(!this.snowImg)return;
            this.angle+=this.angleSpeed;
            this.alpha=this.alpha-this.alphaSpeed;
            if(this.alpha===0){
                this.dispose();
                return;
            }
            Object.assign(this.snowImg.style,{
                top:this.snowImg.offsetTop+this.speed+"px",
                transform:"rotate("+this.angle+"deg) scale("+this.scale+")",
                opacity:this.alpha
            });
            if(this.snowImg.offsetTop>document.documentElement.clientHeight){
                this.dispose();
            }
        },
        dispose:function () {
            if(!this.snowImg)return;
            this.snowImg.remove();
            this.snowImg=null;
        }
        
    };
    Snow.prototype.constructor=Snow;
    return Snow;
})();
var Main=(function (Snow) {
    function Main() {
        document.body.style.overflow="hidden";
        this.animationBind=this.animation.bind(this);
        this.animationBind();
    }
    Main.prototype={
        arr:[],
        times:5,
        animationBind:null,
        animation:function () {
            requestAnimationFrame(this.animationBind);
            this.randomTimeCreate();
            var arrs=[];
            for(var i=0;i<this.arr.length;i++){
                this.arr[i].update();
                if(this.arr[i].snowImg){
                    arrs.push(this.arr[i]);
                }else{
                    this.arr[i]=null;
                }
            }
            this.arr=arrs;
        },
        randomTimeCreate:function () {
            this.times--;
            if(this.times>0)return;
            this.times=Math.floor(Math.random()*20);
            this.createSnow();
        },
        createSnow:function () {
            var snow=new Snow(document.body);
            snow.scale=Math.random()*0.5+0.5;
            snow.angleSpeed=snow.angleSpeed*snow.scale;
            snow.alphaSpeed=snow.alphaSpeed*snow.scale;
            snow.speed=snow.speed*snow.scale;
            this.arr.push(snow);
        }
    };
    Main.prototype.constructor = Main;
    return Main;
})(Snow);