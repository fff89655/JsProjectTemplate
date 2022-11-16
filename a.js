class EventDispatcher {
    addEventListener(type, listener) {
    }
    fireEvent(event) {
    }
    removeEventListener(type, listener) {
    }
}
class Point {
    static init(x, y) {
        let p = new Point();
        p.x = x, p.y = y;
        return p;
    }
}
class Size {
    static init(width, height) {
        let s = new Size();
        s.width = width, s.height = height;
        return s;
    }
}
class DisplayObject extends EventDispatcher {
    constructor() {
        super();
        this.visible = true;
    }
    draw() { }
}
