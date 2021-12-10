window.dom = {
	find(node) {
		return document.querySelectorAll(node)
	},
	style(node, name, value) {
		if (arguments.length === 3) {
			node.style[name] = value
		} else if (arguments.length === 2) {
			if (typeof name === 'string') {
				// typeof：返回一个字符串，表示未经计算的操作数的类型，可能为"number"、"boolean"、"string"等。
				return node.style[name]
			} else if (name instanceof Object) {
				// instanceof：检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上，结果为"true"或者"false"。
				for (let key in name) {
					node.style[key] = name[key] // 变量要使用 [] 括起来，name[key] 是变量 name 的值。
				}
			}
		}
	},
	each(nodeList, fn) {
		for (let i = 0; i < nodeList.length; i++) {
			fn.call(null, nodeList[i])
		}
	},
}
