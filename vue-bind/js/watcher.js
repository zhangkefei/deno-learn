/**
 * 观察者
 */
class Watcher {
    constructor(vm, exp, cb) {
        this.cb = cb;
        this.vm = vm;
        this.exp = exp;
        this.value = this.get() //
    }

    /**
     * 观察者钩子
     */
    update() {
        this.run()
    }

    /**
     * 更新内部值，并调用回调函数（将结果反映在UI上）
     */
    run() {
        let newVal = this.vm.data[this.exp]
        let oldVal = this.value
        if (newVal !== oldVal) {
            this.value = newVal
            this.cb.call(this.vm, newVal, oldVal)
        }
    }

    /**
     * 通过读取数据对象的值进行订阅（数据对象已经进行了劫持操作）
     */
    get() {
        Dependence.target = this;
        let value = this.vm.data[this.exp]
        Dependence.target = null;
        return value
    }
}