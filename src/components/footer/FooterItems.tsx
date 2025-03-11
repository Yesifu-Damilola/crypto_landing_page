import useScrollAnimation from "../../hooks/useScrollAnimation";
import "animate.css"

const FooterItems = ({ lists, title }: FooterItemsProps) => {
const {ref, inView} = useScrollAnimation()

  return (
    <div
    ref={ref}
    className={`space-y-4 p-3  ${
            inView ? "animate__animated animate__bounceIn" : "opacity-0"
          } `}>
      <h3 className="w-full h-7 font-semibold font-inter text-xl leading-7 text-dark dark:text-white">
        {title}
      </h3>
      <div className="space-y-4 ">
        {lists.map((list) => (
          <p
            key={list}
            className="w-full font-normal font-inter text-base leading-6 text-dark-300 dark:text-white"
          >
            {list}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FooterItems;

interface FooterItemsProps {
  title: string;
  lists: string[];
}
