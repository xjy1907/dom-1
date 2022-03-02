window.dom = {
    find(selector, scope) {
        //const div = dom.find('#test>.red')[0]
        //const divList = dom.find('.red') // 获取多个 div.red 元素
        return (scope || document).querySelectorAll(selector);
    },
    style(node, name, value) {
        if (arguments.length === 3) {
          // dom.style(div, 'color', 'red')
          node.style[name] = value
        } else if (arguments.length === 2) {
          if (typeof name === "string") {
            // dom.style(div, 'color')
            return node.style[name]
          } else if (name instanceof Object) {
            // dom.style(div, {color: 'red'})
            const object = name
            for (let key in object) {
              node.style[key] = object[key]
            }
          }
        }
      },
    each(nodeList, fn){
        //dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素
        for(let i=0; i<nodeList.length; i++) {
            fn.call(null,nodeList[i]);
        }
    },
}