window.dom = {
    find(selector, scope) {
        //const div = dom.find('#test>.red')[0]
        //const divList = dom.find('.red') // 获取多个 div.red 元素
        return (scope || document).querySelectorAll(selector);
    },
    style(node, key, value) {
        node.style[key] = value;
    },
    each(nodeList, fn){
        //dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素
        for(let i=0; i<nodeList.length; i++) {
            fn.call(null,nodeList[i]);
        }
    },
}