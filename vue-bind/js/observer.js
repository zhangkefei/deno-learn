/**
 * 对给定数据对象单个属性进行数据劫持。递归
 * @param {*} data 
 * @param {*} key 
 * @param {*} val 
 */
function defineReactive(data, key, val) {
    observe(val); //
    const dep = new Dependence()

    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get() {
            if (Dependence.target) {
                dep.addSub(Dependence.target)
            }
            return val;
        },
        set(newVal) {
            if (val === newVal) {
                return
            }
            val = newVal;
            dep.notify()
        }
    })
}

/**
 * 对一个数据对象进行劫持
 * @param {*} data 
 */
function observe(data) {
    if (!data || typeof data !== 'object') {
        return;
    }

    Object.keys(data).forEach(key => {
        defineReactive(data, key, data[key])
    })
}