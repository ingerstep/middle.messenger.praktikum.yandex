import Component from '../services/Component.ts';

export default function renderDOM(query: string, block: Component<object>) {
  const root = document.querySelector(query) as HTMLElement;

  if (!root) {
    throw new Error('Нет корневого элемента!');
  }

  root.innerHTML = '';
  root.append(block.getContent());

  return root;
}
