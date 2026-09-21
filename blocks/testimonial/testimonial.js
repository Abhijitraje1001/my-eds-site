export default function decorate(block) {
  const ul = document.createElement('ul');

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    const [quote, author] = row.children;

    quote.className = 'testimonial-quote';
    author.className = 'testimonial-author';

    li.append(quote, author);
    ul.append(li);
  });

  block.replaceChildren(ul);
}