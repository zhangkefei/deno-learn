/**
 * 订阅者
 */
class Dependence {
    constructor() {
        this.subs = []
    }

    /**
     * 添加订阅者
     * @param {*} sub 
     */
    addSub(sub) {
        this.subs.push(sub)
    }

    /**
     * 通知订阅者
     */
    notify() {
        this.subs.forEach(sub => {
            sub.update && sub.update()
        })
    }
}