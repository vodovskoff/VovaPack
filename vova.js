export default function sayHello(parent) {
    const node = document.createElement('div');
    node.innerText = 'vova pak';
    parent.append(node);
}