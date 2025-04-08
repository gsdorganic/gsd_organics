import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            tempore harum id, asperiores numquam exercitationem similique quia
            magni aliquam molestiae modi praesentium inventore temporibus quidem
            reprehenderit deserunt cumque? Quod, esse!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur a recusandae repudiandae corporis asperiores! Quisquam
            blanditiis libero nulla sunt necessitatibus vitae praesentium quae
            optio culpa. Aliquid modi reprehenderit mollitia ducimus.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            quidem minima eius, laudantium pariatur nam quod, veniam cum vero
            beatae aliquam dolor accusamus quo tempora aspernatur laborum ad, ex
            dicta.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            itaque tenetur fuga dicta corrupti quidem modi blanditiis dolores
            beatae sint, esse nesciunt numquam ratione perferendis, ipsam odit
            nulla cupiditate in?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            itaque tenetur fuga dicta corrupti quidem modi blanditiis dolores
            beatae sint, esse nesciunt numquam ratione perferendis, ipsam odit
            nulla cupiditate in?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            itaque tenetur fuga dicta corrupti quidem modi blanditiis dolores
            beatae sint, esse nesciunt numquam ratione perferendis, ipsam odit
            nulla cupiditate in?
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
