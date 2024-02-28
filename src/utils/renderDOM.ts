import Component from '../services/Component.ts';

export default function renderDOM(block: Component<object>) {
  const root = document.querySelector('#app') as HTMLElement;

  if (!root) {
    throw new Error('Нет корневого элемента!');
  }

  root.innerHTML = '';
  root.appendChild(block.getContent());
}
