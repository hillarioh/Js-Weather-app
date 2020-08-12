import * as Element from './elements';

export default function changeBackground(climate) {
  const gradient = 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.35))';
  const images = [
    'https://images.unsplash.com/photo-1516038858785-1cf85ef58b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1595884589048-639ac0efef99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1506588345361-5e12b7840845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1532178910-7815d6919875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80',
  ];
  switch (climate) {
    case 'clouds':
      Element.myContainer.style = `background-Image: ${gradient},url(${images[3]})`;
      break;
    case 'rain':
    case 'drizzle':
      Element.myContainer.style = `background-image: ${gradient},url(${images[0]})`;
      break;
    case 'clear':
      Element.myContainer.style = `background-image: ${gradient},url(${images[2]})`;
      break;
    default:
      Element.myContainer.style = 'background: linear-gradient(147deg, #757a7dbe 0%, #edf395f5 74%)';
  }
}
