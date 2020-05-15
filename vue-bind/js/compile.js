class Compile {
    constructor(el, vm) {
        this.vm = vm
        this.el = document.querySelector(el)
        this.fragment = null
        this.init()
    }

    /**
     * 给定一个元素后，对这个元素的所有子元素进行初始化操作。
     * 包括赋值、绑定观察者、绑定事件等。
     */
    init() {
        if (this.el) {
            this.fragment = this.nodeToFragment(this.el)
            this.compileElement(this.fragment)
            this.el.appendChild(this.fragment)
        } else {
            console.error('the el is not exist!');
        }
    }

    /**
     * 为了解析模板，首先需要获取到dom元素，然后对dom元素上含有指令的节点进行处理。
     * 因为这个环节对dom操作比较频繁，所以可以先建一个fragment片段，将需要解析的
     * dom节点存入fragment片段里再进行处理，在内存中处理比较快，处理完成后，再一
     * 次性插入到页面中。
     * @param {*} el 
     */
    nodeToFragment(el) {
        var fragment = document.createDocumentFragment()
        var child = el.firstChild
        while (child) {
            fragment.appendChild(child)
            child = el.firstChild
        }
        return fragment
    }

    /**
     * 递归编译元素。根据节点类型，进行数值绑定或事件绑定
     * @param {*} el 
     */
    compileElement(el) {
        let childNodes = el.childNodes
        Array.prototype.slice.call(childNodes).forEach(node => {
            let reg = /\{\{(.*)\}\}/;
            let text = node.textContent

            if (this.isElementNode(node)) {
                this.compile(node)
            } else if (this.isTextNode(node) && reg.test(text)) {
                this.compileText(node, reg.exec(text)[1])
            }

            if (node.childNodes && node.childNodes.length) {
                this.compileElement(node)
            }
        })
    }

    /**
     * 编译非文本节点的入口函数。事件绑定或数据绑定
     * @param {*} node 
     */
    compile(node) {
        var nodeAttrs = node.attributes
        var self = this;
        Array.prototype.forEach.call(nodeAttrs, function (attr) {
            var attrName = attr.name
            if (self.isDirective(attrName)) {
                var exp = attr.value
                var dir = attrName.substring(2)
                if (self.isEventDirective(dir)) {
                    self.compileEvent(node, self.vm, exp, dir)
                } else {
                    self.compileModel(node, self.vm, exp, dir)
                }
                node.removeAttribute(attrName)
            }
        })
    }

    /**
     * 为一个文本元素赋值，并绑定观察者
     * @param {*} node 
     * @param {*} exp 
     */
    compileText(node, exp) {
        let initText = this.vm[exp]
        this.updateText(node, initText)
        new Watcher(this.vm, exp, value => {
            this.updateText(node, value)
        })
    }

    /**
     * 编译事件绑定元素
     * 为元素绑定事件
     * @param {*} node 
     * @param {*} vm 
     * @param {*} exp 
     * @param {*} dir 
     */
    compileEvent(node, vm, exp, dir) {
        let eventType = dir.split(':')[1]
        let cb = vm.methods && vm.methods[exp]

        if (eventType && cb) {
            node.addEventListener(eventType, cb.bind(vm), false)
        }
    }

    /**
     * 编译一个绑定元素
     * 初始化时，为一个绑定元素赋值，并创建观察者
     * @param {*} node 
     * @param {*} vm 
     * @param {*} exp 
     * @param {*} dir 
     */
    compileModel(node, vm, exp, dir) {
        let val = vm[exp]
        this.modelUpdater(node, val)
        new Watcher(vm, exp, value => {
            this.modelUpdater(node, value)
        })

        node.addEventListener('input', e => {
            let newValue = e.target.value
            if (val === newValue) {
                return
            }
            vm[exp] = newValue
            val = newValue
        })
    }

    /**
     * 更新一个节点的文本内容。
     * @param {*} node 
     * @param {*} value 
     */
    updateText(node, value) {
        node.textContent = typeof value == 'undefined' ? '' : value
    }

    /**
     * 更新一个节点的值。
     * @param {*} node 
     * @param {*} value 
     */
    modelUpdater(node, value) {
        node.value = typeof value === 'undefined' ? '' : value
    }

    /**
     * 判断一个属性名是否是一个指令。格式为：'v-model'
     * @param {*} attr 
     */
    isDirective(attr) {
        return attr.indexOf('v-') === 0;
    }

    /**
     * 判断一个指令是否是事件绑定指令。格式为：'on:click'
     * @param {*} dir 
     */
    isEventDirective(dir) {
        return dir.indexOf('on:') === 0
    }

    /**
     * 判断节点是否是一个 元素 节点，例如 <p> 和 <div>。
     * https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType
     * @param {*} node 
     */
    isElementNode(node) {
        return node.nodeType == 1
    }

    /**
     * 判断节点是否是一个文本节点。Element 或者 Attr 中实际的文字
     * https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType
     * @param {*} node 
     */
    isTextNode(node) {
        return node.nodeType == 3
    }
}