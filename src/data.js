import componentsImg from './assets/LinkedIn.png';
import propsImg from './assets/geekforgeek.png';
import jsxImg from './assets/github.gif';
import stateImg from './assets/instagram.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Linkedin',
    description:
      'Make sure to connect with me... I showcasing my professional experience, skills, and achievements',
  },
  {
    image: jsxImg,
    title: 'Github',
    description:
      "I've developed many project to store, manage, and maintaining my code repositories.",
  },
  {
    image: propsImg,
    title: 'GeeksforGeeks',
    description:
      "I've completed more than of 300 DSA problems in both geeksforgeeks and leetcode",
  },
  {
    image: stateImg,
    title: 'Instagram',
    description:
      'I have an more than of 12k followers on instagram... make sure to follow',
  },
];

export const EXAMPLES = {
  Linkedin: {
    title: 'Linkedin',
    description:
      'I almost developed 4 personal projects, 20+ certificates, Good portfolio and verified 9+ frontend skills.',
    code: `profile url: www.linkedin.com/in/venkateshyadav92`
,
  },
  Github: {
    title: 'Github',
    description:
      'i have an good github profile with code repository... access code from there and upskill yourself.',
    code: `
<div>
  <h1>Welcome {Venkatesh S}</h1>
  <p>Github url : https://github.com/Venkiyadav92</p>
</div>`,
  },
  GeeksforGeeks: {
    title: 'GeeksforGeeks',
    description:
      'good knowledge in problem solving and interested in optimising the code.... solve more than of 300+ problems in DSA',
    code: `<p>
    geeksforgeeks url : https://www.geeksforgeeks.org/user/vyvenkater3xs/
    leetcode url: https://leetcode.com/u/vyvenkateshyadav/
</p>`,
  },
  Instagram: {
    title: 'Instagram',
    description:
      'I am follow regularly tech reels and coding pages which helps us to learn and upskills.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Follow Button</button>
      {isVisible && <p>profile page! : @iam_venki92</p>}
    </div>
  );
}`,
  },
};
