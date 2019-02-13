function strxll(str){
    for(key in str){
        this[key] = str[key]
    }
    this.index = [0,0,[]];
    this.id = document.querySelector('#'+str.id);
    this.start();
}
strxll.prototype={
    constructor:strxll,
    start:function(){
        this.underline();//下划线函数
    },
    cbz:function(){
        if(this.wrong){
            for(key in this.wrong){
                for(let i=0;i<this.str.length;i++){
                    this.str[i]=this.str[i].replace(key,this.wrong[key]);
                }
            }
        }
    },
    setI:null,
    underline:function(){
        console.log(this.index[2])
        this.cbz();
        this.setI = setInterval(()=>{
            if(this.wrong){
                for(key in this.wrong){
                if(this.str[this.index[0]].slice(this.index[1]-1,this.index[1]) == this.wrong[key] ){
                    console.log(this.str[this.index[0]].slice(this.index[1]-1,this.index[1]))
                    this.index[1] -=2;
                    for(key in this.wrong){
                            for(let i=0;i<this.str.length;i++){
                                this.str[i]=this.str[i].replace(this.wrong[key],key);
                            }
                        }
                }
                }
            }
            this.index[1]++;
            if(this.index[1] > this.str[this.index[0]].length){//一段话检测是否加载完成
                this.cbz();
                this.index[0]++;//加载完成换下一个
                if(this.index[0]>=this.str.length){//判断数组是否加载完
                    clearInterval(this.setI)
                    this.huidiao();
                    return false;
                }
                this.index[1] = 0;
            }
            this.id.innerHTML = this.str[this.index[0]].slice(0,this.index[1]);
        },this.data);

        setInterval(()=>{
           if(this.id.className == ''){
                this.id.className = 'p'
           }else{
                this.id.className = ''
           } ;
        },150)
    },
    huidiao:function(){

    }

}