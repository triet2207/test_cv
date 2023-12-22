import Contents from "./Contents";

const About = () => {
  return (
    <div>
      <Contents lable="about me" />
      <p className="text-gray-400">
        The most common thing we get asked for is resume help. We are happy to
        check (and recheck) your resume for free. However, please read through
        this first so it's in the best shape it can be. If we see these errors,
        we are just going to redirect you here. If you don't have these errors,
        send it to us in a Google doc, so we can redline it and add comments for
        you.
      </p>
    </div>
  );
};

export default About;
