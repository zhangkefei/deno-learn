class SelfVue {
    constructor(options) {
        this.data = options.data
        this.methods = options.methods

        Object.keys(this.data).forEach(key => {
            this.proxyKeys(key)
        })

        Object.keys(this.methods).forEach(key => {
            this.proxyEvent(key)
        })

        observe(this.data)

        new Compile(options.el, this)
        options.mounted.call(this)
    }

    /**
     * 将组件中的data代理到selfVue的属性
     * @param {string} key 
     */
    proxyKeys(key) {
        Object.defineProperty(this, key, {
            enumerable: false,
            configurable: true,
            get() {
                return this.data[key]
            },
            set(newVal) {
                this.data[key] = newVal
            }
        })
    }

    /**
     * 代理事件
     * @param {*} key 
     */
    proxyEvent(key) {
        this[key] = this.methods[key]
    }
}