function defineReactive(data, key, val) {
    observe(val); //
    var dep = new Dep()

    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            if (true) {
                dep.addSub(watcher)
            }
            return val;
        },
        set: function (newVal) {
            if (val === newVal) {
                return
            }
            val = newVal;
            console.log('属性' + key + '已经被监听了，现在值为：' + newVal.toString());
            dep.notify()
        }
    })
}

function observe(data) {
    if (!data || typeof data !== 'object') {
        return;
    }

    Object.keys(data).forEach(key => {
        defineReactive(data, key, data[key])
    })
}

function Dep() {
    this.subs = []
}

Dep.prototype = {
    addSub: function (sub) {
        this.subs.push(sub)
    },
    notify: function () {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}

// var library = {
//     book1: {
//         name: ''
//     },
//     book2: ''
// }

// observe(library)

// library.book1.name = 'vue权威指南'
// library.book2 = '没有此书籍'