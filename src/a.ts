class EventDispatcher{	
    	
    addEventListener(type:string, listener:Function){

    }
    
    fireEvent(event:string){

    }

    removeEventListener(type:string, listener:Function){
    }

}

class Point{
    public x:number;
    public y:number;
    static init(x:number, y:number):Point{
        let p = new Point();
        p.x = x, p.y = y;
        return p;
    }
}

class Size{
    public width:number;
    public height:number;
    static init(width:number, height:number):Size{
        let s = new Size();
        s.width = width,s.height = height;
        return s;
    }
}

class DisplayObject extends EventDispatcher{
    xy:Point;
    size:Size;
    name:string;
    mask : DisplayObject;
    visible : Boolean;
    constructor(){
        super();
        this.visible = true;
    }
    
    private draw():void{}
}